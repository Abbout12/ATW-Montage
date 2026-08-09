import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { email, PageHero, phoneDisplay, phoneLink, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Contact & offerte | ATW Montage", description: "Bespreek uw renovatie met ATW Montage. Bel, WhatsApp of vraag een offerte aan." };

export default function ContactPage() {
  return <main><SiteHeader /><PageHero eyebrow="Contact & offerte" title="Uw plannen." accent="Onze aandacht." copy="Vertel ons wat u wilt verbouwen. We nemen persoonlijk contact op om uw wensen, planning en de beste vervolgstap te bespreken." />
    <section className="contact-page" data-reveal><div className="contact-page-intro"><p className="kicker">Neem direct contact op</p><h2>De kortste route<br />naar duidelijkheid.</h2><p>Een eerste gesprek is vrijblijvend. U hoeft nog niet ieder detail te kennen; een duidelijke omschrijving en enkele foto’s helpen ons om gericht met u mee te denken.</p><div className="direct-contact-cards"><a href={`tel:${phoneLink}`}><small>Telefonisch</small><strong>{phoneDisplay}</strong><span>Bel direct ↗</span></a><a href="https://wa.me/31616861106" target="_blank" rel="noreferrer"><small>WhatsApp</small><strong>Stuur uw plannen</strong><span>Start gesprek ↗</span></a><a href={`mailto:${email}`}><small>E-mail</small><strong>{email}</strong><span>Stuur e-mail ↗</span></a></div></div><div><div className="form-heading"><span>Offerteaanvraag</span><p>Velden met uw basisinformatie zijn voldoende voor een eerste contactmoment.</p></div><ContactForm /></div></section>
    <section className="contact-expect"><p className="kicker light">Wat gebeurt er daarna?</p><div><span>01</span><strong>Persoonlijk contact</strong><p>We bespreken uw aanvraag en stellen gerichte vragen.</p></div><div><span>02</span><strong>Opname indien nodig</strong><p>Bij grotere renovaties bekijken we de situatie op locatie.</p></div><div><span>03</span><strong>Duidelijk voorstel</strong><p>U ontvangt een passende vervolgstap of offerte.</p></div></section><SiteFooter /></main>;
}
