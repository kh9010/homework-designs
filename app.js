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
  const FOUNDED_YEAR = 2012;

  const SERVICES = [
    { id: 'renovations', title: 'Full Home Renovations', icon: 'home', desc: 'End-to-end renovation — from design concept to final handover. Walls, flooring, electrical, plumbing, carpentry, and finishing.' },
    { id: 'kitchens', title: 'Modular Kitchens', icon: 'kitchen', desc: 'Custom modular kitchen design and installation with premium hardware, soft-close fittings, and stone countertops.' },
    { id: 'marble', title: 'Marble Polishing', icon: 'marble', desc: 'Professional marble and granite polishing, restoration, and sealing. Diamond-pad grinding for mirror finishes.' },
    { id: 'color', title: 'Color Consulting', icon: 'palette', desc: 'Expert color palette selection for interiors and exteriors. On-site consultations with sample testing.' },
    { id: 'restyling', title: 'Restyling', icon: 'restyle', desc: 'Refresh your space without a full renovation. Furniture rearrangement, accent walls, lighting, and decor updates.' },
    { id: 'vanities', title: 'Hand-Crafted Vanities', icon: 'vanity', desc: 'Bespoke bathroom vanities built with solid wood, natural stone tops, and artisan hardware.' },
    { id: 'cleaning', title: 'Deep Cleaning', icon: 'clean', desc: 'Professional deep cleaning for post-renovation, move-in, or seasonal refresh. Eco-friendly products.' },
    { id: 'planning', title: 'Space Planning & Guidance', icon: 'planning', desc: 'Get the decisions right before anything is built or bought — layout planning, material choices, and an honest read on what your space can become.' },
    { id: 'office', title: 'Office & Commercial Interiors', icon: 'office', desc: 'Workspaces that engineer success: activity-based work zones, hybrid-ready meeting pods, and wellness-centric layouts for modern businesses.' },
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
      image: 'https://republicnewsindia.com/wp-content/uploads/2024/09/Interior-Design-Project-by-Homework-by-Shagun-Singh-Details-of-the-Project-at-Icon-Gurgaon-2.jpg',
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
      image: 'https://republicnewsindia.com/wp-content/uploads/2024/08/1-1.jpg',
      description: 'A 3000 sqft residence in the premium DLF Belaire condominium, designed as a comfortable, elegant base for a couple whose child now lives and works abroad. With their visits to India often filled with entertaining friends, the brief was a space that blends traditional elegance with modern functionality — a sanctuary that reads as warm, sophisticated, and practical. Warm, earthy tones run throughout the home, and every detail from the flooring to the bathroom fixtures was chosen for a premium, enduring feel. Thoughtfully curated art pieces and accessories give the home character and reflect the couple\'s tastes and cultural roots.',
    },
    {
      id: 'parsvnath-exotica',
      title: 'Parsvnath Exotica',
      location: 'Golf Course Road, Gurgaon',
      category: 'Full Renovation',
      scope: '2600 sqft home',
      color: '#B8A9C9',
      image: 'https://republicnewsindia.com/wp-content/uploads/2024/10/Interior-Design-Project-by-Shagun-Singh-Details-of-the-Project-at-Parsvnath-Exotica-Gurgaon-4.jpg',
      description: 'A 2600 sqft home on Golf Course Road that tells a story of elegance, thoughtful design, and a seamless blend of art and function. The clients were transitioning from a larger 3800 sqft residence, and the brief was to preserve the grandeur and functionality of their old home while crafting a more intimate, equally impressive space. Known for their impeccable taste and well-curated collection of art and artifacts, they needed a home that speaks to their love for art while maintaining sophistication and function. Custom cabinetry and integrated solutions run throughout, ensuring functionality never compromises the aesthetic. Bespoke pieces — a custom-designed bed and built-in storage — enhance the sense of luxury without adding visual clutter, while natural light, soft textures, and carefully chosen furnishings contribute to an overall sense of tranquility.',
    },
    {
      id: 'palam-vihar',
      title: 'Palam Vihar Residence',
      location: 'Palam Vihar, Gurgaon',
      category: 'Full Renovation',
      scope: '2500 sqft · Second floor',
      color: '#A0C6A0',
      image: 'https://architectureupdate.in/wp-content/uploads/2022/10/IMG_9541-scaled.jpg',
      description: 'A 2500 sqft second floor designed for a young couple as their own private space. The hero of the home is a very large attached terrace with a gorgeous mature tree lending shade and beauty. The floor was irregular — generous in some places, tight in others — so the layout had to balance aesthetics with logical accessibility. The main bedroom was reworked as the primary living quarters, the second bedroom became a family and entertainment room, and a Teak French door with an arched top turned into the real showstopper, anchoring the whole room. The terrace was transformed into an informal extension of the living space — mosaic feature tiles on the walls and ceiling, layered feature lighting, and a new built-in bar.',
    },
    {
      id: 'experion-windchants',
      title: 'Experion Windchants',
      location: 'Dwarka Expressway, Gurgaon',
      category: 'Full Renovation',
      scope: '1500 sqft apartment',
      color: '#A0B2C6',
      image: 'https://architectureupdate.in/wp-content/uploads/2022/06/IMG-2773.jpg',
      description: 'A 1500 sqft apartment at Experion Windchants, designed with a Contemporary Classic sensibility for a very busy doctor who was deeply hands-on with the build. The brief was unusual: modern throughout, but certain pieces of furniture and art — all of great sentimental value — had to move with her into the new home. In the formal living space, where the large existing sofas shared the room with an old-world rocking chair, an accent media wall was added in rustic Spanish brick-finish tiles. On the balconies, many of the plants had travelled with the client for years and were carefully transplanted; a high table set with oversized planters was introduced to achieve privacy in the main balcony without losing the greenery.',
    },
  ];

  const TIMELINE = [
    { year: 'Origins', text: 'Lt. Col. Surjit Singh (Retd.) founds AM Services 24×7 Pvt. Ltd as a manpower solutions company — the parent that Homework would later grow out of.' },
    { year: '2001', text: 'Shagun begins her career with ITC Hotels, honing her eye for luxury interiors and guest experience.' },
    { year: '2008', text: 'Leaves hospitality to pursue independent design work and raises her family.' },
    { year: '2012', text: 'Founds Homework in Gurgaon — originally as a specialist deep cleaning and marble polishing service, the only one of its kind in the city\'s high-end real estate at the time.' },
    { year: '2015', text: 'Expands into full home renovations and end-to-end interior design, taking on both full and partial renovations.' },
    { year: '2021', text: 'Crosses 50 full home renovations and close to 200 bathroom makeovers. Builds a trusted following on Instagram as @homework_homeimprovement.' },
    { year: '2024', text: '30K+ Instagram followers. Recognized as a trusted name in Gurgaon home renovations.' },
    { year: '2026', text: 'Launches the Homework Design Studio PWA — bringing project portfolios, booking, and contact to mobile.' },
  ];

  // Team — names from the live site's About page.
  // TODO: confirm roles with Shagun before these go to print.
  const TEAM = [
    { name: 'Shagun Singh Baruah', role: 'Founder & Lead Designer', initial: 'S' },
    { name: 'Neha', role: 'Design & Client Coordination', initial: 'N' },
    { name: 'Govind', role: 'Site Execution', initial: 'G' },
  ];

  // Journal — index of articles published on the live WordPress site.
  // We link out rather than duplicate content; excerpts are ours.
  const SITE_URL = 'https://homeworkdesigns.org';
  const JOURNAL = [
    { tag: 'Costs', title: 'Flat Renovation in Gurgaon 2026: Costs, Trends & Expert Tips', excerpt: 'Real 2026 budgets — 1BHK ₹7–11L, 2BHK ₹12–18L, 3BHK ₹20–35L — plus the trends: Mindful Luxury, invisible smart tech, Warm Minimalism.', url: `${SITE_URL}/flat-renovation-in-gurgaon-2026-costs-trends-expert-tips/` },
    { tag: 'Costs', title: 'How Much Does Home Renovation Cost in Gurgaon? A Real Budget Breakdown', excerpt: '₹1,500–3,500 per sqft, bathrooms from ₹50k to ₹3L, and why older sectors need a 15% contingency.', url: `${SITE_URL}/how-much-does-home-renovation-cost-in-gurgaon-a-real-budget-breakdown/` },
    { tag: 'Guide', title: 'Top 10 Interior Designers in Gurgaon 2026', excerpt: 'What separates a design studio from a factory-style firm — and how to choose one for your home.', url: `${SITE_URL}/top-10-interior-designers-in-gurgaon-2026-homework-design-studio/` },
    { tag: 'Guide', title: 'Top Luxury Interior Designers in Gurgaon: Bespoke Home Design', excerpt: 'Warm Minimalism, Global-Indian Fusion, and why luxury now means a home that ages gracefully.', url: `${SITE_URL}/top-luxury-interior-designers-in-gurgaon-bespoke-home-design-by-homeworkdesigns/` },
    { tag: 'Guide', title: 'Finding the Best Interior Designer in Gurgaon', excerpt: 'A practical guide to briefs, budgets, and the red flags to catch before you sign.', url: `${SITE_URL}/finding-the-best-interior-designer-in-gurgaon-transforming-your-house-into-a-dream-home/` },
    { tag: 'Area', title: 'Home Renovation in Sector 56, Gurgaon', excerpt: 'Transforming everyday homes into elegant living spaces in one of Gurgaon\'s most-renovated sectors.', url: `${SITE_URL}/home-renovation-sector-56-gurgaon-transforming-everyday-homes-into-elegant-living-spaces/` },
    { tag: 'Area', title: 'Interior Designer on Golf Course Extension Road', excerpt: 'Creating luxury homes that feel effortless along the Extension Road corridor.', url: `${SITE_URL}/home-renovation-sector-56-gurgaon-transforming-everyday-homes-into-elegant-living-spaces-2/` },
    { tag: 'Area', title: 'Renovating a Home in Palam Vihar', excerpt: 'Why a Palam Vihar renovation is about more than upgrading interiors.', url: `${SITE_URL}/home-renovation-sector-56-gurgaon-transforming-everyday-homes-into-elegant-living-spaces-2-2-2/` },
    { tag: 'Commercial', title: 'Top Office Interior Designer in Gurgaon: 2026 Trends', excerpt: 'Activity-based work zones, hybrid meeting pods, and wellness-centric layouts.', url: `${SITE_URL}/top-office-interior-designer-in-gurgaon-homeworkdesigns-2026-trends/` },
    { tag: 'Commercial', title: 'Choosing a Commercial Interior Designer in India', excerpt: 'The definitive guide for businesses: what to ask, what to budget, what to avoid.', url: `${SITE_URL}/elevate-your-business-the-definitive-guide-to-choosing-a-commercial-interior-designer-in-india/` },
  ];

  // Areas we serve — from project history + the live site's local SEO.
  const AREAS = [
    'DLF Phase 1–5', 'Golf Course Road', 'Golf Course Extension Road', 'Sector 56',
    'Sushant Lok', 'South City', 'Nirvana Country', 'Palam Vihar',
    'Dwarka Expressway', 'MG Road', 'Suncity', 'Rail Vihar',
  ];

  // Cost estimator — every range here is published on the studio's own
  // blog (Flat Renovation in Gurgaon 2026; How Much Does Home Renovation
  // Cost in Gurgaon). Tier descriptions are ours; the numbers are hers.
  const ESTIMATOR = {
    byHome: [
      { id: '1bhk', label: '1 BHK', min: 700000, max: 1100000 },
      { id: '2bhk', label: '2 BHK', min: 1200000, max: 1800000 },
      { id: '3bhk', label: '3 BHK', min: 2000000, max: 3500000 },
      { id: '4bhk', label: '4 BHK +', min: 3500000, max: null },
      { id: 'bath', label: 'Bathroom only', min: 50000, max: 300000 },
    ],
    tiers: [
      { id: 'standard', label: 'Standard', perSqft: [1500, 2500], desc: 'Quality laminates, vitrified tiles, branded fittings.' },
      { id: 'premium', label: 'Premium', perSqft: [2500, 3500], desc: 'Veneers, engineered stone, designer lighting, soft-close everything.' },
      { id: 'luxury', label: 'Luxury', perSqft: [6500, 7500], desc: 'Italian marble, bespoke joinery, imported hardware, full turnkey.' },
    ],
    contingency: 0.15,
  };

  // Testimonials — PLACEHOLDERS. Real quotes live on homeworkdesigns.org
  // and could not be fetched from this environment. Each entry with
  // placeholder:true renders a visible "sample layout" note so an early
  // deploy never passes these off as real. TODO: paste real quotes, drop
  // the placeholder flag.
  const TESTIMONIALS = [
    { quote: 'TODO — paste real testimonial #1 from the live site.', name: 'Client name', context: 'Gurugram homeowner', placeholder: true },
    { quote: 'TODO — paste real testimonial #2 from the live site.', name: 'Client name', context: 'Gurugram homeowner', placeholder: true },
    { quote: 'TODO — paste real testimonial #3 from the live site.', name: 'Client name', context: 'Gurugram homeowner', placeholder: true },
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
      planning: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 3v18"/><path d="M15 9v12"/><path d="M9 15h12"/>',
      office: '<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
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
    '/journal': renderJournal,
    '/estimate': renderEstimate,
  };

  let currentView = null;

  function navigate() {
    const hash = location.hash || '#/';
    const viewKey = hash.slice(1) || '/';          // includes any ?query
    const path = viewKey.split('?')[0] || '/';     // route only

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

    // WhatsApp FAB — hide where the view already has its own WhatsApp CTA
    const fab = document.getElementById('wa-fab');
    if (fab) fab.classList.toggle('fab-hidden', path === '/book' || path === '/contact');

    // View transition
    if (currentView === viewKey) return;
    const isFirstLoad = currentView === null;
    currentView = viewKey;

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
          <h1 class="hero-heading">Luxury is a feeling,<br>not a price tag</h1>
          <p class="hero-sub">Interior design & renovation in Gurgaon since ${FOUNDED_YEAR} — built on empathy and engineering</p>
        </div>
      </div>

      <div class="stats-row">
        <div class="stat">
          <div class="stat-value">50+</div>
          <div class="stat-label">Renovations</div>
        </div>
        <div class="stat">
          <div class="stat-value">200+</div>
          <div class="stat-label">Bathrooms</div>
        </div>
        <div class="stat">
          <div class="stat-value">${new Date().getFullYear() - FOUNDED_YEAR}+</div>
          <div class="stat-label">Years</div>
        </div>
      </div>

      <a href="#/estimate" class="estimate-teaser">
        <div>
          <div class="estimate-teaser-title">What will my renovation cost?</div>
          <div class="card-desc">Get a ballpark in ten seconds — real Gurgaon numbers.</div>
        </div>
        <span class="estimate-teaser-arrow">→</span>
      </a>

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

      ${testimonialsBlock()}

      <div class="divider"></div>

      <p class="section-label">From the journal</p>
      <div class="journal-list">
        ${JOURNAL.slice(0, 3).map(journalItem).join('')}
      </div>
      <a href="#/journal" class="btn btn-outline btn-sm mb-xl" style="display:block;text-align:center;">Read All Articles</a>

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
            <a href="#/book?service=${s.id}" class="card-link">Book this service →</a>
          </div>
        `).join('')}
      </div>

      <div class="divider"></div>

      <div class="text-center">
        <p class="section-title">Interested?</p>
        <a href="#/book" class="btn btn-primary mt-md">Book a Consultation</a>
        <a href="#/estimate" class="btn btn-outline mt-md">Estimate my renovation cost</a>
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
            <footer style="margin-top:var(--space-xs);font-size:0.8rem;font-style:normal">— Shagun Singh Baruah, Homework</footer>
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
        <a href="#/book?service=renovations" class="btn btn-primary mt-md">Book a similar renovation</a>
        <button type="button" class="btn btn-outline mt-md" id="share-project">Share this project</button>
      </div>
    `;

    // Native share with clipboard fallback
    const shareBtn = container.querySelector('#share-project');
    if (shareBtn) {
      shareBtn.addEventListener('click', async () => {
        const url = `${location.origin}${location.pathname}#/portfolio/${project.id}`;
        const data = {
          title: `${project.title} — Homework Design Studio`,
          text: `${project.title}, ${project.location} · ${project.scope}`,
          url,
        };
        try {
          if (navigator.share) { await navigator.share(data); return; }
          await navigator.clipboard.writeText(url);
          shareBtn.textContent = 'Link copied';
          setTimeout(() => { shareBtn.textContent = 'Share this project'; }, 1800);
        } catch (e) { /* user dismissed the share sheet */ }
      });
    }
  }

  // ─── ABOUT ─────────────────────────────

  function renderAbout(container) {
    container.innerHTML = `
      <p class="section-label">Our Story</p>
      <h1 class="page-title">About Homework</h1>

      <div class="about-photo placeholder-img" style="display:flex;align-items:center;justify-content:center;font-size:2rem;color:var(--color-accent);background:var(--color-accent-bg)">S</div>

      <p class="about-text">
        Homework Design Studio was founded by <strong>Shagun Singh Baruah</strong> in ${FOUNDED_YEAR}. A designer by passion and a hotelier by education, Shagun spent seven years with ITC Hotels developing an eye for detail and luxury finishes — and set out to bring that hospitality-grade quality to homes in Gurgaon.
      </p>
      <p class="about-text">
        Homework grew out of <strong>AM Services 24×7 Pvt. Ltd</strong>, founded by Lt. Col. Surjit Singh (Retd.) — first as a manpower company, then Gurgaon's specialist deep cleaning and marble polishing service, and from 2015 a full design-and-renovation studio. Fifty-plus full home renovations and close to two hundred bathroom makeovers later, every project is still treated as a bespoke narrative — never a cookie-cutter template.
      </p>

      <div class="divider"></div>

      <h2 class="section-title">What we believe</h2>
      <p class="about-text">
        Your home should work for you, not the other way around. We design on two pillars — <strong>empathy and engineering</strong> — because luxury is a feeling, not a price tag.
      </p>
      <div class="values-grid">
        <div class="value-card">
          <div class="value-title">Warm Minimalism</div>
          <div class="card-desc">Terracotta, sage and sand over clinical whites. Calm rooms that still feel lived-in.</div>
        </div>
        <div class="value-card">
          <div class="value-title">Global-Indian Fusion</div>
          <div class="card-desc">Contemporary lines carrying Indian craft, art and material memory.</div>
        </div>
        <div class="value-card">
          <div class="value-title">Built to age gracefully</div>
          <div class="card-desc">Low-VOC paints, reclaimed teak and finishes chosen to last — not just to photograph.</div>
        </div>
      </div>

      <div class="divider"></div>

      <h2 class="section-title">The team</h2>
      <div class="team-grid">
        ${TEAM.map(m => `
          <div class="team-card">
            <div class="team-avatar">${escapeHtml(m.initial)}</div>
            <div class="team-name">${escapeHtml(m.name)}</div>
            <div class="team-role">${escapeHtml(m.role)}</div>
          </div>
        `).join('')}
      </div>
      <div class="usp-callout">
        <strong>Everyone on site is on our payroll.</strong> No subcontracted crews — our carpenters, marble specialists and painters are trained in-house, which is how we hold quality and timelines.
      </div>

      <div class="divider"></div>

      ${testimonialsBlock()}

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
        <a href="#/journal" class="btn btn-outline mt-md">Read the Journal</a>
      </div>
    `;
  }

  // ─── JOURNAL ───────────────────────────

  function journalItem(post) {
    return `
      <a href="${post.url}" class="journal-item" target="_blank" rel="noopener">
        <div class="journal-tag">${escapeHtml(post.tag)}</div>
        <div class="journal-title">${escapeHtml(post.title)}</div>
        <div class="card-desc">${escapeHtml(post.excerpt)}</div>
        <div class="journal-meta">Read on homeworkdesigns.org ↗</div>
      </a>
    `;
  }

  function renderJournal(container) {
    container.innerHTML = `
      <p class="section-label">Journal</p>
      <h1 class="page-title">Notes on renovating in Gurgaon</h1>
      <p class="page-subtitle">Costs, trends, and honest guidance from the studio — published on our main site.</p>

      <div class="journal-list">
        ${JOURNAL.map(journalItem).join('')}
      </div>

      <div class="divider"></div>

      <div class="text-center">
        <p class="section-title">Have a project in mind?</p>
        <a href="#/book" class="btn btn-primary mt-md">Book a Consultation</a>
      </div>
    `;
  }

  // ─── TESTIMONIALS (shared block) ───────

  function testimonialsBlock() {
    const anyPlaceholder = TESTIMONIALS.some(t => t.placeholder);
    return `
      <p class="section-label">What clients say</p>
      ${anyPlaceholder ? `<p class="placeholder-note">Sample layout — real client quotes are being added.</p>` : ''}
      <div class="testimonial-list">
        ${TESTIMONIALS.map(t => `
          <blockquote class="testimonial">
            <p class="testimonial-quote">&ldquo;${escapeHtml(t.quote)}&rdquo;</p>
            <footer>
              <span class="testimonial-name">${escapeHtml(t.name)}</span>
              <span class="testimonial-context">${escapeHtml(t.context)}</span>
            </footer>
          </blockquote>
        `).join('')}
      </div>
    `;
  }

  // ─── ESTIMATE (cost estimator) ─────────

  function fmtINR(n) {
    if (n >= 10000000) return '₹' + (n / 10000000).toFixed(n % 10000000 ? 1 : 0) + ' Cr';
    if (n >= 100000) return '₹' + (n / 100000).toFixed(n % 100000 ? 1 : 0) + ' L';
    return '₹' + n.toLocaleString('en-IN');
  }

  let estState = { mode: 'home', home: '3bhk', sqft: 1500, tier: 'premium' };

  function estimateRange() {
    if (estState.mode === 'home') {
      const h = ESTIMATOR.byHome.find(x => x.id === estState.home);
      return h ? { min: h.min, max: h.max, label: h.label } : null;
    }
    const t = ESTIMATOR.tiers.find(x => x.id === estState.tier);
    const sqft = Math.max(200, Math.min(20000, Number(estState.sqft) || 0));
    if (!t || !sqft) return null;
    return { min: sqft * t.perSqft[0], max: sqft * t.perSqft[1], label: `${sqft.toLocaleString('en-IN')} sqft · ${t.label} finish` };
  }

  function rangeText(r) {
    if (!r) return '—';
    if (r.max == null) return `from ${fmtINR(r.min)}`;
    return `${fmtINR(r.min)} – ${fmtINR(r.max)}`;
  }

  function bufferText(r) {
    if (!r || r.max == null) return '';
    const k = 1 + ESTIMATOR.contingency;
    return `With a 15% contingency: ${fmtINR(Math.round(r.min * k))} – ${fmtINR(Math.round(r.max * k))}`;
  }

  function estimateWhatsAppLink(r) {
    const text = r
      ? `Hi Homework, I used your cost estimator.\n\nScope: ${r.label}\nBallpark: ${rangeText(r)}\n\nI'd like an exact quote — could we schedule a site visit?`
      : `Hi Homework, I'd like a renovation quote. Could we schedule a site visit?`;
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  }

  function renderEstimate(container) {
    const r = estimateRange();

    container.innerHTML = `
      <p class="section-label">Cost Estimator</p>
      <h1 class="page-title">What will my renovation cost?</h1>
      <p class="page-subtitle">Ballpark ranges from real Gurgaon projects. Your exact quote comes after a site visit.</p>

      <div class="segmented" role="tablist">
        <button type="button" class="seg-btn ${estState.mode === 'home' ? 'active' : ''}" data-mode="home">By home size</button>
        <button type="button" class="seg-btn ${estState.mode === 'area' ? 'active' : ''}" data-mode="area">By area &amp; finish</button>
      </div>

      ${estState.mode === 'home' ? `
        <div class="option-grid">
          ${ESTIMATOR.byHome.map(h => `
            <button type="button" class="option-card ${estState.home === h.id ? 'selected' : ''}" data-home="${h.id}">${h.label}</button>
          `).join('')}
        </div>
      ` : `
        <div class="form-group">
          <label class="form-label" for="est-sqft">Carpet area (sqft)</label>
          <input class="form-input" id="est-sqft" type="number" inputmode="numeric" min="200" max="20000" step="50" value="${estState.sqft}">
        </div>
        <div class="tier-list">
          ${ESTIMATOR.tiers.map(t => `
            <button type="button" class="tier-card ${estState.tier === t.id ? 'selected' : ''}" data-tier="${t.id}">
              <div class="tier-head">
                <span class="tier-label">${t.label}</span>
                <span class="tier-rate">₹${t.perSqft[0].toLocaleString('en-IN')}–${t.perSqft[1].toLocaleString('en-IN')} / sqft</span>
              </div>
              <div class="card-desc">${t.desc}</div>
            </button>
          `).join('')}
        </div>
      `}

      <div class="estimate-result">
        <div class="estimate-label">Estimated range</div>
        <div class="estimate-value">${rangeText(r)}</div>
        <div class="estimate-buffer">${bufferText(r)}</div>
        <p class="disclaimer">Ballpark only. Older sectors often hide plumbing or structural surprises — the final quote follows a site visit and a detailed BOQ.</p>
      </div>

      <a href="${estimateWhatsAppLink(r)}" class="btn btn-whatsapp mt-md" id="est-wa" target="_blank" rel="noopener">Send this estimate on WhatsApp</a>
      <a href="#/book?service=renovations" class="btn btn-primary mt-md">Book a site visit</a>
      <a href="#/journal" class="btn btn-outline mt-md">How we arrived at these numbers</a>
    `;

    container.querySelectorAll('.seg-btn').forEach(b =>
      b.addEventListener('click', () => { estState.mode = b.dataset.mode; renderEstimate(container); }));
    container.querySelectorAll('.option-card').forEach(b =>
      b.addEventListener('click', () => { estState.home = b.dataset.home; renderEstimate(container); }));
    container.querySelectorAll('.tier-card').forEach(b =>
      b.addEventListener('click', () => { estState.tier = b.dataset.tier; renderEstimate(container); }));

    // Sqft input: update in place so typing never loses focus
    const sq = container.querySelector('#est-sqft');
    if (sq) {
      sq.addEventListener('input', () => {
        estState.sqft = sq.value;
        const r2 = estimateRange();
        container.querySelector('.estimate-value').textContent = rangeText(r2);
        container.querySelector('.estimate-buffer').textContent = bufferText(r2);
        container.querySelector('#est-wa').href = estimateWhatsAppLink(r2);
      });
    }
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
    // Deep-link prefill: #/book?service=<id> preselects step 1.
    const query = new URLSearchParams((location.hash.split('?')[1]) || '');
    const requested = query.get('service') || '';
    const service = SERVICES.some(s => s.id === requested) ? requested : '';
    bookingState = { step: 1, service, propertyType: '', location: '', description: '', name: '', phone: '', email: '', preferredTime: '' };
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

      <p class="section-label">Areas we serve</p>
      <div class="chip-row">
        ${AREAS.map(a => `<span class="chip">${escapeHtml(a)}</span>`).join('')}
      </div>
      <p class="card-desc mb-lg">Across Gurugram — and by arrangement elsewhere in Delhi NCR.</p>

      <div class="divider"></div>

      <div class="text-center mb-lg">
        <a href="#/about" class="btn btn-outline btn-sm">About Homework</a>
      </div>

      <p class="text-center card-desc" style="font-size:0.75rem;color:var(--color-text-light)">
        Homework Design Studio is a brand of AM Services 24×7 Pvt. Ltd<br>Gurgaon, Haryana
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

  // Resolves the image source for a project. If the project has an
  // explicit `image` field (usually an absolute URL pointing at the
  // live WordPress site's /wp-content/uploads/...), that wins.
  // Otherwise, fall back to a local file at images/portfolio/{id}.jpg.
  // In both cases the image is stacked over the brand gradient via
  // CSS background-image: if the remote URL or local file fails to
  // load, the gradient shows through silently (no broken-image flash).
  function projectImageUrl(p) {
    return p.image || `images/portfolio/${p.id}.jpg`;
  }

  function tileBackground(p) {
    const gradient = `linear-gradient(135deg, ${p.color} 0%, ${adjustColor(p.color, -30)} 100%)`;
    return `background-image:url('${projectImageUrl(p)}'), ${gradient};background-size:cover;background-position:center`;
  }

  function heroBackground(p) {
    const gradient = `linear-gradient(135deg, ${p.color} 0%, ${adjustColor(p.color, -40)} 100%)`;
    return `background-image:url('${projectImageUrl(p)}'), ${gradient};background-size:cover;background-position:center`;
  }

  // ── Init ───────────────────────────────
  navigate();

})();
