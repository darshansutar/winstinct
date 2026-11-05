const fs = require('fs');
const path = require('path');

const HEAD = (title, desc) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${title}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="${desc}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,800;1,900&family=Noto+Sans+Display:wdth,wght@62.5..100,700..900&display=swap">
<link rel="stylesheet" href="css/styles.css">
</head>
<body id="top">`;

const NAV = (current) => `
<header class="site-header">
  <div class="wrap header-inner">
    <a class="logo" href="index.html" aria-label="Winstinct home">winstinct<span class="logo-dot" aria-hidden="true"></span></a>
    <nav class="main-nav" aria-label="Main">
      <ul class="nav-col">
        <li><a href="about.html" ${current === 'about' ? 'aria-current="page"' : ''}>About</a></li>
        <li><a href="services.html" ${current === 'services' ? 'aria-current="page"' : ''}>What We Do</a></li>
        <li><a href="work.html" ${current === 'work' ? 'aria-current="page"' : ''}>Our Work</a></li>
      </ul>
      <ul class="nav-col">
        <li><a href="artists.html" ${current === 'artists' ? 'aria-current="page"' : ''}>Artists &amp; Labels</a></li>
        <li><a href="news.html" ${current === 'news' ? 'aria-current="page"' : ''}>Insights &amp; News</a></li>
      </ul>
    </nav>
    <div class="header-actions">
      <a class="btn btn-sm" href="contact.html">Submit Your Music</a>
      <button class="burger" type="button" aria-expanded="false" aria-controls="menu-overlay"><span></span><span></span><span class="sr-only">Open menu</span></button>
    </div>
  </div>
</header>

<div class="menu-overlay" id="menu-overlay" hidden>
  <div class="wrap">
    <div class="menu-overlay-top">
      <a class="logo" href="index.html" aria-label="Winstinct home">winstinct<span class="logo-dot" aria-hidden="true"></span></a>
      <button class="menu-close" type="button" aria-label="Close menu">×</button>
    </div>
    <nav class="menu-links" aria-label="Mobile">
      <a href="about.html">About</a>
      <a href="services.html">What We Do</a>
      <a href="work.html">Our Work</a>
      <a href="artists.html">Artists &amp; Labels</a>
      <a href="news.html">Insights &amp; News</a>
      <a href="contact.html">Submit Your Music / Contact</a>
    </nav>
  </div>
</div>`;

const FOOTER = `
<footer class="site-footer band-ink">
  <div class="wrap">
    <div class="footer-top">
      <div>
        <p class="eyebrow" style="color:var(--orange);margin-bottom:14px">Our Core Services</p>
        <ul class="footer-big">
          <li><a href="services.html#distribution">Distribution</a></li>
          <li><a href="services.html#publishing">Publishing</a></li>
          <li><a href="services.html#marketing">Marketing</a></li>
          <li><a href="services.html#content">Content</a></li>
          <li><a href="services.html#artist-development">Artist Development</a></li>
        </ul>
      </div>
      <a class="to-top" href="#top" aria-label="Back to top">↑</a>
    </div>
    <div class="footer-bottom">
      <div class="footer-brand">
        <a class="logo" href="index.html" aria-label="Winstinct home">winstinct<span class="logo-dot" aria-hidden="true"></span></a>
        <p class="tagline"><strong>Big W</strong><br>Independent Music.<br>Artist-First Partnerships.</p>
      </div>
      <span aria-hidden="true"></span>
      <ul class="legal">
        <li><a href="contact.html">Contact</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms &amp; Conditions</a></li>
      </ul>
      <ul class="social" aria-label="Social links">
        <li><a href="#" aria-label="Instagram">IG</a></li>
        <li><a href="#" aria-label="YouTube">YT</a></li>
        <li><a href="#" aria-label="LinkedIn">IN</a></li>
      </ul>
    </div>
  </div>
</footer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>`;

// 1. HOME (index.html)
const INDEX_HTML = `${HEAD('Winstinct (Big W) — Independent Music Services', 'Winstinct is an independent artist services company helping artists and labels distribute, protect, promote and monetise their music.')}
${NAV('home')}
<main>

<!-- 1. Hero -->
<section class="hero band-cream" aria-labelledby="hero-title">
  <div class="wrap">
    <div class="hero-word" aria-hidden="true"><span>W</span><span>I</span><span>N</span><span>S</span><span>T</span><span>I</span><span>N</span><span>C</span><span>T</span></div>
    <div class="hero-foot">
      <div>
        <p class="eyebrow" style="color:var(--cobalt);margin-bottom:12px">Your music. Your rights. Your growth.</p>
        <h1 id="hero-title" class="hero-title italic-caps">Independent Music.<br>Unlimited Possibilities.</h1>
      </div>
      <div class="hero-side">
        <p class="lead">Winstinct is an independent artist services company helping artists and labels distribute, protect, promote and monetise their music.</p>
        <div class="btn-row">
          <a class="btn btn-solid" href="services.html">Explore Our Services</a>
          <a class="btn" href="contact.html">Submit Your Music</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 2. Intro Section — Built for Independent Music -->
<section class="band band-cobalt" aria-labelledby="intro-title">
  <div class="wrap split">
    <div class="stack" data-rise>
      <p class="eyebrow" style="color:var(--lime)">Built for Independent Music</p>
      <h2 id="intro-title" class="t-l">The music industry is changing.</h2>
      <p class="body-copy" style="font-size:1.15rem;line-height:1.6">Artists want more control, better opportunities and partners who understand their vision.</p>
      <p class="body-copy">At Winstinct, we bring together music distribution, publishing, marketing and creative services to help independent artists build sustainable careers — on their own terms.</p>
      <a class="btn btn-solid" href="about.html">About Our Philosophy</a>
    </div>
    <div class="stack" data-rise style="gap:24px">
      <h3 class="eyebrow" style="color:var(--cream);opacity:.85">Our Key Pillars</h3>
      <div class="value" style="border-top-color:var(--line-light)">
        <h4 style="font-size:var(--t-m);color:var(--lime)">Rights</h4>
        <p style="color:var(--cream);opacity:.9">Protect and manage your music ownership and publishing. Never sacrifice your copyright to unlock opportunities.</p>
      </div>
      <div class="value" style="border-top-color:var(--line-light)">
        <h4 style="font-size:var(--t-m);color:var(--lime)">Reach</h4>
        <p style="color:var(--cream);opacity:.9">Take your music to audiences across 150+ digital platforms worldwide, editorial playlists and emerging global markets.</p>
      </div>
      <div class="value" style="border-top-color:var(--line-light)">
        <h4 style="font-size:var(--t-m);color:var(--lime)">Revenue</h4>
        <p style="color:var(--cream);opacity:.9">Build multiple revenue streams from your music and creativity across streaming, performance, mechanicals, sync and brand deals.</p>
      </div>
    </div>
  </div>
</section>

