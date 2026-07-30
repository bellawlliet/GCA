const STATS = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '70+', label: 'Universities' },
  { value: '50,000+', label: 'Student Votes' },
  { value: '150+', label: 'Employers' },
]

const UNIVERSITIES = ['UM', 'UKM', 'UiTM', 'UTM']

function MetricsBar() {
  return (
    <section className="border-y border-slate-200 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center lg:text-left">
              <dt
                className={`font-display text-3xl font-extrabold sm:text-4xl ${
                  ['text-indigo-600', 'text-rose-500', 'text-amber-500', 'text-slate-900'][i]
                }`}
              >
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-slate-500 sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col items-center gap-4 border-t border-slate-200 pt-8 lg:items-end lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Trusted by Leading Universities
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {UNIVERSITIES.map((uni) => (
              <span
                key={uni}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 font-mono text-sm font-semibold text-slate-700 shadow-sm"
              >
                {uni}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MetricsBar
