/* ========================================
   Homework Design Studio — app.js
   Hash router + 6 view renderers
   ======================================== */

(function () {
  'use strict';

  const app = document.getElementById('app-content');
  const navItems = document.querySelectorAll('.nav-item');

  // ── Business data ──────────────────────

  const WHATSAPP = '919953770123';

  const SERVICES = [
    { id: 'renovations', title: 'Full Home Renovations', icon: 'home', desc: 'End-to-end renovation — from design concept to final handover. Walls, flooring, electrical, plumbing, carpentry, and finishing.' },
    { id: 'kitchens', title: 'Modular Kitchens', icon: 'kitchen', desc: 'Custom modular kitchen design and installation with premium hardware, soft-close fittings, and stone countertops.' },
    { id: 'marble', title: 'Marble Polishing', icon: 'marble', desc: 'Professional marble and granite polishing, restoration, and sealing. Diamond-pad grinding for mirror finishes.' },
    { id: 'color', title: 'Color Consulting', icon: 'palette', desc: 'Expert color palette selection for interiors and exteriors. On-site consultations with sample testing.' },
    { id: 'restyling', title: 'Restyling', icon: 'restyle', desc: 'Refresh your space without a full renovation. Furniture rearrangement, accent walls, lighting, and decor updates.' },
    { id: 'vanities', title: 'Hand-Crafted Vanities', icon: 'vanity', desc: 'Bespoke bathroom vanities built with solid wood, natural stone tops, and artisan hardware.' },
    { id: 'cleaning', title: 'Deep Cleaning', icon: 'clean', desc: 'Professional deep cleaning for post-renovation, move-in, or seasonal refresh. Eco-friendly products.' },
  ];

  // Portfolio — real projects with editorial coverage.
  // To add real photos, drop files into images/portfolio/{id}.jpg
  // (any size, landscape-ish); the tiles & detail hero load them as
  // a CSS background layer over the gradient, so missing files just
  // fall through to the gradient without any broken-image flash.
  const PORTFOLIO = [
    {
      id: 'the-icon',
      title: 'The Icon',
      location: 'DLF Phase 5, Gurgaon',
      category: 'Full Renovation',
      scope: '3200 sqft apartment',
      color: '#C9B99A',
      description: 'A renewed collaboration with an existing client. This 3200 sqft apartment at The Icon was reimagined through its most-used spaces — foyer, dining, drawing room, and master bedroom. The foyer was meticulously designed to camouflage the servant-room entrance and the MCB box into a cohesive, inviting entryway. The dining area carries a stunning bar and crockery section, artfully designed to display the client\'s crystal collection and offer a pull-up bar counter for entertaining. The master bedroom was tailored as a serene retreat, with dual his/her wardrobes and a cozy study nook, finished in a warm and comfortable aesthetic. The compact bathroom was rethought around a long vanity with integrated pull-out laundry, amplified by a large mirror that creates the illusion of more space.',
      quote: 'Throughout the project, the focus was on subtle color schemes and handpicked decor elements, ensuring that every detail reflects the client\'s personal style.',
    },
    {
      id: 'the-belaire',
      title: 'The Belaire',
      location: 'DLF Belaire, Gurgaon',
      category: 'Full Renovation',
      scope: '3000 sqft residence',
      color: '#C6A0A0',
      description: 'A 3000 sqft residence in the premium DLF Belaire condominium, designed as a comfortable, elegant base for a couple whose child now lives and works abroad. With their visits to India often filled with entertaining friends, the brief was a space that blends traditional elegance with modern functionality — a sanctuary that reads as warm, sophisticated, and practical. Warm, earthy tones run throughout the home, and every detail from the flooring to the bathroom fixtures was chosen for a premium, enduring feel. Thoughtfully curated art pieces and accessories give the home character and reflect the couple\'s tastes and cultural roots.',
    },
    {
      id: 'parsvnath-exotica',
      title: 'Parsvnath Exotica',
      location: 'Golf Course Road, Gurgaon',
      category: 'Full Renovation',
      scope: '2600 sqft home',
      color: '#B8A9C9',
      description: 'A 2600 sqft home on Golf Course Road that tells a story of elegance, thoughtful design, and a seamless blend of art and function. The clients were transitioning from a larger 3800 sqft residence, and the brief was to preserve the grandeur and functionality of their old home while crafting a more intimate, equally impressive space. Known for their impeccable taste and well-curated collection of art and artifacts, they needed a home that speaks to their love for art while maintaining sophistication and function. Custom cabinetry and integrated solutions run throughout, ensuring functionality never compromises the aesthetic. Bespoke pieces — a custom-designed bed and built-in storage — enhance the sense of luxury without adding visual clutter, while natural light, soft textures, and carefully chosen furnishings contribute to an overall sense of tranquility.',
    },
    {
      id: 'palam-vihar',
      title: 'Palam Vihar Residence',
      location: 'Palam Vihar, Gurgaon',
      category: 'Full Renovation',
      scope: '2500 sqft · Second floor',
      color: '#A0C6A0',
      description: 'A 2500 sqft second floor designed for a young couple as their own private space. The hero of the home is a very large attached terrace with a gorgeous mature tree lending shade and beauty. The floor was irregular — generous in some places, tight in others — so the layout had to balance aesthetics with logical accessibility. The main bedroom was reworked as the primary living quarters, the second bedroom became a family and entertainment room, and a Teak French door with an arched top turned into the real showstopper, anchoring the whole room. The terrace was transformed into an informal extension of the living space — mosaic feature tiles on the walls and ceiling, layered feature lighting, and a new built-in bar.',
    },
    {
      id: 'experion-windchants',
      title: 'Experion Windchants',
      location: 'Dwarka Expressway, Gurgaon',
      category: 'Full Renovation',
      scope: '1500 sqft apartment',
      color: '#A0B2C6',
      description: 'A 1500 sqft apartment at Experion Windchants, designed with a Contemporary Classic sensibility for a very busy doctor who was deeply hands-on with the build. The brief was unusual: modern throughout, but certain pieces of furniture and art — all of great sentimental value — had to move with her into the new home. In the formal living space, where the large existing sofas shared the room with an old-world rocking chair, an accent media wall was added in rustic Spanish brick-finish tiles. On the balconies, many of the plants had travelled with the client for years and were carefully transplanted; a high table set with oversized planters was introduced to achieve privacy in the main balcony without losing the greenery.',
    },
  ];

  const TIMELINE = [
    { year: '2001', text: 'Shagun begins her career with ITC Hotels, honing her eye for luxury interiors and guest experience.' },
    { year: '2008', text: 'Leaves hospitality to pursue independent design work and raises her family.' },
    { year: '2012', text: 'Founds Homework in Gurgaon — originally as a specialist deep cleaning and marble polishing service, the only one of its kind in the city\'s high-end real estate at the time.' },
    { year: '2015', text: 'Expands into full home renovations and end-to-end interior design, taking on both full and partial renovations.' },
    { year: '2021', text: 'Crosses 50 full home renovations and close to 200 bathroom makeovers. Builds a trusted following on Instagram as @homework_homeimprovement.' },
    { year: '2024', text: '30K+ Instagram followers. Recognized as a trusted name in Gurgaon home renovations.' },
  ];

  // ── Service icons (inline SVG) ─────────

  function serviceIcon(type) {
    const icons = {
      home: '<path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/>',
      kitchen: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/><path d="M12 4v8"/><circle cx="8" cy="16" r="1"/><circle cx="16" cy="16" r="1"/>',
      marble: '<circle cx="12" cy="12" r="9"/><path d="M8 8c4 1 4 7 8 8"/><path d="M6 14c3-1 5-5 10-4"/>',
      palette: '<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12" r="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10a2 2 0 002-2v-1a2 2 0 012-2h1a2 2 0 002-2c0-5.5-4.5-10-10-10z"/>',
      restyle: '<path d="M12 3v18"/><path d="M3 12l4-4v8z"/><path d="M21 12l-4-4v8z"/>',
      vanity: '<rect x="3" y="8" width="18" height="12" rx="1"/><path d="M7 8V6a5 5 0 0110 0v2"/><path d="M3 14h18"/>',
      clean: '<path d="M12 2v6"/><path d="M8 4l1 4"/><path d="M16 4l-1 4"/><path d="M5 8h14l-1 14H6z"/><path d="M9 12v4"/><path d="M15 12v4"/>',
    };
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${icons[type] || icons.home}</svg>`;
  }

  // ── Router ─────────────────────────────

  const routes = {
    '/': renderHome,
    '/services': renderServices,
    '/portfolio': renderPortfolio,
    '/about': renderAbout,
    '/book': renderBook,
    '/contact': renderContact,
  };

  let currentView = null;

  function navigate() {
    const hash = location.hash || '#/';
    const path = hash.slice(1) || '/';

    // Match parameterized routes first (e.g. /portfolio/3)
    const portfolioDetailMatch = path.match(/^\/portfolio\/([^/]+)$/);
    let render;
    if (portfolioDetailMatch) {
      const projectId = portfolioDetailMatch[1];
      render = (c) => renderPortfolioDetail(c, projectId);
    } else {
      render = routes[path] || routes['/'];
    }

    // Update active nav — portfolio detail pages still highlight Portfolio tab
    const navPath = portfolioDetailMatch ? '/portfolio' : path;
    navItems.forEach(item => {
      const view = item.getAttribute('data-view');
      const isActive =
        (navPath === '/' && view === 'home') ||
        navPath === '/' + view;
      item.classList.toggle('active', isActive);
    });

    // View transition
    if (currentView === path) return;
    const isFirstLoad = currentView === null;
    currentView = path;

    if (isFirstLoad) {
      // No exit animation on first load — render immediately
      app.innerHTML = '';
      render(app);
      return;
    }

    app.classList.add('view-exit');
    setTimeout(() => {
      app.innerHTML = '';
      render(app);
      app.classList.remove('view-exit');
      app.classList.add('view-enter');
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          app.classList.remove('view-enter');
        });
      });
    }, 150);
  }

  window.addEventListener('hashchange', navigate);

  // ── Views ──────────────────────────────

  // ─── HOME ──────────────────────────────

  function renderHome(container) {
    container.innerHTML = `
      <div class="hero placeholder-hero">
        <div class="hero-overlay">
          <div class="hero-brand">Homework Design Studio</div>
          <h1 class="hero-heading">Thoughtful spaces,<br>crafted with care</h1>
          <p class="hero-sub">Interior design & renovation in Gurgaon since 2012</p>
        </div>
      </div>

      <div class="stats-row">
        <div class="stat">
          <div class="stat-value">500+</div>
          <div class="stat-label">Projects</div>
        </div>
        <div class="stat">
          <div class="stat-value">12+</div>
          <div class="stat-label">Years</div>
        </div>
        <div class="stat">
          <div class="stat-value">30K</div>
          <div class="stat-label">Followers</div>
        </div>
      </div>

      <p class="section-label">Our Services</p>
      <div class="card-grid">
        ${SERVICES.slice(0, 4).map(s => `
          <a href="#/services" class="service-mini">
            <div class="card-icon">${serviceIcon(s.icon)}</div>
            <div>
              <div class="card-title" style="font-size:0.95rem">${s.title}</div>
            </div>
          </a>
        `).join('')}
      </div>

      <a href="#/services" class="btn btn-outline btn-sm mb-xl" style="display:block;text-align:center;">View All Services</a>

      <div class="divider"></div>

      <p class="section-label">Latest Work</p>
      <div class="portfolio-grid">
        ${PORTFOLIO.slice(0, 4).map(p => `
          <a href="#/portfolio/${p.id}" class="portfolio-item">
            <div class="placeholder-img" style="width:100%;height:100%;${tileBackground(p)}"></div>
            <div class="portfolio-item-overlay">
              <div class="portfolio-item-title">${p.title}</div>
              <div class="portfolio-item-location">${p.location}</div>
            </div>
          </a>
        `).join('')}
      </div>

      <div class="divider"></div>

      <div class="text-center">
        <p class="section-label">Ready to transform your space?</p>
        <h2 class="section-title">Book a Free Consultation</h2>
        <a href="#/book" class="btn btn-primary mt-md">Get Started</a>
        <a href="#/about" class="btn btn-outline mt-md">Our Story</a>
        <a href="https://wa.me/${WHATSAPP}" class="btn btn-whatsapp mt-md" target="_blank" rel="noopener">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.549 4.106 1.514 5.834L.052 23.948l6.26-1.413A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.94 0-3.762-.527-5.325-1.447l-.38-.227-3.953.893.937-3.83-.25-.394A9.698 9.698 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
          Chat on WhatsApp
        </a>
      </div>
    `;
  }

  // ─── SERVICES ──────────────────────────

  function renderServices(container) {
    container.innerHTML = `
      <p class="section-label">What We Do</p>
      <h1 class="page-title">Our Services</h1>
      <p class="page-subtitle">From concept to completion — we handle every detail so you don't have to.</p>

      <div class="card-grid">
        ${SERVICES.map(s => `
          <div class="card">
            <div class="card-icon">${serviceIcon(s.icon)}</div>
            <h3 class="card-title">${s.title}</h3>
            <p class="card-desc">${s.desc}</p>
          </div>
        `).join('')}
      </div>

      <div class="divider"></div>

      <div class="text-center">
        <p class="section-title">Interested?</p>
        <a href="#/book" class="btn btn-primary mt-md">Book a Consultation</a>
      </div>
    `;
  }

  // ─── PORTFOLIO ─────────────────────────

  function renderPortfolio(container) {
    container.innerHTML = `
      <p class="section-label">Our Work</p>
      <h1 class="page-title">Portfolio</h1>
      <p class="page-subtitle">A selection of projects across Gurgaon — from full home renovations to detailed finishing work.</p>

      <div class="portfolio-grid">
        ${PORTFOLIO.map(p => `
          <a href="#/portfolio/${p.id}" class="portfolio-item">
            <div class="placeholder-img" style="width:100%;height:100%;${tileBackground(p)}"></div>
            <div class="portfolio-item-overlay">
              <div class="portfolio-item-title">${p.title}</div>
              <div class="portfolio-item-location">${p.location}</div>
            </div>
          </a>
        `).join('')}
      </div>

      <div class="text-center mt-xl">
        <p class="card-desc">Follow us for daily project updates</p>
        <a href="https://www.instagram.com/homework_homeimprovement" class="btn btn-outline btn-sm mt-md" target="_blank" rel="noopener">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          @homework_homeimprovement
        </a>
      </div>
    `;
  }

  // ─── PORTFOLIO DETAIL ──────────────────

  function renderPortfolioDetail(container, id) {
    const project = PORTFOLIO.find(p => String(p.id) === String(id));

    if (!project) {
      container.innerHTML = `
        <p class="section-label">Portfolio</p>
        <h1 class="page-title">Project not found</h1>
        <p class="page-subtitle">We couldn't find the project you were looking for.</p>
        <a href="#/portfolio" class="btn btn-outline btn-sm">Back to Portfolio</a>
      `;
      return;
    }

    const related = PORTFOLIO.filter(p => p.id !== project.id).slice(0, 3);

    container.innerHTML = `
      <a href="#/portfolio" class="section-label" style="display:inline-block;text-decoration:none">← Portfolio</a>
      <h1 class="page-title">${escapeHtml(project.title)}</h1>
      <p class="page-subtitle">${escapeHtml(project.category)} · ${escapeHtml(project.location)}</p>

      <div class="portfolio-detail">
        <div class="portfolio-detail-image placeholder-img" style="${heroBackground(project)}"></div>

        <div class="review-item">
          <span class="review-label">Scope</span>
          <span class="review-value">${escapeHtml(project.scope)}</span>
        </div>
        <div class="review-item">
          <span class="review-label">Location</span>
          <span class="review-value">${escapeHtml(project.location)}</span>
        </div>
        <div class="review-item">
          <span class="review-label">Type</span>
          <span class="review-value">${escapeHtml(project.category)}</span>
        </div>

        <p class="about-text" style="margin-top:var(--space-lg)">${escapeHtml(project.description)}</p>

        ${project.quote ? `
          <blockquote class="about-text" style="margin-top:var(--space-lg);padding-left:var(--space-md);border-left:3px solid var(--color-accent);font-style:italic;color:var(--color-text-light)">
            &ldquo;${escapeHtml(project.quote)}&rdquo;
            <footer style="margin-top:var(--space-xs);font-size:0.8rem;font-style:normal">— Shagun Singh, Homework</footer>
          </blockquote>
        ` : ''}
      </div>

      <div class="divider"></div>

      <p class="section-label">More projects</p>
      <div class="portfolio-grid">
        ${related.map(p => `
          <a href="#/portfolio/${p.id}" class="portfolio-item">
            <div class="placeholder-img" style="width:100%;height:100%;${tileBackground(p)}"></div>
            <div class="portfolio-item-overlay">
              <div class="portfolio-item-title">${p.title}</div>
              <div class="portfolio-item-location">${p.location}</div>
            </div>
          </a>
        `).join('')}
      </div>

      <div class="text-center mt-xl">
        <p class="section-title">Like what you see?</p>
        <a href="#/book" class="btn btn-primary mt-md">Book a Consultation</a>
      </div>
    `;
  }

  // ─── ABOUT ─────────────────────────────

  function renderAbout(container) {
    container.innerHTML = `
      <p class="section-label">Our Story</p>
      <h1 class="page-title">About Homework</h1>

      <div class="about-photo placeholder-img" style="display:flex;align-items:center;justify-content:center;font-size:2rem;color:var(--color-accent);background:var(--color-accent-bg)">S</div>

      <p class="about-text">
        Homework Design Studio was founded by <strong>Shagun Singh</strong> in 2012. After seven years with ITC Hotels — where she developed her eye for detail and luxury finishes — Shagun set out to bring that same hospitality-grade quality to residential interiors in Gurgaon.
      </p>
      <p class="about-text">
        What started as a one-woman operation has grown into a trusted team of 15+ skilled craftsmen, carpenters, marble specialists, and designers. Over 500 homes later, Homework continues to deliver thoughtful, well-crafted spaces that feel like home from day one.
      </p>

      <div class="divider"></div>

      <h2 class="section-title">Journey</h2>
      <div class="timeline">
        ${TIMELINE.map(t => `
          <div class="timeline-item">
            <div class="timeline-year">${t.year}</div>
            <div class="timeline-text">${t.text}</div>
          </div>
        `).join('')}
      </div>

      <div class="divider"></div>

      <div class="text-center">
        <p class="section-title">Work with us</p>
        <a href="#/book" class="btn btn-primary mt-md">Book a Consultation</a>
      </div>
    `;
  }

  // ─── BOOK (4-step wizard) ──────────────

  let bookingState = {
    step: 1,
    service: '',
    propertyType: '',
    location: '',
    description: '',
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
  };

  function renderBook(container) {
    bookingState = { step: 1, service: '', propertyType: '', location: '', description: '', name: '', phone: '', email: '', preferredTime: '' };
    renderBookStep(container);
  }

  function renderBookStep(container) {
    const s = bookingState;
    const totalSteps = 4;

    let stepContent = '';
    let stepLabel = '';
    let stepTitle = '';

    if (s.step === 1) {
      stepLabel = 'Step 1 of 4';
      stepTitle = 'Select a Service';
      stepContent = `
        <div class="service-select-grid">
          ${SERVICES.map(svc => `
            <div class="service-select-card ${s.service === svc.id ? 'selected' : ''}" data-service="${svc.id}">
              <div class="card-icon">${serviceIcon(svc.icon)}</div>
              <div class="card-title">${svc.title}</div>
            </div>
          `).join('')}
        </div>
        <div class="wizard-nav">
          <button class="btn btn-primary" id="wizard-next" ${!s.service ? 'disabled' : ''}>Next</button>
        </div>
      `;
    } else if (s.step === 2) {
      stepLabel = 'Step 2 of 4';
      stepTitle = 'Property Details';
      stepContent = `
        <div class="form-group">
          <label class="form-label">Property Type <span class="required">*</span></label>
          <select class="form-select" id="book-property-type">
            <option value="">Select type</option>
            <option value="Apartment" ${s.propertyType === 'Apartment' ? 'selected' : ''}>Apartment</option>
            <option value="Villa" ${s.propertyType === 'Villa' ? 'selected' : ''}>Villa / Independent House</option>
            <option value="Office" ${s.propertyType === 'Office' ? 'selected' : ''}>Office / Commercial</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Location <span class="required">*</span></label>
          <input class="form-input" id="book-location" placeholder="e.g. DLF Phase-4, Gurgaon" value="${escapeHtml(s.location)}">
        </div>
        <div class="form-group">
          <label class="form-label">Brief Description</label>
          <textarea class="form-textarea" id="book-description" placeholder="Tell us about your project — scope, timeline, any specific ideas...">${escapeHtml(s.description)}</textarea>
        </div>
        <div class="wizard-nav">
          <button class="btn btn-outline" id="wizard-back">Back</button>
          <button class="btn btn-primary" id="wizard-next">Next</button>
        </div>
      `;
    } else if (s.step === 3) {
      stepLabel = 'Step 3 of 4';
      stepTitle = 'Your Contact Info';
      stepContent = `
        <div class="form-group">
          <label class="form-label">Name <span class="required">*</span></label>
          <input class="form-input" id="book-name" placeholder="Your name" value="${escapeHtml(s.name)}">
        </div>
        <div class="form-group">
          <label class="form-label">Phone <span class="required">*</span></label>
          <div class="phone-input-group">
            <div class="phone-prefix">+91</div>
            <input class="form-input" id="book-phone" type="tel" placeholder="10-digit number" maxlength="10" value="${escapeHtml(s.phone)}">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input class="form-input" id="book-email" type="email" placeholder="your@email.com" value="${escapeHtml(s.email)}">
        </div>
        <div class="form-group">
          <label class="form-label">Preferred Contact Time</label>
          <select class="form-select" id="book-time">
            <option value="">Any time</option>
            <option value="Morning (9–12)" ${s.preferredTime === 'Morning (9–12)' ? 'selected' : ''}>Morning (9 AM – 12 PM)</option>
            <option value="Afternoon (12–4)" ${s.preferredTime === 'Afternoon (12–4)' ? 'selected' : ''}>Afternoon (12 – 4 PM)</option>
            <option value="Evening (4–7)" ${s.preferredTime === 'Evening (4–7)' ? 'selected' : ''}>Evening (4 – 7 PM)</option>
          </select>
        </div>
        <div class="wizard-nav">
          <button class="btn btn-outline" id="wizard-back">Back</button>
          <button class="btn btn-primary" id="wizard-next">Next</button>
        </div>
      `;
    } else if (s.step === 4) {
      stepLabel = 'Step 4 of 4';
      stepTitle = 'Review & Send';
      const serviceName = SERVICES.find(svc => svc.id === s.service)?.title || s.service;
      stepContent = `
        <div style="margin-bottom:var(--space-lg)">
          <div class="review-item">
            <span class="review-label">Service</span>
            <span class="review-value">${escapeHtml(serviceName)}</span>
          </div>
          <div class="review-item">
            <span class="review-label">Property</span>
            <span class="review-value">${escapeHtml(s.propertyType)}</span>
          </div>
          <div class="review-item">
            <span class="review-label">Location</span>
            <span class="review-value">${escapeHtml(s.location)}</span>
          </div>
          ${s.description ? `<div class="review-item">
            <span class="review-label">Description</span>
            <span class="review-value">${escapeHtml(s.description)}</span>
          </div>` : ''}
          <div class="review-item">
            <span class="review-label">Name</span>
            <span class="review-value">${escapeHtml(s.name)}</span>
          </div>
          <div class="review-item">
            <span class="review-label">Phone</span>
            <span class="review-value">+91 ${escapeHtml(s.phone)}</span>
          </div>
          ${s.email ? `<div class="review-item">
            <span class="review-label">Email</span>
            <span class="review-value">${escapeHtml(s.email)}</span>
          </div>` : ''}
          ${s.preferredTime ? `<div class="review-item">
            <span class="review-label">Best Time</span>
            <span class="review-value">${escapeHtml(s.preferredTime)}</span>
          </div>` : ''}
        </div>

        <a href="${buildWhatsAppLink()}" class="btn btn-whatsapp" target="_blank" rel="noopener">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.549 4.106 1.514 5.834L.052 23.948l6.26-1.413A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.94 0-3.762-.527-5.325-1.447l-.38-.227-3.953.893.937-3.83-.25-.394A9.698 9.698 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
          Send via WhatsApp
        </a>
        <div class="wizard-nav mt-md">
          <button class="btn btn-outline" id="wizard-back">Back</button>
        </div>
      `;
    }

    container.innerHTML = `
      <p class="section-label">Book a Consultation</p>
      <div class="wizard-progress">
        ${Array.from({ length: totalSteps }, (_, i) => {
          const cls = i + 1 < s.step ? 'completed' : i + 1 === s.step ? 'active' : '';
          return `<div class="wizard-step-indicator ${cls}"></div>`;
        }).join('')}
      </div>
      <div class="wizard-step-label">${stepLabel}</div>
      <h2 class="wizard-step-title">${stepTitle}</h2>
      <div class="wizard-content">
        ${stepContent}
      </div>
    `;

    // ── Wire up wizard interactions ──

    // Step 1: service selection
    if (s.step === 1) {
      container.querySelectorAll('.service-select-card').forEach(card => {
        card.addEventListener('click', () => {
          container.querySelectorAll('.service-select-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          bookingState.service = card.dataset.service;
          const nextBtn = container.querySelector('#wizard-next');
          nextBtn.disabled = false;
        });
      });
    }

    // Step 2: save fields
    if (s.step === 2) {
      bindField('book-property-type', 'propertyType');
      bindField('book-location', 'location');
      bindField('book-description', 'description');
    }

    // Step 3: save fields
    if (s.step === 3) {
      bindField('book-name', 'name');
      bindField('book-phone', 'phone');
      bindField('book-email', 'email');
      bindField('book-time', 'preferredTime');
    }

    // Next / Back buttons
    const nextBtn = container.querySelector('#wizard-next');
    const backBtn = container.querySelector('#wizard-back');

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (s.step === 1 && !bookingState.service) return;
        if (s.step === 2) {
          saveStepFields(container, 2);
          if (!bookingState.propertyType || !bookingState.location) {
            highlightMissing(container, ['book-property-type', 'book-location']);
            return;
          }
        }
        if (s.step === 3) {
          saveStepFields(container, 3);
          if (!bookingState.name || !bookingState.phone) {
            highlightMissing(container, ['book-name', 'book-phone']);
            return;
          }
        }
        bookingState.step++;
        renderBookStep(container);
      });
    }

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (s.step === 2) saveStepFields(container, 2);
        if (s.step === 3) saveStepFields(container, 3);
        bookingState.step--;
        renderBookStep(container);
      });
    }
  }

  function saveStepFields(container, step) {
    if (step === 2) {
      const pt = container.querySelector('#book-property-type');
      const loc = container.querySelector('#book-location');
      const desc = container.querySelector('#book-description');
      if (pt) bookingState.propertyType = pt.value;
      if (loc) bookingState.location = loc.value.trim();
      if (desc) bookingState.description = desc.value.trim();
    }
    if (step === 3) {
      const name = container.querySelector('#book-name');
      const phone = container.querySelector('#book-phone');
      const email = container.querySelector('#book-email');
      const time = container.querySelector('#book-time');
      if (name) bookingState.name = name.value.trim();
      if (phone) bookingState.phone = phone.value.trim();
      if (email) bookingState.email = email.value.trim();
      if (time) bookingState.preferredTime = time.value;
    }
  }

  function bindField(elementId, stateKey) {
    const el = document.getElementById(elementId);
    if (el) {
      const update = () => {
        bookingState[stateKey] = el.value.trim();
        // Clear error state when user starts filling in the field
        if (el.value.trim()) {
          el.closest('.form-group')?.classList.remove('error');
        }
      };
      el.addEventListener('input', update);
      el.addEventListener('change', update);
    }
  }

  function highlightMissing(container, ids) {
    ids.forEach(id => {
      const el = container.querySelector('#' + id);
      if (el && !el.value) {
        el.closest('.form-group')?.classList.add('error');
        const errEl = el.closest('.form-group')?.querySelector('.form-error');
        if (!errEl) {
          const msg = document.createElement('div');
          msg.className = 'form-error';
          msg.style.display = 'block';
          msg.textContent = 'This field is required';
          el.closest('.form-group')?.appendChild(msg);
        }
      }
    });
  }

  function buildWhatsAppLink() {
    const s = bookingState;
    const serviceName = SERVICES.find(svc => svc.id === s.service)?.title || s.service;
    const lines = [
      `Hi, I'd like to book a consultation with Homework Design Studio.`,
      ``,
      `Service: ${serviceName}`,
      `Property: ${s.propertyType}`,
      `Location: ${s.location}`,
    ];
    if (s.description) lines.push(`Details: ${s.description}`);
    lines.push(``, `Name: ${s.name}`, `Phone: +91 ${s.phone}`);
    if (s.email) lines.push(`Email: ${s.email}`);
    if (s.preferredTime) lines.push(`Best time to call: ${s.preferredTime}`);

    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`;
  }

  // ─── CONTACT ───────────────────────────

  function renderContact(container) {
    container.innerHTML = `
      <p class="section-label">Get in Touch</p>
      <h1 class="page-title">Contact</h1>

      <a href="tel:+917042832335" class="contact-card">
        <div class="contact-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        </div>
        <div>
          <div class="contact-label">Call</div>
          <div class="contact-value">+91 70428 32335</div>
        </div>
      </a>

      <a href="https://wa.me/${WHATSAPP}" class="contact-card" target="_blank" rel="noopener">
        <div class="contact-icon" style="background:#E8F5E9;color:#25D366">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
        </div>
        <div>
          <div class="contact-label">WhatsApp</div>
          <div class="contact-value">+91 99537 70123</div>
        </div>
      </a>

      <a href="https://www.instagram.com/homework_homeimprovement" class="contact-card" target="_blank" rel="noopener">
        <div class="contact-icon" style="background:#FCE4EC;color:#E1306C">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
        </div>
        <div>
          <div class="contact-label">Instagram</div>
          <div class="contact-value">@homework_homeimprovement</div>
        </div>
      </a>

      <div class="contact-card">
        <div class="contact-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
          <div class="contact-label">Visit</div>
          <div class="contact-value">118, 1st Floor, Qutub Plaza</div>
          <div class="card-desc" style="margin-top:2px">DLF Phase-1, Gurgaon, Haryana 122001</div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="upi-section">
        <h3 class="section-title">Quick Payment</h3>
        <p class="upi-note">Pay via UPI for advance bookings or material procurement.</p>
        <a href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi, I\'d like to make a payment. Could you share the UPI details?')}" class="btn btn-outline btn-sm" target="_blank" rel="noopener">Request UPI Details</a>
      </div>

      <div class="divider"></div>

      <div class="text-center mb-lg">
        <a href="#/about" class="btn btn-outline btn-sm">About Homework</a>
      </div>

      <p class="text-center card-desc" style="font-size:0.75rem;color:var(--color-text-light)">
        AM Services 24x7 Pvt. Ltd<br>Gurgaon, Haryana
      </p>
    `;
  }

  // ── Helpers ────────────────────────────

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  function adjustColor(hex, amount) {
    hex = hex.replace('#', '');
    const r = Math.max(0, Math.min(255, parseInt(hex.substring(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substring(2, 4), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substring(4, 6), 16) + amount));
    return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
  }

  // Background for portfolio grid tiles. Stacks the project photo on
  // top of the brand-color gradient: if images/portfolio/{id}.jpg
  // doesn't exist, the browser silently drops that layer and the
  // gradient shows through — no broken-image flash.
  function tileBackground(p) {
    const gradient = `linear-gradient(135deg, ${p.color} 0%, ${adjustColor(p.color, -30)} 100%)`;
    return `background-image:url('images/portfolio/${p.id}.jpg'), ${gradient};background-size:cover;background-position:center`;
  }

  function heroBackground(p) {
    const gradient = `linear-gradient(135deg, ${p.color} 0%, ${adjustColor(p.color, -40)} 100%)`;
    return `background-image:url('images/portfolio/${p.id}.jpg'), ${gradient};background-size:cover;background-position:center`;
  }

  // ── Init ───────────────────────────────
  navigate();

})();
