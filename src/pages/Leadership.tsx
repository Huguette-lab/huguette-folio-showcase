import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BookOpen,
  Lightbulb,
  Target,
  Users,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Leadership = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Transformative Learning Experiences",
      icon: <Lightbulb className="w-6 h-6" />,
      highlight: "Key moments that shaped my leadership approach",
      content: [
        "One of the most transformative experiences I had was when I worked on a group project that required coordinating diverse team members. At first, it was difficult to manage different opinions, priorities, and schedules. However, I realized that being a leader does not mean doing everything myself but creating space for others to contribute. This taught me patience, active listening, and the importance of inclusiveness.",
        "Another moment that transformed me was leading a community initiative where we had to solve unexpected problems with limited resources. It pushed me out of my comfort zone and taught me resilience and creativity in problem-solving.",
      ],
    },
    {
      title: "Applying Leadership Theories in Practice",
      icon: <BookOpen className="w-6 h-6" />,
      highlight: "From theory to real-world application",
      content: [
        "Throughout my learning journey, I have been able to apply leadership theories in real situations. For example, I applied situational leadership theory during a research project where my team members had different levels of expertise. Some needed close guidance while others required more independence. Adapting my leadership style to each person helped the team perform better.",
        "I also applied aspects of servant leadership, especially in community-related projects, where my focus was on supporting the needs of the group rather than trying to control every detail. These experiences helped me see that leadership is flexible and often depends on the people and the context.",
      ],
    },
    {
      title: "Growth in Skills, Knowledge, and Mindset",
      icon: <Users className="w-6 h-6" />,
      highlight: "Reflecting on my personal development",
      content: [
        "Looking back, I can clearly see growth in my skills, knowledge, and mindset. My communication skills improved because I had to constantly explain ideas, give feedback, and negotiate differences. I also became more confident in decision-making, even when the choices were not easy.",
        "In terms of knowledge, I gained a deeper understanding of project planning, teamwork, and how to align actions with goals. Most importantly, my mindset changed from thinking of leadership as a position to seeing it as a responsibility and an opportunity to influence others positively. I learned to value collaboration, accountability, and continuous learning.",
      ],
    },
    {
      title: "Connecting to My Mission Journey and Future Plans",
      icon: <Target className="w-6 h-6" />,
      highlight: "How leadership shapes my path forward",
      content: [
        "The artefacts included in this portfolio, such as project reports and field visit records, are evidence of the leadership journey I have taken so far. They remind me of the challenges I faced, the solutions I created, and the lessons I carried forward. These experiences connect directly to my mission journey because they strengthened my belief that leadership is about impact, not just personal success.",
        "Moving forward, the skills I developed will support my post-graduation plans of working in fields that require problem-solving, collaboration, and innovation. Whether in entrepreneurship, research, or community development, I plan to use what I learned to continue creating positive change.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-primary-foreground hover:bg-primary-foreground/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Leadership Reflection Essay
                </h1>
                <p className="text-primary-foreground/80 text-lg mt-2">
                  A Personal Journey of Growth and Discovery
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            {/* <Card className="p-8 shadow-card bg-gradient-to-br from-primary/5 to-secondary/5 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground flex-shrink-0 mt-1">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-6">
                    Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Leadership has always been an important part of my personal
                    and academic journey. Building this portfolio gave me the
                    chance to reflect on how far I have come, what experiences
                    transformed me, and how leadership has shaped my mindset and
                    future goals. Through different projects, teamwork
                    opportunities, and challenges, I have developed skills that
                    go beyond the classroom and prepared me for my mission
                    journey and career after graduation.
                  </p>
                </div>
              </div>
            </Card>

            {/* Main Sections */}
            {/* {sections.map((section, index) => (
              <Card
                key={index}
                className="p-8 shadow-card hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-foreground mb-2">
                      {section.title}
                    </h2>
                    <p className="text-primary font-medium text-sm uppercase tracking-wide">
                      {section.highlight}
                    </p>
                  </div>
                </div>

                <div className="space-y-6 pl-20">
                  {section.content.map((paragraph, pIndex) => (
                    <div key={pIndex} className="relative">
                      <div className="absolute -left-4 top-2 w-2 h-2 bg-primary rounded-full opacity-60"></div>
                      <p className="text-muted-foreground leading-relaxed text-lg pl-4">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            ))} */}

            {/* Conclusion */}
            <Card className="p-8 shadow-card bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border-2 border-primary/20">
              <div className="flex items-start gap-6">

                <div>

                  <p className="text-muted-foreground leading-relaxed text-lg">
                  Leadership has always been an important part of my personal and academic journey. Building this portfolio gave me the chance to reflect on how far I have come, what experiences transformed me, and how leadership has shaped my mindset and future goals. Through different projects, teamwork opportunities, and challenges, I have developed skills that go beyond the classroom and prepared me for my mission journey and career after graduation.
<br />
<br />
One of the most transformative experiences I had was when I worked on a group project that required coordinating diverse team members. At first, it was difficult to manage different opinions, priorities, and schedules. However, I realized that being a leader does not mean doing everything myself but creating space for others to contribute. This taught me patience, active listening, and the importance of inclusiveness. Another moment that transformed me was leading a community initiative where we had to solve unexpected problems with limited resources. It pushed me out of my comfort zone and taught me resilience and creativity in problem-solving.
<br />
<br />
Throughout my learning journey, I have been able to apply leadership theories in real situations. For example, I applied situational leadership theory during a research project where my team members had different levels of expertise. Some needed close guidance while others required more independence. Adapting my leadership style to each person helped the team perform better. I also applied aspects of servant leadership, especially in community-related projects, where my focus was on supporting the needs of the group rather than trying to control every detail. These experiences helped me see that leadership is flexible and often depends on the people and the context.
<br />
<br />

Looking back, I can clearly see growth in my skills, knowledge, and mindset. My communication skills improved because I had to constantly explain ideas, give feedback, and negotiate differences. I also became more confident in decision-making, even when the choices were not easy. In terms of knowledge, I gained a deeper understanding of project planning, teamwork, and how to align actions with goals. Most importantly, my mindset changed from thinking of leadership as a position to seeing it as a responsibility and an opportunity to influence others positively. I learned to value collaboration, accountability, and continuous learning.
<br />
<br />

The artefacts included in this portfolio, such as project reports and field visit records, are evidence of the leadership journey I have taken so far. They remind me of the challenges I faced, the solutions I created, and the lessons I carried forward. These experiences connect directly to my mission journey because they strengthened my belief that leadership is about impact, not just personal success. Moving forward, the skills I developed will support my post-graduation plans of working in fields that require problem-solving, collaboration, and innovation. Whether in entrepreneurship, research, or community development, I plan to use what I learned to continue creating positive change.
<br />
<br />
<br />


Overall, my leadership journey has been full of learning moments that shaped who I am today. From leading group projects to applying theories in practice, I have grown into someone who can adapt, listen, and inspire others. This portfolio is not only a collection of documents but also a reflection of my growth and readiness to take on future challenges. I believe that the combination of skills, knowledge, and mindset I developed will continue to guide me as I work toward my mission and long-term goals.


                  </p>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="p-6 bg-gradient-secondary text-brown-foreground shadow-card inline-block">
                <h3 className="text-xl font-semibold mb-4">
                  Continue the Journey
                </h3>
                <p className="mb-6">
                  This reflection represents just one milestone in my ongoing
                  leadership development.
                </p>
                <Button
                  onClick={() => navigate("/")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Explore My Portfolio
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leadership;
