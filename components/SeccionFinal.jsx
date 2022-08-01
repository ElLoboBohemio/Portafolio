//SVG
import Crea from "../svgs/Crea";

//SCSS
import styles from "../styles/General.module.scss";

export default function SeccionFinal({ titulo1, p1, p2, p3, titulo2, args }) {
  return (
    <article className={styles.seccion__final}>
      <Crea />
      <div>
        <h2>{titulo1}</h2>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <h2>{titulo2}</h2>
        <ul>
          {args.map((arg, index) => (
            <li key={index}>{arg}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
