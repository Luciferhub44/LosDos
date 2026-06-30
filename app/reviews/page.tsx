import type { Metadata } from "next";
import PapelPicado from "@/components/PapelPicado";
import Reveal from "@/components/Reveal";
import { Stars } from "@/components/Bits";
import { reviews, restaurant } from "@/lib/data";

export const metadata: Metadata = {
  title: "Opinie",
  description: `5/5 z ${restaurant.reviewCount.toLocaleString("pl-PL")} opinii. Przeczytaj, co goście mówią o Los Dos w Poznaniu.`,
};

export default function ReviewsPage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="hero-bg" aria-hidden="true" />
        <PapelPicado count={16} />
        <div className="hero-content" style={{ paddingBottom: 80 }}>
          <p className="eyebrow">Lo que dicen</p>
          <h1 style={{ fontSize: "clamp(2.4rem,7vw,4.5rem)" }}>Opinie</h1>
          <p className="hero-sub">Goście oceniają nas na 5/5. Zobacz dlaczego.</p>
        </div>
        <svg className="hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#FEF6EC" d="M0 40 C 240 90 480 0 720 30 C 960 60 1200 90 1440 40 L1440 80 L0 80 Z" />
        </svg>
      </section>

      <section className="section container">
        <div className="review-summary">
          <div className="review-score">5,0</div>
          <div>
            <Stars value={5} />
            <p style={{ margin: "6px 0 0", color: "var(--ink-soft)" }}>
              Średnia z <strong>{restaurant.reviewCount.toLocaleString("pl-PL")}</strong> opinii w Google
            </p>
          </div>
        </div>

        <div className="grid grid-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} className="review-card" delay={(i % 3) * 90}>
              <Stars value={r.rating} />
              <p>{r.text}</p>
              <div className="review-who">
                <span className="review-avatar" aria-hidden="true">{r.name[0]}</span>
                <span>
                  <span className="review-name">{r.name}</span><br />
                  <span className="review-when">Opinia z Google · {r.when}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
