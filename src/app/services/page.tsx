import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      title: 'Marketplace operations',
      copy: 'Storefront build, listings, A+ content, and paid media to win buy-box and organic share on Amazon & Noon.',
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
      bullets: ['Listing audits & localization', 'Retail media & promos', 'Performance dashboards'],
    },
    {
      title: 'Supply chain & compliance',
      copy: 'Customs classification, bonded warehousing, and resilient inbound so your catalogue stays live across GCC.',
      image: 'https://images.unsplash.com/photo-1516383607781-913a19294fd1?auto=format&fit=crop&w=900&q=80',
      bullets: ['HS codes & product registration', 'Bonded storage & replenishment', 'Reverse logistics & returns'],
    },
    {
      title: 'Growth studio',
      copy: 'Creative production, Arabic-first PDPs, and CX that respects Gulf culture and premium brand positioning.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
      bullets: ['Arabic & English copy', 'Premium packaging & SLA', 'Seasonal & event playbooks'],
    },
  ];

  const process = [
    { title: '01 · Evaluate', detail: 'Catalogue, compliance, and channel strategy fit.' },
    { title: '02 · Launch', detail: 'Listings, media, inbound, and CX go live in parallel.' },
    { title: '03 · Scale', detail: 'Pricing, promos, and supply sync across Amazon & Noon.' },
    { title: '04 · Defend', detail: 'Buy-box protection, reviews, and unauthorized seller control.' },
  ];

  const coverage = [
    { title: 'Amazon', detail: 'GCC focus with select EU via global selling.' },
    { title: 'Noon', detail: 'UAE, KSA, and nearby demand centers.' },
    { title: 'Trendyol', detail: 'Turkey-first with reach into adjacent markets.' },
  ];

  const categories = [
    'Smartphones & accessories',
    'Wearables',
    'Computers & components',
    'Audio devices',
    'Smart home',
    'Software & digital products',
  ];

  const risk = [
    { title: 'Marketplace governance', detail: 'Performance metrics, ratings, and counterfeit-prevention controls.' },
    { title: 'Product & safety basics', detail: 'Category checks, compliant content, and documentation where required.' },
    { title: 'Returns & insurance', detail: 'Standard operational coverage and disciplined returns handling.' },
  ];

  return (
    <div className="container py-5">
      <div className="section-shell mb-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="accent-line mb-3"></div>
            <h1 className="display-6 fw-bold mb-3">Our Services</h1>
            <p className="muted lead mb-4">
              We operate your Amazon, Noon, and Trendyol business end-to-end. One partner for compliance, logistics, growth, and CX.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span className="tag">Amazon FBA/FBM</span>
              <span className="tag">Noon priority</span>
              <span className="tag">Trendyol ops</span>
              <span className="tag">Channel governance</span>
            </div>
          </div>
          <div className="col-lg-6">
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=80"
              alt="Service strategy board"
              width={1100}
              height={720}
              className="img-fluid img-rounded"
            />
          </div>
        </div>
      </div>

      <div className="section-shell mb-5">
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-4" key={service.title}>
              <div className="feature-card h-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={900}
                  height={600}
                  className="img-fluid img-rounded mb-3"
                />
                <h4 className="fw-bold">{service.title}</h4>
                <p className="muted">{service.copy}</p>
                <ul className="muted mb-0">
                  {service.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-shell mb-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <div>
            <div className="accent-line mb-3"></div>
            <h3 className="fw-bold mb-2">Marketplace coverage</h3>
            <p className="muted mb-0">Anchored in GCC with reach into Turkey and select EU via Amazon global selling.</p>
          </div>
        </div>
        <div className="row g-4">
          {coverage.map((item) => (
            <div className="col-md-4" key={item.title}>
              <div className="feature-card h-100">
                <h5 className="fw-bold">{item.title}</h5>
                <p className="muted mb-0">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-shell mb-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <h3 className="fw-bold mb-3">Engagement flow</h3>
            <p className="muted">Clear governance and pace so you always know what ships next.</p>
          </div>
          <div className="col-lg-7">
            <div className="row g-3">
              {process.map((step) => (
                <div className="col-md-6" key={step.title}>
                  <div className="stat-card h-100">
                    <h5 className="fw-bold mb-2">{step.title}</h5>
                    <p className="muted mb-0">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell mb-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3">
          <div>
            <div className="accent-line mb-3"></div>
            <h3 className="fw-bold mb-2">Portfolio focus</h3>
            <p className="muted mb-0">Core consumer electronics and accessories aligned to marketplace demand.</p>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-2">
          {categories.map((item) => (
            <span className="tag" key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="section-shell">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h4 className="fw-bold mb-3">Logistics & compliance backbone</h4>
            <ul className="muted">
              <li className="mb-2">• HS code classification and category documentation where required</li>
              <li className="mb-2">• Inbound via UAE hubs with storage, prep, and replenishment rules</li>
              <li className="mb-2">• Reverse logistics, quality checks, and re-kitting</li>
              <li className="mb-2">• Unified stock for Amazon, Noon, and Trendyol</li>
              <li className="mb-0">• Localized CX and multilingual customer support</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <Image
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80"
              alt="Modern warehouse"
              width={1100}
              height={720}
              className="img-fluid img-rounded"
            />
          </div>
        </div>
      </div>

      <div className="section-shell mt-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <div>
            <div className="accent-line mb-3"></div>
            <h3 className="fw-bold mb-2">Governance & risk hygiene</h3>
            <p className="muted mb-0">Controls to keep accounts healthy and customers confident.</p>
          </div>
        </div>
        <div className="row g-4">
          {risk.map((item) => (
            <div className="col-md-4" key={item.title}>
              <div className="feature-card h-100">
                <h5 className="fw-bold">{item.title}</h5>
                <p className="muted mb-0">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
