
import { Card, CardContent } from "@/components/ui/card";

const TimelineSection = () => {
  const timelineData = [
    {
      period: "2015 - 2019",
      title: "Licence en Génie Informatique",
      institution: "Université de Kinshasa (UNIKIN)",
      description: "Formation approfondie en développement logiciel, bases de données et systèmes d'information.",
      icon: "🎓"
    },
    {
      period: "2009 - 2015",
      title: "Études Secondaires",
      institution: "Collège Saint Charles Lwanga",
      description: "Section Scientifique avec spécialisation en Mathématiques-Physique.",
      icon: "📚"
    },
    {
      period: "2003 - 2009",
      title: "Études Primaires",
      institution: "École Primaire SHANGA",
      description: "Formation de base solide avec excellence académique.",
      icon: "🏫"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-comfortaa text-gray-800">
          Parcours Académique
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary hidden md:block"></div>
          
          {timelineData.map((item, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full hidden md:block z-10"></div>
              
              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{item.icon}</span>
                      <div>
                        <div className="text-sm text-primary font-semibold font-comfortaa">{item.period}</div>
                        <h3 className="text-xl font-bold text-gray-800 font-comfortaa">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-primary font-semibold mb-2 font-comfortaa">{item.institution}</p>
                    <p className="text-gray-600 font-comfortaa">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Spacer for desktop */}
              <div className="hidden md:block w-2/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
