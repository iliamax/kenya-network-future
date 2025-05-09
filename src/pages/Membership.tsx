import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Globe, Server, Network, Cloud, ArrowRight, Users } from 'lucide-react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Membership = () => {
  const { toast } = useToast();
  const [applicationForm, setApplicationForm] = useState({
    organizationName: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    membershipType: '',
    website: '',
    addressDetails: '',
    organizationDescription: '',
    hearAboutUs: '',
    agreeToTerms: false,
  });

  const membershipTypes = [
    {
      type: "ISPs",
      icon: <Globe className="h-12 w-12 text-blue-500" />,
      description: "Internet Service Providers offering connectivity services to customers in Kenya.",
    },
    {
      type: "Data Centers",
      icon: <Server className="h-12 w-12 text-blue-500" />,
      description: "Data center operators providing colocation, hosting, and other infrastructure services.",
    },
    {
      type: "Network Infrastructure Providers",
      icon: <Network className="h-12 w-12 text-blue-500" />,
      description: "Organizations that provide network infrastructure like fiber, towers, and last-mile solutions.",
    },
    {
      type: "Cloud & Hosting Providers",
      icon: <Cloud className="h-12 w-12 text-blue-500" />,
      description: "Companies offering cloud services, hosting, and SaaS solutions to the Kenyan market.",
    },
  ];

  const benefits = [
    "Participation in policymaking and regulatory forums",
    "Access to NESPAK exchange services (NIXP)",
    "Networking and capacity-building events",
    "Cybersecurity collaboration and incident response",
    "Industry representation at national and international levels",
    "Peering opportunities with other network providers",
    "Technical training and knowledge sharing",
    "Access to industry best practices and standards",
  ];

  const requirements = [
    "Valid business registration in Kenya",
    "Proof of active operations in the network services space",
    "Completed membership application form",
    "Recommendation from at least one existing member (for full membership)",
    "Commitment to NESPAK code of conduct",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setApplicationForm(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Membership application submitted:", applicationForm);
    
    toast({
      title: "Application Submitted",
      description: "Thank you for your interest in NESPAK membership. We'll review your application shortly.",
    });
    
    // Reset form
    setApplicationForm({
      organizationName: '',
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      membershipType: '',
      website: '',
      addressDetails: '',
      organizationDescription: '',
      hearAboutUs: '',
      agreeToTerms: false,
    });
  };

  return (
    <PageLayout 
      title="Membership" 
      description="Join NESPAK and be part of Kenya's premier network service providers association."
    >
      {/* Membership Categories */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Membership Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {membershipTypes.map((memberType, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full w-20 h-20 flex items-center justify-center">
                    {memberType.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{memberType.type}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{memberType.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits & Requirements */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Tabs defaultValue="benefits" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="benefits" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 flex-shrink-0 mt-1">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">Additional Member Resources</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Members also gain access to exclusive resources, including policy briefs, market research, technical documentation, and discounted rates for industry events.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="#join">Learn More About Member Benefits</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="requirements" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-3 flex-shrink-0 mt-1">
                        <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{requirement}</p>
                    </div>
                  ))}
                  
                  <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">Membership Fees</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Membership fees are structured based on organization size and type. Annual dues support NESPAK's activities and operations. Detailed fee information will be provided during the application process.
                    </p>
                    <Button variant="outline" asChild>
                      <a href="#join">View Fee Structure</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Member Directory */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-8 rounded-full w-32 h-32 mx-auto flex items-center justify-center">
                  <Users className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">Member Directory</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Our membership includes leading ISPs, data centers, and network infrastructure providers across Kenya.
                </p>
                <Button asChild>
                  <a href="#">View Member Directory</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Application Form */}
      <motion.div 
        id="join"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Membership Application</h2>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Interested in joining NESPAK? Complete the application form below to start the process.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="organizationName">Organization Name</Label>
                  <Input
                    id="organizationName"
                    name="organizationName"
                    value={applicationForm.organizationName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="membershipType">Membership Category</Label>
                  <select
                    id="membershipType"
                    name="membershipType"
                    value={applicationForm.membershipType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-blue-600"
                  >
                    <option value="" disabled>Select membership type</option>
                    {membershipTypes.map((type, index) => (
                      <option key={index} value={type.type}>{type.type}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Person Name</Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    value={applicationForm.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Contact Phone</Label>
                  <Input
                    id="contactPhone"
                    name="contactPhone"
                    type="tel"
                    value={applicationForm.contactPhone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    name="contactEmail"
                    type="email"
                    value={applicationForm.contactEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    value={applicationForm.website}
                    onChange={handleChange}
                    placeholder="https://"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="addressDetails">Address Details</Label>
                <Input
                  id="addressDetails"
                  name="addressDetails"
                  value={applicationForm.addressDetails}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="organizationDescription">Organization Description</Label>
                <Textarea
                  id="organizationDescription"
                  name="organizationDescription"
                  rows={3}
                  value={applicationForm.organizationDescription}
                  onChange={handleChange}
                  required
                  placeholder="Please provide a brief description of your organization and its activities..."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="hearAboutUs">How did you hear about NESPAK?</Label>
                <Input
                  id="hearAboutUs"
                  name="hearAboutUs"
                  value={applicationForm.hearAboutUs}
                  onChange={handleChange}
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={applicationForm.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
                <label htmlFor="agreeToTerms" className="text-sm text-gray-600 dark:text-gray-400">
                  I agree to NESPAK's membership terms and conditions, including the code of conduct and data privacy policy.
                </label>
              </div>
              
              <div className="pt-2">
                <Button type="submit">Submit Application</Button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Membership;
