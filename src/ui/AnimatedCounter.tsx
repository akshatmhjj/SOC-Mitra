import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { stats } from '@/data/stats'

export function AnimatedCounter() {
  const [counts, setCounts] = useState<number[]>(() => new Array(stats.length).fill(0))
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  useEffect(() => {
    if (!inView) return
    stats.forEach((stat, i) => {
      const start = performance.now() + i * 80
      const duration = 1300
      const tick = () => {
        const elapsed = performance.now() - start
        if (elapsed < 0) {
          requestAnimationFrame(tick)
          return
        }
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const rounded = Math.round(eased * stat.value)
        setCounts((prev) => {
          const next = [...prev]
          next[i] = rounded
          return next
        })
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
  }, [inView])

  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="flex flex-col items-center text-center space-y-1"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.08, duration: 0.5 }}
        >
          <div className="text-4xl sm:text-5xl font-display font-semibold text-brand-600">
            {counts[i]}
          </div>
          <div className="text-sm text-slate-500 capitalize">
            {stat.suffix} {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}