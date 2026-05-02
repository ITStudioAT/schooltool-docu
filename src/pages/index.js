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
    desc: "Terminvereinbarung für die Schulanmeldung oder Bewerbungsgespräche.",
    disabled: true,
  },
  {
    num: "02",
    title: "Nachhilfetool",
    desc: "Schüler:innen helfen Schüler:innen. Nachhilfeangebote einstellen, Kontakt aufnehmen, voneinander lernen.",
    disabled: true,
  },
  {
    num: "03",
    title: "Unterrichtstool",
    desc: "Digitale Unterstützung für den Unterrichtsalltag. Materialien, Aufgaben und Feedback an einem Ort.",
    disabled: true,
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
      title="SchoolTool Dokumentation"
      description="Dokumentation für die aktiven SchoolTool-Module."
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
              Dokumentation für die aktiven SchoolTool-Module.
            </p>
            <div className={styles.actions}>
              <Link to="/restauranttool" className={styles.btnPrimary}>
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
          {APPS.map((app) => {
            const content = (
              <>
                <span className={styles.cardNum}>{app.num} — App</span>
                <h3 className={styles.cardTitle}>{app.title}</h3>
                <p className={styles.cardDesc}>{app.desc}</p>
                <span className={styles.cardArrow}>
                  {app.disabled ? "Deaktiviert" : "Doku öffnen"}
                  {!app.disabled && <ArrowIcon />}
                </span>
              </>
            );

            if (app.disabled) {
              return (
                <div
                  key={app.num}
                  className={`${styles.card} ${styles.cardDisabled}`}
                  aria-disabled="true"
                >
                  {content}
                </div>
              );
            }

            return (
              <Link key={app.num} to={app.href} className={styles.card}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
