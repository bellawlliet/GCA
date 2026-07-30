import GradientBlobs from './GradientBlobs.jsx'
import VoteButton from './VoteButton.jsx'

const BADGES = [
  { icon: '⚡', label: 'Takes only 3 minutes' },
  { icon: '🔒', label: '100% Anonymous & Secure' },
  { icon: '🎁', label: 'Win exciting prizes!' },
]

const AVATARS = [
  { initials: 'AR', gradient: 'from-indigo-500 to-rose-500' },
  { initials: 'DL', gradient: 'from-rose-500 to-amber-400' },
  { initials: 'NF', gradient: 'from-amber-400 to-indigo-500' },
  { initials: 'KM', gradient: 'from-indigo-500 to-amber-400' },
  { initials: 'SY', gradient: 'from-rose-500 to-indigo-500' },
]

function Star() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 text-amber-500"
    >
      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7L10 1.5z" />
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-7 w-7 text-amber-400"
      aria-hidden="true"
    >
      <path
        d="M7 4h10v4a5 5 0 0 1-10 0V4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 5H4v1a3 3 0 0 0 3 3M17 5h3v1a3 3 0 0 1-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13v3m0 0c-1.933 0-3.5.895-3.5 2v1h7v-1c0-1.105-1.567-2-3.5-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FloatingCard({ children, className = '' }) {
  return (
    <div
      className={`pointer-events-auto flex w-48 flex-col gap-2 rounded-3xl border border-white/15 bg-white/10 p-5 text-left shadow-xl backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  )
}

function Hero({ onVoteClick }) {
  const scrollToAbout = () =>
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative isolate flex items-center overflow-hidden bg-slate-950 px-6 py-16 lg:px-10 md:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-90"
        style={{
          backgroundImage:
            'radial-gradient(at 15% 20%, rgba(245,158,11,0.35) 0px, transparent 50%), radial-gradient(at 85% 25%, rgba(217,70,239,0.28) 0px, transparent 50%), radial-gradient(at 50% 85%, rgba(79,70,229,0.35) 0px, transparent 55%)',
        }}
      />
      <GradientBlobs tone="hero" />

      <div className="pointer-events-none absolute inset-y-0 left-2 hidden items-center xl:left-6 xl:flex 2xl:left-12">
        <FloatingCard>
          <TrophyIcon />
          <p className="text-sm font-semibold leading-snug text-white">
            Malaysia&rsquo;s #1 Employer Award
          </p>
        </FloatingCard>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-2 hidden items-center xl:right-6 xl:flex 2xl:right-12">
        <FloatingCard>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Live
            </span>
          </span>
          <p className="text-sm font-semibold leading-snug text-white">
            100% Student Voted
          </p>
        </FloatingCard>
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          The Employers Students{' '}
          <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 bg-clip-text text-transparent">
            Trust Most.
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-100/90 sm:text-lg">
          GCA is Malaysia&rsquo;s largest student-voted employer award. Your
          voice recognizes the companies that create meaningful careers and
          better workplaces.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {BADGES.map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white shadow-sm backdrop-blur-md"
            >
              <span aria-hidden="true">{badge.icon}</span>
              {badge.label}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <VoteButton onClick={onVoteClick} size="lg">
            Vote Now →
          </VoteButton>
          <button
            type="button"
            onClick={scrollToAbout}
            className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white shadow-sm backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/20"
          >
            Learn More
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <div className="flex -space-x-3">
            {AVATARS.map((avatar, i) => (
              <div
                key={avatar.initials}
                style={{ zIndex: AVATARS.length - i }}
                className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br font-mono text-xs font-bold text-white ring-4 ring-white ${avatar.gradient}`}
              >
                {avatar.initials}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-1.5 sm:items-start">
            <div className="flex items-center gap-0.5 rounded-full border border-amber-200 bg-white/70 px-3 py-1.5 shadow-[0_0_20px_-2px_rgba(245,158,11,0.45)] backdrop-blur-md">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <p className="text-sm font-medium text-gray-100">
              Join 50,000+ students who&rsquo;ve already voted
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
