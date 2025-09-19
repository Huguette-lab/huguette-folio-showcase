import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ExternalLink, Download } from "lucide-react";
import cvImage from "@/assets/huguette-cv.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+250 799316512",
      href: "tel:+250799316512"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email", 
      value: "h.igihozo@alustudent.com",
      href: "mailto:h.igihozo@alustudent.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Kigali, Rwanda",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Let's Connect
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Get In Touch
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and collaborations that can make a positive impact. Let's connect and explore 
                  how we can work together.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="p-4 shadow-card hover:shadow-elegant transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Professional Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Professional Profiles</h4>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                    onClick={() => window.open("https://www.linkedin.com/in/huguette-igihozo-213009279", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </Button>
                  
                  <Button
                    className="bg-gradient-secondary text-brown-foreground hover:opacity-90 flex-1"
                    onClick={() => window.open(cvImage, "_blank")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                </div>
              </div>
            </div>

            {/* CV Preview */}
            <div className="flex justify-center">
              <Card className="p-4 shadow-elegant hover:shadow-xl transition-all duration-300 group cursor-pointer max-w-md">
                <div onClick={() => window.open(cvImage, "_blank")}>
                  <img 
                    src={cvImage} 
                    alt="Huguette Igihozo CV/Resume"
                    className="w-full rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="mt-4 text-center">
                    <h4 className="font-semibold text-foreground mb-2">Professional CV/Resume</h4>
                    <p className="text-sm text-muted-foreground">Click to view full document</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-hero shadow-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you're looking for a dedicated team member, project collaborator, 
                or someone passionate about digital innovation and social impact, I'd love to hear from you.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary text-primary-foreground shadow-elegant"
                onClick={() => window.open("mailto:h.igihozo@alustudent.com", "_blank")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;