<!-- 3. What We Do — 5 Services & Mixing Console -->
<section class="band band-ink" aria-labelledby="services-title">
  <div class="wrap split" style="align-items:center">
    <div class="stack" data-rise>
      <p class="eyebrow" style="color:var(--orange)">What We Do</p>
      <h2 id="services-title" class="t-l">Everything Your Music<br>Needs to Move Forward.</h2>
      <p class="body-copy">Distribution across 150+ digital platforms, publishing administration, targeted marketing campaigns, high-impact creative content and long-term artist development.</p>
      <div class="btn-row">
        <a class="btn" href="services.html">Explore All Services</a>
        <a class="btn btn-solid" href="contact.html">Get in Touch</a>
      </div>
    </div>
    <div class="desk">
      <div class="console is-waiting" role="group" aria-label="Services mixing desk">
        <button class="channel" type="button" aria-pressed="true" style="--on:88">
          <span class="ch-num">CH 01</span><span class="ch-led" aria-hidden="true"></span><span class="ch-knob" aria-hidden="true"></span>
          <span class="ch-track" aria-hidden="true"><span class="ch-fader"></span></span>
          <span class="ch-name">Digital Distribution</span>
        </button>
        <button class="channel" type="button" aria-pressed="true" style="--on:80">
          <span class="ch-num">CH 02</span><span class="ch-led" aria-hidden="true"></span><span class="ch-knob" aria-hidden="true"></span>
          <span class="ch-track" aria-hidden="true"><span class="ch-fader"></span></span>
          <span class="ch-name">Publishing Administration</span>
        </button>
        <button class="channel" type="button" aria-pressed="true" style="--on:75">
          <span class="ch-num">CH 03</span><span class="ch-led" aria-hidden="true"></span><span class="ch-knob" aria-hidden="true"></span>
          <span class="ch-track" aria-hidden="true"><span class="ch-fader"></span></span>
          <span class="ch-name">Music Marketing &amp; PR</span>
        </button>
        <button class="channel" type="button" aria-pressed="true" style="--on:82">
          <span class="ch-num">CH 04</span><span class="ch-led" aria-hidden="true"></span><span class="ch-knob" aria-hidden="true"></span>
          <span class="ch-track" aria-hidden="true"><span class="ch-fader"></span></span>
          <span class="ch-name">Content &amp; Creative</span>
        </button>
        <button class="channel" type="button" aria-pressed="true" style="--on:70">
          <span class="ch-num">CH 05</span><span class="ch-led" aria-hidden="true"></span><span class="ch-knob" aria-hidden="true"></span>
          <span class="ch-track" aria-hidden="true"><span class="ch-fader"></span></span>
          <span class="ch-name">Artist Development</span>
        </button>
        <button class="channel" type="button" aria-pressed="false" style="--on:64">
          <span class="ch-num">CH 06</span><span class="ch-led" aria-hidden="true"></span><span class="ch-knob" aria-hidden="true"></span>
          <span class="ch-track" aria-hidden="true"><span class="ch-fader"></span></span>
          <span class="ch-name">Brand Partnerships</span>
        </button>
        <button class="channel" type="button" aria-pressed="false" style="--on:70">
          <span class="ch-num">CH 07</span><span class="ch-led" aria-hidden="true"></span><span class="ch-knob" aria-hidden="true"></span>
          <span class="ch-track" aria-hidden="true"><span class="ch-fader"></span></span>
          <span class="ch-name">Sync Opportunities</span>
        </button>
        <button class="channel" type="button" aria-pressed="false" style="--on:60">
          <span class="ch-num">CH 08</span><span class="ch-led" aria-hidden="true"></span><span class="ch-knob" aria-hidden="true"></span>
          <span class="ch-track" aria-hidden="true"><span class="ch-fader"></span></span>
          <span class="ch-name">Content Protection</span>
        </button>
        <div class="channel channel-master">
          <span class="ch-num">Master</span><span class="ch-led" aria-hidden="true"></span><span class="ch-knob" aria-hidden="true"></span>
          <span class="ch-track" aria-hidden="true"><span class="ch-fader"></span></span>
          <span class="ch-name">Independent Music</span>
        </div>
      </div>
      <p class="console-readout" aria-live="polite"><span data-mix-count>5</span> of 8 channels active · 100% Artist Ownership</p>
    </div>
  </div>
</section>

<!-- 4. Artists & Labels Section -->
<section class="band band-cream" aria-labelledby="artists-title">
  <div class="wrap">
    <div class="split partners-head">
      <div class="stack">
        <p class="eyebrow" style="color:var(--cobalt)">Artists &amp; Labels</p>
        <h2 id="artists-title" class="t-l">Independent Voices.<br>Distinctive Sounds.</h2>
        <p class="body-copy">We work with artists, producers and independent labels across the evolving music landscape, with a strong connection to hip-hop and emerging music cultures. Our roster represents different sounds, stories and ambitions — united by the drive to create independently.</p>
        <div class="btn-row">
          <a class="btn btn-solid" href="artists.html">Explore Our Roster</a>
          <a class="btn" href="contact.html">Partner With Us</a>
        </div>
      </div>
      <div class="roster-text" style="font-size:clamp(1.5rem,3.2vw,2.8rem);line-height:1.25">
        <span class="lead-in">Spanning </span>
        <span class="name" style="color:var(--cobalt)">Hip-Hop</span>, <span class="name">Afro-Fusion</span>, <span class="name" style="color:var(--orange)">Drill &amp; Trap</span>, <span class="name">Alternative R&amp;B</span>, <span class="name" style="color:var(--plum)">Underground Producers</span>, and <span class="name">Forward-Thinking Independent Labels</span>.
      </div>
    </div>
  </div>
</section>

<!-- 5. Our Work / Case Studies Preview -->
<section class="band band-plum" aria-labelledby="work-title">
  <div class="wrap">
    <div class="cta-band" style="margin-bottom:clamp(32px,5vw,60px)">
      <div>
        <p class="eyebrow" style="color:var(--lime)">Our Work</p>
        <h2 id="work-title" class="t-xl">Good Music Deserves<br>Good Execution.</h2>
        <p class="lead" style="color:var(--cream);margin-top:16px">From release campaigns to artist collaborations, we work behind the scenes to turn creative ideas into real-world outcomes.</p>
      </div>
      <a class="btn" href="work.html">Explore Our Projects</a>
    </div>
    <div class="card-grid">
      <div class="value" data-rise style="border-top-color:var(--line-light)">
        <span class="eyebrow" style="color:var(--lime)">Case Study · Digital Distribution</span>
        <h3 style="color:var(--cream)">Kaelen Vance — "Crown &amp; Concrete" LP</h3>
        <p style="color:var(--cream);opacity:.85">Full release campaign and global distribution across 150+ digital platforms. Placed on 14 major editorial playlists and achieved 24M+ streams while retaining 100% master ownership.</p>
      </div>
      <div class="value" data-rise style="border-top-color:var(--line-light)">
        <span class="eyebrow" style="color:var(--lime)">Case Study · Publishing Administration</span>
        <h3 style="color:var(--cream)">Southside Wave — Global Sync &amp; Royalties</h3>
        <p style="color:var(--cream);opacity:.85">Uncovered 22 months of unclaimed mechanical and performance royalties, generating a 240% increase in net publishing yield and placements in national sports broadcasts.</p>
      </div>
      <div class="value" data-rise style="border-top-color:var(--line-light)">
        <span class="eyebrow" style="color:var(--lime)">Case Study · Content &amp; Growth</span>
        <h3 style="color:var(--cream)">Reya Sol — "Golden Hour" Visual Series</h3>
        <p style="color:var(--cream);opacity:.85">Created 30+ short-form edits and official music video leading to 5.8M organic views across TikTok/Reels, 125,000 new monthly listeners, and a sold-out headline tour.</p>
      </div>
    </div>
  </div>
</section>

<!-- 6. Insights & News Preview -->
<section class="band band-cream" aria-labelledby="news-title">
  <div class="wrap news-teaser">
    <svg class="news-illo" viewBox="0 0 300 260" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="96" cy="140" r="78" fill="var(--ink)"/>
      <circle cx="96" cy="140" r="56" stroke="var(--cream)" stroke-opacity=".35" stroke-width="1.5"/>
      <circle cx="96" cy="140" r="40" stroke="var(--cream)" stroke-opacity=".35" stroke-width="1.5"/>
      <circle cx="96" cy="140" r="18" fill="var(--orange)" stroke="none"/>
      <path d="M128 52 L268 66 L254 228 L114 214 Z" fill="var(--cream)"/>
      <path d="M144 80 L246 90"/><path d="M142 98 L200 104" stroke-width="7"/>
      <path d="M140 122 L240 132"/><path d="M139 138 L238 148"/><path d="M137 154 L236 164"/>
      <path d="M136 170 L190 175"/><path d="M134 188 L232 198"/><path d="M133 204 L200 210"/>
      <rect x="200" y="102" width="40" height="26" transform="rotate(5.7 220 115)" fill="var(--lime)"/>
    </svg>
    <div class="stack">
      <p class="eyebrow" style="color:var(--cobalt)">Insights &amp; Perspectives</p>
      <h2 id="news-title" class="t-l">Notes From the<br>Independent Music Scene.</h2>
      <p class="body-copy">Stories, perspectives and updates from the world of independent music. Spanning Artist Stories, New Releases, Music Business &amp; Industry Insights, Campaigns &amp; Collaborations, and Winstinct Updates.</p>
      <a class="btn btn-solid" href="news.html">Read the Blog</a>
    </div>
  </div>
