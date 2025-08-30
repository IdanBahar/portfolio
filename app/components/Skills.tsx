const Skills = () => {
  const skillsData = [
    {
      name: 'JavaScript',
      image:
        'https://res.cloudinary.com/dmhwyrnly/image/upload/v1756558780/javascript_zrgriz.svg',
    },
    {
      name: 'TypeScript',
      image:
        'https://res.cloudinary.com/dmhwyrnly/image/upload/v1756558781/typescript_hynnq7.svg',
    },
    {
      name: 'React',
      image:
        'https://res.cloudinary.com/dmhwyrnly/image/upload/v1756558779/react_edrlcg.svg',
    },
    {
      name: 'Node.js',
      image:
        'https://res.cloudinary.com/dmhwyrnly/image/upload/v1756558780/node.js_xqodew.svg',
    },
    {
      name: 'Express.js',
      image:
        'https://res.cloudinary.com/dmhwyrnly/image/upload/v1756558779/express.js_u8grsa.svg',
    },
    {
      name: 'MongoDB',
      image:
        'https://res.cloudinary.com/dmhwyrnly/image/upload/v1756558779/mongodb_orcgld.svg',
    },
    {
      name: 'HTML5',
      image:
        'https://res.cloudinary.com/dmhwyrnly/image/upload/v1756558779/html5_eqcotx.svg',
    },
    {
      name: 'CSS',
      image:
        'https://res.cloudinary.com/dmhwyrnly/image/upload/v1756558779/css_zlcpt7.svg',
    },
    {
      name: 'Tailwind CSS',
      image:
        'https://res.cloudinary.com/dmhwyrnly/image/upload/v1756558779/tailwind_css_meh4iq.svg',
    },
  ]

  return (
    <ul className='flex flex-wrap gap-4 text-sm text-gray-300 justify-center '>
      {skillsData.map((skill) => (
        <li
          key={skill.name}
          className='flex justify-center items-center gap-1 bg-gray-600 rounded-full px-3 py-1'
        >
          <img
            src={skill.image}
            alt={skill.name}
            className='w-5 h-5 inline-block mr-1'
          />
          {skill.name}
        </li>
      ))}
    </ul>
  )
}

export default Skills
