import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "5 Things I Like About My Marketing Course at University of Wolverhampton",
      author: "By Kritika Puri – Aspiring Social Media Manager",
      date: "May 2026",
      category: "Education & Growth",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
      excerpt: "Choosing to study marketing at the University of Wolverhampton has been one of the most strategic decisions in shaping my career... Here are five aspects of the course that have significantly influenced my professional growth.",
    },
    {
      id: 2,
      title: "The Power of Community Management for Modern Brands",
      author: "By Kritika Puri – Aspiring Social Media Manager",
      date: "June 2026",
      category: "Strategy & Engagement",
      image: "https://images.unsplash.com/photo-1542744094-24638ea0b5b5?q=80&w=800&auto=format&fit=crop",
      excerpt: "Building a brand isn't just about broadcasting messages; it's about listening, engaging, and fostering a sense of belonging among your audience. Real growth comes from authentic community management.",
    },
    {
      id: 3,
      title: "Why Analytics Should Drive Your Creative Social Content",
      author: "By Kritika Puri – Aspiring Social Media Manager",
      date: "July 2026",
      category: "Data-Driven Marketing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      excerpt: "Stop relying solely on gut feelings. The most successful social media campaigns are those where creative vision is directly informed by data, engagement metrics, and audience behaviour insights.",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 bg-[#fbfaf6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="bg-pinkLight text-pinkAccent text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 inline-block">
          BLOG & INSIGHTS
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-textDark mb-4 tracking-tight">
          Writings & Thoughts
        </h1>
        <p className="text-textLight text-lg md:text-xl">
          Insights on digital strategy, social media, and my journey.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white rounded-[2rem] border border-gray-100 hover:border-pinkLight hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group"
          >
            <div className="h-48 overflow-hidden border-b border-gray-100">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-3 items-center mb-6 text-sm font-medium">
                <span className="text-pinkAccent bg-pinkLight px-3 py-1 rounded-full uppercase tracking-wider text-[10px]">
                  {post.category}
                </span>
                <span className="text-gray-400 text-xs">{post.date}</span>
              </div>
              
              <h2 className="text-2xl font-extrabold text-textDark mb-4 leading-snug group-hover:text-pinkAccent transition-colors">
                {post.title}
              </h2>
              
              <p className="text-textLight text-sm leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">{post.author}</span>
                <button className="text-sm font-bold text-pinkAccent group-hover:text-pink-600 transition-colors flex items-center gap-1">
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
