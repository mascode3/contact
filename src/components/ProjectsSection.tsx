
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Site E-commerce Laravel",
      description: "Plateforme de vente en ligne complète avec gestion des produits, panier, paiement et administration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      category: "web",
      liveUrl: "https://ecommerce-demo.example.com",
      githubUrl: "https://github.com/MasirikaConstantin/ecommerce-laravel"
    },
    {
      title: "Application Mobile React Native",
      description: "Application mobile de gestion de tâches avec synchronisation cloud et notifications push.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      category: "mobile",
      liveUrl: "https://play.google.com/store/apps/details?id=com.masproduct.taskmanager",
      githubUrl: "https://github.com/MasirikaConstantin/task-manager-rn"
    },
    {
      title: "Dashboard Administrateur",
      description: "Interface d'administration moderne avec graphiques, gestion d'utilisateurs et rapports.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["React", "Chart.js", "Node.js", "PostgreSQL"],
      category: "web",
      liveUrl: "https://admin-dashboard.masproduct.com",
      githubUrl: "https://github.com/MasirikaConstantin/admin-dashboard"
    },
    {
      title: "API REST Laravel",
      description: "API robuste pour application mobile avec authentification Sanctum.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      technologies: ["Laravel", "Sanctum", "React", "MySQL"],
      category: "backend",
      liveUrl: "https://pres.mascodeproduct.com/docs",
      githubUrl: "https://github.com/MasirikaConstantin/Presence"
    },
    {
      title: "Site Vitrine Responsive",
      description: "Site web moderne et responsive pour une entreprise avec animations CSS et optimisation SEO.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
      category: "web",
      liveUrl: "https://vitrine.masproduct.com",
      githubUrl: "https://github.com/MasirikaConstantin/site-vitrine"
    },
    {
      title: "Système de Gestion Scolaire",
      description: "Application complète de gestion d'école avec notes, présences, et communication parents-école.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      technologies: ["Laravel", "Vue.js", "MySQL", "Bootstrap"],
      category: "web",
      liveUrl: "https://school-management.masproduct.com",
      githubUrl: "https://github.com/MasirikaConstantin/school-management"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filters = [
    { key: "all", label: "Tous" },
    { key: "web", label: "Web" },
    { key: "mobile", label: "Mobile" },
    { key: "backend", label: "Backend" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-comfortaa text-gray-800">
          Mes Réalisations
        </h2>
        
        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterItem) => (
            <Button
              key={filterItem.key}
              variant={filter === filterItem.key ? "default" : "outline"}
              onClick={() => setFilter(filterItem.key)}
              className={`font-comfortaa ${
                filter === filterItem.key 
                  ? "bg-primary text-white" 
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              }`}
            >
              {filterItem.label}
            </Button>
          ))}
        </div>
        
        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-colors"
                    title="Voir le site"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-colors"
                    title="Voir le code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-comfortaa text-gray-800">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 font-comfortaa text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary font-comfortaa text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full text-xs font-comfortaa">
                      Voir le site
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="secondary" className="w-full text-xs font-comfortaa">
                      Code source
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
