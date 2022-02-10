//Componentes
import Layout from "../../Components/Layout";
import ImagenGaleria from "../../Components/ImagenGaleria";
import Separador from "../../Components/Separador";
import Hero from "../../Components/Hero";
import SeccionFinal from "../../Components/SeccionFinal";

//SCSS
import styles from "../../styles/Galeria.module.scss";

//Imagenes
import Ajedrez from "../../public/img/galeria/Ajedrez-min.webp";
import Batman from "../../public/img/galeria/Batman-min.webp";
import Fisio from "../../public/img/galeria/Fisio-min.webp";
import Hades from "../../public/img/galeria/Hades-min.webp";
import Lobo from "../../public/img/galeria/Lobo-min.webp";
import Mario from "../../public/img/galeria/Mario-min.webp";
import Minotauro from "../../public/img/galeria/Minotauro-min.webp";
import Muppets from "../../public/img/galeria/Muppets-min.webp";
import Reloj from "../../public/img/galeria/Reloj-min.webp";
import Star from "../../public/img/galeria/Star-min.webp";
import Paisaje from "../../public/img/galeria/Paisaje-min.webp";
import Cartel from "../../public/img/galeria/Cartel-min.webp";

export default function Galeria() {
  return (
    <Layout
      title="Josué L. | Galería"
      description="Galería de proyectos realizados por mi siguiendo los fundamentos de diseño"
    >
      <div className="container">
        <section>
          <Hero
            h1="Galería"
            p="Estos son proyectos personales que he realizado para aplicar principios de diseño y
                el uso de"
            bold="software enfocado a esta área."
          />

          <Separador titulo="Proyectos" invertir={false} />

          <article className={styles.ImagenesGaleria}>
            <ImagenGaleria
              titulo="Ajedrez (Rejilla)"
              tags={["Axonométrico", "Ley de Tercios", "Colores Complementarios"]}
              img={Ajedrez}
              link="https://twitter.com/BohemioLobo/status/1355194831673438214"
            />
            <ImagenGaleria
              titulo="Tarjeta de Batman"
              tags={["Fibonacci", "Simetría", "Colores Complementarios"]}
              img={Batman}
              link="https://twitter.com/BohemioLobo/status/1353461103846514689"
            />
            <ImagenGaleria
              titulo="Hero de Fisioterapia"
              tags={["Hero de Pagina Web", "Animado SCSS", "Colores Complementarios"]}
              img={Fisio}
              link="https://ellobobohemio.github.io/Terapia-Fisica/"
            />
            <ImagenGaleria
              titulo="Poster de Hades"
              tags={["Minimalista", "Semi-Simétrico", "Colores Complementarios"]}
              img={Hades}
              link="https://twitter.com/BohemioLobo/status/1356986018839351296"
            />
            <ImagenGaleria
              titulo="Lobo geométrico"
              tags={["Geométrico", "Simétrico", "Colores Cromáticos"]}
              img={Lobo}
              link="https://twitter.com/BohemioLobo/status/1356986018839351296"
            />
            <ImagenGaleria
              titulo="Mario Bros Teatro"
              tags={["Desenfoques", "Composición Triangular", "Colores Tetraédricos"]}
              img={Mario}
              link="https://twitter.com/BohemioLobo/status/1354947356207292419"
            />
            <ImagenGaleria
              titulo="Minotauro griego"
              tags={["Patrones", "Simétrico", "Colores Monocromáticos"]}
              img={Minotauro}
              link="https://twitter.com/BohemioLobo/status/1352757425670152194"
            />
            <ImagenGaleria
              titulo="Muppets Rhapsody"
              tags={["Degradados", "Simétrico", "Colores Cromáticos"]}
              img={Muppets}
              link="https://twitter.com/BohemioLobo/status/1357425459340972033"
            />
            <ImagenGaleria
              titulo="Reloj Hora Aventura"
              tags={["Fibonacci", "Fuentes Originales", "Separación Complementaria"]}
              img={Reloj}
              link="https://twitter.com/BohemioLobo/status/1358181755925241859"
            />
            <ImagenGaleria
              titulo="Star Wars y Halo"
              tags={["Degradados", "Composición radial", "Colores de Choque"]}
              img={Star}
              link="https://twitter.com/BohemioLobo/status/1352351594482905088"
            />
            <ImagenGaleria
              titulo="Paisaje"
              tags={["Fibonacci", "Composición radial", "Colores Complementarios"]}
              img={Paisaje}
              link="https://twitter.com/BohemioLobo/status/1352351594482905088"
            />
            <ImagenGaleria
              titulo="Cartel Marca"
              tags={["Degradados", "Simetría", "Colores Complementarios"]}
              img={Cartel}
              link="https://twitter.com/BohemioLobo/status/1352351594482905088"
            />
          </article>

          <Separador titulo="¿Cómo los hice?" invertir={true} />

          <SeccionFinal
            titulo1="Fundamentos"
            p1="Elegí Inkscape como software inicial, y complementé con GIMP para la edición de imagen."
            p2="Por esto, me propuse realizar proyectos diarios durante un mes para aprender las herramientas."
            p3="Finalmente, integré todo esto con el desarrollo Front-End, dando como resultado de mis proyectos."
            titulo2="Tecnologías"
            args={["Inkscape (Ilustrator)", "GIMP (Photoshop)", "DaVinci Resolve"]}
          />
        </section>
      </div>
    </Layout>
  );
}
