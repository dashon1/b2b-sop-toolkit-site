'use client'

import { ScrollAnimate } from './scroll-animate'
import { ShieldCheck, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'

export function FinalCtaSection() {
  const handlePurchase = (tierName: string) => {
    toast.success(`Thank you for your interest in the ${tierName}! Checkout coming soon.`, {
      duration: 4000,
    })
  }

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-navy via-navy-700 to-compliance-blue-700 relative overflow-hidden">
      {/* Geometric shapes */}
      <div className="absolute top-10 right-20 w-40 h-40 border border-white/5 rounded-full" />
      <div className="absolute bottom-10 left-20 w-24 h-24 border border-white/5 rounded-lg rotate-12" />
      <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-trust-green/30 rounded-full" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Start Building Audit-Ready{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-compliance-blue-300 to-trust-green-300">
                Compliance Today
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Join hundreds of businesses who trust our toolkit to maintain regulatory compliance and pass audits with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => handlePurchase('Essential Kit')}
                className="group px-8 py-4 bg-white text-navy font-bold rounded-xl text-base hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Essential Kit — $67
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handlePurchase('Complete Kit')}
                className="group px-8 py-4 bg-compliance-blue text-white font-bold rounded-xl text-base hover:bg-compliance-blue-600 transition-all shadow-lg shadow-compliance-blue/30 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 border border-compliance-blue-400"
              >
                Complete Kit — $147
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Guarantee Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-xl">
              <ShieldCheck className="w-6 h-6 text-trust-green" />
              <div className="text-left">
                <p className="text-white font-semibold text-sm">30-Day Money-Back Guarantee</p>
                <p className="text-gray-400 text-xs">No questions asked. Full refund if you&apos;re not satisfied.</p>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  )
}
