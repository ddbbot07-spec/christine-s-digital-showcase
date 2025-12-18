import { MapPin, Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero relative overflow-hidden flex items-center">
      {/* Decorative curved lines */}
      <svg className="absolute top-10 left-10 w-32 h-32 text-[hsl(var(--hero-accent))] opacity-30" viewBox="0 0 100 100" fill="none">
        <path d="M10 50 Q 30 20, 50 50 T 90 50" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M10 60 Q 30 30, 50 60 T 90 60" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
      
      <svg className="absolute top-20 right-20 w-24 h-24 text-[hsl(var(--hero-accent))] opacity-40" viewBox="0 0 100 100" fill="none">
        <path d="M20 20 Q 50 10, 80 30 Q 90 50, 70 80" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      <svg className="absolute bottom-40 left-20 w-20 h-20 text-[hsl(var(--hero-accent-dark))] opacity-30" viewBox="0 0 100 100" fill="none">
        <path d="M10 80 Q 40 20, 90 50" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      {/* Decorative blob shapes */}
      <div className="absolute top-32 right-[15%] w-72 h-72 bg-hero-blob rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-60 blur-sm" />
      <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-hero-blob rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-50 blur-sm" />
      <div className="absolute top-1/4 left-[30%] w-48 h-48 bg-[hsl(var(--hero-purple))] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] opacity-40" />
      
      {/* Floating decorative dots */}
      <div className="absolute top-40 right-[30%] w-3 h-3 bg-[hsl(var(--hero-accent))] rounded-full opacity-60" />
      <div className="absolute top-60 left-[25%] w-2 h-2 bg-[hsl(var(--hero-accent-dark))] rounded-full opacity-50" />
      <div className="absolute bottom-32 right-[25%] w-4 h-4 bg-[hsl(var(--hero-accent))] rounded-full opacity-40" />
      
      {/* Large decorative circle outlines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border-2 border-[hsl(var(--hero-accent))]/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-[hsl(var(--hero-accent-dark))]/10 rounded-full" />

      <div className="container mx-auto px-6 relative z-10 py-32">
        <div className="max-w-4xl">
          <p className="text-[hsl(var(--hero-accent-dark))] font-semibold tracking-wide mb-4 animate-fade-in">
            Lead CAFM / CMMS / Helpdesk Supervisor
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
            Christine R.
            <br />
            <span className="text-gradient">Ecarma</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 animate-slide-up delay-200">
            14+ years of expertise in Facilities Management, CMMS Implementation, 
            and Customer Service Excellence across multiple industries in Qatar.
          </p>

          <div className="flex flex-wrap gap-4 text-foreground/80 text-sm animate-slide-up delay-300">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <MapPin size={16} className="text-[hsl(var(--hero-accent))]" />
              <span>Doha, Qatar</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Mail size={16} className="text-[hsl(var(--hero-accent))]" />
              <span>Christine.ecarma@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Phone size={16} className="text-[hsl(var(--hero-accent))]" />
              <span>+974 50827928</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 animate-slide-up delay-400">
            <a
              href="#contact"
              className="bg-accent-gradient text-card px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition-all hover:scale-105"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="border-2 border-[hsl(var(--hero-accent))] text-[hsl(var(--hero-accent-dark))] px-8 py-3 rounded-full font-semibold hover:bg-[hsl(var(--hero-accent))]/10 transition-colors"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[hsl(var(--hero-accent))]/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[hsl(var(--hero-accent))] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
