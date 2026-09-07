import { motion } from 'framer-motion'

export function Button({
  children,
  variant = 'default',
  onClick,
  disabled,
  className,
  ...props
}: {
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'ghost'
  onClick?: () => void
  disabled?: boolean
  className?: string
}) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2'

  const variantClasses = {
    default: 'bg-brand-600 text-white hover:bg-brand-500 disabled:opacity-50',
    outline: 'border border-slate-400 text-slate-700 hover:bg-slate-50 disabled:opacity-50',
    ghost: 'hover:bg-slate-50 hover:text-slate-600 disabled:opacity-50',
  }

  return (
    <motion.button
      type="button"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  )
}