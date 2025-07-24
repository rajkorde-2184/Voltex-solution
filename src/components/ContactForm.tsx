Reddit - higefat446@simerm.com// Import useRef and the emailjs library at the top
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  // Create a ref for the form element
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if the form ref is current and credentials are set
    if (!form.current || !import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Email service is not configured correctly. Please contact support.",
      });
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        form.current, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        toast({
          title: "Thank you for your interest!",
          description: "We'll contact you within 24 hours with a personalized solar solution.",
        });
        // Reset form fields after successful submission
        form.current?.reset();
      }, 
      (error) => {
        console.log('FAILED...', error.text);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request. Please try again.",
        });
      }
    )
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Your Free Solar Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start saving with solar? Fill out our form and get a
            personalized quote tailored to your energy needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-muted-foreground">9104629229</p>
                    <p className="text-muted-foreground">9998491595</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-muted-foreground">info.voltexsolution@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p className="text-muted-foreground"> Voltex Solution, Opposite Vinayak Gold palace, in Vasant Vihar 1, Ahmedabad</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Why Choose Us?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Free consultation and site assessment</li>
                <li>• 25-year performance warranty</li>
                <li>• Certified and experienced installers</li>
                <li>• Financing options available</li>
                <li>• 24/7 monitoring and support</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Request Your Quote</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you with a customized solar solution.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add the ref to the form and name attributes to inputs */}
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="from_name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="last_name" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" name="reply_to" placeholder="Example@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" name="phone" placeholder="+91 12345 67890" required />
                </div>
                
                {/* Note: The 'Select' component from shadcn/ui doesn't directly support a 'name' prop
                    on the root trigger. We'll handle this by adding a hidden input.
                    This is a clean way to ensure the value is included in the form data. */}
                <div className="space-y-2">
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Select name="property_type_select" required onValueChange={(value) => {
                    const hiddenInput = document.getElementById('propertyTypeHidden') as HTMLInputElement;
                    if (hiddenInput) hiddenInput.value = value;
                  }}>
                    <SelectTrigger id="propertyType">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="property_type" id="propertyTypeHidden" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="monthlyBill">Monthly Electric Bill</Label>
                  <Select name="monthly_bill_select" required onValueChange={(value) => {
                    const hiddenInput = document.getElementById('monthlyBillHidden') as HTMLInputElement;
                    if (hiddenInput) hiddenInput.value = value;
                  }}>
                    <SelectTrigger id="monthlyBill">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Under 1500rs">Under 1500rs</SelectItem>
                      <SelectItem value="1500rs - 2500rs">1500rs - 2500rs</SelectItem>
                      <SelectItem value="2500rs - 3500rs">2500rs - 3500rs</SelectItem>
                      <SelectItem value="Over 3500rs">Over 3500rs</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="monthly_bill" id="monthlyBillHidden" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell us about your energy goals, roof details, or any questions you have..."
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;