import { GetStaticProps, GetStaticPaths } from "next";
import { getAllPosts } from "../../../src/api";

//SCSS
import Articles from "../../../components/Articulos";
import Layout from "../../../components/Layout";
import Separador from "../../../components/Separador";
import Hero from "../../../components/Hero";

export default function TagPage({ slug, posts }) {
  return (
    <Layout title={`${slug} | Josué L.`}>
      <div className="container">
        <Hero h1={`Tag: ${slug}`} blog={true} />
        <Separador titulo="Posts" invertir={false} />
        <Articles posts={posts} />
        <Separador titulo={null} invertir={true} />
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));

  return {
    props: {
      slug,
      posts: posts.map((post) => post.meta),
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
