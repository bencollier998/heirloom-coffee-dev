import React, { useState, useRef } from 'react';
import { 
  Coffee, 
  Clock, 
  ChevronRight,
  Utensils, 
  Leaf,
  Menu as MenuIcon,
  X,
  MapPin,
  ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Our Story', href: '#' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#' },
  { name: 'Locations', href: '#' },
];

const MENU_ITEMS = [
  {
    category: 'Seasonal Tart',
    title: 'Caramel Apple Tart',
    description: 'Orchard apples baked with caramel in a flaky crust.',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13',
    icon: Utensils,
    ingredients: 'Apple, caramel, butter pastry',
    prep: '5–10 min',
  },
  {
    category: 'Coffee',
    title: 'Maple Pecan Latte',
    description: 'Espresso with maple syrup and toasted pecans.',
    image: 'https://images.unsplash.com/photo-1695459003559-a84af05f043e',
    icon: Coffee,
    ingredients: 'Espresso, maple, pecan, oat milk',
    prep: '3–5 min',
  },
  {
    category: 'Bakery',
    title: 'Cinnamon Bun',
    description: 'Flaky pastry with warm cinnamon sugar.',
    image: 'https://images.unsplash.com/photo-1593872571314-4a735d4b27b0',
    icon: Leaf,
    ingredients: 'Flour, cinnamon, brown sugar, butter',
    prep: '5 min',
  },
  {
    category: 'Tea',
    title: 'House Chai',
    description: 'Spiced chai brewed with black tea and honey.',
    image: 'https://images.unsplash.com/photo-1519532059956-a63a37af5deb',
    icon: Clock,
    ingredients: 'Black tea, cardamom, ginger, honey',
    prep: '5–8 min',
  },
  {
    category: 'Coffee',
    title: 'Pumpkin Spice Flat White',
    description: 'Velvety espresso with pumpkin spice and steamed milk.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
    icon: Coffee,
    ingredients: 'Espresso, pumpkin spice, whole milk',
    prep: '3–5 min',
  },
  {
    category: 'Bakery',
    title: 'Carrot Cake',
    description: 'Moist spiced carrot cake with cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
    icon: Utensils,
    ingredients: 'Carrot, cinnamon, cream cheese, walnuts',
    prep: '2 min',
  },
  {
    category: 'Hot Drink',
    title: 'Butterscotch Hot Chocolate',
    description: 'Creamy hot chocolate with a rich butterscotch swirl.',
    image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25',
    icon: Coffee,
    ingredients: 'Dark chocolate, butterscotch, steamed milk',
    prep: '5 min',
  },
  {
    category: 'Cold Drink',
    title: 'Spiced Apple Juice',
    description: 'Warm pressed apple juice with cinnamon and star anise.',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371',
    icon: Leaf,
    ingredients: 'Pressed apple, cinnamon, star anise, clove',
    prep: '3 min',
  },
  {
    category: 'Bakery',
    title: 'Brown Butter Walnut Tart',
    description: 'Buttery tart shell filled with caramelised walnuts and brown butter custard.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814',
    icon: Utensils,
    ingredients: 'Brown butter, walnuts, custard, pastry',
    prep: '5 min',
  },
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
      name: 'Heirloom — Swansea',
      address: '7 Wind Street, Swansea SA1 1DP',
      hours: 'Mon–Fri 7am–6pm · Sat–Sun 8am–5pm',
      maps: 'https://maps.google.com/?q=7+Wind+Street+Swansea',
    },
    {
      name: 'Heirloom — Paris',
      address: '23 Rue de Bretagne, Paris 75003',
      hours: 'Mon–Sun 8am–7pm',
      maps: 'https://maps.google.com/?q=23+Rue+de+Bretagne+Paris',
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

const ShopModal = ({ onClose }: { onClose: () => void }) => {
  const products = [
    { name: 'Heirloom Signature Blend', desc: '250g whole bean coffee, sourced from our partner farms in Colombia and Ethiopia.', price: '£14.00', emoji: '☕' },
    { name: 'Barista Bear', desc: 'Our beloved mascot in plush form. Comes with a tiny Heirloom apron. Limited edition.', price: '£22.00', emoji: '🧸' },
    { name: 'Autumn Roast Gift Set', desc: 'Three seasonal roasts beautifully packaged in a kraft box. Perfect gift.', price: '£38.00', emoji: '🎁' },
    { name: 'Heirloom Canvas Tote', desc: 'Heavyweight canvas tote with our leaf logo. Naturally dyed in warm ochre.', price: '£18.00', emoji: '🛍️' },
    { name: 'Ceramic Keep Cup', desc: 'Hand-thrown ceramic keep cup in our signature cream glaze. 8oz.', price: '£28.00', emoji: '🍵' },
    { name: 'Heirloom Enamel Pin', desc: 'Collectible enamel pin featuring our leaf logo in gold and orange.', price: '£8.00', emoji: '📌' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        onClick={e => e.stopPropagation()}
        className="bg-brand-cream rounded-[2rem] p-8 w-full max-w-2xl relative shadow-2xl overflow-y-auto max-h-[90vh]"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-brand-brown hover:text-brand-orange transition">
          <X size={24} />
        </button>
        <div className="flex items-center gap-2 mb-4">
          <Leaf size={16} className="text-brand-orange" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-orange">Shop</span>
        </div>
        <h2 className="text-3xl font-serif font-black italic text-brand-brown mb-2">
          The Heirloom Store
        </h2>
        <p className="text-brand-brown/60 text-sm mb-8">Take a piece of Heirloom home with you.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((p) => (
            <div key={p.name} className="bg-brand-cream-light rounded-2xl p-6 flex flex-col gap-3">
              <div className="text-3xl">{p.emoji}</div>
              <div>
                <h3 className="font-serif font-bold italic text-brand-brown text-lg">{p.name}</h3>
                <p className="text-brand-brown/60 text-xs mt-1 leading-relaxed">{p.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-brand-brown/10">
                <span className="font-bold text-brand-orange text-sm">{p.price}</span>
                <button className="bg-brand-brown text-white px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-black transition">
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const CareersModal = ({ onClose }: { onClose: () => void }) => {
  const jobs = [
    {
      title: 'Junior Barista',
      location: 'Marylebone, London',
      type: 'Full Time',
      desc: "We're looking for a passionate, curious Junior Barista to join our Marylebone team. You'll learn the craft of specialty coffee from our head baristas, develop your palate, and become part of a tight-knit team that genuinely cares about every cup.",
      reqs: ['A love of coffee and hospitality', 'Positive energy and team spirit', 'Flexibility across weekday and weekend shifts', 'Experience helpful but not essential — we train!'],
    },
    {
      title: 'Pastry Assistant',
      location: 'Swansea',
      type: 'Part Time',
      desc: "Join our Swansea kitchen team and help craft the seasonal bakes that our customers love. Early mornings, warm ovens, and the smell of cinnamon — this one's for the bakers.",
      reqs: ['Basic baking knowledge', 'Early morning availability', 'Attention to detail', 'Food hygiene certificate (or willingness to obtain)'],
    },
    {
      title: 'Front of House Lead',
      location: 'Paris',
      type: 'Full Time',
      desc: "Our Paris location is growing and we need a confident, warm Front of House Lead to run the floor. Bilingual (English/French) preferred. You'll be the face of Heirloom in the Marais.",
      reqs: ['Previous hospitality leadership experience', 'English and French speaker preferred', 'Calm under pressure', 'Passion for exceptional guest experience'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        onClick={e => e.stopPropagation()}
        className="bg-brand-cream rounded-[2rem] p-8 w-full max-w-2xl relative shadow-2xl overflow-y-auto max-h-[90vh]"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-brand-brown hover:text-brand-orange transition">
          <X size={24} />
        </button>
        <div className="flex items-center gap-2 mb-4">
          <Leaf size={16} className="text-brand-orange" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-orange">Careers</span>
        </div>
        <h2 className="text-3xl font-serif font-black italic text-brand-brown mb-2">
          Join Our Team
        </h2>
        <p className="text-brand-brown/60 text-sm mb-8">We're always looking for people who care deeply about craft and community.</p>
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.title} className="bg-brand-cream-light rounded-2xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-serif font-bold italic text-brand-brown text-xl">{job.title}</h3>
                  <div className="flex gap-3 mt-1">
                    <span className="text-[10px] uppercase tracking-widest text-brand-orange font-bold">{job.location}</span>
                    <span className="text-[10px] uppercase tracking-widest text-brand-brown/40 font-bold">{job.type}</span>
                  </div>
                </div>
              </div>
              <p className="text-brand-brown/70 text-sm leading-relaxed mb-4">{job.desc}</p>
              <ul className="space-y-1 mb-4">
                {job.reqs.map((r) => (
                  <li key={r} className="text-xs text-brand-brown/60 flex gap-2">
                    <span className="text-brand-orange">→</span> {r}
                  </li>
                ))}
              </ul>
              <button className="bg-brand-brown text-white px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-black transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const PressModal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      onClick={e => e.stopPropagation()}
      className="bg-brand-cream rounded-[2rem] p-8 w-full max-w-2xl relative shadow-2xl overflow-y-auto max-h-[90vh]"
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-brand-brown hover:text-brand-orange transition">
        <X size={24} />
      </button>
      <div className="flex items-center gap-2 mb-4">
        <Leaf size={16} className="text-brand-orange" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-orange">Press</span>
      </div>
      <h2 className="text-3xl font-serif font-black italic text-brand-brown mb-8">
        In The Press
      </h2>

      <div className="space-y-8">
        <div className="border-b border-brand-brown/10 pb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-orange">The Guardian</span>
            <span className="text-brand-brown/30 text-xs">· March 2024</span>
          </div>
          <h3 className="font-serif font-bold italic text-brand-brown text-xl mb-3">
            "Heirloom Coffee Is Quietly Becoming the UK's Most Loved Independent Café"
          </h3>
          <p className="text-brand-brown/70 text-sm leading-relaxed">
            In a landscape dominated by global chains, Heirloom Coffee has done something remarkable — it has made people slow down. With its warm interiors, seasonally rotating menus, and obsessive attention to sourcing, the brand has cultivated a loyal following that crosses generations. "We never set out to be a chain," says founder James Whitmore. "We just wanted to make the best possible cup of coffee, every single day."
          </p>
        </div>

        <div className="border-b border-brand-brown/10 pb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-orange">Eater London</span>
            <span className="text-brand-brown/30 text-xs">· January 2024</span>
          </div>
          <h3 className="font-serif font-bold italic text-brand-brown text-xl mb-3">
            "The Best Autumn Menu in London Right Now"
          </h3>
          <p className="text-brand-brown/70 text-sm leading-relaxed">
            Heirloom's autumnal offering is nothing short of stunning. From the caramel apple tart — flaky, buttery, unapologetically indulgent — to the maple pecan latte that has become something of a cult obsession, every item on the menu feels considered and intentional. This is seasonal cooking done properly.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-orange">Condé Nast Traveller</span>
            <span className="text-brand-brown/30 text-xs">· November 2023</span>
          </div>
          <h3 className="font-serif font-bold italic text-brand-brown text-xl mb-3">
            "Paris Has Fallen for a British Coffee Brand — and We Understand Why"
          </h3>
          <p className="text-brand-brown/70 text-sm leading-relaxed">
            When Heirloom Coffee opened its doors on Rue de Bretagne, the neighbourhood was sceptical. Six weeks later, there was a queue down the street. The Parisians, notoriously protective of their café culture, have embraced this British import wholeheartedly — a testament to the quality that Heirloom brings to every location it calls home.
          </p>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const SustainabilityModal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      onClick={e => e.stopPropagation()}
      className="bg-brand-cream rounded-[2rem] p-8 w-full max-w-2xl relative shadow-2xl overflow-y-auto max-h-[90vh]"
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-brand-brown hover:text-brand-orange transition">
        <X size={24} />
      </button>
      <div className="flex items-center gap-2 mb-4">
        <Leaf size={16} className="text-brand-orange" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-orange">Sustainability</span>
      </div>
      <h2 className="text-3xl font-serif font-black italic text-brand-brown mb-3">
        Our Commitment to the Planet
      </h2>
      <p className="text-brand-brown/60 text-sm mb-8 leading-relaxed">
        We believe great coffee and good values go hand in hand. Here's how we work to minimise our impact every single day.
      </p>

      <div className="space-y-6">
        {[
          {
            icon: '🌱',
            title: 'Direct Trade Sourcing',
            desc: 'Every bean we use is sourced directly from smallholder farms we have visited and vetted personally. We pay above Fairtrade prices and build long-term relationships with our farmers — because good coffee starts with good people.',
          },
          {
            icon: '♻️',
            title: 'Zero Single-Use Plastic',
            desc: 'Since 2019, we have eliminated single-use plastic across all three of our locations. Our cups are compostable, our lids are plant-based, and we offer a 20p discount to anyone who brings their own cup.',
          },
          {
            icon: '🍂',
            title: 'Seasonal & Local Baking',
            desc: 'Our bakery menu changes with the seasons, using locally grown produce wherever possible. This reduces food miles, supports British farmers, and means our menu is always at its freshest.',
          },
          {
            icon: '⚡',
            title: '100% Renewable Energy',
            desc: 'All of our UK locations run entirely on renewable energy, sourced through certified green tariffs. Our Paris location reached this milestone in early 2024.',
          },
          {
            icon: '🤝',
            title: 'Community Partnerships',
            desc: 'We partner with local food banks and community kitchens to donate unsold food daily. In 2023 we donated over 4,000 items across our three stores.',
          },
          {
            icon: '📦',
            title: 'Plastic-Free Packaging',
            desc: 'All retail packaging — from our coffee bags to our gift boxes — is either recycled, recyclable, or compostable. We are working toward fully home-compostable packaging by 2026.',
          },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 p-5 bg-brand-cream-light rounded-2xl">
            <div className="text-2xl">{item.icon}</div>
            <div>
              <h3 className="font-serif font-bold italic text-brand-brown text-lg mb-1">{item.title}</h3>
              <p className="text-brand-brown/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const motionConfig = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

type CardProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  icon: React.ElementType;
  ingredients: string;
  prep: string;
};

const Card = ({ title, category, description, image, icon: Icon, ingredients, prep }: CardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-72 md:w-80 flex-shrink-0 h-[520px]" style={{ perspective: '1200px' }}>
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 backface-hidden bg-brand-cream-light rounded-[2rem] overflow-hidden shadow-sm border border-brand-brown/5 flex flex-col">
          <div className="relative h-56 overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <div className="mb-3 flex items-center gap-2">
              <Icon size={16} className="text-brand-orange" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-orange">
                {category}
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold italic mb-3">{title}</h3>
            <p className="text-brand-brown/70 text-sm flex-grow leading-relaxed">{description}</p>
            <button
              onClick={() => setFlipped(true)}
              className="flex items-center gap-2 text-brand-brown text-[10px] uppercase tracking-[0.2em] font-bold border-b border-brand-brown/10 w-fit pb-1 hover:gap-3 transition-all mt-4"
            >
              View Details <ChevronRight size={14} className="text-brand-orange" />
            </button>
          </div>
        </div>
        <div className="absolute inset-0 rotate-y-180 backface-hidden bg-white rounded-[2rem] shadow-2xl p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon size={18} className="text-brand-orange" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-orange">Product Info</span>
            </div>
            <h3 className="text-2xl font-serif font-bold italic text-brand-brown mb-4">{title}</h3>
            <p className="text-brand-brown/70 text-sm leading-relaxed mb-6">
              Carefully crafted with premium seasonal ingredients and artisan techniques.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2 border-black/5">
                <span className="font-medium text-brand-brown">Category</span>
                <span className="text-brand-brown/60">{category}</span>
              </div>
              <div className="flex justify-between border-b pb-2 border-black/5">
                <span className="font-medium text-brand-brown">Ingredients</span>
                <span className="text-brand-brown/60 text-right max-w-[55%]">{ingredients}</span>
              </div>
              <div className="flex justify-between border-b pb-2 border-black/5">
                <span className="font-medium text-brand-brown">Prep Time</span>
                <span className="text-brand-brown/60">{prep}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-brand-brown">Availability</span>
                <span className="text-brand-orange font-semibold">In Store</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setFlipped(false)}
            className="mt-6 bg-brand-brown text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-black transition"
          >
            Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const ViewAllModal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      onClick={e => e.stopPropagation()}
      className="bg-brand-cream rounded-[2rem] p-8 w-full max-w-6xl relative shadow-2xl overflow-y-auto max-h-[90vh]"
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-brand-brown hover:text-brand-orange transition z-10">
        <X size={24} />
      </button>
      <div className="flex items-center gap-2 mb-4">
        <Leaf size={16} className="text-brand-orange" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-orange">Full Menu</span>
      </div>
      <h2 className="text-3xl font-serif font-black italic text-brand-brown mb-8">
        Autumnal Favorites
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MENU_ITEMS.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </motion.div>
  </motion.div>
);

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
      <nav className="sticky top-0 z-50 h-20 px-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-black/20">
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

const Footer = ({
  onShowStory,
  onShowLocations,
  onShowShop,
  onShowCareers,
  onShowPress,
  onShowSustainability,
}: {
  onShowStory: () => void;
  onShowLocations: () => void;
  onShowShop: () => void;
  onShowCareers: () => void;
  onShowPress: () => void;
  onShowSustainability: () => void;
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#1a0f0a] text-white pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Leaf size={16} className="text-brand-orange" />
            <span className="font-serif text-xl italic">Heirloom Coffee</span>
          </div>
          <p className="text-white/50 text-sm">
            Crafted coffee and seasonal experiences since 2012.
          </p>
        </div>
        <div>
          <h4 className="text-brand-orange font-bold mb-6">Links</h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li>
              <a href="#menu" className="hover:text-brand-orange transition cursor-pointer">Menu</a>
            </li>
            <li>
              <button onClick={onShowStory} className="hover:text-brand-orange transition">Story</button>
            </li>
            <li>
              <button onClick={onShowLocations} className="hover:text-brand-orange transition">Locations</button>
            </li>
            <li>
              <button onClick={onShowShop} className="hover:text-brand-orange transition">Shop</button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-brand-orange font-bold mb-6">Company</h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li>
              <button onClick={onShowCareers} className="hover:text-brand-orange transition">Careers</button>
            </li>
            <li>Privacy</li>
            <li>
              <button onClick={onShowPress} className="hover:text-brand-orange transition">Press</button>
            </li>
            <li>
              <button onClick={onShowSustainability} className="hover:text-brand-orange transition">Sustainability</button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-brand-orange font-bold mb-6">Newsletter</h4>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full bg-transparent border-b border-white/20 py-3 text-sm outline-none"
            onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
          />
          <button
            onClick={handleSubscribe}
            className="mt-4 text-[10px] uppercase tracking-widest font-bold text-brand-orange hover:text-white transition"
          >
            Subscribe →
          </button>
        </div>
      </div>
      <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/30 text-sm">
        © 2024 Heirloom Coffee
      </div>

      <AnimatePresence>
        {subscribed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-brand-brown text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50"
          >
            <Leaf size={16} className="text-brand-orange" />
            <span className="text-sm font-medium">Thank you for subscribing to the Heirloom mailing list!</span>
            <button onClick={() => setSubscribed(false)} className="ml-2 text-white/50 hover:text-white transition">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showViewAll, setShowViewAll] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showCareers, setShowCareers] = useState(false);
  const [showPress, setShowPress] = useState(false);
  const [showSustainability, setShowSustainability] = useState(false);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-cream min-h-screen overflow-x-hidden">
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
            <p className="text-white/80 mt-6">Artisan coffee crafted with patience and care.</p>
            <a href="#menu" className="mt-8 inline-block bg-brand-orange text-white px-8 py-4 rounded-full text-xs uppercase font-bold">
              Explore Menu
            </a>
          </motion.div>
        </div>
      </section>

      <section id="menu" className="py-24 bg-brand-cream relative">
        <div className="px-6 md:px-12">
          <div className="flex items-end justify-between mb-12 max-w-7xl mx-auto">
            <div>
              <h2 className="text-5xl md:text-6xl italic font-serif font-black mb-3">Autumnal Favorites</h2>
              <p className="text-brand-brown/60 text-lg">Seasonal coffee and bakery selection crafted with care.</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowViewAll(true)}
                className="hidden md:block bg-brand-brown text-white px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-black transition"
              >
                View All
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="w-10 h-10 rounded-full border border-brand-brown/20 flex items-center justify-center hover:bg-brand-brown hover:text-white transition"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-10 h-10 rounded-full border border-brand-brown/20 flex items-center justify-center hover:bg-brand-brown hover:text-white transition"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {MENU_ITEMS.map((item) => (
              <div key={item.title} style={{ scrollSnapAlign: 'start' }}>
                <Card {...item} />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <button
              onClick={() => setShowViewAll(true)}
              className="bg-brand-brown text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-black transition"
            >
              View All
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showViewAll && <ViewAllModal onClose={() => setShowViewAll(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showStory && <OurStoryModal onClose={() => setShowStory(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showLocations && <LocationsModal onClose={() => setShowLocations(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showShop && <ShopModal onClose={() => setShowShop(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showCareers && <CareersModal onClose={() => setShowCareers(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showPress && <PressModal onClose={() => setShowPress(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showSustainability && <SustainabilityModal onClose={() => setShowSustainability(false)} />}
      </AnimatePresence>

      <Footer
        onShowStory={() => setShowStory(true)}
        onShowLocations={() => setShowLocations(true)}
        onShowShop={() => setShowShop(true)}
        onShowCareers={() => setShowCareers(true)}
        onShowPress={() => setShowPress(true)}
        onShowSustainability={() => setShowSustainability(true)}
      />
    </div>
  );
}