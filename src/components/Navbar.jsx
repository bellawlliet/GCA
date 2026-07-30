import { useEffect, useState } from 'react'
import VoteButton from './VoteButton.jsx'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Employers', href: '#for-employers' },
  { label: 'Awards', href: '#awards' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar({ onVoteClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [logoFailed, setLogoFailed] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleJump = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-slate-200 bg-white/80 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        {logoFailed ? (
          <span className="font-display text-lg font-extrabold uppercase tracking-wide text-slate-900">
            GCA <span className="text-rose-500">|</span>{' '}
            <span className="hidden text-xs font-mono font-normal uppercase tracking-[0.2em] text-slate-400 sm:inline">
              Graduates&rsquo; Choice Award
            </span>
          </span>
        ) : (
          <img
            src="/gca-logo.png"
            alt="GCA Logo"
            className="h-10 w-auto"
            onError={() => setLogoFailed(true)}
          />
        )}

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleJump(e, link.href)}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <VoteButton onClick={onVoteClick} size="sm">
          Vote Now →
        </VoteButton>
      </nav>
    </header>
  )
}

export default Navbar
