
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';

const TermsOfService = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <PageLayout
      title="Terms of Service"
      description="NESPAK's terms of service outline the rules and guidelines for using our website and services."
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="prose prose-blue max-w-3xl mx-auto dark:prose-invert"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1>Terms of Service</h1>
          <p className="lead">Last Updated: May 9, 2025</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Network Service Providers Association of Kenya (NESPAK) website 
            and services, you agree to be bound by these Terms of Service. If you do not agree to these 
            terms, please do not use our website or services.
          </p>
          
          <h2>2. Description of Services</h2>
          <p>
            NESPAK provides a platform for Internet Service Providers and network organizations in Kenya 
            to collaborate, share information, and access resources. Our services include membership 
            management, event organization, resource sharing, and advocacy.
          </p>
          
          <h2>3. User Accounts</h2>
          <p>
            Some features of our website require you to create an account. You are responsible for 
            maintaining the confidentiality of your account information and for all activities that 
            occur under your account. You agree to:
          </p>
          <ul>
            <li>Provide accurate and complete registration information</li>
            <li>Update your information to keep it current</li>
            <li>Protect your password and not share it with others</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
          </ul>
          
          <h2>4. Membership</h2>
          <p>
            NESPAK membership is available to organizations that meet our eligibility criteria. 
            Membership is subject to approval by our board and payment of applicable fees. Members 
            are expected to adhere to our code of conduct and participate in the association's activities.
          </p>
          
          <h2>5. Intellectual Property Rights</h2>
          <p>
            All content on the NESPAK website, including text, graphics, logos, images, and software, 
            is the property of NESPAK or its content suppliers and is protected by Kenyan and international 
            copyright laws. You may not reproduce, distribute, modify, or create derivative works from 
            any content without our express written permission.
          </p>
          
          <h2>6. User Content</h2>
          <p>
            By posting or submitting content on our website or through our services, you grant NESPAK 
            a non-exclusive, royalty-free, worldwide, perpetual license to use, reproduce, modify, 
            publish, and distribute such content. You represent that you have all necessary rights to 
            the content you post.
          </p>
          
          <h2>7. Prohibited Activities</h2>
          <p>
            When using our website and services, you agree not to:
          </p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the rights of others</li>
            <li>Upload or transmit malware or other harmful code</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of the website</li>
            <li>Collect or harvest user information without consent</li>
            <li>Engage in any activity that disrupts our services</li>
          </ul>
          
          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, NESPAK and its officers, directors, employees, and agents 
            shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
            including loss of profits, data, or goodwill, arising from your use of or inability to use our 
            website or services.
          </p>
          
          <h2>9. Disclaimer of Warranties</h2>
          <p>
            Our website and services are provided on an "as is" and "as available" basis. NESPAK makes no 
            warranties, expressed or implied, regarding the operation of the website, the accuracy of information, 
            or the services provided.
          </p>
          
          <h2>10. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. We will post the revised terms 
            on our website with an updated "Last Updated" date. Your continued use of our website or services 
            after such changes constitutes your acceptance of the new terms.
          </p>
          
          <h2>11. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of Kenya, 
            without regard to its conflict of law provisions. Any dispute arising from these terms shall be 
            subject to the exclusive jurisdiction of the courts in Nairobi, Kenya.
          </p>
          
          <h2>12. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <address>
            Network Service Providers Association of Kenya (NESPAK)<br />
            Westlands Business Park<br />
            Nairobi, Kenya<br />
            Email: legal@nespak.or.ke<br />
            Phone: +254 700 123 456
          </address>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
