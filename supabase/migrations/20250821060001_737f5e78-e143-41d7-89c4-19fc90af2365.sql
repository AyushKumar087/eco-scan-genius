-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  department TEXT,
  avatar_url TEXT,
  points INTEGER DEFAULT 0,
  total_submissions INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create e_waste_items table
CREATE TABLE public.e_waste_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  item_name TEXT NOT NULL,
  category TEXT NOT NULL,
  department TEXT NOT NULL,
  condition TEXT NOT NULL,
  image_url TEXT,
  ai_classification TEXT,
  status TEXT DEFAULT 'submitted',
  estimated_value DECIMAL(10,2) DEFAULT 0,
  co2_saved DECIMAL(10,2) DEFAULT 0,
  weight_kg DECIMAL(10,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create qr_codes table
CREATE TABLE public.qr_codes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  item_id UUID NOT NULL REFERENCES public.e_waste_items(id) ON DELETE CASCADE,
  qr_code_data TEXT NOT NULL UNIQUE,
  location TEXT DEFAULT 'Storage',
  last_scanned_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create vendor_pickups table
CREATE TABLE public.vendor_pickups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  item_id UUID NOT NULL REFERENCES public.e_waste_items(id) ON DELETE CASCADE,
  vendor_name TEXT NOT NULL,
  pickup_date DATE NOT NULL,
  pickup_time TIME NOT NULL,
  status TEXT DEFAULT 'scheduled',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create compliance_reports table
CREATE TABLE public.compliance_reports (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  report_type TEXT NOT NULL,
  report_data JSONB,
  file_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.e_waste_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.qr_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vendor_pickups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.compliance_reports ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Profiles are viewable by everyone" ON public.profiles
FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile" ON public.profiles
FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
FOR INSERT WITH CHECK (auth.uid() = user_id);

-- E-waste items policies
CREATE POLICY "Users can view their own items" ON public.e_waste_items
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own items" ON public.e_waste_items
FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own items" ON public.e_waste_items
FOR UPDATE USING (auth.uid() = user_id);

-- QR codes policies (readable by everyone for scanning)
CREATE POLICY "QR codes are viewable by everyone" ON public.qr_codes
FOR SELECT USING (true);

CREATE POLICY "Users can create QR codes for their items" ON public.qr_codes
FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.e_waste_items 
    WHERE id = item_id AND user_id = auth.uid()
  )
);

-- Vendor pickups policies
CREATE POLICY "Users can view pickups for their items" ON public.vendor_pickups
FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.e_waste_items 
    WHERE id = item_id AND user_id = auth.uid()
  )
);

CREATE POLICY "Users can create pickups for their items" ON public.vendor_pickups
FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.e_waste_items 
    WHERE id = item_id AND user_id = auth.uid()
  )
);

-- Compliance reports policies
CREATE POLICY "Users can view their own reports" ON public.compliance_reports
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own reports" ON public.compliance_reports
FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_e_waste_items_updated_at
  BEFORE UPDATE ON public.e_waste_items
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();