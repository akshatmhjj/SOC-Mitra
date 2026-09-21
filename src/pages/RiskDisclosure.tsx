import { Container } from '@/ui/Container'
import { ArrowLeft } from 'lucide-react'

interface RiskDisclosureProps {
  onNavigateHome: () => void
}

export function RiskDisclosure({ onNavigateHome }: RiskDisclosureProps) {
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
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Risk Disclosure</h1>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-display font-bold text-amber-900 mt-0 mb-3">IMPORTANT RISK DISCLOSURE</h2>
            <p className="text-amber-900 mb-0">
              Investment and trading in securities and derivatives involve risk.
            </p>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-6">
            <p>
              Before subscribing to SOC research products or acting on market information, users should understand that:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Equity Securities</h3>
                <p>Prices of equity securities can rise or fall and may result in partial or complete loss of invested capital.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Futures</h3>
                <p>Futures involve leverage and can generate losses substantially larger than the initial margin or capital deployed.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Options</h3>
                <p>Options involve complex risk characteristics. Buyers may lose the premium paid, while option writers may face substantially higher losses depending upon the position and market movement.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Intraday Trading</h3>
                <p>Short-term trading may involve rapid price movements, slippage, liquidity constraints and execution risk.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Commodity Markets</h3>
                <p>Commodity prices may be affected by global supply and demand, currencies, interest rates, geopolitical developments, weather and other factors.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Currency Markets</h3>
                <p>Currency movements may be influenced by interest-rate differentials, central-bank policies, inflation, capital flows and macroeconomic developments.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Global Markets</h3>
                <p>International developments can materially affect Indian markets, including developments in the United States, Europe, Asia and other major economies.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Leverage</h3>
                <p>Leverage can amplify both profits and losses.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Liquidity</h3>
                <p>A security or derivative may not always be available for execution at the expected price.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Gap Risk</h3>
                <p>Markets may open substantially above or below the previous closing price following overnight or unexpected events.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Technology Risk</h3>
                <p>Internet connectivity, broker systems, exchange systems, data feeds or communication platforms may experience failures or interruptions.</p>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">CUSTOMER ACKNOWLEDGEMENT</h2>
            <p>By purchasing or subscribing to an SOC product, you acknowledge that:</p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Financial markets involve risk.</li>
              <li>No return is guaranteed.</li>
              <li>Past performance is not indicative of future results.</li>
              <li>You are responsible for your own financial decisions.</li>
              <li>You understand that market conditions may change rapidly.</li>
              <li>You should not deploy capital that you cannot afford to lose.</li>
              <li>You should independently assess whether a financial product is suitable for you.</li>
            </ol>
          </div>
        </article>
      </Container>
    </div>
  )
}
