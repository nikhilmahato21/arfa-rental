import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import FeaturedCar from './sections/FeaturedCar'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import CTAStrip from './components/CTAStrip'
import Footer from './components/Footer'
import FloatingContactButtons from './components/FloatingContactButtons'
import Toast from './components/Toast'

export default function App() {
  const [toast, setToast] = useState(null)

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 4000)
  }

  return (
    <div className="min-h-screen bg-steel-50">
      <Navbar />
      <Hero />
      <FeaturedCar />
      <Services />
      
      <About />
      <CTAStrip />
      <Testimonials />
      <FAQ />
      <Contact onToast={showToast} />
      <Footer />
      <FloatingContactButtons />
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
    </div>
  )
}
