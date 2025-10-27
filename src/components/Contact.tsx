// import { useState } from "react";
// import { Mail, MapPin, Phone, Send } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { z } from "zod";

// type InquiryType = "general" | "project" | "recruiter";

// const generalSchema = z.object({
//   name: z.string().trim().min(1, "Name is required").max(100),
//   email: z.string().trim().email("Invalid email address").max(255),
//   subject: z.string().trim().min(1, "Subject is required").max(200),
//   message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
// });

// const projectSchema = z.object({
//   name: z.string().trim().min(1, "Name is required").max(100),
//   email: z.string().trim().email("Invalid email address").max(255),
//   company: z.string().trim().max(100).optional(),
//   projectType: z.string().trim().min(1, "Project type is required"),
//   budget: z.string().trim().max(50).optional(),
//   description: z.string().trim().min(10, "Description must be at least 10 characters").max(1000),
// });

// const recruiterSchema = z.object({
//   name: z.string().trim().min(1, "Name is required").max(100),
//   email: z.string().trim().email("Invalid email address").max(255),
//   company: z.string().trim().min(1, "Company is required").max(100),
//   role: z.string().trim().min(1, "Role is required").max(100),
//   jobDescriptionLink: z.string().trim().url("Invalid URL").max(500).optional().or(z.literal("")),
//   message: z.string().trim().max(1000).optional(),
// });

// type GeneralForm = z.infer<typeof generalSchema>;
// type ProjectForm = z.infer<typeof projectSchema>;
// type RecruiterForm = z.infer<typeof recruiterSchema>;

// const Contact = () => {
//   const [inquiryType, setInquiryType] = useState<InquiryType>("general");
//   const [generalForm, setGeneralForm] = useState<GeneralForm>({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [projectForm, setProjectForm] = useState<ProjectForm>({
//     name: "",
//     email: "",
//     company: "",
//     projectType: "Web Application",
//     budget: "",
//     description: "",
//   });
//   const [recruiterForm, setRecruiterForm] = useState<RecruiterForm>({
//     name: "",
//     email: "",
//     company: "",
//     role: "",
//     jobDescriptionLink: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "231263116003setiit@gmail.com",
//       link: "mailto:231263116003setiit@gmail.com",
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+91 7211117605",
//       link: "tel:+917211117605",
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "Ahmedabad, Gujarat, India",
//     },
//   ];

//   const handleInquiryTypeChange = (type: InquiryType) => {
//     setInquiryType(type);
//     setErrors({});
//   };

//   const buildEmailBody = () => {
//     let body = "";
    
//     if (inquiryType === "general") {
//       body = `Hi,

// Name: ${generalForm.name}
// Email: ${generalForm.email}

// Subject: ${generalForm.subject}

// Message:
// ${generalForm.message}

// ---
// Sent from Portfolio Contact Form`;
//     } else if (inquiryType === "project") {
//       body = `Hi,

// I have a project in mind and would like to work together.

// Name: ${projectForm.name}
// Email: ${projectForm.email}
// ${projectForm.company ? `Company: ${projectForm.company}` : ""}
// Project Type: ${projectForm.projectType}
// ${projectForm.budget ? `Budget: ${projectForm.budget}` : ""}

// Project Description:
// ${projectForm.description}

// ---
// Sent from Portfolio Contact Form`;
//     } else {
//       body = `Hi,

// I'm reaching out regarding a potential opportunity.

// Name: ${recruiterForm.name}
// Email: ${recruiterForm.email}
// Company: ${recruiterForm.company}
// Role/Position: ${recruiterForm.role}
// ${recruiterForm.jobDescriptionLink ? `Job Description Link: ${recruiterForm.jobDescriptionLink}` : ""}

// ${recruiterForm.message ? `Additional Message:\n${recruiterForm.message}` : ""}

// ---
// Sent from Portfolio Contact Form`;
//     }
    
//     return encodeURIComponent(body);
//   };

//   const getSubject = () => {
//     if (inquiryType === "general") {
//       return encodeURIComponent(generalForm.subject);
//     } else if (inquiryType === "project") {
//       return encodeURIComponent(`Project Inquiry: ${projectForm.projectType}`);
//     } else {
//       return encodeURIComponent(`Job Opportunity: ${recruiterForm.role}`);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrors({});

