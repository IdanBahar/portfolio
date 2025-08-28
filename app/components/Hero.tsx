import { Link } from 'react-router'

type HeroProps = {
  name?: string
  text?: string
}

const Hero: React.FC<HeroProps> = ({
  name = 'Idan Bahar',
  text = "I'm a passionate web developer with a focus on building modern web applications.",
}) => {
  return (
    <header className='text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300'>
      <h2 className='text-4xl font-bold mb-4'>Hi, I'm {name} 👋🏻</h2>
      <p className='text-lg text-gray-400 max-w-2xl mx-auto mb-6'>
        {text}
        applications.
      </p>
      <div className='flex justify-center gap-4'>
        <Link
          to='/projects'
          className='bg-blue-500 hover:bg-blue-500 text-white  py-2 px-6 rounded transition-colors duration-300'
        >
          View Projects
        </Link>
        <Link
          to='/contact'
          className='border border-blue-500 text-blue-400  py-2 px-6 rounded transition-colors duration-300 hover:text-white hover:bg-blue-500'
        >
          Contact Me
        </Link>
      </div>
    </header>
  )
}

export default Hero
