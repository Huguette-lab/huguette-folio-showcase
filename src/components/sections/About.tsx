import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "Data Management",
    "Financial Analysis", 
    "Project Leadership",
    "Digital Innovation",
    "Strategic Planning",
    "Team Management",
    "Business Development",
    "Customer Relations"
  ];

  const languages = [
    { name: "French", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Kinyarwanda", level: "Native" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a dedicated entrepreneurial leader with a passion for creating innovative 
                digital solutions that address real-world challenges. My experience spans across 
                financial technology, data management, and social impact initiatives.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my studies at ALU, I have demonstrated consistent leadership 
                through various strategic initiatives and have gained practical experience through 
                internships at leading organizations including BPR Bank and Grand Legacy Hotel.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My entrepreneurial spirit drives me to develop solutions that make essential 
                services more accessible, particularly in the areas of financial services and 
                mental health support.
              </p>
            </div>

            {/* Skills & Languages */}
            <div className="space-y-8">
              <Card className="p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-4">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-gradient-secondary text-brown-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-4">Languages</h3>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{lang.name}</span>
                      <Badge variant="outline" className="border-primary text-primary">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;