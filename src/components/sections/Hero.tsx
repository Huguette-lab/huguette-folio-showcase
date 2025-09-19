import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
                My name is Huguette Igihozo, and I am passionate about mental
                health and how awareness can transform communities. I enjoy
                exploring solutions that connect education, sustainability, job
                creation, and leadership to make a positive impact. One thing
                I’m proud of is how I always stay committed to learning and
                improving myself, whether through school projects, teamwork, or
                personal growth. A fun fact about me is that I love imagining
                how the future could look and creating ideas that help people
                thrive.
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

          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>

              {/* Main photo container */}
              <Card className="relative p-2 shadow-elegant hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm border-0 overflow-hidden group-hover:scale-105">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/photo.jpg"
                    alt="Huguette Igihozo - Entrepreneurial Leader"
                    className="w-80 h-96 object-cover rounded-xl group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary rounded-full animate-pulse delay-300"></div>
                </div>
              </Card>

              {/* Floating accent elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-primary rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-secondary rounded-full opacity-40 animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
