import Image from "next/image";
import styles from "../styles/Proyecto.module.scss";

export default function Proyecto({ titulo, descripcion, imgSrc, tags }) {
  return (
    <article className={styles.proyecto}>
      {/* Columna Img */}
      <Image
        className={styles.proyecto__img}
        src={imgSrc}
        alt="Previsualización de proyecto"
        width={1000}
        height={500}
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
          <a href="" about="_blank">
            <button>Demo</button>
          </a>
          <a href="" about="_blank">
            <button>Repo</button>
          </a>
        </div>
      </div>
    </article>
  );
}
