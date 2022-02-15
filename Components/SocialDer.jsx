//Next.js
import Link from "next/link";

//SCSS
import styles from "../styles/Social.module.scss";

//SVGs
import Twitter from "../svgs/Twitter";
import Linkedin from "../svgs/Linkedin";

export default function SocialDer() {
  return (
    <div className={styles.social__der}>
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
