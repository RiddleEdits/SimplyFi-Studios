import React, { useState } from 'react';

const creators = ['VERMAX', 'DefinitelyDead', 'TechSource', 'More Techy', '100 DAYS', 'TECH REVIEWS'];
const projects = [
  { name: 'Vermax', type: 'Tech · Long-form', title: 'Making every frame feel premium.', views: '1M+ views', image: 'https://img.youtube.com/vi/U_awTGaTQV0/maxresdefault.jpg', color: 'blue' },
  { name: 'DefinitelyDead', type: 'Minecraft · 100 Days', title: 'Turning hours of gameplay into a story.', views: '322K views', image: 'https://img.youtube.com/vi/w0di3CNI8-w/maxresdefault.jpg', color: 'violet' },
];
const faqs = [
  ['What kind of channels do you work with?', 'We focus on tech creators and Minecraft channels, including tech reviews, gaming stories, and 100 Days videos.'],
  ['Can you handle long-form videos and shorts?', 'Yes. We can support long-form edits, short-form cutdowns, and a consistent visual style across your channel.'],
  ['How does the process work?', 'We align on your format and references, edit the first cut, then refine pacing, sound design, and visuals with your feedback.'],
  ['How do I get started?', 'Book a short discovery call. We’ll learn about your channel, upload schedule, and the kind of editing support you need.'],
];

