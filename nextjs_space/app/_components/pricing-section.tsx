'use client'

import { ScrollAnimate } from './scroll-animate'
import { Check, Star, ShieldCheck, Zap } from 'lucide-react'
import { toast } from 'sonner'

const tiers = [
  {
    name: 'Essential Kit',
    price: '$67',
    desc: 'Everything you need to build a solid compliance foundation.',
    cta: 'Get Essential Kit',
    recommended: false,
    features: [
      '8 Core SOP Templates',
      '3 Industry-Specific Modules',
      'Compliance Audit Log Template',
      '3 QA Checklists',
      'Instant Download',
    ],
  },
  {
    name: 'Complete Kit',
    price: '$147',
    desc: 'The full compliance toolkit with training materials and priority support.',
    cta: 'Get Complete Kit',
    recommended: true,
    features: [
      'Everything in Essential Kit',
      'Customization Guide',
      'Employee Training Materials',
      'Compliance Calendar Template',
      'Priority Email Support (30 days)',
    ],
  },
]

export function PricingSection() {
  const handlePurchase = (tierName: string) => {
    toast.success(`Thank you for your interest in the ${tierName}! Checkout coming soon.`, {
      duration: 4000,
    })
  }

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-compliance-blue-50 border border-compliance-blue-200 rounded-full text-compliance-blue text-xs font-semibold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5" />
              Pricing
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
              Choose Your{' '}
              <span className="text-compliance-blue">Compliance Level</span>
            </h2>
            <p className="text-gray-500 text-lg">
              One-time purchase. No subscriptions. Lifetime access.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers?.map?.((tier: any, idx: number) => (
            <ScrollAnimate key={idx} delay={idx * 0.15}>
              <div
                className={`relative p-8 rounded-2xl border-2 transition-all h-full flex flex-col ${
                  tier?.recommended
                    ? 'border-compliance-blue bg-gradient-to-b from-compliance-blue-50/50 to-white shadow-xl shadow-compliance-blue/10'
                    : 'border-gray-200 bg-white hover:border-gray-300 shadow-sm hover:shadow-md'
                }`}
              >
                {tier?.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-compliance-blue text-white text-xs font-bold rounded-full shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      RECOMMENDED
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-navy mb-1">
                    {tier?.name ?? ''}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{tier?.desc ?? ''}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl font-extrabold text-navy">
                      {tier?.price ?? ''}
                    </span>
                    <span className="text-gray-400 text-sm">one-time</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {(tier?.features ?? [])?.map?.((feat: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        tier?.recommended ? 'text-compliance-blue' : 'text-trust-green'
                      }`} />
                      <span className="text-navy-600 text-sm">{feat ?? ''}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handlePurchase(tier?.name ?? 'Kit')}
                  className={`w-full py-4 rounded-xl font-semibold text-base transition-all ${
                    tier?.recommended
                      ? 'bg-compliance-blue text-white hover:bg-compliance-blue-600 shadow-lg shadow-compliance-blue/25 hover:shadow-xl hover:shadow-compliance-blue/35 hover:-translate-y-0.5'
                      : 'bg-navy text-white hover:bg-navy-600 hover:-translate-y-0.5'
                  }`}
                >
                  {tier?.cta ?? 'Get Started'}
                </button>

                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </ScrollAnimate>
          )) ?? []}
        </div>
      </div>
    </section>
  )
}
