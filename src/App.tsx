import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Instagram, Facebook, Play, ChevronLeft, ChevronRight, Menu as MenuIcon, X } from 'lucide-react';
import EspressoMachine from './components/EspressoMachine';

const favorites = [
  { name: 'PHỞ', desc: 'The soul of Vietnam. Rich broth, fresh herbs.', img: 'https://images.pexels.com/photos/6646453/pexels-photo-6646453.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'BÁNH MÌ', desc: 'Crispy baguettes, flavorful fillings. Helsinki\'s favorite.', img: 'https://images.pexels.com/photos/15442514/pexels-photo-15442514.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'BAC XIU', desc: 'Sweet, smooth Vietnamese white coffee.', img: 'https://images.pexels.com/photos/4145554/pexels-photo-4145554.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'SUMMER ROLLS', desc: 'Light and crisp. Perfect snack.', img: 'https://images.pexels.com/photos/5602498/pexels-photo-5602498.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const reviews = [
  { text: '"Top customer service... free gingerbread cookies!"', rating: 5, author: 'Emma' },
  { text: '"The best pho in Helsinki!"', rating: 5, author: 'Matti' },
  { text: '"Taste was perfect!"', rating: 5, author: 'Anna' },
  { text: '"Cozy atmosphere and great prices. Perfect for a quick lunch."', rating: 4, author: 'Customer' },
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full relative font-sans text-[#3a3025]">
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop")' }}
      ></div>
      <div className="fixed inset-0 bg-[#d1d9e0]/40 backdrop-blur-md z-0"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-6 md:py-10 flex flex-col gap-8">
        
        {/* Navbar */}
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-panel-heavy rounded-full px-6 py-4 flex justify-between items-center sticky top-4 z-50"
        >
          <h1 className="font-serif text-2xl font-semibold tracking-wide">Café Anh<span className="text-lg ml-1 opacity-50">✻</span></h1>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-xs font-bold tracking-widest uppercase">
            <a href="#" className="hover:text-black transition-colors">Home</a>
            <a href="#menu" className="hover:text-black transition-colors">Menu</a>
            <a href="#story" className="hover:text-black transition-colors">Story</a>
            <a href="#reviews" className="hover:text-black transition-colors">Reviews</a>
          </div>

          <div className="hidden md:block">
            <button className="glass-button rounded-full px-6 py-2 text-xs font-bold tracking-widest uppercase">
              Order Online
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </motion.nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass-panel-heavy rounded-3xl p-6 flex flex-col gap-4 text-sm font-bold tracking-widest uppercase sticky top-24 z-40"
          >
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
            <a href="#story" onClick={() => setIsMobileMenuOpen(false)}>Story</a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
            <button className="glass-button rounded-full px-6 py-3 mt-2">Order Online</button>
          </motion.div>
        )}

        {/* Hero Section */}
        <motion.header 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-panel-heavy rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between min-h-[50vh] relative overflow-hidden gap-12"
        >
          {/* Optional inner background image for hero to make it pop like the original left panel */}
          <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop")' }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfbf7]/90 to-[#fdfbf7]/40"></div>
          
          <div className="relative z-10 max-w-xl w-full md:w-1/2">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#3a3025] leading-tight mb-6"
            >
              A Slice of Vietnam<br/>in Helsinki
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-[#5a4f44] mb-8 max-w-md"
            >
              Warm hospitality, authentic flavors.<br/>Your cozy corner on Hämeentie.
            </motion.p>
            <motion.button 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="glass-button rounded-full px-8 py-4 text-sm font-bold tracking-widest uppercase shadow-lg hover:bg-white/50"
            >
              Explore Our Menu
            </motion.button>
          </div>

          <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center">
            <EspressoMachine />
          </div>
        </motion.header>

        {/* Favorites Section */}
        <motion.section 
          id="menu"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-panel-heavy rounded-[2rem] md:rounded-[3rem] p-8 md:p-12"
        >
          <h3 className="text-center font-bold text-2xl tracking-widest mb-12 uppercase">Today's Favorites</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
            {favorites.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="relative flex flex-col items-center mb-6 w-full h-40 justify-end">
                  {/* 3D Glass Plate */}
                  <div className="absolute bottom-0 w-40 h-12 rounded-[50%] glass-plate z-0 transition-transform duration-500 group-hover:scale-110"></div>
                  {/* Food Image */}
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    referrerPolicy="no-referrer"
                    className="w-32 h-32 rounded-full object-cover z-10 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-4 group-hover:scale-110"
                  />
                </div>
                <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                <p className="text-sm text-[#6a5f54] max-w-[200px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Story Section */}
        <motion.section 
          id="story"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-panel-heavy rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="w-full md:w-1/2">
            <h3 className="font-bold text-2xl tracking-widest mb-6 uppercase">Our Story</h3>
            <p className="text-[#5a4f44] leading-relaxed mb-6">
              Born from a passion for authentic Vietnamese street food and the cozy coffee culture of Helsinki. 
              Café Anh is more than just a place to eat; it's a gathering space where every cup of Bac Xiu and every bowl of Pho tells a story of heritage and love.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="glass-button rounded-full px-6 py-3 text-xs font-bold tracking-widest uppercase">
                Read More
              </button>
              <a href="#visit" className="glass-button bg-orange-500/20 hover:bg-orange-500/40 rounded-full px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Visit Us Today
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative rounded-3xl overflow-hidden glass-panel-light p-2">
            <img 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop" 
              alt="Our Story" 
              referrerPolicy="no-referrer"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 glass-button rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-xl">
                <Play className="w-6 h-6 ml-1 text-[#3a3025]" fill="currentColor" />
              </button>
            </div>
          </div>
        </motion.section>

        {/* Reviews Section */}
        <motion.section 
          id="reviews"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-panel-heavy rounded-[2rem] md:rounded-[3rem] p-8 md:p-12"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-2xl tracking-widest uppercase">Reviews</h3>
            <div className="hidden md:flex gap-2">
              <button className="p-2 glass-button rounded-full"><ChevronLeft className="w-5 h-5" /></button>
              <button className="p-2 glass-button rounded-full"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
            {reviews.map((review, idx) => (
              <div key={idx} className="min-w-[280px] md:min-w-[320px] glass-panel-light rounded-3xl p-6 md:p-8 snap-center flex flex-col justify-between shadow-lg">
                <div className="flex text-orange-500 text-sm mb-4">
                  {'★'.repeat(review.rating)}
                </div>
                <p className="text-base md:text-lg font-medium mb-6 flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden shadow-inner">
                    <img src={`https://i.pravatar.cc/150?u=${idx + 10}`} alt="avatar" referrerPolicy="no-referrer" />
                  </div>
                  <span className="font-bold text-sm">{review.author}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Footer / Location */}
        <motion.footer 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-panel-heavy rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="w-full md:w-1/2 h-48 md:h-64 rounded-3xl overflow-hidden bg-gray-200 relative glass-panel-light p-2">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover rounded-2xl opacity-70" alt="Map" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-button p-3 rounded-full animate-bounce">
                <MapPin className="w-8 h-8 text-orange-600 drop-shadow-md" fill="currentColor" />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div>
              <h3 className="font-bold text-2xl tracking-widest uppercase mb-2">Visit Us</h3>
              <p className="text-[#5a4f44]">Experience the best of Vietnam in Helsinki.</p>
            </div>
            
            <div className="flex flex-col gap-4 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-orange-600" />
                <p className="font-medium">Hämeentie 30<br/>00530 Helsinki, Finland</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 shrink-0 text-orange-600" />
                <p className="font-medium">Open Daily · Closes 7 PM</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-orange-600" />
                <p className="font-medium">+358 45 3151528</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4 pt-6 border-t border-[#3a3025]/10">
              <a href="#" className="glass-button p-3 rounded-full hover:text-orange-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="glass-button p-3 rounded-full hover:text-orange-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <span className="ml-auto text-xs font-bold tracking-widest uppercase opacity-50">© 2026 Café Anh</span>
            </div>
          </div>
        </motion.footer>

      </div>
    </div>
  );
}

export default App;
