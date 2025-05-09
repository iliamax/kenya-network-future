
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';

const CookiePolicy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <PageLayout
      title="Cookie Policy"
      description="NESPAK's cookie policy explains how we use cookies and similar technologies on our website."
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="prose prose-blue max-w-3xl mx-auto dark:prose-invert"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1>Cookie Policy</h1>
          <p className="lead">Last Updated: May 9, 2025</p>
          
          <h2>1. Introduction</h2>
          <p>
            This Cookie Policy explains how the Network Service Providers Association of Kenya (NESPAK) 
            uses cookies and similar technologies to recognize you when you visit our website. It explains 
            what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
          
          <h2>2. What Are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit 
            a website. Cookies are widely used by website owners to make their websites work efficiently 
            and to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, NESPAK) are called "first-party cookies." 
            Cookies set by parties other than the website owner are called "third-party cookies." Third-party 
            cookies enable third-party features or functionality to be provided on or through the website 
            (such as advertising, interactive content, and analytics).
          </p>
          
          <h2>3. Why Do We Use Cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for 
            technical reasons for our website to operate (essential cookies). Others enable us to track and 
            target the interests of our users to enhance the experience on our website (performance and 
            functionality cookies). Still others help us to monitor the effectiveness of our marketing 
            campaigns (marketing cookies).
          </p>
          
          <h2>4. Types of Cookies We Use</h2>
          
          <h3>4.1 Essential Cookies</h3>
          <p>
            These cookies are strictly necessary to provide you with services available through our website 
            and to use some of its features, such as access to secure areas. Because these cookies are 
            strictly necessary to deliver the website, you cannot refuse them without impacting how our 
            website functions.
          </p>
          
          <h3>4.2 Performance and Functionality Cookies</h3>
          <p>
            These cookies are used to enhance the performance and functionality of our website but are 
            non-essential to their use. However, without these cookies, certain functionality may become 
            unavailable.
          </p>
          
          <h3>4.3 Analytics and Customization Cookies</h3>
          <p>
            These cookies collect information that is used either in aggregate form to help us understand 
            how our website is being used or how effective our marketing campaigns are, or to help us 
            customize our website for you.
          </p>
          
          <h3>4.4 Marketing Cookies</h3>
          <p>
            These cookies are used to make advertising messages more relevant to you. They perform functions 
            like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, 
            and in some cases selecting advertisements that are based on your interests.
          </p>
          
          <h2>5. How Can You Control Cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie 
            preferences by clicking on the appropriate opt-out links provided in our cookie banner.
          </p>
          <p>
            You can also set or amend your web browser controls to accept or refuse cookies. If you choose 
            to reject cookies, you may still use our website, but your access to some functionality and 
            areas of our website may be restricted.
          </p>
          <p>
            Most web browsers allow some control of most cookies through the browser settings. To find out 
            more about cookies, including how to see what cookies have been set and how to manage and delete 
            them, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a>.
          </p>
          
          <h2>6. Specific Browser Controls for Different Browsers</h2>
          <ul>
            <li><strong>Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">https://support.google.com/chrome/answer/95647</a></li>
            <li><strong>Internet Explorer:</strong> <a href="https://support.microsoft.com/help/17442" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/help/17442</a></li>
            <li><strong>Firefox:</strong> <a href="https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop</a></li>
            <li><strong>Safari:</strong> <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer">https://support.apple.com/guide/safari/manage-cookies-sfri11471</a></li>
            <li><strong>Edge:</strong> <a href="https://support.microsoft.com/help/4468242" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/help/4468242</a></li>
          </ul>
          
          <h2>7. Updates to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, 
            or our business practices. Any changes will become effective when we post the revised policy 
            on our website. We encourage you to periodically review this page for the latest information 
            on our cookie practices.
          </p>
          
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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

export default CookiePolicy;
