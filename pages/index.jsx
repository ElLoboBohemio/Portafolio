import Layout from "../components/Layout";

//Componentes
import Proyecto from "../components/Proyecto";
import Separador from "../components/Separador";
import Hero from "../components/Hero";

//IMGs
import TF from "../public/img/index/TF.webp";
import Quote from "../public/img/index/Quote.webp";
import Weather from "../public/img/index/Weather.webp";
import SeccionFinal from "../components/SeccionFinal";

export default function Home() {
  return (
    <>
      <Layout
        title="Inicio | Josué L."
        description="Portafolio de desarrollador Front-End autodidacta"
      >
        <div className="container">
          <section>
            <Hero
              h1="¡Hola soy Josué Lobo!"
              p="Desarrollador Front-End que construye sitios web que inspiren a"
              bold='"Investigar y Crear".'
            />

            <Separador titulo="Proyectos" invertir={false} />

            <Proyecto
              titulo="Terapia Física"
              descripcion="Sitio web informativo de la carrera de Terapia Física con animaciones en los SVGs"
              img={TF}
              tags={["React.js", "Sass", "SEO", "SVG"]}
              demo="https://ellobobohemio.github.io/Terapia-Fisica/"
              repo="https://github.com/ElLoboBohemio/Terapia-Fisica"
            />

            <Proyecto
              titulo="Weather API"
              descripcion="Sitio web para consultar el clima con el nombre de la ciudad."
              img={Weather}
              tags={["React.js", "Tailwind", "Hook-Form", "API"]}
              demo="https://elated-mayer-1a63d5.netlify.app/"
              repo="https://github.com/ElLoboBohemio/Weather-API"
            />

            <Proyecto
              titulo="Music API"
              descripcion="Sitio web para consultar música con un buscador."
              img={Quote}
              tags={["React.js", "API", "Redux Toolkit", "MUI"]}
              demo="https://lucky-truffle-330b24.netlify.app/"
              repo="https://github.com/ElLoboBohemio/api-music"
            />

            <Separador titulo="Acerca" invertir={true} />

            <SeccionFinal
              titulo1='¿Por qué "Investiga y Crea"?'
              p1="Desde el 2021 comencé a estudiar Diseño Gráfico y el Desarrollo Web por mi propia cuenta."
              p2="En adelante, he estado indagando en los principios y realizando proyectos personales para concretar lo aprendido."
              p3='"Investiga y Crea" terminó siendo la manera en definir mi manera de continuar aprendiendo.'
              titulo2="Tecnologias"
              args={["Javascript", "React.js", "Next.js", "Sass", "Tailwind CSS"]}
            />
          </section>
        </div>
      </Layout>
    </>
  );
}
