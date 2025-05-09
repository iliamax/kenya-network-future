
import { motion } from 'framer-motion';
import { Users, BookOpen, Target, Globe } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const objectives = [
    {
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      title: "Policy Advocacy",
      description: "To advocate for ICT policies and regulations that promote fair competition and industry growth."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Cooperative Forum",
      description: "To provide a cooperative forum for ISPs and infrastructure providers."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      title: "Network Efficiency",
      description: "To promote interconnection, peering, cybersecurity awareness, and efficient networking."
    },
    {
      icon: <Target className="h-6 w-6 text-blue-500" />,
      title: "Representation",
      description: "To represent members in relevant discussions at national, regional, and global levels."
    }
  ];

  const leadership = [
    {
      name: "Jane Doe",
      title: "Chairperson",
      company: "Telcom Kenya",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "John Smith",
      title: "Vice Chairperson",
      company: "NetConnect Ltd",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Sarah Kimani",
      title: "Secretary",
      company: "DataCore Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <PageLayout 
      title="About NESPAK" 
      description="Learn about the Network Service Providers Association of Kenya's mission, vision, and objectives."
    >
      {/* Overview Section */}
      <motion.div 
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">Our Formation & Purpose</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              NESPAK (Network Service Providers Association of Kenya) was formed to unify and represent Kenya's ISPs and network-related organizations. The association is a non-profit society registered under the Societies Act.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We bring together Internet Service Providers, Data Centers, and Infrastructure Providers across Kenya to collaborate on improving the digital landscape of our nation.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl blur opacity-20"></div>
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-2">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80" 
                alt="NESPAK Members Meeting" 
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mission & Vision Section */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-blue-200 dark:border-blue-700 shadow-lg overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold ml-4 text-gray-800 dark:text-gray-200">Our Mission</h3>
            </div>
            <blockquote className="text-gray-700 dark:text-gray-300 italic border-l-4 border-blue-500 pl-4">
              "To be the voice and advocate for Kenya's network service providers, promoting fair access, industry collaboration, and digital growth."
            </blockquote>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border-teal-200 dark:border-teal-700 shadow-lg overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center mb-4">
              <div className="bg-teal-600 p-3 rounded-full">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold ml-4 text-gray-800 dark:text-gray-200">Our Vision</h3>
            </div>
            <blockquote className="text-gray-700 dark:text-gray-300 italic border-l-4 border-teal-500 pl-4">
              "A digitally connected Kenya through strong partnerships and policy advocacy."
            </blockquote>
          </CardContent>
        </Card>
      </motion.div>

      {/* Objectives Section */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Our Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((objective, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-full mr-4">
                    {objective.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">{objective.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{objective.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Leadership Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((leader, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">{leader.name}</h3>
                  <p className="text-sm text-gray-200">{leader.title}</p>
                  <p className="text-xs text-gray-300">{leader.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default About;
