import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyAddress: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "Our team will contact you within 24 hours to schedule your free property evaluation.",
    });
    setFormData({ name: "", email: "", phone: "", propertyAddress: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact-form" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
              Ready to Maximize Your Rental Income?
            </h2>
            <p className="text-lg text-muted-foreground font-sans mb-6">
              Get a free, no-obligation property evaluation. We'll show you exactly how much more your Maui property could be earning.
            </p>
            <p className="text-muted-foreground font-sans text-sm">
              Fill out the form and our team will reach out within 24 hours to discuss your property's potential.
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Get Your Free Evaluation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-sans font-medium text-foreground mb-1">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="font-sans"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-sans font-medium text-foreground mb-1">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-sans font-medium text-foreground mb-1">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(808) 555-0000"
                    className="font-sans"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="propertyAddress" className="block text-sm font-sans font-medium text-foreground mb-1">
                  Property Address *
                </label>
                <Input
                  id="propertyAddress"
                  name="propertyAddress"
                  type="text"
                  required
                  value={formData.propertyAddress}
                  onChange={handleChange}
                  placeholder="123 Beach Road, Lahaina, HI"
                  className="font-sans"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-sans font-medium text-foreground mb-1">
                  Tell us about your property (optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Number of bedrooms, current management situation, etc."
                  className="font-sans"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full font-sans font-medium">
                Request Free Evaluation
              </Button>
              
              <p className="text-xs text-muted-foreground text-center font-sans">
                By submitting this form, you agree to receive communications from Hawaii Vacation Homes. 
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;