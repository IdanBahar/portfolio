import type { Route } from './+types/index'
import type { Project } from '~/types'
import { useState } from 'react'
import ProjectCard from '~/components/ProjectCard'
import Pagination from '~/components/Pagination'
import { AnimatePresence, motion } from 'framer-motion'
export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`)
  const data = await res.json()
  return { projects: data }
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  // console.log(projects)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  const projectsPerPage = 10
  const { projects } = loaderData as { projects: Project[] }

  // Get unique categories
  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category)),
  ]

  //Filter project based on the category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  // Calc total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  // Get current pages
  const indexOfLast = currentPage * projectsPerPage
  const indexOfFirst = indexOfLast - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast)

  // Pagination button

  return (
    <>
      <h2 className='text-3xl text-white font-bold mb-8'>🚀 My Projects</h2>
      <div className='flex flex-wrap gap-2 mb-8 justify-center '>
        {categories.map((category) => (
          <button
            className={`px-3 py-1 rounded text-sm cursor-pointer transition  ${category === selectedCategory ? 'bg-green-500 text-white' : ' text-gray-200 hover:bg-green-600'}`}
            key={category}
            onClick={() => {
              setSelectedCategory(category)
              setCurrentPage(1)
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <AnimatePresence mode='wait'>
        <motion.div layout className='grid gap-6 sm:grid-cols-2'>
          {currentProjects.map((project) => (
            <motion.div key={project.id} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  )
}

export default ProjectsPage
