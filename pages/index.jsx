import Layout from "../Components/Layout";

//Componentes
import Proyecto from "../Components/Proyecto";
import Separador from "../Components/Separador";
import Hero from "../Components/Hero";

//IMGs
import TF from "../public/img/index/TF.png";
import Email from "../public/img/index/Email.png";
import Weather from "../public/img/index/Weather.png";
import SeccionFinal from "../Components/SeccionFinal";

export default function Home() {
  return (
    <>
      <Layout
        title="Josué L. | Inicio"
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
              descripcion="Sitio web informativo de la carrera de Terapia Física con animaciones en los SVG's"
              imgSrc={TF}
              tags={["React.js", "Sass", "SEO", "SVG"]}
            />

            <Proyecto
              titulo="Weather API"
              descripcion="Sitio web para consultar el clima con el nombre de la ciudad. Desarrollado con los cuidados pertinentes a claves de API"
              imgSrc={Weather}
              tags={["React.js", "Tailwind", "Hook-Form", "API"]}
            />

            <Proyecto
              titulo="Responsive Email"
              descripcion="Maquetado de email responsive compatible entre distintos proveedores de emails"
              imgSrc={Email}
              tags={["MJML", "SVG", "Responsive", "Compatible"]}
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
