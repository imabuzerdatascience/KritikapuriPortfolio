import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Ruler, Users, FileVideo, LineChart, Mail, MapPin } from 'lucide-react';
import { posts } from '../data/posts';

const Home = () => {
  const services = [
    {
      icon: <Ruler className="w-8 h-8 text-yellow-500" />,
      title: "Social Media &\nContent Strategy",
      problem: "Posting without a plan is just noise. Without a clear content strategy, brands waste time creating content that doesn't connect or convert.",
      solution: "Kritika Puri builds end-to-end social media strategy — content pillars, brand voice guides, platform-specific calendars, and competitive analysis tailored to your audience and goals.",
      features: [
        "Monthly content calendars",
        "Brand voice & tone guide",
        "Competitor & audience analysis",
        "Content pillar mapping"
      ],
      pricing: "Starting at ₹15,000/mo",
      isPopular: false
    },
    {
      icon: <Users className="w-8 h-8 text-textDark" />,
      title: "Community\nManagement &\nGrowth",
      problem: "Followers without relationships are just numbers. Most brands treat community as an afterthought — and they plateau early.",
      solution: "Authentic community growth built on daily engagement, DM funnels, loyalty rituals, and sentiment tracking that turns followers into advocates.",
      features: [
        "Daily engagement monitoring",
        "DM management & funnels",
        "Community event planning",
        "Brand sentiment tracking"
      ],
      pricing: "Starting at ₹20,000/mo",
      isPopular: true
    },
    {
      icon: <FileVideo className="w-8 h-8 text-gray-700" />,
      title: "Short-Form Video\nMarketing",
      problem: "Brands know they need Reels and Shorts, but most produce content that gets ignored in the first second.",
      solution: "Strategic short-form video marketing — from scroll-stopping hooks and scripts to CapCut editing, trending audio sourcing, and platform-specific SEO.",
      features: [
        "Script & storyboarding",
        "Hook writing & A/B testing",
        "Trending audio sourcing",
        "Reels, Shorts & TikTok editing"
      ],
      pricing: "Starting at ₹5,000/video",
      isPopular: false
    },
    {
      icon: <LineChart className="w-8 h-8 text-red-500" />,
      title: "Instagram Growth\nStrategy &\nAnalytics",
      problem: "Most brands track vanity metrics — likes and follower counts — while ignoring the signals that actually predict growth.",
      solution: "A data-first Instagram growth strategy built on saver-to-reach ratios, profile visit conversion rates, watch rates, and monthly performance pivots.",
      features: [
        "Monthly analytics reports",
        "A/B content testing",
        "Growth forecasting",
        "Paid ads performance review"
      ],
      pricing: "Starting at ₹10,000/mo",
      isPopular: false
    }
  ];

  const recentPosts = posts.slice(0, 2);

  return (
    <div className="bg-[#fbfaf6]">
      {/* Hero Section */}
      <section className="px-4 py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <span className="bg-pinkLight text-pinkAccent text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 inline-block">
            AS SEEN IN DIGITAL STRATEGY
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-textDark mb-4 leading-tight tracking-tight">
            Hi, I'm <span className="text-pinkAccent">Kritika.</span>
          </h1>
          <h2 className="text-2xl text-textLight font-light mb-8 max-w-md">
            Aspiring Social Media Manager & Digital Strategist
          </h2>
          
          <p className="text-lg md:text-xl text-textLight leading-relaxed mb-8 max-w-lg">
            I help <strong>D2C brands, startups, and creators</strong> turn passive scrollers into loyal communities with content strategy that connects, short-form video that converts, and analytics that prove the results.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#services" className="px-8 py-3 bg-pinkAccent text-white font-bold rounded-full shadow-lg shadow-pinkAccent/30 hover:bg-pink-500 transition-all text-center flex items-center justify-center">
              See the Results
            </a>
            <a href="#contact-section" className="px-8 py-3 bg-transparent border-2 border-gray-200 text-textDark font-bold rounded-full hover:border-pinkAccent hover:text-pinkAccent transition-all text-center flex items-center justify-center">
              Work With Me
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-pinkLight rounded-[2rem] transform rotate-3"></div>
            <img 
              src="/kritika.jpg" 
              alt="Kritika Puri" 
              className="relative rounded-[2rem] shadow-xl w-full max-w-md mx-auto object-cover h-[500px]"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 w-full relative">
            <div className="relative p-2 border-2 border-pinkLight rounded-3xl overflow-hidden group">
               <div className="absolute inset-0 bg-pinkAccent mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity z-10 duration-500"></div>
              <img 
                src="/kritika.jpg" 
                alt="About Kritika" 
                className="rounded-2xl object-cover w-full h-[600px]"
              />
            </div>
          </div>
          <div className="flex-1 pt-8">
            <span className="bg-pinkLight text-pinkAccent text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 inline-block">
              ABOUT KRITIKA PURI
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-textDark mb-8 leading-tight">
              Where <span className="text-pinkAccent cursor-text">data meets</span> creative strategy
            </h2>
            <div className="space-y-6 text-textLight text-lg">
              <p>
                Hi, I'm <strong>Kritika Puri</strong> — an aspiring Social Media Manager who believes great social media is equal parts art and analytics. I've spent the last few years doing the real work: building content calendars from scratch, crafting Reels that stop the scroll, managing communities that stay engaged, and turning raw numbers into strategic decisions.
              </p>
              <p>
                My approach to social media strategy is simple: understand the audience deeply, create content that delivers genuine value, and measure everything that matters. I've helped D2C skincare brands, indie food businesses, and edtech platforms grow engaged audiences without relying on paid ads.
              </p>
              <p>
                Whether you need an <strong>Instagram growth strategy</strong>, a full content marketing system, or a partner to own your brand voice online — I bring the creative vision and the analytics to make it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 max-w-6xl mx-auto px-4">
        <span className="bg-pinkLight text-pinkAccent text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 inline-block">
          SERVICES
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-textDark mb-6 leading-tight max-w-2xl">
          Social media services built for <span className="text-pinkAccent cursor-text">measurable growth</span>
        </h2>
        <p className="text-textLight text-lg mb-16 max-w-2xl">
          Every engagement is strategy-first. Kritika Puri designs social media solutions that move the needle — from first impression to loyal customer.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, index) => (
             <motion.div 
             key={index}
             whileHover={{ y: -5 }}
             className={`p-8 rounded-[2rem] transition-all h-full flex flex-col
               ${service.isPopular 
                 ? 'bg-pinkAccent text-white shadow-xl shadow-pinkAccent/20' 
                 : 'bg-white border border-gray-100 shadow-sm hover:shadow-md text-textDark'
               }`}
           >
              {service.isPopular && (
                <span className="bg-white/20 text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-6 inline-block">
                  MOST POPULAR
                </span>
              )}
              <div className={`mb-8 ${service.isPopular ? 'text-white' : ''}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 whitespace-pre-line leading-tight">
                {service.title}
              </h3>
              
              <div className={`mb-8 text-sm leading-relaxed flex-grow ${service.isPopular ? 'text-white/90' : 'text-textLight'}`}>
                <p className="mb-4">
                  <strong className={service.isPopular ? 'text-white' : 'text-textDark'}>The problem:</strong> {service.problem}
                </p>
                <p className="mb-6">
                  <strong className={service.isPopular ? 'text-white' : 'text-textDark'}>The solution:</strong> {service.solution}
                </p>
                <ul className="list-disc pl-4 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="pl-1">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className={`text-sm font-bold pt-6 border-t ${service.isPopular ? 'text-white border-white/20' : 'text-textDark border-gray-100'}`}>
                {service.pricing}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Highlight Section */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="bg-pinkLight text-pinkAccent text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 inline-block">
                LATEST INSIGHTS
              </span>
              <h2 className="text-4xl font-extrabold text-textDark">From the <span className="text-pinkAccent">Blog</span></h2>
            </div>
            <Link to="/blog" className="text-pinkAccent font-bold hover:text-pink-600 transition-colors hidden md:block">
              View All Articles →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="block group">
                 <article className="bg-[#fbfaf6] rounded-[2rem] border border-gray-100 transition-all duration-300 group-hover:border-pinkLight group-hover:shadow-lg overflow-hidden h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-pinkAccent bg-pinkLight px-3 py-1 rounded-full uppercase tracking-wider text-[10px] font-bold">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs font-medium">{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-textDark mb-4 leading-snug group-hover:text-pinkAccent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-textLight text-sm leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <span className="text-sm font-bold text-pinkAccent group-hover:underline decoration-2 underline-offset-4">Read Article</span>
                    </div>
                  </div>
                 </article>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/blog" className="text-pinkAccent font-bold hover:text-pink-600 transition-colors">
              View All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Embedded Contact Section */}
      <section id="contact-section" className="py-24 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={{ hidden: {opacity:0, x:-20}, visible: {opacity:1, x:0}}}>
            <span className="bg-pinkLight text-pinkAccent text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 inline-block">
              Let's work together
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-textDark mb-6 leading-tight">
              Ready to build a social <br />
              <span className="text-pinkAccent">presence that converts?</span>
            </h2>
            <p className="text-textLight text-lg mb-10 leading-relaxed max-w-md">
              If you're looking for an aspiring Social Media Manager who takes strategy seriously and delivers measurable results — you're in the right place.
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

          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={{ hidden: {opacity:0, x:20}, visible: {opacity:1, x:0}}} className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-pinkLight/50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-textDark mb-2">Full Name</label>
                <input type="text" placeholder="Your name" className="w-full bg-gray-50 border border-gray-200 text-textDark rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pinkAccent/50 focus:border-pinkAccent transition-all"/>
              </div>
              <div>
                <label className="block text-sm font-bold text-textDark mb-2">Email Address</label>
                <input type="email" placeholder="you@example.com" className="w-full bg-gray-50 border border-gray-200 text-textDark rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pinkAccent/50 focus:border-pinkAccent transition-all"/>
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
                <textarea rows="4" placeholder="What social media challenge are you trying to solve?" className="w-full bg-gray-50 border border-gray-200 text-textDark rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pinkAccent/50 focus:border-pinkAccent transition-all"></textarea>
              </div>
              <button className="w-full bg-pinkAccent text-white font-bold text-lg rounded-xl py-4 shadow-md hover:bg-pink-500 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                Send Message — Let's Talk Strategy 🚀
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
