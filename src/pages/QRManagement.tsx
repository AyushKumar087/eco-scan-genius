import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  QrCode, 
  Scan, 
  Download, 
  Search,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Truck,
  Package,
  Building
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const QRManagement = () => {
  const [scanInput, setScanInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const qrItems = [
    {
      id: 'QR001',
      itemName: 'iPhone 12',
      category: 'Smartphones',
      submittedBy: 'Alice Johnson',
      department: 'IT',
      status: 'Collected',
      location: 'Storage Facility A',
      submittedDate: '2024-01-15',
      lastScan: '2024-01-16 10:30',
      qrCode: 'ECO-2024-001-ABC123'
    },
    {
      id: 'QR002', 
      itemName: 'Dell Laptop XPS 13',
      category: 'Laptops',
      submittedBy: 'Mike Chen',
      department: 'Marketing',
      status: 'In Transit',
      location: 'En route to Recycler B',
      submittedDate: '2024-01-12',
      lastScan: '2024-01-16 14:15',
      qrCode: 'ECO-2024-002-DEF456'
    },
    {
      id: 'QR003',
      itemName: 'HP Printer LaserJet',
      category: 'Printers', 
      submittedBy: 'Sarah Davis',
      department: 'Operations',
      status: 'Processed',
      location: 'Recycling Complete',
      submittedDate: '2024-01-10',
      lastScan: '2024-01-15 09:45',
      qrCode: 'ECO-2024-003-GHI789'
    },
    {
      id: 'QR004',
      itemName: 'Samsung Tablet',
      category: 'Tablets',
      submittedBy: 'Tom Wilson', 
      department: 'Finance',
      status: 'Pending Pickup',
      location: 'Collection Point C',
      submittedDate: '2024-01-16',
      lastScan: '2024-01-16 16:20',
      qrCode: 'ECO-2024-004-JKL012'
    }
  ];

  const trackingHistory = [
    {
      timestamp: '2024-01-16 16:20',
      location: 'Collection Point C',
      status: 'Item Submitted',
      description: 'E-waste item registered in system',
      icon: Package
    },
    {
      timestamp: '2024-01-16 14:15',
      location: 'Scanning Station',
      status: 'QR Code Generated',
      description: 'Unique QR code created and assigned',
      icon: QrCode
    },
    {
      timestamp: '2024-01-16 12:30',
      location: 'Storage Facility A',
      status: 'Item Collected',
      description: 'Moved to temporary storage',
      icon: Building
    },
    {
      timestamp: '2024-01-15 10:45',
      location: 'En Route',
      status: 'In Transit',
      description: 'Transported to recycling facility',
      icon: Truck
    },
    {
      timestamp: '2024-01-15 09:00',
      location: 'Recycling Facility B',
      status: 'Processing Complete',
      description: 'Item successfully recycled',
      icon: CheckCircle
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'processed': return 'bg-success text-success-foreground';
      case 'in transit': return 'bg-warning text-warning-foreground';
      case 'collected': return 'bg-primary text-primary-foreground';
      case 'pending pickup': return 'bg-muted text-muted-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const filteredItems = qrItems.filter(item =>
    item.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.qrCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.submittedBy.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const generateQRCode = (qrCode: string) => {
    // Placeholder QR code generation - in real app would use QR library
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrCode)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            QR Code Management 📱
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track your e-waste items from submission to recycling completion with our QR code system
          </p>
        </div>

        <Tabs defaultValue="scanner" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="scanner">QR Scanner</TabsTrigger>
            <TabsTrigger value="tracking">Item Tracking</TabsTrigger>
            <TabsTrigger value="generate">Generate QR</TabsTrigger>
          </TabsList>

          {/* QR Scanner Tab */}
          <TabsContent value="scanner">
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-card animate-fade-in-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Scan className="h-6 w-6 text-primary" />
                    QR Code Scanner
                  </CardTitle>
                  <CardDescription>
                    Scan or enter QR code to track item details and movement history
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Scanner Input */}
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter QR Code (e.g., ECO-2024-001-ABC123)"
                        value={scanInput}
                        onChange={(e) => setScanInput(e.target.value)}
                        className="flex-1"
                      />
                      <Button className="px-6">
                        <Search className="h-4 w-4 mr-2" />
                        Lookup
                      </Button>
                    </div>
                    
                    {/* Camera Scanner Placeholder */}
                    <div className="border-2 border-dashed border-border rounded-lg p-12 text-center bg-muted/30">
                      <QrCode className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-2">Point camera at QR code to scan</p>
                      <Button variant="outline" size="sm">
                        <Scan className="h-4 w-4 mr-2" />
                        Start Camera
                      </Button>
                    </div>
                  </div>

                  {/* Sample Scan Result */}
                  {scanInput && (
                    <Card className="border-primary/20 bg-primary/5">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-foreground text-lg">iPhone 12</h3>
                            <p className="text-sm text-muted-foreground">Smartphones • Submitted by Alice Johnson</p>
                          </div>
                          <Badge className={getStatusColor('Collected')}>Collected</Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">QR Code</p>
                            <p className="font-medium">ECO-2024-001-ABC123</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Department</p>
                            <p className="font-medium">IT Department</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Current Location</p>
                            <p className="font-medium flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              Storage Facility A
                            </p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Last Scan</p>
                            <p className="font-medium flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              Jan 16, 10:30 AM
                            </p>
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm" className="w-full mt-4">
                          View Full Tracking History
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Item Tracking Tab */}
          <TabsContent value="tracking">
            <div className="space-y-6">
              {/* Search Bar */}
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Input
                        placeholder="Search by item name, QR code, or submitter..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <Button variant="outline">
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Items List */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="shadow-card hover:shadow-float transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{item.itemName}</CardTitle>
                          <CardDescription>{item.category} • {item.department}</CardDescription>
                        </div>
                        <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Submitted by</p>
                          <p className="font-medium">{item.submittedBy}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">QR Code</p>
                          <p className="font-mono text-xs">{item.qrCode}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Location</p>
                          <p className="font-medium flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Last Scan</p>
                          <p className="font-medium">{item.lastScan}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <QrCode className="h-3 w-3 mr-2" />
                          View QR
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Clock className="h-3 w-3 mr-2" />
                          Track History
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Tracking History Sample */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Sample Tracking History - iPhone 12
                  </CardTitle>
                  <CardDescription>Complete movement history from submission to recycling</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trackingHistory.map((event, index) => {
                      const IconComponent = event.icon;
                      return (
                        <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors duration-200">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            index === trackingHistory.length - 1 ? 'bg-success/10' : 'bg-primary/10'
                          }`}>
                            <IconComponent className={`h-5 w-5 ${
                              index === trackingHistory.length - 1 ? 'text-success' : 'text-primary'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <p className="font-semibold text-foreground">{event.status}</p>
                              <p className="text-xs text-muted-foreground">{event.timestamp}</p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{event.description}</p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {event.location}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Generate QR Tab */}
          <TabsContent value="generate">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* QR Code Generator */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <QrCode className="h-5 w-5 text-success" />
                      Generate New QR Codes
                    </CardTitle>
                    <CardDescription>
                      Create QR codes for recently submitted e-waste items
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      {qrItems.slice(0, 2).map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div>
                            <p className="font-medium text-foreground">{item.itemName}</p>
                            <p className="text-sm text-muted-foreground">{item.qrCode}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <QrCode className="h-3 w-3 mr-2" />
                              Generate
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-3 w-3 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Sample QR Codes */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Sample QR Codes</CardTitle>
                    <CardDescription>Recently generated QR codes ready for printing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {qrItems.slice(0, 4).map((item) => (
                        <div key={item.id} className="text-center p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors duration-200">
                          <img
                            src={generateQRCode(item.qrCode)}
                            alt={`QR Code for ${item.itemName}`}
                            className="w-20 h-20 mx-auto mb-2 rounded"
                          />
                          <p className="text-xs font-medium text-foreground">{item.itemName}</p>
                          <p className="text-xs text-muted-foreground font-mono">{item.qrCode}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full mt-4 gradient-hero">
                      <Download className="h-4 w-4 mr-2" />
                      Download All QR Codes
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default QRManagement;