</section>

<!-- 7. Join / Contact Section -->
<section class="band band-orange" aria-labelledby="contact-home-title">
  <div class="wrap">
    <div class="split" style="align-items:center">
      <div class="stack">
        <p class="eyebrow">Join / Contact</p>
        <h2 id="contact-home-title" class="t-l">Let's Build<br>Something Together.</h2>
        <p class="body-copy" style="font-weight:600">Whether you're an independent artist looking for the right partner, a label exploring new opportunities or a brand looking to collaborate — we'd love to hear from you.</p>
      </div>
      <div class="stack" style="gap:16px">
        <div style="padding:18px 22px;background:rgba(17,17,20,0.08);border-radius:10px;width:100%">
          <h4 style="font-size:1.1rem;font-weight:800;margin-bottom:4px">For Artists &amp; Producers</h4>
          <p style="font-size:.925rem;margin-bottom:10px">Looking for distribution, publishing, marketing or career support?</p>
          <a class="btn btn-sm btn-solid" href="contact.html?type=artist">Submit Your Music</a>
        </div>
        <div style="padding:18px 22px;background:rgba(17,17,20,0.08);border-radius:10px;width:100%">
          <h4 style="font-size:1.1rem;font-weight:800;margin-bottom:4px">For Labels &amp; Industry Partners</h4>
          <p style="font-size:.925rem;margin-bottom:10px">Let's explore distribution partnerships, catalogue opportunities and strategic collaborations.</p>
          <a class="btn btn-sm btn-solid" href="contact.html?type=label">Explore Partnerships</a>
        </div>
        <div style="padding:18px 22px;background:rgba(17,17,20,0.08);border-radius:10px;width:100%">
          <h4 style="font-size:1.1rem;font-weight:800;margin-bottom:4px">For Brands &amp; Agencies</h4>
          <p style="font-size:.925rem;margin-bottom:10px">Let's create meaningful connections between music, culture and brands.</p>
          <a class="btn btn-sm btn-solid" href="contact.html?type=brand">Get in Touch</a>
        </div>
      </div>
    </div>
  </div>
</section>

</main>
${FOOTER}`;

// 2. ABOUT US (about.html)
const ABOUT_HTML = `${HEAD('About Winstinct (Big W) — Independent Music Services', 'Winstinct was built around a simple belief: independent artists deserve access to opportunities, infrastructure and expertise.')}
${NAV('about')}
<main>

<section class="page-hero band-cream">
  <div class="wrap">
    <p class="eyebrow">About Us</p>
    <h1 class="t-mega italic-caps">Independent by Choice.<br>Artist-First by Design.</h1>
    <p class="lead">Winstinct was built around a simple belief: independent artists deserve access to the opportunities, infrastructure and expertise traditionally available to established labels.</p>
  </div>
</section>

<!-- Manifesto / Philosophy -->
<section class="band band-cobalt" id="philosophy" aria-labelledby="philosophy-title">
  <div class="wrap split">
    <h2 id="philosophy-title" class="eyebrow" style="color:var(--lime)">Our Philosophy</h2>
    <div class="stack" style="gap:32px">
      <p class="big-statement">We don't believe artists need to give up ownership to access opportunity.</p>
      <p class="body-copy">We believe in fair partnerships, informed decisions and building value together. We work at the intersection of music, technology and culture, helping artists turn their creativity into sustainable music careers.</p>
      <p class="body-copy">From a first release to a growing catalogue, we believe in long-term partnerships, transparent relationships and shared growth.</p>
    </div>
  </div>
</section>

<!-- Built for Independent Music & Pillars -->
<section class="band band-cream" aria-labelledby="pillars-title">
  <div class="wrap">
    <div class="split" style="margin-bottom:clamp(40px,6vw,72px);align-items:end">
      <div class="stack">
        <p class="eyebrow" style="color:var(--cobalt)">Built for Independent Music</p>
        <h2 id="pillars-title" class="t-l">Sustainable Careers.<br>On Your Own Terms.</h2>
      </div>
      <p class="body-copy">The music industry is changing. Artists want more control, better opportunities and partners who understand their vision. At Winstinct, we bring together music distribution, publishing, marketing and creative services to help independent creators thrive.</p>
    </div>

    <div class="card-grid">
      <div class="value" data-rise>
        <span class="eyebrow" style="color:var(--cobalt)">Pillar 01</span>
        <h3>Rights</h3>
        <p class="muted">Protect and manage your music ownership and publishing. We believe artists should retain 100% of their copyright while unlocking global commercial opportunities.</p>
      </div>
      <div class="value" data-rise>
        <span class="eyebrow" style="color:var(--cobalt)">Pillar 02</span>
        <h3>Reach</h3>
        <p class="muted">Take your music to audiences across platforms and markets. Worldwide delivery to 150+ digital platforms, dedicated editorial pitching and audience discovery.</p>
      </div>
      <div class="value" data-rise>
        <span class="eyebrow" style="color:var(--cobalt)">Pillar 03</span>
        <h3>Revenue</h3>
        <p class="muted">Build multiple revenue streams from your music and creativity. Collect performance, mechanical and sync royalties alongside streaming, merchandise and brand partnerships.</p>
      </div>
    </div>
  </div>
</section>

<!-- Our Approach -->
<section class="band band-ink" aria-labelledby="approach-title">
  <div class="wrap split">
    <div class="stack">
      <p class="eyebrow" style="color:var(--orange)">Our Approach</p>
      <h2 id="approach-title" class="t-l">At the Intersection of Music, Tech &amp; Culture</h2>
      <p class="body-copy">We combine top-tier music distribution and rights management infrastructure with an artist-first culture that understands contemporary hip-hop and emerging music movements.</p>
    </div>
    <div class="stack" style="gap:24px">
      <div class="value" style="border-top-color:var(--line-light)">
        <h3 style="color:var(--lime)">Long-Term Partnerships</h3>
        <p style="color:var(--cream);opacity:.85">We don't treat music as transactional volume. We invest our time, expertise and relationships in artists who are building enduring catalogues.</p>
      </div>
      <div class="value" style="border-top-color:var(--line-light)">
        <h3 style="color:var(--lime)">Transparent Relationships</h3>
        <p style="color:var(--cream);opacity:.85">Clear accounting, transparent royalty reporting, and straight answers. You always have full visibility into how your music performs.</p>
      </div>
      <div class="value" style="border-top-color:var(--line-light)">
        <h3 style="color:var(--lime)">Shared Growth</h3>
        <p style="color:var(--cream);opacity:.85">Our incentives align directly with yours. When your music reaches bigger audiences and generates more revenue, everyone wins together.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="band band-orange" aria-labelledby="about-cta-title">
  <div class="wrap cta-band">
    <div>
      <h2 id="about-cta-title" class="t-l">Let's Build<br>Something Together.</h2>
      <p class="lead" style="margin-top:12px">Whether you are an independent artist, producer, label or brand partner — we want to hear from you.</p>
    </div>
    <div class="btn-row">
      <a class="btn btn-solid" href="contact.html">Submit Your Music</a>
      <a class="btn" href="services.html">Explore Services</a>
    </div>
  </div>
</section>

</main>
${FOOTER}`;

// 3. SERVICES (services.html)
const SERVICES_HTML = `${HEAD('What We Do — Winstinct (Big W) Music Services', 'Release music across 150+ digital platforms, publishing administration, marketing, creative content and artist development.')}
${NAV('services')}
<main>

