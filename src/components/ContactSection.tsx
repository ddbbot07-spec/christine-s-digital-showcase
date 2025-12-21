import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-medium tracking-wide mb-3">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Open for new opportunities and professional collaborations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:Christine.ecarma@gmail.com"
              className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                <Mail className="text-accent" size={28} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm break-all">
                Christine.ecarma@gmail.com
              </p>
            </a>

            <a
              href="tel:+97450827928"
              className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                <Phone className="text-accent" size={28} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">
                +974 50827928
              </p>
            </a>

            <div className="bg-card rounded-2xl p-8 border border-border text-center">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-accent" size={28} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">
                Doha, Qatar
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              <span className="px-4 py-2 bg-secondary rounded-full border border-border">
                Filipino Nationality
              </span>
              <span className="px-4 py-2 bg-secondary rounded-full border border-border">
                Qatar Driving License
              </span>
              <span className="px-4 py-2 bg-secondary rounded-full border border-border">
                Available for Relocation
              </span>
              <span className="px-4 py-2 bg-secondary rounded-full border border-border">
                Reference on Request
              </span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="mailto:Christine.ecarma@gmail.com?subject=Professional Inquiry"
              className="inline-flex items-center gap-2 bg-accent-gradient text-accent-foreground px-8 py-4 rounded-xl font-semibold shadow-accent hover:opacity-90 transition-opacity"
            >
              <Send size={20} />
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
