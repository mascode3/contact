
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ExternalLink } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      title: "Les tendances du développement web en 2024",
      excerpt: "Découvrez les technologies et frameworks qui révolutionnent le développement web cette année.",
      date: "15 Nov 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      link: "#"
    },
    {
      title: "Optimiser les performances d'une application Laravel",
      excerpt: "Techniques avancées pour améliorer la vitesse et l'efficacité de vos applications Laravel.",
      date: "8 Nov 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      link: "#"
    },
    {
      title: "React Native vs Flutter : Quel choix pour 2024 ?",
      excerpt: "Comparaison détaillée entre les deux frameworks leaders du développement mobile cross-platform.",
      date: "1 Nov 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-comfortaa text-gray-800">
          Articles & Insights
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-xs font-comfortaa text-gray-700">
                  {article.readTime}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-comfortaa text-gray-800 line-clamp-2">
                  {article.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-500 font-comfortaa">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    Constantin
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-comfortaa mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Button variant="outline" className="w-full font-comfortaa" asChild>
                  <a href={article.link} className="flex items-center gap-2">
                    Lire l'article
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-comfortaa">
            Voir tous les articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
