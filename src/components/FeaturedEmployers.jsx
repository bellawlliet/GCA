import { useState } from 'react'

const EMPLOYERS = [
  { name: 'Maybank', logo: '/logos/maybank.png', bg: '#FFC72C', text: '#000000' },
  { name: 'Petronas', logo: '/logos/petronas.png', bg: '#00543C', text: '#FFFFFF' },
  { name: 'PwC', logo: '/logos/pwc.png', bg: '#F26522', text: '#FFFFFF' },
  { name: 'Maxis', logo: '/logos/maxis.jpg', bg: '#00A651', text: '#FFFFFF' },
  { name: 'Intel', logo: '/logos/intel.png', bg: '#0071C5', text: '#FFFFFF' },
  { name: 'CIMB', logo: '/logos/cimb.png', bg: '#E4002B', text: '#FFFFFF' },
  { name: 'Shell', logo: '/logos/shell.png', bg: '#DD1D21', text: '#FFD500' },
  { name: 'EY', logo: '/logos/ey.png', bg: '#FFE600', text: '#2E2E38' },
]

function BrandBadge({ name, bg, text }) {
  return (
    <span
      style={{ backgroundColor: bg, color: text }}
      className="flex h-8 w-full items-center justify-center rounded-lg font-display text-xs font-extrabold uppercase tracking-wide"
    >
      {name}
    </span>
  )
}

function EmployerLogo({ employer }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="mx-3 flex h-20 w-44 flex-none items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md">
      {failed ? (
        <BrandBadge {...employer} />
      ) : (
        <img
          src={employer.logo}
          alt={`${employer.name} logo`}
          className="mx-auto h-auto max-h-8 w-auto max-w-[100px] object-contain"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

function FeaturedEmployers() {
  const track = [...EMPLOYERS, ...EMPLOYERS]

  return (
    <section className="border-y border-slate-200 bg-white/60 py-10 backdrop-blur-md">
      <h2 className="mx-auto max-w-7xl px-6 font-display text-2xl font-extrabold text-slate-900 lg:px-10">
        Featured Employers
      </h2>

      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {track.map((employer, i) => (
            <EmployerLogo key={`${employer.name}-${i}`} employer={employer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedEmployers
