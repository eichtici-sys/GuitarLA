import { getPosts } from "~/models/posts.server"
import { useLoaderData } from "@remix-run/react"
import ListadoPosts from "~/components/listado-posts"


export function meta(){
  return {
    title: 'GuitarLA - Nuestro Blog',
    description: 'GuitarLA, Blog de Musica y Venta de Guitarras'
  }
}

export async function loader(){
  const posts = await getPosts()  
  return posts.data
}

function Blog() {

  const posts = useLoaderData()
  
  return (
    <main className="contenedor">
      <ListadoPosts
      posts={posts}
      />
    </main>
  )
}

export default Blog