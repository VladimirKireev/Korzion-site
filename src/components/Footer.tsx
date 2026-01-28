const Footer = () => {
  return (
    <footer className="footer-shell mt-auto pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">KORZION GLOBAL</h5>
            <p className="muted">Operating partner for brands entering Amazon and Noon across the Gulf. Precision, compliance, and local insight.</p>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Navigation</h6>
            <ul className="list-unstyled">
              <li><a className="footer-link" href="/about">About</a></li>
              <li><a className="footer-link" href="/services">Services</a></li>
              <li><a className="footer-link" href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Offices</h6>
            <p className="mb-1">Dubai • Riyadh • Manama</p>
            <p className="mb-1"><a className="footer-link" href="tel:+79999251071">+79999251071</a></p>
            <p className="mb-0"><a className="footer-link" href="mailto:georgii@korzion.ae">georgii@korzion.ae</a></p>
          </div>
        </div>
        <div className="text-center pt-3 muted">&copy; {new Date().getFullYear()} KORZION GLOBAL. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
