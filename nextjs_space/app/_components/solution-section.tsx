'use client'

import { ScrollAnimate } from './scroll-animate'
import { UserCheck, Globe, Zap, FileText } from 'lucide-react'

const features = [
  {
    icon: UserCheck,
    title: 'Written by Compliance Professionals',
    desc: 'Created by experts with 20+ years of hands-on regulatory experience across healthcare, finance, and legal industries.',
    color: 'bg-compliance-blue',
  },
  {
    icon: Globe,
    title: 'Multi-Framework Coverage',
    desc: 'Covers HIPAA, SOC 2, and legal industry requirements in a single comprehensive toolkit.',
    color: 'bg-trust-green',
  },
  {
    icon: Zap,
    title: 'Deploy in Under an Hour',
    desc: 'Customizable templates designed for rapid deployment — no legal expertise required to get started.',
    color: 'bg-warning-amber',
  },
  {
    icon: FileText,
    title: 'Complete Documentation Trails',
    desc: 'Built-in audit logs and checklists create the paper trail auditors demand for compliance verification.',
    color: 'bg-compliance-blue-600',
  },
]

export function SolutionSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-compliance-blue-50 border border-compliance-blue-200 rounded-full text-compliance-blue text-xs font-semibold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5" />
              The Solution
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
              Pre-Built, Audit-Ready SOPs That{' '}
              <span className="text-compliance-blue">Work Out of the Box</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Stop reinventing the wheel. Our professionally crafted templates give you everything auditors look for.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features?.map?.((feat: any, idx: number) => {
            const Icon = feat?.icon
            return (
              <ScrollAnimate key={idx} delay={idx * 0.1}>
                <div className="group p-6 sm:p-8 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-compliance-blue/30 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 ${feat?.color ?? 'bg-gray-500'} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    {Icon && <Icon className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy mb-2">
                    {feat?.title ?? ''}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {feat?.desc ?? ''}
                  </p>
                </div>
              </ScrollAnimate>
            )
          }) ?? []}
        </div>
      </div>
    </section>
  )
}
