import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <ExperienceSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <SkillsSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <EducationSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <ContactSection />
      </ScrollReveal>
      <Footer />
    </main>
  );
};

export default Index;
