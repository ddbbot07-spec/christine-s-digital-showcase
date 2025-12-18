import { 
  Monitor, 
  Users, 
  FileText, 
  Clock, 
  MessageSquare, 
  Database,
  Settings,
  Layers,
  ChevronRight
} from 'lucide-react';

const softSkills = [
  { icon: Users, name: 'Team Coordination', description: 'Cross-functional team leadership' },
  { icon: MessageSquare, name: 'Communication', description: 'Client & stakeholder relations' },
  { icon: Clock, name: 'Time Management', description: 'Organizational excellence' },
  { icon: FileText, name: 'Documentation', description: 'Policy & procedure administration' },
];

const technicalSkills = [
  'Computer Aided Facility Management (CAFM)',
  'FSI GO - Mobile Application Platform',
  'Concept/MRI Evolution',
  'Web TMA - Maintenance Management',
  'Computerized Maintenance Management System (CMMS)',
  'Oracle (JDE Enterprise One)',
  'Service Request Management System (SRMS)',
  'CAEMS - Estate Management System',
  'Central System Management (CSM)',
  'CRM - Customer Relationship Management',
  'EPMS Facilities Management Software',
];

const softwareSkills = [
  { name: 'Microsoft Word', level: 95 },
  { name: 'Microsoft Excel', level: 90 },
  { name: 'Microsoft PowerPoint', level: 90 },
  { name: 'Microsoft Outlook', level: 95 },
  { name: 'Adobe Acrobat', level: 85 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-medium tracking-wide mb-3">Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Competencies
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive technical and interpersonal skills developed over 14+ years
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Skills */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <Users className="text-accent" size={28} />
            </div>
            <h3 className="font-bold text-xl text-foreground mb-6">Professional Skills</h3>
            <div className="space-y-4">
              {softSkills.map((skill) => (
                <div key={skill.name} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                    <skill.icon className="text-muted-foreground group-hover:text-accent transition-colors" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Typing Speed:</span> 40 WPM
              </p>
            </div>
          </div>

          {/* Technical Systems */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <Database className="text-accent" size={28} />
            </div>
            <h3 className="font-bold text-xl text-foreground mb-6">CMMS & CAFM Systems</h3>
            <div className="space-y-2">
              {technicalSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 py-2 border-b border-border/50 last:border-0">
                  <ChevronRight size={14} className="text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Software Proficiency */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <Monitor className="text-accent" size={28} />
            </div>
            <h3 className="font-bold text-xl text-foreground mb-6">Software Proficiency</h3>
            <div className="space-y-5">
              {softwareSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent-gradient rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border space-y-2">
              <div className="flex items-center gap-2">
                <Settings size={14} className="text-accent" />
                <span className="text-sm text-muted-foreground">Reports Generation</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers size={14} className="text-accent" />
                <span className="text-sm text-muted-foreground">Presentation with Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
