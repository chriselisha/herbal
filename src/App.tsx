/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Our Story', href: '#story' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'How To Use', href: '#howtouse' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-forest/90 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex flex-col justify-center">
            <span className="font-playfair text-gold text-2xl font-bold tracking-wide">Rahi's</span>
            <span className="font-cormorant text-cream-dark text-xs tracking-[0.2em] uppercase">Herbal Products</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-cormorant text-cream/80 hover:text-gold transition-colors duration-300 text-lg tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gold hover:text-gold-light focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-forest border-t border-gold/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-cormorant text-cream/80 hover:text-gold block px-3 py-4 text-xl border-b border-gold/5"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-forest to-forest-light overflow-hidden pt-20">
      {/* Subtle Leaf Pattern Overlay (conceptual via CSS radial gradients) */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, var(--color-leaf) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--color-gold) 0%, transparent 40%)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left pt-12 md:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block border border-gold/50 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="font-cormorant text-gold text-sm tracking-widest uppercase">100% Natural • Handcrafted</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6"
            >
              Nature's Secret to <br/>
              <em className="text-gold italic font-light">Strong & Healthy</em> Hair
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-cream/80 text-lg md:text-xl font-lora max-w-lg mb-10 leading-relaxed"
            >
              Experience the ancient wisdom of Ayurveda. Infused with 15 powerful herbs, our potent blend restores vitality, stops hair fall, and brings back your natural shine.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#benefits" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-forest hover:bg-gold-light transition-colors duration-300 font-cormorant font-bold uppercase tracking-wider text-sm rounded-sm">
                Explore Benefits <span className="ml-2 text-xl">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center md:justify-end mt-12 md:mt-0 pb-12 md:pb-0"
          >
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2rem] border border-gold/30 p-2 shadow-2xl shadow-gold/20">
              <div className="w-full h-full rounded-[1.5rem] bg-forest-light overflow-hidden relative flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1608248593842-80e980cc8e3f?auto=format&fit=crop&q=80&w=800" 
                  alt="Rahi's Herbal Hair Oil Bottle with Ingredients" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section id="story" className="py-24 bg-cream text-forest overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <FadeUp className="order-2 md:order-1 relative">
            <div className="aspect-square md:aspect-[3/4] max-w-[450px] bg-cream-dark mx-auto md:mr-auto rounded-none border-[12px] border-white shadow-2xl relative z-10 overflow-hidden flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800" 
                  alt="Ayurvedic Herbs Preparation" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
            </div>
            {/* Decorative background element */}
            <div className="absolute -z-10 top-12 -left-12 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
          </FadeUp>

          <div className="order-1 md:order-2">
            <FadeUp>
              <h4 className="font-cormorant text-leaf font-bold tracking-widest uppercase mb-4">Our Story</h4>
              <h2 className="text-4xl md:text-5xl font-playfair mb-8 leading-tight">Rooted in Tradition, <br/>Made with Love</h2>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="text-bark text-lg mb-6 leading-relaxed">
                Generations ago, Ayurveda held the secrets to luscious, healthy hair without the use of harsh chemicals. Rahi's Herbal Hair Oil was born from restoring these forgotten rituals, hand-picking herbs from the purest sources.
              </p>
              <p className="text-bark text-lg mb-10 leading-relaxed">
                We believe in the slow, patient maceration of roots, leaves, and flowers inside pure cold-pressed coconut oil. Every drop represents a commitment to nature and the true wellbeing of your hair.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.4}>
              <div className="pl-6 border-l-2 border-gold py-2">
                <p className="font-playfair italic text-2xl text-forest mb-2">
                  "Let your hair experience what true nourishment feels like, exactly as nature intended."
                </p>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: "🌱", title: "Strengthens Hair Roots", desc: "Penetrates deep into the hair follicles to provide essential nutrients, reinforcing strength from the inside out." },
  { icon: "🛡️", title: "Reduces Hair Fall", desc: "Formulated with Bhringraj and Amla to combat thinning and significantly reduce daily hair shedding." },
  { icon: "📈", title: "Promotes Hair Growth", desc: "Stimulates dormant follicles and increases blood circulation in the scalp to encourage new, healthy growth." },
  { icon: "❄️", title: "Controls Dandruff", desc: "Neem and Kalonji work together to purify the scalp, preventing flakiness and soothing irritation." },
  { icon: "✨", title: "Improves Hair Shine", desc: "Seals the hair cuticle with natural oils, bringing back a vibrant, youthful, and mirror-like shine." },
  { icon: "💧", title: "Nourishes Scalp", desc: "Intensely hydrates a dry scalp with cold-pressed coconut and essential oils, ending chronic dryness." }
];

