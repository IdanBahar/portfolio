import type { Project } from '~/types'
import ProjectCard from './ProjectCard'
type FeatureProjectProps = {
  projects: Project[]
  count: number
}

const FeaturedProjects = ({ projects, count = 2 }: FeatureProjectProps) => {
  const featured = projects.filter((p) => !p.featured)

  return (
    <section id='target-section' className='flex flex-col  mt-10 mb-10'>
      <h2 className='text-2xl font-bold mb-6 mt-20 text-gray-200 mx-auto sm:mx-0 flex items-center gap-2'>
        ⭐️ Featured Projects
      </h2>
      <div className='grid gap-6 sm:grid-cols-2'>
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
