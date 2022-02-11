import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Galeria.module.scss";

import { useState } from "react";

export default function ImagenGaleria({ titulo, img, tags, link }) {
  const [Popup, setPopup] = useState(true);
  const mostrarImg = () => setPopup(!Popup);

  return (
    <div className={styles.ImagenGaleria}>
      <h3>{titulo}</h3>
      <div className={Popup ? styles.ImagenGaleria__pop__off : styles.ImagenGaleria__pop__on}>
        <div className={Popup ? styles.ImagenGaleria__div : styles.ImagenGaleria__div__pop}>
          <a onClick={mostrarImg}>
            <Image src={img} alt={titulo} layout="fill" />
          </a>
        </div>
      </div>

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
