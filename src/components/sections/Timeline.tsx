import { Card } from "@/components/ui/card";
import timelineImage from "@/assets/leadership-timeline.png";

const Timeline = () => {
  const timelineEvents = [
    {
      date: "May 2023",
      title: "Orientation & Integration",
      description: "Started leadership journey at ALU with strategic orientation and campus integration initiatives."
    },
    {
      date: "Sep 2023", 
      title: "Strategic Cost Management Project",
      description: "Led a comprehensive cost management project focusing on operational efficiency and resource optimization."
    },
    {
      date: "Feb 2024",
      title: "Mental Health Awareness Program",
      description: "Initiated and coordinated mental health awareness campaigns, laying groundwork for accessibility initiatives."
    },
    {
      date: "Jun 2024",
      title: "Future of Education Presentation",
      description: "Presented innovative educational solutions and participated in strategic planning for educational advancement."
    },
    {
      date: "Oct 2024",
      title: "Collaborative Conservation Project", 
      description: "Led environmental conservation project demonstrating commitment to sustainable development and community impact."
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Leadership Timeline at ALU
          </h2>

          {/* Timeline Image */}
          <div className="mb-16 flex justify-center">
            <Card className="p-8 shadow-elegant">
              <img 
                src={timelineImage} 
                alt="Leadership Timeline at ALU (May 2023 - Present)"
                className="w-full max-w-4xl mx-auto rounded-lg"
              />
            </Card>
          </div>

          {/* Timeline Details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timelineEvents.map((event, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary-foreground font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="text-sm font-medium text-primary mb-2">{event.date}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{event.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-6 bg-gradient-secondary text-brown-foreground shadow-card inline-block">
              <h3 className="text-xl font-semibold mb-2">Leadership Journey</h3>
              <p className="text-sm opacity-90">
                5 Major Leadership Milestones • May 2023 - Present • African Leadership University
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;