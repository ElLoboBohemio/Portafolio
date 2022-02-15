//Next.js
import Link from "next/link";

//SCSS
import styles from "../styles/Social.module.scss";

//SVGs
import Github from "../svgs/Github";
import Codepen from "../svgs/Codepen";

export default function Social() {
  return (
    <div className={styles.social__izq}>
      <div className={styles.social__div}>
        <Link href="https://github.com/ElLoboBohemio/ElLoboBohemio" passHref>
          <a target="_blank" aria-label="Github">
            <Github className={styles.social__svg} />
          </a>
        </Link>
        <Link href="https://codepen.io/bohemiolobo" passHref>
          <a target="_blank" aria-label="Codepen">
            <Codepen className={styles.social__svg} />
          </a>
        </Link>
      </div>
    </div>
  );
}
