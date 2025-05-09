
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Search, ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Resources = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Resources data
  const resourcesData = [
    {
      id: 1,
      title: "Network Security Guide",
      type: "PDF",
      description: "A comprehensive guide for implementing robust security measures for network infrastructure and operations.",
      category: "Security",
      fileSize: "2.4 MB",
      lastUpdated: "May 1, 2025"
    },
    {
      id: 2,
      title: "IPv6 Migration Checklist",
      type: "PDF",
      description: "Step-by-step guide to transitioning your infrastructure from IPv4 to IPv6 with minimal disruption.",
      category: "Technical",
      fileSize: "1.8 MB",
      lastUpdated: "April 15, 2025"
    },
    {
      id: 3,
      title: "ICT Policy Briefs",
      type: "PDF",
      description: "Analysis of recent regulatory developments in Kenya's ICT sector with implications for service providers.",
      category: "Policy",
      fileSize: "3.2 MB",
      lastUpdated: "April 22, 2025"
    },
    {
      id: 4,
      title: "Technical Documentation",
      type: "PDF",
      description: "Detailed technical specifications and best practices for network operators in the Kenyan market.",
      category: "Technical",
      fileSize: "5.1 MB",
      lastUpdated: "April 28, 2025"
    },
    {
      id: 5,
      title: "Cybersecurity Best Practices",
      type: "PDF",
      description: "Industry-standard security protocols and practices to protect network infrastructure from threats.",
      category: "Security",
      fileSize: "2.7 MB",
      lastUpdated: "March 30, 2025"
    },
    {
      id: 6,
      title: "Peering Guidelines",
      type: "PDF",
      description: "Guidelines for establishing efficient peering connections with other network service providers.",
      category: "Technical",
      fileSize: "1.5 MB",
      lastUpdated: "March 15, 2025"
    },
    {
      id: 7,
      title: "Regulatory Compliance Framework",
      type: "PDF",
      description: "Comprehensive overview of compliance requirements for network service providers in Kenya.",
      category: "Policy",
      fileSize: "4.2 MB",
      lastUpdated: "February 28, 2025"
    },
    {
      id: 8,
      title: "Network Performance Optimization",
      type: "PDF",
      description: "Strategies and techniques for optimizing network performance and reliability.",
      category: "Technical",
      fileSize: "3.8 MB",
      lastUpdated: "February 15, 2025"
    }
  ];
  
  // Resource categories
  const categories = ["All", "Security", "Technical", "Policy"];
  
  // State for active category
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter resources by category and search query
  const filteredResources = resourcesData.filter(resource => {
    const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
    const matchesSearch = !searchQuery || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleDownload = (resourceId: number) => {
    const resource = resourcesData.find(r => r.id === resourceId);
    
    toast({
      title: "Download Started",
      description: `Downloading ${resource?.title}`,
    });
    
    console.log("Resource downloaded:", resourceId);
  };

  return (
    <PageLayout 
      title="Resources" 
      description="Access technical documentation, policy briefs, guides, and other resources for network service providers."
    >
      {/* Search and Filter */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search resources..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10"
            />
          </div>
          <Tabs defaultValue="All" className="w-full md:w-auto">
            <TabsList className="bg-gray-100 dark:bg-gray-800 h-auto p-1 flex-wrap">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </motion.div>

      {/* Featured Resources */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Featured Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourcesData.slice(0, 4).map((resource) => (
            <motion.div
              key={resource.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="overflow-hidden h-full border-blue-100 dark:border-blue-900 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex items-start h-full">
                  <div className="mr-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{resource.title}</h3>
                      <Badge variant="outline">{resource.type}</Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm my-2">{resource.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <Badge variant="secondary">{resource.category}</Badge>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300"
                        onClick={() => handleDownload(resource.id)}
                      >
                        <Download className="mr-1 h-4 w-4" /> Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* All Resources */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">All Resources</h2>
        
        {filteredResources.length === 0 ? (
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">No resources found</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              We couldn't find any resources that match your search criteria.
            </p>
            <Button onClick={() => {setSearchQuery(''); setActiveCategory('All');}}>
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="grid grid-cols-1 gap-4">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <CardContent className="p-4 flex items-center">
                      <div className="mr-4 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">{resource.title}</h3>
                          <Badge variant="outline" className="ml-auto md:ml-0">{resource.type}</Badge>
                          <Badge variant="secondary" className="hidden md:inline-flex">{resource.category}</Badge>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 space-x-4">
                          <span>Size: {resource.fileSize}</span>
                          <span>Updated: {resource.lastUpdated}</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                        onClick={() => handleDownload(resource.id)}
                      >
                        <Download className="h-4 w-4" />
                        <span className="sr-only md:not-sr-only md:ml-2">Download</span>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Request Resource Section */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/30 dark:to-teal-900/30 border-blue-200 dark:border-blue-700">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Need Additional Resources?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  If you can't find what you're looking for, get in touch with us. We're constantly updating our resource library to better serve our members.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/membership">Join NESPAK</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-full w-32 h-32 mx-auto flex items-center justify-center shadow-lg">
                  <FileText className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </PageLayout>
  );
};

export default Resources;
