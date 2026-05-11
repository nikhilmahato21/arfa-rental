import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function CTAStrip() {
  const { brand } = siteContent

  return (
    <section className="relative overflow-hidden bg-steel-950 py-16 animate-pulse-glow" aria-label="Book now">
      {/* Background effects */}
      <div className="absolute inset-0 grid-texture opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-amber-500" />
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-amber-500" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-semibold text-xs tracking-[0.35em] text-amber-500 uppercase mb-2"
            >
              Ready to Roll?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl text-white leading-none tracking-wide"
            >
              BOOK YOUR RIDE <span className="text-amber-400">TODAY</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={`tel:${brand.phone}`}
              className="flex items-center justify-center gap-3 bg-amber-500 text-steel-950 font-heading font-bold
                         tracking-widest uppercase px-10 py-5 text-sm
                         transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-amber-500/50 hover:bg-amber-400
                         focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-steel-950"
            >
              <Phone size={18} strokeWidth={2.5} />
              <span className="text-xl font-display tracking-widest">{brand.phone}</span>
            </a>
            <a
              href={`https://wa.me/${brand.whatsapp}?text=Hi, I want to book a car`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-white font-heading font-bold
                         tracking-widest uppercase px-10 py-5 text-sm
                         transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-green-500/40 hover:bg-green-400
                         focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-steel-950"
            >
              <MessageCircle size={18} strokeWidth={2.5} />
              WhatsApp {brand.whatsappDisplay}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
