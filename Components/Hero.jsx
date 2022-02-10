//SVG
import Investiga from "../svgs/Investiga";

//SCSS
import styles from "../styles/General.module.scss";

export default function Hero({ h1, p, bold }) {
  return (
    <article className={styles.hero}>
      <div>
        <h1>{h1}</h1>
        <p>
          {p} <b>{bold}</b>{" "}
        </p>
        <a href="www.google.com" about="_blank">
          <button>Ver CV</button>
        </a>
      </div>
      <Investiga />
    </article>
  );
}