<section class="page-hero band-cream">
  <div class="wrap">
    <p class="eyebrow">What We Do</p>
    <h1 class="t-mega">Everything Your Music<br>Needs to Move Forward.</h1>
    <p class="lead">Winstinct is an independent artist services company helping artists and labels distribute, protect, promote and monetise their music. At Winstinct, we bring together music distribution, publishing, marketing and creative services to help independent artists build sustainable careers — on their own terms.</p>
    <div class="btn-row" style="margin-top:28px">
      <a class="btn btn-solid" href="#services-list">Explore Our Services</a>
      <a class="btn" href="contact.html">Submit Your Music</a>
    </div>
  </div>
</section>

<!-- 5 Services Section -->
<section class="band band-cobalt" id="services-list" aria-label="Services List">
  <div class="wrap">
    
    <!-- 1. Digital Distribution -->
    <div class="service-row" id="distribution" data-rise>
      <div>
        <p class="eyebrow" style="color:var(--lime);margin-bottom:8px">Service 01</p>
        <h2>Digital Distribution</h2>
        <p class="t-m" style="color:var(--cream);font-weight:600;margin-top:8px">Your music. Everywhere.</p>
      </div>
      <div>
        <p class="body-copy">Release music across 150+ digital platforms worldwide. We support artists with distribution, release management, metadata, platform pitching, reporting and content protection.</p>
        <ul>
          <li class="chip">150+ Platforms</li>
          <li class="chip">Release Management</li>
          <li class="chip">Metadata Verification</li>
          <li class="chip">Platform Pitching</li>
          <li class="chip">Transparent Reporting</li>
          <li class="chip">Content Protection</li>
        </ul>
      </div>
    </div>

    <!-- 2. Publishing Administration -->
    <div class="service-row" id="publishing" data-rise>
      <div>
        <p class="eyebrow" style="color:var(--lime);margin-bottom:8px">Service 02</p>
        <h2>Publishing Administration</h2>
        <p class="t-m" style="color:var(--cream);font-weight:600;margin-top:8px">Make your music work harder.</p>
      </div>
      <div>
        <p class="body-copy">Register and manage your musical works, collect publishing royalties and identify opportunities across performance, mechanical and sync revenues — while retaining your copyright ownership.</p>
        <ul>
          <li class="chip">Musical Works Registration</li>
          <li class="chip">Publishing Royalties</li>
          <li class="chip">Performance Royalties</li>
          <li class="chip">Mechanical Royalties</li>
          <li class="chip">Sync Revenues</li>
          <li class="chip">100% Copyright Retention</li>
        </ul>
      </div>
    </div>

    <!-- 3. Music Marketing & Promotions -->
    <div class="service-row" id="marketing" data-rise>
      <div>
        <p class="eyebrow" style="color:var(--lime);margin-bottom:8px">Service 03</p>
        <h2>Music Marketing &amp; Promotions</h2>
        <p class="t-m" style="color:var(--cream);font-weight:600;margin-top:8px">Make noise. Build audiences. Create impact.</p>
      </div>
      <div>
        <p class="body-copy">From digital campaigns and influencer collaborations to playlist outreach, social media promotions and PR, we help your music reach the right audiences.</p>
        <ul>
          <li class="chip">Digital Ad Campaigns</li>
          <li class="chip">Influencer Collaborations</li>
          <li class="chip">Playlist Outreach</li>
          <li class="chip">Social Media Promotions</li>
          <li class="chip">PR &amp; Press</li>
          <li class="chip">Audience Growth</li>
        </ul>
      </div>
    </div>

    <!-- 4. Content & Creative Services -->
    <div class="service-row" id="content" data-rise>
      <div>
        <p class="eyebrow" style="color:var(--lime);margin-bottom:8px">Service 04</p>
        <h2>Content &amp; Creative Services</h2>
        <p class="t-m" style="color:var(--cream);font-weight:600;margin-top:8px">Turn music into moments.</p>
      </div>
      <div>
        <p class="body-copy">From music videos and visual content to reels, shorts, podcasts and promotional edits, we create content that helps artists build their identity and connect with fans.</p>
        <ul>
          <li class="chip">Official Music Videos</li>
          <li class="chip">Visual Content</li>
          <li class="chip">Reels &amp; Shorts</li>
          <li class="chip">Podcasts &amp; Features</li>
          <li class="chip">Promotional Edits</li>
          <li class="chip">Identity &amp; Branding</li>
        </ul>
      </div>
    </div>

    <!-- 5. Artist Development & Partnerships -->
    <div class="service-row" id="artist-development" data-rise>
      <div>
        <p class="eyebrow" style="color:var(--lime);margin-bottom:8px">Service 05</p>
        <h2>Artist Development &amp; Partnerships</h2>
        <p class="t-m" style="color:var(--cream);font-weight:600;margin-top:8px">Beyond the next release.</p>
      </div>
      <div>
        <p class="body-copy">We work with select artists on career strategy, collaborations, brand opportunities, live performances and long-term growth partnerships.</p>
        <ul>
          <li class="chip">Career Strategy</li>
          <li class="chip">Artist Collaborations</li>
          <li class="chip">Brand Opportunities</li>
          <li class="chip">Live Performances</li>
          <li class="chip">Catalogue Growth</li>
          <li class="chip">Long-Term Partnerships</li>
        </ul>
      </div>
    </div>

  </div>
</section>

<!-- Key Pillars Section -->
<section class="band band-cream" aria-labelledby="pillars-serv-title">
  <div class="wrap">
    <div class="cta-band" style="margin-bottom:clamp(32px,5vw,60px)">
      <div>
        <p class="eyebrow" style="color:var(--cobalt)">The Foundation</p>
        <h2 id="pillars-serv-title" class="t-l">Our Key Pillars</h2>
      </div>
      <p class="lead">Built to protect ownership, expand reach and maximize revenue at every stage.</p>
    </div>
    <div class="card-grid">
      <div class="value" data-rise>
        <h3>Rights</h3>
        <p class="muted">Protect and manage your music ownership and publishing. Retain your masters, copyright and creative freedom while unlocking professional opportunities.</p>
      </div>
      <div class="value" data-rise>
        <h3>Reach</h3>
        <p class="muted">Take your music to audiences across platforms and markets. Deliver to 150+ digital stores, secure editorial playlist placements, and cultivate genuine fan communities.</p>
      </div>
      <div class="value" data-rise>
        <h3>Revenue</h3>
        <p class="muted">Build multiple revenue streams from your music and creativity. Unlock master streaming, mechanical royalties, public performance, sync placements, and commercial brand deals.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="band band-orange" aria-labelledby="cta-services-title">
  <div class="wrap cta-band">
    <div>
      <h2 id="cta-services-title" class="t-l">Let's Build<br>Something Together.</h2>
      <p class="lead" style="margin-top:12px">Tell us about your upcoming releases, catalogue, or vision.</p>
    </div>
    <div class="btn-row">
      <a class="btn btn-solid" href="contact.html">Submit Your Music</a>
      <a class="btn" href="contact.html?type=label">Explore Partnerships</a>
    </div>
  </div>
</section>

</main>
${FOOTER}`;

// 4. ARTISTS & LABELS (artists.html)
const ARTISTS_HTML = `${HEAD('Artists & Labels — Winstinct (Big W) Roster', 'Independent voices and distinctive sounds across hip-hop and emerging music cultures.')}
${NAV('artists')}
<main>

<section class="page-hero band-cream">
  <div class="wrap">
    <p class="eyebrow">Artists &amp; Labels</p>
    <h1 class="t-mega">Independent Voices.<br>Distinctive Sounds.</h1>
    <p class="lead">We work with artists, producers and independent labels across the evolving music landscape, with a strong connection to hip-hop and emerging music cultures. Our roster represents different sounds, stories and ambitions — united by the drive to create independently.</p>
    <div class="btn-row" style="margin-top:28px">
      <a class="btn btn-solid" href="#roster-section">Explore Our Roster</a>
      <a class="btn" href="contact.html">Partner With Us</a>
    </div>
  </div>
</section>