//     try {
//       // Validate based on inquiry type
//       if (inquiryType === "general") {
//         generalSchema.parse(generalForm);
//       } else if (inquiryType === "project") {
//         projectSchema.parse(projectForm);
//       } else {
//         recruiterSchema.parse(recruiterForm);
//       }

//       // Build mailto link
//       const recipientEmail = "231263116003setiit@gmail.com"; // Replace with your email
//       const subject = getSubject();
//       const body = buildEmailBody();
//       const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

//       // Open email client
//       window.location.href = mailtoLink;

//       // Reset form after a short delay
//       setTimeout(() => {
//         if (inquiryType === "general") {
//           setGeneralForm({ name: "", email: "", subject: "", message: "" });
//         } else if (inquiryType === "project") {
//           setProjectForm({ name: "", email: "", company: "", projectType: "Web Application", budget: "", description: "" });
//         } else {
//           setRecruiterForm({ name: "", email: "", company: "", role: "", jobDescriptionLink: "", message: "" });
//         }
//       }, 1000);
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         const fieldErrors: Record<string, string> = {};
//         error.errors.forEach((err) => {
//           if (err.path[0]) {
//             fieldErrors[err.path[0] as string] = err.message;
//           }
//         });
//         setErrors(fieldErrors);
//       }
//     }
//   };

//   const getDescription = () => {
//     switch (inquiryType) {
//       case "general":
//         return "Have a question or just want to say hi? Drop me a line!";
//       case "project":
//         return "Have a project in mind? Let's work together to build something amazing.";
//       case "recruiter":
//         return "I'm open to new opportunities. Let's discuss how I can contribute to your team.";
//     }
//   };

//   return (
//     <section id="contact" className="py-20 px-4 bg-secondary/20">
//       <div className="container mx-auto">
//         <div className="text-center mb-12 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Get In <span className="gradient-text">Touch</span>
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             {getDescription()}
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Info */}
//           <div className="space-y-6 animate-slide-up">
//             <div>
//               <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
//               <p className="text-muted-foreground mb-8">
//                 Feel free to reach out through any of these channels. I'm always open to discussing new projects,
//                 creative ideas, or opportunities to be part of your visions.
//               </p>
//             </div>
//             {contactInfo.map((info, index) => (
//               <Card key={index} className="glass-effect border-2 hover:border-primary transition-colors duration-300">
//                 <CardContent className="p-6 flex items-start gap-4">
//                   <div className="p-3 rounded-lg gradient-primary">
//                     <info.icon className="w-5 h-5 text-primary-foreground" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
//                     {info.link ? (
//                       <a
//                         href={info.link}
//                         className="text-lg font-medium hover:text-accent transition-colors"
//                       >
//                         {info.value}
//                       </a>
//                     ) : (
//                       <p className="text-lg font-medium">{info.value}</p>
//                     )}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Contact Form */}
//           <Card className="glass-effect border-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
//             <CardContent className="p-6">
//               {/* Chip Selection */}
//               <div className="flex justify-center items-center gap-2 md:gap-3 mb-6 flex-wrap">
//                 <Button
//                   type="button"
//                   onClick={() => handleInquiryTypeChange("general")}
//                   variant={inquiryType === "general" ? "default" : "outline"}
//                   className={inquiryType === "general" ? "gradient-primary" : ""}
//                 >
//                   General
//                 </Button>
//                 <Button
//                   type="button"
//                   onClick={() => handleInquiryTypeChange("project")}
//                   variant={inquiryType === "project" ? "default" : "outline"}
//                   className={inquiryType === "project" ? "gradient-primary" : ""}
//                 >
//                   Project
//                 </Button>
//                 <Button
//                   type="button"
//                   onClick={() => handleInquiryTypeChange("recruiter")}
//                   variant={inquiryType === "recruiter" ? "default" : "outline"}
//                   className={inquiryType === "recruiter" ? "gradient-primary" : ""}
//                 >
//                   Recruiter
//                 </Button>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* General Form */}
//                 {inquiryType === "general" && (
//                   <>
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium mb-2">
//                         Your Name *
//                       </label>
//                       <Input
//                         id="name"
//                         value={generalForm.name}
//                         onChange={(e) => setGeneralForm({ ...generalForm, name: e.target.value })}
//                         placeholder="Your Name"
//                         className={`bg-background/50 ${errors.name ? "border-destructive" : ""}`}
//                       />
//                       {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium mb-2">
//                         Your Email *
//                       </label>
//                       <Input
//                         id="email"
//                         type="email"
//                         value={generalForm.email}
//                         onChange={(e) => setGeneralForm({ ...generalForm, email: e.target.value })}
//                         placeholder="abc@example.com"
//                         className={`bg-background/50 ${errors.email ? "border-destructive" : ""}`}
//                       />
//                       {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
//                     </div>
//                     <div>
//                       <label htmlFor="subject" className="block text-sm font-medium mb-2">
//                         Subject *
//                       </label>
//                       <Input
//                         id="subject"
//                         value={generalForm.subject}
//                         onChange={(e) => setGeneralForm({ ...generalForm, subject: e.target.value })}
//                         placeholder="General Question"
//                         className={`bg-background/50 ${errors.subject ? "border-destructive" : ""}`}
//                       />
//                       {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
//                     </div>
//                     <div>
//                       <label htmlFor="message" className="block text-sm font-medium mb-2">
//                         Your Message *
//                       </label>
//                       <Textarea
//                         id="message"
//                         value={generalForm.message}
//                         onChange={(e) => setGeneralForm({ ...generalForm, message: e.target.value })}
//                         placeholder="Your message here..."
//                         rows={4}
//                         className={`bg-background/50 resize-none ${errors.message ? "border-destructive" : ""}`}
//                       />
//                       {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
//                     </div>
//                   </>
//                 )}

