const STUDENT_POINTS = [
  'Reward great employers who invest in graduates',
  'Help future students make informed career choices',
  'Encourage companies to build better workplaces',
  'Make your voice count and drive positive change',
]

const EMPLOYER_POINTS = [
  {
    title: 'Enhance Employer Brand',
    body: 'Build a strong reputation among future talents',
  },
  {
    title: 'Attract Top Graduate Talent',
    body: 'Stand out in a competitive hiring landscape',
  },
  {
    title: 'Independent & Credible Recognition',
    body: 'Recognized by the people who matter most',
  },
  {
    title: 'Valuable Insights',
    body: 'Understand student preferences and expectations',
  },
]

function GraduationCapIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 text-indigo-600"
      aria-hidden="true"
    >
      <path
        d="M10 3.333 1.667 7.5 10 11.667 18.333 7.5 10 3.333Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M5 9.583v3.75c0 1.15 2.239 2.084 5 2.084s5-.933 5-2.084v-3.75"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M18.333 7.5v5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 text-indigo-600"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="6.667"
        width="15"
        height="9.167"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <path
        d="M7.083 6.667V5a1.667 1.667 0 0 1 1.667-1.667h2.5A1.667 1.667 0 0 1 12.917 5v1.667"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M2.5 10.833h15"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconChip({ icon }) {
  return (
    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100">
      {icon}
    </span>
  )
}

function ValueProposition() {
  return (
    <section className="border-y border-slate-200 bg-indigo-50/40 px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-md transition-all hover:shadow-md sm:p-10">
          <h3 className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Why Your Vote Matters
          </h3>
          <ul className="mt-6 flex flex-col gap-4">
            {STUDENT_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <IconChip icon={<GraduationCapIcon />} />
                <span className="pt-1 text-slate-600">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-md transition-all hover:shadow-md sm:p-10">
          <h3 className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Why Employers Participate
          </h3>
          <ul className="mt-6 flex flex-col gap-4">
            {EMPLOYER_POINTS.map((point) => (
              <li key={point.title} className="flex items-start gap-3">
                <IconChip icon={<BriefcaseIcon />} />
                <span className="pt-0.5">
                  <span className="font-medium text-slate-900">
                    {point.title}
                  </span>
                  <span className="block text-sm text-slate-500">
                    {point.body}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ValueProposition
