import type { Metadata } from "next";
import PapelPicado from "@/components/PapelPicado";
import Reveal from "@/components/Reveal";
import { restaurant, hours } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Adres, telefon i godziny otwarcia Los Dos, ${restaurant.address}.`,
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(restaurant.mapsQuery)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="hero-bg" aria-hidden="true" />
        <PapelPicado count={16} />
        <div className="hero-content" style={{ paddingBottom: 80 }}>
          <p className="eyebrow">Visítanos</p>
          <h1 style={{ fontSize: "clamp(2.4rem,7vw,4.5rem)" }}>Kontakt</h1>
          <p className="hero-sub">Wpadnij, zadzwoń albo napisz do nas na Instagramie.</p>
        </div>
        <svg className="hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#FEF6EC" d="M0 40 C 240 90 480 0 720 30 C 960 60 1200 90 1440 40 L1440 80 L0 80 Z" />
        </svg>
      </section>

      <section className="section container">
        <div className="contact-grid">
          <Reveal>
            <p className="eyebrow">Dane kontaktowe</p>
            <h2 style={{ marginBottom: 28 }}>Znajdziesz nas tutaj</h2>

            <div className="grid" style={{ gap: 18 }}>
              <div className="info-card">
                <span className="card-icon" aria-hidden="true">📍</span>
                <div>
                  <h3>Adres</h3>
                  <p>{restaurant.address}</p>
                  <a href={`https://www.google.com/maps?q=${encodeURIComponent(restaurant.mapsQuery)}`} target="_blank" rel="noopener noreferrer">
                    Wyznacz trasę →
                  </a>
                </div>
              </div>

              <div className="info-card">
                <span className="card-icon" aria-hidden="true">☎</span>
                <div>
                  <h3>Telefon</h3>
                  <p><a href={restaurant.phoneHref}>{restaurant.phone}</a></p>
                </div>
              </div>

              <div className="info-card">
                <span className="card-icon" aria-hidden="true">✦</span>
                <div>
                  <h3>Instagram</h3>
                  <p><a href={restaurant.instagram} target="_blank" rel="noopener noreferrer">{restaurant.instagramHandle}</a></p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">Godziny otwarcia</p>
            <h2 style={{ marginBottom: 16 }}>Otwarte codziennie</h2>
            <div className="card" style={{ padding: "8px 26px" }}>
              <table className="hours-table">
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.day}>
                      <td>{h.day}</td>
                      <td>{h.open}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a className="btn btn-primary" href={restaurant.phoneHref} style={{ marginTop: 22 }}>
              Zadzwoń teraz
            </a>
          </Reveal>
        </div>

        <Reveal style={{ marginTop: 56 }}>
          <iframe
            className="map-embed"
            src={mapSrc}
            title={`Mapa: ${restaurant.name}, ${restaurant.address}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </section>
    </>
  );
}