<!-- Roster Grid with Filter -->
<section class="band band-cream" id="roster-section" style="padding-top:0" aria-label="Roster Section">
  <div class="wrap">
    
    <div class="filters" role="group" aria-label="Filter roster by type">
      <button class="filter" type="button" data-filter="all" aria-pressed="true">All</button>
      <button class="filter" type="button" data-filter="artist" aria-pressed="false">Artists</button>
      <button class="filter" type="button" data-filter="producer" aria-pressed="false">Producers</button>
      <button class="filter" type="button" data-filter="label" aria-pressed="false">Labels</button>
    </div>

    <div class="card-grid">

      <!-- Profile 1 -->
      <article class="artist-card" data-type="artist">
        <div class="artist-header">
          <figure class="artist-avatar"><img src="assets/ph-1.svg" alt="Kaelen Vance" loading="lazy"></figure>
          <div class="artist-info">
            <span class="tag tag-artist">Artist</span>
            <h3>Kaelen Vance</h3>
            <span class="muted" style="font-size:0.85rem">Hip-Hop / Drill · London &amp; Toronto</span>
          </div>
        </div>
        <p class="artist-bio">Gritty lyricism meets cinematic drill soundscapes. Kaelen has carved out a singular lane in independent hip-hop, bridging transatlantic underground sounds with mainstream appeal.</p>
        <div class="artist-section">
          <span class="artist-section-title">Latest Releases</span>
          <p class="artist-section-content"><strong>"Crown &amp; Concrete" LP (2026)</strong> · Singles: "Cold Front", "Ghost Town"</p>
        </div>
        <div class="artist-section">
          <span class="artist-section-title">Selected Achievements</span>
          <p class="artist-section-content">24M+ global streams · Featured on Spotify's Rap UK &amp; Fresh Finds · 100% master ownership retained</p>
        </div>
        <div class="artist-links">
          <a class="artist-link" href="#" aria-label="Kaelen Vance on Spotify">Spotify</a>
          <a class="artist-link" href="#" aria-label="Kaelen Vance on YouTube">YouTube</a>
          <a class="artist-link" href="#" aria-label="Kaelen Vance on Instagram">Instagram</a>
        </div>
      </article>

      <!-- Profile 2 -->
      <article class="artist-card" data-type="artist">
        <div class="artist-header">
          <figure class="artist-avatar"><img src="assets/ph-2.svg" alt="Reya Sol" loading="lazy"></figure>
          <div class="artist-info">
            <span class="tag tag-artist">Artist</span>
            <h3>Reya Sol</h3>
            <span class="muted" style="font-size:0.85rem">Alternative R&amp;B / Afro-Fusion · Lagos &amp; London</span>
          </div>
        </div>
        <p class="artist-bio">Fusing sultry alternative R&amp;B harmonies with infectious West African percussion and hip-hop bounce, Reya creates hypnotic sonic worlds that resonate internationally.</p>
        <div class="artist-section">
          <span class="artist-section-title">Latest Releases</span>
          <p class="artist-section-content"><strong>"Golden Hour" EP (2026)</strong> · Singles: "Mirage", "Siren Call"</p>
        </div>
        <div class="artist-section">
          <span class="artist-section-title">Selected Achievements</span>
          <p class="artist-section-content">12M+ streams · Major sync placement in Netflix drama · Sold-out headline club tour in 5 European cities</p>
        </div>
        <div class="artist-links">
          <a class="artist-link" href="#" aria-label="Reya Sol on Spotify">Spotify</a>
          <a class="artist-link" href="#" aria-label="Reya Sol on YouTube">YouTube</a>
          <a class="artist-link" href="#" aria-label="Reya Sol on Instagram">Instagram</a>
        </div>
      </article>

      <!-- Profile 3 -->
      <article class="artist-card" data-type="producer">
        <div class="artist-header">
          <figure class="artist-avatar"><img src="assets/ph-3.svg" alt="Southside Wave" loading="lazy"></figure>
          <div class="artist-info">
            <span class="tag tag-label">Producer</span>
            <h3>Southside Wave</h3>
            <span class="muted" style="font-size:0.85rem">Trap &amp; Melodic Drill · Atlanta</span>
          </div>
        </div>
        <p class="artist-bio">Prolific production duo engineering modern trap textures, thunderous 808s and emotive sample flips. Behind some of the hardest-hitting anthems in the independent circuit.</p>
        <div class="artist-section">
          <span class="artist-section-title">Latest Releases</span>
          <p class="artist-section-content"><strong>"Wave Theory Vol. 2" (2026)</strong> · Producer cuts for multi-platinum releases</p>
        </div>
        <div class="artist-section">
          <span class="artist-section-title">Selected Achievements</span>
          <p class="artist-section-content">85M+ catalog streams · Official sync partner for ESPN broadcast &amp; 2K Games · Multi-territory publishing administration</p>
        </div>
        <div class="artist-links">
          <a class="artist-link" href="#" aria-label="Southside Wave on Spotify">Spotify</a>
          <a class="artist-link" href="#" aria-label="Southside Wave on YouTube">YouTube</a>
          <a class="artist-link" href="#" aria-label="Southside Wave on Instagram">Instagram</a>
        </div>
      </article>

      <!-- Profile 4 -->
      <article class="artist-card" data-type="label">
        <div class="artist-header">
          <figure class="artist-avatar"><img src="assets/ph-4.svg" alt="North District Records" loading="lazy"></figure>
          <div class="artist-info">
            <span class="tag tag-label">Label</span>
            <h3>North District Records</h3>
            <span class="muted" style="font-size:0.85rem">Independent Hip-Hop Label · Montréal &amp; New York</span>
          </div>
        </div>
        <p class="artist-bio">Boutique independent label home to uncompromising lyricists, beatmakers and visual creators. Committed to artist development and full catalogue autonomy.</p>
        <div class="artist-section">
          <span class="artist-section-title">Latest Releases</span>
          <p class="artist-section-content"><strong>"Northern Heights Compilation" (2026)</strong> · 8 single campaigns delivered</p>
        </div>
        <div class="artist-section">
          <span class="artist-section-title">Selected Achievements</span>
          <p class="artist-section-content">65M+ collective streams across 8 roster acts · Partnered with Winstinct for 150+ DSP distribution &amp; global publishing</p>
        </div>
        <div class="artist-links">
          <a class="artist-link" href="#" aria-label="North District on Spotify">Spotify</a>
          <a class="artist-link" href="#" aria-label="North District on YouTube">YouTube</a>
          <a class="artist-link" href="#" aria-label="North District on Instagram">Instagram</a>
        </div>
      </article>

      <!-- Profile 5 -->
      <article class="artist-card" data-type="artist">
        <div class="artist-header">
          <figure class="artist-avatar"><img src="assets/ph-1.svg" alt="Tariq Malik" loading="lazy"></figure>
          <div class="artist-info">
            <span class="tag tag-artist">Artist</span>
            <h3>Tariq Malik</h3>
            <span class="muted" style="font-size:0.85rem">Conscious Hip-Hop / Jazz-Rap · Chicago</span>
          </div>
        </div>
        <p class="artist-bio">Intricate rhyme schemes, live jazz instrumentation and sharp cultural commentary. Tariq bridges golden-era lyrical discipline with forward-thinking independent vision.</p>
        <div class="artist-section">
          <span class="artist-section-title">Latest Releases</span>
          <p class="artist-section-content"><strong>"Blueprints for Tomorrow" (2026)</strong> · Single: "Cornerstone"</p>
        </div>
        <div class="artist-section">
          <span class="artist-section-title">Selected Achievements</span>
          <p class="artist-section-content">9.5M streams · NPR Tiny Desk feature submission spotlight · Extensive festival appearances</p>
        </div>
        <div class="artist-links">
          <a class="artist-link" href="#" aria-label="Tariq Malik on Spotify">Spotify</a>
          <a class="artist-link" href="#" aria-label="Tariq Malik on YouTube">YouTube</a>
          <a class="artist-link" href="#" aria-label="Tariq Malik on Instagram">Instagram</a>
        </div>
      </article>

      <!-- Profile 6 -->
      <article class="artist-card" data-type="producer">
        <div class="artist-header">
          <figure class="artist-avatar"><img src="assets/ph-group.svg" alt="Nova Soundworks" loading="lazy"></figure>
          <div class="artist-info">
            <span class="tag tag-label">Producer</span>
            <h3>Nova Soundworks</h3>
            <span class="muted" style="font-size:0.85rem">Electronic Drill / Synth-Trap · Seoul &amp; Los Angeles</span>
          </div>
        </div>
        <p class="artist-bio">Visionary sound design collective blending analog synthesizers, sharp drill cadence and bass-heavy mixdowns, collaborating with boundary-pushing vocalists worldwide.</p>
        <div class="artist-section">
          <span class="artist-section-title">Latest Releases</span>
          <p class="artist-section-content"><strong>"Neon District Instrumentals" (2026)</strong> · Co-production on UK #1 Indie single</p>
        </div>
        <div class="artist-section">
          <span class="artist-section-title">Selected Achievements</span>
          <p class="artist-section-content">30M+ total platform streams · Global sync placements across gaming and streetwear commercial campaigns</p>
        </div>
        <div class="artist-links">
          <a class="artist-link" href="#" aria-label="Nova Soundworks on Spotify">Spotify</a>
          <a class="artist-link" href="#" aria-label="Nova Soundworks on YouTube">YouTube</a>
          <a class="artist-link" href="#" aria-label="Nova Soundworks on Instagram">Instagram</a>
        </div>
      </article>

    </div>
  </div>
