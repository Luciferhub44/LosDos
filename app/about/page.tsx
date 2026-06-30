import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PapelPicado from "@/components/PapelPicado";
import Reveal from "@/components/Reveal";
import { Serape } from "@/components/Bits";
import { restaurant } from "@/lib/data";

export const metadata: Metadata = {
  title: "O nas",
  description: "Historia Los Dos: dwóch przyjaciół, jedna pasja do autentycznej kuchni meksykańskiej w Poznaniu.",
};

const values = [
  { title: "Auténtico", text: "Przepisy prosto z Meksyku: al pastor, carnitas, barbacoa. Bez skrótów." },
  { title: "Fresco", text: "Tortille, salsy i guacamole robimy każdego dnia od podstaw." },
  { title: "Generoso", text: "Porcje, którymi naprawdę się najesz, w uczciwej cenie." },
  { title: "Con corazón", text: "Gościnność po meksykańsku. U nas każdy jest mi casa." },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="hero-bg" aria-hidden="true" />
        <PapelPicado count={16} />
        <div className="hero-content" style={{ paddingBottom: 80 }}>
          <p className="eyebrow">Nuestra historia</p>
          <h1 style={{ fontSize: "clamp(2.4rem,7vw,4.5rem)" }}>O nas</h1>
          <p className="hero-sub">Dwóch. Los Dos. Jedna wielka miłość do meksykańskiego jedzenia.</p>
        </div>
        <svg className="hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#FEF6EC" d="M0 40 C 240 90 480 0 720 30 C 960 60 1200 90 1440 40 L1440 80 L0 80 Z" />
        </svg>
      </section>

      <section className="section container">
        <div className="split">
          <Reveal>
            <p className="eyebrow">Skąd nazwa</p>
            <h2>Zaczęło się od dwóch</h2>
            <p className="lead">
              „Los Dos" znaczy po hiszpańsku „ci dwaj". Tyle nas było na początku: dwóch przyjaciół,
              jeden pomysł i przekonanie, że Poznań zasługuje na prawdziwe meksykańskie tacos.
            </p>
            <p style={{ color: "var(--ink-soft)" }}>
              Dziś przy Zeylanda 12/2 nixtamalizujemy kukurydzę, dusimy mięso godzinami i ucieramy salsę
              w molcajete. Goście mówią, że to najlepsze burrito, jakie jedli w życiu, a my dopiero się
              rozkręcamy.
            </p>
            <Link className="btn btn-primary" href="/menu" style={{ marginTop: 8 }}>Zobacz, co gotujemy</Link>
          </Reveal>
          <Reveal className="about-photo" delay={120}>
            <Image src="/img/about-interior.jpg" alt="Wnętrze restauracji Los Dos z papierowymi banerami papel picado" width={1400} height={1050} sizes="(max-width: 900px) 100vw, 50vw" />
          </Reveal>
        </div>
      </section>

      <Serape />

      <section className="section band">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Nasze wartości</p>
            <h2>Cztery rzeczy, na których nam zależy</h2>
          </div>
          <div className="grid grid-2" style={{ marginTop: 44 }}>
            {values.map((v, i) => (
              <Reveal key={v.title} className="value" delay={i * 80}>
                <span className="value-dot" aria-hidden="true" />
                <div>
                  <h3 style={{ color: "#fff" }}>{v.title}</h3>
                  <p style={{ color: "#D6F0EC" }}>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section container center">
        <Reveal as="h2">Wpadnij się przekonać</Reveal>
        <Reveal as="p" className="lead">{restaurant.address} · otwarte codziennie 12:00–21:00</Reveal>
        <Reveal className="btn-row">
          <Link className="btn btn-primary" href="/contact">Jak dojechać</Link>
          <a className="btn btn-ghost" href={restaurant.instagram} target="_blank" rel="noopener noreferrer">
            Instagram {restaurant.instagramHandle}
          </a>
        </Reveal>
      </section>
    </>
  );
}
