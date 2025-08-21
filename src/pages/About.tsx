import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Leaf,
  Users,
  Target,
  Award,
  Mail,
  Phone,
  MapPin,
  Send,
  Recycle,
  Globe,
  Shield,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const About = () => {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      description: 'Environmental Engineering PhD with 15+ years in sustainable technology',
      expertise: 'AI & Machine Learning, Environmental Science'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Sustainability',
      description: 'Former EPA consultant specializing in e-waste management policies',
      expertise: 'Regulatory Compliance, Waste Management'
    },
    {
      name: 'Lisa Thompson',
      role: 'Lead Developer',
      description: 'Full-stack developer passionate about environmental tech solutions',
      expertise: 'Blockchain Technology, Web Development'
    },
    {
      name: 'David Kumar',
      role: 'UX Designer',
      description: 'Human-centered design expert focused on sustainable user experiences',
      expertise: 'User Experience, Gamification Design'
    }
  ];

  const values = [
    {
      icon: Leaf,
      title: 'Environmental Responsibility',
      description: 'Committed to reducing e-waste impact and promoting circular economy principles for a sustainable future.'
    },
    {
      icon: Shield,
      title: 'Transparency & Trust',
      description: 'Blockchain-based tracking ensures complete transparency in the e-waste management process.'
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Empowering individuals and organizations to make a collective environmental impact.'
    },
    {
      icon: Zap,
      title: 'Innovation & Technology',
      description: 'Leveraging cutting-edge AI and blockchain technology to revolutionize waste management.'
    }
  ];

  const stats = [
    { label: 'E-Waste Items Processed', value: '50,000+', icon: Recycle },
    { label: 'CO₂ Emissions Prevented', value: '125 Tons', icon: Leaf },
    { label: 'Organizations Served', value: '200+', icon: Users },
    { label: 'Countries Reached', value: '15', icon: Globe },
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Platform Launch',
      description: 'EcoScan officially launched with basic e-waste tracking capabilities'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Implemented AI-powered categorization system for automated waste classification'
    },
    {
      year: '2023',
      title: 'Blockchain Implementation',
      description: 'Added blockchain technology for transparent and immutable tracking records'
    },
    {
      year: '2024',
      title: 'Gamification Release',
      description: 'Launched gamification features to increase user engagement and participation'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Extended services to support international compliance standards'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-slide-up">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            🌱 About EcoScan
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Building a Sustainable
            <span className="gradient-hero bg-clip-text text-transparent"> Future </span>
            Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            EcoScan is revolutionizing electronic waste management through innovative AI technology, 
            blockchain transparency, and gamified engagement. We're on a mission to make sustainability 
            accessible, trackable, and rewarding for everyone.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="shadow-card animate-fade-in-scale text-center">
                  <CardContent className="p-6">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4 animate-eco-pulse" />
                    <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-card gradient-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To transform how the world manages electronic waste by providing intelligent, 
                  transparent, and engaging solutions that make sustainable practices accessible 
                  to everyone. We believe technology should serve the planet, and we're committed 
                  to creating tools that make environmental responsibility effortless and rewarding.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card gradient-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-success" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A world where electronic waste becomes a valuable resource through intelligent 
                  management and circular economy principles. We envision communities, organizations, 
                  and individuals working together through technology to achieve zero electronic 
                  waste to landfill and create a truly sustainable future.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at EcoScan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-float transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Key milestones in building the future of e-waste management</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 animate-fade-in-scale">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1 shadow-card">
                    <CardHeader>
                      <CardTitle>{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">Passionate experts dedicated to environmental technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-card hover:shadow-float transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{member.description}</p>
                  <Badge variant="outline" className="text-success border-success">
                    {member.expertise}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-xl text-muted-foreground">
                Have questions or want to partner with us? We'd love to hear from you!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>We'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input placeholder="John" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input placeholder="Doe" className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="john@company.com" className="mt-1" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input placeholder="Partnership Inquiry" className="mt-1" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      placeholder="Tell us about your e-waste management needs..." 
                      className="mt-1"
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full gradient-hero">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email Us</h3>
                        <p className="text-muted-foreground">contact@ecoscan.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-success" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Call Us</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-warning" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Visit Us</h3>
                        <p className="text-muted-foreground">123 Green Tech Way<br />Sustainability City, SC 12345</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-float gradient-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                      <Recycle className="h-8 w-8 text-success animate-eco-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Ready to Get Started?</h3>
                    <p className="text-muted-foreground mb-4">
                      Join the sustainability revolution today!
                    </p>
                    <div className="flex gap-2">
                      <Button className="flex-1 gradient-hero" asChild>
                        <Link to="/submit">Submit E-Waste</Link>
                      </Button>
                      <Button variant="outline" className="flex-1" asChild>
                        <Link to="/dashboard">View Dashboard</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;