</section>

<!-- CTA -->
<section class="band band-orange" aria-labelledby="join-roster-title">
  <div class="wrap cta-band">
    <div>
      <h2 id="join-roster-title" class="t-l">Partner With Us.</h2>
      <p class="lead" style="margin-top:12px">Are you an independent artist, producer or label ready to take your music to the next level without giving up your masters?</p>
    </div>
    <a class="btn btn-solid" href="contact.html">Submit Your Music</a>
  </div>
</section>

</main>
${FOOTER}`;

// 5. OUR WORK (work.html)
const WORK_HTML = `${HEAD('Our Work — Winstinct (Big W) Case Studies', 'Good music deserves good execution. Showcase of release campaigns, publishing administration, creative content and partnerships.')}
${NAV('work')}
<main>

<section class="page-hero band-cream">
  <div class="wrap">
    <p class="eyebrow">Our Work</p>
    <h1 class="t-mega">Good Music Deserves<br>Good Execution.</h1>
    <p class="lead">From release campaigns to artist collaborations, we work behind the scenes to turn creative ideas into real-world outcomes.</p>
    <div class="btn-row" style="margin-top:28px">
      <a class="btn btn-solid" href="#case-studies">Explore Our Projects</a>
      <a class="btn" href="contact.html">Partner With Us</a>
    </div>
  </div>
</section>

<!-- Case Studies -->
<section class="band band-cobalt" id="case-studies" aria-label="Selected Projects">
  <div class="wrap">

    <!-- Case Study 1 -->
    <article class="case-study" data-rise>
      <div class="case-study-meta">
        <span class="case-badge">Case Study 01</span>
        <h2 class="case-title">Kaelen Vance — "Crown &amp; Concrete" LP Campaign</h2>
        <span class="case-role">Our Role: Global Distribution &amp; Release Management</span>
      </div>
      <div class="case-study-details">
        <div class="case-item">
          <span class="case-label">Artist / Project</span>
          <p class="case-val">Kaelen Vance (Independent Hip-Hop &amp; Drill Artist) — Debut Studio Album</p>
        </div>
        <div class="case-item">
          <span class="case-label">Campaign Objective</span>
          <p class="case-val">Execute a synchronized worldwide release across 150+ digital platforms, secure high-impact DSP editorial playlisting, and elevate an underground artist to international prominence while retaining 100% master ownership.</p>
        </div>
        <div class="case-item">
          <span class="case-label">Services Delivered</span>
          <p class="case-val">Digital Distribution, Release Management, Metadata Delivery &amp; Optimization, DSP Editorial Pitching, Content Protection &amp; Audio Fingerprinting.</p>
        </div>
        <div class="case-results-box">
          <span class="case-results-title">Highlights and Measurable Results</span>
          <p class="case-val"><strong>24.2M streams</strong> in the first 6 months · Landed placements on <strong>14 major editorial playlists</strong> (Rap UK, Fresh Finds, Hip-Hop Central) · <strong>100% master and copyright ownership</strong> retained by the artist.</p>
        </div>
      </div>
    </article>

    <!-- Case Study 2 -->
    <article class="case-study" data-rise>
      <div class="case-study-meta">
        <span class="case-badge">Case Study 02</span>
        <h2 class="case-title">Southside Wave — Global Publishing &amp; Sync Optimization</h2>
        <span class="case-role">Our Role: Exclusive Publishing Administrator &amp; Sync Representative</span>
      </div>
      <div class="case-study-details">
        <div class="case-item">
          <span class="case-label">Artist / Project</span>
          <p class="case-val">Southside Wave (Independent Beatmaker &amp; Producer Duo) — Catalogue Administration</p>
        </div>
        <div class="case-item">
          <span class="case-label">Campaign Objective</span>
          <p class="case-val">Audit multi-year unregistered song splits, recover retroactive mechanical and performance royalties across worldwide collection societies, and identify prime sync licensing opportunities.</p>
        </div>
        <div class="case-item">
          <span class="case-label">Services Delivered</span>
          <p class="case-val">Publishing Administration, Global Works Registration, Retroactive Royalty Recovery, Sync Representation and Commercial Contract Negotiation.</p>
        </div>
        <div class="case-results-box">
          <span class="case-results-title">Highlights and Measurable Results</span>
          <p class="case-val"><strong>Recovered 22 months of unclaimed royalties</strong> · Achieved a <strong>240% increase in net quarterly publishing revenue</strong> · Secured sync placements across <strong>national sports television and a major video game franchise</strong>.</p>
        </div>
      </div>
    </article>

    <!-- Case Study 3 -->
    <article class="case-study" data-rise>
      <div class="case-study-meta">
        <span class="case-badge">Case Study 03</span>
        <h2 class="case-title">Reya Sol — "Golden Hour" Visual Identity &amp; Digital Campaign</h2>
        <span class="case-role">Our Role: Creative Direction, Content Production &amp; Digital Marketing</span>
      </div>
      <div class="case-study-details">
        <div class="case-item">
          <span class="case-label">Artist / Project</span>
          <p class="case-val">Reya Sol (Alternative R&amp;B / Afro-Fusion) — "Golden Hour" EP Launch</p>
        </div>
        <div class="case-item">
          <span class="case-label">Campaign Objective</span>
          <p class="case-val">Turn sonic creativity into memorable visual moments, building an unmistakable artist identity and converting casual social scrollers into loyal long-term fans.</p>
        </div>
        <div class="case-item">
          <span class="case-label">Services Delivered</span>
          <p class="case-val">Content &amp; Creative Services (Official 4K Music Video, 30+ custom Reels &amp; TikTok edits, artist interview podcast), Targeted Digital Marketing, Influencer Partnerships.</p>
        </div>
        <div class="case-results-box">
          <span class="case-results-title">Highlights and Measurable Results</span>
          <p class="case-val"><strong>5.8M organic video views</strong> across TikTok and Instagram Reels · <strong>125,000 new monthly listeners</strong> added on Spotify · Debut headline club tour <strong>sold out in 72 hours</strong>.</p>
        </div>
      </div>
    </article>

    <!-- Case Study 4 -->
    <article class="case-study" data-rise>
      <div class="case-study-meta">
        <span class="case-badge">Case Study 04</span>
        <h2 class="case-title">Apex Sound Lab x Streetwear Cultural Collab</h2>
        <span class="case-role">Our Role: Artist Development &amp; Strategic Brand Partnership</span>
      </div>
      <div class="case-study-details">
        <div class="case-item">
          <span class="case-label">Artist / Project</span>
          <p class="case-val">Apex Sound Lab (Independent Roster) x North District Cultural Partnership</p>
        </div>
        <div class="case-item">
          <span class="case-label">Campaign Objective</span>
          <p class="case-val">Connect authentic independent music creators with a culturally aligned streetwear brand to create meaningful connections between music, culture and commercial opportunity without compromising artistic integrity.</p>
        </div>
        <div class="case-item">
          <span class="case-label">Services Delivered</span>
          <p class="case-val">Artist Development, Commercial Deal Structuring, Co-Branded Media Production, Live Showcase Curation and Cross-Platform PR.</p>
        </div>
        <div class="case-results-box">
          <span class="case-results-title">Highlights and Measurable Results</span>
          <p class="case-val"><strong>$190,000 in direct sponsorship &amp; licensing value</strong> unlocked for roster artists · <strong>4.1M cultural impressions</strong> · Established a multi-season ongoing partnership for independent talent.</p>
        </div>
      </div>
    </article>

  </div>
