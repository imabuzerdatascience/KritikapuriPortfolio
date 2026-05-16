import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { posts } from '../data/posts';

const BlogPost = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const post = posts.find((p) => p.id === parseInt(id, 10));

  if (!post) {
    return <div className="text-center py-48 text-2xl font-bold text-textDark">Post not found!</div>;
  }

  return (
    <div className="bg-[#fbfaf6] min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/blog" className="inline-flex items-center gap-2 text-pinkAccent hover:text-pink-600 font-bold mb-8 transition-colors">
          <ArrowLeft size={20} /> Back to Blog
        </Link>
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100"
        >
          <div className="flex flex-wrap gap-3 items-center mb-6 text-sm font-medium">
            <span className="text-pinkAccent bg-pinkLight px-3 py-1 rounded-full uppercase tracking-wider text-[10px] font-bold">
              {post.category}
            </span>
            <span className="text-gray-400">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-textDark mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-pinkAccent font-semibold mb-8 border-b border-gray-100 pb-8">
            {post.author}
          </p>
          <div className="mt-8">
            <img src={post.image} alt={post.title} className="w-full h-64 md:h-96 object-cover rounded-2xl mb-10 shadow-sm" />
            <div className="prose prose-lg max-w-none text-textDark">
              {post.content}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost;
