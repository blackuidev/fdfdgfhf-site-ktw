import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      className="w-full md:w-64 lg:w-80 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
            {product.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4">
          <div className="text-lg font-semibold">${product.price.toFixed(2)}</div>
          <Button variant="primary">Add to Cart</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
