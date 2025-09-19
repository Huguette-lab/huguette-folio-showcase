import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                Huguette
                <span className="block text-primary">Igihozo</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Entrepreneurial Leader & Digital Innovation Specialist
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                Passionate about creating accessible digital solutions that drive positive change. 
                Experienced in financial technology, data management, and mental health advocacy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("#projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollToSection("#contact")}
              >
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Contact Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 shadow-card hover:shadow-elegant transition-all duration-300 bg-card">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-foreground">+250 799316512</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-foreground">h.igihozo@alustudent.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Kigali, Rwanda</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <a
                    href="https://www.linkedin.com/in/huguette-igihozo-213009279"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;