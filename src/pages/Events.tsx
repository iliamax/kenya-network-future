
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';
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

const Events = () => {
  const { toast } = useToast();
  
  // Registration form state
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    organization: '',
    jobTitle: '',
    eventId: '',
    eventName: '',
  });
  
  // Event suggestion form state
  const [suggestionForm, setEventForm] = useState({
    name: '',
    email: '',
    eventTitle: '',
    eventDescription: '',
    targetAudience: '',
  });

  // Past events array
  const pastEvents = [
    {
      id: "ev001",
      title: "Kenya Peering Forum 2025",
      date: "March 15-17, 2025",
      location: "Nairobi, Kenya",
      description: "Annual forum that brought together ISPs, content providers, and infrastructure operators to discuss peering strategies and interconnection.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
      attendees: 120
    },
    {
      id: "ev002",
      title: "Cybersecurity Best Practices Workshop",
      date: "February 8, 2025",
      location: "Mombasa, Kenya",
      description: "A hands-on workshop focused on implementing practical cybersecurity measures for network operators.",
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=800&q=80",
      attendees: 75
    },
    {
      id: "ev003",
      title: "IPv6 Transition Seminar",
      date: "January 22, 2025",
      location: "Virtual Event",
      description: "Online seminar covering IPv6 implementation strategies, best practices, and migration challenges.",
      image: "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=800&q=80",
      attendees: 200
    }
  ];

  const handleRegistrationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRegistrationForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSuggestionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEventForm(prev => ({ ...prev, [name]: value }));
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", registrationForm);
    
    toast({
      title: "Registration Successful",
      description: `You have registered for ${registrationForm.eventName}.`,
    });
    
    // Reset form
    setRegistrationForm({
      name: '',
      email: '',
      organization: '',
      jobTitle: '',
      eventId: '',
      eventName: '',
    });
  };

  const handleSuggestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event suggestion submitted:", suggestionForm);
    
    toast({
      title: "Event Suggestion Received",
      description: "Thank you for your event suggestion. We'll review it soon.",
    });
    
    // Reset form
    setEventForm({
      name: '',
      email: '',
      eventTitle: '',
      eventDescription: '',
      targetAudience: '',
    });
  };

  const openRegistrationDialog = (eventId: string, eventName: string) => {
    setRegistrationForm(prev => ({ ...prev, eventId, eventName }));
  };

  return (
    <PageLayout 
      title="Events & Training" 
      description="Stay updated with NESPAK's workshops, training sessions, and networking events for the ICT community."
    >
      {/* Archive section for past events */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Past Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <motion.div 
              key={event.id}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {event.attendees} attendees
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">{event.title}</h3>
                
                <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
                
                <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                  {event.description}
                </p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      onClick={() => openRegistrationDialog(event.id, event.title)}
                      variant="outline"
                    >
                      View Materials
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{event.title} - Event Materials</DialogTitle>
                      <DialogDescription>
                        Fill in your details to access presentations, videos, and resources from this event.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <form onSubmit={handleRegistrationSubmit} className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={registrationForm.name}
                          onChange={handleRegistrationChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={registrationForm.email}
                          onChange={handleRegistrationChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input
                          id="organization"
                          name="organization"
                          value={registrationForm.organization}
                          onChange={handleRegistrationChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title</Label>
                        <Input
                          id="jobTitle"
                          name="jobTitle"
                          value={registrationForm.jobTitle}
                          onChange={handleRegistrationChange}
                        />
                      </div>
                      
                      <div className="flex justify-end gap-3 pt-2">
                        <DialogClose asChild>
                          <Button type="button" variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Access Materials</Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Suggest an Event Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <Card>
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full mx-auto md:mx-0 w-24 h-24 flex items-center justify-center">
                  <Calendar className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Suggest an Event</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Have an idea for a training session, workshop, or networking event that would benefit the NESPAK community? Let us know!
                </p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Suggest an Event</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>Event Suggestion</DialogTitle>
                      <DialogDescription>
                        Share your ideas for future NESPAK events or training sessions.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <form onSubmit={handleSuggestionSubmit} className="space-y-4 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="suggestion-name">Your Name</Label>
                          <Input
                            id="suggestion-name"
                            name="name"
                            value={suggestionForm.name}
                            onChange={handleSuggestionChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="suggestion-email">Email Address</Label>
                          <Input
                            id="suggestion-email"
                            name="email"
                            type="email"
                            value={suggestionForm.email}
                            onChange={handleSuggestionChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="eventTitle">Suggested Event Title</Label>
                        <Input
                          id="eventTitle"
                          name="eventTitle"
                          value={suggestionForm.eventTitle}
                          onChange={handleSuggestionChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="eventDescription">Event Description</Label>
                        <Textarea
                          id="eventDescription"
                          name="eventDescription"
                          rows={3}
                          value={suggestionForm.eventDescription}
                          onChange={handleSuggestionChange}
                          required
                          placeholder="Please describe the event, its objectives, and potential format..."
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="targetAudience">Target Audience</Label>
                        <Input
                          id="targetAudience"
                          name="targetAudience"
                          value={suggestionForm.targetAudience}
                          onChange={handleSuggestionChange}
                          placeholder="Who would benefit from this event?"
                        />
                      </div>
                      
                      <div className="flex justify-end gap-3 pt-2">
                        <DialogClose asChild>
                          <Button type="button" variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Submit Suggestion</Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* CTA Section */}
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
                <Clock className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive updates about upcoming events, training sessions, and workshops.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 placeholder:text-white/60 text-white"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 shrink-0">
                Subscribe <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Events;
