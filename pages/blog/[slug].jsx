import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getPostFromSlug, getSlugs } from "../../src/api";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/atom-one-dark.css";

//Components
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Separador from "../../components/Separador";

export default function Post({ post }) {
  return (
    <Layout title={`${post.meta.titulo}`} description={post.meta.descripcion}>
      <div className="container">
        <Hero h1={post.meta.titulo} blog={true} />
        <Separador titulo={null} invertir={false} />
        <MDXRemote {...post.source} />
        <Separador titulo={null} invertir={true} />
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }], rehypeHighlight],
    },
  });

  return {
    props: { post: { source: mdxSource, meta } },
  };
};

export const getStaticPaths = () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
