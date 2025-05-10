
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchEvents, fetchNews, fetchResources, fetchSiteConfig,
  updateEvent, updateNews, updateResource, updateSiteConfig,
  createEvent, createNewsItem, createResource,
  deleteEvent, deleteNewsItem, deleteResource
} from '@/lib/db-service';
import { useToast } from '@/components/ui/use-toast';

// Types from db-service.ts
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

// Hook for Events
export const useEvents = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const eventsQuery = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  });

  const createEventMutation = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      toast({
        title: "Event Created",
        description: "The event has been successfully created.",
      });
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create the event. Please try again.",
        variant: "destructive",
      });
    }
  });

  const updateEventMutation = useMutation({
    mutationFn: updateEvent,
    onSuccess: () => {
      toast({
        title: "Event Updated",
        description: "The event has been successfully updated.",
      });
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update the event. Please try again.",
        variant: "destructive",
      });
    }
  });

  const deleteEventMutation = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      toast({
        title: "Event Deleted",
        description: "The event has been successfully deleted.",
      });
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete the event. Please try again.",
        variant: "destructive",
      });
    }
  });

  return {
    events: eventsQuery.data || [],
    isLoading: eventsQuery.isLoading,
    isError: eventsQuery.isError,
    createEvent: createEventMutation.mutate,
    updateEvent: updateEventMutation.mutate,
    deleteEvent: deleteEventMutation.mutate,
  };
};

// Hook for News
export const useNews = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const newsQuery = useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });

  const createNewsMutation = useMutation({
    mutationFn: createNewsItem,
    onSuccess: () => {
      toast({
        title: "News Item Created",
        description: "The news item has been successfully created.",
      });
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create the news item. Please try again.",
        variant: "destructive",
      });
    }
  });

  const updateNewsMutation = useMutation({
    mutationFn: updateNews,
    onSuccess: () => {
      toast({
        title: "News Item Updated",
        description: "The news item has been successfully updated.",
      });
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update the news item. Please try again.",
        variant: "destructive",
      });
    }
  });

  const deleteNewsMutation = useMutation({
    mutationFn: deleteNewsItem,
    onSuccess: () => {
      toast({
        title: "News Item Deleted",
        description: "The news item has been successfully deleted.",
      });
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete the news item. Please try again.",
        variant: "destructive",
      });
    }
  });

  return {
    news: newsQuery.data || [],
    isLoading: newsQuery.isLoading,
    isError: newsQuery.isError,
    createNewsItem: createNewsMutation.mutate,
    updateNewsItem: updateNewsMutation.mutate,
    deleteNewsItem: deleteNewsMutation.mutate,
  };
};

// Hook for Resources
export const useResources = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const resourcesQuery = useQuery({
    queryKey: ['resources'],
    queryFn: fetchResources,
  });

  const createResourceMutation = useMutation({
    mutationFn: createResource,
    onSuccess: () => {
      toast({
        title: "Resource Created",
        description: "The resource has been successfully created.",
      });
      queryClient.invalidateQueries({ queryKey: ['resources'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create the resource. Please try again.",
        variant: "destructive",
      });
    }
  });

  const updateResourceMutation = useMutation({
    mutationFn: updateResource,
    onSuccess: () => {
      toast({
        title: "Resource Updated",
        description: "The resource has been successfully updated.",
      });
      queryClient.invalidateQueries({ queryKey: ['resources'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update the resource. Please try again.",
        variant: "destructive",
      });
    }
  });

  const deleteResourceMutation = useMutation({
    mutationFn: deleteResource,
    onSuccess: () => {
      toast({
        title: "Resource Deleted",
        description: "The resource has been successfully deleted.",
      });
      queryClient.invalidateQueries({ queryKey: ['resources'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete the resource. Please try again.",
        variant: "destructive",
      });
    }
  });

  return {
    resources: resourcesQuery.data || [],
    isLoading: resourcesQuery.isLoading,
    isError: resourcesQuery.isError,
    createResource: createResourceMutation.mutate,
    updateResource: updateResourceMutation.mutate,
    deleteResource: deleteResourceMutation.mutate,
  };
};

// Hook for Site Configuration
export const useSiteConfig = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const siteConfigQuery = useQuery({
    queryKey: ['siteConfig'],
    queryFn: fetchSiteConfig,
  });

  const updateSiteConfigMutation = useMutation({
    mutationFn: updateSiteConfig,
    onSuccess: () => {
      toast({
        title: "Site Configuration Updated",
        description: "The site configuration has been successfully updated.",
      });
      queryClient.invalidateQueries({ queryKey: ['siteConfig'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update the site configuration. Please try again.",
        variant: "destructive",
      });
    }
  });

  return {
    siteConfig: siteConfigQuery.data,
    isLoading: siteConfigQuery.isLoading,
    isError: siteConfigQuery.isError,
    updateSiteConfig: updateSiteConfigMutation.mutate,
  };
};
