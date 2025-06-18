
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Formateur en Développement Web",
      company: "Université de Kinshasa (UNIKIN)",
      period: "2020 - Présent",
      description: "Formation des étudiants en développement web avec PHP, transmission des bonnes pratiques de programmation et encadrement de projets étudiants.",
      technologies: ["PHP", "HTML/CSS", "JavaScript", "MySQL"]
    },
    {
      title: "Développeur Web Freelance",
      company: "Travailleur Indépendant",
      period: "2019 - Présent",
      description: "Développement d'applications web sur mesure pour diverses entreprises, de la conception à la mise en production, en passant par la maintenance.",
      technologies: ["Laravel", "React", "PHP", "JavaScript"]
    },
    {
      title: "Secrétaire - Responsable Technique",
      company: "Association Étudiante",
      period: "2017 - 2019",
      description: "Gestion des systèmes d'information de l'association, développement d'outils de gestion internes et formation des membres aux outils numériques.",
      technologies: ["HTML/CSS", "PHP", "MySQL", "JavaScript"]
    }
  ];

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-comfortaa text-gray-800">
          Expériences Professionnelles
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-xl font-comfortaa text-gray-800">{exp.title}</CardTitle>
                <div className="text-primary font-semibold font-comfortaa">{exp.company}</div>
                <div className="text-sm text-gray-500 font-comfortaa">{exp.period}</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 font-comfortaa">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary font-comfortaa">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
