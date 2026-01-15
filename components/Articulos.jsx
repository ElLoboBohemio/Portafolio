import Link from "next/link";

export default function Articulos({ posts }) {
  return (
    <>
      {posts.map((post, index) => (
        <article key={index}>
          <Link href={`/blog/${post.slug}`}>

            <h3>{post.titulo}</h3>

          </Link>
          <br />
          <p>{post.descripcion}</p>
          <br />
          {post.tags.map((tag, index) => (
            <Link key={index} href={`/blog/tags/${tag}`}>

              <i>{`${tag} | `}</i>

            </Link>
          ))}
          <br />
          <br />
        </article>
      ))}
    </>
  );
}
