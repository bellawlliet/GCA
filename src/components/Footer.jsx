import { useState } from 'react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Employers', href: '#for-employers' },
  { label: 'FAQ', href: '#faq' },
]

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/gcaaward',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
        <path d="M13.333 3.333h-1.666a3.333 3.333 0 0 0-3.334 3.334v1.666H6.667V11h1.666v5.667h2.5V11h1.834l.333-2.667h-2.167V6.667c0-.46.373-.834.833-.834h1.667V3.333Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/graduateschoiceaward/',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
        <path d="M5.833 6.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334ZM4.167 8.333h3.333v8.334H4.167V8.333ZM10 8.333h3.194v1.14h.046c.445-.797 1.532-1.64 3.153-1.64 3.373 0 3.994 2.108 3.994 4.85v4.984h-3.334v-4.418c0-1.054-.02-2.41-1.552-2.41-1.554 0-1.792 1.145-1.792 2.332v4.496H10V8.333Z" />
      </svg>
    ),
  },
]

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  const handleJump = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-200 bg-white/70 px-6 py-12 backdrop-blur-md lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-sm">
          <img src="/gca-badge.png" alt="GCA Award Badge" className="w-48 h-auto" />
          <p className="mt-3 text-sm text-slate-500">
            Malaysia&rsquo;s largest student-voted employer award — recognizing
            companies that create meaningful careers.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleJump(e, link.href)}
                  className="text-sm text-slate-500 transition-colors hover:text-indigo-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-indigo-400 hover:text-indigo-600"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-sm lg:text-right">
          <h3 className="font-display text-lg font-bold text-slate-900">
            Stay in the loop
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Get updates on voting windows and award ceremonies.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col gap-3 sm:flex-row lg:justify-end"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:animate-vibrate hover:shadow-xl hover:shadow-rose-500/40"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="mt-2 text-sm font-medium text-indigo-600">
              Subscribed!
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Graduates&rsquo; Choice Award. All rights
        reserved.
      </div>
    </footer>
  )
}

export default Footer
