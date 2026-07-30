const VARIANTS = {
  gold: 'bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 text-white shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/40',
  white:
    'border border-slate-200 bg-white text-slate-900 shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20',
  outline:
    'border border-slate-300 bg-white/70 text-slate-700 backdrop-blur-sm hover:border-indigo-400 hover:text-indigo-600',
}

function VoteButton({
  onClick,
  children = 'Vote Now',
  variant = 'gold',
  className = '',
  size = 'md',
  disabled = false,
}) {
  const sizing =
    size === 'lg'
      ? 'px-8 py-4 text-base'
      : size === 'sm'
        ? 'px-5 py-2.5 text-sm'
        : 'px-6 py-3 text-sm'

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold tracking-wide transition-all duration-300 hover:animate-vibrate ${sizing} ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default VoteButton
