
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Database, GraduationCap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Création de sites web modernes et responsives avec les dernières technologies.",
      features: ["Sites vitrines", "Applications web", "E-commerce", "API REST"],
      technologies: ["Laravel", "React", "PHP", "JavaScript"]
    },
    {
      icon: Smartphone,
      title: "Développement Mobile",
      description: "Applications mobiles natives et cross-platform pour iOS et Android.",
      features: ["Apps natives", "React Native", "Interface intuitive", "Performance optimisée"],
      technologies: ["Java", "React Native", "Android SDK", "Firebase"]
    },
    {
      icon: Database,
      title: "Administration BDD",
      description: "Gestion et optimisation de bases de données pour vos applications.",
      features: ["Conception BDD", "Optimisation", "Sauvegardes", "Migration"],
      technologies: ["MySQL", "SQL Server", "PostgreSQL", "MongoDB"]
    },
    {
      icon: GraduationCap,
      title: "Formation & Conseil",
      description: "Formation en développement web et accompagnement technique.",
      features: ["Formation PHP", "Mentorat", "Code Review", "Consulting"],
      technologies: ["Pédagogie", "Best Practices", "Méthodologies", "Veille Tech"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-comfortaa text-gray-800">
          Mes Services
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-comfortaa text-gray-800">{service.title}</CardTitle>
                </div>
                <p className="text-gray-600 font-comfortaa">{service.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 font-comfortaa text-gray-800">Prestations :</h4>
                  <ul className="list-disc list-inside text-gray-600 font-comfortaa space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-comfortaa"
                    >
                      {tech}
                    </span>
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

export default ServicesSection;
