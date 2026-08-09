import type { Metadata } from "next";
import { PortfolioGrid } from "../components/PortfolioGrid";
import { StandardsShowcase } from "../components/StandardsShowcase";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Projecten & renovatie-impressies | ATW Montage",
  description: "Bekijk een representatieve selectie van complete renovaties, aanbouw en maatwerk timmerwerk van ATW Montage.",
};

export default function ProjectenPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Projecten & vakwerk" title="Werk dat voor" accent="zichzelf spreekt." copy="Een visuele indruk van de renovaties, aanbouwen en maatwerkdetails waarop ATW Montage zich richt." image="finish" />

      <section className="portfolio-intro" data-reveal>
        <div><p className="kicker">Renovatie in beeld</p><h2>Van ruwbouw tot<br />verfijnde afwerking.</h2></div>
        <div><p>Goed werk ziet u terug in maatvoering, materiaalovergangen en de rust van het eindresultaat. Bekijk hieronder het type projecten en afwerkingsniveau waarop wij ons richten.</p><small>De beelden zijn representatieve renovatie-impressies. Referenties van uitgevoerde opdrachten delen we graag tijdens een kennismaking.</small></div>
      </section>

      <section className="portfolio-section" data-reveal>
        <PortfolioGrid />
      </section>

      <section className="portfolio-trust" data-reveal>
        <div><strong>5+</strong><span>jaar ervaring</span><p>Ervaring met complete renovatie- en montagewerkzaamheden.</p></div>
        <div><strong>VCA</strong><span>gecertificeerd</span><p>Bewuste aandacht voor veilig en professioneel werken.</p></div>
        <div><strong>01</strong><span>vast aanspreekpunt</span><p>Korte lijnen vanaf de eerste opname tot de oplevering.</p></div>
        <div><strong>NL</strong><span>landelijk actief</span><p>Projecten worden door heel Nederland aangenomen.</p></div>
      </section>

      <StandardsShowcase />

      <CtaBand title="Wilt u weten wat er mogelijk is in uw woning?" />
      <SiteFooter />
    </main>
  );
}
