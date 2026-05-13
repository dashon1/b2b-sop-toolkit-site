'use client'

import Image from 'next/image'
import { ScrollAnimate } from './scroll-animate'
import { AlertTriangle, Clock, XCircle, FileX } from 'lucide-react'

const painPoints = [
  {
    icon: AlertTriangle,
    title: 'Failed audits cost $100K+ in penalties and lost contracts',
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-100',
  },
  {
    icon: Clock,
    title: 'Creating SOPs from scratch takes 200+ hours of expert time',
    color: 'text-warning-amber',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: XCircle,
    title: 'One compliance gap can shut down your entire operation',
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-100',
  },
  {
    icon: FileX,
    title: 'Auditors demand documentation you don\'t have',
    color: 'text-warning-amber',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <ScrollAnimate direction="left">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-gray-200">
              <Image
                src="https://cdn.abacus.ai/images/e510e486-7081-47cc-b41c-fa8824a3e0b2.png"
                alt="Stressed business professional dealing with regulatory compliance chaos and failed audits"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
          </ScrollAnimate>

          {/* Content Side */}
          <div>
            <ScrollAnimate>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 rounded-full text-red-600 text-xs font-semibold uppercase tracking-wider mb-4">
                <AlertTriangle className="w-3.5 h-3.5" />
                The Problem
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-8">
                Regulatory Chaos is{' '}
                <span className="text-red-500">Killing Your Business</span>
              </h2>
            </ScrollAnimate>

            <div className="space-y-4">
              {painPoints?.map?.((point: any, idx: number) => {
                const Icon = point?.icon
                return (
                  <ScrollAnimate key={idx} delay={idx * 0.1}>
                    <div className={`flex items-start gap-4 p-4 sm:p-5 rounded-xl ${point?.bg ?? 'bg-gray-50'} border ${point?.border ?? 'border-gray-200'} transition-all hover:shadow-md`}>
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${point?.bg ?? 'bg-gray-50'}`}>
                        {Icon && <Icon className={`w-5 h-5 ${point?.color ?? 'text-gray-500'}`} />}
                      </div>
                      <p className="text-navy-600 font-medium text-sm sm:text-base leading-relaxed">
                        {point?.title ?? ''}
                      </p>
                    </div>
                  </ScrollAnimate>
                )
              }) ?? []}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
