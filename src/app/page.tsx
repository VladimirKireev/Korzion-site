'use client';

import { useMemo, useState } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const Section = ({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="py-16 md:py-20">
    <div className="mx-auto max-w-5xl px-4">
      {kicker && <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-300/80">{kicker}</p>}
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">{title}</h2>
      </div>
      <div className="mt-6 space-y-6">{children}</div>
    </div>
  </section>
);

const Card = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_48px_-12px_rgba(0,0,0,0.45)] backdrop-blur-sm">
    {title && <h3 className="mb-2 text-lg font-semibold text-slate-50">{title}</h3>}
    <div className="leading-relaxed text-slate-200/90">{children}</div>
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-slate-100">
    {children}
  </span>
);

const Button = ({
  href,
  variant = 'primary',
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
}) => {
  const classes: Record<ButtonVariant, string> = {
    primary: 'bg-teal-500 text-slate-900 hover:bg-teal-400 shadow-lg shadow-teal-500/30',
    secondary: 'border border-white/30 text-slate-50 hover:border-teal-400 hover:text-teal-100',
    ghost: 'text-slate-50 border border-transparent hover:border-white/20 hover:bg-white/5',
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition ${classes[variant]}`}
    >
      {children}
    </a>
  );
};

export default function Page() {
  const [toast, setToast] = useState(false);

  const operations = useMemo(
    () => [
      {
        title: 'Import & inbound',
        body: 'Sourcing from verified distributors, customs clearance, HS codes, inbound to UAE hubs.',
      },
      {
        title: 'Storage & fulfilment',
        body: '3PL / FC storage, inventory control, marketplace-integrated shipping.',
      },
      {
        title: 'Marketplace operations',
        body: 'Listings, pricing, availability, and customer service across Amazon, Noon, Trendyol.',
      },
    ],
    []
  );

  const products = useMemo(
    () => [
      { title: 'Smartphones & accessories', body: 'Devices, chargers, cases, cables' },
      { title: 'Wearables', body: 'Smartwatches and fitness bands' },
      { title: 'Computers & components', body: 'Laptops, tablets, PC parts' },
      { title: 'Audio', body: 'Headphones, earbuds, speakers' },
      { title: 'Smart home & IoT', body: 'Connected devices and accessories' },
      { title: 'Software & digital', body: 'Licences and digital products' },
    ],
    []
  );

  const markets = useMemo(
    () => [
      { title: 'GCC', body: 'Saudi Arabia, United Arab Emirates, Kuwait, Qatar, Bahrain, Oman' },
      { title: 'Turkey & neighbours', body: 'Via Trendyol' },
      { title: 'MENA', body: 'Selected markets such as Egypt and Jordan' },
      { title: 'Europe', body: 'Selected EU marketplaces (e.g. Germany, France) via Amazon Global Selling' },
    ],
    []
  );

  const compliance = useMemo(
    () => [
      {
        title: 'Regulatory & tax',
        list: [
          'Compliance with DAFZA and UAE commercial regulations',
          'VAT registration and reporting',
          'Product safety and documentation',
        ],
      },
      {
        title: 'Banking, insurance, controls',
        list: [
          'Working with recommended UAE banks (KYC / AML)',
          'Insurance: employee protection, warehouse, liability',
          'Performance monitoring, returns, counterfeit prevention',
        ],
      },
    ],
    []
  );

  const partners = useMemo(
    () => [
      {
        title: 'Distributors & brands',
        body: 'Official consumer electronics distributors and brands seeking marketplace coverage; annual volume commitments preferred.',
      },
      {
        title: 'Logistics & services',
        body: '3PL, bonded storage, last-mile, and cross-border providers experienced with marketplace fulfilment.',
      },
    ],
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToast(true);
    setTimeout(() => setToast(false), 1800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="text-lg font-semibold tracking-[0.16em] text-slate-50">KORZION GLOBAL</div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-200 md:flex">
            {[
              { href: '#company', label: 'Company' },
              { href: '#operations', label: 'Operations' },
              { href: '#products', label: 'Products' },
              { href: '#markets', label: 'Markets' },
              { href: '#compliance', label: 'Compliance' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-teal-200">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button href="#contact">Contact us</Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.14),transparent_28%)]" />
          <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-16 md:py-20">
            <p className="text-sm uppercase tracking-[0.22em] text-teal-200">E-commerce trading · Amazon · Noon · Trendyol</p>
            <h1 className="text-3xl font-semibold text-slate-50 md:text-4xl">
              Dubai-based trading company in consumer electronics
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-200">
              Korzion Global (VOG International FZCO) is an e-commerce trading company registered in Dubai Airport Free Zone (DAFZA). We import, store, and sell consumer electronics via Amazon, Noon, and Trendyol for customers across the GCC, Turkey, and selected EU markets.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="#operations">View operations</Button>
              <Button href="#" variant="secondary">
                Download company profile
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <Pill>DAFZA licence</Pill>
              <Pill>Consumer electronics</Pill>
              <Pill>Cross-border e-commerce</Pill>
            </div>
          </div>
        </section>

        <Section id="company" title="Company overview">
          <div className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
            <div className="leading-relaxed text-slate-200">
              Korzion Global operates under VOG International FZCO in Dubai Airport Free Zone with an e-commerce trading licence. Ownership is held by private shareholders, with an authorised manager in the UAE handling marketplace operations and compliance.
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { title: 'Business model', body: 'Own-account trading on marketplaces' },
                { title: 'Primary focus', body: 'Consumer electronics & accessories' },
                { title: 'Operations', body: 'Remote-friendly, DAFZA-compliant' },
              ].map((item) => (
                <Card key={item.title} title={item.title}>
                  <p className="text-sm text-slate-200/90">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section id="operations" title="Operations & logistics">
          <p className="leading-relaxed text-slate-200">
            Korzion imports goods from verified distributors, stores them in 3PL / FC warehouses in Dubai, and sells through its marketplace accounts. Operations cover inbound, storage, fulfilment, and customer support.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {operations.map((op) => (
              <Card key={op.title} title={op.title}>
                <p className="text-sm text-slate-200/90">{op.body}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="products" title="Products & categories">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {products.map((item) => (
              <Card key={item.title} title={item.title}>
                <p className="text-sm text-slate-200/90">{item.body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <span className="text-sm font-semibold text-slate-50">Marketplaces:</span>
            <Pill>Amazon</Pill>
            <Pill>Noon</Pill>
            <Pill>Trendyol</Pill>
            <p className="ml-auto text-sm text-slate-200/80">
              Seller accounts operated directly by Korzion Global for retail and B2B customers.
            </p>
          </div>
        </Section>

        <Section id="markets" title="Markets we serve">
          <p className="leading-relaxed text-slate-200">
            Coverage across the Gulf, Turkey, select MENA markets, and European marketplaces through Amazon Global Selling.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {markets.map((item) => (
              <Card key={item.title} title={item.title}>
                <p className="text-sm text-slate-200/90">{item.body}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="compliance" title="Compliance & risk management">
          <div className="grid gap-4 md:grid-cols-2">
            {compliance.map((group) => (
              <Card key={group.title} title={group.title}>
                <ul className="space-y-2 text-sm text-slate-200/90">
                  {group.list.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-teal-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="partners" title="For partners">
          <div className="grid gap-4 md:grid-cols-2">
            {partners.map((p) => (
              <Card key={p.title} title={p.title}>
                <p className="text-sm text-slate-200/90">{p.body}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid gap-6 md:grid-cols-[1.1fr,0.9fr]">
            <Card title="Send a message">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-1 text-sm text-slate-200/80">
                    Full name<span className="text-teal-300"> *</span>
                    <input
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:border-teal-400 focus:outline-none"
                      type="text"
                    />
                  </label>
                  <label className="space-y-1 text-sm text-slate-200/80">
                    Company<span className="text-teal-300"> *</span>
                    <input
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:border-teal-400 focus:outline-none"
                      type="text"
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-1 text-sm text-slate-200/80">
                    Email<span className="text-teal-300"> *</span>
                    <input
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:border-teal-400 focus:outline-none"
                      type="email"
                    />
                  </label>
                  <label className="space-y-1 text-sm text-slate-200/80">
                    Country
                    <input
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:border-teal-400 focus:outline-none"
                      type="text"
                    />
                  </label>
                </div>
                <label className="space-y-1 text-sm text-slate-200/80">
                  Message
                  <textarea
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:border-teal-400 focus:outline-none"
                    rows={4}
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-teal-500 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-teal-400"
                >
                  Send message
                </button>
                {toast && <div className="text-sm text-teal-200">Message sent (demo)</div>}
              </form>
            </Card>

            <Card title="Company details">
              <div className="space-y-3 text-sm text-slate-200/90">
                <div>
                  <p className="font-semibold text-slate-50">Korzion Global / VOG International FZCO</p>
                  <p>Dubai Airport Free Zone (DAFZA), Dubai, UAE</p>
                </div>
                <div>
                  <p>Phone: +971 00 000 0000 (placeholder)</p>
                  <p>Email: hello@korzionglobal.com</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Pill>Amazon</Pill>
                  <Pill>Noon</Pill>
                  <Pill>Trendyol</Pill>
                </div>
              </div>
            </Card>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto max-w-5xl space-y-4 px-4 py-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-lg font-semibold text-slate-50">KORZION GLOBAL</div>
              <p className="text-sm text-slate-300">E-commerce trading in consumer electronics.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-200">
              <a href="#company" className="hover:text-teal-200">
                Company
              </a>
              <a href="#operations" className="hover:text-teal-200">
                Operations
              </a>
              <a href="#products" className="hover:text-teal-200">
                Products
              </a>
              <a href="#markets" className="hover:text-teal-200">
                Markets
              </a>
              <a href="#compliance" className="hover:text-teal-200">
                Compliance
              </a>
              <a href="#contact" className="hover:text-teal-200">
                Contact
              </a>
            </div>
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Korzion Global. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
