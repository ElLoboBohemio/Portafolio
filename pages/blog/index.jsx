import { getAllPosts } from "../../src/api";
import Articulos from "../../components/Articulos";

import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Separador from "../../components/Separador";
import SeccionFinal from "../../components/SeccionFinal";

export default function Blog({ posts }) {
  return (
    <Layout
      title="Blog | Josué L."
      description="Blogs personales relacionados al desarrollo Front-End"
    >
      <div className="container">
        <Hero
          h1="Blog"
          p="Narro consejos personales relacionados con el desarrollo"
          bold="Front-End."
        />

        <Separador titulo="Posts" invertir={false} />

        <Articulos posts={posts} />

        <Separador titulo="¿Por qué blogs?" invertir={true} />

        <SeccionFinal
          titulo1="Marca Personal"
          p1="Desde que empecé a aprender por mi cuenta, busqué realizar una marca personal en desde mi Twitter."
          p2="Escribo consejos a problemas que he resuelto mediante búsquedas online."
          p3="Y buscó aportar soluciones a quienes tengan problemas similares."
          titulo2="Temas"
          args={["Desarrollo Front-End", "Diseño Gráfico"]}
        />
      </div>
    </Layout>
  );
}

//Encuentra los datos
export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9) //Ver los primeros 9 posts
    .map((post) => post.meta); //Meta = Metadatos .mdx

  return {
    props: { posts }, //La mandarlo a props lo envia al componente "Blog"
  };
}
