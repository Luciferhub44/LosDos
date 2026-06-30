import Link from "next/link";
import Image from "next/image";
import PapelPicado from "@/components/PapelPicado";
import Reveal from "@/components/Reveal";
import { Serape, Stars } from "@/components/Bits";
import { restaurant, menu, reviews } from "@/lib/data";

const features = [
  { icon: "✱", title: "Ręcznie robione tortille", text: "Każdego dnia nixtamalizujemy kukurydzę i robimy tortille od zera, tak jak w Meksyku." },
  { icon: "✦", title: "Salsa robiona na miejscu", text: "Pięć rodzajów salsy, od łagodnej verde po piekielną habanero. Świeżo, codziennie." },
  { icon: "❋", title: "Wielkie porcje", text: "Burrito, którym się najesz i tacos w cenie, która nie zwala z nóg." },
];

export default function Home() {
  const topDishes = [
    { d: menu[0].dishes[2], img: "/img/dish-tacos.jpg" },     // Al Pastore
    { d: menu[1].dishes[0], img: "/img/dish-burrito.jpg" },   // Burrito
    { d: menu[0].dishes[3], img: "/img/dish-krewetki.jpg" },  // Krewetki
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-photo" aria-hidden="true">
          <Image src="/img/hero.png" alt="" fill priority sizes="100vw" />
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <PapelPicado count={16} />
        <div className="hero-content">
          <p className="eyebrow">Restauracja meksykańska · Poznań</p>
          <h1>
            Los <span className="accent">Dos</span>
          </h1>
          <p className="hero-sub">{restaurant.tagline}</p>
          <div className="btn-row">
            <Link className="btn btn-gold" href="/menu">Zobacz menu</Link>
            <a className="btn btn-ghost" href={restaurant.phoneHref} style={{ color: "#fff", borderColor: "#fff" }}>
              Zarezerwuj stolik
            </a>
          </div>
          <div className="hero-meta">
            <span><Stars value={5} /> {restaurant.rating.toFixed(1)} · {restaurant.reviewCount.toLocaleString("pl-PL")} opinii</span>
            <span>● Otwarte codziennie 12:00–21:00</span>
            <span>📍 {restaurant.address}</span>
          </div>
        </div>
        <svg className="hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#FEF6EC" d="M0 40 C 240 90 480 0 720 30 C 960 60 1200 90 1440 40 L1440 80 L0 80 Z" />
        </svg>
      </section>

      {/* FEATURES */}
      <section className="section container center">
        <Reveal as="p" className="eyebrow">Bienvenidos</Reveal>
        <Reveal as="h2">Smak Meksyku w sercu Poznania</Reveal>
        <Reveal as="p" className="lead">
          Otworzyliśmy się niedawno i już jesteśmy ulubionym miejscem na tacos w mieście:
          świeże składniki, prawdziwe przepisy i mnóstwo serca.
        </Reveal>
        <div className="grid grid-3" style={{ marginTop: 48, textAlign: "left" }}>
          {features.map((f, i) => (
            <Reveal key={f.title} className="card" delay={i * 90}>
              <div className="card-icon" aria-hidden="true">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Serape />

      {/* SIGNATURE DISHES */}
      <section className="section container">
        <div className="center">
          <Reveal as="p" className="eyebrow">Especialidades de la casa</Reveal>
          <Reveal as="h2">Nasze ulubione</Reveal>
        </div>
        <div className="grid grid-3" style={{ marginTop: 44 }}>
          {topDishes.map(({ d, img }, i) => (
            <Reveal key={d.name} className="card photo-card" delay={i * 90}>
              <div className="photo-card-img">
                <Image src={img} alt={d.name} fill sizes="(max-width: 900px) 100vw, 380px" />
              </div>
              <div className="photo-card-body">
                <h3 style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                  <span>{d.name}</span>
                  <span style={{ color: "var(--red)" }}>{d.price}</span>
                </h3>
                <p>{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="center" style={{ marginTop: 40 }}>
          <Link className="btn btn-primary" href="/menu">Całe menu →</Link>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="section band">
        <div className="container center">
          <Reveal as="p" className="eyebrow">Dlaczego Los Dos</Reveal>
          <Reveal as="h2">Nowa knajpa, którą już pokochaliście</Reveal>
          <div className="band-stats">
            {[
              { n: "5,0", l: "Średnia ocena" },
              { n: `${restaurant.reviewCount.toLocaleString("pl-PL")}`, l: "Zadowolonych gości" },
              { n: "100%", l: "Świeże składniki" },
            ].map((s) => (
              <Reveal key={s.l} className="stat">
                <div className="stat-num">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW TEASER */}
      <section className="section container">
        <div className="center">
          <Reveal as="p" className="eyebrow">Opinie gości</Reveal>
          <Reveal as="h2">Co mówią o nas w Poznaniu</Reveal>
        </div>
        <div className="grid grid-3" style={{ marginTop: 44 }}>
          {reviews.slice(0, 3).map((r, i) => (
            <Reveal key={r.name} className="review-card" delay={i * 90}>
              <Stars value={r.rating} />
              <p>{r.text}</p>
              <div className="review-who">
                <span className="review-avatar" aria-hidden="true">{r.name[0]}</span>
                <span>
                  <span className="review-name">{r.name}</span><br />
                  <span className="review-when">{r.when}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="center" style={{ marginTop: 40 }}>
          <Link className="btn btn-ghost" href="/reviews">Więcej opinii</Link>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="section cta-strip">
        <PapelPicado count={16} />
        <div className="container center" style={{ position: "relative", zIndex: 2 }}>
          <Reveal as="h2">Głodny? ¡Vámonos!</Reveal>
          <Reveal as="p" className="lead">Wpadnij do nas na {restaurant.address} albo zadzwoń i zamów na wynos.</Reveal>
          <Reveal className="btn-row" >
            <a className="btn btn-gold" href={restaurant.phoneHref}>Zadzwoń: {restaurant.phone}</a>
            <Link className="btn btn-ghost" href="/contact" style={{ color: "#fff", borderColor: "#fff" }}>Jak dojechać</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
