//Link Next.js
import Link from "next/link";

//SCSS
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <section className={styles.footer__section}>
          <h3 className={styles.footer__h3}>©Hecho con 💛 por Josué L.</h3>
        </section>
      </div>
    </footer>
  );
}
