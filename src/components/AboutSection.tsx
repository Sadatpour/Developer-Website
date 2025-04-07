
import { User, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              I'm a passionate frontend developer with 5 years of experience building modern web applications. 
              I specialize in React, TypeScript, and modern CSS techniques including Tailwind CSS.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My journey in web development started at the University of Technology where I earned my 
              Bachelor's degree in Computer Science. Since then, I've worked with startups and established 
              companies to create beautiful, functional interfaces that users love.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through blog posts and community events.
            </p>
          </div>
          
          <div className="grid gap-6">
            <Card className="glass-card animate-fade-in">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <User className="text-dev-blue" size={20} />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  5+ years of professional experience working with modern frameworks and libraries. Collaborated with 
                  cross-functional teams to deliver high-quality products.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="glass-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Award className="text-dev-blue" size={20} />
                  Education & Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  BS in Computer Science from the University of Technology. Additional certifications in 
                  Web Accessibility, Performance Optimization, and UX Design.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="glass-card animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="text-dev-blue" size={20} />
                  Continuous Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Committed to staying updated with the latest technologies and best practices in frontend development. 
                  Regular participant in workshops, conferences, and online courses.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
