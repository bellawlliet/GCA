import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import MetricsBar from './components/MetricsBar.jsx'
import WhatIsGCA from './components/WhatIsGCA.jsx'
import ValueProposition from './components/ValueProposition.jsx'
import AwardsAccordion from './components/AwardsAccordion.jsx'
import HowVotingWorks from './components/HowVotingWorks.jsx'
import FeaturedEmployers from './components/FeaturedEmployers.jsx'
import ForEmployers from './components/ForEmployers.jsx'
import Testimonials from './components/Testimonials.jsx'
import CalloutBanner from './components/CalloutBanner.jsx'
import FAQAccordion from './components/FAQAccordion.jsx'
import Footer from './components/Footer.jsx'
import VotingModal from './components/VotingModal.jsx'

function App() {
  const [isVotingOpen, setVotingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-indigo-50/30 to-white text-slate-900">
      <Navbar onVoteClick={() => setVotingOpen(true)} />
      <main>
        <Hero onVoteClick={() => setVotingOpen(true)} />
        <MetricsBar />
        <WhatIsGCA />
        <ValueProposition />
        <AwardsAccordion />
        <HowVotingWorks onVoteClick={() => setVotingOpen(true)} />
        <FeaturedEmployers />
        <ForEmployers />
        <Testimonials />
        <CalloutBanner onVoteClick={() => setVotingOpen(true)} />
        <FAQAccordion />
      </main>
      <Footer />

      <VotingModal open={isVotingOpen} onClose={() => setVotingOpen(false)} />
    </div>
  )
}

export default App
