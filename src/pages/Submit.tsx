import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Upload, Smartphone, Laptop, Tablet, Printer, Camera, HeadphonesIcon, Monitor } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';

const Submit = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    itemName: '',
    category: '',
    department: '',
    condition: '',
    description: '',
    quantity: '1',
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const categories = [
    { id: 'smartphones', label: 'Smartphones', icon: Smartphone },
    { id: 'laptops', label: 'Laptops', icon: Laptop },
    { id: 'tablets', label: 'Tablets', icon: Tablet },
    { id: 'printers', label: 'Printers', icon: Printer },
    { id: 'cameras', label: 'Cameras', icon: Camera },
    { id: 'headphones', label: 'Headphones', icon: HeadphonesIcon },
    { id: 'monitors', label: 'Monitors', icon: Monitor },
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.itemName || !formData.category || !formData.department || !formData.condition) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate submission success
    toast({
      title: "E-Waste Submitted Successfully! ♻️",
      description: "Your item has been registered and QR code generated.",
    });

    // Reset form
    setFormData({
      itemName: '',
      category: '',
      department: '',
      condition: '',
      description: '',
      quantity: '1',
    });
    setSelectedFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Item Name & Quantity */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="itemName">Item Name *</Label>
                    <Input
                      id="itemName"
                      placeholder="e.g., iPhone 12, Dell Laptop XPS 13"
                      value={formData.itemName}
                      onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <Label>Category *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, category: category.id })}
                          className={`p-4 rounded-lg border-2 transition-all duration-200 flex flex-col items-center gap-2 hover:scale-105 ${
                            formData.category === category.id
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <IconComponent className="h-6 w-6" />
                          <span className="text-sm font-medium">{category.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Department */}
                <div>
                  <Label htmlFor="department">Department *</Label>
                  <Select
                    value={formData.department}
                    onValueChange={(value) => setFormData({ ...formData, department: value })}
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
                </div>

                {/* Condition */}
                <div>
                  <Label>Condition *</Label>
                  <RadioGroup
                    value={formData.condition}
                    onValueChange={(value) => setFormData({ ...formData, condition: value })}
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
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Additional details about the item condition, accessories included, etc."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                          {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
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
                      setFormData({
                        itemName: '',
                        category: '',
                        department: '',
                        condition: '',
                        description: '',
                        quantity: '1',
                      });
                      setSelectedFile(null);
                    }}
                  >
                    Reset Form
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 gradient-hero text-white font-semibold"
                  >
                    Submit E-Waste Item
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