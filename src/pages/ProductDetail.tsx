import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const ProductDetail = () => {
  const [imageZoom, setImageZoom] = useState(false);

  // Placeholder product data - replace with actual data fetching
  const product = {
    id: 1,
    name: 'Premium Gadget X',
    description: 'The ultimate gadget for all your needs. This premium device offers unparalleled performance and a sleek design. Experience the future today!',
    price: 199.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    reviews: [
      { id: 1, author: 'John Doe', rating: 5, comment: 'Amazing product! Highly recommended.' },
      { id: 2, author: 'Jane Smith', rating: 4, comment: 'Great features and build quality.' },
    ],
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="container mx-auto p-8 flex flex-col md:flex-row gap-8 bg-gradient-to-br from-gray-900 to-black text-white min-h-screen"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      <motion.div
        className="md:w-1/2 cursor-pointer overflow-hidden rounded-lg shadow-md"
        onClick={() => setImageZoom(!imageZoom)}
      >
        <motion.img
          src={product.imageUrl}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${imageZoom ? 'scale-110' : 'scale-100'}`}
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      <div className="md:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-400">{product.description}</p>
        <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>

        <div>
          <h2 className="text-xl font-semibold mb-2">Reviews</h2>
          {product.reviews.map((review) => (
            <div key={review.id} className="mb-4 p-4 bg-white/5 backdrop-blur-md rounded-md">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{review.author}</span>
                <div className="flex items-center">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>

        <Button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300">Add to Cart</Button>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
