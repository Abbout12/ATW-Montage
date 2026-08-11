import Link from "next/link";
import { ContactForm } from "./components/ContactForm";
import { ProcessJourney } from "./components/ProcessJourney";
import { ServiceExplorer } from "./components/ServiceExplorer";
import { Arrow, email, phoneDisplay, phoneLink, SiteFooter, SiteHeader } from "./components/SiteChrome";
import { ArrowDownIcon, CheckIcon } from "./components/Icons";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" /><div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Complete woningrenovatie · Heel Nederland</p>
          <h1>Van casco tot<br /><em>karakter.</em></h1>
          <p className="hero-copy">Complete verbouwingen met één vast aanspreekpunt. Vakwerk, duidelijke afspraken en zorg voor ieder detail.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">Bespreek uw verbouwing <Arrow /></Link>
            <a className="button button-ghost" href="https://wa.me/31616861106" target="_blank" rel="noreferrer">Direct via WhatsApp</a>
          </div>
        </div>
        <a className="scroll-hint" href="#diensten" aria-label="Scroll naar diensten"><span>Ontdek ons werk</span><i aria-hidden="true"><ArrowDownIcon /></i></a>
      </section>

      <section className="proof-strip" aria-label="Waarom ATW Montage" data-reveal>
        <div><strong>5+</strong><span>jaar ervaring</span></div><div><strong>VCA</strong><span>gecertificeerd</span></div>
        <div><strong>01</strong><span>vast aanspreekpunt</span></div><div><strong>NL</strong><span>landelijk actief</span></div>
      </section>

      <section className="section services" id="diensten" data-reveal>
        <div className="section-intro">
          <p className="kicker">Wat wij bouwen</p><h2>Eén partij voor uw<br />complete renovatie.</h2>
          <p>Van de eerste sloopwerkzaamheden tot de laatste afwerking. ATW Montage bewaakt kwaliteit, planning en communicatie gedurende het hele project.</p>
          <Link className="section-link" href="/diensten">Bekijk alle diensten <Arrow /></Link>
        </div>
        <ServiceExplorer />
      </section>

      <section className="portfolio-home" data-reveal>
        <div className="portfolio-home-heading">
          <div><p className="kicker">Projecten & vakwerk</p><h2>Ervaring die u<br />kunt <em>zien.</em></h2></div>
          <div><p>Een indruk van complete renovatie, aanbouw en maatwerk. Ieder beeld laat zien waar wij op letten: constructie, maatvoering en een verzorgde afwerking.</p><Link className="section-link" href="/projecten">Bekijk het volledige portfolio <Arrow /></Link></div>
        </div>
        <div className="portfolio-home-grid">
          <Link className="portfolio-home-card is-large" href="/projecten"><img src="/atw-hero-v2.webp" alt="Complete woningrenovatie met houten constructie" /><span><small>01 · Complete renovatie</small><strong>Van casco naar karakter</strong><i>Bekijk project <Arrow /></i></span></Link>
          <Link className="portfolio-home-card" href="/projecten"><img src="/atw-portfolio-cabinetry.webp" alt="Eiken maatwerk wandkast" /><span><small>02 · Timmerwerk</small><strong>Maatwerk dat past</strong><i>Bekijk project <Arrow /></i></span></Link>
          <Link className="portfolio-home-card" href="/diensten#aanbouw-uitbouw"><img src="/atw-aanbouw-pvc-glass.webp" alt="Aanbouw met PVC-panelen en glazen schuifpuien" /><span><small>03 · Aanbouw in PVC & glas</small><strong>Licht, ruimte en een strakke aansluiting</strong><i>Bekijk dienst <Arrow /></i></span></Link>
        </div>
        <p className="portfolio-disclaimer">Representatieve renovatie-impressies. Verifieerbare referenties delen we graag tijdens een kennismaking.</p>
      </section>

      <section className="craft-section" id="over-ons" data-reveal>
        <div className="craft-visual" role="img" aria-label="Ambachtelijk timmerwerk tijdens een woningrenovatie"><div className="craft-grid" aria-hidden="true" /><div className="craft-stamp" aria-hidden="true"><span>ATW</span><small>Vakwerk<br />sinds dag één</small></div></div>
        <div className="craft-copy"><p className="kicker light">Gebouwd op vertrouwen</p><h2>Geen losse beloftes.<br /><em>Gewoon goed werk.</em></h2><p>Een verbouwing vraagt om vertrouwen. Daarom werken we met korte lijnen, heldere afspraken en vakmensen die weten wat ze doen.</p><ul className="check-list"><li><span><CheckIcon /></span> VCA-gecertificeerde vakmensen</li><li><span><CheckIcon /></span> Duidelijke planning en transparante communicatie</li><li><span><CheckIcon /></span> Eén aanspreekpunt van opname tot oplevering</li></ul><Link className="text-link" href="/over-ons">Kennismaken met ATW Montage <Arrow /></Link></div>
      </section>

      <section className="result-section" data-reveal>
        <div className="result-image" role="img" aria-label="Afgeronde woningrenovatie met maatwerk houten details" />
        <div className="result-copy">
          <p className="kicker light">Het eindresultaat</p>
          <h2>Van bouwplaats<br />naar <em>thuis.</em></h2>
          <p>Een renovatie is pas geslaagd wanneer constructie, afwerking en dagelijks comfort vanzelfsprekend samenkomen.</p>
          <Link className="text-link" href="/diensten">Ontdek wat we renoveren <Arrow /></Link>
        </div>
      </section>

      <section className="section process" id="werkwijze" data-reveal>
        <div className="process-heading"><div><p className="kicker">Onze werkwijze</p><h2>Van eerste gesprek<br />tot strakke oplevering.</h2></div><Link className="section-link" href="/werkwijze">Bekijk onze aanpak <Arrow /></Link></div>
        <ProcessJourney compact />
      </section>

      <section className="reference-banner" data-reveal><div><p className="kicker light">Ervaring die u kunt controleren</p><h2>Benieuwd naar eerder werk?</h2></div><p>Referenties van afgeronde renovaties delen we graag tijdens een kennismaking. Zo krijgt u een eerlijk beeld van onze aanpak en kwaliteit.</p><Link className="button button-outline" href="/contact">Vraag naar referenties <Arrow /></Link></section>

      <section className="contact-section" id="contact" data-reveal><div className="contact-copy"><p className="kicker">Klaar om te verbouwen?</p><h2>Vertel ons<br />wat u wilt maken.</h2><p>Deel kort uw plannen. We nemen persoonlijk contact met u op om de mogelijkheden te bespreken.</p><div className="contact-options"><a href={`tel:${phoneLink}`}><span>Bellen</span><strong>{phoneDisplay}</strong></a><a href="https://wa.me/31616861106" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>Start een gesprek</strong></a><a href={`mailto:${email}`}><span>E-mail</span><strong>{email}</strong></a></div></div><ContactForm /></section>
      <SiteFooter />
    </main>
  );
}
