export default function ContactPage() {
  return (
    <div className="container py-5">
      <div className="section-shell mb-4 text-center">
        <p className="eyebrow mb-2">Let&apos;s talk</p>
        <h1 className="display-6 fw-bold mb-3">Book a Gulf strategy session</h1>
        <p className="muted lead mb-0">Share your catalogue and target markets. We respond within one business day.</p>
      </div>

      <div className="row g-4">
        <div className="col-lg-7">
          <div className="section-shell h-100">
            <h4 className="fw-bold mb-3">Tell us about your brand</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Full name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="work@email.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="company" className="form-label">Company</label>
                <input type="text" className="form-control" id="company" placeholder="Brand or distributor name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="market" className="form-label">Marketplace interest</label>
                <input type="text" className="form-control" id="market" placeholder="Amazon AE / KSA, Noon, GCC wholesale" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">What do you want to achieve?</label>
                <textarea className="form-control" id="message" rows={5} placeholder="Launch, scale, compliance, logistics needs" required></textarea>
              </div>
              <div className="text-end">
                <button type="submit" className="btn btn-brand btn-lg px-4">Send message</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="section-shell h-100">
            <h4 className="fw-bold mb-3">Regional presence</h4>
            <p className="muted mb-3">Dubai • Riyadh • Manama</p>
            <div className="feature-card mb-3">
              <p className="mb-1"><strong>Phone:</strong> <a className="footer-link" href="tel:+971585555555">+971 58 555 5555</a></p>
              <p className="mb-1"><strong>Email:</strong> <a className="footer-link" href="mailto:hello@korzionglobal.com">hello@korzionglobal.com</a></p>
              <p className="mb-0 muted">We usually reply within one business day.</p>
            </div>
            <div className="feature-card">
              <h6 className="fw-bold">What to expect</h6>
              <ul className="muted mb-0">
                <li>15-30 minute intro call</li>
                <li>Catalogue and compliance review</li>
                <li>Launch and scaling plan for Amazon/Noon</li>
                <li>Clear next steps and timings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
