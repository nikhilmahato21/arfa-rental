import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { siteContent } from '../data/siteContent'

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="border-b border-steel-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group
                   focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-bold text-base tracking-wide text-steel-900 group-hover:text-amber-600 transition-colors">
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 mt-0.5"
        >
          <ChevronDown
            size={18}
            className={`transition-colors duration-200 ${isOpen ? 'text-amber-500' : 'text-steel-400 group-hover:text-steel-700'}`}
            strokeWidth={2.5}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-steel-600 leading-relaxed pb-6 pr-8">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const { brand } = siteContent

  return (
    <section id="faq" className="py-24 bg-steel-50" aria-label="Frequently asked questions">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: heading */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-3"
            >
              Questions & Answers
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title mb-4 text-5xl md:text-7xl"
            >
              GOT<br />
              <span className="text-stroke">QUESTIONS?</span>
            </motion.h2>
            <div className="divider-amber mb-8" />
            <p className="font-body text-steel-500 leading-relaxed mb-8">
              Here are the most common questions from our customers. Still have doubts? Just call us — we're happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${brand.phone}`}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Call {brand.phone}
              </a>
            </div>

            {/* Industrial box */}
            <div className="mt-10 bg-steel-950 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 diagonal-stripe opacity-40" />
              <p className="font-heading font-semibold text-xs tracking-[0.35em] text-amber-500 uppercase mb-2">Location</p>
              <p className="font-display text-4xl text-white leading-none tracking-wide">MOULALI</p>
              <p className="font-display text-4xl text-amber-400 leading-none tracking-wide">SEALDAH</p>
              <p className="font-heading text-xs tracking-widest text-steel-500 uppercase mt-2">Kolkata, West Bengal</p>
            </div>
          </div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-steel-200 p-2"
          >
            {siteContent.faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
