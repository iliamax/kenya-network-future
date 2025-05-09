
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Building, Calendar } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from '@/hooks/use-toast';

// Add Google Maps type to window object
declare global {
  interface Window {
    initMap?: () => void;
    google?: any;
  }
}

const Contact = () => {
  const { toast } = useToast();
  const mapRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    // Initialize Google Maps
    if (!window.initMap) {
      window.initMap = () => {
        if (window.google && mapRef.current) {
          // Kenya coordinates (center of the country)
          const nairobi = { lat: -1.286389, lng: 36.817223 };
          const map = new window.google.maps.Map(mapRef.current, {
            center: nairobi,
            zoom: 15,
          });
          
          // Add marker for NESPAK office
          new window.google.maps.Marker({
            position: nairobi,
            map,
            title: "NESPAK Office"
          });
        }
      };
    }
    
    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    
    return () => {
      // Remove script when component unmounts
      document.head.removeChild(script);
      // Remove global function
      delete window.initMap;
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll respond shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Building className="h-8 w-8 text-blue-500" />,
      title: "Registration Details",
      details: [
        "Registered Under: Societies Act of Kenya",
        "Certificate No: SOCA-A6S4EBJ",
        "Date of Registration: April 4, 2025"
      ]
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-500" />,
      title: "Office Location",
      details: [
        "NESPAK Office",
        "Westlands Business Park",
        "Nairobi, Kenya"
      ]
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-500" />,
      title: "Phone",
      details: [
        "+254 700 123 456",
        "+254 20 123 4567"
      ]
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-500" />,
      title: "Email",
      details: [
        "info@nespak.or.ke",
        "support@nespak.or.ke"
      ]
    }
  ];

  const faqItems = [
    {
      question: "How can I become a NESPAK member?",
      answer: "To become a member, visit our Membership page and complete the application form. Membership is open to ISPs, data centers, network infrastructure providers, and cloud providers operating in Kenya."
    },
    {
      question: "What are the benefits of peering at NIXP?",
      answer: "Peering at NIXP allows members to exchange traffic directly, reducing latency and international bandwidth costs while improving user experience for local content."
    },
    {
      question: "How does NESPAK support cybersecurity initiatives?",
      answer: "NESPAK operates N-CSIRT (NESPAK Computer Security Incident Response Team) which provides threat intelligence, incident response coordination, security advisories, and best practices."
    },
    {
      question: "How can I participate in NESPAK events?",
      answer: "NESPAK regularly organizes events for members and the wider ICT community. Check our Events page for upcoming workshops, training sessions, and networking opportunities."
    }
  ];

  return (
    <PageLayout 
      title="Contact Us" 
      description="Get in touch with the NESPAK team for inquiries, membership information, or collaboration opportunities."
    >
      {/* Contact Info Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {contactInfo.map((info, index) => (
          <Card key={index} className="bg-white dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-full mr-4 flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-400 mb-1">{detail}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Map and Contact Form */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Map */}
        <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
          <div ref={mapRef} className="w-full h-full"></div>
        </div>
        
        {/* Contact Form */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
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
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <details 
              key={index} 
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">{item.question}</h3>
                <div className="ml-4">
                  <svg
                    className="w-5 h-5 transition-transform group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </motion.div>

      {/* Schedule a Meeting CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 text-white">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Calendar className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">Schedule a Meeting</h3>
            <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
              Want to discuss specific requirements or explore how NESPAK can support your organization? Schedule a meeting with our team.
            </p>
            <div className="flex justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Book an Appointment
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Contact;
