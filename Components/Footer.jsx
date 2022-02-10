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
            <Link href="https://github.com/ElLoboBohemio/ElLoboBohemio" passHref={true}>
              <a target="_blank">
                <Github className={styles.footer__svg} />
              </a>
            </Link>
            <Link href="https://codepen.io/bohemiolobo" passHref={true}>
              <a target="_blank">
                <Codepen className={styles.footer__svg} />
              </a>
            </Link>
          </article>

          <p className={styles.footer__span}>©Hecho con 💛 por Josué L.</p>

          <article className={styles.footer__article}>
            <Link href="https://twitter.com/BohemioLobo" passHref={true}>
              <a target="_blank">
                <Twitter className={styles.footer__svg} />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/josu%C3%A9-lobo/" passHref={true}>
              <a target="_blank">
                <Linkedin className={styles.footer__svg} />
              </a>
            </Link>
          </article>
        </section>
      </div>
    </footer>
  );
}