</section>

<!-- Process -->
<section class="band band-cream" aria-labelledby="process-head">
  <div class="wrap">
    <div class="cta-band" style="margin-bottom:clamp(32px,5vw,60px)">
      <div>
        <p class="eyebrow" style="color:var(--cobalt)">Execution</p>
        <h2 id="process-head" class="t-l">How We Turn Ideas Into Impact</h2>
      </div>
      <p class="lead">From initial concept to measurable results, we execute with precision.</p>
    </div>
    <ol class="steps">
      <li>
        <h3>1. Strategize</h3>
        <p class="muted">We assess your music, catalogue, target audience and career goals to design a bespoke release and revenue roadmap.</p>
      </li>
      <li>
        <h3>2. Protect</h3>
        <p class="muted">Verify audio, metadata, mechanical and publishing registrations to ensure 100% rights security before delivery.</p>
      </li>
      <li>
        <h3>3. Amplify</h3>
        <p class="muted">Deploy global distribution to 150+ platforms, pitch to editorial gatekeepers, and activate coordinated marketing campaigns.</p>
      </li>
      <li>
        <h3>4. Monetise</h3>
        <p class="muted">Collect every dollar across streams, sync, mechanical and performance royalties with transparent reporting.</p>
      </li>
    </ol>
  </div>
</section>

<!-- CTA -->
<section class="band band-orange" aria-labelledby="work-cta-title">
  <div class="wrap cta-band">
    <div>
      <h2 id="work-cta-title" class="t-l">Ready for Real Outcomes?</h2>
      <p class="lead" style="margin-top:12px">Explore our projects or talk to our team about your next campaign.</p>
    </div>
    <div class="btn-row">
      <a class="btn btn-solid" href="contact.html">Submit Your Music</a>
      <a class="btn" href="contact.html?type=label">Explore Partnerships</a>
    </div>
  </div>
</section>

</main>
${FOOTER}`;

// 6. INSIGHTS / NEWS (news.html)
const NEWS_HTML = `${HEAD('Insights & News — Winstinct (Big W)', 'Notes from the independent music scene: artist stories, new releases, music business insights and company updates.')}
${NAV('news')}
<main>

<section class="page-hero band-cream">
  <div class="wrap">
    <p class="eyebrow">Insights &amp; News</p>
    <h1 class="t-mega">Notes From the<br>Independent Music Scene.</h1>
    <p class="lead">Stories, perspectives and updates from the world of independent music.</p>
  </div>
</section>

<!-- Category Filter -->
<section class="band band-cream" style="padding-top:0" aria-label="News Categories">
  <div class="wrap">
    <div class="filters" role="group" aria-label="Filter insights by category">
      <button class="filter" type="button" data-filter="all" aria-pressed="true">All</button>
      <button class="filter" type="button" data-filter="artist-stories" aria-pressed="false">Artist Stories</button>
      <button class="filter" type="button" data-filter="new-releases" aria-pressed="false">New Releases</button>
      <button class="filter" type="button" data-filter="music-business" aria-pressed="false">Music Business &amp; Insights</button>
      <button class="filter" type="button" data-filter="campaigns" aria-pressed="false">Campaigns &amp; Collaborations</button>
      <button class="filter" type="button" data-filter="updates" aria-pressed="false">Winstinct Updates</button>
    </div>
  </div>
</section>

<!-- Featured Story -->
<section class="band band-cream" style="padding-top:0" aria-label="Featured Story">
  <div class="wrap">
    <article class="featured">
      <figure class="ph" style="margin:0"><img src="assets/ph-group.svg" alt="Winstinct artist services"></figure>
      <div class="stack">
        <p class="post-meta"><span class="cat">Winstinct Updates</span><span>Latest Feature</span></p>
        <h2 class="t-l">Built for Independent Music: How Winstinct Is Empowering Artist Ownership</h2>
        <p class="body-copy muted">The music industry is changing. Artists want more control, better opportunities and partners who understand their vision. At Winstinct, we bring together music distribution, publishing, marketing and creative services to help independent artists build sustainable careers — on their own terms.</p>
        <a class="link-arrow" href="#article-1">Read the perspective</a>
      </div>
    </article>
  </div>
</section>

<!-- Post Grid -->
<section class="band band-cream" style="padding-top:0" aria-label="All Insights">
  <div class="wrap card-grid">

    <!-- Post 1 -->
    <article class="post-card" data-cat="artist-stories" id="article-1">
      <figure class="ph" style="margin:0"><img src="assets/ph-1.svg" alt="Artist Stories" loading="lazy"></figure>
      <p class="post-meta"><span class="cat">Artist Stories</span><span>Feature</span></p>
      <h3>Behind the Beat: How Independent Hip-Hop Creators Are Redefining Ownership</h3>
      <p class="muted" style="font-size:0.95rem">Why modern hip-hop producers and lyricists are skipping traditional major label deals in favor of retaining their copyright and building long-term catalogue value.</p>
    </article>

    <!-- Post 2 -->
    <article class="post-card" data-cat="new-releases">
      <figure class="ph" style="margin:0"><img src="assets/ph-2.svg" alt="New Releases" loading="lazy"></figure>
      <p class="post-meta"><span class="cat">New Releases</span><span>Music</span></p>
      <h3>Fresh Sounds: The Defining Independent Releases Shaping Emerging Culture This Month</h3>
      <p class="muted" style="font-size:0.95rem">From UK drill and transatlantic trap to alternative Afro-fusion, we highlight the most impactful independent tracks moving audiences worldwide.</p>
    </article>

    <!-- Post 3 -->
    <article class="post-card" data-cat="music-business">
      <figure class="ph" style="margin:0"><img src="assets/ph-3.svg" alt="Music Business Insights" loading="lazy"></figure>
      <p class="post-meta"><span class="cat">Music Business &amp; Insights</span><span>Guide</span></p>
      <h3>Rights, Reach &amp; Revenue: The Three Pillars of a Sustainable Music Career</h3>
      <p class="muted" style="font-size:0.95rem">A breakdown of how independent artists can balance copyright protection, global platform reach across 150+ stores, and multi-stream monetisation.</p>
    </article>

    <!-- Post 4 -->
    <article class="post-card" data-cat="campaigns">
      <figure class="ph" style="margin:0"><img src="assets/ph-4.svg" alt="Campaigns & Collaborations" loading="lazy"></figure>
      <p class="post-meta"><span class="cat">Campaigns &amp; Collaborations</span><span>Case Study</span></p>
      <h3>Turn Music Into Moments: How Visual Content &amp; Short-Form Edits Drive Real Streams</h3>
      <p class="muted" style="font-size:0.95rem">Behind the scenes of our creative campaigns: how official music videos, TikTok shorts and tailored podcast features build authentic artist identity.</p>
    </article>

    <!-- Post 5 -->
    <article class="post-card" data-cat="updates">
      <figure class="ph" style="margin:0"><img src="assets/ph-group.svg" alt="Winstinct Updates" loading="lazy"></figure>
      <p class="post-meta"><span class="cat">Winstinct Updates</span><span>Company</span></p>
      <h3>150+ Digital Platforms Worldwide: Expanding Reach, Reporting &amp; Content Protection</h3>
      <p class="muted" style="font-size:0.95rem">Winstinct expands distribution partnerships and enhances automated audio fingerprinting to protect artist rights and monetize every play globally.</p>
    </article>

    <!-- Post 6 -->
    <article class="post-card" data-cat="music-business">
      <figure class="ph" style="margin:0"><img src="assets/ph-1.svg" alt="Publishing Royalties" loading="lazy"></figure>
      <p class="post-meta"><span class="cat">Music Business &amp; Insights</span><span>Industry</span></p>
      <h3>Publishing Administration Explained: Performance, Mechanical &amp; Sync Royalties</h3>
      <p class="muted" style="font-size:0.95rem">How publishing royalties work, why thousands of independent artists leave money on the table, and how to claim every revenue stream while keeping copyright.</p>
    </article>

  </div>
