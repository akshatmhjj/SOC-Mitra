export interface Stat {
  value: number
  suffix: string
  label: string
}

export const stats: Stat[] = [
  { value: 50000, suffix: '+', label: 'active subscribers' },
  { value: 10, suffix: '', label: 'years in publication' },
  { value: 94, suffix: '%', label: 'annual renewal rate' },
  { value: 3, suffix: '', label: 'editions daily, five days a week' },
  { value: 4.8, suffix: '/5', label: 'average rating' },
  { value: 38000, suffix: '+', label: 'reports delivered to date' },
]