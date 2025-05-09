
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, ArrowDown, Clock, Server } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Nixp = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    asNumber: '',
    technicalDetails: '',
  });

  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: "Improved Routing Efficiency",
      description: "Direct traffic exchange between networks reduces hops and improves routing efficiency for local content."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Reduced Latency & Transit Costs",
      description: "Keeping local traffic local reduces international bandwidth costs and improves user experience."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      title: "Local Content Access",
      description: "Faster access to locally hosted services and content for end users across all member networks."
    },
    {
      icon: <Server className="h-6 w-6 text-blue-500" />,
      title: "Network Resilience",
      description: "Multiple interconnection points improve network resilience and reliability for service delivery."
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send form data to email service (in a real application)
    console.log("Form submitted:", formData);
    
    toast({
      title: "Application Received",
      description: "Thank you for your interest in peering. Our team will review your application.",
    });
    
    // Reset form
    setFormData({
      organizationName: '',
      contactName: '',
      email: '',
      phone: '',
      asNumber: '',
      technicalDetails: '',
    });
  };

  return (
    <PageLayout 
      title="NESPAK Internet Exchange Point (NIXP)" 
      description="NIXP facilitates efficient local traffic exchange between networks in Kenya, reducing costs and improving user experience."
    >
      {/* Overview Section */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">About NIXP</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              NESPAK operates an Internet Exchange Point (NIXP) to promote efficient local traffic exchange between networks in Kenya. The NIXP serves as a central hub where ISPs and content providers can interconnect and exchange traffic directly.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              By keeping local traffic local, NIXP reduces the need to route traffic through international links, improving performance and reducing costs for all participants.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl blur opacity-20"></div>
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-2">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80" 
                alt="Server room" 
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Network Traffic Graph */}
      <motion.div 
        className="mb-16 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">Live Network Traffic</h2>
        <div className="h-64 md:h-80 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Server className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-500 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">Real-time network traffic statistics</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">(Integration with IXP Manager visualization)</p>
          </div>
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Benefits of Peering at NIXP</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-full mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Technical Specifications */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Technical Specifications</h2>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-gray-200">NIXP Infrastructure</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <ArrowDown className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Carrier-neutral facility</span>
                </li>
                <li className="flex items-center">
                  <ArrowDown className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Redundant power and cooling</span>
                </li>
                <li className="flex items-center">
                  <ArrowDown className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>24/7 secure access</span>
                </li>
                <li className="flex items-center">
                  <ArrowDown className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Multiple fiber entry points</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-gray-200">Connection Requirements</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <ArrowDown className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>BGP-4 capable router</span>
                </li>
                <li className="flex items-center">
                  <ArrowDown className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Assigned ASN</span>
                </li>
                <li className="flex items-center">
                  <ArrowDown className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>IPv4 and IPv6 support</span>
                </li>
                <li className="flex items-center">
                  <ArrowDown className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Minimum 1Gbps connection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* How to Join */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">How to Join NIXP</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
          Becoming a NIXP peer is straightforward. Complete our peering application form, and our team will guide you through the technical setup process.
        </p>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>Apply for Peering</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>NIXP Peering Application</DialogTitle>
              <DialogDescription>
                Please provide your organization details to apply for peering at NIXP.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="organizationName">Organization Name</Label>
                  <Input
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contactName">Contact Person</Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="asNumber">AS Number</Label>
                  <Input
                    id="asNumber"
                    name="asNumber"
                    placeholder="e.g. AS12345"
                    value={formData.asNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="technicalDetails">Technical Details</Label>
                  <Textarea
                    id="technicalDetails"
                    name="technicalDetails"
                    placeholder="Provide information about your network, connection requirements, etc."
                    value={formData.technicalDetails}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <DialogClose asChild>
                  <Button type="button" variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Submit Application</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </motion.div>
    </PageLayout>
  );
};

export default Nixp;
