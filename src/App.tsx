import { motion, useScroll, useTransform } from 'motion/react';
import { Play, Zap, Droplets, Flame, Gamepad2, ChevronDown, ArrowRight, Star, ShoppingCart, Menu, X, Instagram, Twitter, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-neon-purple selection:text-white">
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="font-display font-black text-2xl tracking-tighter uppercase flex items-center gap-2">
            <Zap className="w-6 h-6 text-neon-blue" />
            <span>Streaming<span className="text-neon-purple">TV</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wider">
            <a href="#flavors" className="hover:text-neon-blue transition-colors">Flavors</a>
            <a href="#experience" className="hover:text-neon-purple transition-colors">The Vibe</a>
            <a href="#community" className="hover:text-neon-red transition-colors">Community</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="hover:text-neon-blue transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold uppercase tracking-wide hover:bg-neon-blue hover:text-black transition-all duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pt-20">
          <a href="#flavors" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl uppercase tracking-widest hover:text-neon-blue">Flavors</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl uppercase tracking-widest hover:text-neon-purple">The Vibe</a>
          <a href="#community" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl uppercase tracking-widest hover:text-neon-red">Community</a>
          <button className="mt-8 bg-neon-blue text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xl">
            Shop Now
          </button>
        </div>
      )}

      {/* A. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-dark-bg z-10" />
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
            alt="Cinematic gaming setup" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] mb-6">
              Drink <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-red neon-text-blue">The Stream</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0 font-medium">
              Every drop is a vibe. Every sip is a scene. Premium energy for the moments that matter.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto bg-neon-blue text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                Shop Now
              </button>
              <button className="w-full sm:w-auto border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                Explore Flavors <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
            style={{ y }}
          >
            <div className="absolute inset-0 bg-neon-purple/20 blur-[100px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=1000&auto=format&fit=crop" 
              alt="Floating Energy Drink Can" 
              className="relative z-10 w-full max-w-md mx-auto transform -rotate-12 drop-shadow-2xl mix-blend-screen"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* B. SOCIAL PROOF */}
      <section className="py-12 border-y border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-gray-400 mb-8 font-semibold">
            Loved by 100K+ Streamers & Creators
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Twitch', 'YouTube', 'TikTok', 'Discord'].map((platform) => (
              <div key={platform} className="text-xl md:text-2xl font-display font-bold uppercase tracking-wider">
                {platform}
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-4 bg-white/5 rounded-full px-6 py-3 border border-white/10">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-8 h-8 rounded-full border-2 border-black" />
                ))}
              </div>
              <div className="flex items-center gap-1 text-neon-blue">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm font-medium italic text-gray-300">"The only energy I need for a 12-hour stream."</p>
            </div>
          </div>
        </div>
      </section>

      {/* C. PRODUCT HIGHLIGHT */}
      <section id="flavors" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-4">Choose Your <br/><span className="text-neon-purple">Vibe</span></h2>
              <p className="text-gray-400 text-lg max-w-md">Premium flavors engineered for specific moments. Find your frequency.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-neon-blue transition-colors">
              View All Flavors <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Night Grind', flavor: 'Dark Berry + Citrus', mood: 'Focus Mode', color: 'neon-purple', border: 'neon-border-purple', img: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop' },
              { name: 'Chill Stream', flavor: 'Blue Raspberry Ice', mood: 'Relaxed', color: 'neon-blue', border: 'neon-border-blue', img: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=800&auto=format&fit=crop' },
              { name: 'Hype Drop', flavor: 'Spicy Watermelon', mood: 'High Energy', color: 'neon-red', border: 'neon-border-red', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop' }
            ].map((product, idx) => (
              <motion.div 
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`group relative bg-black border border-white/10 rounded-3xl p-6 overflow-hidden hover:${product.border} transition-all duration-500`}
              >
                <div className="absolute top-6 right-6 z-20">
                  <span className={`bg-${product.color}/20 text-${product.color} text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-${product.color}/30`}>
                    {product.mood}
                  </span>
                </div>
                <div className="relative h-64 mb-6 rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" referrerPolicy="no-referrer" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80`} />
                </div>
                <h3 className="text-3xl font-black uppercase mb-1">{product.name}</h3>
                <p className="text-gray-400 font-medium mb-6">{product.flavor}</p>
                <button className="w-full bg-white/10 hover:bg-white hover:text-black text-white py-3 rounded-xl font-bold uppercase tracking-wide transition-all duration-300">
                  Quick Add - $3.99
                </button>
              </motion.div>
            ))}
          </div>
          <button className="md:hidden w-full mt-8 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest border border-white/20 py-4 rounded-full">
            View All Flavors <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* D. EXPERIENCE SECTION */}
      <section id="experience" className="py-0 relative">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          <div className="relative h-[50vh] lg:h-auto overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop" 
              alt="Immersive gaming experience" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent lg:bg-gradient-to-t lg:from-black lg:to-transparent" />
          </div>
          <div className="flex items-center justify-center p-12 lg:p-24 bg-zinc-950">
            <div className="max-w-md">
              <h2 className="text-5xl md:text-6xl font-black uppercase leading-none mb-6">
                Don't Just Watch.<br/>
                <span className="text-neon-blue">Live It.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Formulated for the modern digital athlete. Whether you're grinding ranks, bingeing the latest drop, or just vibing in the chat—this is your fuel.
              </p>
              <ul className="space-y-4 mb-10">
                {['Zero Sugar, Zero Crash', 'Nootropic Focus Blend', 'Electrolyte Hydration'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-lg">
                    <div className="w-6 h-6 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue">
                      <Zap className="w-3 h-3" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-neon-blue transition-all duration-300">
                Upgrade Your Setup
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* E. HOW IT WORKS */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: <Droplets className="w-8 h-8" />, title: 'Clean Ingredients', desc: 'No artificial junk.' },
              { icon: <Zap className="w-8 h-8" />, title: 'Smooth Energy', desc: 'Sustained boost.' },
              { icon: <Flame className="w-8 h-8" />, title: 'Bold Flavors', desc: 'Taste the hype.' },
              { icon: <Gamepad2 className="w-8 h-8" />, title: 'For The Moment', desc: 'Engineered for screens.' }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-neon-purple mb-6 transform hover:scale-110 transition-transform duration-300 hover:border-neon-purple/50">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold uppercase mb-2">{feature.title}</h4>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. FEATURED PRODUCT (FOCUS SELL) */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-red/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-neon-red/20 text-neon-red text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-neon-red/30">
                Best Seller
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-4">The Midnight<br/>Bundle</h2>
              <p className="text-xl text-gray-400 mb-8">A 12-pack of our most popular late-night flavors. Designed to keep you locked in when the rest of the world logs off.</p>
              
              <div className="flex items-end gap-4 mb-8">
                <span className="text-4xl font-black">$34.99</span>
                <span className="text-gray-500 line-through mb-1">$42.00</span>
              </div>

              <div className="space-y-4 mb-10">
                <label className="flex items-center justify-between p-4 border border-neon-red rounded-xl bg-neon-red/5 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="purchase-type" defaultChecked className="accent-neon-red w-5 h-5" />
                    <span className="font-bold">Subscribe & Save 15%</span>
                  </div>
                  <span className="text-neon-red font-bold">$29.74</span>
                </label>
                <label className="flex items-center justify-between p-4 border border-white/10 rounded-xl hover:bg-white/5 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="purchase-type" className="accent-white w-5 h-5" />
                    <span className="font-bold">One-time purchase</span>
                  </div>
                  <span className="font-bold">$34.99</span>
                </label>
              </div>

              <button className="w-full bg-neon-red text-white py-5 rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,0,60,0.3)]">
                Add to Cart
              </button>
            </div>
            
            <div className="order-1 lg:order-2 relative flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=1000&auto=format&fit=crop" 
                alt="Midnight Bundle" 
                className="w-full max-w-lg drop-shadow-[0_0_50px_rgba(255,0,60,0.2)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* G. UGC / SOCIAL FEED */}
      <section id="community" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">Join The <span className="text-neon-blue">Stream</span></h2>
            <p className="text-gray-400 text-lg">Tag @StreamingTV to be featured on the main stage.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer">
                <img 
                  src={`https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop&sig=${item}`} 
                  alt="User generated content" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="border border-white/20 px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              Follow Us
            </button>
          </div>
        </div>
      </section>

      {/* H. LIMITED EDITION / URGENCY */}
      <section className="py-24 relative overflow-hidden bg-zinc-950 border-y border-white/10">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-neon-purple/20 text-neon-purple px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 border border-neon-purple/30">
            <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" /> Limited Drop
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase mb-6 tracking-tighter">
            Glitch <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">Edition</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            A flavor profile that defies logic. Only 500 cases minted. Once they're gone, they're gone forever.
          </p>
          
          <div className="flex justify-center gap-4 md:gap-8 mb-12 font-display">
            {[
              { label: 'Days', value: '02' },
              { label: 'Hours', value: '14' },
              { label: 'Mins', value: '45' },
              { label: 'Secs', value: '22' }
            ].map((time, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-4xl md:text-6xl font-black bg-white/5 border border-white/10 w-20 h-20 md:w-32 md:h-32 flex items-center justify-center rounded-2xl mb-2 text-neon-purple neon-text-purple">
                  {time.value}
                </div>
                <span className="text-xs md:text-sm uppercase tracking-widest text-gray-500 font-bold">{time.label}</span>
              </div>
            ))}
          </div>

          <button className="bg-neon-purple text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(176,38,255,0.4)] transform hover:scale-105">
            Get It Before It's Gone
          </button>
        </div>
      </section>

      {/* I. FAQ */}
      <section className="py-32 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 text-center">Intel</h2>
          <div className="space-y-4">
            {[
              { q: 'How fast is shipping?', a: 'We drop ship within 24 hours. Standard delivery takes 2-4 business days depending on your zone.' },
              { q: 'What makes the energy "clean"?', a: 'Zero sugar, zero artificial colors. We use natural caffeine derived from green tea and a nootropic blend for focus without the crash.' },
              { q: 'Can I mix flavors?', a: 'Build-your-own bundles are dropping next season. For now, grab our variety pack to test the waters.' },
              { q: 'What if I hate it?', a: 'If the vibe isn\'t right, hit us up within 30 days for a full refund. No sweat.' }
            ].map((faq, i) => (
              <details key={i} className="group border border-white/10 bg-white/5 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg uppercase tracking-wide">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-neon-blue" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* J. FINAL CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-neon-blue/20" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-8">
            Don't Just Watch.<br/>
            <span className="text-white">Experience It.</span>
          </h2>
          <button className="bg-neon-blue text-black px-12 py-6 rounded-full font-black uppercase tracking-widest text-xl hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(0,240,255,0.5)] transform hover:scale-105">
            Start Your Stream
          </button>
        </div>
      </section>

      {/* K. FOOTER */}
      <footer className="bg-black border-t border-white/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="font-display font-black text-3xl tracking-tighter uppercase flex items-center gap-2 mb-6">
                <Zap className="w-8 h-8 text-neon-blue" />
                <span>Streaming<span className="text-neon-purple">TV</span></span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8">
                Premium energy for the digital generation. Drink the stream.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-blue hover:text-black transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-purple hover:text-black transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-red hover:text-black transition-colors"><Youtube className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-white">Shop</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-neon-blue transition-colors">All Flavors</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Bundles</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Merch</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Subscriptions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-white">Stay Connected</h4>
              <p className="text-gray-500 text-sm mb-4">Join the drop list for exclusive flavors and early access.</p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="ENTER EMAIL" 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full text-sm focus:outline-none focus:border-neon-blue transition-colors"
                />
                <button type="submit" className="bg-white text-black px-4 py-2 rounded-lg font-bold uppercase text-sm hover:bg-neon-blue transition-colors">
                  Join
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-wider">
            <p>&copy; 2026 Streaming TV. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-lg border-t border-white/10 z-50">
        <button className="w-full bg-neon-blue text-black py-4 rounded-xl font-black uppercase tracking-widest text-lg shadow-[0_0_20px_rgba(0,240,255,0.3)]">
          Shop Now
        </button>
      </div>
    </div>
  );
}

