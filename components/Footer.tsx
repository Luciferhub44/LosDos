import Link from "next/link";
import Image from "next/image";
import { nav, restaurant, hours } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="brand brand--footer">
            <Image className="brand-logo" src="/img/logo.png" alt="Logo Los Dos" width={48} height={48} />
            <span className="brand-text">
              Los Dos
              <small>Cocina Mexicana</small>
            </span>
          </div>
          <p className="footer-tag">{restaurant.tagline}</p>
          <a className="footer-ig" href={restaurant.instagram} target="_blank" rel="noopener noreferrer">
            {restaurant.instagramHandle}
          </a>
        </div>

        <div>
          <h3>Nawigacja</h3>
          <ul className="footer-list">
            {nav.map((i) => (
              <li key={i.href}><Link href={i.href}>{i.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Kontakt</h3>
          <ul className="footer-list">
            <li>{restaurant.address}</li>
            <li><a href={restaurant.phoneHref}>{restaurant.phone}</a></li>
          </ul>
        </div>

        <div>
          <h3>Godziny</h3>
          <ul className="footer-list footer-hours">
            <li><span>Codziennie</span><span>12:00 – 21:00</span></li>
            <li className="footer-hours-note">{hours.length} dni w tygodniu</li>
          </ul>
        </div>
      </div>
      <div className="footer-bar">
        <span>© {new Date().getFullYear()} Los Dos · Poznań</span>
        <span>Hecho con ♥ y mucho chile</span>
      </div>
    </footer>
  );
}
