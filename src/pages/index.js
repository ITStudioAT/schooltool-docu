import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

const APPS = [
  {
    num: "01",
    title: "Anmeldetool",
    desc: "Terminvereinbacrung für die Schulanmeldung oder Bewerbungsgespräche.",
    href: "/anmeldetool",
  },
  {
    num: "02",
    title: "Nachhilfetool",
    desc: "Schüler:innen helfen Schüler:innen. Nachhilfeangebote einstellen, Kontakt aufnehmen, voneinander lernen.",
    href: "/nachhilfetool",
  },
  {
    num: "03",
    title: "Unterrichtstool",
    desc: "Digitale Unterstützung für den Unterrichtsalltag. Materialien, Aufgaben und Feedback an einem Ort.",
    href: "/unterrichtstool",
  },
  {
    num: "04",
    title: "Restauranttool",
    desc: "Digitale Speisepläne, Bestellverwaltung und Kantinenorganisation für den Schulbetrieb.",
    href: "/restauranttool",
  },
];

export default function Home() {
  return (
    <Layout
      title="Schulalltag-Tools, die einfach funktionieren"
      description="Eine wachsende Sammlung kleiner, fokussierter Apps für den Schulalltag — vom Anmeldetool bis zum Nachhilfetool."
    >
      <div className={styles.home}>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.eyebrow}>Schooltool</div>
            <h1 className={styles.h1}>
              Werkzeuge für den <em className={styles.em}>Schulalltag,</em> die
              einfach funktionieren.
            </h1>
            <p className={styles.lede}>
              Eine wachsende Sammlung kleiner, fokussierter Schul-Apps — vom
              Anmeldetool bis zum Nachhilfetool.
            </p>
            <div className={styles.actions}>
              <Link to="/anmeldetool" className={styles.btnPrimary}>
                Erste Schritte <ArrowIcon />
              </Link>
              <a href="#apps" className={styles.btnGhost}>
                Apps ansehen
              </a>
            </div>
          </div>
        </section>

        {/* ── App Cards ── */}
        <div id="apps" className={styles.cards}>
          {APPS.map((app) => (
            <Link key={app.num} to={app.href} className={styles.card}>
              <span className={styles.cardNum}>{app.num} — App</span>
              <h3 className={styles.cardTitle}>{app.title}</h3>
              <p className={styles.cardDesc}>{app.desc}</p>
              <span className={styles.cardArrow}>
                Doku öffnen <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
