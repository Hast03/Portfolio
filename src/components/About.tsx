import { Code2, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and efficient code following best practices",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical thinking to tackle complex challenges",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A dedicated IT student with a passion for creating impactful digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg leading-relaxed">
              I'm a final year Information Technology student with a strong foundation in web development,
              programming, and software engineering principles. My journey in tech has been driven by
              curiosity and a desire to build solutions that make a difference.
            </p>
            <p className="text-lg leading-relaxed">
              Throughout my academic journey, I've worked on various projects ranging from web applications
              to mobile solutions. I'm constantly learning and exploring new technologies to stay updated
              with the ever-evolving tech landscape.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, participating in
              hackathons, or exploring the latest tech trends and innovations.
            </p>
          </div>

          <div className="grid gap-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {highlights.map((item, index) => (
              <Card key={index} className="glass-effect border-2 hover:border-primary transition-colors duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg gradient-primary">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
