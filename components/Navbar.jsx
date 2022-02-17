//Link Next.js
import Link from "next/link";
import { useState } from "react";

//SCSS
import styles from "../styles/Navbar.module.scss";

//SVG
import Logo from "../svgs/Logo.jsx";
import MenuBars from "../svgs/Menu";
import Equis from "../svgs/Equis";

const Navbar = () => {
  const [Menu, setMenu] = useState(true);

  const mostrarMenu = () => setMenu(!Menu);
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.nav__div}>
          <Link href="/" passHref>
            <a aria-label="Logo">
              <Logo className={styles.nav__logo} />
            </a>
          </Link>

          <button className={styles.nav__btn} onClick={mostrarMenu} aria-label="Toggle Menu">
            {Menu ? (
              <MenuBars className={styles.nav__toggle} />
            ) : (
              <Equis className={styles.nav__toggle} />
            )}
          </button>
        </div>
      </div>

      <div className={Menu ? `${styles.sidebar}` : `${styles.sidebar} ${styles.active}`}>
        <Link href="/" passHref>
          <a className={styles.sidebar__a}>Inicio</a>
        </Link>
        <Link href="/galeria" passHref>
          <a className={styles.sidebar__a}>Galería</a>
        </Link>
        <Link href="/blog" passHref>
          <a className={styles.sidebar__a}>Blog</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
