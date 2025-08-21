import { useState } from "react";
import { useForm } from "react-hook-form";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Package, Recycle, Smartphone, Laptop, Monitor, HeadphonesIcon, Camera, Printer, Tablet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

interface FormData {
  itemName: string;
  category: string;
  department: string;
  condition: string;
  description?: string;
  weight?: number;
  quantity: number;
}

const Submit = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: { quantity: 1 }
  });
  const { toast } = useToast();
  const { user } = useAuth();

  const categories = [
    { id: 'Computers & Laptops', label: 'Laptops', icon: Laptop },
    { id: 'Mobile Phones', label: 'Smartphones', icon: Smartphone },
    { id: 'Monitors & TVs', label: 'Monitors', icon: Monitor },
    { id: 'Cables & Accessories', label: 'Headphones', icon: HeadphonesIcon },
    { id: 'Other Electronics', label: 'Cameras', icon: Camera },
    { id: 'Other Electronics', label: 'Printers', icon: Printer },
    { id: 'Batteries', label: 'Tablets', icon: Tablet },
  ];

  const departments = [
    'IT Department',
    'HR Department', 
    'Finance Department',
    'Marketing Department',
    'Operations Department',
    'Research & Development',
    'Customer Service',
    'Administration'
  ];

  const onSubmit = async (data: FormData) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to submit e-waste items",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate AI classification
      const aiClassifications = ["Recyclable", "Reusable", "Hazardous"];
      const randomClassification = aiClassifications[Math.floor(Math.random() * aiClassifications.length)];
      
      // Calculate estimated values based on category and condition
      const baseValues = {
        "Computers & Laptops": 50,
        "Mobile Phones": 25,
        "Batteries": 5,
        "Cables & Accessories": 2,
        "Monitors & TVs": 30,
        "Other Electronics": 15
      };
      
      const conditionMultipliers = {
        "working": 1.0,
        "partial": 0.6,
        "broken": 0.3
      };
      
      const baseValue = baseValues[data.category as keyof typeof baseValues] || 15;
      const multiplier = conditionMultipliers[data.condition as keyof typeof conditionMultipliers] || 0.5;
      const estimatedValue = baseValue * multiplier * data.quantity;
      const co2Saved = (data.weight || 1) * 2.5 * data.quantity; // Rough estimate: 2.5kg CO2 saved per kg recycled

      // Insert into database
      const { data: insertedItem, error } = await supabase
        .from("e_waste_items")
        .insert({
          user_id: user.id,
          item_name: data.itemName,
          category: data.category,
          department: data.department,
          condition: data.condition,
          weight_kg: (data.weight || 1) * data.quantity,
          ai_classification: randomClassification,
          estimated_value: estimatedValue,
          co2_saved: co2Saved,
          status: "submitted"
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      // Generate QR code entry
      const qrCodeData = `ewaste_${insertedItem.id}_${Date.now()}`;
      await supabase
        .from("qr_codes")
        .insert({
          item_id: insertedItem.id,
          qr_code_data: qrCodeData,
          location: "Storage"
        });

      // Update user profile points and submissions
      const { data: profile } = await supabase
        .from("profiles")
        .select("points, total_submissions")
        .eq("user_id", user.id)
        .single();

      if (profile) {
        await supabase
          .from("profiles")
          .update({
            points: (profile.points || 0) + Math.floor(estimatedValue),
            total_submissions: (profile.total_submissions || 0) + 1
          })
          .eq("user_id", user.id);
      }

      toast({
        title: "E-Waste Submitted Successfully!",
        description: `Your ${data.itemName} has been classified as ${randomClassification}. You earned ${Math.floor(estimatedValue)} points!`,
      });
      
      // Reset form
      reset({ quantity: 1 });
      setImageFile(null);
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "An error occurred while submitting your item",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const watchedCategory = watch("category");
  const watchedCondition = watch("condition");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Submit E-Waste Item
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Register your electronic waste for proper recycling and tracking.
              Help create a sustainable future! 🌱
            </p>
          </div>

          {/* Form Card */}
          <Card className="shadow-float animate-fade-in-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Upload className="h-6 w-6 text-primary" />
                Item Registration Form
              </CardTitle>
              <CardDescription>
                Please provide detailed information about your e-waste item
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Item Name & Quantity */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="itemName">Item Name *</Label>
                    <Input
                      id="itemName"
                      placeholder="e.g., iPhone 12, Dell Laptop XPS 13"
                      {...register("itemName", { required: "Item name is required" })}
                      className="mt-1"
                    />
                    {errors.itemName && (
                      <p className="text-sm text-destructive mt-1">{errors.itemName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="quantity">Quantity *</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      {...register("quantity", { required: true, min: 1 })}
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <Label>Category *</Label>
                  <Select
                    value={watchedCategory}
                    onValueChange={(value) => setValue("category", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Computers & Laptops">Computers & Laptops</SelectItem>
                      <SelectItem value="Mobile Phones">Mobile Phones</SelectItem>
                      <SelectItem value="Monitors & TVs">Monitors & TVs</SelectItem>
                      <SelectItem value="Cables & Accessories">Cables & Accessories</SelectItem>
                      <SelectItem value="Batteries">Batteries</SelectItem>
                      <SelectItem value="Other Electronics">Other Electronics</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.category && (
                    <p className="text-sm text-destructive mt-1">Category is required</p>
                  )}
                </div>

                {/* Department */}
                <div>
                  <Label htmlFor="department">Department *</Label>
                  <Select
                    value={watch("department")}
                    onValueChange={(value) => setValue("department", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.department && (
                    <p className="text-sm text-destructive mt-1">Department is required</p>
                  )}
                </div>

                {/* Condition */}
                <div>
                  <Label>Condition *</Label>
                  <RadioGroup
                    value={watchedCondition}
                    onValueChange={(value) => setValue("condition", value)}
                    className="flex flex-wrap gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="working" id="working" />
                      <Label htmlFor="working">Working</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="partial" id="partial" />
                      <Label htmlFor="partial">Partially Working</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="broken" id="broken" />
                      <Label htmlFor="broken">Not Working</Label>
                    </div>
                  </RadioGroup>
                  {errors.condition && (
                    <p className="text-sm text-destructive mt-1">Condition is required</p>
                  )}
                </div>

                {/* Weight */}
                <div>
                  <Label htmlFor="weight">Estimated Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    min="0.1"
                    placeholder="e.g., 2.5"
                    {...register("weight", { valueAsNumber: true })}
                    className="mt-1"
                  />
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Additional details about the item condition, accessories included, etc."
                    {...register("description")}
                    className="mt-1"
                    rows={3}
                  />
                </div>

                {/* File Upload */}
                <div>
                  <Label htmlFor="image">Upload Photo (Optional)</Label>
                  <div className="mt-1">
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Label
                      htmlFor="image"
                      className="cursor-pointer flex items-center justify-center w-full p-6 border-2 border-dashed border-border rounded-lg hover:border-primary/50 transition-colors duration-200"
                    >
                      <div className="text-center">
                        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          {imageFile ? imageFile.name : 'Click to upload or drag and drop'}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PNG, JPG up to 10MB
                        </p>
                      </div>
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      reset({ quantity: 1 });
                      setImageFile(null);
                    }}
                    disabled={isSubmitting}
                  >
                    Reset Form
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
                    disabled={isSubmitting}
                  >
                    <Package className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Submitting..." : "Submit E-Waste Item"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Submit;