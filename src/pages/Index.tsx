
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Globe, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stats = [
    { value: '40+', label: 'ISP Members' },
    { value: '15+', label: 'Data Centers' },
    { value: '24/7', label: 'Cyber Protection' },
    { value: '99.9%', label: 'Uptime' }
  ];

  const highlights = [
    { 
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: 'Cybersecurity',
      description: 'Promoting best practices and providing coordinated response to incidents',
      link: '/cybersecurity'
    },
    { 
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: 'NIXP',
      description: 'Kenya\'s premier Internet Exchange Point for efficient local traffic routing',
      link: '/nixp'
    },
    { 
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Membership',
      description: 'Join Kenya\'s leading network of ISPs and infrastructure providers',
      link: '/membership'
    },
    { 
      icon: <Calendar className="h-8 w-8 text-blue-500" />,
      title: 'Events',
      description: 'Stay updated with industry events, workshops and training programs',
      link: '/events'
    }
  ];

  const latestNews = [
    {
      title: "NESPAK Hosts Annual Cybersecurity Summit",
      date: "May 5, 2025",
      excerpt: "Leading experts gathered to discuss emerging threats and solutions in the digital landscape.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "New Peering Partnership Announced",
      date: "April 28, 2025",
      excerpt: "NESPAK facilitates groundbreaking partnership to enhance regional connectivity.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-300/20 to-teal-300/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Hero section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 md:pr-8 text-center md:text-left" 
              initial="hidden" 
              animate="visible" 
              variants={fadeIn}
            >
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/29243d56-10e8-4d2b-bf92-86dcf95ebaae.png" 
                  alt="NESPAK Logo" 
                  className="h-24 md:h-32 mx-auto md:mx-0 mb-4"
                />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 dark:from-blue-400 dark:via-blue-300 dark:to-teal-300 bg-clip-text text-transparent leading-tight">
                Uniting Kenya's network service providers to shape the digital future
              </h1>

              <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-xl">
                NESPAK is a legally registered society in Kenya representing Internet Service Providers, 
                Data Centers, and Infrastructure Providers. We advocate for fair policy, foster collaboration, 
                and promote innovation and cybersecurity in Kenya's network space.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Link to="/membership">Join NESPAK</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/30"
                >
                  <Link to="/services">View Services</Link>
                </Button>
                <Button 
                  asChild 
                  variant="ghost"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/30"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="md:w-1/2 mt-12 md:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl blur opacity-30"></div>
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-2">
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80" 
                      alt="Networking professionals" 
                      className="w-full h-72 md:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent">
                NESPAK Highlights
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover how NESPAK is revolutionizing Kenya's digital landscape through our core programs and initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                    <Link 
                      to={item.link} 
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured news section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent">
                Latest News
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest developments in Kenya's digital infrastructure landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{news.date}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{news.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{news.excerpt}</p>
                    <Link 
                      to="/news" 
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              variant="outline"
              className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/30"
            >
              <Link to="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="relative overflow-hidden rounded-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-90"></div>
            <div className="relative z-10 py-12 md:py-16 px-6 md:px-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Shape Kenya's Digital Future?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join NESPAK today and be part of a growing community of network service providers committed to 
                transforming Kenya's digital landscape through collaboration, innovation, and advocacy.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  asChild 
                  className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-all duration-300"
                >
                  <Link to="/membership">Become a Member</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
