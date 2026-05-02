export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Privacy Tools
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Find Working VPN Protocols<br />
          <span className="text-[#58a6ff]">When Governments Block Access</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Crowdsourced database of VPN protocols and servers that actually work in restricted countries — updated in real time by the community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get Access — $15/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span>✓ 50+ countries covered</span>
          <span>✓ Real-time reliability scores</span>
          <span>✓ Community-verified protocols</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Access</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Full database: protocols, servers & configs',
              'Real-time status & uptime monitoring',
              'Submit & vote on working solutions',
              'Country-specific bypass guides',
              'Priority community support',
              'Instant alerts when protocols go down',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Start Now — $15/mo
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Secure checkout via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How is the database kept up to date?',
              a: 'Community members in restricted countries submit and vote on working protocols daily. Our reliability score algorithm weights recent reports more heavily, so stale data is automatically deprioritized.',
            },
            {
              q: 'Which countries are supported?',
              a: 'We currently cover 50+ countries with active censorship, including China, Russia, Iran, UAE, and more. Coverage grows as the community contributes new reports.',
            },
            {
              q: 'Is this legal to use?',
              a: 'VPN Block Bypasser provides information only. Laws around VPN usage vary by country — always check local regulations. We do not operate any VPN servers ourselves.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} VPN Block Bypasser. For informational purposes only.
      </footer>
    </main>
  )
}
