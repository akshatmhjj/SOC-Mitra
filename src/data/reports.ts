export interface ReportCard {
  title: string
  description: string
  cta: string
}

export const reports: ReportCard[] = [
  {
    title: 'Monthly outlook',
    description:
      'A 30-day view of earnings season, RBI policy shifts, rate cycles and capital flows - so you know what to expect before the month starts.',
    cta: 'Read monthly outlook',
  },
  {
    title: '3-Month outlook',
    description:
      'Tracks the next quarter of macro events, sector rotation signals and policy inflection points across markets and currencies.',
    cta: 'Read 3-month outlook',
  },
  {
    title: '12-Month outlook',
    description:
      'Annual framework covering rate cycles, structural capital-flow shifts and sector-level themes that matter for the next twelve months.',
    cta: 'Read 12-month outlook',
  },
]