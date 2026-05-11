import React from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function FloatingContactButtons() {
  const { contact } = siteContent

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`tel:${contact.phone}`}
        className="group flex items-center justify-center gap-3 rounded-full bg-amber-500 px-4 py-3 text-steel-950 shadow-xl shadow-amber-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        aria-label={`Call ${contact.phone}`}
      >
        <Phone size={18} strokeWidth={2.5} />
        <span className="hidden sm:inline font-heading font-bold text-xs tracking-widest uppercase">
          Call Now
        </span>
      </a>
      <a
        href={`https://wa.me/${contact.whatsapp}?text=Hi, I want to book a car rental`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-3 rounded-full bg-green-500 px-4 py-3 text-white shadow-xl shadow-green-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label={`WhatsApp ${contact.whatsappDisplay}`}
      >
        <MessageCircle size={18} strokeWidth={2.5} />
        <span className="hidden sm:inline font-heading font-bold text-xs tracking-widest uppercase">
          WhatsApp {contact.whatsappDisplay}
        </span>
      </a>
    </div>
  )
}
