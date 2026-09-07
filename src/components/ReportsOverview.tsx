import { motion } from 'framer-motion'
import { BookOpen, Calendar, TrendingUp } from 'lucide-react'
import { Container } from '@/ui/Container'
// import { Button } from '@/ui/Button'
import { reports } from '@/data/reports'

const reportIcons = [BookOpen, Calendar, TrendingUp]
const iconBg = ['bg-brand-50', 'bg-brand-50', 'bg-brand-50']
const iconColor = ['text-brand-500', 'text-brand-500', 'text-brand-500']

export function ReportsOverview() {
  return (
    <section id="reports" className="py-16 sm:py-20 lg:py-24" aria-labelledby="reports-heading">
      <Container>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="reports-heading" className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
            Reports for every horizon
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Choose the timeframe that matches your decision cycle - from the next session to the next year.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reports.map((report, i) => {
            const Icon = reportIcons[i]
            return (
              <motion.article
                key={report.title}
                className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all duration-500"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${iconBg[i]} ${iconColor[i]}`} aria-hidden="true">
                  <Icon size={24} strokeWidth={2} />
                </div>

                <h3 className="mt-5 font-display font-bold text-xl text-slate-900">
                  {report.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {report.description}
                </p>

                {/* <Button variant="ghost" className="mt-6 w-full sm:w-auto justify-start gap-1.5">
                  {report.cta}
                  <ArrowRight size={16} />
                </Button> */}
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}