'use client'

import Image from 'next/image'
import { ScrollAnimate } from './scroll-animate'
import { FileText, Building2, ClipboardCheck, Gift, CheckCircle2 } from 'lucide-react'

const categories = [
  {
    icon: FileText,
    title: '8 Core SOP Templates',
    color: 'bg-compliance-blue',
    borderColor: 'border-compliance-blue/20',
    items: [
      'Data Breach Response',
      'Access Control & Authentication',
      'Employee Onboarding/Offboarding',
      'Incident Reporting & Escalation',
      'Record Retention & Disposal',
      'Vendor Assessment',
      'Physical Security',
      'Audit Preparation',
    ],
  },
  {
    icon: Building2,
    title: '3 Industry Modules',
    color: 'bg-trust-green',
    borderColor: 'border-trust-green/20',
    items: [
      'HIPAA Healthcare Protocols',
      'SOC 2 Finance Protocols',
      'Legal Compliance Protocols',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Tools',
    color: 'bg-warning-amber',
    borderColor: 'border-warning-amber/20',
    items: [
      'Audit Log Template',
      'Data Handling QA Checklist',
      'Pre-Audit QA Checklist',
      'Employee Compliance Checklist',
    ],
  },
  {
    icon: Gift,
    title: 'Bonus Materials',
    color: 'bg-compliance-blue-600',
    borderColor: 'border-compliance-blue/20',
    tag: 'Tier 2',
    items: [
      'Customization Guide',
      'Employee Training Materials',
      'Compliance Calendar Template',
    ],
  },
]

export function WhatsInsideSection() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-trust-green-50 border border-trust-green-200 rounded-full text-trust-green-600 text-xs font-semibold uppercase tracking-wider mb-4">
              <ClipboardCheck className="w-3.5 h-3.5" />
              What&apos;s Inside
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
              Everything You Need to{' '}
              <span className="text-trust-green">Pass Your Next Audit</span>
            </h2>
            <p className="text-gray-500 text-lg">
              19 professional documents covering every aspect of regulatory compliance.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Image */}
          <ScrollAnimate direction="left" className="lg:col-span-2">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl bg-gray-200 sticky top-24">
              <Image
                src="https://cdn.abacus.ai/images/1102cf02-235c-4ba6-b692-d5ba41d61780.png"
                alt="Complete compliance SOP toolkit contents showing professional documentation templates"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimate>

          {/* Categories */}
          <div className="lg:col-span-3 space-y-6">
            {categories?.map?.((cat: any, idx: number) => {
              const Icon = cat?.icon
              return (
                <ScrollAnimate key={idx} delay={idx * 0.1} direction="right">
                  <div className={`p-6 rounded-xl bg-white border ${cat?.borderColor ?? 'border-gray-200'} shadow-sm hover:shadow-md transition-all`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 ${cat?.color ?? 'bg-gray-500'} rounded-lg flex items-center justify-center`}>
                        {Icon && <Icon className="w-5 h-5 text-white" />}
                      </div>
                      <h3 className="font-display text-lg font-bold text-navy">
                        {cat?.title ?? ''}
                      </h3>
                      {cat?.tag && (
                        <span className="ml-auto px-2.5 py-0.5 bg-compliance-blue-50 text-compliance-blue text-xs font-semibold rounded-full">
                          {cat.tag}
                        </span>
                      )}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {(cat?.items ?? [])?.map?.((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-navy-600">
                          <CheckCircle2 className="w-4 h-4 text-trust-green flex-shrink-0" />
                          <span>{item ?? ''}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimate>
              )
            }) ?? []}
          </div>
        </div>
      </div>
    </section>
  )
}
