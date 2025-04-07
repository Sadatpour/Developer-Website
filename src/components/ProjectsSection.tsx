
import { useState } from 'react';
import { ExternalLink, Github, ArrowRightCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A responsive admin dashboard for an e-commerce platform with analytics, order management, and inventory tracking.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Chart.js'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Weather Application',
      description: 'A weather app that displays current conditions and forecasts using geolocation and a weather API.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      technologies: ['React', 'JavaScript', 'CSS Modules', 'OpenWeather API'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Task Management Tool',
      description: 'A Kanban-style task management application with drag-and-drop functionality and user authentication.',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      technologies: ['React', 'Redux', 'Firebase', 'Styled Components'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and skills with a modern, responsive design.',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title dark:text-black">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full animate-fade-in">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between pt-4 border-t">
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-dev-blue hover:text-dev-darkblue transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-dev-blue hover:text-dev-darkblue transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-12">
            <Button 
              variant="outline" 
              className="border-dev-blue text-dev-blue hover:bg-dev-blue/10"
              onClick={() => setVisibleProjects(projects.length)}
            >
              View More Projects
              <ArrowRightCircle className="ml-2" size={16} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
