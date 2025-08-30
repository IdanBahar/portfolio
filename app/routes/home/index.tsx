import AboutPreview from '~/components/AboutPreview'
import type { Route } from './+types/index'
import FeaturedProjects from '~/components/FeaturedProjects'
import type { Project, StrapiProject, StrapiResponse } from '~/types'
import Arrow from '~/components/Arrow'
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Idan Bahar Dev | Welcome' },
    { name: 'description', content: 'Welcome to Idan Bahar Dev!' },
  ]
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?filter[featured][$eq]=true&populate=*`
  )

  const projectsJson: StrapiResponse<StrapiProject> = await res.json()

  const projects = projectsJson.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  }))

  return { projects }
}
const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData
  // console.log(projects)

  return (
    <>
      <AboutPreview />
      <Arrow />
      <FeaturedProjects projects={projects} count={2} />
    </>
  )
}

export default HomePage
