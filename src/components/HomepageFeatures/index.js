import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Anmeldetool",
    Svg: require("@site/static/img/undraw_booking.svg").default,
    description: (
      <>
        Sparen Sie Zeit und Mühe mit unserem benutzerfreundlichen Anmeldetool,
        das den Anmeldeprozess für Veranstaltungen stark vereinfacht.
      </>
    ),
  },
  {
    title: "Nachhilfetool",
    Svg: require("@site/static/img/undraw_video-tutorial.svg").default,
    description: (
      <>
        Mit diesem Tool können erfahrene Schüler:innen zu Nachhilfelehrer:innen
        werden und anderen Schüler:innen in verschiedenen Fächern helfen.
      </>
    ),
  },
  {
    title: "Einfach in der Handhabung",
    Svg: require("@site/static/img/undraw_clouds.svg").default,
    description: (
      <>
        Alle Tools sind so gestaltet, dass sie intuitiv und einfach zu bedienen
        sind, sodass Sie sich auf das Wesentliche konzentrieren können.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
