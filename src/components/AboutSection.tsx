import { Target, Users, Award, Globe } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: '14+ Years',
    description: 'Professional Experience',
  },
  {
    icon: Users,
    title: 'Team Leader',
    description: 'Helpdesk Operations',
  },
  {
    icon: Award,
    title: 'CAFM Expert',
    description: 'System Implementation',
  },
  {
    icon: Globe,
    title: 'International',
    description: 'Qatar Based Professional',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-medium tracking-wide mb-3">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dedicated Facilities
            <br />
            <span className="text-muted-foreground">Management Professional</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A creative and motivated professional eager to leverage more than 14 years of 
              experience gained in the fields of Facilities Management, Operation & Maintenance, 
              Customer Service, and Computer Maintenance Management Systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expertise spans across multiple CMMS platforms including ORACLE, CAFM, FSIGO, CAEMS, 
              CSM, Web TMA, ePMS, CRM, and SRMS, combined with strong capabilities in Asset 
              Management and Administrative relations.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                Filipino Nationality
              </span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                Qatar Driving License
              </span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                Available for Relocation
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
