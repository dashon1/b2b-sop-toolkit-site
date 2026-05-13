import { ShieldCheck } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="bg-navy-800 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-compliance-blue rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-white text-sm">
              Compliance-Ready SOP Toolkit
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-400 hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-gray-400 hover:text-gray-300 cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-gray-400 hover:text-gray-300 cursor-pointer transition-colors">Contact</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-gray-500 text-xs leading-relaxed text-center max-w-3xl mx-auto mb-4">
            This toolkit provides educational templates. Consult with legal and compliance professionals for your specific regulatory requirements. Templates are provided as-is and should be reviewed by qualified counsel before implementation in your organization.
          </p>
          <p className="text-gray-600 text-xs text-center">
            © 2026 Compliance-Ready SOP Toolkit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
