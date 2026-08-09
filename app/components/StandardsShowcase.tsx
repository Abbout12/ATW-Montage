"use client";

import { useState } from "react";

const standards = [
  {
    number: "01",
    phase: "Voorbereiding",
    title: "Vooruitdenken",
    description:
      "We vertalen materiaalkeuzes en bouwfases vooraf naar één duidelijke aanpak. Zo voorkomen we verrassingen tijdens de uitvoering.",
    result: "Slimmer gepland",
    image: "/atw-hero-v2.webp",
    alt: "Voorbereidende constructiewerkzaamheden tijdens een woningrenovatie",
  },
  {
    number: "02",
    phase: "Uitvoering",
    title: "Netjes uitvoeren",
    description:
      "We beschermen de bestaande woning, houden de werkplek beheersbaar en werken iedere aansluiting zorgvuldig af.",
    result: "Beheerst gebouwd",
    image: "/atw-craft-detail.webp",
    alt: "Vakman werkt nauwkeurig aan een houten constructie",
  },
  {
    number: "03",
    phase: "Oplevering",
    title: "Strak opleveren",
    description:
      "Voor de afronding lopen we maatvoering, afwerking en werking zorgvuldig na. Het resultaat moet tot in de details kloppen.",
    result: "Klaar tot in detail",
    image: "/atw-finished-interior.webp",
    alt: "Strak afgewerkt interieur na een complete woningrenovatie",
  },
];

export function StandardsShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="portfolio-standards" data-reveal>
      <div className="portfolio-standards-heading">
        <div>
          <p className="kicker">Wat u in ieder project terugziet</p>
          <span className="standards-counter">01 — 03</span>
        </div>
        <div>
          <h2><span className="standards-title-line">Vakmanschap dat u</span><br />in <em>elke fase</em> ziet.</h2>
          <p>Kies een fase en ontdek hoe ATW Montage kwaliteit zichtbaar maakt, van de eerste beslissing tot de laatste controle.</p>
        </div>
      </div>

      <div className="standard-showcase" role="group" aria-label="Vakmanschap per projectfase">
        {standards.map((standard, index) => {
          const isActive = index === active;
          return (
            <button
              key={standard.number}
              type="button"
              aria-pressed={isActive}
              aria-label={`${standard.phase}: ${standard.title}`}
              className={`standard-card${isActive ? " is-active" : ""}`}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <img src={standard.image} alt={standard.alt} loading="lazy" />
              <span className="standard-card-shade" aria-hidden="true" />
              <span className="standard-card-top">
                <strong>{standard.number}</strong>
                <small>{standard.phase}</small>
              </span>
              <span className="standard-card-copy">
                <span className="standard-card-result">{standard.result}</span>
                <strong className="standard-card-title">{standard.title}</strong>
                <span className="standard-card-description">{standard.description}</span>
                <span className="standard-card-action">Bekijk deze fase <i aria-hidden="true">↗</i></span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="standards-progress" aria-hidden="true">
        {standards.map((standard, index) => <span key={standard.number} className={index === active ? "is-active" : ""} />)}
      </div>
    </section>
  );
}
