//Link Next.js
import Link from "next/link";
import { useState } from "react";

//SCSS
import styles from "../styles/Navbar.module.scss";

//SVG
import Logo from "../svgs/Logo";
import MenuBars from "../svgs/Menu";
import Equis from "../svgs/Equis";

const Navbar = () => {
  const [Menu, setMenu] = useState(true);

  const mostrarMenu = () => setMenu(!Menu);
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.nav__div}>
          <Link href="/">
            <a>
              <Logo className={styles.nav__logo} />
            </a>
          </Link>

          <a onClick={mostrarMenu}>
            {Menu ? (
              <MenuBars className={styles.nav__toggle} />
            ) : (
              <Equis className={styles.nav__toggle} />
            )}
          </a>
        </div>
      </div>

      <div className={Menu ? `${styles.sidebar}` : `${styles.sidebar} ${styles.active}`}>
        <Link href="/">
          <a className={styles.sidebar__a}>Inicio</a>
        </Link>
        <Link href="/galeria">
          <a className={styles.sidebar__a}>Galería</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
