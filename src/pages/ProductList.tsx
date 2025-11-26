import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const products = [
  { id: 1, name: 'Awesome T-Shirt', price: 29.99, imageUrl: 'https://images.unsplash.com/photo-1523381294911-8cd694c82c4c?auto=format&fit=crop&w=400&h=400' },
  { id: 2, name: 'Cool Mug', price: 12.50, imageUrl: 'https://images.unsplash.com/photo-1518057111780-a7bf9e540b3b?auto=format&fit=crop&w=400&h=400' },
  { id: 3, name: 'Stylish Backpack', price: 45.00, imageUrl: 'https://images.unsplash.com/photo-1553062407-98e2462efb4e?auto=format&fit=crop&w=400&h=400' },
  { id: 4, name: 'Amazing Headphones', price: 99.99, imageUrl: 'https://images.unsplash.com/photo-1583394842264-9ff83a726d0e?auto=format&fit=crop&w=400&h=400' },
  { id: 5, name: 'Comfortable Shoes', price: 59.00, imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&h=400' },
];

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const order = sortOrder === 'asc' ? 1 : -1;
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name) * order;
    }
    return (a.price - b.price) * order;
  });

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        <div className="flex items-center space-x-4">
          <Select onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setSortOrder(value)}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Ascending</SelectItem>
              <SelectItem value="desc">Descending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map(product => (
          <motion.div
            key={product.id}
            className="w-full"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Card className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover object-center"
              />
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                <CardDescription className="text-gray-500">${product.price.toFixed(2)}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Additional product details can be added here */}
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
