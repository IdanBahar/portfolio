import AboutPreview from '~/components/AboutPreview'
import type { Route } from './+types/home'
import FeaturedProjects from '~/components/FeaturedProjects'
import type { Project } from '~/types'
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Idan Bahar Dev | Welcome' },
    { name: 'description', content: 'Welcome to Idan Bahar Dev!' },
  ]
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`)
  const data = await res.json()
  return { projects: data }
}
const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData
  console.log(projects)

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
    </>
  )
}

export default HomePage
