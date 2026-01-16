//SVG
import Investiga from "../svgs/Investiga";
import Link from "next/link";

//SCSS
import styles from "../styles/General.module.scss";

export default function Hero({ h1, p, bold, blog }) {
  return (
    <article className={styles.hero}>
      <div>
        <h1>{h1}</h1>
        {blog ? null : (
          <p>
            {p} <b>{bold}</b>{" "}
          </p>
        )}

        {blog ? null : (
          <Link
            href="https://docs.google.com/document/d/1BxwhWCDy8ZIo3jtLvTNKgrHle-bL9RN92svSJz9xWfI/edit?usp=sharing"
            about="_blank"
          >
            <button>Ver CV</button>
          </Link>
        )}
      </div>
      {blog ? null : <Investiga />}
    </article>
  );
}
