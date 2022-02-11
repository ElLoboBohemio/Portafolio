//Next.js
import Link from "next/link";

//SCSS
import styles from "../styles/Social.module.scss";

//SVGs
import Github from "../svgs/Github";
import Twitter from "../svgs/Twitter";
import Codepen from "../svgs/Codepen";
import Linkedin from "../svgs/Linkedin";

export default function Social() {
  return (
    <div className={styles.social}>
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

      <div className={styles.social__div}>
        <Link href="https://twitter.com/BohemioLobo" passHref>
          <a target="_blank" aria-label="Twitter">
            <Twitter className={styles.social__svg} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/josu%C3%A9-lobo/" passHref>
          <a target="_blank" aria-label="Linkedin">
            <Linkedin className={styles.social__svg} />
          </a>
        </Link>
      </div>
    </div>
  );
}
