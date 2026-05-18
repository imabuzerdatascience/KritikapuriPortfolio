import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, MessageCircle, Send, User } from 'lucide-react';
import { posts } from '../data/posts';

const BlogPost = () => {
  const { id } = useParams();
  
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commentName, setCommentName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedData = localStorage.getItem(`blog-post-${id}`);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setLikes(parsedData.likes || 0);
      setComments(parsedData.comments || []);
    } else {
      setLikes(0);
      setComments([]);
    }
    const userLiked = localStorage.getItem(`blog-post-${id}-liked`);
    setHasLiked(!!userLiked);
  }, [id]);

  const saveToStorage = (newLikes, newComments) => {
    localStorage.setItem(`blog-post-${id}`, JSON.stringify({
      likes: newLikes,
      comments: newComments
    }));
  };

  const handleLike = () => {
    let newLikes = likes;
    if (!hasLiked) {
      newLikes += 1;
      setHasLiked(true);
      localStorage.setItem(`blog-post-${id}-liked`, "true");
    } else {
      newLikes -= 1;
      setHasLiked(false);
      localStorage.removeItem(`blog-post-${id}-liked`);
    }
    setLikes(newLikes);
    saveToStorage(newLikes, comments);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: Date.now(),
      name: commentName.trim() || "Anonymous",
      text: newComment,
      date: new Date().toLocaleDateString()
    };

    const updatedComments = [...comments, newCommentObj];
    setComments(updatedComments);
    setNewComment("");
    setCommentName("");
    saveToStorage(likes, updatedComments);
  };

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
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 mb-10"
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

          {/* Engagement Section: Likes */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-6">
            <button 
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all ${hasLiked ? 'bg-pinkAccent text-white' : 'bg-pinkLight text-pinkAccent hover:bg-pink-100'}`}
            >
              <Heart size={20} className={hasLiked ? "fill-current" : ""} /> 
              {likes} {likes === 1 ? 'Like' : 'Likes'}
            </button>
            <div className="flex items-center gap-2 text-gray-500 font-medium">
              <MessageCircle size={20} />
              {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
            </div>
          </div>
        </motion.article>

        {/* Comments Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-textDark mb-8">Comments</h3>
          
          <form onSubmit={handleAddComment} className="mb-10">
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Your Name (optional)" 
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pinkAccent/50 focus:border-pinkAccent transition-all text-textDark"
              />
            </div>
            <div className="relative">
              <textarea 
                placeholder="Write a comment..." 
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full px-4 py-3 pb-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pinkAccent/50 focus:border-pinkAccent transition-all text-textDark resize-none h-32"
                required
              />
              <button 
                type="submit" 
                disabled={!newComment.trim()}
                className="absolute bottom-3 right-3 bg-pinkAccent text-white p-2 rounded-lg hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
          </form>

          <div className="space-y-6">
            {comments.length === 0 ? (
              <p className="text-gray-500 text-center py-6 italic">No comments yet. Be the first to share your thoughts!</p>
            ) : (
              [...comments].reverse().map((comment) => (
                <div key={comment.id} className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-pinkLight p-2 rounded-full text-pinkAccent">
                      <User size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-textDark text-sm">{comment.name}</h4>
                      <p className="text-xs text-gray-400">{comment.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">{comment.text}</p>
                </div>
              ))
            )}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default BlogPost;
