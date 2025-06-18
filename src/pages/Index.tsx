
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TimelineSection from "@/components/TimelineSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen font-comfortaa">
      <Header />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <AboutSection />
        
        <ServicesSection />
        
        <section id="timeline">
          <TimelineSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <ProjectsSection />
        
        <TestimonialsSection />
        
        <BlogSection />
        
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
