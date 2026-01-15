//Next.js
import Link from "next/link";

//SCSS
import styles from "../styles/Social.module.scss";

//SVGs
import Twitter from "../svgs/Twitter";
import Linkedin from "../svgs/Linkedin";
import Instagram from "../svgs/Instagram";

export default function SocialDer() {
  return (
    <div className={styles.social__der}>
      <div className={styles.social__div}>
        <Link href="https://www.instagram.com/josue.lobbo/" target="_blank" aria-label="Twitter">
          <Instagram className={styles.social__svg} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/josu%C3%A9-lobo/"
          target="_blank"
          aria-label="Linkedin"
        >
          <Linkedin className={styles.social__svg} />
        </Link>
      </div>
    </div>
  );
}
