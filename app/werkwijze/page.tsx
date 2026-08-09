import type { Metadata } from "next";
import { ProcessJourney } from "../components/ProcessJourney";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Werkwijze | ATW Montage", description: "Bekijk hoe ATW Montage uw renovatie van kennismaking tot oplevering organiseert." };

export default function WerkwijzePage() {
  return <main><SiteHeader /><PageHero eyebrow="Onze werkwijze" title="Grip op iedere" accent="bouwfase." copy="Een soepel project begint met duidelijke afspraken. Daarom werken we stap voor stap, met korte lijnen en één vast aanspreekpunt." image="build" />
    <section className="workflow-interactive" data-reveal><div className="workflow-intro"><p className="kicker">Klik door het proces</p><h2>Vijf fases.<br />Eén duidelijke lijn.</h2><p>Kies een stap om te zien wat we doen en welk resultaat u op dat moment kunt verwachten.</p></div><ProcessJourney /></section>
    <section className="principles-section"><div><p className="kicker light">Zo houden we controle</p><h2>Duidelijkheid zit in de details.</h2></div><div className="principle-grid"><article><span>01</span><h3>Vaste communicatie</h3><p>U weet altijd bij wie u terechtkunt met vragen en keuzes.</p></article><article><span>02</span><h3>Logische werkvolgorde</h3><p>Werkzaamheden worden vooraf goed op elkaar afgestemd.</p></article><article><span>03</span><h3>Nette werkplek</h3><p>We werken zorgvuldig en houden de bouwplaats beheersbaar.</p></article></div></section>
    <section className="faq-section"><div><p className="kicker">Praktische vragen</p><h2>Goed om vooraf<br />te weten.</h2></div><div className="faq-list"><details><summary>Werkt ATW Montage door heel Nederland?</summary><p>Ja. We nemen renovatie- en montageopdrachten door heel Nederland aan. De haalbaarheid en planning bespreken we tijdens de kennismaking.</p></details><details><summary>Kan ik ook voor een deel van de renovatie terecht?</summary><p>Dat kan, vooral voor aanbouw, uitbouw en timmer- of montagewerk. We bekijken per aanvraag of onze inzet logisch aansluit op het project.</p></details><details><summary>Hoe ontvang ik een offerte?</summary><p>Na een eerste gesprek en waar nodig een opname ontvangt u een voorstel dat aansluit op de besproken werkzaamheden.</p></details></div></section>
    <CtaBand title="Duidelijke plannen beginnen met duidelijke afspraken." /><SiteFooter /></main>;
}