function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-cream-dark text-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <h4 className="font-cormorant text-leaf font-bold tracking-widest uppercase mb-4">Why Rahi's?</h4>
          <h2 className="text-4xl md:text-5xl font-playfair">Complete Hair Transformation</h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-cream p-8 rounded-xl border border-transparent shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:border-t-4 hover:border-t-gold h-full">
                <div className="w-14 h-14 rounded-full bg-leaf/10 flex items-center justify-center text-2xl mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-playfair">{benefit.title}</h3>
                <p className="text-bark leading-relaxed text-sm md:text-base">{benefit.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

const ingredientsList = [
  { icon: "🥥", name: "Coconut Oil", desc: "Deeply conditions and provides a protein-rich base." },
  { icon: "🍏", name: "Amla", desc: "Rich in Vitamin C, prevents premature graying." },
  { icon: "🌺", name: "Hibiscus", desc: "Boosts volume and adds significant luster." },
  { icon: "🌿", name: "Bhringraj", desc: "The 'King of Herbs' for extreme hair growth." },
  { icon: "🌱", name: "Henna Leaves", desc: "Restores the acid-alkaline balance of the scalp." },
  { icon: "🍃", name: "Curry Leaves", desc: "Packed with antioxidants and amino acids." },
  { icon: "🌵", name: "Aloe Vera", desc: "Repairs dead skin cells and acts as a conditioner." },
  { icon: "🌹", name: "Rose Petals", desc: "Soothes the scalp and provides a natural fragrance." },
  { icon: "⚫", name: "Kalonji", desc: "Black seed that fights inflammation and dandruff." },
  { icon: "🌾", name: "Methi Seeds", desc: "Fenugreek restores damaged hair cuticles." },
  { icon: "🌿", name: "Neem", desc: "Powerful anti-bacterial action keeps scalp healthy." },
  { icon: "💊", name: "Vitamin E", desc: "Natural antioxidant that protects from oxidative stress." },
  { icon: "🌰", name: "Bavanchalu", desc: "Traditional seed used to cool and treat the scalp." },
  { icon: "🌾", name: "Vetiver Roots", desc: "Cooling properties that relieve stress and heat." },
  { icon: "🟣", name: "Jatamansi", desc: "Promotes hair growth while calming the mind." }
];

function Ingredients() {
  return (
    <section id="ingredients" className="py-24 bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16 max-w-3xl mx-auto">
          <h4 className="font-cormorant text-gold font-bold tracking-widest uppercase mb-4">Pure Nature</h4>
          <h2 className="text-4xl md:text-5xl font-playfair mb-6">15 Powerful Ingredients,<br/> One Perfect Blend</h2>
          <p className="text-cream/70 font-lora text-lg">No mineral oils, no parabens, no synthetic fragrances. Just raw, honest herbs soaked in pure coconut oil.</p>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {ingredientsList.map((ing, i) => (
            <FadeUp key={i} delay={(i % 5) * 0.1}>
              <div className="bg-forest-light border border-gold/20 p-5 p-6 h-full flex flex-col items-center text-center hover:border-gold/60 transition-colors duration-300 rounded-lg group">
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{ing.icon}</span>
                <h3 className="font-playfair text-gold text-lg mb-2">{ing.name}</h3>
                <p className="text-cream/60 text-xs font-lora leading-relaxed">{ing.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { num: 1, title: "Warm the Oil", desc: "Pour a small amount in a bowl and slightly warm it. This helps active ingredients penetrate faster." },
  { num: 2, title: "Massage into Scalp", desc: "Use your fingertips to gently massage the oil into your roots for 10-15 minutes in circular motions." },
  { num: 3, title: "Let It Work", desc: "Leave it on for at least 1-2 hours. For deeper conditioning, leave it perfectly overnight." },
  { num: 4, title: "Wash & Reveal", desc: "Wash off with a mild, preferably herbal, shampoo. Enjoy your soft, nourished hair." },
];

function HowToUse() {
  return (
    <section id="howtouse" className="py-24 bg-cream text-forest relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <h4 className="font-cormorant text-leaf font-bold tracking-widest uppercase mb-4">The Ritual</h4>
          <h2 className="text-4xl md:text-5xl font-playfair">How to Apply</h2>
        </FadeUp>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gold via-leaf to-forest-light z-0 opacity-30 cursor-default"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <FadeUp key={i} delay={i * 0.2}>
                <div className={`relative z-10 flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} md:mb-16`}>
                  
                  {/* Content Box */}
                  <div className="w-full md:w-1/2 px-4 md:px-12 text-center md:text-left mb-6 md:mb-0">
                    <div className={`${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                       <h3 className="text-2xl font-playfair font-bold text-forest mb-3 flex items-center justify-center md:justify-start gap-2">
                           <span className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold text-forest text-sm font-bold shrink-0">{step.num}</span>
                           {step.title}
                       </h3>
                       <p className="text-bark leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-cream border-4 border-gold rounded-full items-center justify-center text-forest font-playfair font-bold text-xl shadow-lg">
                    {step.num}
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-full md:w-1/2"></div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-forest-light text-cream-dark pt-16 pb-8 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="font-playfair text-gold text-2xl font-bold tracking-wide">Rahi's</span>
              <span className="font-cormorant text-cream-dark text-xs tracking-[0.2em] uppercase">Herbal Products</span>
            </div>
            <p className="font-lora text-cream/60 text-sm leading-relaxed mb-6">
              Embracing Ayurvedic principles to bring you the purest, most effective hair care straight from nature's lap.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-gold font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 font-cormorant text-lg">
              <li><a href="#story" className="text-cream/70 hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#benefits" className="text-cream/70 hover:text-gold transition-colors">Benefits</a></li>
              <li><a href="#ingredients" className="text-cream/70 hover:text-gold transition-colors">Ingredients</a></li>
              <li><a href="#howtouse" className="text-cream/70 hover:text-gold transition-colors">How to Use</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-gold font-bold mb-6 text-lg">Hair Care</h4>
            <ul className="space-y-3 font-cormorant text-lg">
              <li><a href="#" className="text-cream/70 hover:text-gold transition-colors">Hair Fall Treatment</a></li>
              <li><a href="#" className="text-cream/70 hover:text-gold transition-colors">Dandruff Control</a></li>
              <li><a href="#" className="text-cream/70 hover:text-gold transition-colors">Scalp Massage Guide</a></li>
              <li><a href="#" className="text-cream/70 hover:text-gold transition-colors">Ayurvedic Routine</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-gold font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-3 font-cormorant text-lg">
              <li className="text-cream/70">Phone: <a href="tel:+919182494143" className="hover:text-gold transition-colors">+91 91824 94143</a></li>
              <li className="text-cream/70">Email: <a href="mailto:hello@rahis.com" className="hover:text-gold transition-colors">hello@rahis.com</a></li>
              <li className="text-cream/70 mt-4 italic">Available Mon-Sat: 9am - 6pm (IST)</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-lora text-cream/50">
          <p>&copy; 2026 Rahi's Herbal Products. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-lora selection:bg-gold/30">
      <Navbar />
      <Hero />
      <OurStory />
      <Benefits />
      <Ingredients />
      <HowToUse />
      <Footer />
    </div>
  );
}

