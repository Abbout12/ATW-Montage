"use client";

import { FormEvent } from "react";
import { Arrow, email } from "./SiteChrome";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const project = String(form.get("project") ?? "");
    const details = String(form.get("details") ?? "");
    const subject = encodeURIComponent(`Renovatieaanvraag van ${name}`);
    const body = encodeURIComponent(
      `Naam: ${name}\nTelefoon: ${phone}\nProject: ${project}\n\nToelichting:\n${details}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>Naam<input name="name" autoComplete="name" required placeholder="Uw naam" /></label>
        <label>Telefoon<input name="phone" autoComplete="tel" required placeholder="06 12 34 56 78" /></label>
      </div>
      <label>Type project
        <select name="project" defaultValue="Complete woningrenovatie">
          <option>Complete woningrenovatie</option>
          <option>Aanbouw of uitbouw</option>
          <option>Timmer- en montagewerk</option>
          <option>Anders</option>
        </select>
      </label>
      <label>Vertel kort over uw plannen
        <textarea name="details" required rows={5} placeholder="Wat wilt u laten verbouwen en wanneer zou u willen starten?" />
      </label>
      <button className="button button-primary form-submit" type="submit">Verstuur aanvraag <Arrow /></button>
      <p className="form-note">Uw e-mailprogramma wordt geopend met de ingevulde aanvraag.</p>
    </form>
  );
}
