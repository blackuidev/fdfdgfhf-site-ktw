import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: Facebook,
    href: '#',
    label: 'Facebook',
  },
  {
    icon: Instagram,
    href: '#',
    label: 'Instagram',
  },
  {
    icon: Twitter,
    href: '#',
    label: 'Twitter',
  },
  {
    icon: Youtube,
    href: '#',
    label: 'YouTube',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 bg-[url('/noise.png')] text-white py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">We are a team dedicated to providing high-quality products and excellent customer service.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors duration-200">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-200">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="text-gray-400">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} BlackUI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
