import Link from 'next/link';

const Navbar = () => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark brand-nav sticky-top py-3">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">
          <span className="text-uppercase">Korzion</span> <span className="text-warning">Global</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <Link href={link.href} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="nav-item d-none d-lg-block ms-lg-2">
              <span className="pill-badge">Amazon · Noon · GCC</span>
            </li>
            <li className="nav-item ms-lg-2">
              <Link href="/contact" className="btn btn-brand btn-sm px-3">
                Book a call
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
