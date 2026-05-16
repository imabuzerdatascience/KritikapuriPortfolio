import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#f0ece6] pt-16 pb-8 mt-auto border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-6">
            <h2 className="text-3xl font-extrabold text-textDark tracking-tight mb-4 flex items-center">
              KP<span className="text-pinkAccent">.</span>
            </h2>
            <p className="text-textLight text-lg max-w-sm leading-relaxed">
              <strong className="text-textDark font-semibold">Kritika Puri</strong> — Aspiring Social Media Manager helping brands build communities that convert through strategic content, community management, and data-driven growth.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-textDark tracking-widest uppercase mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-textLight hover:text-pinkAccent transition-colors">Home</Link></li>
              <li><Link to="/" className="text-textLight hover:text-pinkAccent transition-colors">Services</Link></li>
              <li><Link to="/" className="text-textLight hover:text-pinkAccent transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-textLight hover:text-pinkAccent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-textLight hover:text-pinkAccent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Connect Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-textDark tracking-widest uppercase mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><a href="https://www.linkedin.com/in/kritika-puri-6378b13b9?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-pinkAccent transition-colors">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/kritika_puri78?igsh=YTZlc3ZyNWRnamli" target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-pinkAccent transition-colors">Instagram</a></li>
              <li><a href="https://www.facebook.com/share/1CtCNfWBMT/" target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-pinkAccent transition-colors">Facebook</a></li>
              <li><a href="mailto:purikritika09@gmail.com" className="text-textLight hover:text-pinkAccent transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm text-textLight">
          <p>&copy; {currentYear} Kritika Puri. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-medium">Made with <span className="text-pinkAccent">♥</span> & lots of coffee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
