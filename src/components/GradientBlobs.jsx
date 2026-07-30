function GradientBlobs({ className = '', tone = 'light' }) {
  const palette =
    tone === 'hero'
      ? ['bg-amber-400', 'bg-fuchsia-500', 'bg-indigo-600']
      : tone === 'dark'
        ? ['bg-indigo-500', 'bg-rose-500', 'bg-amber-400']
        : ['bg-indigo-400', 'bg-rose-400', 'bg-amber-300']

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div
        className={`absolute -top-24 -left-16 h-72 w-72 rounded-full opacity-30 blur-3xl animate-blob ${palette[0]}`}
      />
      <div
        className={`absolute top-1/3 -right-20 h-80 w-80 rounded-full opacity-30 blur-3xl animate-blob ${palette[1]}`}
        style={{ animationDelay: '4s' }}
      />
      <div
        className={`absolute -bottom-24 left-1/3 h-72 w-72 rounded-full opacity-25 blur-3xl animate-blob ${palette[2]}`}
        style={{ animationDelay: '8s' }}
      />
    </div>
  )
}

export default GradientBlobs
