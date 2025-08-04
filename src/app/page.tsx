// pages/index.js or app/page.js (depending on your Next.js version)
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


const HomePage =  () => {
   const {getUser} = getKindeServerSession();
   const user = getUser();
   
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: "📚",
      title: "Rich Content Library",
      description: "Access thousands of articles across various topics from technology to lifestyle and personal growth."
    },
    {
      icon: "✍️",
      title: "Expert Writers",
      description: "Learn from industry professionals and thought leaders who share their knowledge and experiences."
    },
    {
      icon: "🎯",
      title: "Personalized Experience",
      description: "Discover content tailored to your interests with our smart recommendation system."
    },
    {
      icon: "💬",
      title: "Community Driven",
      description: "Join discussions, share insights, and connect with like-minded readers and writers."
    }
  ];

  const benefits = [
    {
      title: "Stay Updated",
      description: "Keep up with the latest trends, technologies, and insights in your field of interest.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Learn & Grow",
      description: "Expand your knowledge with in-depth articles, tutorials, and expert perspectives.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Share Your Voice",
      description: "Contribute your own stories and insights to help others in the community.",
      gradient: "from-pink-500 to-red-600"
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
      y: -10,
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
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your Gateway
              </span>
              <br />
               {user && <span className="text-white">Welcome back, {user.family_name}!</span>}
              <span className="text-white">to Knowledge</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover a world of insights, stories, and expertise. BlogApp connects you with quality content from passionate writers and industry experts across diverse topics.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-x-4"
            >
              <Link href="/blog" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Explore Articles
              </Link>
              <Link href="/about" className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 ">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose BlogApp?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We've built a platform that puts quality content and user experience at the forefront
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What You'll Get</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join thousands of readers who trust BlogApp for their daily dose of knowledge and inspiration
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">10K+</div>
                <div className="text-gray-300">Monthly Readers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Quality Articles</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Expert Writers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-300">Topic Categories</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-300 text-lg">Getting started is simple and free</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Browse & Discover</h3>
              <p className="text-gray-300">Explore our extensive library of articles across various topics and categories</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Read & Learn</h3>
              <p className="text-gray-300">Dive deep into high-quality content written by experts and passionate writers</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Engage & Share</h3>
              <p className="text-gray-300">Join the conversation, share your thoughts, and connect with the community</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of readers who trust BlogApp for quality content. Start exploring amazing articles today, completely free!
            </p>
            <div className="space-x-4">
              <Link href="/blog" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Start Reading
              </Link>
              <Link href="/subscribe" className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
                Subscribe Now
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
            transition={{ duration: 0.6, delay: 0.8 }}
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

export default HomePage;