//                 {/* Project Form */}
//                 {inquiryType === "project" && (
//                   <>
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium mb-2">
//                         Your Name *
//                       </label>
//                       <Input
//                         id="name"
//                         value={projectForm.name}
//                         onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
//                         placeholder="Your Name"
//                         className={`bg-background/50 ${errors.name ? "border-destructive" : ""}`}
//                       />
//                       {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium mb-2">
//                         Your Email *
//                       </label>
//                       <Input
//                         id="email"
//                         type="email"
//                         value={projectForm.email}
//                         onChange={(e) => setProjectForm({ ...projectForm, email: e.target.value })}
//                         placeholder="abc@example.com"
//                         className={`bg-background/50 ${errors.email ? "border-destructive" : ""}`}
//                       />
//                       {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
//                     </div>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <div>
//                         <label htmlFor="company" className="block text-sm font-medium mb-2">
//                           Company (Optional)
//                         </label>
//                         <Input
//                           id="company"
//                           value={projectForm.company}
//                           onChange={(e) => setProjectForm({ ...projectForm, company: e.target.value })}
//                           placeholder="Your Company, Inc."
//                           className="bg-background/50"
//                         />
//                       </div>
//                       <div>
//                         <label htmlFor="projectType" className="block text-sm font-medium mb-2">
//                           Project Type *
//                         </label>
//                         <select
//                           id="projectType"
//                           value={projectForm.projectType}
//                           onChange={(e) => setProjectForm({ ...projectForm, projectType: e.target.value })}
//                           className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
//                         >
//                           <option>Web Application</option>
//                           <option>Mobile Application (Java Or Flutter)</option>
//                           <option>UI/UX Design</option>
//                           {/* <option>Consultation</option>
//                           <option>Other</option> */}
//                         </select>
//                       </div>
//                     </div>
//                     <div>
//                       <label htmlFor="budget" className="block text-sm font-medium mb-2">
//                         Estimated Budget (Optional)
//                       </label>
//                       <Input
//                         id="budget"
//                         value={projectForm.budget}
//                         onChange={(e) => setProjectForm({ ...projectForm, budget: e.target.value })}
//                         placeholder="₹5,000 - ₹10,000"
//                         className="bg-background/50"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="description" className="block text-sm font-medium mb-2">
//                         Project Description *
//                       </label>
//                       <Textarea
//                         id="description"
//                         value={projectForm.description}
//                         onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
//                         placeholder="Tell me about your project..."
//                         rows={4}
//                         className={`bg-background/50 resize-none ${errors.description ? "border-destructive" : ""}`}
//                       />
//                       {errors.description && <p className="text-destructive text-sm mt-1">{errors.description}</p>}
//                     </div>
//                   </>
//                 )}

