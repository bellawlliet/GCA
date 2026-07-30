import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import VoteButton from './VoteButton.jsx'

const SECTORS = ['Banking', 'Tech', 'FMCG', 'Energy']

const EMPLOYERS_BY_SECTOR = {
  Banking: ['Maybank', 'CIMB', 'Public Bank', 'HSBC'],
  Tech: ['Intel', 'Dell', 'Microsoft', 'Grab'],
  FMCG: ['Nestle', 'Unilever', 'PwC', 'EY'],
  Energy: ['Petronas', 'Shell', 'TNB', 'AirAsia'],
}

const MAX_CHOICES = 3

const initialState = {
  step: 1,
  sector: null,
  choices: [],
  email: '',
  university: '',
}

function VotingModal({ open, onClose }) {
  const [state, setState] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!open) return
    setState(initialState)
    setSubmitted(false)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const { step, sector, choices, email, university } = state

  const selectSector = (s) =>
    setState((prev) => ({ ...prev, sector: s, choices: [] }))

  const toggleEmployer = (name) =>
    setState((prev) => {
      const already = prev.choices.includes(name)
      if (already) {
        return { ...prev, choices: prev.choices.filter((c) => c !== name) }
      }
      if (prev.choices.length >= MAX_CHOICES) return prev
      return { ...prev, choices: [...prev.choices, name] }
    })

  const goNext = () => setState((prev) => ({ ...prev, step: prev.step + 1 }))
  const goBack = () => setState((prev) => ({ ...prev, step: prev.step - 1 }))

  const canProceedStep1 = Boolean(sector)
  const canProceedStep2 = choices.length > 0
  const canSubmit = email.trim().length > 3 && university.trim().length > 1

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitted(true)
    confetti({
      particleCount: 140,
      spread: 80,
      startVelocity: 45,
      origin: { y: 0.6 },
      colors: ['#4F46E5', '#FF3366', '#F59E0B'],
    })
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Vote for your employer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/20 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close voting modal"
          className="absolute right-5 top-5 text-slate-400 transition-colors hover:text-rose-500"
        >
          ✕
        </button>

        {!submitted && (
          <div className="mb-6 flex items-center gap-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex flex-1 items-center gap-2">
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs ${
                    n <= step
                      ? 'bg-gradient-to-br from-amber-500 via-rose-500 to-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {n}
                </div>
                {n < 3 && (
                  <div
                    className={`h-px flex-1 ${n < step ? 'bg-indigo-500' : 'bg-slate-200'}`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {submitted ? (
          <div className="py-6 text-center">
            <p className="font-display bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 bg-clip-text text-3xl font-extrabold text-transparent">
              Thank you!
            </p>
            <p className="mt-3 text-slate-600">
              Your vote has been recorded. You&rsquo;re helping shape which
              employers earn recognition this year.
            </p>
            <VoteButton
              onClick={onClose}
              variant="outline"
              className="mt-8"
            >
              Done
            </VoteButton>
          </div>
        ) : (
          <>
            {step === 1 && (
              <div>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Choose a sector
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Select the industry you&rsquo;d like to vote in.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {SECTORS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => selectSector(s)}
                      className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                        sector === s
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
                          : 'border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <VoteButton
                  onClick={goNext}
                  variant="gold"
                  className="mt-8 w-full disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={!canProceedStep1}
                >
                  Next →
                </VoteButton>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Pick your top {MAX_CHOICES}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {choices.length}/{MAX_CHOICES} selected in {sector}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {EMPLOYERS_BY_SECTOR[sector].map((name) => {
                    const checked = choices.includes(name)
                    const disabled = !checked && choices.length >= MAX_CHOICES
                    return (
                      <label
                        key={name}
                        className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                          checked
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
                            : disabled
                              ? 'border-slate-100 text-slate-300'
                              : 'border-slate-200 text-slate-600 hover:border-indigo-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          disabled={disabled}
                          onChange={() => toggleEmployer(name)}
                          className="h-4 w-4 accent-[#4F46E5]"
                        />
                        {name}
                      </label>
                    )
                  })}
                </div>
                <div className="mt-8 flex gap-3">
                  <VoteButton onClick={goBack} variant="outline" className="flex-1">
                    ← Back
                  </VoteButton>
                  <VoteButton
                    onClick={goNext}
                    variant="gold"
                    className="flex-1 disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={!canProceedStep2}
                  >
                    Next →
                  </VoteButton>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Almost done
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Your vote stays 100% anonymous — this is only to prevent
                  duplicate voting.
                </p>
                <div className="mt-6 flex flex-col gap-4">
                  <label className="flex flex-col gap-1.5 text-sm text-slate-600">
                    Student email
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) =>
                        setState((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="you@student.edu.my"
                      className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-500"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm text-slate-600">
                    University
                    <input
                      type="text"
                      required
                      value={university}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          university: e.target.value,
                        }))
                      }
                      placeholder="Universiti Malaya"
                      className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-500"
                    />
                  </label>
                </div>
                <div className="mt-8 flex gap-3">
                  <VoteButton
                    onClick={goBack}
                    variant="outline"
                    className="flex-1"
                  >
                    ← Back
                  </VoteButton>
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="flex-1 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:animate-vibrate hover:shadow-xl hover:shadow-rose-500/40 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Submit Vote
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default VotingModal
