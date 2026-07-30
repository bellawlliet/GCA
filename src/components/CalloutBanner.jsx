import GradientBlobs from './GradientBlobs.jsx'
import VoteButton from './VoteButton.jsx'

function CalloutBanner({ onVoteClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-900 to-rose-600 px-6 py-12 lg:px-10 lg:py-16">
      <GradientBlobs tone="dark" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Your Vote Shapes Tomorrow&rsquo;s Best Employers.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-indigo-100/80">
          Join thousands of students in recognizing outstanding employers.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <VoteButton onClick={onVoteClick} variant="white" size="lg">
            Vote Now →
          </VoteButton>
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-100/60">
            It only takes 3 minutes!
          </p>
        </div>
      </div>
    </section>
  )
}

export default CalloutBanner
