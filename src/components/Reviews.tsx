import { motion } from 'framer-motion'
import { Container } from '@/ui/Container'
import { reviews } from '@/data/reviews'
import { StarRating } from '@/ui/StarRating'

export function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24" aria-labelledby="reviews-heading">
      <Container>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="reviews-heading" className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
            What subscribers say
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Honest feedback from traders, portfolio managers, and long-term investors.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.article
              key={review.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand-200 hover:shadow-md flex flex-col justify-between"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
            >
              <div>
                <StarRating rating={review.rating} />
                <p className="mt-4 leading-relaxed text-sm text-slate-800">
                  “{review.quote}”
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="h-10 w-10 shrink-0 rounded-full bg-brand-100 flex items-center justify-center font-display font-bold text-brand-700 text-base">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-500">
                    {review.role}, {review.city} · since {review.since}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}