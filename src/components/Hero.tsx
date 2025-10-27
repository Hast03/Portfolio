import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10 animate-fade-in">
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-accent text-lg font-medium">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="gradient-text">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-muted-foreground font-semibold">
            Final Year IT Student
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about building innovative web applications and solving complex problems through technology.
            Currently pursuing B.Tech in Information Technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              onClick={scrollToContact}
              className="gradient-primary text-lg px-8 py-6 hover:opacity-90 transition-opacity"
            >
              Get In Touch <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary/10"
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
