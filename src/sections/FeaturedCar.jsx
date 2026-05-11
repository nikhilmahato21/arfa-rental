import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Zap, Wind, Star, ChevronRight } from 'lucide-react'
import { siteContent } from '../data/siteContent'

const specs = [
  { icon: Users, label: 'Seating',   value: '7 Seats' },
  { icon: Wind,  label: 'Climate',   value: 'Full AC' },
  { icon: Zap,   label: 'Engine',    value: '1.0L Turbo' },
  { icon: Star,  label: 'Variant',   value: 'RXT — 2nd Top' },
]

const highlights = [
  'Spacious 7-seater with flat-fold seats for extra boot space',
  'Powerful 1.0L turbocharged petrol engine',
  'Dual-zone AC with rear vents for all passengers',
  'Android Auto & Apple CarPlay connectivity',
  'Driver-side airbag, ABS & rear parking sensors',
]

export default function FeaturedCar() {
  const { brand } = siteContent
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="our-car"
      className="relative bg-steel-950 overflow-hidden"
      aria-label="Our featured car"
    >
      {/* Background grid texture */}
      <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />

      {/* Diagonal amber accent — top right */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <div className="absolute inset-0 diagonal-stripe opacity-40" />
      </div>

      {/* Amber left bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-24">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-semibold text-xs tracking-[0.35em] text-amber-500 uppercase mb-3"
        >
          Our Fleet
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="font-display text-5xl md:text-7xl text-white leading-none tracking-wide mb-2"
        >
          THE&nbsp;
          <span className="text-amber-400">CAR</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="w-16 h-1 bg-amber-500 origin-left mb-14"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-amber-500/10 blur-2xl rounded-full pointer-events-none" />

            {/* Image frame */}
            <div className="relative border-2 border-amber-500/30 overflow-hidden bg-steel-900">
              <img
                src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1778474546/new-triber-1_zhujmu.webp"
                onError={() => setImgError(true)}
                alt="Renault Triber RXT — ARFA Car Rental"
                className="w-full object-cover"
                style={{ aspectRatio: '16/9' }}
              />

              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500" />
            </div>

            {/* Badge under image */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 h-px bg-steel-800" />
              <span className="font-heading font-semibold text-[10px] tracking-[0.35em] text-steel-500 uppercase whitespace-nowrap">
                Well-maintained · Professionally driven
              </span>
              <div className="flex-1 h-px bg-steel-800" />
            </div>
          </motion.div>

          {/* RIGHT — details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {/* Name block */}
            <div className="mb-8">
              <div className="font-display text-4xl sm:text-5xl text-amber-400 leading-none tracking-widest">
                RENAULT
              </div>
              <div className="font-display text-4xl sm:text-5xl text-white leading-none tracking-widest">
                TRIBER RXT
              </div>
              <div className="font-heading font-semibold text-xs tracking-[0.3em] text-steel-400 uppercase mt-2">
                2nd Top Model · Since {brand.established}
              </div>
            </div>

            {/* Spec pills */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {specs.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3"
                >
                  <Icon size={16} className="text-amber-500 flex-shrink-0" strokeWidth={2.5} />
                  <div>
                    <div className="font-heading font-semibold text-[9px] tracking-widest text-steel-500 uppercase">
                      {label}
                    </div>
                    <div className="font-heading font-bold text-sm text-white tracking-wide leading-tight">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ChevronRight
                    size={14}
                    className="text-amber-500 mt-0.5 flex-shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="font-body text-steel-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${brand.phone}`}
                className="btn-primary inline-flex items-center gap-2"
              >
                Book This Car
              </a>
              <a
                href={`https://wa.me/${brand.whatsapp}?text=Hi, I'd like to book the Renault Triber RXT`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-secondary border-white/30 text-white hover:text-amber-400 hover:border-amber-500"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
