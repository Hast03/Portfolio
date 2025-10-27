import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        </div>

        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-accent text-lg font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Hast Joshi</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-muted-foreground font-semibold">
              Final Year IT Student
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
               I am a motivated and passionate individual with a strong commitment to continuous
              learning and personal growth. I enjoy exploring new concepts and applying them effectively
              to real-world challenges. Known for my attention to detail and drive to complete tasks with
              perfection, I consistently strive to deliver high-quality results. I am eager to contribute my
              knowledge and skills to an organization where innovation, teamwork, and growth are valued.
              My goal is to align my learning journey with the organization’s vision and become a reliable
              asset through consistent performance and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/contact">
                <Button className="gradient-primary text-lg px-8 py-6 hover:opacity-90 transition-opacity">
                  Get In Touch <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary/10"
                >
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
