import { motion } from 'framer-motion'
import { Container } from '@/ui/Container'
import { AnimatedCounter } from '@/ui/AnimatedCounter'

export function StatsBar() {
  return (
    <section
      id="stats"
      className="py-16 sm:py-20 lg:py-24 border-y border-slate-200 bg-slate-50/50"
      aria-labelledby="stats-heading"
    >
      <Container>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="stats-heading"
            className="font-display font-bold text-3xl sm:text-4xl text-slate-900"
          >
            Trusted by thousands across India
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Six years of consistent, independent market intelligence - delivered three times a day.
          </p>
        </motion.div>

        <AnimatedCounter />
      </Container>
    </section>
  )
}