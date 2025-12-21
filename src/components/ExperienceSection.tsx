import { Building2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    company: 'Darwish Interserve',
    location: 'Doha, Qatar',
    role: 'CAFM Planner / Lead Helpdesk',
    period: 'March 2024 - Present',
    responsibilities: [
      'Manage and monitor tasks on CAFM for the entire CORE Projects and ensure that they are prioritized and delivered accordingly',
      'Maintain and update asset registers, maintenance schedules, and work orders in the CAFM system',
      'Plan and coordinate preventive, corrective, and reactive maintenance activities',
      'Monitor job progress and ensure timely completion in line with SLAs',
      'Generate and analyze CAFM reports for performance tracking and trend analysis',
      'Generate 52 weeks PPM schedule',
      'Utilizing the CAFM system and assist users with any training, password or any device issues',
      'Maintain and regularly update the asset inventory within the CAFM system',
      'Ensure Asset Registers are actively maintained to include additions, deletions and changes',
      'Track asset lifecycle from acquisition to disposal/history, ensuring accurate documentation',
      'Coordinate with FMs/maintenance teams for asset replacement or upgrades',
      'Monitor asset performance to identify recurring issues and recommend improvements',
      'Ensure asset tagging, labelling, and location tracking are up to date',
      'Co-operating the Helpdesk operations in the entire CORE projects to ensure a high standard of Customer Service',
      'Monitor SLA/KPI compliance for helpdesk operations and take corrective action when needed',
      'Prepare a duty roster for the Helpdesk to ensure 24/7 coverage',
      'Performing satisfaction survey',
      'Handle complaints, escalations, and urgent service requests effectively',
      'Prepare daily, weekly, monthly, and annually performance reports for Reactive, Corrective, and PPM',
      'Maintain detailed records of asset/maintenance history, service requests, and asset lifecycle in the CAFM system',
      'Assist FM Operation team to update the Policies and Procedure for all the programs to ensure compliance, efficiency, and proper document control',
      'Liaise with internal teams, suppliers, specialist, and clients to schedule and update maintenance activities',
      'Provide regular updates to clients and management on job status and outstanding issues',
      'Performed weekly coordination with the CORE helpdesks/admins and maintenance teams',
    ],
  },
  {
    company: 'AtkinsRealis (SNC Lavalin)',
    location: 'Doha, Qatar',
    role: 'Lead CAFM',
    period: 'April 2019 - February 2024',
    responsibilities: [
      'Serve as the point of contact for internal partners, CAFM vendors, and end users to track and resolve technical issues and system enhancement requests',
      'Act as subject matter expert for CAFM System and data management',
      'Lead the implementation and optimization of CAFM systems for managing physical assets across the company\'s facilities',
      'Dealing with all jobs submitted through the Help Desk/CAFM system. Prioritizing tasks according to the degree of urgency',
      'Ensuring all tasks are closed out in a timely manner. Monitor all job complaints and ensure they are completed within the time frames',
      'Monitor key performance indicators (KPIs) related to asset utilization, maintenance compliance, and lifecycle performance',
      'Generate regular reports and dashboards to provide insights to management and stakeholders',
      'Collaborate with project management teams, vendors, and service providers to procure, install, and maintain physical assets according to established specifications and SLAs',
      'Develop and maintain comprehensive inventories of physical assets, including MEP/ELV and network equipment, infrastructure components, and support systems',
      'Ensure accuracy and completeness of asset data within the CAFM system',
      'Establish protocols for tracking and tagging physical assets to facilitate identification, location tracking, and status monitoring',
      'Implement barcode or similar tagging systems as needed',
      'Collaborate with maintenance teams to develop preventive maintenance schedules for critical assets based on manufacturer recommendations, regulatory requirements, and historical performance data',
      'Continuously assess and enhance CAFM processes and procedures to improve efficiency, accuracy, and effectiveness',
      'Stay updated with emerging technologies and industry trends to drive innovation in physical asset management practices',
      'Develop strategies for managing the lifecycle of physical assets, including procurement, deployment, maintenance, and retirement or disposal',
      'Utilize CAFM data to optimize asset lifespan and minimize total cost of ownership',
      'Ensure compliance with relevant regulations, standards, and industry best practices governing the management of physical assets, including safety, security, and environmental requirements',
    ],
  },
  {
    company: 'AtkinsRealis (SNC Lavalin)',
    location: 'Doha, Qatar',
    role: 'CMMS / Call Center Supervisor',
    period: 'January 2014 - March 2019',
    responsibilities: [
      'Supervise the Customer Service Centre operations in the multiple projects of the company to ensure a high standard of Customer Service',
      'Ensure the system is efficient and effective',
      'Performing satisfaction survey',
      'Conduct trainings and coaching with Customer Support Representative for enhancement of their customer service skills',
      'Prepare a duty roster for the Customer Support Representative to ensure 24/7 coverage of the center',
      'Administer and maintain the web-based Service Request Management System (SRMS) used to manage Service Requests from clients and tenants',
      'Coordinate with Maintenance Team Lead/FM Supervisors to ensure timely response and completion of service requests',
      'Develop processes with MTL for monitoring scheduled service requests',
      'Oversee project work and report any discrepancies to the Facility Manager',
      'Provide comprehensive monthly Service Request Reports with graphical presentations to summarize activities, and identify trends and anomalies',
      'Provide comprehensive report to Director of Operation site projects',
      'Coordinate HR Manager for company recruitment',
      'Supervise the entire CMMS program in the multiple projects of the company',
      'Responsible for Implementation of the entire CMMS program including Asset/Equipment data collection, Asset Master Registry, generating monthly and annual reports',
      'Generate monthly Preventative Maintenance Work Orders and track their completion, generate Corrective Maintenance Work Orders, and handle materials inventory',
      'Completed an annual and comprehensive CMMS Program review to ensure it is current with building requirements',
      'Generate the listing of all planned maintenance for the future',
      'Ensuring the KPI records',
      'Managed the computer system and liaise with the CMMS/IT Department to implement modifications to the system',
      'Coordinate with the FM Operations to update the Policies and Procedure for all the programs to ensure compliance, efficiency, and proper document control',
      'Administer the Defects Notice Program during the Defects Liability Period to ensure defects are being completed and documented according to the warranty requirements',
      'Provide comprehensive monthly status report for the CMMS Program and Defect Notice Program with graphical presentation',
      'Issue single-event purchases orders for tasks that are done by subcontractors and coordinate with Procurement and Facility Manager upon completion',
    ],
  },
  {
    company: 'AtkinsRealis (SNC Lavalin)',
    location: 'Doha, Qatar',
    role: 'CMMS / Customer Support Representative',
    period: 'April 2011 - December 2013',
    responsibilities: [
      'Interact with customers to provide and process information in response to inquiries, concerns, and complaints',
      'Prioritizing Service Requests according to the degree of urgency, following-up on pending Service Requests',
      'Interface with the clients and tenants, handle emailed requests and inquiries, emergency calls, and calls from irate and frustrated customers',
      'Escalate to the Facilities Managers when necessary',
      'Handle and resolve customer\'s complaint',
      'Arranged and dispatched technician according to the customers need and service request',
      'Monitoring and keeping the system updated to be able to distinguish which request is pending',
      'Preparing weekly and monthly report',
      'Interaction with clients and customers, keep track of the improvements',
      'Daily monitoring of PM Work Order, Monthly and Annual PM Work Order',
      'Generate PM and CM Work Order',
      'Coordinate Work Order to Maintenance Team Leaders/FM Supervisors',
      'Flexible and work according to the need of the organization',
    ],
  },
  {
    company: 'Strong Group Rent a Car',
    location: 'Doha, Qatar',
    role: 'Administrative Assistant',
    period: 'January 2011 - March 2011',
    responsibilities: [
      'Prepare and manage correspondence reports, digital documents, and records',
      'Maintain schedule and coordinate meetings, appointments, and conference calls',
      'Assist in data entry, report generation, and other administrative tasks as assigned',
      'Provide administrative support to various departments, including HR, finance, and procurement',
    ],
  },
  {
    company: 'City Engineers Office',
    location: 'Tacloban City, Philippines',
    role: 'Administrative Assistant',
    period: 'November 2008 - October 2010',
    responsibilities: [
      'Provide general administrative and clerical support including mailing, scanning, faxing and copying to management',
      'Maintain electronic and hard copy filing system',
      'Open, sort and distribute incoming correspondence',
      'Perform data entry and scan documents',
      'Assist in resolving any administrative problems',
      'Answer calls from customers regarding their inquiries',
      'Prepare and modify documents including their correspondence, reports, drafts, memos and emails',
      'Schedule and coordinate meetings, appointments and travel arrangements for Engineers/Managers',
      'Maintain office supplies for department',
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedResponsibilities = isExpanded ? exp.responsibilities : exp.responsibilities.slice(0, 4);
  const hasMore = exp.responsibilities.length > 4;

  return (
    <div
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
            {displayedResponsibilities.map((resp, i) => (
              <li key={i} className="leading-relaxed">
                • {resp}
              </li>
            ))}
          </ul>

          {hasMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`mt-4 flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors ${
                index % 2 === 0 ? 'md:ml-auto' : ''
              }`}
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Show More ({exp.responsibilities.length - 4} more) <ChevronDown size={16} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

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
              <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
