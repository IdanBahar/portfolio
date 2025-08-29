import { Outlet } from 'react-router'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Idan Bahar Dev' },
    { name: 'description', content: 'Welcome to Idan Bahar Dev!' },
  ]
}
const MainLayout = () => {
  return (
    <>
      <section className='max-w-6xl mx-auto px-6 my-8'>
        <Outlet />
      </section>
    </>
  )
}

export default MainLayout
