import { Link } from 'react-router'
import { motion } from 'framer-motion'

type HeroProps = {
  name?: string
  text?: string
}

const Hero: React.FC<HeroProps> = ({
  name = 'Idan',
  text = "I'm a passionate web developer with a focus on building modern web applications.",
}) => {
  return (
    <header className='text-center py-20 px-4  text-white transition-colors duration-300'>
      <h2 className='text-4xl font-bold mb-4'>
        Hi there<span className='text-green-400'>,</span> I'm{' '}
        <span className='text-green-400'>{name}</span>{' '}
        <motion.span
          style={{ display: 'inline-block' }}
          animate={{ rotate: [0, 20, -10, 20, 0] }}
          transition={{ duration: 0.9, repeat: 3, ease: 'easeInOut' }}
          aria-label='waving hand'
          role='img'
        >
          👋🏻
        </motion.span>
      </h2>
      <p className='text-lg text-gray-400 max-w-2xl mx-auto mb-6'>
        {text}
        applications.
      </p>
      <div className='flex justify-center gap-4'>
        <Link
          to='/projects'
          className='bg-green-500 text-white font-semibold py-2 px-6 rounded transition-colors duration-300 border border-transparent hover:border-white'
        >
          View Projects
        </Link>
        <Link
          to='/contact'
          className='border border-white text-white  py-2 px-6 rounded transition-colors duration-300 hover:bg-green-500'
        >
          Contact Me
        </Link>
      </div>
    </header>
  )
}

export default Hero
