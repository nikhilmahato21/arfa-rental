import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Car, Users, Award } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function About() {
  const { about, brand } = siteContent

  return (
    <section id="about" className="py-24 bg-white overflow-hidden" aria-label="About us">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main dark card */}
            <div className="bg-steel-950 p-10 relative z-10">
              <div className="absolute top-0 right-0 w-24 h-24 diagonal-stripe opacity-40" />
              <p className="section-label text-amber-500 mb-4">Our Vehicle</p>
              <h3 className="font-display text-5xl text-white leading-none tracking-wide mb-2">
                {about.highlight}
              </h3>
              <p className="font-heading font-semibold text-sm tracking-widest text-amber-400 uppercase mb-8">
                {about.highlightSub}
              </p>

              {/* Vehicle specs grid */}
              <div className="grid grid-cols-2 gap-px bg-steel-800">
                {[
                  { label: 'Seating', value: '7 Seats' },
                  { label: 'AC', value: 'Full AC' },
                  { label: 'Fuel', value: 'Petrol' },
                  { label: 'Model', value: 'RXT' },
                ].map(spec => (
                  <div key={spec.label} className="bg-steel-900 p-4">
                    <div className="font-heading font-bold text-lg text-amber-400">{spec.value}</div>
                    <div className="font-heading text-[10px] tracking-widest text-steel-500 uppercase">{spec.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offset amber block */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-amber-500 -z-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-5xl text-steel-950 leading-none">{brand.established}</div>
                <div className="font-heading text-[10px] tracking-[0.3em] text-steel-950/70 uppercase">Since</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-3">Who We Are</p>
            <h2 className="section-title mb-4 text-5xl md:text-6xl">
              {about.headline}
            </h2>
            <div className="divider-amber mb-8" />

            <p className="font-body text-steel-600 leading-relaxed mb-8">
              {about.story}
            </p>

            {/* Points */}
            <ul className="space-y-4">
              {about.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-body text-sm text-steel-700 leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Icon stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-steel-100">
              {[
                { icon: Car, label: 'Premium Fleet', sub: 'Renault Triber RXT' },
                { icon: Users, label: 'Pro Drivers', sub: 'Police Verified' },
                { icon: Award, label: 'Best Service', sub: '5★ Rated' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="text-center">
                  <div className="w-12 h-12 bg-steel-50 flex items-center justify-center mx-auto mb-2 border border-steel-200">
                    <Icon size={20} className="text-amber-600" strokeWidth={2} />
                  </div>
                  <div className="font-heading font-bold text-xs tracking-wider text-steel-900 uppercase">{label}</div>
                  <div className="font-body text-[10px] text-steel-400 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
