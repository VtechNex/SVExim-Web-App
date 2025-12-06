import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building
} from "lucide-react";
import { Slot } from "@radix-ui/react-slot";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    // Reset form would go here
  };

  const contactInfo = [
    {
      title: "Phone",
      content: "+91 9925072110",
      subtitle: "Mon-Fri 9AM-6PM IST",
      icon: Phone,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Email",
      content: "sales.svexim@gmail.com",
      subtitle: "24/7 Support Available",
      icon: Mail,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Address",
      content: "Industrial Area, Bhavnagar",
      subtitle: "Gujarat, India - 364001",
      icon: MapPin,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM",
      subtitle: "Sat: 9AM-1PM, Sun: Closed",
      icon: Clock,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your industrial or marine equipment needs? Our expert team is here to help
            you find the perfect solutions for your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>Send Us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">Inquiry Type *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quote">Request Quote</SelectItem>
                        <SelectItem value="product-info">Product Information</SelectItem>
                        <SelectItem value="technical-support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Brief subject of your inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your requirements in detail..."
                      className="min-h-32"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="hover:shadow-card transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-foreground font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Contact CTA */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Need Immediate Assistance?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent inquiries or technical support, chat with us directly on WhatsApp
                </p>
                {/* Working WhatsApp Button */}
                <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-lg transition-all">
                  <a href="https://wa.me/919925072110" target="_blank" rel="noopener noreferrer">
                    WhatsApp: +91 99250 72110
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Our Location</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
              {/* Placeholder for Google Map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-12 w-12 text-primary mx-auto" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">SV Exim Head Office</h3>
                    <p className="text-muted-foreground">Industrial Area, Bhavnagar, Gujarat, India - 364001</p>
                  </div>
                  <Button variant="outline">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
