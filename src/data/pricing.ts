export interface PricingTier {
  name: string
  price: number
  compareAt: number
  badge?: string
  features: string[]
  cta: string
  featured?: boolean
  custom?: boolean
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Essential [SOC Mera Saathi]',
    price: 1599,
    compareAt: 1999,
    features: [
      'Morning Market Brief',
      'Special Diwali Picks Reports',
      'PDF delivered by 8:30 AM',
      'Folio Report upto ₹1 Lakh',
    ],
    cta: 'Subscribe Essential',
  },
  {
    name: 'Professional [SOC Mera Saarthi]',
    price: 2099,
    compareAt: 2599,
    features: [
      'Morning Market Brief',
      'Post Market Brief',
      'Special Diwali Picks Reports',
      'PDFs delivered by 8:30 AM and 7:00 PM',
      'Folio Report upto ₹3 Lakh',
    ],
    cta: 'Subscribe Professional',
  },
  {
    name: 'Executive [SOC Mera Parivaar]',
    price: 2599,
    compareAt: 2999,
    badge: 'Most subscribed',
    featured: true,
    features: [
      'Morning Market Brief',
      'Mid Market Brief',
      'Post Market Brief',
      'Special Diwali and Holi Picks Reports',
      'PDFs delivered by 8:30 AM, 2:15 PM and 7:00 PM',
      'Folio Report upto ₹5 Lakh',
    ],
    cta: 'Subscribe Executive',
  },
]

// ─── Comparison Table Data ──────────────────────────────────────────────────
export type CellValue = boolean | string

export interface ComparisonRow {
  group: string
  feature: string
  essential: CellValue
  professional: CellValue
  executive: CellValue
}

export const comparisonRows: ComparisonRow[] = [
  // ─── Editions ────────────────────────────────────────────────────────────
  {
    group: 'Editions',
    feature: 'Morning Market Brief',
    essential: true,
    professional: true,
    executive: true,
  },
  {
    group: 'Editions',
    feature: 'Mid Market Brief',
    essential: false,
    professional: false,
    executive: true,
  },
  {
    group: 'Editions',
    feature: 'Post Market Brief',
    essential: false,
    professional: true,
    executive: true,
  },

  // ─── Special reports ─────────────────────────────────────────────────────
  {
    group: 'Special reports',
    feature: 'Special Diwali Picks Reports',
    essential: true,
    professional: true,
    executive: true,
  },
  {
    group: 'Special reports',
    feature: 'Special Holi Picks Reports',
    essential: false,
    professional: false,
    executive: true,
  },

  // ─── Delivery ───────────────────────────────────────────────────────────
  {
    group: 'Delivery',
    feature: 'Morning PDF delivery',
    essential: 'By 8:30 AM',
    professional: 'By 8:30 AM',
    executive: 'By 8:30 AM',
  },
  {
    group: 'Delivery',
    feature: 'Mid-day PDF delivery',
    essential: false,
    professional: false,
    executive: 'By 2:15 PM',
  },
  {
    group: 'Delivery',
    feature: 'Evening PDF delivery',
    essential: false,
    professional: 'By 7:00 PM',
    executive: 'By 7:00 PM',
  },

  // ─── Folio report ──────────────────────────────────────────────────────
  {
    group: 'Folio Report',
    feature: 'Portfolio coverage',
    essential: 'Upto ₹1 Lakh',
    professional: 'Upto ₹3 Lakh',
    executive: 'Upto ₹5 Lakh',
  },
]

export const bestFor = [
  {
    tier: 'Essential',
    label: 'SOC Mera Saathi',
    summary: 'Best for investors who want a focused pre-market read to start their day right.',
    ideal: 'Self-directed investors',
  },
  {
    tier: 'Professional',
    label: 'SOC Mera Saarthi',
    summary: 'Best for active readers who want both the morning and evening editions for a complete view.',
    ideal: 'Traders & active investors',
    featured: false,
  },
  {
    tier: 'Executive',
    label: 'SOC Mera Parivaar',
    summary: 'Best for serious market participants who want all three editions plus seasonal picks and the widest folio coverage.',
    ideal: 'Serious traders & family investors',
    featured: true,
  },
]