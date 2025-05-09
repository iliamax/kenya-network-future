
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Filter, Search } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from '@/hooks/use-toast';

const News = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  
  // News data
  const newsData = [
    {
      id: 1,
      title: "NESPAK Hosts Annual Cybersecurity Summit",
      date: "May 5, 2025",
      excerpt: "Leading experts gathered to discuss emerging threats and solutions in the digital landscape.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      category: "Events"
    },
    {
      id: 2,
      title: "New Peering Partnership Announced",
      date: "April 28, 2025",
      excerpt: "NESPAK facilitates groundbreaking partnership to enhance regional connectivity.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      category: "Partnerships"
    },
    {
      id: 3,
      title: "ICT Policy Framework Update",
      date: "April 15, 2025",
      excerpt: "NESPAK contributes to the development of Kenya's new ICT policy framework.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      category: "Policy"
    },
    {
      id: 4,
      title: "IPv6 Adoption Reaches New Milestone",
      date: "April 7, 2025",
      excerpt: "Kenya's IPv6 deployment rate surpasses regional average thanks to coordinated efforts.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      category: "Technology"
    },
    {
      id: 5,
      title: "NIXP Traffic Exchange Volumes Grow by 40%",
      date: "March 22, 2025",
      excerpt: "Record growth in local traffic exchange demonstrates the value of NESPAK's Internet Exchange Point.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
      category: "NIXP"
    },
    {
      id: 6,
      title: "Member Spotlight: ConnectKenya Ltd",
      date: "March 15, 2025",
      excerpt: "Highlighting the achievements and expansion plans of one of our innovative members.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
      category: "Members"
    }
  ];
  
  // Resources data
  const resourcesData = [
    {
      id: 1,
      title: "Network Security Best Practices",
      type: "PDF",
      description: "Comprehensive guide for securing network infrastructure.",
      category: "Security"
    },
    {
      id: 2,
      title: "IPv6 Migration Checklist",
      type: "PDF",
      description: "Step-by-step guide to transitioning to IPv6.",
      category: "Technical"
    },
    {
      id: 3,
      title: "ICT Policy Brief Q2 2025",
      type: "PDF",
      description: "Analysis of recent regulatory developments in Kenya's ICT sector.",
      category: "Policy"
    },
    {
      id: 4,
      title: "NESPAK Quarterly Newsletter",
      type: "PDF",
      description: "Updates on association activities and industry developments.",
      category: "Newsletter"
    }
  ];
  
  // Filter categories
  const categories = ["All", "Events", "Policy", "Technology", "NIXP", "Partnerships", "Members", "Security"];
  
  // Filter news by category and search query
  const filteredNews = newsData.filter(item => {
    const matchesCategory = !selectedCategory || selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category === "All" ? null : category);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", subscribeEmail);
    
    toast({
      title: "Successfully Subscribed",
      description: "You've been added to our newsletter list.",
    });
    
    setSubscribeEmail('');
  };
  
  const handleResourceClick = (resourceId: number) => {
    console.log("Resource clicked:", resourceId);
    
    toast({
      title: "Downloading Resource",
      description: "Your download will begin shortly.",
    });
  };
  
  const handleReadMore = (newsId: number) => {
    console.log("Read more about news:", newsId);
    
    toast({
      title: "Article Opening",
      description: "Loading the full article...",
    });
  };

  return (
    <PageLayout 
      title="News & Resources" 
      description="Stay updated with the latest news, regulatory updates, and resources from NESPAK."
    >
      {/* Search and Filter */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search news..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={selectedCategory === category || (!selectedCategory && category === "All") ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleCategoryFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>

      {/* News Grid */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Latest News</h2>
        
        {filteredNews.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400">No news articles match your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative h-48">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge>{news.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-5 flex flex-col flex-grow">
                    <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{news.date}</div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">{news.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{news.excerpt}</p>
                    <Button 
                      variant="ghost" 
                      className="text-blue-600 dark:text-blue-400 p-0 justify-start hover:bg-transparent hover:underline"
                      onClick={() => handleReadMore(news.id)}
                    >
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
        
        {filteredNews.length > 0 && (
          <div className="mt-8 text-center">
            <Button>Load More</Button>
          </div>
        )}
      </motion.div>

      {/* Resources Section */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Resources</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resourcesData.map((resource) => (
              <Card key={resource.id} className="overflow-hidden">
                <CardContent className="p-5 flex items-start">
                  <div className="mr-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{resource.title}</h3>
                      <Badge variant="outline">{resource.type}</Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm my-2">{resource.description}</p>
                    <Badge variant="secondary">{resource.category}</Badge>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-blue-600 dark:text-blue-400 p-0 mt-2 hover:bg-transparent hover:underline"
                      onClick={() => handleResourceClick(resource.id)}
                    >
                      Download <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Button variant="outline">View All Resources</Button>
          </div>
        </div>
      </motion.div>

      {/* Newsletter Subscription */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/30 dark:to-teal-900/30 border-blue-200 dark:border-blue-700">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Stay updated with the latest news, regulatory updates, and resources from NESPAK delivered straight to your inbox.
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    placeholder="Enter your email address"
                    type="email"
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    required
                    className="flex-grow"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-full w-28 h-28 mx-auto md:mx-0 flex items-center justify-center shadow-lg">
                  <FileText className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </PageLayout>
  );
};

export default News;