</section>

<!-- Newsletter / CTA -->
<section class="band band-orange" aria-labelledby="news-cta-title">
  <div class="wrap cta-band">
    <div>
      <h2 id="news-cta-title" class="t-l">Stay Connected to the Scene.</h2>
      <p class="lead" style="margin-top:12px">Receive stories, release announcements and music business insights directly from our team.</p>
    </div>
    <a class="btn btn-solid" href="contact.html">Get in Touch</a>
  </div>
</section>

</main>
${FOOTER}`;

// 7. JOIN / CONTACT (contact.html)
const CONTACT_HTML = `${HEAD('Join / Contact — Winstinct (Big W)', 'Let us build something together. Submit your music, explore distribution partnerships or collaborate with our artist roster.')}
${NAV('contact')}
<main>

<section class="page-hero band-cream">
  <div class="wrap">
    <p class="eyebrow">Join / Contact</p>
    <h1 class="t-mega">Let's Build<br>Something Together.</h1>
    <p class="lead">Whether you're an independent artist looking for the right partner, a label exploring new opportunities or a brand looking to collaborate — we'd love to hear from you.</p>
  </div>
</section>

<!-- 3 Audience Streams Section -->
<section class="band band-cobalt" aria-labelledby="who-title">
  <div class="wrap">
    <div class="cta-band" style="margin-bottom:clamp(32px,5vw,60px)">
      <div>
        <p class="eyebrow" style="color:var(--lime)">Who We Work With</p>
        <h2 id="who-title" class="t-l">Tailored Support for Every Partner</h2>
      </div>
      <p class="lead">Select your pathway and let our team connect you with the right opportunities.</p>
    </div>

    <div class="audience-grid">
      
      <!-- For Artists & Producers -->
      <div class="audience-card">
        <span class="eyebrow" style="color:var(--lime)">01 · Creators</span>
        <h3>For Artists &amp; Producers</h3>
        <p>Looking for distribution across 150+ platforms, publishing administration, targeted marketing or career support?</p>
        <a class="btn btn-sm btn-solid" href="#contact-form-section">Submit Your Music</a>
      </div>

      <!-- For Labels & Partners -->
      <div class="audience-card">
        <span class="eyebrow" style="color:var(--lime)">02 · Industry</span>
        <h3>For Labels &amp; Industry Partners</h3>
        <p>Let's explore distribution partnerships, catalogue opportunities, rights administration and strategic collaborations.</p>
        <a class="btn btn-sm btn-solid" href="#contact-form-section">Explore Partnerships</a>
      </div>

      <!-- For Brands & Agencies -->
      <div class="audience-card">
        <span class="eyebrow" style="color:var(--lime)">03 · Brands</span>
        <h3>For Brands &amp; Agencies</h3>
        <p>Let's create meaningful connections between music, culture and brands through authentic artist partnerships and sync licensing.</p>
        <a class="btn btn-sm btn-solid" href="#contact-form-section">Get in Touch</a>
      </div>

    </div>
  </div>
</section>

<!-- Contact Form Section -->
<section class="band band-cream" id="contact-form-section" aria-label="Contact Form">
  <div class="wrap contact-grid">
    
    <div>
      <h2 class="t-l" style="margin-bottom:24px">Send Us a Message</h2>
      <form class="form" id="contact-form" novalidate>
        
        <div class="field">
          <label for="f-name">Your Name</label>
          <input id="f-name" name="name" type="text" autocomplete="name" placeholder="Full name" required>
        </div>

        <div class="field">
          <label for="f-email">Email Address</label>
          <input id="f-email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required>
        </div>

        <div class="field">
          <label for="f-type">I Am</label>
          <select id="f-type" name="type">
            <option value="artist">An Independent Artist</option>
            <option value="producer">A Music Producer / Beatmaker</option>
            <option value="label">An Independent Label / Catalogue Owner</option>
            <option value="brand">A Brand or Creative Agency</option>
            <option value="manager">An Artist Manager</option>
            <option value="other">Something else</option>
          </select>
        </div>

        <div class="field">
          <label for="f-org">Artist / Label / Company Name</label>
          <input id="f-org" name="organization" type="text" placeholder="Stage or entity name">
        </div>

        <div class="field field-full">
          <label for="f-link">Link to Your Music / Catalogue / Portfolio</label>
          <input id="f-link" name="link" type="url" placeholder="https://spotify.com / soundcloud / drive / website">
        </div>

        <div class="field field-full">
          <label for="f-services">Services You Are Interested In</label>
          <select id="f-services" name="services">
            <option value="distribution">Digital Distribution (150+ Platforms)</option>
            <option value="publishing">Publishing Administration &amp; Royalties</option>
            <option value="marketing">Music Marketing &amp; Promotions</option>
            <option value="content">Content &amp; Creative Services</option>
            <option value="development">Artist Development &amp; Brand Partnerships</option>
            <option value="full-service">Full-Service Partnership</option>
          </select>
        </div>

        <div class="field field-full">
          <label for="f-msg">Your Message</label>
          <textarea id="f-msg" name="message" placeholder="Tell us about your next release, catalogue, or collaboration vision..."></textarea>
        </div>

        <div class="field-full">
          <button class="btn btn-solid" type="submit">Submit Inquiry</button>
        </div>

        <p class="form-note" role="status" hidden></p>
      </form>
    </div>

    <!-- Sidebar Info -->
    <div class="stack" style="gap:32px">
      <div>
        <h2 class="eyebrow" style="color:var(--cobalt);margin-bottom:16px">Primary CTAs</h2>
        <ul class="office-list">
          <li>
            <h3>Submit Your Music</h3>
            <p>Artists &amp; producers looking for global distribution, publishing collection and release marketing.</p>
          </li>
          <li>
            <h3>Explore Partnerships</h3>
            <p>Independent labels and catalogues seeking distribution partnerships, rights administration and strategic backing.</p>
          </li>
          <li>
            <h3>Get in Touch</h3>
            <p>Brands, agencies and supervisors looking for authentic music cultural partnerships and sync licensing.</p>
          </li>
        </ul>
      </div>

      <div style="padding:24px;background:rgba(17,17,20,0.04);border-radius:12px;border:1px solid var(--line)">
        <h3 style="font-size:var(--t-s);font-weight:800;margin-bottom:8px">Response Time</h3>
        <p class="muted" style="font-size:0.95rem">A dedicated member of our team reviews every submission. We typically reply within 2 to 3 business days.</p>
      </div>
    </div>

  </div>
</section>

</main>
${FOOTER}`;

// Write all files
const pages = [
  { file: 'index.html', content: INDEX_HTML },
  { file: 'about.html', content: ABOUT_HTML },
  { file: 'services.html', content: SERVICES_HTML },
  { file: 'artists.html', content: ARTISTS_HTML },
  { file: 'work.html', content: WORK_HTML },
  { file: 'news.html', content: NEWS_HTML },
  { file: 'contact.html', content: CONTACT_HTML },
];

pages.forEach(p => {
  fs.writeFileSync(p.file, p.content, 'utf8');
  console.log('Successfully wrote: ' + p.file + ' (' + p.content.length + ' bytes)');
});

console.log('All 7 pages updated with 100% docx content!');

