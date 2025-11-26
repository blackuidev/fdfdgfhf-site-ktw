import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, Github, Twitter, Instagram, Mail } from 'lucide-react';

interface SocialLink {
  icon: LucideIcon;
  href: string;
  alt: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    { icon: Github, href: 'https://github.com/your-github', alt: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/your-twitter', alt: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/your-instagram', alt: 'Instagram' },
    { icon: Mail, href: 'mailto:your@email.com', alt: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12 mt-20 backdrop-blur-xl">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm text-gray-300">
              We are a team of passionate developers creating amazing web experiences.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition-colors duration-200">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  <link.icon className="h-6 w-6" aria-label={link.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 py-4 border-t border-gray-700 text-center text-sm text-gray-400">
          &copy; {currentYear} Your Company. All rights reserved. | <Link to="/terms" className="hover:text-primary transition-colors duration-200">Terms of Service</Link> | <Link to="/privacy" className="hover:text-primary transition-colors duration-200">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
