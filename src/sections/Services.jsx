import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import { siteContent } from '../data/siteContent'

export default function Services() {
  const { brand } = siteContent

  return (
    <section id="services" className="py-24 bg-steel-50" aria-label="Our services">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-4"
          >
            OUR<br />
            <span className="text-stroke">SERVICES</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="divider-amber origin-left"
          />
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="font-body text-steel-500 mb-4">
            Not sure which package suits you? Just call us — we'll sort it out.
          </p>
          <a
            href={`tel:${brand.phone}`}
            className="inline-flex items-center gap-2 btn-primary"
          >
            Call {brand.phone}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
