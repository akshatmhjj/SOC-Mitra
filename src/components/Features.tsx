import { motion } from 'framer-motion'
import { Clock, Layout, Repeat, Zap } from 'lucide-react'
import { Container } from '@/ui/Container'
import { features } from '@/data/features'

const iconMap = [Clock, Layout, Repeat, Zap]

export function Features() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50" aria-labelledby="features-heading">
      <Container>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="features-heading" className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
            Why three fixed points beat a live feed
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Designed for people who make decisions with conviction - not for people who stare at a ticker all day.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, i) => {
            const Icon = iconMap[i]
            return (
              <motion.article
                key={feature.title}
                className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all duration-500"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-500 group-hover:bg-brand-100 transition-colors" aria-hidden="true">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}