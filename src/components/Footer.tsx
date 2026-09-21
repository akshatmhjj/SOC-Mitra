import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/ui/Container'
import { footerData } from '@/data/footer'

interface FooterProps {
  onNavigateToPrivacy?: () => void
  onNavigateToRiskDisclosure?: () => void
  onNavigateToGrievance?: () => void
  onNavigateToCookies?: () => void
}

export function Footer({
  onNavigateToPrivacy,
  onNavigateToRiskDisclosure,
  onNavigateToGrievance,
  onNavigateToCookies
}: FooterProps) {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="pt-10 pb-8 border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_26rem] lg:items-end">
          <div>
            <img
              src="/Company%20Name%20Logo.jpg"
              alt="SOC Mitra"
              className="max-h-16 w-auto object-contain shrink-0 mb-5"
            />
            <p className="text-sm text-slate-600 leading-relaxed">
              {footerData.description}
            </p>
          </div>

          <div className="rounded-xl border border-brand-200 bg-brand-50 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              {/* <div>
                <h3 className="font-display text-lg font-bold text-slate-900">Daily market intelligence</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Get the day&apos;s key market insights delivered to your inbox.
                </p>
              </div> */}
            </div>

            {isSubscribed ? (
              <p className="rounded-md bg-brand-50 px-3 py-2.5 text-sm font-medium text-green-700">
                You&apos;re on the list. Check your inbox for confirmation.
              </p>
            ) : (
              <form className="flex flex-col gap-2 sm:flex-row" onSubmit={handleSubmit}>
              {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
                {isSubscribed ? <Check size={18} /> : <Mail size={18} />}
              </div> */}
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  required
                  className="min-w-0 flex-1 rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-brand-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* {footerData.columns.map((column) => (
            <div key={column.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                {column.heading}
              </h4>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-slate-600 hover:text-brand-600 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}

        <motion.div
          className="mt-8 pt-6 border-t border-slate-200 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {onNavigateToPrivacy && (
              <button
                onClick={onNavigateToPrivacy}
                className="text-xs font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                Privacy Policy
              </button>
            )}
            {onNavigateToRiskDisclosure && (
              <button
                onClick={onNavigateToRiskDisclosure}
                className="text-xs font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                Risk Disclosure
              </button>
            )}
            {onNavigateToGrievance && (
              <button
                onClick={onNavigateToGrievance}
                className="text-xs font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                Grievance Policy
              </button>
            )}
            {onNavigateToCookies && (
              <button
                onClick={onNavigateToCookies}
                className="text-xs font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                Cookie Policy
              </button>
            )}
          </div>

          {/* Copyright and Disclaimer */}
          <div className="text-center space-y-2">
            <p className="text-xs font-medium text-slate-900">
              © 2026 SANDEEP OJHA & COMPANY. All Rights Reserved.
            </p>
            <p className="text-xs leading-relaxed text-slate-600 max-w-4xl mx-auto">
              <strong className="text-slate-900">Market Disclaimer:</strong> Investment and trading in securities and derivatives involve risk. The information provided through this website and SOC research products is for Educational & Informative Purpose. No return or profit is guaranteed. Please read our Disclaimer, Risk Disclosure, Terms & Conditions and Privacy Policy before using our services.
            </p>
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}