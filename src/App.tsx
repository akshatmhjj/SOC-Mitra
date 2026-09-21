import { useState } from 'react'
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
import { PrivacyPolicy } from '@/pages/PrivacyPolicy'
import { RiskDisclosure } from '@/pages/RiskDisclosure'
import { GrievancePolicy } from '@/pages/GrievancePolicy'
import { CookiePolicy } from '@/pages/CookiePolicy'

type PageType = 'home' | 'privacy' | 'risk' | 'grievance' | 'cookies'

function App() {
  const prefersReducedMotion = useReducedMotion()
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  const navigateToPrivacy = () => {
    setCurrentPage('privacy')
    window.scrollTo(0, 0)
  }

  const navigateToRiskDisclosure = () => {
    setCurrentPage('risk')
    window.scrollTo(0, 0)
  }

  const navigateToGrievance = () => {
    setCurrentPage('grievance')
    window.scrollTo(0, 0)
  }

  const navigateToCookies = () => {
    setCurrentPage('cookies')
    window.scrollTo(0, 0)
  }

  const navigateToHome = () => {
    setCurrentPage('home')
    window.scrollTo(0, 0)
  }

  // Render policy pages
  if (currentPage === 'privacy') {
    return <PrivacyPolicy onNavigateHome={navigateToHome} />
  }

  if (currentPage === 'risk') {
    return <RiskDisclosure onNavigateHome={navigateToHome} />
  }

  if (currentPage === 'grievance') {
    return <GrievancePolicy onNavigateHome={navigateToHome} />
  }

  if (currentPage === 'cookies') {
    return <CookiePolicy onNavigateHome={navigateToHome} />
  }

  // Render home page
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
      <Footer
        onNavigateToPrivacy={navigateToPrivacy}
        onNavigateToRiskDisclosure={navigateToRiskDisclosure}
        onNavigateToGrievance={navigateToGrievance}
        onNavigateToCookies={navigateToCookies}
      />
    </motion.div>
  )
}

export default App