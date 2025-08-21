import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart3, 
  TrendingUp, 
  Leaf, 
  Recycle,
  Download,
  Calendar,
  Users,
  Building,
  Globe,
  Zap
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const Analytics = () => {
  const summaryStats = [
    { label: 'Total E-Waste Processed', value: '2,847 items', change: '+12%', icon: Recycle, color: 'text-primary' },
    { label: 'CO₂ Emissions Saved', value: '1,250 kg', change: '+18%', icon: Leaf, color: 'text-success' },
    { label: 'Landfill Waste Diverted', value: '3,420 kg', change: '+25%', icon: Globe, color: 'text-warning' },
    { label: 'Active Contributors', value: '342 users', change: '+8%', icon: Users, color: 'text-accent-foreground' },
  ];

  const departmentData = [
    { department: 'IT Department', items: 892, percentage: 31, co2Saved: 425 },
    { department: 'Operations', items: 567, percentage: 20, co2Saved: 280 },
    { department: 'Marketing', items: 445, percentage: 16, co2Saved: 195 },
    { department: 'HR Department', items: 334, percentage: 12, co2Saved: 145 },
    { department: 'Finance', items: 289, percentage: 10, co2Saved: 120 },
    { department: 'R&D', items: 320, percentage: 11, co2Saved: 85 },
  ];

  const categoryBreakdown = [
    { category: 'Smartphones', count: 789, percentage: 28, trend: '+15%' },
    { category: 'Laptops', count: 445, percentage: 16, trend: '+8%' },
    { category: 'Monitors', count: 367, percentage: 13, trend: '+12%' },
    { category: 'Printers', count: 298, percentage: 10, trend: '+5%' },
    { category: 'Tablets', count: 234, percentage: 8, trend: '+20%' },
    { category: 'Accessories', count: 714, percentage: 25, trend: '+18%' },
  ];

  const monthlyTrends = [
    { month: 'Jan', items: 180, co2: 95 },
    { month: 'Feb', items: 220, co2: 115 },
    { month: 'Mar', items: 280, co2: 145 },
    { month: 'Apr', items: 310, co2: 165 },
    { month: 'May', items: 290, co2: 155 },
    { month: 'Jun', items: 350, co2: 185 },
  ];

  const topContributors = [
    { name: 'Alice Johnson', department: 'IT', items: 34, points: 1890 },
    { name: 'Mike Chen', department: 'Marketing', items: 28, points: 1650 },
    { name: 'Sarah Davis', department: 'Operations', items: 26, points: 1480 },
    { name: 'Tom Wilson', department: 'Finance', items: 22, points: 1250 },
    { name: 'Lisa Brown', department: 'HR', items: 19, points: 1180 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 animate-slide-up">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Analytics Dashboard 📊
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive insights into your e-waste management impact
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Select defaultValue="6months">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month">Last Month</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {summaryStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="shadow-card animate-fade-in-scale">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground mb-2">{stat.value}</p>
                      <Badge variant="outline" className="text-success border-success">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {stat.change}
                      </Badge>
                    </div>
                    <IconComponent className={`h-10 w-10 ${stat.color} animate-eco-pulse`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Department Performance */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                Department Performance
              </CardTitle>
              <CardDescription>E-waste contributions by department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentData.map((dept, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{dept.department}</span>
                      <div className="text-right">
                        <span className="text-sm font-medium text-primary">{dept.items} items</span>
                        <span className="text-xs text-muted-foreground ml-2">({dept.percentage}%)</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full transition-all duration-500"
                        style={{ width: `${dept.percentage * 3}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      CO₂ Saved: {dept.co2Saved} kg
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Category Breakdown */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-success" />
                Category Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categoryBreakdown.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors duration-200">
                    <div>
                      <p className="font-medium text-foreground">{category.category}</p>
                      <p className="text-sm text-muted-foreground">{category.count} items</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">{category.percentage}%</p>
                      <Badge variant="outline" className="text-xs text-success border-success">
                        {category.trend}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Trends & Top Contributors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Monthly Trends Chart Placeholder */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-warning" />
                Monthly Trends
              </CardTitle>
              <CardDescription>E-waste processing and environmental impact over time</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder for Chart */}
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-muted-foreground mb-4">
                  <span>Items Processed</span>
                  <span>CO₂ Saved (kg)</span>
                </div>
                {monthlyTrends.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-accent/30">
                    <span className="font-medium text-foreground">{trend.month}</span>
                    <div className="flex gap-4">
                      <span className="text-primary font-medium">{trend.items}</span>
                      <span className="text-success font-medium">{trend.co2}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Contributors */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent-foreground" />
                Top Contributors
              </CardTitle>
              <CardDescription>Leading e-waste contributors this period</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topContributors.map((contributor, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                      index === 0 ? 'bg-warning/10 border-2 border-warning/20' :
                      index === 1 ? 'bg-muted border border-border' :
                      index === 2 ? 'bg-accent/20 border border-border' :
                      'bg-accent/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-warning text-warning-foreground' :
                        index === 1 ? 'bg-muted-foreground text-background' :
                        index === 2 ? 'bg-accent text-accent-foreground' :
                        'bg-secondary text-secondary-foreground'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{contributor.name}</p>
                        <p className="text-xs text-muted-foreground">{contributor.department}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-success">{contributor.points} pts</p>
                      <p className="text-xs text-muted-foreground">{contributor.items} items</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Environmental Impact Summary */}
        <Card className="mt-8 shadow-float gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <Leaf className="h-6 w-6 text-success animate-leaf-float" />
              Environmental Impact Summary
            </CardTitle>
            <CardDescription>Your collective contribution to sustainability</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-success" />
                </div>
                <p className="text-3xl font-bold text-success mb-2">85%</p>
                <p className="text-sm text-muted-foreground">Landfill Diversion Rate</p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary mb-2">2.4T</p>
                <p className="text-sm text-muted-foreground">Total CO₂ Emissions Prevented</p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-4">
                  <Recycle className="h-8 w-8 text-warning" />
                </div>
                <p className="text-3xl font-bold text-warning mb-2">95%</p>
                <p className="text-sm text-muted-foreground">Successful Recycling Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mt-8">
          <Button size="lg" className="gradient-hero" asChild>
            <a href="/submit">Submit More E-Waste</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/compliance">View Compliance Reports</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;