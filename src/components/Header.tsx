import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-gradient-to-br from-gray-900 to-black backdrop-blur-md bg-white/10 border-white/20 p-4 md:p-6 lg:p-8 shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white hover:text-primary transition-colors duration-300">
          BlackUI
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">
            Home
          </Link>
          <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300">
            Products
          </Link>
        </nav>

        {/* Search Bar & Cart */}
        <div className="flex items-center gap-4">
          <Input type="search" placeholder="Search products..." className="w-48 md:w-64 bg-gray-800 text-white border-gray-700 focus:border-primary focus:ring-primary" />
          <Button variant="ghost" asChild>
            <Link to="/cart" className="text-gray-300 hover:text-white transition-colors duration-300">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
