import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AgroBuild",
      description: "AgroBuild is a one-stop platform offering agriculture products like plants, pesticides, and compost fertilizers, along with detailed plant-care guidance. It features watering reminders, an Agriculture News section for latest updates and policies, and an AI chatbot for instant help on farming, plant care, and weather impacts.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Django"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      github: "#",
      live: "#",
    },
    {
      title: "Artifacts",
      description: "Artifacts is a unified platform that aggregates articles and news from multiple sources, helping users avoid switching between sites. It allows quick access to relevant content, with options to save articles for later reading or reference.",
      technologies: ["HTML", "CSS", "MongoDB", "React", "Node.js", "Express"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      github: "#",
      live: "#",
    },
    {
      title: "Effortless Flow",
      description: "Effortless Flow is a native Android application engineered to be a sophisticated yet user-friendly smart task manager. It serves as a centralized hub for users to create, track, prioritize, and manage their daily tasks and projects, leveraging Firestore Database for secure and scalable data storage. The system integrates Firebase Authentication for user management and the Google Gemini API for AI-powered sub-task suggestions, all presented through an intuitive Material Design user interface.",
      technologies: ["Android-Java", "XML", "Firebase", "Google Gemini API", "Firebase", "Firestore Database", "Python-Flask"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      github: "#",
      live: "#",
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts, interactive maps, and weather alerts.",
      technologies: ["React", "TypeScript", "OpenWeather API"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects, skills, and experience with modern design and animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-effect border-2 hover:border-primary transition-all duration-300 overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-accent">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/20 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 border-2 border-primary hover:bg-primary/10"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="mr-2 w-4 h-4" /> Code
                </Button>
                <Button
                  className="flex-1 gradient-primary hover:opacity-90"
                  onClick={() => window.open(project.live, "_blank")}
                >
                  <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
