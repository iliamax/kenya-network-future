
// This file provides interfaces with external database services
// It acts as a bridge between the frontend and the backend admin dashboard

interface AdminEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  imageUrl?: string;
}

interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  imageUrl?: string;
  author?: string;
}

interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  type: string;
}

interface SiteConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  logoUrl: string;
  bannerText?: string;
}

// Mock API endpoints - would be replaced with actual API endpoints
const API_ENDPOINTS = {
  events: '/api/events',
  news: '/api/news',
  resources: '/api/resources', 
  config: '/api/site-config'
};

// Fetch events from external admin database
export const fetchEvents = async (): Promise<AdminEvent[]> => {
  try {
    // In production, this would be an actual API call
    // For now, we're simulating an API response
    console.log("Fetching events from external admin database");
    
    // Simulate a successful API call with mock data
    // In a real implementation, this would be:
    // const response = await fetch(API_ENDPOINTS.events);
    // return await response.json();
    
    return [
      {
        id: '1',
        title: 'Annual ISP Conference',
        date: '2025-07-15',
        description: 'Join us for the largest gathering of Kenyan ISPs and telecoms.',
        location: 'Nairobi Convention Center',
        imageUrl: '/events/conference.jpg'
      },
      {
        id: '2',
        title: 'Cybersecurity Workshop',
        date: '2025-08-05',
        description: 'Learn the latest in network security protocols and best practices.',
        location: 'Tech Hub Mombasa',
        imageUrl: '/events/workshop.jpg'
      }
    ];
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

// Fetch news from external admin database
export const fetchNews = async (): Promise<NewsItem[]> => {
  try {
    console.log("Fetching news from external admin database");
    
    // Mock data - would be replaced with actual API call
    return [
      {
        id: '1',
        title: 'NESPAK Partners with Government on Digital Inclusion Initiative',
        date: '2025-05-05',
        summary: 'A new partnership aims to bring internet access to rural areas.',
        content: 'The Network Service Providers Association of Kenya has announced a landmark partnership...',
        imageUrl: '/news/digital-inclusion.jpg',
        author: 'NESPAK Comms Team'
      },
      {
        id: '2',
        title: 'New Regulatory Framework Announced',
        date: '2025-04-22',
        summary: 'Updated guidelines for ISPs operating in Kenya.',
        content: 'The Communications Authority of Kenya has published new guidelines that will affect...',
        imageUrl: '/news/regulations.jpg',
        author: 'John Mwangi'
      }
    ];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

// Fetch resources from external admin database
export const fetchResources = async (): Promise<Resource[]> => {
  try {
    console.log("Fetching resources from external admin database");
    
    // Mock data - would be replaced with actual API call
    return [
      {
        id: '1',
        title: 'ISP Licensing Guide',
        description: 'Complete guide to obtaining and maintaining ISP licenses in Kenya.',
        url: '/resources/licensing-guide.pdf',
        category: 'Regulation',
        type: 'PDF'
      },
      {
        id: '2',
        title: 'Network Security Toolkit',
        description: 'Collection of tools and resources for securing ISP networks.',
        url: '/resources/security-toolkit.zip',
        category: 'Security',
        type: 'ZIP'
      }
    ];
  } catch (error) {
    console.error('Error fetching resources:', error);
    return [];
  }
};

// Fetch site configuration from external admin database
export const fetchSiteConfig = async (): Promise<SiteConfig> => {
  try {
    console.log("Fetching site configuration from external admin database");
    
    // Mock data - would be replaced with actual API call
    return {
      primaryColor: '#1a365d',
      secondaryColor: '#2b6cb0',
      accentColor: '#4299e1',
      logoUrl: '/logo.svg',
      bannerText: 'Welcome to NESPAK - Connecting Kenya's Internet Service Providers'
    };
  } catch (error) {
    console.error('Error fetching site config:', error);
    return {
      primaryColor: '#1a365d',
      secondaryColor: '#2b6cb0',
      accentColor: '#4299e1',
      logoUrl: '/logo.svg'
    };
  }
};

// Update functions for admin use

export const updateEvent = async (event: AdminEvent): Promise<boolean> => {
  try {
    console.log("Updating event in external admin database", event);
    // In production, this would be an API call:
    // await fetch(`${API_ENDPOINTS.events}/${event.id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(event)
    // });
    return true;
  } catch (error) {
    console.error('Error updating event:', error);
    return false;
  }
};

export const updateNews = async (newsItem: NewsItem): Promise<boolean> => {
  try {
    console.log("Updating news item in external admin database", newsItem);
    // Would be an API call in production
    return true;
  } catch (error) {
    console.error('Error updating news item:', error);
    return false;
  }
};

export const updateResource = async (resource: Resource): Promise<boolean> => {
  try {
    console.log("Updating resource in external admin database", resource);
    // Would be an API call in production
    return true;
  } catch (error) {
    console.error('Error updating resource:', error);
    return false;
  }
};

export const updateSiteConfig = async (config: Partial<SiteConfig>): Promise<boolean> => {
  try {
    console.log("Updating site configuration in external admin database", config);
    // Would be an API call in production
    return true;
  } catch (error) {
    console.error('Error updating site config:', error);
    return false;
  }
};

// Create new items

export const createEvent = async (event: Omit<AdminEvent, 'id'>): Promise<boolean> => {
  try {
    console.log("Creating new event in external admin database", event);
    // Would be an API call in production
    return true;
  } catch (error) {
    console.error('Error creating event:', error);
    return false;
  }
};

export const createNewsItem = async (newsItem: Omit<NewsItem, 'id'>): Promise<boolean> => {
  try {
    console.log("Creating new news item in external admin database", newsItem);
    // Would be an API call in production
    return true;
  } catch (error) {
    console.error('Error creating news item:', error);
    return false;
  }
};

export const createResource = async (resource: Omit<Resource, 'id'>): Promise<boolean> => {
  try {
    console.log("Creating new resource in external admin database", resource);
    // Would be an API call in production
    return true;
  } catch (error) {
    console.error('Error creating resource:', error);
    return false;
  }
};

// Delete items

export const deleteEvent = async (id: string): Promise<boolean> => {
  try {
    console.log("Deleting event from external admin database", id);
    // Would be an API call in production
    return true;
  } catch (error) {
    console.error('Error deleting event:', error);
    return false;
  }
};

export const deleteNewsItem = async (id: string): Promise<boolean> => {
  try {
    console.log("Deleting news item from external admin database", id);
    // Would be an API call in production
    return true;
  } catch (error) {
    console.error('Error deleting news item:', error);
    return false;
  }
};

export const deleteResource = async (id: string): Promise<boolean> => {
  try {
    console.log("Deleting resource from external admin database", id);
    // Would be an API call in production
    return true;
  } catch (error) {
    console.error('Error deleting resource:', error);
    return false;
  }
};

// Authenticate admin user
export const authenticateAdmin = async (username: string, password: string): Promise<{success: boolean; token?: string}> => {
  try {
    console.log("Authenticating admin user");
    
    // This is a mock implementation
    // In production, this would validate credentials against a secure backend
    if (username === "admin" && password === "password") {
      return {
        success: true,
        token: "mock-jwt-token"
      };
    }
    
    return {
      success: false
    };
  } catch (error) {
    console.error('Error authenticating admin:', error);
    return {
      success: false
    };
  }
};
