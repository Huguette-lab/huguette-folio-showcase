import { Card } from "@/components/ui/card";
import timelineImage from "@/assets/leadership-timeline.png";

const Timeline = () => {
  const timelineEvents = [
    {
      date: "May 2023",
      title: "Beginning of ALU Journey",
      description:
        "In May 2023, I officially began my journey at the African Leadership University. This period was a time of transition, as I adjusted to a new academic environment, engaged with peers from diverse backgrounds, and laid the foundation for my personal and leadership growth. It marked the start of a journey of discovery, both academically and personally.",
    },
    {
      date: "Aug 2023",
      title: "First Term Completion & Mission Discovery",
      description:
        "By August 2023, I had completed my first academic term, which was filled with exploration and self-reflection. During this time, I was deeply engaged in trying to identify and clarify my mission, an essential component of ALU's leadership philosophy. This phase helped me understand the importance of aligning my studies with a broader sense of purpose.",
    },
    {
      date: "Jan 2024",
      title: "First Professional Internship at BPR Bank",
      description:
        "In January 2024, I secured my first internship at BPR Bank, which provided valuable exposure to the professional environment. This experience allowed me to apply theoretical knowledge in practice, enhance my workplace skills, and understand leadership from a corporate perspective. It was a critical milestone in linking classroom learning with real-world applications.",
    },
    {
      date: "May 2024",
      title: "Second Year - Greater Confidence & Maturity",
      description:
        "May 2024 marked the start of my second year at ALU, a time of greater confidence and maturity in my academic and leadership journey. Having gained initial experience, I approached my studies with clearer focus and a stronger sense of direction. This year became a platform for deeper learning and more active engagement in projects and teamwork.",
    },
    {
      date: "May 2025",
      title: "Third Year - Advanced Leadership",
      description:
        "In May 2025, I transitioned into my third year, which represented a new stage of responsibility and growth. This period emphasized more advanced coursework and leadership opportunities while preparing for the transition from student life to professional readiness. Entering this stage highlighted my ability to balance academic goals with practical experiences.",
    },
    {
      date: "Present",
      title: "Capstone Project Preparation",
      description:
        "Currently, I am preparing for my capstone project, which represents the culmination of my academic journey at ALU. This phase requires integrating everything I have learned over the past years—knowledge, skills, and leadership experiences—into a final project that reflects my mission and long-term goals. It is both a reflection of my growth and a bridge to my future career.",
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            My 5 Major Events in Entrepreneurial Leadership
          </h2>

          {/* Timeline Image */}
          {/* <div className="mb-16 flex justify-center">
            <Card className="p-8 shadow-elegant">
              <img 
                src={timelineImage} 
                alt="Leadership Timeline at ALU (May 2023 - Present)"
                className="w-full max-w-4xl mx-auto rounded-lg"
              />
            </Card>
          </div> */}

          {/* Timeline Details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timelineEvents.map((event, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary-foreground font-bold">
                      {index + 1}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-primary mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-6 bg-gradient-secondary text-brown-foreground shadow-card inline-block">
              <h3 className="text-xl font-semibold mb-2">
                My 5 Major Events in Entrepreneurial Leadership
              </h3>
              <p className="text-sm opacity-90">
                6 Major Leadership Milestones • May 2023 - Present • African
                Leadership University
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
