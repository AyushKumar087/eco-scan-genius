import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Recycle, 
  Smartphone, 
  BarChart3, 
  Shield, 
  Award,
  Leaf,
  QrCode,
  Users,
  TrendingUp,
  CheckCircle,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import heroImage from '@/assets/hero-eco-waste.jpg';

const Index = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Smart E-Waste Submission',
      description: 'Easy-to-use forms for logging electronic waste with AI-powered categorization',
      color: 'text-primary'
    },
    {
      icon: QrCode,
      title: 'QR Code Tracking',
      description: 'Generate unique QR codes for each item to track movement from submission to disposal',
      color: 'text-success'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Interactive charts showing environmental impact, trends, and department contributions',
      color: 'text-warning'
    },
    {
      icon: Award,
      title: 'Gamification System',
      description: 'Earn points, badges, and compete on leaderboards to encourage sustainable practices',
      color: 'text-success'
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Automated reporting and compliance certificates for regulatory requirements',
      color: 'text-primary'
    },
    {
      icon: Globe,
      title: 'Blockchain Integration',
      description: 'Secure, transparent tracking using blockchain technology for complete audit trails',
      color: 'text-accent-foreground'
    }
  ];

  const stats = [
    { label: 'Items Recycled', value: '2,847', icon: Recycle },
    { label: 'CO₂ Saved', value: '1,250kg', icon: Leaf },
    { label: 'Active Users', value: '342', icon: Users },
    { label: 'Departments', value: '8', icon: TrendingUp },
  ];

  const benefits = [
    'Reduce environmental impact by 60%',
    'Automated compliance reporting',
    'Real-time tracking and analytics',
    'Gamified user engagement',
    'Blockchain-secured audit trails',
    'AI-powered waste categorization'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
                🌱 Smart E-Waste Management System
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Transform Your
                <span className="gradient-hero bg-clip-text text-transparent"> E-Waste </span>
                Into Impact
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Revolutionary AI-powered platform for sustainable electronic waste management. 
                Track, recycle, and make a real environmental difference with gamified engagement 
                and blockchain-secured transparency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-hero text-white font-semibold shadow-float" asChild>
                  <Link to="/submit">
                    Submit E-Waste <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="shadow-card" asChild>
                  <Link to="/dashboard">View Dashboard</Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-12">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
                      <IconComponent className="h-8 w-8 text-primary animate-eco-pulse" />
                      <div>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative animate-fade-in-scale">
              <img
                src={heroImage}
                alt="Smart E-Waste Management"
                className="rounded-2xl shadow-float w-full h-auto"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete E-Waste Management Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From AI-powered categorization to blockchain tracking, our platform 
              provides everything needed for sustainable e-waste management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-1 animate-fade-in-scale border-border/50"
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Why Choose EcoScan?
              </h2>
              <p className="text-xl text-muted-foreground">
                Experience the future of sustainable e-waste management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4 animate-slide-up">
                    <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-success" />
                    </div>
                    <p className="text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>

              <Card className="shadow-float gradient-card p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                      <Leaf className="h-8 w-8 text-success animate-leaf-float" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Make a Real Impact
                    </h3>
                    <p className="text-muted-foreground">
                      Join hundreds of organizations already making a difference
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-success">85%</p>
                      <p className="text-sm text-muted-foreground">Waste Diverted</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">2.4T</p>
                      <p className="text-sm text-muted-foreground">CO₂ Reduced</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Sustainability Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of organizations already making a positive environmental impact 
              through smart e-waste management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-semibold" asChild>
                <Link to="/submit">Start Submitting E-Waste</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Recycle className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">EcoScan</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Smart E-Waste Management System - Building a Sustainable Future
          </p>
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/compliance" className="hover:text-primary transition-colors">Compliance</Link>
            <Link to="/analytics" className="hover:text-primary transition-colors">Analytics</Link>
            <Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            © 2024 EcoScan. All rights reserved. 🌱
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;