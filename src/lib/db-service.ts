// This file provides interfaces with external database services
// It acts as a bridge between the frontend and the backend admin dashboard

import mysql from 'mysql2/promise';

// Database interfaces - keep these the same
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

// Database configuration
const dbConfig = {
  host: 'localhost', // Change to your MySQL host
  user: 'root',      // Change to your MySQL username
  password: '',      // Change to your MySQL password
  database: 'nespak_admin', // Change to your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Helper function to execute queries
async function executeQuery<T>(sql: string, values: any[] = []): Promise<T> {
  try {
    const [rows] = await pool.execute(sql, values);
    return rows as T;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Fetch events from database
export const fetchEvents = async (): Promise<AdminEvent[]> => {
  try {
    console.log("Fetching events from database");
    
    const events = await executeQuery<AdminEvent[]>(`
      SELECT 
        id, 
        title, 
        DATE_FORMAT(date, '%Y-%m-%d') as date, 
        description, 
        location, 
        image_url as imageUrl 
      FROM events
    `);
    
    return events;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

// Fetch news from database
export const fetchNews = async (): Promise<NewsItem[]> => {
  try {
    console.log("Fetching news from database");
    
    const news = await executeQuery<NewsItem[]>(`
      SELECT 
        id, 
        title, 
        DATE_FORMAT(date, '%Y-%m-%d') as date, 
        summary, 
        content, 
        image_url as imageUrl, 
        author 
      FROM news
    `);
    
    return news;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

// Fetch resources from database
export const fetchResources = async (): Promise<Resource[]> => {
  try {
    console.log("Fetching resources from database");
    
    const resources = await executeQuery<Resource[]>(`
      SELECT 
        id, 
        title, 
        description, 
        url, 
        category, 
        type 
      FROM resources
    `);
    
    return resources;
  } catch (error) {
    console.error('Error fetching resources:', error);
    return [];
  }
};

// Fetch site configuration from database
export const fetchSiteConfig = async (): Promise<SiteConfig> => {
  try {
    console.log("Fetching site configuration from database");
    
    const configs = await executeQuery<SiteConfig[]>(`
      SELECT 
        primary_color as primaryColor, 
        secondary_color as secondaryColor, 
        accent_color as accentColor, 
        logo_url as logoUrl, 
        banner_text as bannerText 
      FROM site_config 
      LIMIT 1
    `);
    
    if (configs.length === 0) {
      return {
        primaryColor: '#1a365d',
        secondaryColor: '#2b6cb0',
        accentColor: '#4299e1',
        logoUrl: '/logo.svg'
      };
    }
    
    return configs[0];
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
    console.log("Updating event in database", event);
    
    await executeQuery(
      `UPDATE events 
       SET title = ?, date = ?, description = ?, location = ?, image_url = ?
       WHERE id = ?`,
      [event.title, event.date, event.description, event.location, event.imageUrl, event.id]
    );
    
    return true;
  } catch (error) {
    console.error('Error updating event:', error);
    return false;
  }
};

export const updateNews = async (newsItem: NewsItem): Promise<boolean> => {
  try {
    console.log("Updating news item in database", newsItem);
    
    await executeQuery(
      `UPDATE news 
       SET title = ?, date = ?, summary = ?, content = ?, image_url = ?, author = ?
       WHERE id = ?`,
      [newsItem.title, newsItem.date, newsItem.summary, newsItem.content, newsItem.imageUrl, newsItem.author, newsItem.id]
    );
    
    return true;
  } catch (error) {
    console.error('Error updating news item:', error);
    return false;
  }
};

export const updateResource = async (resource: Resource): Promise<boolean> => {
  try {
    console.log("Updating resource in database", resource);
    
    await executeQuery(
      `UPDATE resources 
       SET title = ?, description = ?, url = ?, category = ?, type = ?
       WHERE id = ?`,
      [resource.title, resource.description, resource.url, resource.category, resource.type, resource.id]
    );
    
    return true;
  } catch (error) {
    console.error('Error updating resource:', error);
    return false;
  }
};

export const updateSiteConfig = async (config: Partial<SiteConfig>): Promise<boolean> => {
  try {
    console.log("Updating site configuration in database", config);
    
    // Get existing config first
    const existingConfig = await fetchSiteConfig();
    const updatedConfig = { ...existingConfig, ...config };
    
    await executeQuery(
      `UPDATE site_config 
       SET primary_color = ?, secondary_color = ?, accent_color = ?, logo_url = ?, banner_text = ?`,
      [updatedConfig.primaryColor, updatedConfig.secondaryColor, updatedConfig.accentColor, updatedConfig.logoUrl, updatedConfig.bannerText]
    );
    
    return true;
  } catch (error) {
    console.error('Error updating site config:', error);
    return false;
  }
};

// Create new items

export const createEvent = async (event: Omit<AdminEvent, 'id'>): Promise<boolean> => {
  try {
    console.log("Creating new event in database", event);
    
    await executeQuery(
      `INSERT INTO events (id, title, date, description, location, image_url)
       VALUES (UUID(), ?, ?, ?, ?, ?)`,
      [event.title, event.date, event.description, event.location, event.imageUrl]
    );
    
    return true;
  } catch (error) {
    console.error('Error creating event:', error);
    return false;
  }
};

export const createNewsItem = async (newsItem: Omit<NewsItem, 'id'>): Promise<boolean> => {
  try {
    console.log("Creating new news item in database", newsItem);
    
    await executeQuery(
      `INSERT INTO news (id, title, date, summary, content, image_url, author)
       VALUES (UUID(), ?, ?, ?, ?, ?, ?)`,
      [newsItem.title, newsItem.date, newsItem.summary, newsItem.content, newsItem.imageUrl, newsItem.author]
    );
    
    return true;
  } catch (error) {
    console.error('Error creating news item:', error);
    return false;
  }
};

export const createResource = async (resource: Omit<Resource, 'id'>): Promise<boolean> => {
  try {
    console.log("Creating new resource in database", resource);
    
    await executeQuery(
      `INSERT INTO resources (id, title, description, url, category, type)
       VALUES (UUID(), ?, ?, ?, ?, ?)`,
      [resource.title, resource.description, resource.url, resource.category, resource.type]
    );
    
    return true;
  } catch (error) {
    console.error('Error creating resource:', error);
    return false;
  }
};

// Delete items

export const deleteEvent = async (id: string): Promise<boolean> => {
  try {
    console.log("Deleting event from database", id);
    
    await executeQuery(`DELETE FROM events WHERE id = ?`, [id]);
    
    return true;
  } catch (error) {
    console.error('Error deleting event:', error);
    return false;
  }
};

export const deleteNewsItem = async (id: string): Promise<boolean> => {
  try {
    console.log("Deleting news item from database", id);
    
    await executeQuery(`DELETE FROM news WHERE id = ?`, [id]);
    
    return true;
  } catch (error) {
    console.error('Error deleting news item:', error);
    return false;
  }
};

export const deleteResource = async (id: string): Promise<boolean> => {
  try {
    console.log("Deleting resource from database", id);
    
    await executeQuery(`DELETE FROM resources WHERE id = ?`, [id]);
    
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
    
    // In a real application, you would:
    // 1. Get the user from the database
    // 2. Compare the hashed password
    // 3. Generate a JWT token
    
    const users = await executeQuery<{id: string; username: string; password_hash: string}[]>(
      `SELECT id, username, password_hash FROM admin_users WHERE username = ?`,
      [username]
    );
    
    // For demo purposes, we're using a simple check
    // In production, use proper password hashing (bcrypt, argon2, etc.)
    if (users.length > 0) {
      // IMPORTANT: This is for demonstration only!
      // In a real app, you must use proper password verification:
      // const passwordMatches = await bcrypt.compare(password, users[0].password_hash);
      const passwordMatches = password === "password"; // Replace with proper verification
      
      if (passwordMatches) {
        return {
          success: true,
          token: "mock-jwt-token" // Replace with actual JWT generation
        };
      }
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
