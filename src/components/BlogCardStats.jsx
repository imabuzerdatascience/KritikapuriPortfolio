import React, { useEffect, useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const BlogCardStats = ({ postId }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);

  useEffect(() => {
    const storedData = localStorage.getItem(`blog-post-${postId}`);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setLikes(parsedData.likes || 0);
      setComments(parsedData.comments ? parsedData.comments.length : 0);
    }
  }, [postId]);

  return (
    <div className="flex items-center gap-4 text-gray-500 font-medium text-sm mt-3 border-t border-gray-100 pt-3">
      <div className="flex items-center gap-1.5">
        <Heart size={16} className="text-pinkAccent" />
        <span>{likes}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <MessageCircle size={16} className="text-pinkAccent" />
        <span>{comments}</span>
      </div>
    </div>
  );
};

export default BlogCardStats;
