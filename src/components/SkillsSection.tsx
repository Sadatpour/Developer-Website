
import { Check } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'HTML5 & CSS3', proficiency: 95 },
    { name: 'JavaScript (ES6+)', proficiency: 90 },
    { name: 'TypeScript', proficiency: 85 },
    { name: 'React', proficiency: 92 },
    { name: 'Next.js', proficiency: 80 },
    { name: 'Tailwind CSS', proficiency: 90 },
    { name: 'Responsive Design', proficiency: 95 },
    { name: 'Redux / Context API', proficiency: 85 },
  ];

  const tools = [
    { name: 'Git & GitHub', proficiency: 90 },
    { name: 'VS Code', proficiency: 95 },
    { name: 'Webpack', proficiency: 78 },
    { name: 'Docker', proficiency: 70 },
    { name: 'Jest & Testing Library', proficiency: 80 },
    { name: 'Figma', proficiency: 85 },
    { name: 'Chrome DevTools', proficiency: 95 },
    { name: 'npm / yarn / pnpm', proficiency: 90 },
  ];

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Teamwork',
    'Attention to Detail',
    'Time Management',
    'Adaptability',
    'User Empathy',
    'Critical Thinking',
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <Tabs defaultValue="technical" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="tools">Tools & Platforms</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical" className="animate-fade-in-fast">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-gray-500">{skill.proficiency}%</p>
                  </div>
                  <Progress value={skill.proficiency} className="h-2 bg-gray-200" indicatorClassName="bg-dev-blue" />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tools" className="animate-fade-in-fast">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {tools.map((tool) => (
                <div key={tool.name} className="space-y-2">
                  <div className="flex justify-between">
                    <p className="font-medium">{tool.name}</p>
                    <p className="text-gray-500">{tool.proficiency}%</p>
                  </div>
                  <Progress value={tool.proficiency} className="h-2 bg-gray-200" indicatorClassName="bg-dev-blue" />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="soft" className="animate-fade-in-fast">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {softSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="bg-dev-blue/10 p-1 rounded-full">
                    <Check size={16} className="text-dev-blue" />
                  </div>
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
