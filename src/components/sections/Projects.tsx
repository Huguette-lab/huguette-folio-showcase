import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe, Heart, CreditCard, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EasyCash - Online Banking Solution",
      company: "Banque Populaire du Rwanda (BPR)",
      period: "Jan 2024 - Mar 2024",
      description: "Developed EasyCash, an innovative online withdrawal system to eliminate physical queues at bank branches. The solution streamlined customer experience by allowing secure online withdrawal requests, significantly reducing wait times and improving operational efficiency.",
      technologies: ["Digital Banking", "Customer Experience", "Process Optimization", "Security Systems"],
      impact: "Reduced customer wait times by 70% and improved branch operational efficiency",
      icon: <CreditCard className="w-6 h-6" />,
      type: "FinTech Solution",
      liveUrl: "https://precise-corn-f3wvxb.mystrikingly.com/",
      featured: true
    },
    {
      title: "Hotel Financial Management System",
      company: "Grand Legacy Hotel",
      period: "Jan 2025 - Mar 2025", 
      description: "Designed and implemented a comprehensive financial management system for hotel operations. The system enhanced transaction recording, cash flow management, and financial reporting processes, providing real-time insights into hotel financial performance.",
      technologies: ["Financial Systems", "Data Analytics", "Cash Flow Management", "Reporting"],
      impact: "Improved financial accuracy by 95% and streamlined reporting processes",
      icon: <BarChart3 className="w-6 h-6" />,
      type: "Financial Technology",
      liveUrl: null,
      featured: false
    },
    {
      title: "Mind Care - Accessible Mental Health Platform",
      company: "Independent Project",
      period: "2024 - Present",
      description: "Created Mind Care, an innovative digital platform to make mental health services more affordable and accessible in Rwanda. The platform connects users with qualified mental health professionals and provides resources for mental wellness education and support.",
      technologies: ["Healthcare Technology", "Accessibility Design", "Community Building", "Telehealth"],
      impact: "Aiming to reduce mental health service costs by 60% and increase accessibility",
      icon: <Heart className="w-6 h-6" />,
      type: "Social Impact",
      liveUrl: "https://industrious-platypus-f3wvx0.mystrikingly.com/",
      featured: true
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "FinTech Solution":
        return "bg-primary text-primary-foreground";
      case "Financial Technology":
        return "bg-brown text-brown-foreground";
      case "Social Impact":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Project Artifacts
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            A showcase of innovative solutions I've developed during my internships and independent projects, 
            demonstrating my commitment to creating technology that makes a meaningful impact.
          </p>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Icon & Type */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <Badge className={getTypeColor(project.type)}>
                        {project.type}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="font-medium">Company:</span> {project.company}</p>
                      <p><span className="font-medium">Period:</span> {project.period}</p>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Impact */}
                    <div className="bg-gradient-hero p-4 rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Impact & Results</h4>
                      <p className="text-muted-foreground text-sm">{project.impact}</p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button 
                          className="bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-xl"
                          size="sm"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          View Live Project
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-6 bg-gradient-primary text-primary-foreground shadow-elegant inline-block">
              <h3 className="text-xl font-semibold mb-2">Live Applications</h3>
              <p className="text-sm opacity-90">
                2 Live Projects • EasyCash Banking • Mind Care Mental Health • 2024-2025
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;