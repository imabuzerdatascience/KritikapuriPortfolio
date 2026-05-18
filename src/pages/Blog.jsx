import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import BlogCardStats from '../components/BlogCardStats';

const Blog = () => {

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
          <Link to={`/blog/${post.id}`} key={post.id} className="block group h-full">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] border border-gray-100 hover:border-pinkLight hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
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
                
                <p className="text-textLight text-sm leading-relaxed mb-4 flex-grow">
                  {post.excerpt}
                </p>
                
                <BlogCardStats postId={post.id} />
                
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">{post.author}</span>
                  <span className="text-sm font-bold text-pinkAccent group-hover:text-pink-600 transition-colors flex items-center gap-1">
                    Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
