'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Award, FileCheck } from 'lucide-react'

const trustBadges = [
  { icon: ShieldCheck, label: 'HIPAA-Ready' },
  { icon: Award, label: 'SOC 2 Aligned' },
  { icon: FileCheck, label: 'Audit-Tested' },
]

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-navy via-navy-700 to-navy-800">
      {/* Background image with parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.abacus.ai/images/8f0051fd-90cd-490b-9e48-861e614c04af.png"
          alt="Professional compliance documentation and audit preparation workspace"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy-700/85 to-compliance-blue-700/60" />
      </div>

      {/* Geometric decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 border border-compliance-blue/20 rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-trust-green/20 rounded-lg rotate-45 opacity-20" />
      <div className="absolute top-40 left-1/4 w-4 h-4 bg-compliance-blue/40 rounded-full" />
      <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-trust-green/40 rounded-full" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-compliance-blue/20 border border-compliance-blue/30 rounded-full text-compliance-blue-200 text-xs sm:text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Trusted by 500+ regulated businesses
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Survive Any Audit{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-compliance-blue-300 to-trust-green-300">
              with Confidence
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
          >
            Professional SOP templates for HIPAA, SOC 2, and legal compliance — built by compliance experts, ready in minutes
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button
              onClick={() => scrollTo('#pricing')}
              className="px-8 py-4 bg-compliance-blue text-white font-semibold rounded-lg text-base hover:bg-compliance-blue-600 transition-all shadow-lg shadow-compliance-blue/30 hover:shadow-xl hover:shadow-compliance-blue/40 hover:-translate-y-0.5"
            >
              Download Toolkit
            </button>
            <button
              onClick={() => scrollTo('#features')}
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg text-base border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5"
            >
              See What&apos;s Inside
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-4 sm:gap-6"
          >
            {trustBadges?.map?.((badge: any, idx: number) => {
              const Icon = badge?.icon
              return (
                <div
                  key={badge?.label ?? idx}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
                >
                  {Icon && <Icon className="w-4 h-4 text-trust-green" />}
                  <span className="text-sm text-gray-200 font-medium">{badge?.label ?? ''}</span>
                </div>
              )
            }) ?? []}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
