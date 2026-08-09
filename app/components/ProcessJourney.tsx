"use client";

import { useState } from "react";

export type ProcessStep = {
  n: string;
  title: string;
  shortTitle: string;
  text: string;
  note: string;
};

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    shortTitle: "Kennismaken",
    title: "Kennismaking & opname",
    text: "We bespreken uw wensen, prioriteiten, gewenste planning en budget. Waar nodig bekijken we de woning op locatie, zodat het voorstel past bij de echte situatie.",
    note: "Duidelijke uitgangspunten",
  },
  {
    n: "02",
    shortTitle: "Plan & offerte",
    title: "Plan & heldere offerte",
    text: "We vertalen de opname naar een logisch plan van aanpak. U ontvangt een duidelijk voorstel waarin werkzaamheden en afspraken begrijpelijk zijn uitgewerkt.",
    note: "Weten waar u aan toe bent",
  },
  {
    n: "03",
    shortTitle: "Voorbereiden",
    title: "Voorbereiding & planning",
    text: "Voor de start stemmen we materialen, werkvolgorde en belangrijke keuzes af. Zo voorkomen we onnodige stilstand tijdens de verbouwing.",
    note: "Een beheerste start",
  },
  {
    n: "04",
    shortTitle: "Uitvoeren",
    title: "Uitvoering & communicatie",
    text: "Tijdens het werk heeft u één vast aanspreekpunt. We bewaken de kwaliteit, stemmen de werkzaamheden af en houden u persoonlijk op de hoogte.",
    note: "Overzicht tijdens de bouw",
  },
  {
    n: "05",
    shortTitle: "Opleveren",
    title: "Controle & oplevering",
    text: "We lopen het uitgevoerde werk samen na en bespreken eventuele aandachtspunten. Pas als alles klopt, ronden we het project af.",
    note: "Een nette oplevering",
  },
];

export function ProcessJourney({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  const step = processSteps[active];
  const progress = `${(active / (processSteps.length - 1)) * 100}%`;

  return (
    <div className={`process-journey${compact ? " is-compact" : ""}`}>
      <div className="journey-track">
        <i className="journey-progress" style={{ width: progress }} aria-hidden="true" />
        {processSteps.map((item, index) => (
          <button
            key={item.n}
            type="button"
            className={index === active ? "is-active" : index < active ? "is-complete" : ""}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
          >
            <span>{item.n}</span>
            <strong>{item.shortTitle}</strong>
          </button>
        ))}
      </div>

      <article className="journey-detail" key={step.n} aria-live="polite">
        <div className="journey-detail-index"><span>{step.n}</span><small>van 05</small></div>
        <div>
          <p className="journey-label">{step.shortTitle}</p>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
        <div className="journey-result"><small>Resultaat</small><strong>{step.note}</strong></div>
      </article>
    </div>
  );
}
