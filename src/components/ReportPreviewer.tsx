import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, ChevronRight, ArrowUpRight, ArrowDownRight, X, ExternalLink, AlertCircle } from 'lucide-react'
import { Container } from '@/ui/Container'
import { Button } from '@/ui/Button'
import { moduleContent } from '@/data/modules'

const moduleNames = Object.keys(moduleContent)

// ─── Dataviz color tokens (reference palette, brand-mapped) ─────────────────
const C = {
  up: '#16a34a',   // green  – positive delta
  down: '#dc2626',   // red    – negative delta
  neutral: '#6b7280',   // gray   – flat/unchanged
  brand: '#c26d22',   // amber  – brand accent / series-1
  series2: '#2563eb',   // blue   – series-2
  series3: '#0891b2',   // cyan   – series-3
  series4: '#7c3aed',   // violet – series-4
  surface: '#ffffff',
  ink: '#0f172a',   // slate-900
  ink2: '#64748b',   // slate-500
  ink3: '#94a3b8',   // slate-400
  grid: '#f1f5f9',   // slate-100
  border: 'rgba(15,23,42,0.10)',
}

// ─── Index Trend Chart (Market Snapshot) ────────────────────────────────────
function IndexTrendChart() {
  // Demo data: intraday index levels (illustrative)
  const times = ['9:15', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:15']
  const values = [24120, 24145, 24180, 24155, 24210, 24265, 24240, 24290, 24310, 24280, 24340, 24365, 24410, 24430]

  const w = 520; const h = 140
  const padL = 48; const padR = 16; const padT = 16; const padB = 28
  const plotW = w - padL - padR
  const plotH = h - padT - padB

  const min = Math.min(...values) - 20
  const max = Math.max(...values) + 20
  const range = max - min

  const toX = (i: number) => padL + (i / (times.length - 1)) * plotW
  const toY = (v: number) => padT + plotH - ((v - min) / range) * plotH

  const last = values[values.length - 1]
  const first = values[0]
  const change = last - first
  const changePct = ((change / first) * 100).toFixed(2)

  const points = values.map((v, i) => `${toX(i)},${toY(v)}`).join(' ')

  // Area path
  const areaPath = `${toX(0)},${toY(first)} ${points} ${toX(values.length - 1)},${padT + plotH} ${toX(0)},${padT + plotH}`

  // Grid ticks
  const gridVals = [24100, 24200, 24300, 24400, 24500]

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 overflow-x-auto">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-xs text-slate-500 font-medium">Benchmark Index</p>
          <p className="text-2xl font-bold text-slate-900 tabular-nums">{last.toLocaleString('en-IN')}</p>
        </div>
        <div className={`flex items-center gap-1 text-sm font-semibold ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {change >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          <span>+{change.toFixed(0)}</span>
          <span className="font-normal text-xs">({changePct}%)</span>
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" aria-label="Intraday index trend chart">
        {/* Grid lines */}
        {gridVals.map((gv) => (
          <line key={gv} x1={padL} y1={toY(gv)} x2={w - padR} y2={toY(gv)} stroke={C.grid} strokeWidth={1} />
        ))}
        {/* Y axis labels */}
        {gridVals.map((gv) => (
          <text key={gv} x={padL - 6} y={toY(gv) + 4} textAnchor="end" fontSize={9} fill={C.ink3}>{gv.toLocaleString('en-IN')}</text>
        ))}
        {/* X axis labels */}
        {[0, 6, 13].map((i) => (
          <text key={i} x={toX(i)} y={h - 6} textAnchor="middle" fontSize={9} fill={C.ink3}>{times[i]}</text>
        ))}
        {/* Area fill */}
        <polygon points={areaPath} fill={C.brand} fillOpacity={0.08} />
        {/* Line */}
        <polyline points={points} fill="none" stroke={C.brand} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        {/* End dot */}
        <circle cx={toX(values.length - 1)} cy={toY(last)} r={4} fill={C.brand} />
        <circle cx={toX(values.length - 1)} cy={toY(last)} r={7} fill={C.brand} fillOpacity={0.15} />
      </svg>
      <p className="text-xs text-slate-400 mt-1 text-center">09:15 – 15:15 IST · Illustrative data</p>
    </div>
  )
}

// ─── Asian Markets Heatmap (Market Snapshot) ────────────────────────────────
function AsianMarketsGrid() {
  const markets = [
    { name: 'Nikkei 225', val: '+1.2%', up: true },
    { name: 'Hang Seng', val: '-0.4%', up: false },
    { name: 'Shanghai', val: '+0.3%', up: true },
    { name: 'KOSPI', val: '+0.7%', up: true },
    { name: 'Straits Idx', val: '-0.1%', up: false },
    { name: 'SET Idx', val: '+0.5%', up: true },
  ]
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Asian Markets - this morning</p>
      <div className="grid grid-cols-3 gap-2">
        {markets.map((m) => (
          <div key={m.name} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-slate-50">
            <span className="text-xs text-slate-500">{m.name}</span>
            <span className={`text-sm font-bold tabular-nums ${m.up ? 'text-green-600' : 'text-red-600'}`}>
              {m.val}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Sector Bar Chart (Sector Pulse) ────────────────────────────────────────
function SectorBarChart() {
  const sectors = [
    { name: 'Banking & Finance', val: +2.4, up: true },
    { name: 'Auto & EV', val: +1.8, up: true },
    { name: 'Capital Goods', val: +1.2, up: true },
    { name: 'Real Estate', val: +0.6, up: true },
    { name: 'Healthcare', val: -0.3, up: false },
    { name: 'IT Services', val: -1.1, up: false },
  ]
  const maxAbs = Math.max(...sectors.map(s => Math.abs(s.val)))
  const w = 380; const barH = 22; const gap = 10
  const labelW = 110; const valW = 52; const plotW = w - labelW - valW
  const h = sectors.length * (barH + gap) + 8

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 overflow-x-auto">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Sector Performance - Session</p>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" aria-label="Sector performance bar chart">
        {sectors.map((s, i) => {
          const y = i * (barH + gap) + 4
          const barWidth = (Math.abs(s.val) / maxAbs) * plotW
          const barX = s.val >= 0 ? labelW : labelW + plotW - barWidth
          const color = s.up ? C.up : C.down

          return (
            <g key={s.name}>
              <text x={labelW - 6} y={y + barH / 2 + 1} textAnchor="end" fontSize={10} fill={C.ink2} dominantBaseline="middle">{s.name}</text>
              <rect x={barX} y={y} width={barWidth} height={barH} rx={3} fill={color} fillOpacity={0.85} />
              <text x={s.val >= 0 ? barX + barWidth + 4 : barX - 4} y={y + barH / 2 + 1}
                textAnchor={s.val >= 0 ? 'start' : 'end'} fontSize={10} fontWeight={600} fill={color} dominantBaseline="middle">
                {s.val > 0 ? '+' : ''}{s.val.toFixed(1)}%
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// ─── Trade Setup Card (Stock Ideas & Setups) ────────────────────────────────
function TradeSetupCard({ label, color, entry, target, stop }: { label: string; color: string; entry: string; target: string; stop: string }) {
  return (
    <div className={`rounded-xl border-2 p-4 ${color === C.up ? 'border-green-200 bg-green-50' : 'border-violet-200 bg-violet-50'}`}>
      <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color }}>{label}</p>
      {[
        { lbl: 'Entry zone', val: entry, color: C.brand },
        { lbl: 'Target', val: target, color: C.up },
        { lbl: 'Stop-loss', val: stop, color: C.down },
      ].map(({ lbl, val, color: c }) => (
        <div key={lbl} className="flex justify-between items-center py-1.5 border-b border-slate-100 last:border-0">
          <span className="text-xs text-slate-500">{lbl}</span>
          <span className="text-sm font-bold tabular-nums" style={{ color: c }}>{val}</span>
        </div>
      ))}
    </div>
  )
}

function StockIdeasCard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Active setups - today</p>
          <p className="text-xs text-slate-400 mt-0.5">Entry · Target · Stop-loss</p>
        </div>
        <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">2 ideas</span>
      </div>
      <div className="space-y-3">
        <TradeSetupCard label="Mid-cap private bank" color={C.up} entry="₹1,840 – 1,858" target="₹1,960" stop="₹1,795" />
        <TradeSetupCard label="Specialty chemicals" color="#7c3aed" entry="Watch ₹920 level" target="₹980 / ₹1,010" stop="₹885" />
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-2">
        <AlertCircle size={12} />
        Risk note: position sizing & portfolio exposure limits covered inside today's full report.
      </div>
    </div>
  )
}

// ─── Macro Timeline (Macro Radar) ───────────────────────────────────────────
function MacroTimeline() {
  const events = [
    { date: 'This week', label: 'RBI MPC Meeting', detail: 'Rate hold vs. cut - sector impact analysis', prob: 72, up: true },
    { date: 'Friday', label: 'US Non-farm Payrolls', detail: 'Hot print → EM flow pressure; our response', prob: 58, up: false },
    { date: 'Mid-month', label: 'India CPI Print', detail: 'Food inflation trajectory; rate path read', prob: 45, up: true },
    { date: 'End of month', label: 'Q2 Earnings - Banks', detail: 'NIM commentary & asset quality update', prob: 83, up: true },
  ]
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Key macro events - near term</p>
      <div className="space-y-4">
        {events.map((e, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full mt-1 ${e.up ? 'bg-blue-500' : 'bg-red-400'}`} />
              {i < events.length - 1 && <div className="flex-1 w-px bg-slate-200 mt-1" />}
            </div>
            <div className="flex-1 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500">{e.date}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${e.up ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-500'}`}>
                  {e.prob}%
                </span>
              </div>
              <p className="text-sm font-medium text-slate-900 mt-0.5">{e.label}</p>
              <p className="text-xs text-slate-500 mt-0.5">{e.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Rate Probability Meter ─────────────────────────────────────────────────
function RateMeter() {
  const slices = [
    { label: 'Hold', pct: 58, color: C.neutral },
    { label: 'Cut 25bp', pct: 34, color: C.up },
    { label: 'Cut 50bp', pct: 8, color: C.series3 },
  ]
  const total = slices.reduce((a, s) => a + s.pct, 0)
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">RBI rate decision - implied probability</p>
      <div className="flex rounded-full overflow-hidden h-4 mb-3">
        {slices.map((s) => (
          <div key={s.label} style={{ width: `${(s.pct / total) * 100}%`, background: s.color }} title={s.label} />
        ))}
      </div>
      <div className="space-y-1.5">
        {slices.map((s) => (
          <div key={s.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
              <span className="text-xs text-slate-600">{s.label}</span>
            </div>
            <span className="text-xs font-bold text-slate-900 tabular-nums">{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Session Stats (Editor's Closing View) ──────────────────────────────────
function SessionStats() {
  const stats = [
    { label: 'Advancers', val: '1,842', sub: '+12% vs avg', up: true },
    { label: 'Decliners', val: '1,204', sub: '-8% vs avg', up: false },
    { label: 'Unchanged', val: '347', sub: 'thin breadth', up: null },
    { label: '52W Highs', val: '84', sub: 'sector mix narrow', up: true },
    { label: '52W Lows', val: '31', sub: 'contained', up: null },
    { label: 'Volume (BSE)', val: '₹42,380 Cr', sub: 'below avg', up: null },
  ]
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Session breadth snapshot</p>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs text-slate-500">{s.label}</p>
            <p className="text-lg font-bold text-slate-900 tabular-nums mt-0.5">{s.val}</p>
            <p className={`text-xs mt-0.5 ${s.up === true ? 'text-green-600' : s.up === false ? 'text-red-500' : 'text-slate-400'
              }`}>
              {s.up === true && '▲ '}{s.up === false && '▼ '}{s.sub}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Module content map with visualizations ─────────────────────────────────
const moduleViz: Record<string, React.ReactNode> = {
  'Market Snapshot': (
    <div className="space-y-3">
      <IndexTrendChart />
      <AsianMarketsGrid />
    </div>
  ),
  'Sector Pulse': <SectorBarChart />,
  'Stock Ideas & Setups': <StockIdeasCard />,
  'Macro Radar': (
    <div className="space-y-3">
      <MacroTimeline />
      <RateMeter />
    </div>
  ),
  "Editor's Closing View": <SessionStats />,
}

// ─── Full Report Modal ──────────────────────────────────────────────────────
function FullReportModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal panel */}
      <motion.div
        className="relative z-10 w-full max-w-3xl mx-4 my-8 bg-white rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white rounded-t-2xl border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
              <FileText size={16} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Morning Edition - Sample</p>
              <p className="text-xs text-slate-500">Illustrative · Not real market data</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">09 Sep 2026 · 7:00 AM IST</span>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close full report"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modules */}
        <div className="divide-y divide-slate-100">
          {moduleNames.map((name, idx) => {
            const content = moduleContent[name]
            return (
              <motion.section
                key={name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 }}
                className="p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900">{name}</h3>
                </div>
                {moduleViz[name]}
                <div className="mt-4 space-y-3">
                  {content?.body.map((para, pi) => (
                    <p key={pi} className="text-sm text-slate-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              </motion.section>
            )
          })}
        </div>

        {/* Footer */}
        <div className="rounded-b-2xl bg-slate-50 border-t border-slate-200 px-6 py-5">
          <p className="text-xs text-slate-500 text-center">
            Illustrative sample - no real market data. Full report delivered to your inbox at 7:00 AM, 1:00 PM, and 6:30 PM IST.
          </p>
          <div className="mt-4 flex justify-center">
            <Button
              className="gap-2 px-6"
              onClick={() => { onClose(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Get the full report
              <ExternalLink size={14} />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Main Previewer ─────────────────────────────────────────────────────────
export function ReportPreviewer() {
  const [active, setActive] = useState(moduleNames[0])
  const [showFullReport, setShowFullReport] = useState(false)

  return (
    <>
      <section id="preview" className="py-16 sm:py-20 lg:py-24" aria-labelledby="preview-heading">
        <Container>
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="preview-heading" className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
              Preview a report
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Click through the modules to see the structure of a typical edition.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Left: module list */}
            <div className="lg:col-span-2 space-y-2" role="listbox" aria-label="Report modules">
              {moduleNames.map((name, i) => {
                const isActive = name === active
                return (
                  <motion.button
                    key={name}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                      ? 'bg-brand-50 text-brand-700 border border-brand-200 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                      }`}
                    onClick={() => setActive(name)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate">{name}</span>
                      {isActive && <ChevronRight size={16} className="shrink-0 text-brand-500" />}
                    </div>
                  </motion.button>
                )
              })}

              {/* CTA */}
              <motion.div
                className="pt-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  className="w-full gap-2 text-sm"
                  onClick={() => setShowFullReport(true)}
                >
                  <ExternalLink size={15} />
                  View full report
                </Button>
                <p className="text-xs text-slate-400 text-center mt-2">
                  All modules · Illustrative sample data
                </p>
              </motion.div>
            </div>

            {/* Right: PDF pane with viz */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="relative rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-brand-500" />

                  <div className="p-5 sm:p-6 border-b border-slate-100">
                    <div className="flex items-center gap-3 text-slate-500 text-sm">
                      <FileText size={16} aria-hidden="true" />
                      <span className="font-medium text-slate-700">{moduleContent[active]?.title}</span>
                    </div>
                  </div>

                  {/* Charts & viz */}
                  <div className="p-5 sm:p-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active + '-viz'}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {moduleViz[active]}
                      </motion.div>
                    </AnimatePresence>

                    {/* Text body */}
                    {/* <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                      {moduleContent[active]?.body.map((para, i) => (
                        <p key={i} className="text-sm text-slate-600 leading-relaxed">{para}</p>
                      ))}
                    </div> */}
                  </div>

                  <div className="px-2 sm:px-6 pb-5 flex items-center gap-2 text-xs text-slate-400">
                    <span>Illustrative sample</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </section>

      {/* Full report modal */}
      <AnimatePresence>
        {showFullReport && (
          <FullReportModal onClose={() => setShowFullReport(false)} />
        )}
      </AnimatePresence>
    </>
  )
}
