import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Entrepreneurial Solution Partners Intern",
      company: "Various Organizations",
      location: "Rwanda",
      period: "Oct 2024 - Dec 2024",
      description: "Working in data collection (on filed survey) Business either informal or informal for a program known as growth to scale.",
      type: "Internship"
    },
    {
      title: "Financial Department Intern", 
      company: "Grand Legacy Hotel",
      location: "Rwanda",
      period: "Jan 2025 - Mar 2025",
      description: "Worked in the Financial department where I recorded Financial transactions and cash flow management.",
      type: "Internship"
    },
    {
      title: "Banking Operations Intern",
      company: "Banque Populaire du Rwanda (BPR)",
      location: "Rwanda", 
      period: "Jan 2024 - Mar 2024",
      description: "Working in customer care, business and operating services within the bank. Developed innovative solutions for online banking services.",
      type: "Internship"
    },
    {
      title: "Register Office Intern",
      company: "FERWAFA",
      location: "Rwanda",
      period: "Jul 2023 - Aug 2023", 
      description: "Registered athletes who participated in the Kigali International Marathon and handed the winners their prizes.",
      type: "Internship"
    },
    {
      title: "Youth Volunteer",
      company: "Youth Volunteers",
      location: "Rwanda",
      period: "Apr 2020 - Aug 2020",
      description: "Contributed tremendously in many areas, such as child protection, prevention of sexual and gender-based violence, and running recreational activities for children, especially during the COVID-19 pandemic.",
      type: "Volunteer"
    },
    {
      title: "Data Entry and Management",
      company: "Gikuriro Kuri Bose NGO", 
      location: "Rwanda",
      period: "Aug 2022 - Nov 2022",
      description: "Provided children with necessities to promote inclusive nutrition. Handled confidential information and documents with discretion and maintained their proper organization. Conducted campaigns with pregnant women in different districts.",
      type: "NGO Work"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-primary text-primary-foreground";
      case "Volunteer":
        return "bg-accent text-accent-foreground";
      case "NGO Work":
        return "bg-brown text-brown-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <Badge className={getTypeColor(exp.type)}>
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;