function Arrow({ light = false }: { light?: boolean }) {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function LaptopScene() {
  return <div className="laptop-scene" aria-label="Illustration of a video editing workstation">
    <div className="scene-glow" />
    <div className="floating-chip chip-one"><span className="chip-dot" /> TIMELINE · 04:28</div>
    <div className="floating-chip chip-two"><span className="equalizer"><i/><i/><i/><i/><i/></span> SOUND DESIGN</div>
    <div className="laptop">
      <div className="laptop-screen">
        <div className="screen-top"><span className="window-dots"><i/><i/><i/></span><span>KYRO / EDIT SUITE</span><span>4K · 24 FPS</span></div>
        <div className="screen-content">
          <div className="preview-frame"><div className="preview-sun"/><div className="preview-mountain m1"/><div className="preview-mountain m2"/><div className="preview-play">▶</div><span className="preview-label">SEQUENCE_04</span></div>
          <div className="side-panel"><span>PROJECT</span><i/><i/><i/><i/><i/></div>
        </div>
        <div className="timeline-label"><span>00:00</span><span>00:15</span><span>00:30</span><span>00:45</span></div>
        <div className="timeline"><div className="track track-a"><i/><i/><i/></div><div className="track track-b"><i/><i/></div><div className="track track-c"><i/><i/><i/><i/></div><div className="playhead"/></div>
      </div>
      <div className="laptop-base"><div className="trackpad"/></div>
    </div>
    <div className="film-strip strip-a"><i/><i/><i/><i/></div><div className="film-strip strip-b"><i/><i/><i/></div>
    <div className="app-icon premiere">Pr</div><div className="app-icon after">Ae</div>
    <div className="scene-caption"><span className="caption-line"/> BUILT AROUND YOUR CHANNEL <span className="caption-line"/></div>
  </div>;
}

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return <div className="kyro-site">
    <div className="announcement"><span className="announcement-dot"/> EDITING PARTNER FOR TECH & MINECRAFT CREATORS <span className="announcement-arrow">↗</span></div>
    <header className="nav-wrap"><nav className="nav-bar">
      <a className="brand" href="#top" aria-label="Kyro Media home"><span className="brand-mark"><i/><i/><i/></span><span>kyro<span className="brand-light">media</span><small>CREATOR EDITING STUDIO</small></span></a>
      <div className="nav-links"><a href="#work">Work</a><a href="#case-studies">Case studies</a><a href="#contact">Contact</a></div>
      <a className="btn btn-primary nav-cta" href="https://calendly.com/rgsfirdaus/30min" target="_blank" rel="noreferrer">Book a call <Arrow/></a>
      <a className="mobile-cta" href="https://calendly.com/rgsfirdaus/30min" target="_blank" rel="noreferrer">Book a call <Arrow/></a>
    </nav></header>
    <main id="top">
      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-icon">✳</span> YOUR CREATOR EDITING TEAM</div>
          <h1>Editor behind<br/><span>Tech and Minecraft</span><br/>channels.</h1>
          <p className="hero-description">You bring the vision. We turn the footage into videos people stay for — with sharp pacing, thoughtful sound design, and a style built around your channel.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="https://calendly.com/rgsfirdaus/30min" target="_blank" rel="noreferrer">Book a call <Arrow/></a><a className="btn btn-secondary" href="#work">See the work <Arrow/></a></div>
          <div className="hero-proof"><div className="proof-avatars"><span>V</span><span>D</span><span>T</span><span>+</span></div><div><strong>Built for creators who care about quality.</strong><small>Long-form stories · Tech reviews · Shorts</small></div></div>
        </div>
        <LaptopScene/>
        <div className="hero-bottom"><span>STRATEGY → STORY → FINAL CUT</span><span className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></span></div>
      </section>
      <section className="creator-band"><div className="creator-intro">A CREATIVE PARTNER FOR THE CHANNELS YOU WATCH</div><div className="creator-marquee"><div className="creator-track">{[...creators,...creators].map((c,i)=><span className="creator-name" key={c+i}>{c}<b>✳</b></span>)}</div></div></section>
      <section className="formats section-shell" id="work">
        <div className="section-heading"><div><div className="eyebrow blue-eyebrow">WHAT WE DO</div><h2>Two formats. One team<br/>that knows both.</h2></div><p>Different audiences. Different rhythms.<br/>One consistent standard for every upload.</p></div>
        <div className="format-grid">
          <article className="format-card tech-card"><div className="format-top"><span className="format-number">01 / TECH</span><span className="round-arrow"><Arrow/></span></div><div className="format-art tech-art"><div className="tech-orb orb-a"/><div className="tech-orb orb-b"/><div className="phone-device"><div className="phone-screen"><div className="phone-camera"/><div className="phone-glow"/><div className="phone-lines"><i/><i/><i/></div></div></div><div className="floating-spec spec-a">4K / 60</div><div className="floating-spec spec-b">DETAIL MATTERS</div></div><div className="format-copy"><h3>Tech reviews</h3><p>Clean storytelling, crisp product visuals, and motion graphics that make every detail feel intentional.</p><div className="tag-row"><span>Product storytelling</span><span>Motion graphics</span><span>Sound design</span></div><a href="/work/tech" className="text-link">Explore tech editing <Arrow/></a></div></article>
          <article className="format-card minecraft-card"><div className="format-top"><span className="format-number">02 / MINECRAFT</span><span className="round-arrow"><Arrow/></span></div><div className="format-art minecraft-art"><div className="pixel-sun"/><div className="pixel-cloud cloud-a"/><div className="pixel-cloud cloud-b"/><div className="pixel-hill hill-a"/><div className="pixel-hill hill-b"/><div className="pixel-block block-a"/><div className="pixel-block block-b"/><div className="day-counter">DAY <b>100</b></div><div className="minecraft-tag">THE JOURNEY MATTERS</div></div><div className="format-copy"><h3>Minecraft stories</h3><p>Hours of gameplay shaped into a cinematic story — from first-day chaos to the final boss fight.</p><div className="tag-row"><span>100 Days</span><span>Story pacing</span><span>Gameplay</span></div><a href="/work/minecraft" className="text-link">Explore Minecraft editing <Arrow/></a></div></article>
        </div>
      </section>
      <section className="stats-band"><div className="stats-inner"><div className="stats-title"><span className="eyebrow">THE WORK SPEAKS</span><h2>Made to keep<br/>people watching.</h2></div><div className="stat"><strong>250<span>M+</span></strong><small>Creator views supported</small></div><div className="stat"><strong>2<span>+</span></strong><small>Specialized editing formats</small></div><div className="stat"><strong>1<span>team</span></strong><small>One reliable creative partner</small></div></div></section>
      <section className="case-section section-shell" id="case-studies"><div className="section-heading"><div><div className="eyebrow blue-eyebrow">SELECTED WORK</div><h2>Good videos are felt.<br/>Great ones are remembered.</h2></div><p>We build every edit around the creator, the audience, and the moment the story needs.</p></div><div className="case-grid">{projects.map((p,i)=><article className={'case-card '+p.color} key={p.name}><a href={i===0?'https://www.youtube.com/results?search_query=Vermax+tech+videos':'https://www.youtube.com/results?search_query=DefinitelyDead+Minecraft'} target="_blank" rel="noreferrer" className="case-image"><img src={p.image} alt={p.name+' video thumbnail'} loading="lazy"/><span className="image-overlay"/><span className="play-button">▶</span><span className="case-views">{p.views}</span></a><div className="case-info"><div className="case-type">{p.type}</div><h3>{p.title}</h3><div className="case-bottom"><span>{p.name}</span><a href={i===0?'https://www.youtube.com/results?search_query=Vermax+tech+videos':'https://www.youtube.com/results?search_query=DefinitelyDead+Minecraft'} target="_blank" rel="noreferrer" aria-label={'View '+p.name+' work'}><Arrow/></a></div></div></article>)}</div><div className="work-note"><span className="note-star">✳</span><p>Every channel has its own rhythm. We find it, then make it unmistakable.</p><a className="text-link" href="#contact">Let's talk about your channel <Arrow/></a></div></section>
      <section className="process-section"><div className="section-shell"><div className="section-heading"><div><div className="eyebrow blue-eyebrow">A SIMPLE PROCESS</div><h2>Less back-and-forth.<br/>More great videos.</h2></div><p>A clear workflow that lets you focus on creating while we focus on the edit.</p></div><div className="process-grid"><div className="process-step"><span>01</span><div className="step-icon">↗</div><h3>Align</h3><p>We learn your style, audience, upload cadence, and what a successful video looks like.</p></div><div className="process-step"><span>02</span><div className="step-icon">⌁</div><h3>Shape the story</h3><p>We build the edit around pacing, clarity, sound, and the moments that matter.</p></div><div className="process-step"><span>03</span><div className="step-icon">✳</div><h3>Refine & deliver</h3><p>We take your feedback, polish the details, and deliver a final cut ready to publish.</p></div></div></div></section>
      <section className="faq-section section-shell"><div className="faq-heading"><div className="eyebrow blue-eyebrow">GOOD QUESTIONS</div><h2>Before we hit<br/>the timeline.</h2><p>Everything you need to know to get started.</p><a className="text-link" href="https://calendly.com/rgsfirdaus/30min" target="_blank" rel="noreferrer">Ask us on a call <Arrow/></a></div><div className="faq-list">{faqs.map(([q,a],i)=><article className={'faq-item '+(openFaq===i?'faq-open':'')} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span className="faq-index">0{i+1}</span><span>{q}</span><span className="faq-toggle">{openFaq===i?'−':'+'}</span></button>{openFaq===i&&<p>{a}</p>}</article>)}</div></section>
      <section className="contact-section section-shell" id="contact"><div className="contact-card"><div className="contact-glow"/><div className="eyebrow">YOUR NEXT VIDEO STARTS HERE</div><h2>Let’s make something<br/><span>worth watching.</span></h2><p>Tell us what you're building. We'll figure out the best way to help.</p><div className="contact-actions"><a className="btn btn-white" href="https://calendly.com/rgsfirdaus/30min" target="_blank" rel="noreferrer">Book a call <Arrow/></a><a className="btn btn-glass" href="https://x.com/RiddlePlayZz" target="_blank" rel="noreferrer">Contact the team <Arrow/></a></div><div className="contact-orbit orbit-one"/><div className="contact-orbit orbit-two"/></div></section>
    </main>
    <footer className="footer section-shell"><a className="brand footer-brand" href="#top"><span className="brand-mark"><i/><i/><i/></span><span>kyro<span className="brand-light">media</span><small>CREATOR EDITING STUDIO</small></span></a><span className="footer-copy">Thoughtful edits. Better stories. © {new Date().getFullYear()} Kyro Media.</span><a className="back-top" href="#top">BACK TO TOP ↑</a></footer>
  </div>;
}
