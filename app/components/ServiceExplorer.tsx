"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Arrow } from "./SiteChrome";

const services = [
  {
    number: "01",
    label: "Onze specialisatie",
    title: "Complete woningrenovatie",
    shortTitle: "Complete renovatie",
    description:
      "Van de eerste sloopwerkzaamheden tot de laatste afwerking. Wij coördineren het complete traject en bewaken planning, kwaliteit en communicatie.",
    image: "/atw-hero-v2.webp",
    alt: "Complete woningrenovatie in uitvoering met houten constructie",
    href: "/diensten#complete-woningrenovatie",
  },
  {
    number: "02",
    label: "PVC & glas",
    title: "Aanbouw in PVC & glas",
    shortTitle: "Aanbouw in PVC & glas",
    description:
      "Een lichte uitbreiding met onderhoudsarme PVC-panelen en brede glazen schuifpuien, strak gemonteerd en passend aangesloten op uw woning.",
    image: "/atw-aanbouw-pvc-glass.webp",
    alt: "Moderne aanbouw met donkere PVC-panelen en glazen schuifpuien",
    href: "/diensten#aanbouw-uitbouw",
  },
  {
    number: "03",
    label: "Ambachtelijk maatwerk",
    title: "Timmer- & montagewerk",
    shortTitle: "Timmer- & montagewerk",
    description:
      "Maatvast vakwerk voor constructie, afbouw en interieur. Verzorgd uitgevoerd, met oog voor materiaal, aansluiting en detail.",
    image: "/atw-portfolio-cabinetry.webp",
    alt: "Maatwerk houten wandkast als onderdeel van een renovatie",
    href: "/diensten#timmer-montagewerk",
  },
];

export function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <div className="service-explorer">
      <div className="service-stage">
        <div className="service-stage-images" aria-hidden="true">
          {services.map((item, index) => (
            <Image
              key={item.number}
              className={index === active ? "is-active" : ""}
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 1050px) 100vw, 56vw"
            />
          ))}
        </div>
        <div className="service-stage-shade" aria-hidden="true" />
        <div className="service-stage-top">
          <span>{service.number}</span>
          <span>{String(active + 1).padStart(2, "0")} / 03</span>
        </div>
        <div className="service-stage-content" key={service.number} aria-live="polite">
          <p>{service.label}</p>
          <h3>{service.title}</h3>
          <div>
            <span>{service.description}</span>
            <Link href={service.href} aria-label={`Bekijk meer over ${service.title}`}>
              Ontdek deze dienst <Arrow />
            </Link>
          </div>
        </div>
      </div>

      <div className="service-tabs" role="tablist" aria-label="Kies een dienst">
        {services.map((item, index) => (
          <button
            key={item.number}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={index === active ? "is-active" : ""}
            onClick={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
          >
            <span>{item.number}</span>
            <strong>{item.shortTitle}</strong>
            <i aria-hidden="true"><Arrow /></i>
          </button>
        ))}
      </div>
      <p className="service-explorer-hint">Beweeg over of klik op een dienst om meer te ontdekken.</p>
    </div>
  );
}
