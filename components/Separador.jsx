import styles from "../styles/Separador.module.scss";

export default function Separador({ titulo, invertir }) {
  return (
    <>
      <div className={invertir ? styles.separador__invertido : styles.separador}>
        <h2>{titulo}</h2>
      </div>
    </>
  );
}
