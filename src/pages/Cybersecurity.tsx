
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertCircle, FileText, Lock, Bell } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Cybersecurity = () => {
  const { toast } = useToast();
  const [incidentForm, setIncidentForm] = useState({
    name: '',
    organization: '',
    email: '',
    incidentType: '',
    description: '',
    affectedSystems: '',
  });

  const alerts = [
    {
      id: 1,
      severity: "High",
      title: "Critical Vulnerability in OpenSSL",
      date: "May 7, 2025",
      description: "A critical vulnerability has been discovered in OpenSSL that could allow remote code execution. All systems should be updated immediately."
    },
    {
      id: 2,
      severity: "Medium",
      title: "Phishing Campaign Targeting ISPs",
      date: "May 3, 2025",
      description: "A new phishing campaign is targeting ISP administrators with fake login pages. Be vigilant with email links."
    },
    {
      id: 3,
      severity: "Medium",
      title: "DNS Cache Poisoning Attempts",
      date: "April 28, 2025",
      description: "Multiple DNS cache poisoning attempts have been detected across the region. Verify DNS configurations and implement DNSSEC."
    },
    {
      id: 4,
      severity: "Low",
      title: "New Botnet Activity Detected",
      date: "April 22, 2025",
      description: "Increased botnet activity has been observed targeting IoT devices. Update firmware and secure default configurations."
    }
  ];

  const resources = [
    {
      title: "Security Best Practices Guide",
      description: "Comprehensive guide to network security for ISPs",
      icon: <Lock className="h-6 w-6 text-blue-500" />,
      link: "#"
    },
    {
      title: "Incident Response Framework",
      description: "Step-by-step procedures for handling security incidents",
      icon: <AlertCircle className="h-6 w-6 text-blue-500" />,
      link: "#"
    },
    {
      title: "Threat Intelligence Reports",
      description: "Monthly reports on current cyber threats in East Africa",
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      link: "#"
    },
    {
      title: "Security Configuration Templates",
      description: "Hardened configuration templates for network equipment",
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      link: "#"
    }
  ];

  const handleIncidentFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setIncidentForm(prev => ({ ...prev, [name]: value }));
  };

  const handleIncidentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Incident reported:", incidentForm);
    
    toast({
      title: "Incident Reported",
      description: "Thank you for reporting this incident. Our team will contact you shortly.",
    });
    
    // Reset form
    setIncidentForm({
      name: '',
      organization: '',
      email: '',
      incidentType: '',
      description: '',
      affectedSystems: '',
    });
  };

  return (
    <PageLayout 
      title="N-CSIRT Cybersecurity" 
      description="NESPAK's Computer Security Incident Response Team (N-CSIRT) helps members prevent, detect, and respond to cybersecurity threats."
    >
      {/* Overview Section */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">About N-CSIRT</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The NESPAK Computer Security Incident Response Team (N-CSIRT) promotes national and member-level cybersecurity awareness across Kenya's network provider ecosystem.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We provide threat intelligence, incident response coordination, security advisories, and best practices to help our members maintain secure and resilient networks.
            </p>
          </div>
          <div className="md:col-span-2 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl blur opacity-20"></div>
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-2">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80" 
                alt="Cybersecurity visualization" 
                className="w-full h-48 md:h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Tabs */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Tabs defaultValue="alerts" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="alerts">Alerts & Advisories</TabsTrigger>
            <TabsTrigger value="report">Report Incident</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="alerts" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {alerts.map((alert) => (
                <Card key={alert.id} className="overflow-hidden">
                  <div className={`h-2 ${
                    alert.severity === 'High' ? 'bg-red-500' : 
                    alert.severity === 'Medium' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}></div>
                  <CardContent className="p-4 pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">{alert.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {alert.date} • {alert.severity} Severity
                        </p>
                      </div>
                      <div className={`p-2 rounded-full ${
                        alert.severity === 'High' ? 'bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400' : 
                        alert.severity === 'Medium' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' : 
                        'bg-blue-100 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        <AlertCircle className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{alert.description}</p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm">Read Full Advisory</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button variant="outline">View All Advisories</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="report">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Report a Security Incident</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  If you've experienced a security incident or suspect your network has been compromised, please fill out this form to report it to N-CSIRT. Our team will respond promptly.
                </p>
                <form onSubmit={handleIncidentSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={incidentForm.name}
                        onChange={handleIncidentFormChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={incidentForm.organization}
                        onChange={handleIncidentFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={incidentForm.email}
                      onChange={handleIncidentFormChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="incidentType">Incident Type</Label>
                    <select
                      id="incidentType"
                      name="incidentType"
                      value={incidentForm.incidentType}
                      onChange={handleIncidentFormChange}
                      required
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-blue-600"
                    >
                      <option value="" disabled>Select incident type</option>
                      <option value="malware">Malware Infection</option>
                      <option value="phishing">Phishing Attack</option>
                      <option value="ddos">DDoS Attack</option>
                      <option value="breach">Data Breach</option>
                      <option value="unauthorized">Unauthorized Access</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Incident Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={incidentForm.description}
                      onChange={handleIncidentFormChange}
                      rows={4}
                      required
                      placeholder="Please provide details about the incident, including when it was discovered..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="affectedSystems">Affected Systems</Label>
                    <Textarea
                      id="affectedSystems"
                      name="affectedSystems"
                      value={incidentForm.affectedSystems}
                      onChange={handleIncidentFormChange}
                      rows={2}
                      placeholder="Which systems, services, or infrastructure components are affected?"
                    />
                  </div>
                  <div className="pt-2">
                    <Button type="submit">Submit Report</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-full mr-4 flex-shrink-0">
                        {resource.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-gray-800 dark:text-gray-200">{resource.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">{resource.description}</p>
                        <Button variant="outline" size="sm" asChild>
                          <a href={resource.link} target="_blank" rel="noopener noreferrer">Download</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <div className="flex items-start">
                <div className="bg-blue-500 p-3 rounded-full mr-4 flex-shrink-0">
                  <Bell className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Subscribe to Security Alerts</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Get real-time security alerts, advisories, and best practices delivered straight to your inbox.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="grow">
                      <Input placeholder="Enter your email" className="bg-white dark:bg-gray-800" />
                    </div>
                    <Button>Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Educational Campaign */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-90"></div>
          <div className="relative z-10 py-12 md:py-16 px-6 md:px-12 text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Shield className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Strengthen Your Security Posture</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              N-CSIRT offers training sessions, workshops, and certification programs to help your team build cybersecurity expertise.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-all duration-300"
                asChild
              >
                <a href="/events">View Upcoming Training</a>
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="/contact">Request Custom Training</a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Cybersecurity;
