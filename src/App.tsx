import React, { useState } from 'react';
import { 
  Coffee, 
  Clock, 
  ChevronRight,
  Utensils, 
  Leaf,
  Menu as MenuIcon,
  X,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Our Story', href: '#' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#' },
  { name: 'Locations', href: '#' },
];

const OurStoryModal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-6"
    style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      onClick={e => e.stopPropagation()}
      className="bg-brand-cream-light rounded-[2rem] p-12 max-w-lg w-full relative shadow-2xl"
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-brand-brown hover:text-brand-orange transition">
        <X size={24} />
      </button>
      <div className="flex items-center gap-2 mb-6">
        <Leaf size={16} className="text-brand-orange" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-orange">Our Story</span>
      </div>
      <h2 className="text-4xl font-serif font-black italic text-brand-brown mb-6">
        Rooted in Craft, Grown with Love
      </h2>
      <p className="text-brand-brown/70 text-sm leading-relaxed mb-4">
        Heirloom Coffee was born in 2012 from a simple belief — that a great cup of coffee can make an ordinary moment extraordinary. What started as a single small café has grown into a beloved community staple, guided by the same values we started with.
      </p>
      <p className="text-brand-brown/70 text-sm leading-relaxed mb-8">
        We source our beans directly from small family farms, roast in small batches, and pair every cup with seasonal food made from scratch. Every detail is intentional. Every ingredient is chosen with care.
      </p>
      <div className="grid grid-cols-3 gap-4 border-t border-brand-brown/10 pt-8">
        {[['2012', 'Founded'], ['100%', 'Organic'], ['3', 'Locations']].map(([stat, label]) => (
          <div key={label} className="text-center">
            <div className="text-2xl font-serif font-black italic text-brand-orange">{stat}</div>
            <div className="text-[10px] uppercase tracking-widest text-brand-brown/50 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const GalleryModal = ({ onClose }: { onClose: () => void }) => {
  const photos = [
    { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600', alt: 'Cozy cafe interior' },
    { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600', alt: 'Latte art' },
    { src: 'https://images.unsplash.com/photo-1464979681340-bdd28a61699e?w=600', alt: 'Autumn pastries' },
    { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600', alt: 'Barista at work' },
    { src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600', alt: 'Coffee beans' },
    { src: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600', alt: 'Seasonal tart' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        onClick={e => e.stopPropagation()}
        className="bg-brand-cream-light rounded-[2rem] p-8 max-w-2xl w-full relative shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-brand-brown hover:text-brand-orange transition">
          <X size={24} />
        </button>
        <div className="flex items-center gap-2 mb-6">
          <Leaf size={16} className="text-brand-orange" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-orange">Gallery</span>
        </div>
        <h2 className="text-3xl font-serif font-black italic text-brand-brown mb-8">
          Moments from Our Café
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.alt} className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const LocationsModal = ({ onClose }: { onClose: () => void }) => {
  const locations = [
    {
      name: 'Heirloom — Marylebone',
      address: '14 Paddington Street, London W1U 5AS',
      hours: 'Mon–Fri 7am–6pm · Sat–Sun 8am–5pm',
      maps: 'https://maps.google.com/?q=14+Paddington+Street+London',
    },
    {
      name: 'Heirloom — Shoreditch',
      address: '32 Redchurch Street, London E2 7DP',
      hours: 'Mon–Fri 7am–7pm · Sat–Sun 8am–6pm',
      maps: 'https://maps.google.com/?q=32+Redchurch+Street+London',
    },
    {
      name: 'Heirloom — Notting Hill',
      address: '8 Pembridge Road, London W11 3HL',
      hours: 'Mon–Sun 8am–5pm',
      maps: 'https://maps.google.com/?q=8+Pembridge+Road+London',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        onClick={e => e.stopPropagation()}
        className="bg-brand-cream-light rounded-[2rem] p-10 max-w-lg w-full relative shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-brand-brown hover:text-brand-orange transition">
          <X size={24} />
        </button>
        <div className="flex items-center gap-2 mb-6">
          <Leaf size={16} className="text-brand-orange" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-orange">Locations</span>
        </div>
        <h2 className="text-3xl font-serif font-black italic text-brand-brown mb-8">
          Find Us
        </h2>
        <div className="space-y-6">
          {locations.map((loc) => (
            <div key={loc.name} className="border-b border-brand-brown/10 pb-6 last:border-0 last:pb-0">
              <h3 className="font-serif font-bold text-brand-brown text-lg italic mb-2">{loc.name}</h3>
              <div className="flex items-start gap-2 mb-1">
                <MapPin size={14} className="text-brand-orange mt-0.5 shrink-0" />
                <p className="text-brand-brown/70 text-sm">{loc.address}</p>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <Clock size={14} className="text-brand-orange mt-0.5 shrink-0" />
                <p className="text-brand-brown/70 text-sm">{loc.hours}</p>
              </div>
<a             
                href={loc.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-widest font-bold text-brand-orange hover:text-brand-brown transition border-b border-brand-orange/30 pb-0.5"
              >
                Get Directions →
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const motionConfig = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showLocations, setShowLocations] = useState(false);

  const handleNavClick = (name: string) => {
    if (name === 'Our Story') setShowStory(true);
    if (name === 'Gallery') setShowGallery(true);
    if (name === 'Locations') setShowLocations(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-6 px-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-black/20">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-brand-orange text-white flex items-center justify-center rounded-full group-hover:rotate-12 transition-transform duration-300">
            <Leaf size={20} fill="currentColor" />
          </div>
          <span className="text-2xl font-serif font-bold text-white italic">
            Heirloom Coffee
          </span>
        </div>
        <div className="hidden md:flex gap-10 items-center">
          {NAV_LINKS.map((link) => (
            link.name === 'Menu' ? (
<a              
                key={link.name}
                href={link.href}
                className="text-white font-medium hover:text-brand-orange transition-colors relative group text-sm"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
              </a>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.name)}
                className="text-white font-medium hover:text-brand-orange transition-colors relative group text-sm"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
              </button>
            )
          ))}
        </div>
        <button className="hidden md:block bg-brand-brown border border-white text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-brand-brown transition">
          Order Online
        </button>
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-brand-brown p-8 flex flex-col gap-6 md:hidden"
            >
              {NAV_LINKS.map((link) => (
                link.name === 'Menu' ? (
 <a                 
                    key={link.name}
                    href={link.href}
                    className="text-white text-xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.name)}
                    className="text-white text-xl text-left"
                  >
                    {link.name}
                  </button>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <AnimatePresence>
        {showStory && <OurStoryModal onClose={() => setShowStory(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showGallery && <GalleryModal onClose={() => setShowGallery(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showLocations && <LocationsModal onClose={() => setShowLocations(false)} />}
      </AnimatePresence>
    </>
  );
};

type CardProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  icon: React.ElementType;
};

const Card = ({ title, category, description, image, icon: Icon }: CardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full h-[520px] perspective-[1200px]">
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 backface-hidden bg-brand-cream-light rounded-[2rem] overflow-hidden shadow-sm border border-brand-brown/5 flex flex-col">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="p-10 flex flex-col flex-grow">
            <div className="mb-4 flex items-center gap-2">
              <Icon size={16} className="text-brand-orange" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-orange">
                {category}
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold italic mb-4">
              {title}
            </h3>
            <p className="text-brand-brown/70 text-sm flex-grow leading-relaxed">
              {description}
            </p>
            <button
              onClick={() => setFlipped(true)}
              className="flex items-center gap-2 text-brand-brown text-[10px] uppercase tracking-[0.2em] font-bold border-b border-brand-brown/10 w-fit pb-1 hover:gap-3 transition-all"
            >
              View Details <ChevronRight size={14} className="text-brand-orange" />
            </button>
          </div>
        </div>
        <div className="absolute inset-0 rotate-y-180 backface-hidden bg-white rounded-[2rem] shadow-2xl p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon size={18} className="text-brand-orange" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-orange">
                Product Info
              </span>
            </div>
            <h3 className="text-3xl font-serif font-bold italic text-brand-brown mb-6">
              {title}
            </h3>
            <p className="text-brand-brown/70 text-sm leading-relaxed mb-8">
              Carefully crafted seasonal product made with premium ingredients and artisan techniques.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b pb-2 border-black/5">
                <span className="font-medium text-brand-brown">Category</span>
                <span className="text-brand-brown/60">{category}</span>
              </div>
              <div className="flex justify-between border-b pb-2 border-black/5">
                <span className="font-medium text-brand-brown">Ingredients</span>
                <span className="text-brand-brown/60">Seasonal blend</span>
              </div>
              <div className="flex justify-between border-b pb-2 border-black/5">
                <span className="font-medium text-brand-brown">Prep Time</span>
                <span className="text-brand-brown/60">5–10 min</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-brand-brown">Availability</span>
                <span className="text-brand-orange font-semibold">In Store</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setFlipped(false)}
            className="mt-10 bg-brand-brown text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-black transition"
          >
            Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-[#1a0f0a] text-white pt-32 pb-16 px-6 md:px-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
      <div>
        <div className="flex items-center gap-2 mb-8">
          <Leaf size={16} className="text-brand-orange" />
          <span className="font-serif text-xl italic">
            Heirloom Coffee
          </span>
        </div>
        <p className="text-white/50 text-sm">
          Crafted coffee and seasonal experiences since 2012.
        </p>
      </div>
      <div>
        <h4 className="text-brand-orange font-bold mb-6">Links</h4>
        <ul className="space-y-3 text-white/60 text-sm">
          {['Menu', 'Story', 'Locations', 'Shop'].map(i => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-brand-orange font-bold mb-6">Company</h4>
        <ul className="space-y-3 text-white/60 text-sm">
          {['Careers', 'Privacy', 'Press', 'Sustainability'].map(i => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-brand-orange font-bold mb-6">Newsletter</h4>
        <input
          placeholder="Email"
          className="w-full bg-transparent border-b border-white/20 py-3 text-sm"
        />
      </div>
    </div>
    <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/30 text-sm">
      © 2024 Heirloom Coffee
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <Navbar />
      <section className="relative h-screen flex items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1665827719939-3975a75b0062?q=80&w=1170&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Cafe"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6 md:px-12 max-w-2xl">
          <motion.div {...motionConfig}>
            <h1 className="text-5xl md:text-7xl font-serif text-white italic font-black leading-tight">
              Sweet Moments Start Here
            </h1>
            <p className="text-white/80 mt-6">
              Artisan coffee crafted with patience and care.
            </p>
            <a href="#menu" className="mt-8 inline-block bg-brand-orange text-white px-8 py-4 rounded-full text-xs uppercase font-bold">
              Explore Menu
            </a>
          </motion.div>
        </div>
      </section>
      <section id="menu" className="py-40 bg-brand-cream relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl italic font-serif font-black mb-6">
              Autumnal Favorites
            </h2>
            <p className="text-brand-brown/60 text-xl">
              Seasonal coffee and bakery selection crafted with care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card
              category="Seasonal Tart"
              title="Caramel Apple Tart"
              description="Orchard apples baked with caramel in a flaky crust."
              image="https://images.unsplash.com/photo-1519915028121-7d3463d20b13"
              icon={Utensils}
            />
            <Card
              category="Coffee"
              title="Maple Pecan Latte"
              description="Espresso with maple syrup and toasted pecans."
              image="https://images.unsplash.com/photo-1695459003559-a84af05f043e"
              icon={Coffee}
            />
            <Card
              category="Bakery"
              title="Cinnamon Bun"
              description="Flaky pastry with warm cinnamon sugar."
              image="https://images.unsplash.com/photo-1593872571314-4a735d4b27b0"
              icon={Leaf}
            />
            <Card
              category="Tea"
              title="House Chai"
              description="Spiced chai brewed with black tea and honey."
              image="https://images.unsplash.com/photo-1519532059956-a63a37af5deb"
              icon={Clock}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}