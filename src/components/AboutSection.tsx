
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-comfortaa text-gray-800">
          À Propos de Moi
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed font-comfortaa">
              Diplômé en Génie Informatique de l'Université de Kinshasa (UNIKIN), je suis un développeur web passionné 
              avec plus de 3 ans d'expérience dans la création d'applications web et mobiles performantes.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed font-comfortaa">
              En tant que formateur à l'UNIKIN, j'enseigne le développement web avec PHP, partageant ma passion pour 
              les technologies modernes avec la nouvelle génération de développeurs. Mon expertise s'étend du frontend 
              au backend, en passant par l'administration de bases de données.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed font-comfortaa">
              Je maîtrise les technologies web modernes comme HTML5, CSS3, JavaScript, React, PHP, Laravel, 
              et les bases de données SQL Server et MySQL. Mon objectif est de créer des solutions innovantes 
              qui répondent aux besoins spécifiques de chaque client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="text-4xl font-bold text-primary mb-2 font-comfortaa">3+</div>
                <div className="text-gray-600 font-comfortaa">Années d'expérience</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="text-4xl font-bold text-primary mb-2 font-comfortaa">10+</div>
                <div className="text-gray-600 font-comfortaa">Projets réalisés</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="text-4xl font-bold text-primary mb-2 font-comfortaa">100%</div>
                <div className="text-gray-600 font-comfortaa">Passion</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
