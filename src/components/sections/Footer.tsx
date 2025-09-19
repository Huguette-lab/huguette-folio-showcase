import { ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Huguette Igihozo</h3>
            <p className="text-primary-foreground/80">
              Entrepreneurial Leader & Digital Innovation Specialist passionate about 
              creating accessible solutions for positive change.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Timeline", href: "#timeline" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/huguette-igihozo-213009279"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:h.igihozo@alustudent.com"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <span>h.igihozo@alustudent.com</span>
              </a>
              <p className="text-primary-foreground/80">+250 799316512</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400" fill="currentColor" /> 
            by Huguette Igihozo © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;