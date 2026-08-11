"use client";

import { useEffect, useState } from "react";
import { ArrowUpRightIcon, CheckIcon, CloseIcon } from "./Icons";

type Project = {
  number: string;
  title: string;
  category: "Renovatie" | "Aanbouw" | "Timmerwerk";
  image: string;
  alt: string;
  summary: string;
  scope: string[];
};

const projects: Project[] = [
  { number: "01", title: "Complete woningrenovatie", category: "Renovatie", image: "/atw-hero-v2.webp", alt: "Woningrenovatie in uitvoering met zichtbare houten constructie", summary: "Van constructieve basis tot een woning waarin alle bouwfases logisch op elkaar aansluiten.", scope: ["Constructief timmerwerk", "Indelingswijzigingen", "Coördinatie van bouwfases"] },
  { number: "02", title: "Keuken & leefruimte", category: "Renovatie", image: "/atw-finished-interior.webp", alt: "Afgewerkte woonkamer en keuken met maatwerk houten details", summary: "Een open leefruimte waarin maatwerk, afwerking en dagelijks comfort samenkomen.", scope: ["Afbouw en montage", "Maatwerkdetails", "Strakke aansluitingen"] },
  { number: "03", title: "Aanbouw in PVC & glas", category: "Aanbouw", image: "/atw-aanbouw-pvc-glass.webp", alt: "Moderne aanbouw met donkere PVC-panelen en brede glazen schuifpuien", summary: "Een lichte, onderhoudsarme uitbreiding met een open verbinding tussen woning en tuin.", scope: ["Bekleding met PVC-panelen", "Glazen schuifpuien en schuifwanden", "Strakke aansluiting op gevel en dak"] },
  { number: "04", title: "Badkamer in detail", category: "Renovatie", image: "/atw-portfolio-bathroom.webp", alt: "Afgewerkte badkamerrenovatie met eiken maatwerkmeubel", summary: "Rustige materialen, nauwkeurige maatvoering en een afwerking die tot in de details klopt.", scope: ["Voorbereidend timmerwerk", "Inbouwdetails", "Maatwerk en afwerking"] },
  { number: "05", title: "Maatwerk wandkast", category: "Timmerwerk", image: "/atw-portfolio-cabinetry.webp", alt: "Ingebouwde eiken maatwerk wandkast in een woonkamer", summary: "Maatvast timmerwerk dat functioneel is en vanzelfsprekend onderdeel wordt van het interieur.", scope: ["Inmeten en uitwerken", "Montage op locatie", "Naadloze aftimmering"] },
  { number: "06", title: "Precisiewerk in hout", category: "Timmerwerk", image: "/atw-craft-detail.webp", alt: "Vakman meet massief hout nauwkeurig in tijdens renovatiewerk", summary: "Goed zichtwerk begint met nauwkeurig meten, bewuste materiaalkeuzes en aandacht bij iedere verbinding.", scope: ["Maatvoering", "Montage", "Controle op afwerking"] },
];

const filters = ["Alles", "Renovatie", "Aanbouw", "Timmerwerk"] as const;

export function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Alles");
  const [selected, setSelected] = useState<Project | null>(null);
  const visibleProjects = filter === "Alles" ? projects : projects.filter((project) => project.category === filter);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <div className="portfolio-filters" aria-label="Filter projecten op categorie">
        {filters.map((item) => <button key={item} type="button" className={filter === item ? "is-active" : ""} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
      </div>

      <div className="portfolio-grid">
        {visibleProjects.map((project) => (
          <button className="portfolio-card" type="button" key={project.number} onClick={() => setSelected(project)} aria-label={`Bekijk ${project.title}`}>
            <img src={project.image} alt={project.alt} loading="lazy" />
            <span className="portfolio-card-shade" aria-hidden="true" />
            <span className="portfolio-card-meta"><small>{project.number} · {project.category}</small><strong>{project.title}</strong><i>Bekijk details <ArrowUpRightIcon /></i></span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="portfolio-modal-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <article className="portfolio-modal" role="dialog" aria-modal="true" aria-labelledby="portfolio-modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="portfolio-modal-close" type="button" onClick={() => setSelected(null)} aria-label="Project sluiten"><CloseIcon /></button>
            <img src={selected.image} alt={selected.alt} />
            <div className="portfolio-modal-copy">
              <p className="kicker">{selected.number} · {selected.category}</p>
              <h2 id="portfolio-modal-title">{selected.title}</h2>
              <p>{selected.summary}</p>
              <ul>{selected.scope.map((item) => <li key={item}><CheckIcon /> {item}</li>)}</ul>
              <small>Representatieve renovatie-impressie. Verifieerbare referenties zijn op aanvraag beschikbaar.</small>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
