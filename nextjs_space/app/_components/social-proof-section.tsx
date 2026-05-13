'use client'

import Image from 'next/image'
import { ScrollAnimate } from './scroll-animate'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Passed our HIPAA audit on first try using these templates. The auditor was impressed with our documentation quality.',
    author: 'Sarah Chen',
    role: 'Compliance Director, MedTech Solutions',
    stars: 5,
  },
  {
    quote: 'Reduced compliance documentation time from 6 months to 2 weeks. This toolkit paid for itself on day one.',
    author: 'Marcus Johnson',
    role: 'VP of Operations, FinSecure Capital',
    stars: 5,
  },
  {
    quote: 'Our SOC 2 Type II certification would have been impossible without this. The templates covered every gap we had.',
    author: 'Emily Rodriguez',
    role: 'CTO, DataVault Legal Tech',
    stars: 5,
  },
]

export function SocialProofSection() {
  return (
    <section className="py-20 sm:py-28 bg-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-compliance-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-trust-green/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Image */}
          <ScrollAnimate direction="left" className="lg:col-span-2">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-700">
              <Image
                src="https://cdn.abacus.ai/images/d4ba0d96-1db6-4913-942a-bf23bc977fbc.png"
                alt="Successful audit results and compliance achievements from businesses using the toolkit"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>
          </ScrollAnimate>

          {/* Testimonials */}
          <div className="lg:col-span-3 space-y-6">
            <ScrollAnimate>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-trust-green/20 border border-trust-green/30 rounded-full text-trust-green-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Star className="w-3.5 h-3.5 fill-current" />
                Results That Speak
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-8">
                Trusted by Compliance Teams{' '}
                <span className="text-trust-green-300">Across Industries</span>
              </h2>
            </ScrollAnimate>

            {testimonials?.map?.((t: any, idx: number) => (
              <ScrollAnimate key={idx} delay={idx * 0.15} direction="right">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-all">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t?.stars ?? 5 })?.map((_, i: number) => (
                      <Star key={i} className="w-4 h-4 text-warning-amber fill-current" />
                    ))}
                  </div>
                  <div className="flex gap-3 mb-3">
                    <Quote className="w-5 h-5 text-compliance-blue-300 flex-shrink-0 mt-1" />
                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                      {t?.quote ?? ''}
                    </p>
                  </div>
                  <div className="ml-8">
                    <p className="text-white font-semibold text-sm">{t?.author ?? ''}</p>
                    <p className="text-gray-400 text-xs">{t?.role ?? ''}</p>
                  </div>
                </div>
              </ScrollAnimate>
            )) ?? []}
          </div>
        </div>
      </div>
    </section>
  )
}
