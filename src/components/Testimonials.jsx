import { useEffect, useState } from 'react'

const TESTIMONIALS = [
  {
    quote:
      'GCA helped me discover employers that genuinely invest in graduates and offer great opportunities.',
    name: 'Aisyah Rahman',
    role: 'Engineering Student',
    org: 'UiTM',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    quote:
      'Being recognized by students through GCA has strengthened our employer brand and helped us attract top talent.',
    name: 'James Tan',
    role: 'HR Director',
    org: 'Maybank',
    photo:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    quote:
      'The voting process was quick, easy, and I love that my voice can make a real difference!',
    name: 'Daniel Lim',
    role: 'Computer Science Student',
    org: 'Universiti Malaya',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    quote:
      'GCA gives our career services team credible, student-driven data on which employers actually deliver for graduates.',
    name: 'Dr. Sarah Wong',
    role: 'University Delegate',
    org: 'Career Services, USM',
    photo:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80',
  },
]

function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % TESTIMONIALS.length),
      6000,
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-rose-500">
          Voices
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
          What Students &amp; Employers Say
        </h2>
      </div>

      <div className="relative mt-8 min-h-[260px]">
        {TESTIMONIALS.map((t, i) => (
          <blockquote
            key={t.name + i}
            aria-hidden={i !== active}
            className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 px-8 py-10 text-center shadow-sm backdrop-blur-md transition-opacity duration-500 hover:shadow-md ${
              i === active ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <img
              src={t.photo}
              alt={t.name}
              className="h-16 w-16 rounded-full object-cover shadow-sm ring-4 ring-white"
              loading="lazy"
            />
            <p className="mt-5 font-display text-xl leading-relaxed text-slate-800 sm:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-5 flex flex-col items-center gap-2">
              <span className="font-semibold text-indigo-600">{t.name}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                {t.role} · {t.org}
              </span>
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.name + i}
            type="button"
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? 'w-6 bg-indigo-600' : 'w-2 bg-slate-300'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
