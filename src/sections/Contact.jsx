import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Mail, Clock, Send, Check } from 'lucide-react'
import { siteContent } from '../data/siteContent'

function FloatingInput({ label, id, type = 'text', value, onChange, error, required, as: Tag = 'input', rows }) {
  const [focused, setFocused] = useState(false)
  const isUp = focused || value

  const classes = `w-full bg-steel-50 border-2 px-4 pt-6 pb-2 font-body text-sm text-steel-900
                   transition-colors duration-200 focus:outline-none resize-none
                   ${error ? 'border-red-400 focus:border-red-500' : isUp ? 'border-amber-500' : 'border-steel-200 focus:border-amber-500'}`

  return (
    <div className="relative">
      <Tag
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={rows}
        className={classes}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 pointer-events-none font-heading font-semibold tracking-wider uppercase transition-all duration-200
                    ${isUp
          ? 'top-2 text-[9px] ' + (error ? 'text-red-500' : 'text-amber-600')
          : 'top-4 text-xs text-steel-400'}`}
      >
        {label}{required && ' *'}
      </label>
      {error && (
        <p id={`${id}-error`} className="text-[10px] text-red-500 font-heading tracking-wider uppercase mt-1">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact({ onToast }) {
  const { contact } = siteContent
  const [form, setForm] = useState({ name: '', phone: '', trip: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^[0-9]{10}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit number'
    if (!form.message.trim()) e.message = 'Please describe your trip'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return

    setLoading(true)
    await new Promise(r => setTimeout(r, 1800)) // Simulate API
    setLoading(false)
    setSubmitted(true)
    onToast('Booking request sent! We\'ll call you back shortly.', 'success')
    setForm({ name: '', phone: '', trip: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactItems = [
    { icon: Phone, label: 'Phone / Call', value: contact.phone, href: `tel:${contact.phone}` },
    { icon: MessageCircle, label: 'WhatsApp', value: contact.whatsappDisplay, href: `https://wa.me/${contact.whatsapp}?text=Hi, I want to book a car` },
    { icon: MapPin, label: 'Location', value: `${contact.address}, ${contact.city}`, href: contact.mapEmbed },
    { icon: Clock, label: 'Working Hours', value: contact.hours, href: null },
  ]

  return (
    <section id="contact" className="py-24 bg-white" aria-label="Contact us">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-4"
          >
            BOOK YOUR<br />
            <span className="text-stroke">RIDE NOW</span>
          </motion.h2>
          <div className="divider-amber" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Phone - BIG */}
            <div className="bg-steel-950 p-8 mb-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 diagonal-stripe opacity-30" />
              <p className="font-heading font-semibold text-xs tracking-[0.35em] text-amber-500 uppercase mb-2">Call or WhatsApp</p>
              <a
                href={`tel:${contact.phone}`}
                className="block font-display text-6xl text-white hover:text-amber-400 transition-colors duration-200 leading-none tracking-wide"
              >
                {contact.phone}
              </a>
            </div>

            {/* Location - BIG */}
            <div className="bg-amber-500 p-8 mb-6">
              <p className="font-heading font-semibold text-xs tracking-[0.35em] text-steel-950/60 uppercase mb-2">We're Located At</p>
              <div className="flex items-start gap-3">
                <MapPin size={28} className="text-steel-950 mt-1 flex-shrink-0" strokeWidth={2.5} />
                <div>
                  <p className="font-display text-5xl text-steel-950 leading-none tracking-wide">MOULALI</p>
                  <p className="font-display text-4xl text-steel-950/60 leading-none tracking-wide">( SEALDAH )</p>
                  <p className="font-heading font-semibold text-xs tracking-widest text-steel-950/70 uppercase mt-2">
                    Kolkata, West Bengal — 700014
                  </p>
                </div>
              </div>
            </div>

            {/* Other contact items */}
            <div className="space-y-3">
              {contactItems.slice(2).map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 border border-steel-200 hover:border-amber-400 transition-colors group">
                  <div className="w-10 h-10 bg-steel-50 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                    <Icon size={16} className="text-steel-600 group-hover:text-steel-950 transition-colors" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-[10px] tracking-widest text-steel-400 uppercase">{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                         className="font-heading font-bold text-sm text-steel-900 hover:text-amber-600 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="font-heading font-bold text-sm text-steel-900">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp big button */}
            <a
              href={`https://wa.me/${contact.whatsapp}?text=Hi, I want to book a car rental`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full mt-4 bg-green-500 text-white
                         font-heading font-bold tracking-widest uppercase py-5 text-sm
                         transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-green-500/30 hover:bg-green-400"
            >
              <MessageCircle size={20} strokeWidth={2.5} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-steel-50 border border-steel-200 p-8">
              <h3 className="font-display text-3xl text-steel-950 tracking-wide mb-2">REQUEST A QUOTE</h3>
              <p className="font-body text-xs text-steel-500 mb-6">Fill in the form below and we'll call you back.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-4"
                >
                  <div className="w-16 h-16 bg-green-500 flex items-center justify-center">
                    <Check size={32} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="font-display text-3xl text-steel-950 tracking-wide text-center">REQUEST SENT!</p>
                  <p className="font-body text-sm text-steel-500 text-center">We'll call you back shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Booking enquiry form">
                  <FloatingInput
                    id="name" label="Your Name" value={form.name} required
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    error={errors.name}
                  />
                  <FloatingInput
                    id="phone" label="Phone Number" type="tel" value={form.phone} required
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    error={errors.phone}
                  />
                  <FloatingInput
                    id="trip" label="Trip Type (e.g. Airport, Digha, Local)"
                    value={form.trip}
                    onChange={e => setForm({ ...form, trip: e.target.value })}
                    error={errors.trip}
                  />
                  <FloatingInput
                    id="message" label="Trip Details" as="textarea" rows={4} required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    error={errors.message}
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 bg-steel-950 text-white font-heading font-bold tracking-widest uppercase py-5 text-sm
                               transition-all duration-200 hover:-translate-y-0.5 hover:bg-steel-800 hover:shadow-xl
                               disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0
                               focus:outline-none focus:ring-2 focus:ring-steel-950 focus:ring-offset-2"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} strokeWidth={2.5} />
                        Send Enquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
