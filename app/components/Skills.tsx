const Skills = () => {
  return (
    <ul className='flex flex-wrap gap-4 text-sm text-gray-300 justify-center '>
      {[
        'JavaScript',
        'React',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'CSS',
        'Tailwind CSS',
        'HTML5',
      ].map((skill) => (
        <li
          key={skill}
          className='flex justify-center items-center gap-1 bg-gray-600 rounded-full px-3 py-1'
        >
          <img
            src={`./images/skills/${skill.toLocaleLowerCase()}.svg`}
            alt={skill}
            className='w-5 h-5 inline-block mr-1'
          />
          {skill}
        </li>
      ))}
    </ul>
  )
}

export default Skills
