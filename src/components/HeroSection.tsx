
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-dev-gray dark:from-dev-dark dark:to-dev-darkcharcoal">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3882&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <p className="text-dev-blue font-medium mb-3 animate-fade-in">Hello, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in dark:text-white" style={{ animationDelay: "0.2s" }}>
            John Doe
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6 typewriter">
            Frontend Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            I build exceptional digital experiences with modern frontend technologies.
            Specializing in creating responsive, performant, and accessible web applications.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button className="bg-dev-blue hover:bg-dev-blue/90 text-white px-6 py-2">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" className="border-dev-blue text-dev-blue hover:bg-dev-blue/10 dark:text-dev-lightblue dark:border-dev-lightblue dark:hover:bg-dev-blue/10 px-6 py-2">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-dev-blue hover:text-dev-darkblue dark:text-dev-lightblue dark:hover:text-white transition-colors animation-bounce"
      >
        <ArrowDownCircle size={36} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
