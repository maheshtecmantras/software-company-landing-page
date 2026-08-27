import { useState } from 'react';

const features = [
  { icon: '✦', title: 'One calm workspace', text: 'Bring your product, customer, and engineering teams into one clear operating rhythm.' },
  { icon: '↗', title: 'Move with momentum', text: 'Turn bold ideas into shipped work with workflows that keep everyone focused on impact.' },
  { icon: '◌', title: 'See the full picture', text: 'Live insights and thoughtful reporting help you make confident decisions, every day.' }
];

const logos = ['LUMA', 'orbit', 'BOLT', 'Sonder', 'vertex'];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">✦</span>
          <span>northstar</span>
        </a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#product" onClick={closeMenu}>Product</a>
          <a href="#company" onClick={closeMenu}>Company</a>
          <a href="#stories" onClick={closeMenu}>Stories</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Book a demo <Arrow /></a>
        </div>
      </nav>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot"></span> The operating system for bold teams</div>
            <h1>Build what's <em>next.</em></h1>
            <p className="hero-text">Northstar gives ambitious teams the clarity, tools, and momentum to turn big ideas into meaningful progress.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Start building <Arrow /></a>
              <a className="button button-ghost" href="#product"><span className="play">▶</span> See how it works</a>
            </div>
            <p className="microcopy">No credit card required <span>·</span> Set up in minutes</p>
          </div>
          <div className="hero-visual" aria-label="Product dashboard preview">
            <div className="orb orb-one"></div><div className="orb orb-two"></div>
            <div className="dashboard-card">
              <div className="dash-top"><span className="mini-brand">✦ northstar</span><span className="status-pill"><i></i> On track</span></div>
              <div className="dash-heading"><div><span className="dash-label">TEAM MOMENTUM</span><strong>83.4%</strong></div><span className="growth">↗ 12.8%</span></div>
              <div className="chart"><span className="chart-line"></span><i className="point p1"></i><i className="point p2"></i><i className="point p3"></i><i className="point p4"></i><i className="point p5"></i></div>
              <div className="chart-labels"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span></div>
              <div className="dash-bottom"><span>12 projects moving forward</span><span className="avatar-stack"><b>JD</b><b>AM</b><b>SK</b><b>+4</b></span></div>
            </div>
            <div className="floating-note"><span className="note-icon">✓</span><div><strong>Milestone reached</strong><small>Launch campaign · Just now</small></div></div>
          </div>
        </section>

        <section className="logo-strip container" aria-label="Customers"><span className="logo-intro">Trusted by teams<br />building the future</span>{logos.map((logo) => <span className="customer-logo" key={logo}>{logo}</span>)}</section>

        <section className="section container" id="product">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-dot"></span> Everything in sync</div><h2>Less busywork.<br /><em>More breakthrough.</em></h2></div><p>Great work happens when your best people spend less time searching for answers and more time creating them.</p></div>
          <div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.title}><span className="feature-icon">{feature.icon}</span><h3>{feature.title}</h3><p>{feature.text}</p><a href="#contact">Learn more <Arrow /></a></article>)}</div>
        </section>

        <section className="statement" id="company"><div className="container statement-inner"><div className="eyebrow light"><span className="eyebrow-dot"></span> A better way forward</div><h2>Your next chapter<br />starts <em>here.</em></h2><p>From first spark to lasting scale, Northstar is the partner in your corner—making the complex feel simple and the ambitious feel possible.</p><a className="text-link" href="#contact">Meet Northstar <Arrow /></a></div></section>

        <section className="testimonial container" id="stories"><div className="quote-mark">“</div><blockquote>Northstar changed the way we work. We went from scattered and reactive to focused, aligned, and shipping faster than ever.</blockquote><div className="person"><div className="person-avatar">EC</div><div><strong>Elena Chen</strong><span>VP of Product, Luma</span></div></div></section>

        <section className="cta container" id="contact"><div><div className="eyebrow light"><span className="eyebrow-dot"></span> Ready when you are</div><h2>Make your move.</h2><p>Build with clarity. Grow with confidence. See what your team can do with Northstar.</p></div><a className="button button-light" href="mailto:hello@northstar.example">Let's talk <Arrow /></a></section>
      </main>

      <footer className="footer container"><a className="brand" href="#top"><span className="brand-mark">✦</span><span>northstar</span></a><span>© 2025 Northstar, Inc.</span><div className="footer-links"><a href="#product">Privacy</a><a href="#product">Terms</a><a href="mailto:hello@northstar.example">hello@northstar.example</a></div></footer>
    </div>
  );
}

export default App;
