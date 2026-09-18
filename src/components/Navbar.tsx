import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Container } from '@/ui/Container'
import { Button } from '@/ui/Button'

const navLinks = [
  { label: 'Reports', href: '#reports' },
  { label: 'Preview', href: '#preview' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Pricing', href: '#pricing' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? 'bg-slate-50/90 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          <a href="#" className="flex items-center gap-7" aria-label="SOC Mitra home">
            <img
              src="/Company%20Name%20Logo.jpg"
              alt="SOC Mitra"
              className="h-12 max-h-12 w-auto object-contain"
            />
            <span className="font-display font-bold text-2xl text-slate-900 hidden sm:block">
              SANDEEP OJHA & CO
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-full after:bg-brand-500 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.label}
              </a>
            ))}
            <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              Get your report
            </Button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 text-slate-600 hover:text-slate-900"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="lg:hidden py-4 border-t border-slate-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-slate-600 hover:text-brand-600 transition-colors px-2 py-2"
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <Button
                  className="w-full justify-center mt-2"
                  onClick={() => {
                    setMobileOpen(false)
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Get your report
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  )
}