'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShieldCheck } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-compliance-blue rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className={`font-display font-bold text-sm sm:text-base transition-colors ${
              scrolled ? 'text-navy' : 'text-navy'
            }`}>
              Compliance-Ready SOP Toolkit
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map?.((link: any) => (
              <button
                key={link?.href ?? ''}
                onClick={() => scrollTo(link?.href ?? '')}
                className={`text-sm font-medium transition-colors hover:text-compliance-blue ${
                  scrolled ? 'text-navy-600' : 'text-navy-600'
                }`}
              >
                {link?.label ?? ''}
              </button>
            )) ?? []}
            <button
              onClick={() => scrollTo('#pricing')}
              className="bg-compliance-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-compliance-blue-600 transition-all hover:shadow-lg hover:shadow-compliance-blue/25"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-navy" /> : <Menu className="w-5 h-5 text-navy" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks?.map?.((link: any) => (
                <button
                  key={link?.href ?? ''}
                  onClick={() => scrollTo(link?.href ?? '')}
                  className="block w-full text-left px-4 py-3 text-navy-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {link?.label ?? ''}
                </button>
              )) ?? []}
              <button
                onClick={() => scrollTo('#pricing')}
                className="block w-full bg-compliance-blue text-white px-4 py-3 rounded-lg text-center font-semibold hover:bg-compliance-blue-600 transition-colors"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
