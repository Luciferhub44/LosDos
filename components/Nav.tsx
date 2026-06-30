"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, restaurant } from "@/lib/data";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image className="brand-logo" src="/img/logo.png" alt="Logo Los Dos" width={48} height={48} priority />
          <span className="brand-text">
            Los Dos
            <small>Cocina Mexicana</small>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Przełącz menu nawigacji"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Główna nawigacja">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={active ? "is-active" : ""}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <a className="nav-cta" href={restaurant.phoneHref} onClick={() => setOpen(false)}>
            Zadzwoń
          </a>
        </nav>
      </div>
    </header>
  );
}
