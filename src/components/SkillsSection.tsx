
import React from 'react';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const frontendSkills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS/Sass', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'PostgreSQL', level: 65 },
    { name: 'GraphQL', level: 60 },
  ];

  const tools = [
    { name: 'Git/GitHub', level: 85 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 },
    { name: 'CI/CD', level: 75 },
    { name: 'Jest/Testing', level: 80 },
  ];

  return (
    <section id="skills" className="bg-gray-50 dark:bg-dev-darkcharcoal py-20">
      <div className="section-container">
        <h2 className="section-title dark:text-white">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {/* Frontend Skills */}
          <div className="glass-card p-6 transform transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-6 text-center text-dev-blue dark:text-dev-lightblue">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-gray-200 dark:bg-gray-700" 
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="glass-card p-6 transform transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-6 text-center text-dev-blue dark:text-dev-lightblue">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-gray-200 dark:bg-gray-700" 
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools and Technologies */}
          <div className="glass-card p-6 transform transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-6 text-center text-dev-blue dark:text-dev-lightblue">Tools & Technologies</h3>
            <div className="space-y-6">
              {tools.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-gray-200 dark:bg-gray-700" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
