import Link from "next/link";
import type { ReactNode } from "react";

export const phoneDisplay = "06 16 86 11 06";
export const phoneLink = "+31616861106";
export const email = "ATWmontage@info.nl";

export const Arrow = () => <span aria-hidden="true">↗</span>;

const navItems = [
  { href: "/diensten", label: "Diensten" },
  { href: "/projecten", label: "Projecten" },
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/over-ons", label: "Over ons" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="ATW Montage, naar de homepage">
        <span className="brand-mark">ATW</span>
        <span className="brand-name">Montage</span>
      </Link>
      <nav className="desktop-nav" aria-label="Hoofdnavigatie">
        {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link className="header-cta" href="/contact">
          Offerte aanvragen <Arrow />
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Menu openen"><i /><i /><i /></summary>
          <nav aria-label="Mobiele navigatie">
            <Link href="/">Home</Link>
            {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/contact">Contact &amp; offerte</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand footer-brand" href="/">
        <span className="brand-mark">ATW</span><span className="brand-name">Montage</span>
      </Link>
      <p>Complete woningrenovatie door heel Nederland.</p>
      <div><a href={`tel:${phoneLink}`}>{phoneDisplay}</a><a href={`mailto:${email}`}>{email}</a></div>
      <span>© {new Date().getFullYear()} ATW Montage</span>
    </footer>
  );
}

export function PageHero({ eyebrow, title, accent, copy, image, children }: {
  eyebrow: string;
  title: string;
  accent: string;
  copy: string;
  image?: "build" | "craft" | "finish";
  children?: ReactNode;
}) {
  return (
    <section className={`page-hero${image ? ` page-hero-${image}` : ""}`}>
      {image && <div className="page-hero-photo" aria-hidden="true" />}
      {image && <div className="page-hero-shade" aria-hidden="true" />}
      <div className="page-hero-lines" aria-hidden="true" />
      <div className="page-hero-content">
        <p className="eyebrow"><span /> {eyebrow}</p>
        <h1>{title}<br /><em>{accent}</em></h1>
        <p>{copy}</p>
        {children}
      </div>
      <div className="page-hero-index" aria-hidden="true">ATW / NL</div>
    </section>
  );
}

export function CtaBand({ title = "Uw renovatie begint met een goed gesprek." }: { title?: string }) {
  return (
    <section className="subpage-cta">
      <div>
        <p className="kicker light">Klaar voor de volgende stap?</p>
        <h2>{title}</h2>
      </div>
      <Link className="button button-outline" href="/contact">Bespreek uw project <Arrow /></Link>
    </section>
  );
}
