import { useState } from 'react';
import './App.css';

const features = [
  { icon: '✦', title: 'Move from idea to impact', text: 'Give your team the clarity and tools to ship meaningful work, faster.' },
  { icon: '⌁', title: 'Everything in one flow', text: 'Connect your people, processes, and data without adding more complexity.' },
  { icon: '◈', title: 'Built to scale with you', text: 'Flexible foundations that grow with your business, from first release to global launch.' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#top" aria-label="Northstar home"><span className="brand-mark">N</span><span>northstar</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">☰</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#product" onClick={() => setMenuOpen(false)}>Product</a>
          <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Get started <span>↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot"></span> The operating system for ambition</div>
            <h1>Build what's <em>next.</em></h1>
            <p className="hero-text">Northstar gives modern teams the focus, flexibility, and momentum to turn bold ideas into lasting progress.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">Start building <span>→</span></a><a className="text-link" href="#product">Explore the platform <span>↗</span></a></div>
            <div className="social-proof"><div className="avatar-stack"><span>AM</span><span>JR</span><span>SK</span><span>+</span></div><div><strong>Loved by 2,000+ teams</strong><small>Building a better future, together.</small></div></div>
          </div>
          <div className="hero-visual" aria-label="Product dashboard preview">
            <div className="glow"></div><div className="dashboard-card">
              <div className="dash-top"><span className="mini-logo">N</span><span>Workspace / Overview</span><span className="dash-menu">•••</span></div>
              <div className="dash-heading"><div><small>Good morning, Alex</small><h3>Here's your northstar.</h3></div><span className="date-pill">Today <b>⌄</b></span></div>
              <div className="metric-grid"><div><small>Project momentum</small><strong>84.6%</strong><span className="positive">↗ 12.8%</span></div><div><small>Active initiatives</small><strong>24</strong><span className="muted">This quarter</span></div></div>
              <div className="chart"><div className="chart-labels"><small>Momentum</small><small>100%</small></div><svg viewBox="0 0 400 120" role="img" aria-label="Rising momentum chart"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#c9d9ff" stopOpacity=".7"/><stop offset="100%" stopColor="#c9d9ff" stopOpacity="0"/></linearGradient></defs><path d="M0 105 C35 98 45 92 75 96 S118 70 145 78 S185 57 210 65 S250 39 277 47 S320 22 345 29 S377 10 400 4 V120 H0Z" fill="url(#chartFill)"/><path d="M0 105 C35 98 45 92 75 96 S118 70 145 78 S185 57 210 65 S250 39 277 47 S320 22 345 29 S377 10 400 4" fill="none" stroke="#496ee7" strokeWidth="3"/></svg><div className="chart-axis"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span></div></div>
              <div className="activity"><div><span className="activity-dot blue"></span><span>Launch campaign</span><b>On track</b></div><div><span className="activity-dot gold"></span><span>Q2 product strategy</span><b>In progress</b></div>
              </div></div>
          </div>
        </section>

        <section className="logo-row section-container" aria-label="Customers"><span>TRUSTED BY TEAMS AT</span><strong>vertex</strong><strong>HORIZON</strong><strong className="serif">Lumen</strong><strong>orbit<span className="logo-star">✦</span></strong></section>
        <section className="features section-container" id="product"><div className="section-intro"><div className="eyebrow">Why Northstar</div><h2>Clarity creates <em>momentum.</em></h2><p>When your team can see the whole picture, the best work has room to happen.</p></div><div className="feature-grid" id="solutions">{features.map((feature) => <article className="feature-card" key={feature.title}><span className="feature-icon">{feature.icon}</span><h3>{feature.title}</h3><p>{feature.text}</p><a href="#contact">Learn more <span>→</span></a></article>)}</div></section>
        <section className="quote-section" id="about"><div className="quote-mark">“</div><blockquote>Northstar changed how we think about growth. We don't just move faster — we're moving in the right direction.</blockquote><div className="quote-author"><span className="author-avatar">EC</span><div><strong>Elena Chen</strong><small>VP of Product, Vertex</small></div></div></section>
        <section className="cta-section section-container" id="contact"><div><div className="eyebrow">Your next chapter starts here</div><h2>Make your mark.</h2><p>Join the teams building what the world needs next.</p></div><a className="button button-light" href="mailto:hello@northstar.example">Let's talk <span>↗</span></a></section>
      </main>
      <footer className="footer section-container"><a className="brand" href="#top"><span className="brand-mark">N</span><span>northstar</span></a><span>© 2024 Northstar Labs</span><div><a href="#top">Privacy</a><a href="#top">Terms</a><a href="mailto:hello@northstar.example">hello@northstar.example</a></div></footer>
    </div>
  );
}

export default App;