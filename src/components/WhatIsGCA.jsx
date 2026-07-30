const CARDS = [
  {
    step: '01',
    title: 'Students Vote',
    body: 'Students from universities across Malaysia vote for employers they admire and would love to work for.',
  },
  {
    step: '02',
    title: 'Independent Evaluation',
    body: 'Votes are independently verified and evaluated to ensure fairness and credibility.',
  },
  {
    step: '03',
    title: 'Top Employers Recognized',
    body: 'Top employers are awarded based on student votes and celebrated at the GCA Awards Ceremony.',
  },
]

function WhatIsGCA() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-rose-500">
          About
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
          What is GCA?
        </h2>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-md transition-all hover:shadow-md"
          >
            <span className="font-mono text-sm text-indigo-500/70">
              {card.step}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-slate-900">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhatIsGCA
