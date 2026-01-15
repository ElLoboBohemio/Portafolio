import Layout from "../components/Layout";

//Componentes
import Proyecto from "../components/Proyecto";
import Separador from "../components/Separador";
import Hero from "../components/Hero";

//IMGs
import TF from "../public/img/index/TF.webp";
import Music from "../public/img/index/Music.webp";
import Weather from "../public/img/index/Weather.webp";
import SeccionFinal from "../components/SeccionFinal";

export default function Home() {
  return (
    <>
      <Layout
        title="Josué Lobo | Content Editor & Especialista en Comunicación Científica"
        description="Profesional multidisciplinario enfocado en la integridad de datos y divulgación clínica basada en evidencia. Estrategia de contenido digital con rigor analítico bajo la premisa de 'Investigar y crear'."
      >
        <div className="container">
          <section>
            <Hero
              h1="¡Hola, soy Josué Lobo!"
              p="Profesional analítico en formación continua, orientada a 'Investigar y crear', creando puentes entre la ciencia y el entorno digital. Especializado en la investigación clínica y crear narrativas de alto impacto,"
              bold="priorizando la fidelidad de los datos."
            />

            <Separador titulo="Proyectos" invertir={false} />

            <Proyecto
              titulo="Comunicación Basada en Evidencia: Terapia Física"
              descripcion="Página web de divulgación científica desarrollada bajo estándares de rigor académico. El proyecto se centra en la síntesis de literatura clínica y la validación de fuentes (Fact-checking), integrando una arquitectura de referencias bibliográficas que asegura la veracidad y trazabilidad de la información técnica."
              img={TF}
              tags={[
                "Práctica Basada en Evidencia",
                "Fact-checking Clínico",
                "Rigor Editorial",
                "React.js",
              ]}
              demo="https://ellobobohemio.github.io/Terapia-Fisica/"
              repo="https://github.com/ElLoboBohemio/Terapia-Fisica"
            />

            <Proyecto
              titulo="API de consulta de datos atmosféricos"
              descripcion="Solución digital centrada en la arquitectura de la información y el consumo de datos en tiempo real. Prioriza la claridad de la interfaz y la entrega precisa de información meteorológica mediante la integración eficiente de APIs."
              img={Weather}
              tags={["Data Fetching", "API Integration", "Tailwind", "Responsive Design"]}
              demo="https://elated-mayer-1a63d5.netlify.app/"
              repo="https://github.com/ElLoboBohemio/Weather-API"
            />

            <Proyecto
              titulo="Explorador de Metadatos Multimedia"
              descripcion="Sistema de búsqueda y gestión de contenido centrado en la clasificación eficiente de información. Desarrollado para garantizar un flujo de navegación intuitivo y una recuperación de datos optimizada mediante estados complejos."
              img={Music}
              tags={["Information Architecture", "Redux Toolkit", "MUI", "React.js"]}
              demo="https://lucky-truffle-330b24.netlify.app/"
              repo="https://github.com/ElLoboBohemio/api-music"
            />

            <Separador titulo="Acerca" invertir={true} />

            <SeccionFinal
              titulo1='La Filosofía: "Investigar y Crear"'
              p1="Mi formación en Ciencias de la Salud en la UCR cimentó mi compromiso con el rigor científico. 'Investigar' representa para mí la búsqueda exhaustiva de evidencia y la verificación constante, pilares esenciales para garantizar la integridad de cualquier información."
              p2="A partir de este análisis, 'Crear' se convierte en el proceso de traducir datos técnicos y complejos en soluciones digitales accesibles, donde la precisión clínica y la funcionalidad tecnológica convergen con un propósito claro."
              p3="Esta metodología interdisciplinaria es el motor de mi evolución: un ciclo continuo de aprendizaje donde el pensamiento crítico y la ejecución técnica se unen para generar un impacto real en la comunicación científica."
              titulo2="Ecosistema de Especialidades"
              args={[
                "Fact-checking Clínico",
                "Estrategia de Contenido",
                "React.js / Next.js / HTML & CSS",
                "Arquitectura de Información",
                "SEO Técnico",
              ]}
            />
          </section>
        </div>
      </Layout>
    </>
  );
}
