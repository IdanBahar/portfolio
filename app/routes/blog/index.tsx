import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Idan Bahar Dev | Blog' },
    { name: 'description', content: 'Welcome to Idan Bahar Dev!' },
  ]
}
const BlogsPage = () => {
  return (
    <>
      <h2 className='text-3xl text-white font-bold mb-8'>📝 My Blogs</h2>
    </>
  )
}

export default BlogsPage
