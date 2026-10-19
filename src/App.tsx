import React, { useState } from 'react';
import './kyro-reference.css';

const calendly = 'https://calendly.com/rgsfirdaus/30min';
const techThumbs = [
  'https://img.youtube.com/vi/U_awTGaTQV0/maxresdefault.jpg',
  'https://img.youtube.com/vi/8x7m4q6Y2oA/maxresdefault.jpg',
  'https://img.youtube.com/vi/3s3l9Q7j9gE/maxresdefault.jpg',
  'https://img.youtube.com/vi/4c1r7o2V5wA/maxresdefault.jpg',
];
const minecraftThumbs = [
  'https://img.youtube.com/vi/w0di3CNI8-w/maxresdefault.jpg',
  'https://img.youtube.com/vi/6bB9Q4s0P7Y/maxresdefault.jpg',
  'https://img.youtube.com/vi/2Vv-BfVoq4g/maxresdefault.jpg',
  'https://img.youtube.com/vi/0e3GPea1Tyg/maxresdefault.jpg',
];
const faqs = [
  ['Do you edit both long form and shorts?', 'Yes. Long-form videos, shorts, recuts and sponsor segments can all be handled by one editing partner so every format feels consistent.'],
  ["What's the typical turnaround?", 'Turnaround depends on the length and complexity of the video. We agree on a realistic schedule before each project starts.'],
  ['Can you match my existing style?', 'Absolutely. We study your references, pacing, graphics and audience expectations before shaping the edit around your channel.'],
  ['Do you do motion graphics?', 'Yes. We can add clean motion graphics, callouts, product details, captions and visual explanations when they improve the story.'],
  ['How does pricing work?', 'Pricing depends on the format, video length, complexity and delivery cadence. Book a call and we can scope the right setup for your channel.'],
];

function Arrow({ down = false }: { down?: boolean }) {
  return <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={down ? 'm3.5 6 4.5 4.5L12.5 6' : 'M3 8h10M8.5 3.5 13 8l-4.5 4.5'} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Brand() {
  return <a href="#top" className="km-brand" aria-label="Kyro Media home"><span className="km-brand-mark">K</span><span><strong>KYRO</strong> MEDIA</span></a>;
}
function VideoMeta({ minecraft = false }: { minecraft?: boolean }) {
  return <div className="km-video-meta">
    <div className="km-meta-owner"><span className="km-avatar">{minecraft ? 'P' : 'V'}</span><div><strong>{minecraft ? 'PSD1 × Kyro' : 'Vermax × Kyro'}</strong><small>{minecraft ? 'I Survived 100 Days in the BACKROOMS' : 'S500 Gaming PC Build (Full Guide)'}</small></div></div>
    <a className="km-youtube-link" href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube ↗</a>
    <div className="km-meta-stats"><span><small>Views</small><b>{minecraft ? '1.1M' : '263K'}</b></span><span><small>Length</small><b>{minecraft ? '1:08:24' : '37:14'}</b></span><span><small>Likes</small><b>{minecraft ? '52K' : '4.3K'}</b></span><span><small>Comments</small><b>{minecraft ? '3.1K' : '541'}</b></span></div>
  </div>;
}
function WorkShowcase({ minecraft = false }: { minecraft?: boolean }) {
  const [active, setActive] = useState(0);
  const images = minecraft ? minecraftThumbs : techThumbs;
  return <div className={'km-showcase '+(minecraft ? 'km-showcase-mc' : 'km-showcase-tech')}>
    <div className="km-showcase-tabs">{(minecraft ? ['100 Days', 'Recut', 'Shorts'] : ['Long form', 'Shorts', 'Sponsor segments']).map((tab, i) => <button key={tab} className={active === i ? 'active' : ''} onClick={() => setActive(i)}>{tab}</button>)}</div>
    <div className="km-gallery">
      <img className="km-gallery-side km-gallery-left" src={images[(active + 1) % images.length]} alt="" loading="lazy" />
      <img className="km-gallery-side km-gallery-left2" src={images[(active + 2) % images.length]} alt="" loading="lazy" />
      <div className="km-feature-video"><img src={images[active]} alt={minecraft ? 'Minecraft editing project' : 'Tech editing project'} loading="lazy"/><a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="km-play" aria-label="Watch featured video">▶</a></div>
      <img className="km-gallery-side km-gallery-right" src={images[(active + 3) % images.length]} alt="" loading="lazy" />
      <img className="km-gallery-side km-gallery-right2" src={images[(active + 2) % images.length]} alt="" loading="lazy" />
    </div>
    <VideoMeta minecraft={minecraft}/>
  </div>;
}
function WorkSection({ minecraft = false }: { minecraft?: boolean }) {
  return <section className={'km-work-card '+(minecraft ? 'km-work-mc' : 'km-work-tech')} id={minecraft ? 'minecraft' : 'tech'}>
    <div className="km-work-copy"><div className="km-eyebrow"><span/> FEATURED WORK</div>
      <h2>{minecraft ? 'Minecraft 100 Days' : 'Tech'}</h2>
      <p>{minecraft ? 'Full episodes, recuts and shorts, all from one recording.' : 'Long form, shorts and sponsor segments, edited by one team so every video hits harder.'}</p>
      <div className="km-tags">{(minecraft ? ['100 Days', 'Recut', 'Shorts', 'Story editing', 'Motion graphics'] : ['Long form', 'Shorts', 'Sponsor segments', 'Motion graphics', 'Ads']).map((tag, i)=><span key={tag} className={i === 0 ? 'selected' : ''}>{tag}</span>)}</div>
      <div className="km-proof"><div className="km-proof-avatars"><img src="/creator-kwil.jpg" alt="Creator"/><img src="/creator-mia.jpg" alt="Creator"/><img src="/creator-miloblox.jpg" alt="Creator"/><img src="/creator-rageelixir.jpg" alt="Creator"/></div><span>Worked with creators in <b>{minecraft ? 'Minecraft' : 'tech and gaming'}</b></span></div>
      <a className="km-button km-button-blue" href="#case-studies">View work <Arrow/></a>
    </div>
    <WorkShowcase minecraft={minecraft}/>
  </section>;
}
function CaseVideo({ minecraft = false }: { minecraft?: boolean }) {
  const img = minecraft ? minecraftThumbs[0] : techThumbs[0];
  return <div className={'km-case-video '+(minecraft ? 'mc' : 'tech')}>
    <div className="km-case-video-top"><span><i/> Edited by me for this creator</span><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">View on YouTube ↗</a></div>
    <a className="km-case-image" href="https://www.youtube.com/" target="_blank" rel="noreferrer"><img src={img} alt={minecraft ? 'Minecraft 100 Days video' : 'Tech gaming PC video'}/><span className="km-play">▶</span></a>
    <div className="km-case-caption"><strong>{minecraft ? 'I Spent 100 Days in the NEW CRAZY CRAFT…' : 'AMD vs Intel Gaming PC!'}</strong><span>{minecraft ? '322K views · 3:58:49' : '184K views · 39:56'}</span></div>
  </div>;
}
export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return <div className="km-site" id="top">
    <header className="km-nav-wrap"><nav className="km-nav"><Brand/><div className="km-nav-links"><a href="#work">Work <span>⌄</span></a><a href="#case-studies">Case studies</a><a href="#contact">Contact</a></div><a className="km-button km-button-blue km-nav-cta" href={calendly} target="_blank" rel="noreferrer">Book a call <Arrow/></a><a className="km-mobile-cta" href={calendly} target="_blank" rel="noreferrer">Book a call</a></nav></header>
    <main>
      <section className="km-hero">
        <div className="km-hero-copy"><h1>Editor Behind<br/><span>Tech and Minecraft</span><br/>Channels</h1><p>Editing built around your channel, your audience, and the moments that make people keep watching.</p><div className="km-hero-actions"><a className="km-button km-button-blue" href={calendly} target="_blank" rel="noreferrer">Book a call <Arrow/></a><a className="km-button km-button-white" href="#work">See the work <Arrow/></a></div></div>
        <div className="km-hero-art" aria-label="Video editing workstation illustration"><div className="km-hero-halo"/><div className="km-film km-film-a"><img src={techThumbs[0]} alt=""/><img src={minecraftThumbs[1]} alt=""/><img src={techThumbs[2]} alt=""/></div><div className="km-film km-film-b"><img src={minecraftThumbs[0]} alt=""/><img src={minecraftThumbs[2]} alt=""/><img src={techThumbs[3]} alt=""/></div><div className="km-hero-laptop"><div className="km-laptop-screen"><div className="km-screen-bar"><i/><i/><i/><span>KYRO MEDIA · EDIT SUITE</span></div><img src={techThumbs[0]} alt="Video editing preview"/><div className="km-laptop-timeline"><i/><i/><i/><i/><i/><i/></div></div><div className="km-laptop-base"/></div><div className="km-app-icon km-pr">Pr</div><div className="km-app-icon km-ae">Ae</div><div className="km-sound-chip">▥ <span>Audio waveform</span></div><div className="km-play-chip">▶</div></div>
      </section>
      <section className="km-work-section" id="work"><WorkSection/><WorkSection minecraft/></section>
      <section className="km-stats"><div className="km-stats-backdrop">{[...techThumbs,...minecraftThumbs,...minecraftThumbs].map((img,i)=><img key={i} src={img} alt="" loading="lazy"/>)}</div><div className="km-stats-panel"><div><strong>250M<span>+</span></strong><p>Views on the videos<br/>edited by Kyro</p></div><div><strong>50<span>+</span></strong><p>Creators worked with<br/>in tech and Minecraft</p></div><div><strong>8<span>×</span></strong><p>Average views on clients<br/>after switching to Kyro</p></div></div></section>
      <section className="km-case-section" id="case-studies"><div className="km-case-heading"><span>CASE STUDIES</span><h2>Real Creators. Real <b>Results.</b></h2><p>A closer look at how I help creators grow with focused editing, better storytelling,<br className="km-desktop-only"/> and content that actually performs.</p></div><div className="km-case-row"><div className="km-case-copy"><div className="km-case-label">● TECH CASE STUDY</div><h3>How we helped this tech creator <b>8x his average views</b> with one editor instead of two?</h3><p>He had one editor for long form and another for shorts, with every note going through him. We took over both, improved pacing, added better storytelling and sponsor segments. His average views went from around 25K to 200K+.</p><div className="km-result-strip"><span><small>Subscribers</small><b>734K → <i>973K</i></b></span><span><small>Avg views</small><b>~25K → <i>200K+</i></b></span><span><small>Shorts delivered</small><b><i>100+</i></b></span></div></div><CaseVideo/></div><div className="km-case-row km-case-row-reverse"><CaseVideo minecraft/><div className="km-case-copy"><div className="km-case-label">● MINECRAFT CASE STUDY</div><h3>How we helped <b>10x this creator's distribution</b> with the same amount of his time?</h3><p>He records one 100 Days episode a week. We turn that one recording into the main video, a tighter recut and multiple short clips. Three channels, and not an extra hour of his time.</p><div className="km-result-strip"><span><small>Subscribers</small><b>~15K → <i>24K+</i></b></span><span><small>Views a month</small><b><i>1M+</i></b></span><span><small>Channels</small><b>1 → <i>3</i></b></span></div></div></div><div className="km-case-bottom"><a className="km-button km-button-blue" href="https://www.youtube.com/" target="_blank" rel="noreferrer">View all case studies <Arrow/></a></div></section>
      <section className="km-faq-section"><div className="km-faq-inner"><div className="km-faq-intro"><div className="km-case-label">● FAQS</div><h2>FAQs</h2><p>Pick your niche. If your question isn’t here, ask us on a call.</p><div className="km-niche-card"><div className="km-niche-avatars"><img src="/creator-kwil.jpg" alt=""/><img src="/creator-mia.jpg" alt=""/><img src="/creator-miloblox.jpg" alt=""/></div><div><b>Tech</b><small>Long form, shorts, sponsor segments</small></div><strong>5</strong></div><div className="km-niche-card"><div className="km-niche-avatars"><img src="/creator-rageelixir.jpg" alt=""/><img src="/creator-sharktactics.jpg" alt=""/><img src="/creator-doodlearkeyplays.jpg" alt=""/></div><div><b>Minecraft</b><small>100 Days, recuts, shorts</small></div><strong>5</strong></div><a className="km-button km-button-outline" href={calendly} target="_blank" rel="noreferrer">Book a call <Arrow/></a></div><div className="km-faq-list">{faqs.map(([q,a],i)=><article className={'km-faq-item '+(openFaq===i?'open':'')} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span className="km-faq-num">0{i+1}</span><strong>{q}</strong><span className="km-faq-toggle"><Arrow down={openFaq!==i}/></span></button>{openFaq===i&&<p>{a}</p>}</article>)}</div></div></section>
      <section className="km-contact-section" id="contact"><div className="km-contact-orbit km-orbit-a"/><div className="km-contact-orbit km-orbit-b"/><div className="km-contact-card"><div className="km-contact-mark">I›</div><h2>Work <b>With Us</b></h2><p>Book an intro call. I take on a few new<br/> creators at a time.</p><div><a className="km-button km-button-blue" href={calendly} target="_blank" rel="noreferrer">Book a call <Arrow/></a><a className="km-button km-button-outline" href="#case-studies">View case studies <Arrow/></a></div></div><div className="km-floating-thumbs">{[minecraftThumbs[1],techThumbs[2],minecraftThumbs[2],techThumbs[1],minecraftThumbs[3],techThumbs[3]].map((img,i)=><img key={i} className={'km-float-thumb km-ft-'+i} src={img} alt="" loading="lazy"/>)}</div></section>
    </main>
    <footer className="km-footer"><div className="km-footer-main"><div className="km-footer-brand"><Brand/><p>Remote editing for YouTube<br/>creators.</p><div className="km-socials"><a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">𝕏</a><a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a></div></div><div><b>Work</b><a href="#tech">Tech</a><a href="#minecraft">Minecraft</a></div><div><b>Company</b><a href="#case-studies">Case studies</a><a href="#contact">Contact</a></div><div><b>Get in touch</b><a href={calendly} target="_blank" rel="noreferrer">Book a call</a><a href="mailto:sonik@kyromedia.in">sonik@kyromedia.in</a></div></div><div className="km-footer-bottom"><span>© 2026 Kyro Media</span><span>Made for creators who care about the cut.</span></div></footer>
  </div>;
}
