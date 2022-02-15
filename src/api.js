import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { Interface } from 'readline';

//Ruta de carpeta "posts"
const POSTS_PATH = path.join(process.cwd(), "posts");

export const getSlugs = () => {
  const paths = sync(`${POSTS_PATH}/*.mdx`)

  return paths.map((path) => {
    const parts = path.split('/'); //Separa la ruta por cada "/"
    const fileName = parts[parts.length - 1]; //De las particiones, selecciona la última (-1)
    const [slug, _ext] = fileName.split("."); //Separa el nombre final del .mdx
    return slug;
  })
}

export const getAllPosts = () => {
  const posts = getSlugs().map(slug => getPostFromSlug(slug)).sort((a,b) => {
    //Acomodo por fecha mayor o menor
    if(a.meta.date > b.meta.date) return 1;
    if(a.meta.date < b.meta.date) return -1;
    return 0;
  }).reverse();

  return posts
}

//Consigue lo escrito en .mdx (contenido y metadatos)
export const getPostFromSlug = (slug) => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath)
  const {data, content } = matter(source);
  
  //Retorno de info y posibles datos vacios || acomodos de info
  return {
    content,
    meta: {
      slug,
      descripcion: data.descripcion ?? "",
      titulo: data.titulo ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
    }
  }

}