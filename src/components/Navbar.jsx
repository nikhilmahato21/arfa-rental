import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { siteContent } from '../data/siteContent'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-steel-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="focus:outline-none group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-steel-950 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-200">
                  <span className="font-display text-amber-400 text-xl group-hover:text-steel-950 transition-colors duration-200">A</span>
                </div>
                <div>
                  <div className="font-display text-2xl text-steel-950 leading-none tracking-widest">
                    {siteContent.brand.name}
                  </div>
                  <div className="font-heading text-[9px] tracking-[0.35em] text-steel-500 uppercase leading-none">
                    {siteContent.brand.tagline}
                  </div>
                </div>
              </div>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`font-heading font-semibold text-sm tracking-widest uppercase transition-all duration-200 relative group ${
                    active === link.href.replace('#', '')
                      ? 'text-amber-600'
                      : 'text-steel-700 hover:text-steel-950'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                    active === link.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${siteContent.brand.phone}`}
                className="flex items-center gap-2 font-heading font-bold text-sm tracking-widest bg-amber-500 text-steel-950 px-5 py-2.5 hover:bg-amber-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/30"
                aria-label="Call us"
              >
                <Phone size={14} strokeWidth={2.5} />
                {siteContent.brand.phone}
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-steel-950 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b-2 border-amber-500 shadow-2xl md:hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left font-heading font-bold tracking-widest uppercase text-steel-900 py-3 px-4 hover:bg-steel-50 hover:text-amber-600 transition-colors border-b border-steel-100 last:border-0"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-4">
                <a
                  href={`tel:${siteContent.brand.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-amber-500 text-steel-950 font-heading font-bold tracking-widest uppercase py-3 px-4"
                >
                  <Phone size={16} />
                  Call: {siteContent.brand.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
