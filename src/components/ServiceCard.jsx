import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Route, Plane, Calendar, ArrowRight, Check } from 'lucide-react'
import { siteContent } from '../data/siteContent'

const iconMap = { MapPin, Route, Plane, Calendar }

export default function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false)
  const Icon = iconMap[service.icon] || MapPin
  const { brand } = siteContent

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="bg-white border border-steel-200 overflow-hidden group cursor-default
                 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-steel-900/10 hover:border-amber-400"
    >
      {/* Top accent */}
      <div className="h-1 bg-steel-100 group-hover:bg-amber-500 transition-colors duration-300" />

      <div className="p-8">
        {/* Icon */}
        <div className="flex items-start justify-between mb-6">
          <div className={`w-14 h-14 flex items-center justify-center transition-colors duration-300 ${
            hovered ? 'bg-amber-500' : 'bg-steel-950'
          }`}>
            <Icon size={24} className={hovered ? 'text-steel-950' : 'text-amber-400'} strokeWidth={2} />
          </div>
          <motion.div
            animate={{ x: hovered ? 0 : 8, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={18} className="text-amber-500 mt-4" />
          </motion.div>
        </div>

        {/* Text */}
        <p className="font-heading font-semibold text-[10px] tracking-[0.3em] text-amber-600 uppercase mb-1">
          {service.subtitle}
        </p>
        <h3 className="font-display text-3xl text-steel-950 leading-none tracking-wide mb-3">
          {service.title}
        </h3>
        <p className="font-body text-sm text-steel-500 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map(f => (
            <li key={f} className="flex items-center gap-2">
              <Check size={12} className="text-amber-500 flex-shrink-0" strokeWidth={3} />
              <span className="font-heading text-xs tracking-wider text-steel-600 uppercase">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="pt-4 border-t border-steel-100 flex justify-end">
          <motion.a
            href={`tel:${brand.phone}`}
            className="font-heading font-bold text-xs tracking-widest text-amber-600 uppercase hover:text-amber-500 transition-colors flex items-center gap-1"
            whileHover={{ x: 3 }}
          >
            Book <ArrowRight size={12} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
