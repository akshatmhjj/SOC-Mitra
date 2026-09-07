export interface ModuleContent {
  title: string
  body: string[]
}

export const moduleContent: Record<string, ModuleContent> = {
  'Market Snapshot': {
    title: 'Market Snapshot',
    body: [
      // 'Benchmark indices are set to open higher, tracking a firm close on Wall Street overnight and steady buying from foreign institutional investors through the last three sessions.',
      // 'Asian markets are trading mixed this morning, offering limited directional cues ahead of today\'s domestic session.',
      // 'Watch the opening 30 minutes closely - early volume will tell us whether yesterday\'s rally has follow-through or fades into a range-bound day.',
    ],
  },
  'Sector Pulse': {
    title: 'Sector Pulse',
    body: [
      // 'Banking and financial services have led gains for a second straight session, helped by falling bond yields and healthy credit growth commentary from lenders.',
      // 'IT stocks are lagging as a stronger rupee weighs on export-linked earnings expectations heading into the next reporting season.',
      // 'Auto and capital goods names are seeing renewed interest ahead of this month\'s sales data - a theme worth tracking into the Afternoon Edition.',
    ],
  },
  'Stock Ideas & Setups': {
    title: 'Stock Ideas & Setups',
    body: [
      // 'A mid-cap private bank is breaking out of a multi-week consolidation range on rising volume - our desk\'s entry zone, target, and stop-loss are laid out in full inside today\'s report.',
      // 'A specialty chemicals name is approaching a key trendline resistance; we outline two scenarios for how to approach it depending on how the level reacts.',
      // 'Risk note: position sizing and stop-loss discipline for both ideas above, plus a reminder on portfolio-level exposure limits for the week.',
    ],
  },
  'Macro Radar': {
    title: 'Macro Radar',
    body: [
      // "The RBI's Monetary Policy Committee meets this week - we break down what a rate hold versus a cut would mean for rate-sensitive sectors like banking, auto, and real estate.",
      // 'US non-farm payrolls are due Friday; a hotter-than-expected print could pressure emerging-market flows in the near term, and we outline how we\'d adjust positioning if it does.',
    ],
  },
  "Editor's Closing View": {
    title: "Editor's Closing View",
    body: [
      // 'Today was a session of quiet consolidation rather than conviction - volumes were thin, breadth was flat, and no single sector took real control. Our read: this is a pause, not a reversal, and we\'d use any weakness at the open tomorrow to add to existing positions rather than chase strength late in the day.',
    ],
  },
}