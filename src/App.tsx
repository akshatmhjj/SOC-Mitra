import { motion, useReducedMotion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { StatsBar } from '@/components/StatsBar'
import { ReportsOverview } from '@/components/ReportsOverview'
import { ReportPreviewer } from '@/components/ReportPreviewer'
import { Features } from '@/components/Features'
import { Reviews } from '@/components/Reviews'
import { Pricing } from '@/components/Pricing'
import { Footer } from '@/components/Footer'

function App() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ReportsOverview />
        <ReportPreviewer />
        <Features />
        <Reviews />
        <Pricing />
      </main>
      <Footer />
    </motion.div>
  )
}

export default App