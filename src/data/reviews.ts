export interface Review {
  name: string
  role: string
  city: string
  since: number
  rating: number
  quote: string
  featured?: boolean
}

export const reviews: Review[] = [
  {
    name: 'Rohit Malhotra',
    role: 'Portfolio Manager',
    city: 'Mumbai',
    since: 2021,
    rating: 5,
    quote: 'The evening edition alone is worth the subscription. I stopped checking six different apps and just wait for the 6:30 read before I plan the next day.',
    featured: true,
  },
  {
    name: 'Ananya Kulkarni',
    role: 'Independent Trader',
    city: 'Pune',
    since: 2022,
    rating: 5,
    quote: 'Macro Radar flagged the last two RBI decisions days before they moved my positions. That\'s the whole reason I renewed for a second year without thinking twice.',
  },
  {
    name: 'Vikram Rathi',
    role: 'Chartered Accountant & Investor',
    city: 'Indore',
    since: 2020,
    rating: 5,
    quote: 'I don\'t have time to track markets between client meetings. Three short reads a day fit into gaps in my schedule that a live terminal never could.',
  },
  {
    name: 'Meera Iyer',
    role: 'Retail Investor',
    city: 'Bengaluru',
    since: 2023,
    rating: 4,
    quote: 'Simple, no jargon, exactly three times a day. Wish the mobile PDF viewer was a touch faster, but the content is excellent.',
  },
  {
    name: 'Arjun Deshpande',
    role: 'Family Office Analyst',
    city: 'Bhopal',
    since: 2019,
    rating: 5,
    quote: 'We use the 12-month outlook internally to sanity-check our own thesis before quarterly allocation calls. It\'s become a standing agenda item.',
  },
  {
    name: 'Priya Nair',
    role: 'First-time Investor',
    city: 'Chennai',
    since: 2024,
    rating: 5,
    quote: 'I started investing eight months ago and this is the only research I\'ve found that explains the \'why\' behind a move, not just the move itself.',
  },
]