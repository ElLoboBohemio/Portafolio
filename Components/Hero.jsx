//SVG
import Investiga from "../svgs/Investiga";
import Link from "next/link";

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
        <Link
          href="https://www.canva.com/design/DAEn3igpKRE/0lKgX5kNk_EFlsJ52ql6NQ/view?utm_content=DAEn3igpKRE&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
          passHref={true}
        >
          <a about="_blank">
            <button>Ver CV</button>
          </a>
        </Link>
      </div>
      <Investiga />
    </article>
  );
}
