import { MapPin, Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero relative overflow-hidden flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/5 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-32">
        <div className="max-w-4xl">
          <p className="text-accent font-medium tracking-wide mb-4 animate-fade-in">
            Lead CAFM / CMMS / Helpdesk Supervisor
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Christine R.
            <br />
            <span className="text-gradient">Ecarma</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mb-8 animate-slide-up delay-200">
            14+ years of expertise in Facilities Management, CMMS Implementation, 
            and Customer Service Excellence across multiple industries in Qatar.
          </p>

          <div className="flex flex-wrap gap-4 text-primary-foreground/80 text-sm animate-slide-up delay-300">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-accent" />
              <span>Doha, Qatar</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-accent" />
              <span>Christine.ecarma@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-accent" />
              <span>+974 50827928</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 animate-slide-up delay-400">
            <a
              href="#contact"
              className="bg-accent-gradient text-accent-foreground px-8 py-3 rounded-lg font-semibold shadow-accent hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
