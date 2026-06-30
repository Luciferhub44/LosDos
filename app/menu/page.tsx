import type { Metadata } from "next";
import Link from "next/link";
import PapelPicado from "@/components/PapelPicado";
import Reveal from "@/components/Reveal";
import { Tag } from "@/components/Bits";
import { menu, restaurant } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu",
  description: "Tacos, burritos, quesadillas i napoje. Autentyczne meksykańskie menu Los Dos w Poznaniu.",
};

export default function MenuPage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="hero-bg" aria-hidden="true" />
        <PapelPicado count={16} />
        <div className="hero-content" style={{ paddingBottom: 80 }}>
          <p className="eyebrow">La carta</p>
          <h1 style={{ fontSize: "clamp(2.4rem,7vw,4.5rem)" }}>Menu</h1>
          <p className="hero-sub">Wszystko świeże, robione na miejscu. Ceny zawierają podatek.</p>
        </div>
        <svg className="hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#FEF6EC" d="M0 40 C 240 90 480 0 720 30 C 960 60 1200 90 1440 40 L1440 80 L0 80 Z" />
        </svg>
      </section>

      <section className="section container">
        {menu.map((sec) => (
          <div className="menu-section" key={sec.id} id={sec.id}>
            <div className="menu-head">
              <h2>{sec.title}</h2>
              <span className="sub">{sec.subtitle}</span>
              <span className="menu-rule" aria-hidden="true" />
            </div>
            <div>
              {sec.dishes.map((d) => (
                <Reveal key={d.name} className="dish">
                  <span className="dish-name">
                    {d.name}
                    {d.tags?.map((t) => <Tag key={t}>{t}</Tag>)}
                  </span>
                  <span className="dish-price">{d.price}</span>
                  {d.desc && <p className="dish-desc">{d.desc}</p>}
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <div className="card center" style={{ marginTop: 24 }}>
          <h3>Coś dla Ciebie?</h3>
          <p>Zadzwoń i zamów na wynos albo zarezerwuj stolik.</p>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: 12 }}>
            <a className="btn btn-primary" href={restaurant.phoneHref}>Zadzwoń: {restaurant.phone}</a>
            <Link className="btn btn-ghost" href="/contact">Kontakt</Link>
          </div>
        </div>
      </section>
    </>
  );
}