//                 {/* Recruiter Form */}
//                 {inquiryType === "recruiter" && (
//                   <>
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium mb-2">
//                         Your Name *
//                       </label>
//                       <Input
//                         id="name"
//                         value={recruiterForm.name}
//                         onChange={(e) => setRecruiterForm({ ...recruiterForm, name: e.target.value })}
//                         placeholder="Your Name"
//                         className={`bg-background/50 ${errors.name ? "border-destructive" : ""}`}
//                       />
//                       {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium mb-2">
//                         Your Email *
//                       </label>
//                       <Input
//                         id="email"
//                         type="email"
//                         value={recruiterForm.email}
//                         onChange={(e) => setRecruiterForm({ ...recruiterForm, email: e.target.value })}
//                         placeholder="abc@example.com"
//                         className={`bg-background/50 ${errors.email ? "border-destructive" : ""}`}
//                       />
//                       {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
//                     </div>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <div>
//                         <label htmlFor="company" className="block text-sm font-medium mb-2">
//                           Company *
//                         </label>
//                         <Input
//                           id="company"
//                           value={recruiterForm.company}
//                           onChange={(e) => setRecruiterForm({ ...recruiterForm, company: e.target.value })}
//                           placeholder="Tech Solutions Ltd."
//                           className={`bg-background/50 ${errors.company ? "border-destructive" : ""}`}
//                         />
//                         {errors.company && <p className="text-destructive text-sm mt-1">{errors.company}</p>}
//                       </div>
//                       <div>
//                         <label htmlFor="role" className="block text-sm font-medium mb-2">
//                           Role / Position *
//                         </label>
//                         <Input
//                           id="role"
//                           value={recruiterForm.role}
//                           onChange={(e) => setRecruiterForm({ ...recruiterForm, role: e.target.value })}
//                           placeholder="Frontend Developer"
//                           className={`bg-background/50 ${errors.role ? "border-destructive" : ""}`}
//                         />
//                         {errors.role && <p className="text-destructive text-sm mt-1">{errors.role}</p>}
//                       </div>
//                     </div>
//                     <div>
//                       <label htmlFor="jobDescriptionLink" className="block text-sm font-medium mb-2">
//                         Job Description Link (Optional)
//                       </label>
//                       <Input
//                         id="jobDescriptionLink"
//                         type="url"
//                         value={recruiterForm.jobDescriptionLink}
//                         onChange={(e) => setRecruiterForm({ ...recruiterForm, jobDescriptionLink: e.target.value })}
//                         placeholder="https://example.com/job-listing"
//                         className={`bg-background/50 ${errors.jobDescriptionLink ? "border-destructive" : ""}`}
//                       />
//                       {errors.jobDescriptionLink && <p className="text-destructive text-sm mt-1">{errors.jobDescriptionLink}</p>}
//                     </div>
//                     <div>
//                       <label htmlFor="message" className="block text-sm font-medium mb-2">
//                         Additional Message (Optional)
//                       </label>
//                       <Textarea
//                         id="message"
//                         value={recruiterForm.message}
//                         onChange={(e) => setRecruiterForm({ ...recruiterForm, message: e.target.value })}
//                         placeholder="Any other details..."
//                         rows={3}
//                         className="bg-background/50 resize-none"
//                       />
//                     </div>
//                   </>
//                 )}

//                 <Button
//                   type="submit"
//                   className="w-full gradient-primary text-lg py-6 hover:opacity-90 transition-opacity"
//                 >
//                   Send Message <Send className="ml-2 w-4 h-4" />
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;








import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { z } from "zod";

type InquiryType = "general" | "project" | "recruiter";

const generalSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const projectSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(100).optional(),
  projectType: z.string().trim().min(1, "Project type is required"),
  budget: z.string().trim().max(50).optional(),
  description: z.string().trim().min(10, "Description must be at least 10 characters").max(1000),
});

const recruiterSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().min(1, "Company is required").max(100),
  role: z.string().trim().min(1, "Role is required").max(100),
  jobDescriptionLink: z.string().trim().url("Invalid URL").max(500).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional(),
});

type GeneralForm = z.infer<typeof generalSchema>;
type ProjectForm = z.infer<typeof projectSchema>;
type RecruiterForm = z.infer<typeof recruiterSchema>;

const Contact = () => {
  const [inquiryType, setInquiryType] = useState<InquiryType>("general");
  const [generalForm, setGeneralForm] = useState<GeneralForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [projectForm, setProjectForm] = useState<ProjectForm>({
    name: "",
    email: "",
    company: "",
    projectType: "Web Application",
    budget: "",
    description: "",
  });
  const [recruiterForm, setRecruiterForm] = useState<RecruiterForm>({
    name: "",
    email: "",
    company: "",
    role: "",
    jobDescriptionLink: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Email compose dialog state
  const [chooserOpen, setChooserOpen] = useState(false);
  const [computedSubject, setComputedSubject] = useState("");
  const [computedBody, setComputedBody] = useState("");

  // Change this to your destination email (used across the component)
  const recipientEmail = "231263116003setiit@gmail.com";

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: recipientEmail,
      link: `mailto:${recipientEmail}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7211117605",
      link: "tel:+917211117605",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, Gujarat",
    },
  ];

  const handleInquiryTypeChange = (type: InquiryType) => {
    setInquiryType(type);
    setErrors({});
  };

  const buildEmailBody = () => {
    let body = "";
    
    if (inquiryType === "general") {
      body = `Hi,

Name: ${generalForm.name}
Email: ${generalForm.email}

Subject: ${generalForm.subject}

Message:
${generalForm.message}

---
Sent from Portfolio Contact Form`;
    } else if (inquiryType === "project") {
      body = `Hi,

I have a project in mind and would like to work together.

Name: ${projectForm.name}
Email: ${projectForm.email}
${projectForm.company ? `Company: ${projectForm.company}` : ""}
Project Type: ${projectForm.projectType}
${projectForm.budget ? `Budget: ${projectForm.budget}` : ""}

Project Description:
${projectForm.description}

---
Sent from Portfolio Contact Form`;
    } else {
      body = `Hi,

I'm reaching out regarding a potential opportunity.

Name: ${recruiterForm.name}
Email: ${recruiterForm.email}
Company: ${recruiterForm.company}
Role/Position: ${recruiterForm.role}
${recruiterForm.jobDescriptionLink ? `Job Description Link: ${recruiterForm.jobDescriptionLink}` : ""}

${recruiterForm.message ? `Additional Message:\n${recruiterForm.message}` : ""}

---
Sent from Portfolio Contact Form`;
    }
    
    return encodeURIComponent(body);
  };

  const getSubject = () => {
    if (inquiryType === "general") {
      return encodeURIComponent(generalForm.subject);
    } else if (inquiryType === "project") {
      return encodeURIComponent(`Project Inquiry: ${projectForm.projectType}`);
    } else {
      return encodeURIComponent(`Job Opportunity: ${recruiterForm.role}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      // Validate based on inquiry type
      if (inquiryType === "general") {
        generalSchema.parse(generalForm);
      } else if (inquiryType === "project") {
        projectSchema.parse(projectForm);
      } else {
        recruiterSchema.parse(recruiterForm);
      }

      // Compute email details and open chooser
      const subject = getSubject();
      const body = buildEmailBody();
      setComputedSubject(subject);
      setComputedBody(body);
      setChooserOpen(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  const openWith = (provider: "default" | "gmail" | "outlook" | "yahoo") => {
    const to = encodeURIComponent(recipientEmail);
    const subject = computedSubject; // already encoded
    const body = computedBody; // already encoded

    const open = (url: string) => window.open(url, provider === "default" ? "_self" : "_blank");

    if (provider === "default") {
      open(`mailto:${recipientEmail}?subject=${subject}&body=${body}`);
    } else if (provider === "gmail") {
      open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`);
    } else if (provider === "outlook") {
      open(`https://outlook.live.com/mail/deeplink/compose?to=${to}&subject=${subject}&body=${body}`);
    } else {
      open(`https://compose.mail.yahoo.com/?to=${to}&subject=${subject}&body=${body}`);
    }

    setChooserOpen(false);

    // Reset form shortly after opening
    setTimeout(() => {
      if (inquiryType === "general") {
        setGeneralForm({ name: "", email: "", subject: "", message: "" });
      } else if (inquiryType === "project") {
        setProjectForm({ name: "", email: "", company: "", projectType: "Web Application", budget: "", description: "" });
      } else {
        setRecruiterForm({ name: "", email: "", company: "", role: "", jobDescriptionLink: "", message: "" });
      }
    }, 500);
  };

  const getDescription = () => {
    switch (inquiryType) {
      case "general":
        return "Have a question or just want to say hi? Drop me a line!";
      case "project":
        return "Have a project in mind? Let's work together to build something amazing.";
      case "recruiter":
        return "I'm open to new opportunities. Let's discuss how I can contribute to your team.";
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {getDescription()}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of your visions.
              </p>
            </div>
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-effect border-2 hover:border-primary transition-colors duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg gradient-primary">
                    <info.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-lg font-medium hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium">{info.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="glass-effect border-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              {/* Chip Selection */}
              <div className="flex justify-center items-center gap-2 md:gap-3 mb-6 flex-wrap">
                <Button
                  type="button"
                  onClick={() => handleInquiryTypeChange("general")}
                  variant={inquiryType === "general" ? "default" : "outline"}
                  className={inquiryType === "general" ? "gradient-primary" : ""}
                >
                  General
                </Button>
                <Button
                  type="button"
                  onClick={() => handleInquiryTypeChange("project")}
                  variant={inquiryType === "project" ? "default" : "outline"}
                  className={inquiryType === "project" ? "gradient-primary" : ""}
                >
                  Project
                </Button>
                <Button
                  type="button"
                  onClick={() => handleInquiryTypeChange("recruiter")}
                  variant={inquiryType === "recruiter" ? "default" : "outline"}
                  className={inquiryType === "recruiter" ? "gradient-primary" : ""}
                >
                  Recruiter
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* General Form */}
                {inquiryType === "general" && (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        value={generalForm.name}
                        onChange={(e) => setGeneralForm({ ...generalForm, name: e.target.value })}
                        placeholder="Your Name"
                        className={`bg-background/50 ${errors.name ? "border-destructive" : ""}`}
                      />
                      {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={generalForm.email}
                        onChange={(e) => setGeneralForm({ ...generalForm, email: e.target.value })}
                        placeholder="abc@example.com"
                        className={`bg-background/50 ${errors.email ? "border-destructive" : ""}`}
                      />
                      {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        value={generalForm.subject}
                        onChange={(e) => setGeneralForm({ ...generalForm, subject: e.target.value })}
                        placeholder="General Question"
                        className={`bg-background/50 ${errors.subject ? "border-destructive" : ""}`}
                      />
                      {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        value={generalForm.message}
                        onChange={(e) => setGeneralForm({ ...generalForm, message: e.target.value })}
                        placeholder="Your message here..."
                        rows={4}
                        className={`bg-background/50 resize-none ${errors.message ? "border-destructive" : ""}`}
                      />
                      {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                    </div>
                  </>
                )}

                {/* Project Form */}
                {inquiryType === "project" && (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        value={projectForm.name}
                        onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                        placeholder="Your Name"
                        className={`bg-background/50 ${errors.name ? "border-destructive" : ""}`}
                      />
                      {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={projectForm.email}
                        onChange={(e) => setProjectForm({ ...projectForm, email: e.target.value })}
                        placeholder="abc@example.com"
                        className={`bg-background/50 ${errors.email ? "border-destructive" : ""}`}
                      />
                      {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company (Optional)
                        </label>
                        <Input
                          id="company"
                          value={projectForm.company}
                          onChange={(e) => setProjectForm({ ...projectForm, company: e.target.value })}
                          placeholder="Your Company, Inc."
                          className="bg-background/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          value={projectForm.projectType}
                          onChange={(e) => setProjectForm({ ...projectForm, projectType: e.target.value })}
                          className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option>Web Application</option>
                          <option>Mobile Application</option>
                          <option>UI/UX Design</option>
                          <option>Consultation</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">
                        Estimated Budget (Optional)
                      </label>
                      <Input
                        id="budget"
                        value={projectForm.budget}
                        onChange={(e) => setProjectForm({ ...projectForm, budget: e.target.value })}
                        placeholder="$5,000 - $10,000"
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium mb-2">
                        Project Description *
                      </label>
                      <Textarea
                        id="description"
                        value={projectForm.description}
                        onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                        placeholder="Tell me about your project..."
                        rows={4}
                        className={`bg-background/50 resize-none ${errors.description ? "border-destructive" : ""}`}
                      />
                      {errors.description && <p className="text-destructive text-sm mt-1">{errors.description}</p>}
                    </div>
                  </>
                )}

                {/* Recruiter Form */}
                {inquiryType === "recruiter" && (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        value={recruiterForm.name}
                        onChange={(e) => setRecruiterForm({ ...recruiterForm, name: e.target.value })}
                        placeholder="Your Name"
                        className={`bg-background/50 ${errors.name ? "border-destructive" : ""}`}
                      />
                      {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={recruiterForm.email}
                        onChange={(e) => setRecruiterForm({ ...recruiterForm, email: e.target.value })}
                        placeholder="abc@example.com"
                        className={`bg-background/50 ${errors.email ? "border-destructive" : ""}`}
                      />
                      {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company *
                        </label>
                        <Input
                          id="company"
                          value={recruiterForm.company}
                          onChange={(e) => setRecruiterForm({ ...recruiterForm, company: e.target.value })}
                          placeholder="Tech Solutions Ltd."
                          className={`bg-background/50 ${errors.company ? "border-destructive" : ""}`}
                        />
                        {errors.company && <p className="text-destructive text-sm mt-1">{errors.company}</p>}
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-medium mb-2">
                          Role / Position *
                        </label>
                        <Input
                          id="role"
                          value={recruiterForm.role}
                          onChange={(e) => setRecruiterForm({ ...recruiterForm, role: e.target.value })}
                          placeholder="Frontend Developer"
                          className={`bg-background/50 ${errors.role ? "border-destructive" : ""}`}
                        />
                        {errors.role && <p className="text-destructive text-sm mt-1">{errors.role}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="jobDescriptionLink" className="block text-sm font-medium mb-2">
                        Job Description Link (Optional)
                      </label>
                      <Input
                        id="jobDescriptionLink"
                        type="url"
                        value={recruiterForm.jobDescriptionLink}
                        onChange={(e) => setRecruiterForm({ ...recruiterForm, jobDescriptionLink: e.target.value })}
                        placeholder="https://example.com/job-listing"
                        className={`bg-background/50 ${errors.jobDescriptionLink ? "border-destructive" : ""}`}
                      />
                      {errors.jobDescriptionLink && <p className="text-destructive text-sm mt-1">{errors.jobDescriptionLink}</p>}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Additional Message (Optional)
                      </label>
                      <Textarea
                        id="message"
                        value={recruiterForm.message}
                        onChange={(e) => setRecruiterForm({ ...recruiterForm, message: e.target.value })}
                        placeholder="Any other details..."
                        rows={3}
                        className="bg-background/50 resize-none"
                      />
                    </div>
                  </>
                )}

                <Button
                  type="submit"
                  className="w-full gradient-primary text-lg py-6 hover:opacity-90 transition-opacity"
                >
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>

              <Dialog open={chooserOpen} onOpenChange={setChooserOpen}>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Choose email app</DialogTitle>
                    <DialogDescription>
                      Select how you want to send your message. Subject and body will be prefilled.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button variant="outline" onClick={() => openWith("default")}>Default email app</Button>
                    <Button variant="outline" onClick={() => openWith("gmail")}>Gmail</Button>
                    <Button variant="outline" onClick={() => openWith("outlook")}>Outlook</Button>
                    <Button variant="outline" onClick={() => openWith("yahoo")}>Yahoo Mail</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
