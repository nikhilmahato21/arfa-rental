import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { siteContent } from '../data/siteContent'

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-amber-500 fill-amber-500" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { testimonials } = siteContent

  return (
    <section id="testimonials" className="py-24 bg-steel-950 overflow-hidden" aria-label="Customer reviews">
      <div className="absolute w-full h-full grid-texture opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-semibold text-xs tracking-[0.35em] text-amber-500 uppercase mb-3"
            >
              What Customers Say
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-6xl md:text-7xl text-white leading-none tracking-wide"
            >
              REAL<br />
              <span className="text-amber-400">REVIEWS</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4"
          >
            <div className="text-center">
              <div className="font-display text-4xl text-amber-400">5.0</div>
              <StarRating count={5} />
              <div className="font-heading text-[10px] tracking-widest text-steel-400 uppercase mt-1">Average Rating</div>
            </div>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/5 border border-white/10 p-6 hover:border-amber-500/50 hover:-translate-y-1
                         transition-all duration-300 group relative"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-amber-500/20 absolute top-4 right-4 group-hover:text-amber-500/40 transition-colors" />

              <StarRating count={t.rating} />

              <p className="font-body text-sm text-steel-300 leading-relaxed my-4 italic">
                "{t.text}"
              </p>

              <div className="pt-4 border-t border-white/10">
                <div className="font-heading font-bold text-sm tracking-wider text-white uppercase">{t.name}</div>
                <div className="font-heading text-[10px] tracking-widest text-steel-500 uppercase">{t.location}</div>
                <div className="mt-2 inline-block bg-amber-500/20 px-2 py-0.5">
                  <span className="font-heading text-[10px] tracking-widest text-amber-400 uppercase">{t.trip}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
