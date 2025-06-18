
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center animate-fade-in">
        <div className="mb-8">
          <img 
            src="/IMG_20240522_192321_516.jpg" 
            alt="KALEMBU MASIRIKA Constantin" 
            className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-white"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-comfortaa">
          KALEMBU MASIRIKA <span className="text-primary">Constantin</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-comfortaa font-medium">
          Développeur Web & Mobile | Administrateur BDD | Formateur
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-comfortaa">
          Passionné par les technologies web et l'innovation, je transforme vos idées en solutions digitales performantes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={() => scrollToSection('realisations')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-comfortaa"
          >
            Voir mon travail
          </Button>
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('contact')}
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-comfortaa"
          >
            Contactez-moi
          </Button>
        </div>
        
        <div className="animate-bounce">
          <ChevronDown 
            className="w-8 h-8 text-primary mx-auto cursor-pointer" 
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
