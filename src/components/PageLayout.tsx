
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

const PageLayout = ({ children, title, description, className = '' }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen ${className}`}>
      <div className="pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            {description && (
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </motion.div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
