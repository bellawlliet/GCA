import { useState } from 'react'

const FAQS = [
  {
    q: 'Who can vote?',
    a: 'Any current student at a Malaysian university or college can vote in the Graduates’ Choice Award.',
  },
  {
    q: 'Is my vote anonymous?',
    a: 'Yes. Your responses are never shared with employers and are only used in aggregate to calculate results.',
  },
  {
    q: 'How many employers can I vote for?',
    a: 'You can select up to 3 employers within your chosen sector for this voting cycle.',
  },
  {
    q: 'How long does it take?',
    a: 'Most students complete the survey in under 3 minutes.',
  },
  {
    q: 'Can alumni participate?',
    a: 'GCA voting is currently open to enrolled students only, but alumni feedback may open in future cycles.',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-lg font-semibold text-slate-900">
          {item.q}
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
        <p className="overflow-hidden text-sm leading-relaxed text-slate-600">
          {item.a}
        </p>
      </div>
    </div>
  )
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-rose-500">
          Support
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white/80 px-6 shadow-sm backdrop-blur-md sm:px-8">
        {FAQS.map((item, i) => (
          <FAQItem
            key={item.q}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  )
}

export default FAQAccordion
