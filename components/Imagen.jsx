//Next.js
import Image from "next/image";
import { useState } from "react";

//SCSS
import styles from "../styles/Imagen.module.scss";

export default function Imagen({ img, alt }) {
  const [Popup, setPopup] = useState(true);
  const mostrarImg = () => {
    setPopup(!Popup);
    Popup
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "inherit");
  };
  return (
    <>
      <div className={Popup ? styles.Imagen__pop__off : styles.Imagen__pop__on}>
        <div className={Popup ? styles.Imagen__div : styles.Imagen__div__pop}>
          <a onClick={mostrarImg}>
            <Image src={img} alt={alt} layout="fill" />
          </a>
        </div>
      </div>
    </>
  );
}
