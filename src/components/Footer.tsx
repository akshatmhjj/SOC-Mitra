import { motion } from 'framer-motion'
import { Container } from '@/ui/Container'
import { footerData } from '@/data/footer'

export function Footer() {
  return (
    <footer className="pt-10 pb-8 border-t border-slate-200 bg-slate-50">
      <Container>
        <div className="gap-6">
          <img
            src="/Company%20Name%20Logo.jpg"
            alt="SOC Mitra"
            className="max-h-16 w-auto object-contain shrink-0 mb-5"
          />
          <p className="text-sm text-slate-600 leading-relaxed">
            {footerData.description}
          </p>
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
          className="mt-6 pt-6 border-t border-slate-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs leading-relaxed text-slate-500">
            {footerData.regulatory}
          </p>
        </motion.div>
      </Container>
    </footer>
  )
}