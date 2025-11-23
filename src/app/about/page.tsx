import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container py-5">
      <div className="section-shell mb-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="accent-line mb-3"></div>
            <h1 className="display-6 fw-bold mb-3">About KORZION GLOBAL</h1>
            <p className="muted lead mb-4">
              We are Gulf-based operators who build and scale storefronts on Amazon and Noon for international brands ready to win in the Middle East.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span className="tag">Amazon · Noon · Trendyol</span>
              <span className="tag">Bilingual ops</span>
              <span className="tag">3PL & FC partners</span>
              <span className="tag">Marketplace governance</span>
            </div>
          </div>
          <div className="col-lg-6">
            <Image
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1100&q=80"
              alt="Korzion Global team workshop"
              width={1100}
              height={720}
              className="img-fluid img-rounded"
            />
          </div>
        </div>
      </div>

      <div className="section-shell mb-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <h3 className="fw-bold mb-3">How we work</h3>
            <p className="muted">
              We embed alongside your team as operators—building compliant catalogues, orchestrating freight, and defending margins with disciplined retail media and pricing.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row g-3">
              <div className="col-md-4">
                <div className="feature-card h-100">
                  <h5 className="fw-bold">Local intelligence</h5>
                  <p className="muted mb-0">GCC market nuance, Arabic copywriting, and seasonal playbooks tuned for Ramadan, Eid, and back-to-school.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card h-100">
                  <h5 className="fw-bold">Operational control</h5>
                  <p className="muted mb-0">We run listings, ads, inventory, and CX with transparent dashboards and weekly governance.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card h-100">
                  <h5 className="fw-bold">Compliance first</h5>
                  <p className="muted mb-0">HS codes, product registration, and customs handling to keep your catalog live and risk-free.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell mb-5">
        <div className="row g-4">
          <div className="col-lg-6">
            <h3 className="fw-bold mb-3">Marketplaces & reach</h3>
            <ul className="list-unstyled muted mb-0">
              <li className="mb-2">• Amazon across GCC with global selling into select EU markets</li>
              <li className="mb-2">• Noon coverage for UAE, KSA, and surrounding markets</li>
              <li className="mb-0">• Trendyol for Turkey and nearby demand centers</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold mb-3">Portfolio snapshot</h3>
            <div className="d-flex flex-wrap gap-2">
              <span className="tag">Smartphones & accessories</span>
              <span className="tag">Wearables</span>
              <span className="tag">Computers & components</span>
              <span className="tag">Audio</span>
              <span className="tag">Smart home</span>
              <span className="tag">Software & digital</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell mb-5">
        <div className="row g-4">
          <div className="col-lg-5">
            <h3 className="fw-bold mb-3">Governance & risk</h3>
            <p className="muted mb-0">
              Performance dashboards, listing compliance per platform policy, counterfeit-prevention controls, standard operational insurance, and disciplined returns handling.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="feature-card h-100">
                  <h6 className="fw-bold mb-1">Operations</h6>
                  <p className="muted mb-0">Listings, media, inventory, and CX with clear governance and response SLAs.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-card h-100">
                  <h6 className="fw-bold mb-1">Controls</h6>
                  <p className="muted mb-0">KPI tracking for returns, ratings, and counterfeit flags with fast remediation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1100&q=80"
              alt="Dubai skyline at dusk"
              width={1100}
              height={720}
              className="img-fluid img-rounded"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold mb-3">Our footprint</h3>
            <ul className="list-unstyled muted">
              <li className="mb-2">• UAE hub with warehousing partners and marketplace-integrated fulfilment</li>
              <li className="mb-2">• On-the-ground teams in UAE, KSA, and Bahrain</li>
              <li className="mb-2">• Relationships with category teams across marketplaces</li>
              <li className="mb-0">• Multilingual customer support and returns orchestration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
