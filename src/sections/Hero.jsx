import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, ChevronDown, Shield, Star, Clock } from 'lucide-react'
import { siteContent } from '../data/siteContent'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { hero, brand, stats } = siteContent

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-steel-950"
      aria-label="Hero section"
    >
      {/* Background grid texture */}
      <div className="absolute inset-0 grid-texture opacity-30" />

      {/* Diagonal amber accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="absolute inset-0 diagonal-stripe opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-l from-amber-500/10 to-transparent" />
      </div>

      {/* Large faded background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[20vw] text-white/[0.03] leading-none tracking-wider whitespace-nowrap">
          ARFA
        </span>
      </div>

      {/* Amber vertical accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500" />

      {/* Top location bar */}
      <div className="absolute top-20 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-amber-400"
          >
            <MapPin size={14} strokeWidth={2.5} />
            <span className="font-heading font-semibold text-xs tracking-[0.3em] uppercase">
              {brand.location}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-heading font-semibold text-xs tracking-[0.25em] text-amber-400 uppercase">
                {hero.badge}
              </span>
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-heading font-semibold text-sm tracking-[0.4em] text-amber-500 uppercase mb-2"
            >
              {hero.subheadline}
            </motion.p>

            {/* Main headline */}
            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-display text-7xl sm:text-8xl lg:text-9xl text-white leading-none tracking-wide mb-4"
            >
              {hero.headline.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-amber-400' : 'text-white'}>
                  {word}{' '}
                </span>
              ))}
            </motion.h1>

            {/* Vehicle name - BIG */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-6"
            >
              <div className="font-display text-3xl sm:text-4xl text-amber-500 leading-none tracking-widest">
                {hero.vehicle}
              </div>
              <div className="font-heading font-semibold text-sm tracking-[0.3em] text-steel-400 uppercase mt-1">
                {hero.model}
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-body text-steel-300 text-base leading-relaxed mb-8 max-w-md"
            >
              {hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4"
            >
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-3 bg-amber-500 text-steel-950 font-heading font-bold tracking-widest uppercase px-8 py-4 text-sm
                           transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-amber-500/40 hover:bg-amber-400
                           active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-steel-950"
              >
                <Phone size={16} strokeWidth={2.5} />
                {hero.ctaPrimary}
              </a>
              <a
                href={`https://wa.me/${brand.whatsapp}?text=Hi, I'd like to book a car rental`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-transparent text-white font-heading font-bold tracking-widest uppercase px-8 py-4 text-sm
                           border-2 border-white/30 transition-all duration-200 hover:-translate-y-0.5 hover:border-green-400 hover:text-green-400
                           active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-steel-950"
              >
                <MessageCircle size={16} strokeWidth={2.5} />
                {hero.ctaSecondary} {brand.whatsappDisplay}
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-steel-800"
            >
              {[
                { icon: Shield, text: 'Verified Driver' },
                { icon: Star, text: 'Top Rated' },
                { icon: Clock, text: '24/7 Available' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={14} className="text-amber-500" strokeWidth={2.5} />
                  <span className="font-heading font-semibold text-xs tracking-widest text-steel-400 uppercase">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats + Location card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            {/* Phone number - MASSIVE */}
            <div className="bg-white/5 border border-white/10 p-8 mb-4 backdrop-blur-sm">
              <p className="font-heading font-semibold text-xs tracking-[0.35em] text-amber-500 uppercase mb-2">
                Book Instantly
              </p>
              <a
                href={`tel:${brand.phone}`}
                className="block font-display text-5xl xl:text-6xl text-white hover:text-amber-400 transition-colors duration-200 leading-none tracking-wide"
              >
                {brand.phone}
              </a>
              <p className="font-heading text-xs tracking-widest text-steel-500 uppercase mt-2">
                Call or WhatsApp anytime
              </p>
            </div>

            {/* Location card - BIG */}
            <div className="bg-amber-500 p-8">
              <p className="font-heading font-semibold text-xs tracking-[0.35em] text-steel-950/70 uppercase mb-2">
                Our Location
              </p>
              <div className="flex items-start gap-3">
                <MapPin size={24} className="text-steel-950 mt-1 flex-shrink-0" strokeWidth={2.5} />
                <div>
                  <p className="font-display text-4xl xl:text-5xl text-steel-950 leading-none tracking-wide">
                    MOULALI
                  </p>
                  <p className="font-display text-4xl xl:text-5xl text-steel-950/60 leading-none tracking-wide">
                    SEALDAH
                  </p>
                  <p className="font-heading font-semibold text-xs tracking-widest text-steel-950/70 uppercase mt-2">
                    Kolkata, West Bengal
                  </p>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-px mt-px bg-steel-800">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-steel-900 p-4 text-center">
                  <div className="font-display text-2xl text-amber-400 leading-none">{stat.value}</div>
                  <div className="font-heading text-[10px] tracking-widest text-steel-500 uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 focus:outline-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        aria-label="Scroll to services"
      >
        <span className="font-heading text-[10px] tracking-[0.3em] text-steel-500 uppercase">Explore</span>
        <ChevronDown size={18} className="text-amber-500" />
      </motion.button>
    </section>
  )
}
