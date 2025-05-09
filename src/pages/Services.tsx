
import { motion } from 'framer-motion';
import { ArrowRightLeft, Shield, Users, BookOpen, Globe } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <ArrowRightLeft className="h-12 w-12 text-blue-500" />,
      title: "Peering and Interconnection",
      description: "Facilitating interconnection among members to enhance local traffic routing and reduce international bandwidth usage.",
      details: [
        "Develop and maintain peering policies",
        "Provide technical assistance for interconnection",
        "Monitor and optimize routing efficiency",
        "Facilitate agreements between providers"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-500" />,
      title: "Cybersecurity Awareness & Incident Handling",
      description: "Promoting security best practices and providing coordinated response support to incidents.",
      details: [
        "Regular security bulletins and updates",
        "Incident response coordination",
        "Training and awareness workshops",
        "Vulnerability assessment assistance"
      ]
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-500" />,
      title: "Policy Advocacy & Member Representation",
      description: "Representing members' interests in policymaking and stakeholder forums.",
      details: [
        "Engagement with regulatory bodies",
        "Policy development and recommendations",
        "Industry standards development",
        "Representation in national and international forums"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-blue-500" />,
      title: "Industry Collaboration & Capacity Building",
      description: "Organizing training and fostering cooperation within the networking ecosystem.",
      details: [
        "Technical workshops and training",
        "Knowledge sharing forums",
        "Networking events",
        "Industry conferences and seminars"
      ]
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-500" />,
      title: "Infrastructure Facilitation",
      description: "Supporting shared infrastructure initiatives and improved access for members.",
      details: [
        "Shared resources coordination",
        "Infrastructure planning assistance",
        "Joint procurement opportunities",
        "Technical standards development"
      ]
    }
  ];

  return (
    <PageLayout 
      title="Our Services" 
      description="Explore the range of services that NESPAK provides to its members and the broader ICT ecosystem in Kenya."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{service.description}</p>
                <details className="group text-sm">
                  <summary className="list-none flex items-center cursor-pointer font-medium text-blue-600 dark:text-blue-400">
                    <span>View details</span>
                    <svg
                      className="ml-1.5 h-4 w-4 transition-transform group-open:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-2 space-y-1">
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                      {service.details.map((detail, i) => (
                        <li key={i} className="mt-1">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Need More Information?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Our team is ready to provide more detailed information about our services and how they can benefit your organization.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild>
            <a href="/membership">Become a Member</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Services;
