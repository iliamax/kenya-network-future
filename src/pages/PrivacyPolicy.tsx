
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';

const PrivacyPolicy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <PageLayout
      title="Privacy Policy"
      description="NESPAK's privacy policy details how we collect, use, and protect your information."
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="prose prose-blue max-w-3xl mx-auto dark:prose-invert"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1>Privacy Policy</h1>
          <p className="lead">Last Updated: May 9, 2025</p>
          
          <h2>1. Introduction</h2>
          <p>
            The Network Service Providers Association of Kenya (NESPAK) is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
            visit our website or use our services.
          </p>
          
          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Register for membership</li>
            <li>Sign up for our newsletter</li>
            <li>Contact us through our website</li>
            <li>Register for events or webinars</li>
            <li>Download resources</li>
          </ul>
          <p>
            This information may include your name, email address, phone number, company name, job title, and other contact details.
          </p>
          
          <h3>2.2 Usage Information</h3>
          <p>
            We automatically collect certain information about your device and how you interact with our website, including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages visited and time spent</li>
            <li>Access dates and times</li>
          </ul>
          
          <h2>3. How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including:</p>
          <ul>
            <li>Providing, maintaining, and improving our website and services</li>
            <li>Processing membership applications and renewals</li>
            <li>Sending newsletters and communications</li>
            <li>Responding to inquiries and providing customer support</li>
            <li>Organizing and administering events</li>
            <li>Analyzing usage to improve user experience</li>
            <li>Complying with legal obligations</li>
          </ul>
          
          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, no method of 
            transmission over the internet or electronic storage is 100% secure, and we cannot guarantee 
            absolute security.
          </p>
          
          <h2>5. Cookies and Similar Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and hold certain 
            information. Cookies are files with a small amount of data that may include an anonymous unique identifier. 
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
          
          <h2>6. Third-Party Services</h2>
          <p>
            We may use third-party service providers to help us operate our website, conduct our business, 
            or administer services to you. These third parties have access to your personal information only 
            to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
          
          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have rights regarding your personal information, including:</p>
          <ul>
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your information</li>
            <li>Restriction of processing</li>
            <li>Data portability</li>
            <li>Objection to processing</li>
          </ul>
          
          <h2>8. Children's Privacy</h2>
          <p>
            Our website and services are not intended for children under 18 years of age. We do not knowingly 
            collect personal information from children under 18.
          </p>
          
          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <address>
            Network Service Providers Association of Kenya (NESPAK)<br />
            Westlands Business Park<br />
            Nairobi, Kenya<br />
            Email: privacy@nespak.or.ke<br />
            Phone: +254 700 123 456
          </address>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
