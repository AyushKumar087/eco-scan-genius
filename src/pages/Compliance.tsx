import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  FileText, 
  Download, 
  CheckCircle,
  AlertCircle,
  Calendar,
  Award,
  Clock,
  Users,
  Building,
  Globe
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const Compliance = () => {
  const complianceStats = [
    { label: 'Compliance Rate', value: '98.5%', status: 'excellent', icon: Shield },
    { label: 'Reports Generated', value: '47', status: 'good', icon: FileText },
    { label: 'Certifications', value: '12', status: 'good', icon: Award },
    { label: 'Days Since Last Audit', value: '23', status: 'warning', icon: Clock },
  ];

  const reports = [
    {
      id: 'RPT-001',
      title: 'Monthly E-Waste Disposal Report',
      period: 'January 2024',
      status: 'Completed',
      type: 'PDF',
      size: '2.4 MB',
      generated: '2024-02-01',
      compliance: 'Fully Compliant'
    },
    {
      id: 'RPT-002',
      title: 'Environmental Impact Assessment',
      period: 'Q4 2023',
      status: 'Completed',
      type: 'Excel',
      size: '1.8 MB',
      generated: '2024-01-15',
      compliance: 'Fully Compliant'
    },
    {
      id: 'RPT-003',
      title: 'Vendor Certification Report',
      period: 'December 2023',
      status: 'Completed',
      type: 'PDF',
      size: '3.1 MB',
      generated: '2024-01-02',
      compliance: 'Fully Compliant'
    },
    {
      id: 'RPT-004',
      title: 'Department Audit Summary',
      period: 'January 2024',
      status: 'In Progress',
      type: 'PDF',
      size: '--',
      generated: '--',
      compliance: 'Pending Review'
    }
  ];

  const certificates = [
    {
      name: 'ISO 14001 Environmental Management',
      issuer: 'International Standards Organization',
      issued: '2023-06-15',
      expires: '2026-06-15',
      status: 'Valid'
    },
    {
      name: 'WEEE Compliance Certificate',
      issuer: 'Environmental Protection Agency',
      issued: '2023-09-01',
      expires: '2024-09-01',
      status: 'Expiring Soon'
    },
    {
      name: 'RoHS Compliance Certificate',
      issuer: 'Regulatory Compliance Board',
      issued: '2023-08-20',
      expires: '2025-08-20',
      status: 'Valid'
    },
    {
      name: 'Data Security Compliance',
      issuer: 'Cybersecurity Standards Board',
      issued: '2023-11-10',
      expires: '2024-11-10',
      status: 'Valid'
    }
  ];

  const auditLogs = [
    {
      date: '2024-01-16',
      action: 'Report Generated',
      user: 'System Admin',
      details: 'Monthly disposal report automatically generated',
      status: 'Success'
    },
    {
      date: '2024-01-15',
      action: 'Compliance Check',
      user: 'Alice Johnson',
      details: 'Vendor certification verification completed',
      status: 'Success'
    },
    {
      date: '2024-01-14',
      action: 'Certificate Renewal',
      user: 'Mike Chen',
      details: 'WEEE compliance certificate renewal initiated',
      status: 'Pending'
    },
    {
      date: '2024-01-13',
      action: 'Audit Started',
      user: 'Sarah Davis',
      details: 'Quarterly compliance audit commenced',
      status: 'In Progress'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'excellent': return 'text-success';
      case 'good': return 'text-primary';
      case 'warning': return 'text-warning';
      case 'error': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
      case 'fully compliant':
      case 'valid':
      case 'success': return 'default';
      case 'in progress':
      case 'pending review':
      case 'pending': return 'secondary';
      case 'expiring soon': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Compliance Management 🛡️
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automated compliance reporting, certificates, and audit trails for regulatory requirements
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {complianceStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="shadow-card animate-fade-in-scale">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className={`text-3xl font-bold ${getStatusColor(stat.status)}`}>{stat.value}</p>
                    </div>
                    <IconComponent className={`h-12 w-12 ${getStatusColor(stat.status)} animate-eco-pulse`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="reports" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="audit">Audit Logs</TabsTrigger>
            <TabsTrigger value="generate">Generate</TabsTrigger>
          </TabsList>

          {/* Reports Tab */}
          <TabsContent value="reports">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Compliance Reports
                </CardTitle>
                <CardDescription>Generated reports for regulatory compliance and audit purposes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports.map((report) => (
                    <div
                      key={report.id}
                      className="flex items-center justify-between p-6 border border-border rounded-lg hover:bg-accent/50 transition-all duration-200"
                    >
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-foreground text-lg">{report.title}</h3>
                            <p className="text-sm text-muted-foreground">{report.period} • {report.id}</p>
                          </div>
                          <Badge variant={getBadgeVariant(report.status)}>{report.status}</Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-4">
                          <div>
                            <p className="text-muted-foreground">Type</p>
                            <p className="font-medium">{report.type}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Size</p>
                            <p className="font-medium">{report.size}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Generated</p>
                            <p className="font-medium">{report.generated}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Compliance</p>
                            <Badge variant="outline" className="text-success border-success">
                              {report.compliance}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 ml-6">
                        <Button variant="outline" size="sm">
                          <FileText className="h-3 w-3 mr-2" />
                          View
                        </Button>
                        {report.status === 'Completed' && (
                          <Button variant="outline" size="sm">
                            <Download className="h-3 w-3 mr-2" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certificates Tab */}
          <TabsContent value="certificates">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-success" />
                  Compliance Certificates
                </CardTitle>
                <CardDescription>Active certifications and their renewal status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certificates.map((cert, index) => (
                    <Card key={index} className="border-border/50 hover:shadow-card transition-all duration-200">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{cert.name}</CardTitle>
                            <CardDescription>{cert.issuer}</CardDescription>
                          </div>
                          <Badge variant={getBadgeVariant(cert.status)}>{cert.status}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Issued:</span>
                            <span className="font-medium">{cert.issued}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Expires:</span>
                            <span className="font-medium">{cert.expires}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm" className="flex-1">
                            <FileText className="h-3 w-3 mr-2" />
                            View Certificate
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="h-3 w-3 mr-2" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Audit Logs Tab */}
          <TabsContent value="audit">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-warning" />
                  Audit Trail
                </CardTitle>
                <CardDescription>Comprehensive log of all compliance-related activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {auditLogs.map((log, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors duration-200">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        log.status === 'Success' ? 'bg-success/10' :
                        log.status === 'Pending' ? 'bg-warning/10' :
                        'bg-primary/10'
                      }`}>
                        {log.status === 'Success' ? (
                          <CheckCircle className="h-5 w-5 text-success" />
                        ) : log.status === 'Pending' ? (
                          <AlertCircle className="h-5 w-5 text-warning" />
                        ) : (
                          <Clock className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <p className="font-semibold text-foreground">{log.action}</p>
                          <p className="text-xs text-muted-foreground">{log.date}</p>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{log.details}</p>
                        <p className="text-xs text-muted-foreground">By {log.user}</p>
                      </div>
                      <Badge variant={getBadgeVariant(log.status)} className="ml-4">
                        {log.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Generate Reports Tab */}
          <TabsContent value="generate">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Generate New Report
                  </CardTitle>
                  <CardDescription>Create compliance reports for regulatory requirements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">Report Type</label>
                      <select className="w-full mt-1 p-2 border border-border rounded-lg bg-background">
                        <option>Monthly Disposal Report</option>
                        <option>Environmental Impact Assessment</option>
                        <option>Vendor Certification Report</option>
                        <option>Department Audit Summary</option>
                        <option>Compliance Overview</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground">Period</label>
                      <select className="w-full mt-1 p-2 border border-border rounded-lg bg-background">
                        <option>January 2024</option>
                        <option>February 2024</option>
                        <option>Q1 2024</option>
                        <option>Q4 2023</option>
                        <option>Custom Range</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground">Format</label>
                      <div className="flex gap-4 mt-2">
                        <label className="flex items-center gap-2">
                          <input type="radio" name="format" value="pdf" defaultChecked />
                          <span className="text-sm">PDF</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="format" value="excel" />
                          <span className="text-sm">Excel</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="format" value="csv" />
                          <span className="text-sm">CSV</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-hero">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-success" />
                    Compliance Dashboard
                  </CardTitle>
                  <CardDescription>Real-time compliance status overview</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-10 w-10 text-success" />
                    </div>
                    <h3 className="text-2xl font-bold text-success mb-2">98.5%</h3>
                    <p className="text-muted-foreground">Overall Compliance Score</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Environmental Standards</span>
                      <Badge variant="default">100%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Data Security</span>
                      <Badge variant="default">98%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Waste Management</span>
                      <Badge variant="default">99%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Vendor Compliance</span>
                      <Badge variant="secondary">95%</Badge>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Audit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Compliance;