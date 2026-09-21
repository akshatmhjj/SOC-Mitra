import { Container } from '@/ui/Container'
import { ArrowLeft } from 'lucide-react'

interface GrievancePolicyProps {
  onNavigateHome: () => void
}

export function GrievancePolicy({ onNavigateHome }: GrievancePolicyProps) {
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
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Grievance & Customer Support Policy</h1>

          <div className="text-slate-700 leading-relaxed space-y-6">
            <p>Customers may contact SOC regarding:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Subscription issues</li>
              <li>Payment issues</li>
              <li>Delivery problems</li>
              <li>Account access</li>
              <li>Technical issues</li>
              <li>Privacy concerns</li>
              <li>Product-related queries</li>
              <li>Complaints regarding services</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">Customer Support</h2>
            <p>
              <strong>Email:</strong> <a href="mailto:info@sandeepojha.com" className="text-brand-600 hover:text-brand-700">info@sandeepojha.com</a>
            </p>

            <p>Customers should include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full name</li>
              <li>Registered email/mobile number</li>
              <li>Order/subscription reference</li>
              <li>Date of transaction</li>
              <li>Nature of complaint</li>
              <li>Supporting information, where relevant</li>
            </ul>

            <p>
              SOC will review complaints and respond within a reasonable period, subject to the nature and complexity of the matter.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">REGULATORY INFORMATION</h2>
            <p>
              Where SOC is operating the website should prominently display the applicable information.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-display font-bold text-slate-900 mt-0 mb-4">Regulatory Details:</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="font-semibold text-slate-900">Name of Entity:</dt>
                  <dd className="text-slate-700">SANDEEP OJHA AND COMPANY</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Registered Office:</dt>
                  <dd className="text-slate-700">MUMBAI (Mah.)</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Correspondence Office:</dt>
                  <dd className="text-slate-700">MUMBAI (Mah.)</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Principal Officer / Contact Person:</dt>
                  <dd className="text-slate-700">Mr. SANDEEP OJHA</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Email:</dt>
                  <dd><a href="mailto:info@sandeepojha.com" className="text-brand-600 hover:text-brand-700">info@sandeepojha.com</a></dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Telephone:</dt>
                  <dd><a href="tel:+919174738396" className="text-brand-600 hover:text-brand-700">+91 91747 38396</a></dd>
                </div>
              </dl>
              <p className="text-sm text-slate-600 mt-4 mb-0">
                All regulatory information is the latest official registration records.
              </p>
            </div>
          </div>
        </article>
      </Container>
    </div>
  )
}
