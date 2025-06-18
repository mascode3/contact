
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 65 },
        { name: "React", level: 60 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "PHP", level: 90 },
        { name: "Laravel", level: 85 },
        { name: "Node.js", level: 50 },
        { name: "API REST", level: 75 }
      ]
    },
    {
      title: "Bases de Données",
      icon: "🗄️",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "SQL Server", level: 40 },
        { name: "PostgreSQL", level: 30 },
        { name: "MongoDB", level: 50 }
      ]
    },
    {
      title: "Mobile & Autres",
      icon: "📱",
      skills: [
        { name: "Java", level: 80 },
        { name: "React Native", level: 60 },
        { name: "Git/GitHub", level: 50 },
        { name: "Flutter", level: 30 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-comfortaa text-gray-800">
          Compétences Techniques
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-comfortaa text-gray-800">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium font-comfortaa text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500 font-comfortaa">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
