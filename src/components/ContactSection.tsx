import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Facebook, Github, Youtube, Instagram } from "lucide-react";
import emailjs from '@emailjs/browser';
const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Initialisez EmailJS avec votre User ID
  emailjs.init("xqu4W5eY7qHZ2s5lw");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.nom) newErrors.nom = "Le nom est requis";
    if (!formData.email) newErrors.email = "L'email est requis";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email invalide";
    if (!formData.message) newErrors.message = "Le message est requis";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast({ title: "Erreur", description: "Veuillez corriger les erreurs", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        "service_tpvfyqk",       // Service ID (EmailJS)
        "template_7o1w039",      // Template ID (EmailJS)
        {
          from_name: formData.nom,
          from_email: formData.email,
          subject: formData.sujet || "Nouveau message depuis le site",
          message: formData.message,
          to_email: "mascode@mascodeproduct.com" // Votre email professionnel
        }
      );

      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai rapidement."
      });
      
      setFormData({ nom: "", email: "", sujet: "", message: "" });
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      toast({
        title: "Erreur",
        description: "L'envoi a échoué. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "+243 976 075 391",
      link: "tel:+243976075391"
    },
    {
      icon: Mail,
      title: "Email",
      value: "elconstant73@gmail.com",
      link: "mailto:elconstant73@gmail.com"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Kinshasa, RDC",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/mascodeproduct",
      color: "text-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/MasirikaConstantin",
      color: "text-gray-800"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com/@masproduct360",
      color: "text-red-600"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/mascodeproduct/",
      color: "text-pink-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-comfortaa text-gray-800">
          Contactez-moi
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-comfortaa text-gray-800">
                Restons en contact
              </h3>
              <p className="text-gray-600 font-comfortaa leading-relaxed mb-8">
                Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter. 
                Je serais ravi de discuter de vos besoins et de voir comment je peux vous aider.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-comfortaa text-gray-800">{info.title}</h4>
                    <a 
                      href={info.link}
                      className="text-gray-600 hover:text-primary transition-colors font-comfortaa"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-comfortaa text-gray-800">Suivez-moi</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} hover:scale-110 transition-transform`}
                    title={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Formulaire de contact */}
          <Card>
            <CardHeader>
              <CardTitle className="font-comfortaa text-gray-800">Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 font-comfortaa text-gray-700">
                      Nom complet *
                    </label>
                    <Input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      className="font-comfortaa"
                    />
                    {errors.nom && <p className="mt-1 text-sm text-red-600 font-comfortaa">{errors.nom}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 font-comfortaa text-gray-700">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      className="font-comfortaa"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600 font-comfortaa">{errors.email}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 font-comfortaa text-gray-700">
                    Sujet
                  </label>
                  <Input
                    type="text"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleInputChange}
                    placeholder="Sujet de votre message"
                    className="font-comfortaa"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 font-comfortaa text-gray-700">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={5}
                    className="font-comfortaa"
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600 font-comfortaa">{errors.message}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-comfortaa"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        {/* Carte Google Maps */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center font-comfortaa text-gray-800">
            Ma localisation
          </h3>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0826674188797!2d15.315000000000001!3d-4.4419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a329ad7e9e48d%3A0x81f5b8c7a0b6e5f!2sKinshasa%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2sus!4v1699876543210!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Kinshasa"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;