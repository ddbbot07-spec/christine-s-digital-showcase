import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Darwish Interserve',
    location: 'Doha, Qatar',
    role: 'CAFM Planner / Lead Helpdesk',
    period: 'March 2024 - Present',
    responsibilities: [
      'Manage and monitor tasks on CAFM for the entire CORE Projects ensuring prioritization and delivery',
      'Maintain and update asset registers, maintenance schedules, and work orders in the CAFM system',
      'Plan and coordinate preventive, corrective, and reactive maintenance activities',
      'Generate 52 weeks PPM schedule and performance reports',
      'Co-operate Helpdesk operations ensuring high standard of Customer Service',
      'Monitor SLA/KPI compliance and handle complaints, escalations, and urgent service requests',
    ],
  },
  {
    company: 'AtkinsRealis (SNC Lavalin)',
    location: 'Doha, Qatar',
    role: 'Lead CAFM',
    period: 'April 2019 - February 2024',
    responsibilities: [
      'Served as point of contact for internal partners, CAFM vendors, and end users',
      'Led implementation and optimization of CAFM systems for managing physical assets',
      'Monitored KPIs related to asset utilization, maintenance compliance, and lifecycle performance',
      'Collaborated with vendors and service providers for asset procurement and maintenance',
      'Developed comprehensive inventories of physical assets including MEP/ELV and network equipment',
      'Established protocols for asset tracking, tagging, and lifecycle management',
    ],
  },
  {
    company: 'AtkinsRealis (SNC Lavalin)',
    location: 'Doha, Qatar',
    role: 'CMMS / Call Center Supervisor',
    period: 'January 2014 - March 2019',
    responsibilities: [
      'Supervised Customer Service Centre operations across multiple company projects',
      'Conducted trainings and coaching for Customer Support Representatives',
      'Administered and maintained the web-based Service Request Management System (SRMS)',
      'Supervised the entire CMMS program including Asset/Equipment data collection',
      'Generated comprehensive monthly reports with graphical presentations',
      'Coordinated with HR Manager for company recruitment',
    ],
  },
  {
    company: 'AtkinsRealis (SNC Lavalin)',
    location: 'Doha, Qatar',
    role: 'CMMS / Customer Support Representative',
    period: 'April 2011 - December 2013',
    responsibilities: [
      'Interacted with customers to provide and process information in response to inquiries',
      'Prioritized Service Requests and handled escalations to Facilities Managers',
      'Arranged and dispatched technicians according to customer needs',
      'Generated PM and CM Work Orders and coordinated with Maintenance Team Leaders',
    ],
  },
  {
    company: 'Strong Group Rent a Car',
    location: 'Doha, Qatar',
    role: 'Administrative Assistant',
    period: 'January 2011 - March 2011',
    responsibilities: [
      'Prepared and managed correspondence reports and digital documents',
      'Maintained schedules and coordinated meetings and appointments',
      'Provided administrative support to HR, finance, and procurement departments',
    ],
  },
  {
    company: 'City Engineers Office',
    location: 'Tacloban City, Philippines',
    role: 'Administrative Assistant',
    period: 'November 2008 - October 2010',
    responsibilities: [
      'Provided general administrative and clerical support to management',
      'Maintained electronic and hard copy filing systems',
      'Scheduled and coordinated meetings and travel arrangements for Engineers/Managers',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-medium tracking-wide mb-3">Career Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven track record of excellence in facilities management and customer service
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-1/2'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 md:-translate-x-1/2 border-4 border-background z-10" />

                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-accent/20 transition-all duration-300">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Building2 size={16} className="text-accent" />
                      <span className="font-semibold text-foreground">{exp.company}</span>
                      <span className="text-muted-foreground text-sm">• {exp.location}</span>
                    </div>
                    
                    <h3 className="font-bold text-lg text-foreground mb-2">{exp.role}</h3>
                    
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>

                    <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.responsibilities.slice(0, 3).map((resp, i) => (
                        <li key={i} className="leading-relaxed">
                          • {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
