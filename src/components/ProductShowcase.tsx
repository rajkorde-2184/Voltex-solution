import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Home, Battery, Zap, CheckCircle, Star } from "lucide-react";
import residentialImage from "@/assets/residential-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import energyStorageImage from "@/assets/energy-storage.jpg";

const products = [
  {
    icon: Home,
    title: "Residential Solar",
    description: "Perfect solar solutions for your home with premium panels and smart monitoring.",
    features: ["High-efficiency panels", "25-year warranty", "Smart monitoring", "Professional installation"],
    image: residentialImage,
    badge: "Most Popular",
    detailedInfo: {
      efficiency: "22.8% panel efficiency",
      warranty: "25-year performance warranty + 12-year product warranty",
      capacity: "3kW to 15kW systems available",
      savings: "Save 70-90% on electricity bills",
      installation: "2-3 day professional installation",
      monitoring: "Real-time energy production monitoring via mobile app",
      financing: "0% APR financing available for qualified customers",
      benefits: [
        "Monocrystalline silicon panels with anti-reflective coating",
        "Microinverters for maximum energy harvest",
        "25-year linear power output warranty",
        "Net metering compatibility",
        "Storm-resistant mounting system",
        "Professional design and permitting included"
      ]
    }
  },
  {
    icon: Building,
    title: "Commercial Solar",
    description: "Scale your business with enterprise-grade solar energy systems.",
    features: ["Custom design", "ROI optimization", "Grid-tie solutions", "Maintenance included"],
    image: commercialImage,
    badge: "Enterprise",
    detailedInfo: {
      efficiency: "Up to 24.1% panel efficiency",
      warranty: "25-year performance warranty",
      capacity: "50kW to 5MW+ systems",
      savings: "Reduce operating costs by 50-80%",
      installation: "Turnkey solution with minimal business disruption",
      monitoring: "Enterprise-grade monitoring and analytics platform",
      financing: "PPA, lease, and loan options available",
      benefits: [
        "Tier 1 commercial-grade solar panels",
        "String inverters with DC optimizers",
        "SCADA monitoring and control systems",
        "Tax incentive optimization",
        "O&M services included",
        "Custom engineering and design"
      ]
    }
  },
  {
    icon: Battery,
    title: "Energy Storage",
    description: "Store your solar energy for use when you need it most.",
    features: ["Backup power", "Peak shaving", "Grid independence", "Smart controls"],
    image: energyStorageImage,
    badge: "Advanced",
    detailedInfo: {
      efficiency: "95%+ round-trip efficiency",
      warranty: "10-year warranty on battery systems",
      capacity: "5kWh to 100kWh+ storage capacity",
      savings: "Reduce peak demand charges by up to 90%",
      installation: "Seamless integration with existing solar systems",
      monitoring: "AI-powered energy management system",
      financing: "Federal tax credits apply to battery storage",
      benefits: [
        "Lithium iron phosphate (LiFePO4) battery technology",
        "Automatic backup power during outages",
        "Time-of-use optimization",
        "Grid services participation",
        "Modular and scalable design",
        "Mobile app control and monitoring"
      ]
    }
  }
];

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Solar Solutions for Every Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From residential rooftops to commercial installations, we provide 
            comprehensive solar energy solutions tailored to your requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-t-lg cursor-pointer" onClick={() => setSelectedProduct(product)}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {product.badge}
                </Badge>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click for Details
                  </span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Product Details Modal */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <selectedProduct.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl">{selectedProduct.title}</DialogTitle>
                      <Badge className="bg-accent text-accent-foreground">
                        {selectedProduct.badge}
                      </Badge>
                    </div>
                  </div>
                  <DialogDescription className="text-base">
                    {selectedProduct.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* Product Image */}
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  {/* Key Specifications */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Key Specifications</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">Efficiency:</span>
                        <span className="text-secondary font-semibold">{selectedProduct.detailedInfo.efficiency}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">Capacity:</span>
                        <span className="text-secondary font-semibold">{selectedProduct.detailedInfo.capacity}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">Warranty:</span>
                        <span className="text-secondary font-semibold">{selectedProduct.detailedInfo.warranty}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">Savings:</span>
                        <span className="text-secondary font-semibold">{selectedProduct.detailedInfo.savings}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Additional Information */}
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Installation & Support</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Installation:</strong> {selectedProduct.detailedInfo.installation}</p>
                      <p><strong>Monitoring:</strong> {selectedProduct.detailedInfo.monitoring}</p>
                      <p><strong>Financing:</strong> {selectedProduct.detailedInfo.financing}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Benefits & Features</h3>
                    <ul className="space-y-2">
                      {selectedProduct.detailedInfo.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t">
                  <Button 
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    onClick={() => {
                      setSelectedProduct(null);
                      document.getElementById('contact')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    Get Quote for {selectedProduct.title}
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedProduct(null)}>
                    Close Details
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProductShowcase;