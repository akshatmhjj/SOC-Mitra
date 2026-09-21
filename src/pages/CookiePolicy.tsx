import { Container } from '@/ui/Container'
import { ArrowLeft } from 'lucide-react'

interface CookiePolicyProps {
  onNavigateHome: () => void
}

export function CookiePolicy({ onNavigateHome }: CookiePolicyProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-slate-200">
        <Container>
          <div className="py-6">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </button>
          </div>
        </Container>
      </div>

      <Container>
        <article className="py-12 max-w-4xl mx-auto prose prose-slate">
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Cookie Policy</h1>

          <div className="text-slate-700 leading-relaxed space-y-6">
            <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">1. WHAT ARE COOKIES?</h2>
            <p>
              Cookies are small files or similar technologies that may be stored on your device when you visit a website.
            </p>
            <p>
              They can help websites remember preferences, understand traffic and provide functionality.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">2. WHY SOC USES COOKIES</h2>
            <p>SOC may use cookies and similar technologies for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Website functionality</li>
              <li>Login/session management</li>
              <li>Security</li>
              <li>Analytics</li>
              <li>Performance monitoring</li>
              <li>Preference management</li>
              <li>Subscription functionality</li>
              <li>Where applicable, marketing and advertising</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">3. TYPES OF COOKIES</h2>

            <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">Essential Cookies</h3>
            <p>
              These may be necessary for website operation, security, login and core functionality.
            </p>

            <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">Analytics Cookies</h3>
            <p>
              These may help SOC understand website traffic and user behaviour in aggregated or statistical form.
            </p>

            <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">Functional Cookies</h3>
            <p>
              These may remember preferences and improve user experience.
            </p>

            <h3 className="text-xl font-display font-bold text-slate-900 mt-8 mb-3">Marketing Cookies</h3>
            <p>
              Where used, these may help measure or personalise advertising and marketing activities, subject to applicable law and consent requirements.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">4. THIRD-PARTY COOKIES</h2>
            <p>
              Third-party services integrated into the website may place or access cookies or similar technologies in accordance with their own policies and applicable requirements.
            </p>
            <p>
              These may include analytics, payment, security, advertising, hosting or communication providers.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">5. COOKIE CONTROL</h2>
            <p>
              You may control cookies through your browser or device settings.
            </p>
            <p>
              Disabling certain cookies may affect website functionality.
            </p>
            <p>
              Where applicable law requires consent for particular categories of cookies, SOC will provide appropriate mechanisms for obtaining and managing that consent.
            </p>
          </div>
        </article>
      </Container>
    </div>
  )
}
