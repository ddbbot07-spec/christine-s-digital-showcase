import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-medium tracking-wide mb-3">Background</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-accent" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-lg text-accent font-medium mb-4">
                  AMA ACLC College
                </p>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Tacloban City, Philippines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Graduated October 2008</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Key Areas of Study</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Database Management',
                  'System Analysis',
                  'Programming',
                  'Network Administration',
                  'IT Project Management',
                  'Computer Systems',
                ].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
