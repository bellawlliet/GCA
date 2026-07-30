import { useState } from 'react'

const AWARDS = [
  {
    title: "Ranked 1st Page on Google",
    items: [
      'Award-Winning Graduate Employers',
      'Best Graduate Employers in APAC & Malaysia',
      "Graduates' Choice Award & Graduates' Choice of Employer",
      'Graduates’ Preferred Employers & Graduate Employers in Malaysia',
      'Most Preferred Employers & Top Graduate Employers in Malaysia',
    ],
  },
  {
    title: 'For Organisations',
    items: [
      'Guests of Honour & Board of Audit Members',
      'Award Secretariat, Concept & Timeline',
      'Annual Reports & Publications',
      'Download Promotional Materials & Award Digital Assets',
    ],
  },
  {
    title: 'For University Students',
    items: [
      'Vote for Best Graduate Employers',
      'Working with Talentbank',
      'Student Ambassador & Internship Opportunities',
    ],
  },
  {
    title: 'Our Employability Ecosystem',
    items: [
      'Most Happy Workplaces Accreditation & Talentbank',
      'Talentbank Career Fair, National Career Fair & Regional Fairs (Penang, TES, Engineering, Tech)',
      'Graduate Recruitment Insights & National Graduate Employability Index',
    ],
  },
]

function AwardItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-lg font-semibold text-slate-900">
          {item.title}
        </span>
        <span
          className={`shrink-0 font-mono text-xl text-indigo-600 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-2 overflow-hidden">
          {item.items.map((entry) => (
            <li
              key={entry}
              className="flex items-start gap-2 text-sm leading-relaxed text-slate-600"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
              <span>{entry}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function AwardsAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="awards" className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-rose-500">
          Recognition
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Graduates' Choice Award Initiatives & Ecosystem
        </h2>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white/80 px-6 shadow-sm backdrop-blur-md sm:px-8">
        {AWARDS.map((item, i) => (
          <AwardItem
            key={item.title}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  )
}

export default AwardsAccordion
