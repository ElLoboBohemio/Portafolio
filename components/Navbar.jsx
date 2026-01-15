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

  // Función para cerrar el menú al hacer click en un link
  const cerrarMenu = () => setMenu(true);

  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.nav__div}>
          <Link href="/" aria-label="Logo" onClick={cerrarMenu}>
            <Logo className={styles.nav__logo} />
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

      {/* Sidebar logic */}
      <div className={Menu ? `${styles.sidebar}` : `${styles.sidebar} ${styles.active}`}>
        <Link href="/" className={styles.sidebar__a} onClick={cerrarMenu}>
          Inicio
        </Link>

        {/* Galería eliminada */}

        <Link href="/blog" className={styles.sidebar__a} onClick={cerrarMenu}>
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
