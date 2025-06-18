import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items regroupés par catégorie pour meilleure organisation
  const navItems = [
    { name: "Accueil", href: "#hero" },
    { name: "À Propos", href: "#about" },
    { 
      group: "Expertise",
      items: [
        { name: "Services", href: "#services" },
        { name: "Compétences", href: "#skills" }
      ]
    },
    { 
      group: "Parcours", 
      items: [
        { name: "Expériences", href: "#experience" },
        { name: "Formation", href: "#timeline" }
      ]
    },
    { name: "Réalisations", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      // Détection de la section active
      const sections = navItems.flatMap(item => 
        item.group ? item.items.map(i => i.href.replace('#', '')) : [item.href.replace('#', '')]
      );
      
      const scrollPosition = window.scrollY + 100;
      let found = false;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            found = true;
            break;
          }
        }
      }

      // Gestion de l'effet de scroll
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => activeSection === href.replace('#', '');

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md py-1' : 'shadow-sm py-2'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand - Version améliorée */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg md:text-xl text-gray-900">
                KALEMBU MASIRIKA
              </h1>
              <p className="text-xs text-gray-600">Développeur Full-Stack</p>
            </div>
          </div>
          
          {/* Desktop Navigation - Optimisé pour grand écran */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.group ? (
                <div key={item.group} className="relative group">
                  <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                    {item.group}
                    <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.items.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => scrollToSection(subItem.href)}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          isActive(subItem.href)
                            ? 'bg-primary/10 text-primary'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.name}
                </button>
              )
            ))}
          </div>
          
          {/* CTA Button - Meilleure hiérarchie visuelle */}
          <div className="hidden lg:block ml-4">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-5 py-2 rounded-md shadow-lg transition-all hover:shadow-xl"
            >
              <span className="font-semibold">Contactez-moi</span>
            </Button>
          </div>
          
          {/* Mobile Menu Button - Amélioré */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation - Réorganisé */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-4 pt-2 space-y-1">
            {navItems.flatMap(item => 
              item.group 
                ? [
                    <div key={item.group} className="px-3 py-2 text-sm font-medium text-gray-500">
                      {item.group}
                    </div>,
                    ...item.items.map(subItem => (
                      <button
                        key={subItem.name}
                        onClick={() => scrollToSection(subItem.href)}
                        className={`block w-full text-left px-6 py-3 text-base ${
                          isActive(subItem.href)
                            ? 'bg-primary/10 text-primary'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {subItem.name}
                      </button>
                    ))
                  ]
                : (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left px-6 py-3 text-base ${
                        isActive(item.href)
                          ? 'bg-primary/10 text-primary'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </button>
                  )
            )}
            
            {/* Mobile CTA - Plus visible */}
            <div className="px-4 pt-4">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-3 rounded-md shadow"
              >
                Contactez-moi
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;