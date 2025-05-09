
import React, { useState } from 'react';
import { MessageCircle, X, HelpCircle, Send, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// FAQ data structure
type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is NESPAK?",
    answer: "The Network Service Providers Association of Kenya (NESPAK) is an organization that unites and represents Kenya's ISPs and network organizations to shape the digital future."
  },
  {
    question: "How do I become a member?",
    answer: "You can become a member by visiting our Membership page and filling out the application form. Our team will review your application and get back to you."
  },
  {
    question: "What are the benefits of joining NESPAK?",
    answer: "Members benefit from networking opportunities, advocacy for industry issues, access to resources, training workshops, and representation in policy discussions."
  },
  {
    question: "How can I access the technical resources?",
    answer: "Technical resources are available on our Resources page. You can filter by category to find specific documents like Network Security Guides or IPv6 Migration Checklists."
  },
  {
    question: "When are NESPAK events held?",
    answer: "NESPAK organizes regular events throughout the year. Check our Events page for upcoming conferences, workshops, and networking opportunities."
  }
];

// Message type
type Message = {
  id: number;
  text: string;
  isUser: boolean;
};

// Bot responses based on keywords
const getBotResponse = (query: string): string => {
  const normalizedQuery = query.toLowerCase();
  
  if (normalizedQuery.includes("membership") || normalizedQuery.includes("join")) {
    return "To join NESPAK, visit our Membership page and complete the application form. We offer different membership levels based on your organization's size and needs.";
  }
  
  if (normalizedQuery.includes("event") || normalizedQuery.includes("conference") || normalizedQuery.includes("workshop")) {
    return "NESPAK hosts regular events including annual conferences, technical workshops, and networking meetups. Check our Events page for the latest schedule.";
  }
  
  if (normalizedQuery.includes("resource") || normalizedQuery.includes("document") || normalizedQuery.includes("guide")) {
    return "Our Resources section contains guides, checklists, policy briefs, and technical documentation. You can filter by category to find exactly what you need.";
  }
  
  if (normalizedQuery.includes("contact") || normalizedQuery.includes("reach") || normalizedQuery.includes("email")) {
    return "You can reach us at info@nespak.or.ke, call +254 700 123 456, or visit our office at Westlands Business Park, Nairobi, Kenya.";
  }
  
  if (normalizedQuery.includes("nixp") || normalizedQuery.includes("internet exchange")) {
    return "NIXP (Nairobi Internet Exchange Point) is a critical infrastructure that allows local internet service providers to exchange traffic directly. Visit our NIXP page for more details.";
  }
  
  if (normalizedQuery.includes("cybersecurity") || normalizedQuery.includes("security")) {
    return "Our Cybersecurity program offers resources, training, and best practices for network security. Check our Cybersecurity page or download our Network Security Guide from the Resources section.";
  }
  
  // Default response
  return "Thank you for your question. For specific assistance, please browse our FAQs or contact us directly at info@nespak.or.ke.";
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [showFAQs, setShowFAQs] = useState<boolean>(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! How can I assist you with NESPAK today?",
      isUser: false,
    },
  ]);
  const [newMessage, setNewMessage] = useState<string>("");
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Add user message
    const userMessageId = Date.now();
    const userMessage: Message = {
      id: userMessageId,
      text: newMessage,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    // Simulate bot thinking
    setTimeout(() => {
      const botMessage: Message = {
        id: userMessageId + 1,
        text: getBotResponse(newMessage),
        isUser: false,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFAQClick = (faq: FAQ) => {
    // Add FAQ question as user message
    const questionId = Date.now();
    setMessages((prev) => [
      ...prev,
      { id: questionId, text: faq.question, isUser: true },
    ]);

    // Add FAQ answer as bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: questionId + 1, text: faq.answer, isUser: false },
      ]);
      setShowFAQs(false);
    }, 400);
  };

  // Floating chat button component
  const ChatButton = () => (
    <Button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-8 right-8 rounded-full h-12 w-12 shadow-lg bg-blue-600 hover:bg-blue-700 p-0"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );

  if (!isOpen) {
    return <ChatButton />;
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div
        className={`bg-white rounded-lg shadow-xl flex flex-col overflow-hidden transition-all duration-300 w-80 ${
          isMinimized ? "h-14" : "h-96"
        }`}
      >
        {/* Chat Header */}
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center cursor-pointer"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          <div className="flex items-center space-x-2">
            <HelpCircle className="h-5 w-5" />
            <span className="font-medium">NESPAK Help</span>
          </div>
          <div className="flex items-center space-x-2">
            {isMinimized ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
            <X 
              className="h-5 w-5 hover:bg-blue-700 rounded" 
              onClick={(e) => { 
                e.stopPropagation(); 
                setIsOpen(false); 
              }} 
            />
          </div>
        </div>

        {/* Chat Content - only shown when not minimized */}
        {!isMinimized && (
          <>
            {/* Messages Container */}
            <div className="flex-1 p-4 overflow-y-auto">
              {/* Messages */}
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[80%] ${
                        message.isUser
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* FAQs */}
              {showFAQs && messages.length <= 2 && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-2">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        onClick={() => handleFAQClick(faq)}
                        className="bg-gray-100 rounded-md p-2 cursor-pointer hover:bg-gray-200 transition-colors text-sm"
                      >
                        {faq.question}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="border-t p-3 flex space-x-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 px-2"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
