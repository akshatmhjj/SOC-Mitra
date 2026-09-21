import { motion } from 'framer-motion'
import { ArrowRight, FileText } from 'lucide-react'
import { Container } from '@/ui/Container'
import { Button } from '@/ui/Button'
import { useEffect, useState } from 'react'

export function Hero() {
  const [typewriterText, setTypewriterText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const fullText = 'This is not a tips or call service'

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const handleTyping = () => {
      const currentLength = typewriterText.length

      if (!isDeleting) {
        // Typing forward
        if (currentLength < fullText.length) {
          setTypewriterText(fullText.slice(0, currentLength + 1))
          timeout = setTimeout(handleTyping, 60)
        } else {
          // Pause before deleting
          timeout = setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        // Deleting backward (backspace)
        if (currentLength > 0) {
          setTypewriterText(fullText.slice(0, currentLength - 1))
          timeout = setTimeout(handleTyping, 200)
        } else {
          // Pause before typing again
          timeout = setTimeout(() => setIsDeleting(false), 300)
        }
      }
    }

    timeout = setTimeout(handleTyping, 100)

    return () => clearTimeout(timeout)
  }, [typewriterText, isDeleting])
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-16 overflow-hidden">
      <Container className="relative z-10">
        <motion.div
          className="mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
        >
          <motion.div
            className="relative mx-auto mb-4 flex items-center justify-center select-none"
            variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 16 } }}
          >

            <img
              src="/Company%20Name%20Logo.jpg"
              alt="SOC Mitra"
              className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl object-contain opacity-[0.8] mix-blend-multiply filter contrast-125"
              style={{
                maskImage: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0) 72%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0) 72%)',
              }}
            />
          </motion.div>

          <motion.div
            className="text-3xl font-medium text-red-600 uppercase tracking-wider min-h-[1.5rem]"
            variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }}
          >
            <p className="flex items-center justify-center gap-1">
              {typewriterText}
              {typewriterText && <span className="animate-pulse">|</span>}
            </p>
          </motion.div>

          <motion.p
            className="text-sm font-medium text-slate-700 mt-2"
            variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }}
          >
            It is a professionally structured research report covering the key information you need to understand the market
          </motion.p>

          <motion.h1
            className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-slate-900 leading-[1.1] tracking-tight"
            variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 16 } }}
          >
            One read before the market opens, one at midday, one before you sign off for the day.
          </motion.h1>

          <motion.p
            className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
            variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 12 } }}
          >
            The Morning, Afternoon, and Evening editions replace the noise of a live feed with
            three fixed, focused briefings - delivered at 8:30 AM, 2:15 PM, and 7:00 PM.
            Structured, consistent, and built for follow-through.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 16 } }}
          >
            <Button
              className="w-full sm:w-auto gap-2 text-lg px-8 py-3.5"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See yearly plans
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto gap-2 text-lg px-8 py-3.5"
              onClick={() => document.getElementById('preview')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText size={18} />
              Preview a report
            </Button>
          </motion.div>

          <motion.p
            className="text-sm mt-10 font-medium text-brand-600 uppercase tracking-wider"
            variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }}
          >
            Three editions. Five days a week. One decisive edge.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}