import { GraduationCap, Briefcase, Award, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const education = [
    {
      degree: " Bachelor of Engineering in Information Technology",
      institution: "SAL Engineering & Technical Institute",
      year: "2023 - 2026",
      description: "Currently in final year with CGPA: 8.30/10",
    },
    {
      degree: " Diploma in Information Technology",
      institution: " R.C Technical Institute",
      year: "2020 - 2023",
      description: "CGPA: 8.65/10",
    },
    {
      degree: " Secondary School Certificate (SSC)",
      institution: "Nest Public School",
      year: "2017 - 2018",
      description: "Percentage: 70%",
    },
  ];

  const skills = {
    "Programming Languages": ["JavaScript", "Python", "Android-Java"],
    "Web Technologies": ["HTML", "CSS", "React(Basic)", "Node.js", "Express"],
    "Database": ["MySQL", "MongoDB"],
    "Tools & Others": ["Git", "GitHub"],
  };

  const experience = [
    {
      title: "Android App Development Intern",
      company: "CreArt Solutions Pvt Ltd.",
      period: "2 Weeks",
      description: [
        "Developed responsive Android applications using Java and XML",
      ],
    },
    {
      title: "Artificial Intelligence Intern",
      company: "CSRBOX",
      period: "2 Weeks",
      description: [
        "Developed AI models using Python and TensorFlow",
      ],
    },
  ];

  const handleDownloadResume = () => {
    // Create a dummy PDF download (replace with actual resume file)
    const link = document.createElement('a');
    link.href = '/Hast_Joshi_Resume.pdf'; // Update this with actual resume path
    link.download = 'Hast Joshi Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Education, skills, and experience that shape my journey
          </p>
          <Button 
            onClick={handleDownloadResume}
            className="gradient-primary text-lg py-6 px-8 hover:opacity-90 transition-opacity"
          >
            <Download className="mr-2 w-5 h-5" />
            Download Resume
          </Button>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Education */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg gradient-primary">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="glass-effect border-2 hover:border-primary transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-accent">{edu.degree}</h4>
                      <span className="text-muted-foreground">{edu.year}</span>
                    </div>
                    <p className="text-lg font-medium mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg gradient-primary">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold">Skills</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <Card key={index} className="glass-effect border-2 hover:border-primary transition-colors duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-accent mb-4">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-primary/20 rounded-full text-sm font-medium hover:bg-primary/30 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg gradient-primary">
                <Briefcase className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold">Experience</h3>
            </div>
            <div className="grid gap-6">
              {experience.map((exp, index) => (
                <Card key={index} className="glass-effect border-2 hover:border-primary transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-accent">{exp.title}</h4>
                      <span className="text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-lg font-medium mb-4">{exp.company}</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
