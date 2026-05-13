'use client'

import { useState } from 'react'
import { ScrollAnimate } from './scroll-animate'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Are these templates legally compliant?',
    a: 'Our templates are built on current regulatory frameworks including HIPAA, SOC 2, and industry legal standards. They provide a comprehensive foundation for compliance documentation. However, we always recommend having your legal counsel review any templates before implementation to ensure they meet your specific regulatory requirements.'
  },
  {
    q: 'Can I customize these for my specific business?',
    a: 'Absolutely. Every template is designed to be fully customizable. Our Complete Kit includes a dedicated Customization Guide that walks you through tailoring each template to your organization\'s specific processes, size, and industry requirements.'
  },
  {
    q: 'Do I need a lawyer to use these?',
    a: 'No. Our templates are written in clear, professional language that any compliance or operations team can implement. That said, for highly regulated industries, we recommend a legal review as a best practice — the templates make that review process faster and more efficient.'
  },
  {
    q: 'What industries are covered?',
    a: 'The toolkit covers three major regulated sectors: Healthcare (HIPAA compliance), Finance (SOC 2 alignment), and Legal industry compliance. The core SOP templates are industry-agnostic and work across any regulated business.'
  },
  {
    q: 'How often are these updated?',
    a: 'We continuously monitor regulatory changes and update our templates accordingly. All customers receive lifetime access to updates at no additional cost.'
  },
  {
    q: 'What format are the templates in?',
    a: 'All templates are provided in Markdown format, which is universally compatible and easily convertible to Word, PDF, Google Docs, or any documentation platform your organization uses.'
  },
  {
    q: 'Is this a subscription or one-time purchase?',
    a: 'This is a one-time purchase with lifetime access. There are no recurring fees, no subscriptions, and no hidden costs. Pay once and use the templates forever.'
  },
  {
    q: 'Do you offer refunds?',
    a: 'Yes. We offer a 30-day money-back guarantee. If the toolkit doesn\'t meet your needs, simply contact us within 30 days of purchase for a full refund — no questions asked.'
  },
]

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-warning-amber-50 border border-warning-amber-200 rounded-full text-warning-amber-600 text-xs font-semibold uppercase tracking-wider mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              FAQ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg">
              Everything you need to know about the Compliance-Ready SOP Toolkit.
            </p>
          </div>
        </ScrollAnimate>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs?.map?.((faq: any, idx: number) => (
            <ScrollAnimate key={idx} delay={Math.min(idx * 0.05, 0.3)}>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openIdx === idx}
                >
                  <span className="font-semibold text-navy text-sm sm:text-base">
                    {faq?.q ?? ''}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      openIdx === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {faq?.a ?? ''}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollAnimate>
          )) ?? []}
        </div>
      </div>
    </section>
  )
}
