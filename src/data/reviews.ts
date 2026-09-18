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
    rating: 5,
    quote: 'Simple, no jargon, exactly three times a day. The insights are clear, highly structured, and directly actionable for my long-term portfolio.',
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
  {
    name: 'Siddharth Sen',
    role: 'Full-Time Equity Trader',
    city: 'Kolkata',
    since: 2021,
    rating: 5,
    quote: 'The Midday update gives me the clarity I need when intraday noise is at its peak. It has saved me from multiple impulsive decisions.',
  },
  {
    name: 'Kavita Menon',
    role: 'Wealth Advisor',
    city: 'Hyderabad',
    since: 2022,
    rating: 5,
    quote: 'My clients appreciate the macroeconomic clarity I bring to our portfolio reviews, much of which is distilled straight from the daily briefs.',
  },
  {
    name: 'Aditya Verma',
    role: 'Quant Analyst',
    city: 'Delhi NCR',
    since: 2020,
    rating: 5,
    quote: 'Data-driven, objective, and timely. No hype, just clear actionable levels that make prep for the trading session seamless.',
  },
]