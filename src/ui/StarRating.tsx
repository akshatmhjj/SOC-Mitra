export function StarRating({ rating }: { rating: number }) {
  const filled = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  const empty = 5 - filled - (hasHalf ? 1 : 0)

  return (
    <span className="flex items-center gap-1 text-sm">
      <span className="text-brand-500" aria-hidden="true">
        {'★'.repeat(filled)}
        {hasHalf ? '☆' : ''}
        {'☆'.repeat(empty)}
      </span>
      <span className="text-xs text-slate-500">
        {rating.toFixed(1)}
      </span>
    </span>
  )
}