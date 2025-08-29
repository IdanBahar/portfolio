import { useState } from 'react'
import type { Route } from './+types/index'
import type { PostMeta } from '~/types'
import PostCard from '~/components/PostCard'
import Pagination from '~/components/Pagination'
export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL('/posts-meta.json', request.url)
  const res = await fetch(url.href)

  if (!res.ok) throw new Error('Failed to fetch blog posts')

  const data = await res.json()
  data.sort((a: PostMeta, b: PostMeta) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
  return { posts: data }
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Idan Bahar Dev | Blog' },
    { name: 'description', content: 'Welcome to Idan Bahar Dev!' },
  ]
}
const BlogsPage = ({ loaderData }: Route.ComponentProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const postPerPage = 3
  const { posts } = loaderData

  const totalPages = Math.ceil(posts.length / postPerPage)
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className='max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900'>
      <h2 className='text-3xl text-white font-bold mb-8'>📝 My Blogs</h2>
      {currentPosts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  )
}

export default BlogsPage
