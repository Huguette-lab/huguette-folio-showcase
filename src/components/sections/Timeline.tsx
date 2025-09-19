import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  GraduationCap,
  Users,
  Briefcase,
  Target,
  Award,
  BookOpen,
} from "lucide-react";

const Timeline = () => {
  const timelineEvents = [
    {
      date: "May 2023",
      title: "Beginning of ALU Journey",
      description:
        "In May 2023, I officially began my journey at the African Leadership University. This period was a time of transition, as I adjusted to a new academic environment, engaged with peers from diverse backgrounds, and laid the foundation for my personal and leadership growth. It marked the start of a journey of discovery, both academically and personally.",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      date: "Aug 2023",
      title: "First Term Completion & Mission Discovery",
      description:
        "By August 2023, I had completed my first academic term, which was filled with exploration and self-reflection. During this time, I was deeply engaged in trying to identify and clarify my mission, an essential component of ALU's leadership philosophy. This phase helped me understand the importance of aligning my studies with a broader sense of purpose.",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      date: "Jan 2024",
      title: "First Professional Internship at BPR Bank",
      description:
        "In January 2024, I secured my first internship at BPR Bank, which provided valuable exposure to the professional environment. This experience allowed me to apply theoretical knowledge in practice, enhance my workplace skills, and understand leadership from a corporate perspective. It was a critical milestone in linking classroom learning with real-world applications.",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      date: "May 2024",
      title: "Second Year - Greater Confidence & Maturity",
      description:
        "May 2024 marked the start of my second year at ALU, a time of greater confidence and maturity in my academic and leadership journey. Having gained initial experience, I approached my studies with clearer focus and a stronger sense of direction. This year became a platform for deeper learning and more active engagement in projects and teamwork.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      date: "May 2025",
      title: "Third Year - Advanced Leadership",
      description:
        "In May 2025, I transitioned into my third year, which represented a new stage of responsibility and growth. This period emphasized more advanced coursework and leadership opportunities while preparing for the transition from student life to professional readiness. Entering this stage highlighted my ability to balance academic goals with practical experiences.",
      icon: <Target className="w-5 h-5" />,
    },
    {
      date: "Present",
      title: "Capstone Project Preparation",
      description:
        "Currently, I am preparing for my capstone project, which represents the culmination of my academic journey at ALU. This phase requires integrating everything I have learned over the past years—knowledge, skills, and leadership experiences—into a final project that reflects my mission and long-term goals. It is both a reflection of my growth and a bridge to my future career.",
      icon: <Award className="w-5 h-5" />,
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            My 5 Major Events in Entrepreneurial Leadership
          </h2>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary to-primary/50"></div>

            {/* Timeline Line - Mobile */}
            <div className="lg:hidden absolute left-5 w-1 h-full bg-gradient-to-b from-primary via-primary to-primary/50"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Date Marker - Desktop */}
                  <div className="hidden lg:flex w-1/2 justify-center">
                    <div
                      className={`${
                        index % 2 === 0 ? "pr-8" : "pl-8"
                      } flex justify-center`}
                    >
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                        {event.date}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                    <div className="w-12 h-12 bg-white border-4 lg:flex hidden  border-primary rounded-full  items-center justify-center shadow-lg">
                      <div className="text-primary">{event.icon}</div>
                    </div>
                  </div>

                  {/* Event Card - Desktop */}
                  <div className="hidden lg:flex w-1/2">
                    <div
                      className={`${index % 2 === 0 ? "pl-8" : "pr-8"} w-full`}
                    >
                      <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group relative">
                        {/* Arrow pointing to timeline */}
                        <div
                          className={`absolute top-6 ${
                            index % 2 === 0 ? "-left-3" : "-right-3"
                          } w-0 h-0 border-t-8 border-b-8 border-transparent ${
                            index % 2 === 0
                              ? "border-r-8 border-r-card"
                              : "border-l-8 border-l-card"
                          }`}
                        ></div>

                        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {event.description}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary/80 p-0 h-auto"
                        >
                          Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Card>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden flex w-full">
                    <div className="flex-1 ml-10">
                      {/* Date for mobile */}
                      <div className="mb-3">
                        <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium inline-block">
                          {event.date}
                        </div>
                      </div>

                      <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group relative">
                        {/* Arrow pointing to timeline */}
                        <div className="absolute top-6 -left-3 w-0 h-0 border-t-8 border-b-8 border-transparent border-r-8 border-r-card"></div>

                        <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                          {event.description}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary/80 p-0 h-auto"
                        >
                          Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Card */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 border-2 border-primary/20 shadow-card inline-block">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                My Leadership Journey
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                6 Major Leadership Milestones • May 2023 - Present • African
                Leadership University
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="bg-primary/10 px-3 py-1 rounded-full">
                  Academic Growth
                </span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">
                  Professional Experience
                </span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">
                  Leadership Development
                </span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">
                  Mission Alignment
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
