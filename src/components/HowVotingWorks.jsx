import VoteButton from './VoteButton.jsx'

const STEPS = [
  { n: '01', title: 'Choose Employer', body: 'Select the employers you would like to vote for.' },
  { n: '02', title: 'Answer Questions', body: 'Complete a short survey about your experience and preferences.' },
  { n: '03', title: 'Submit Vote', body: 'Review and submit your vote.' },
  { n: '04', title: "You're Done!", body: 'Thank you! Your vote has been recorded.' },
]

function HowVotingWorks({ onVoteClick }) {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-rose-500">
          Process
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
          How Voting Works
        </h2>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
        <ol className="grid gap-8 sm:grid-cols-2">
          {STEPS.map((step) => (
            <li key={step.n} className="relative pl-14">
              <span className="absolute left-0 top-0 font-display text-4xl font-extrabold text-indigo-200">
                {step.n}
              </span>
              <h3 className="font-display text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-8 text-center shadow-sm backdrop-blur-md transition-all hover:shadow-md lg:w-80">
          <p className="font-display text-2xl font-extrabold text-slate-900">
            Under 3 Minutes
          </p>
          <p className="mt-2 text-sm text-slate-600">
            That&rsquo;s all it takes to make an impact!
          </p>
          <VoteButton onClick={onVoteClick} className="mt-6 w-full">
            Start Voting Now →
          </VoteButton>
        </div>
      </div>
    </section>
  )
}

export default HowVotingWorks
