import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Leaf, TrendingUp, Shield, Sun, Users } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Save Money",
    description: "Reduce your electricity bills by up to 90% with our efficient solar systems."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce your carbon footprint and contribute to a cleaner, sustainable future."
  },
  {
    icon: TrendingUp,
    title: "Increase Property Value",
    description: "Solar installations can increase your property value by 4-6% on average."
  },
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "All our solar panels come with comprehensive warranties for peace of mind."
  },
  {
    icon: Sun,
    title: "Energy Independence",
    description: "Generate your own clean energy and reduce dependence on the grid."
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our certified technicians provide ongoing support and maintenance."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Solar Energy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the many advantages of switching to clean, renewable solar energy 
            for your home or business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 bg-gradient-to-br from-card to-muted/20 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;