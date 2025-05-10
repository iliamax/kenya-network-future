
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { authenticateAdmin } from '@/lib/db-service';
import PageLayout from '@/components/PageLayout';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: '',
    }
  });

  const onLoginSubmit = async (data: { username: string; password: string }) => {
    setIsLoading(true);
    try {
      const result = await authenticateAdmin(data.username, data.password);
      if (result.success) {
        setIsAuthenticated(true);
        toast({
          title: "Login successful",
          description: "You are now logged in as an administrator.",
        });
        
        // In a real app, you might store the JWT token
        // localStorage.setItem('adminToken', result.token);
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Admin login form
  const AdminLoginForm = () => (
    <motion.div 
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>
            Log in to access the admin dashboard
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username"
                {...register('username', { required: 'Username is required' })}
              />
              {errors.username && (
                <p className="text-sm text-red-500">{errors.username.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Log In'}
            </Button>
          </CardFooter>
        </form>
      </Card>
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>Note: For demo purposes, use username: "admin" and password: "password"</p>
      </div>
    </motion.div>
  );

  // Admin dashboard content after login
  const AdminDashboardContent = () => (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>NESPAK Admin Dashboard</CardTitle>
          <CardDescription>Manage website content and settings</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="events">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="settings">Site Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="events" className="mt-6">
              <h3 className="text-lg font-medium mb-4">Manage Events</h3>
              <div className="flex justify-end mb-4">
                <Button>Add New Event</Button>
              </div>
              <Table>
                <TableCaption>List of upcoming events</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Annual ISP Conference</TableCell>
                    <TableCell>July 15, 2025</TableCell>
                    <TableCell>Nairobi Convention Center</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cybersecurity Workshop</TableCell>
                    <TableCell>August 5, 2025</TableCell>
                    <TableCell>Tech Hub Mombasa</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="news" className="mt-6">
              <h3 className="text-lg font-medium mb-4">Manage News</h3>
              <div className="flex justify-end mb-4">
                <Button>Add News Item</Button>
              </div>
              <Table>
                <TableCaption>List of news articles</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>NESPAK Partners with Government on Digital Inclusion Initiative</TableCell>
                    <TableCell>May 5, 2025</TableCell>
                    <TableCell>NESPAK Comms Team</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>New Regulatory Framework Announced</TableCell>
                    <TableCell>April 22, 2025</TableCell>
                    <TableCell>John Mwangi</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="resources" className="mt-6">
              <h3 className="text-lg font-medium mb-4">Manage Resources</h3>
              <div className="flex justify-end mb-4">
                <Button>Add New Resource</Button>
              </div>
              <Table>
                <TableCaption>List of resources</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>ISP Licensing Guide</TableCell>
                    <TableCell>Regulation</TableCell>
                    <TableCell>PDF</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Network Security Toolkit</TableCell>
                    <TableCell>Security</TableCell>
                    <TableCell>ZIP</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-6">
              <h3 className="text-lg font-medium mb-4">Site Settings</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="primaryColor">Primary Color</Label>
                    <div className="flex space-x-2">
                      <Input id="primaryColor" type="color" defaultValue="#1a365d" className="w-16 h-10" />
                      <Input id="primaryColorText" defaultValue="#1a365d" className="flex-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="secondaryColor">Secondary Color</Label>
                    <div className="flex space-x-2">
                      <Input id="secondaryColor" type="color" defaultValue="#2b6cb0" className="w-16 h-10" />
                      <Input id="secondaryColorText" defaultValue="#2b6cb0" className="flex-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="accentColor">Accent Color</Label>
                    <div className="flex space-x-2">
                      <Input id="accentColor" type="color" defaultValue="#4299e1" className="w-16 h-10" />
                      <Input id="accentColorText" defaultValue="#4299e1" className="flex-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="bannerText">Banner Text</Label>
                    <Input 
                      id="bannerText" 
                      defaultValue="Welcome to NESPAK - Connecting Kenya's Internet Service Providers" 
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button>Save Settings</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <PageLayout
      title="Admin Dashboard"
      description="Manage website content and settings"
    >
      <div className="container mx-auto px-4 pb-12">
        {isAuthenticated ? <AdminDashboardContent /> : <AdminLoginForm />}
      </div>
    </PageLayout>
  );
};

export default Admin;
