import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Proyecto.module.scss";

export default function Proyecto({ titulo, descripcion, imgSrc, tags, demo, repo }) {
  return (
    <article className={styles.proyecto}>
      {/* Columna Img */}
      <Image
        className={styles.proyecto__img}
        src={imgSrc}
        alt="Previsualización de proyecto"
        layout="intrinsic"
      />
      {/* Columna Texto */}
      <div className={styles.proyecto__texto}>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className={styles.links}>
          <a href={demo} about="_blank">
            <button>Demo</button>
          </a>
          <a href={repo} about="_blank">
            <button>Repo</button>
          </a>
        </div>
      </div>
    </article>
  );
}
