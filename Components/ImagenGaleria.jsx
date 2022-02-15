import styles from "../styles/Galeria.module.scss";

import Imagen from "./Imagen";

export default function ImagenGaleria({ titulo, img, tags, link }) {
  return (
    <div className={styles.ImagenGaleria}>
      <h3>{titulo}</h3>

      <Imagen img={img} alt={titulo} />

      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <a href={link} about="_blank">
        <button>Ver más</button>
      </a>
    </div>
  );
}
