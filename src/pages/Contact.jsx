import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-start">
      {/* Left Text Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-pinkLight text-pinkAccent text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 inline-block">
          Let's work together
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-textDark mb-6 leading-tight">
          Ready to build a social <br />
          <span className="text-pinkAccent">presence that converts?</span>
        </h1>
        <p className="text-textLight text-lg mb-10 leading-relaxed">
          If you're looking for an aspiring Social Media Manager who takes strategy seriously and delivers measurable results — you're in the right place. Tell me about your brand and I'll come back with a tailored proposal.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-textDark">
            <div className="w-10 h-10 rounded-full bg-pinkLight text-pinkAccent flex items-center justify-center border border-pinkPrimary flex-shrink-0">
              <Mail size={18} />
            </div>
            <a href="mailto:purikritika09@gmail.com" className="text-lg font-medium hover:text-pinkAccent transition-colors">
              purikritika09@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-textDark">
            <div className="w-10 h-10 rounded-full bg-pinkLight text-pinkAccent flex items-center justify-center border border-pinkPrimary flex-shrink-0">
              <MapPin size={18} />
            </div>
            <span className="text-lg font-medium">Biratnagar, Nepal</span>
          </div>
        </div>
      </motion.div>

      {/* Right Form Section */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-pinkLight/50"
      >
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-bold text-textDark mb-2">Full Name</label>
            <input 
              type="text" 
              placeholder="Your name" 
              className="w-full bg-gray-50 border border-gray-200 text-textDark rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pinkAccent/50 focus:border-pinkAccent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-textDark mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="w-full bg-gray-50 border border-gray-200 text-textDark rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pinkAccent/50 focus:border-pinkAccent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-textDark mb-2">Monthly Budget</label>
            <select className="w-full bg-gray-50 border border-gray-200 text-textDark rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pinkAccent/50 focus:border-pinkAccent transition-all appearance-none cursor-pointer">
              <option value="" disabled selected>Select your budget range</option>
              <option value="low">Under $500</option>
              <option value="medium">$500 - $1000</option>
              <option value="high">$1000+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-textDark mb-2">Tell me about your brand & goals</label>
            <textarea 
              rows="4"
              placeholder="What social media challenge are you trying to solve? What results are you expecting?"
              className="w-full bg-gray-50 border border-gray-200 text-textDark rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pinkAccent/50 focus:border-pinkAccent transition-all"
            ></textarea>
          </div>
          <button className="w-full bg-pinkAccent text-white font-bold text-lg rounded-xl py-4 shadow-md hover:bg-pink-500 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            Send Message — Let's Talk Strategy 🚀
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
