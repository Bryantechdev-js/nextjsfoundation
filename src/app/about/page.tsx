// pages/about.js or app/about/page.js (depending on your Next.js version)
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const page = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { number: '10K+', label: 'Monthly Readers' },
    { number: '500+', label: 'Articles Published' },
    { number: '50+', label: 'Contributing Writers' },
    { number: '5+', label: 'Years of Experience' }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Editor-in-Chief',
      bio: 'Passionate about storytelling and digital content creation with 8+ years of experience.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Chen',
      role: 'Technical Writer',
      bio: 'Full-stack developer turned writer, specializing in web development and emerging technologies.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Strategist',
      bio: 'Expert in content marketing and SEO, helping our stories reach the right audience.',
      image: '/api/placeholder/300/300'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  

  const itemVariants:any = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants:any = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
     

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="text-white">Our Story</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a passionate community of writers, creators, and storytellers dedicated to sharing knowledge and inspiring others through the power of words.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg text-center max-w-4xl mx-auto leading-relaxed">
              At BlogApp, we believe that every story matters. Our mission is to provide a platform where diverse voices can share their experiences, insights, and expertise with the world. We strive to create content that not only informs but also inspires, challenges, and connects people across different backgrounds and interests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                How It All Started
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  BlogApp was born from a simple idea: everyone has a story worth telling. Founded in 2019 by a group of passionate writers and developers, we started as a small community blog focused on technology and web development.
                </p>
                <p>
                  Over the years, we've grown into a diverse platform covering topics ranging from technology and business to lifestyle and personal growth. Our commitment to quality content and community building has attracted thousands of readers and writers from around the world.
                </p>
                <p>
                  Today, we continue to evolve and adapt, always staying true to our core values of authenticity, inclusivity, and the power of storytelling to create meaningful connections.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl p-8 text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                  <div className="space-y-3 text-white">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Authenticity in every story</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Community-driven content</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Continuous learning</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Inclusive perspectives</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-300 text-lg">The passionate individuals behind BlogApp</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Want to Join Our Journey?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a reader looking for inspiration or a writer wanting to share your story, we'd love to have you as part of our community.
            </p>
            <div className="space-x-4">
              <Link href="/create" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300">
                Start Writing
              </Link>
              <Link href="/contact" className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-400">
              © 2024 BlogApp. Made with ❤️ and Next.js
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default page;