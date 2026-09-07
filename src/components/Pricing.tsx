import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Container } from '@/ui/Container'
import { Button } from '@/ui/Button'
import { pricingTiers, comparisonRows, bestFor } from '@/data/pricing'

// Short display name (strips the [SOC ...] suffix)
function tierShortName(name: string) {
  return name.replace(/\s*\[SOC\s+[^\]]+\]\s*$/, '').trim()
}

// Returns the [SOC ...] label, or null if absent
function tierSocLabel(name: string) {
  const m = name.match(/\[(SOC [^\]]+)\]/)
  return m ? m[1] : null
}

function CellValue({ tier, value }: { tier: string; value: boolean | string }) {
  const isExec = tier === 'executive'
  if (typeof value === 'string') {
    return (
      <span className={`text-xs leading-relaxed ${isExec ? 'text-brand-900 font-medium' : 'text-slate-600'}`}>
        {value}
      </span>
    )
  }
  if (value) {
    return (
      <span
        className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${isExec ? 'bg-brand-100' : 'bg-green-100'}`}
        aria-label="Included"
      >
        <Check size={12} className={isExec ? 'text-brand-700' : 'text-green-600'} strokeWidth={2.5} />
      </span>
    )
  }
  return <span className="text-slate-300 text-sm" aria-label="Not included">-</span>
}

export function Pricing() {
  const tierKeys = ['essential', 'professional', 'executive'] as const

  // Compute group spans for proper section dividers
  const groupedRows: { group: string; rows: typeof comparisonRows }[] = []
  comparisonRows.forEach((row) => {
    const last = groupedRows[groupedRows.length - 1]
    if (!last || last.group !== row.group) {
      groupedRows.push({ group: row.group, rows: [row] })
    } else {
      last.rows.push(row)
    }
  })

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-slate-50" aria-labelledby="pricing-heading">
      <Container>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="pricing-heading" className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
            Annual plans
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            All plans billed annually. No monthly toggle - just one straightforward price.
          </p>
        </motion.div>

        {/* Tier cards */}
        <div className="grid gap-6 items-start sm:grid-cols-3">
          {pricingTiers.map((tier, i) => {
            const soc = tierSocLabel(tier.name)
            return (
              <motion.div
                key={tier.name}
                className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col ${tier.featured
                  ? 'bg-white border-brand-300 shadow-xl ring-1 ring-brand-100'
                  : 'bg-white border-slate-200 hover:border-brand-200 hover:shadow-lg'
                  }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                    {tier.badge}
                  </div>
                )}

                <h3 className="font-display font-bold text-xl text-slate-900">
                  {tierShortName(tier.name)}
                </h3>
                {soc && (
                  <p className="text-xs text-brand-600 font-medium mt-0.5">{soc}</p>
                )}

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-display font-bold text-slate-900">
                    ₹{tier.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-slate-500 line-through">
                    ₹{tier.compareAt.toLocaleString('en-IN')}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.featured ? 'default' : 'outline'}
                  className="mt-8 w-full"
                >
                  {tier.cta}
                </Button>
              </motion.div>
            )
          })}
        </div>

        {/* Comparison table */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Compare plans in detail
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Every feature, side by side - so you can see exactly what you're getting.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full min-w-[640px]" aria-label="Plan comparison table">
              <thead>
                <tr className="border-b border-slate-200">
                  <th scope="col" className="text-left py-4 pl-5 pr-4 w-[35%]">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Feature</span>
                  </th>
                  {pricingTiers.map((tier) => (
                    <th
                      key={tier.name}
                      scope="col"
                      className={`py-4 px-4 text-center ${tier.featured ? 'bg-brand-50' : ''}`}
                    >
                      <span className={`text-sm font-bold ${tier.featured ? 'text-brand-800' : 'text-slate-900'}`}>
                        {tierShortName(tier.name)}
                      </span>
                      {tier.badge && (
                        <span className="block mt-0.5 text-[10px] font-semibold bg-brand-600 text-white px-1.5 py-0.5 rounded-full">
                          {tier.badge}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {/* "Best for" row */}
                <tr className="border-b-2 border-slate-200 bg-slate-50">
                  <td className="py-4 pl-5 pr-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Best for</span>
                  </td>
                  {bestFor.map((b) => (
                    <td
                      key={b.tier}
                      className={`py-4 px-4 text-center align-top ${b.featured ? 'bg-brand-50' : ''}`}
                    >
                      <span className={`text-xs font-medium ${b.featured ? 'text-brand-800' : 'text-slate-700'}`}>
                        {b.ideal}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Grouped feature rows */}
                {groupedRows.map((group) => (
                  <>
                    <tr key={`group-${group.group}`} className="bg-slate-50 border-y border-slate-200">
                      <td colSpan={4} className="px-5 py-2">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                          {group.group}
                        </span>
                      </td>
                    </tr>
                    {group.rows.map((row, ri) => (
                      <tr
                        key={`feature-${group.group}-${ri}`}
                        className="border-b border-slate-100 hover:bg-slate-50/40 transition-colors"
                      >
                        <td className="py-3.5 pl-5 pr-4">
                          <p className="text-sm font-medium text-slate-800">{row.feature}</p>
                        </td>
                        {tierKeys.map((key) => (
                          <td
                            key={key}
                            className={`py-3.5 px-4 text-center align-middle ${key === 'executive' ? 'bg-brand-50/40' : ''}`}
                          >
                            <div className="flex justify-center">
                              <CellValue tier={key} value={row[key]} />
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Best-for cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {bestFor.map((b, i) => (
            <motion.div
              key={b.tier}
              className={`rounded-xl p-5 border ${b.featured
                ? 'bg-brand-50 border-brand-200'
                : 'bg-white border-slate-200'
                }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${b.featured ? 'text-brand-700' : 'text-slate-500'}`}>
                {b.label}
              </p>
              <p className={`text-xs font-medium mb-2 ${b.featured ? 'text-brand-600' : 'text-slate-500'}`}>
                {b.ideal}
              </p>
              <p className={`text-sm leading-relaxed ${b.featured ? 'text-brand-900' : 'text-slate-600'}`}>
                {b.summary}
              </p>
            </motion.div>
          ))}
        </div>

        {/* <motion.p
          className="mt-12 text-center text-xs text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          7-day money-back guarantee on all plans. Subscriptions renew annually and can be cancelled anytime before renewal.
        </motion.p> */}
      </Container>
    </section>
  )
}