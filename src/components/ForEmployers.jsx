import { useState } from 'react'

const WHATSAPP_NUMBER = '60123456789'
const WHATSAPP_MESSAGE =
  "Hi GCA Award Secretariat, I'd like to find out more about nominating our organisation for the Graduates' Choice Award."

const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

function NominateIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-6 w-6 text-indigo-600"
      aria-hidden="true"
    >
      <path
        d="M10 11.667a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667Z"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <path
        d="M4.167 16.667c0-2.761 2.612-5 5.833-5s5.833 2.239 5.833 5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M15 3.333l.833 1.667 1.667.834-1.667.833L15 8.333l-.833-1.666-1.667-.834 1.667-.833L15 3.333Z"
        fill="currentColor"
      />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-6 w-6 text-indigo-600"
      aria-hidden="true"
    >
      <path
        d="M10 3.333v9.167m0 0 3.333-3.333M10 12.5 6.667 9.167"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.333 14.167v.833c0 1.15.934 2.083 2.084 2.083h9.166c1.15 0 2.084-.933 2.084-2.083v-.833"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-6 w-6 text-indigo-600"
      aria-hidden="true"
    >
      <path
        d="M3.333 16.667 4.4 12.9a6.667 6.667 0 1 1 2.55 2.516l-3.617 1.251Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 8.75c0 2.071 1.679 3.75 3.75 3.75.417 0 .625-.208.625-.625v-.417a.417.417 0 0 0-.32-.405l-1.163-.29a.417.417 0 0 0-.44.16l-.202.29a3.75 3.75 0 0 1-1.583-1.583l.29-.202a.417.417 0 0 0 .16-.44l-.29-1.163a.417.417 0 0 0-.405-.32H7.917c-.417 0-.417.208-.417.625Z"
        fill="currentColor"
      />
    </svg>
  )
}

function NominationModal({ open, onClose }) {
  const initial = {
    companyName: '',
    industry: '',
    contactName: '',
    workEmail: '',
  }
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)

  if (!open) return null

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const canSubmit =
    form.companyName.trim() &&
    form.industry.trim() &&
    form.contactName.trim() &&
    form.workEmail.trim()

  const handleClose = () => {
    setForm(initial)
    setSubmitted(false)
    onClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitted(true)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Nominate your organisation"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/20 sm:p-8"
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close nomination form"
          className="absolute right-5 top-5 text-slate-400 transition-colors hover:text-rose-500"
        >
          ✕
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <p className="font-display bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 bg-clip-text text-2xl font-extrabold text-transparent">
              Nomination received!
            </p>
            <p className="mt-3 text-slate-600">
              Thanks for nominating {form.companyName}. The Award Secretariat
              will reach out to {form.contactName} shortly.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-8 rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all hover:border-indigo-400 hover:text-indigo-600"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 className="font-display text-2xl font-bold text-slate-900">
              Nominate your organisation
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Tell us about your company and we&rsquo;ll follow up with the
              nomination process.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <label className="flex flex-col gap-1.5 text-sm text-slate-600">
                Company name
                <input
                  type="text"
                  required
                  value={form.companyName}
                  onChange={update('companyName')}
                  placeholder="Acme Sdn Bhd"
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm text-slate-600">
                Industry
                <input
                  type="text"
                  required
                  value={form.industry}
                  onChange={update('industry')}
                  placeholder="Banking & Finance"
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm text-slate-600">
                Contact name
                <input
                  type="text"
                  required
                  value={form.contactName}
                  onChange={update('contactName')}
                  placeholder="Jane Tan"
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm text-slate-600">
                Work email
                <input
                  type="email"
                  required
                  value={form.workEmail}
                  onChange={update('workEmail')}
                  placeholder="jane@company.com"
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="mt-8 w-full rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:animate-vibrate hover:shadow-xl hover:shadow-rose-500/40 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit Nomination Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

function ForEmployers() {
  const [nominationOpen, setNominationOpen] = useState(false)

  return (
    <section
      id="for-employers"
      className="border-y border-slate-200 bg-indigo-50/40 px-6 py-12 lg:px-10 lg:py-16"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
          For Employers & Organisations
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Position your brand as an employer of choice among 200,000+
          university graduates across Malaysia.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-md transition-all hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
            <NominateIcon />
          </div>
          <h3 className="font-display mt-5 text-lg font-bold text-slate-900">
            Nominate Your Organisation
          </h3>
          <p className="mt-2 flex-1 text-sm text-slate-500">
            Put your company forward for recognition as one of Malaysia&rsquo;s
            most graduate-friendly employers.
          </p>
          <button
            type="button"
            onClick={() => setNominationOpen(true)}
            className="mt-6 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:animate-vibrate hover:shadow-xl hover:shadow-rose-500/40"
          >
            Submit Nomination Inquiry
          </button>
        </div>

        <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-md transition-all hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
            <DownloadIcon />
          </div>
          <h3 className="font-display mt-5 text-lg font-bold text-slate-900">
            Download Employer Info Kit
          </h3>
          <p className="mt-2 flex-1 text-sm text-slate-500">
            Get eligibility criteria, timelines, and sponsorship tiers in one
            document.
          </p>
          <a
            href={`${import.meta.env.BASE_URL}GCA-Employer-Info-Kit.pdf`}
            download="GCA-Employer-Info-Kit.pdf"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all hover:border-indigo-400 hover:text-indigo-600"
          >
            Download PDF Kit (2.4 MB)
          </a>
        </div>

        <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-md transition-all hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
            <WhatsAppIcon />
          </div>
          <h3 className="font-display mt-5 text-lg font-bold text-slate-900">
            Speak with Award Secretariat
          </h3>
          <p className="mt-2 flex-1 text-sm text-slate-500">
            Have questions about partnership or nomination? Chat directly with
            our team.
          </p>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/40"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>

      <NominationModal
        open={nominationOpen}
        onClose={() => setNominationOpen(false)}
      />
    </section>
  )
}

export default ForEmployers
