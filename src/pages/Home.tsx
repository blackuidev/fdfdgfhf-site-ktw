import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative py-24 bg-gradient-to-br from-blue-100 to-purple-50 overflow-hidden"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Discover Your Style
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 mb-8"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            Explore our curated collection of the latest trends and timeless classics.
          </motion.p>
          <motion.div variants={fadeIn} transition={{ delay: 0.6 }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Shop Now</Button>
          </motion.div>
        </div>
        {/* Hero Image (Replace with actual image) */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1523381294911-8cd694c2bca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Fashionable woman"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        </div>
      </motion.section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card 1 */}
            <motion.div variants={fadeIn} className="w-full" initial="initial" animate="animate">
              <Card>
                <CardHeader>
                  <CardTitle>Elegant Dress</CardTitle>
                  <CardDescription>A timeless classic for any occasion.</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="https://images.unsplash.com/photo-1576566588028-140a5d26b819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                    alt="Elegant Dress"
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-700">This dress is made from high-quality materials and designed for comfort and style.</p>
                </CardContent>
                <CardFooter className="justify-between">
                  <span className="text-2xl font-bold">$99.99</span>
                  <Button>Add to Cart</Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Product Card 2 */}
            <motion.div variants={fadeIn} className="w-full" initial="initial" animate="animate">
              <Card>
                <CardHeader>
                  <CardTitle>Stylish Jacket</CardTitle>
                  <CardDescription>Stay warm and fashionable with this jacket.</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="https://images.unsplash.com/photo-1551028714-25c3d8d95e1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                    alt="Stylish Jacket"
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-700">Perfect for layering, this jacket offers both style and functionality.</p>
                </CardContent>
                <CardFooter className="justify-between">
                  <span className="text-2xl font-bold">$149.99</span>
                  <Button>Add to Cart</Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Product Card 3 */}
            <motion.div variants={fadeIn} className="w-full" initial="initial" animate="animate">
              <Card>
                <CardHeader>
                  <CardTitle>Comfortable Shoes</CardTitle>
                  <CardDescription>Step into comfort with these stylish shoes.</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Comfortable Shoes"
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-700">These shoes are designed for all-day comfort and style.</p>
                </CardContent>
                <CardFooter className="justify-between">
                  <span className="text-2xl font-bold">$79.99</span>
                  <Button>Add to Cart</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <motion.div variants={fadeIn} className="bg-white rounded-lg shadow-md p-6" initial="initial" animate="animate">
              <div className="flex items-center mb-4">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b2933e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold">Alice Johnson</p>
                  <p className="text-gray-500">Fashion Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-700">"I love the quality and style of the clothing from this store. Highly recommended!"</p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div variants={fadeIn} className="bg-white rounded-lg shadow-md p-6" initial="initial" animate="animate">
              <div className="flex items-center mb-4">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1570295999680-335b0c8c02c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                  <AvatarFallback>BJ</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold">Bob Smith</p>
                  <p className="text-gray-500">Style Icon</p>
                </div>
              </div>
              <p className="text-gray-700">"Great selection and excellent customer service. I always find something I love here."</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 mb-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            Ready to Elevate Your Wardrobe?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-8"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Browse our new arrivals and discover your next favorite piece.
          </motion.p>
          <motion.div variants={fadeIn} transition={{ delay: 0.4 }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Explore New Arrivals</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
