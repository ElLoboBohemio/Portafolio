//Link Next.js
import Link from "next/link";

//SVGss
import Github from "../svgs/Github";
import Twitter from "../svgs/Twitter";
import Codepen from "../svgs/Codepen";
import Linkedin from "../svgs/Linkedin";

//SCSS
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* 'container' por estar en globals.css */}

        <section className={styles.footer__section}>
          <article className={styles.footer__article}>
            <Link href="https://github.com/ElLoboBohemio/ElLoboBohemio" passHref>
              <a target="_blank" aria-label="Github">
                <Github className={styles.footer__svg} />
              </a>
            </Link>
            <Link href="https://codepen.io/bohemiolobo" passHref>
              <a target="_blank" aria-label="Codepen">
                <Codepen className={styles.footer__svg} />
              </a>
            </Link>
          </article>

          <p className={styles.footer__span}>©Hecho con 💛 por Josué L.</p>

          <article className={styles.footer__article}>
            <Link href="https://twitter.com/BohemioLobo" passHref>
              <a target="_blank" aria-label="Twitter">
                <Twitter className={styles.footer__svg} />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/josu%C3%A9-lobo/" passHref>
              <a target="_blank" aria-label="Linkedin">
                <Linkedin className={styles.footer__svg} />
              </a>
            </Link>
          </article>
        </section>
      </div>
    </footer>
  );
}
