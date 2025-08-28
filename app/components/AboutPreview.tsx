import { Link } from 'react-router'
import Skills from './Skills'

const AboutPreview = () => {
  return (
    <section className='mt-12 p-10 flex flex-col items-center gap-8 bg-gray-900 md:flex-row'>
      <img
        src='/images/IMG_1759.JPG'
        alt='profile'
        className='w-32 h-32 rounded-full object-cover border-4 border-blue-400 shadow-mg'
      />
      <div>
        <h2 className='text-2xl font-bold text-white mb-2'>👋🏻 About me</h2>
        <p className='text-gray-200 mb-4 max-w-4xl'>
          I'm a passionate Frontend Developer with a strong background in
          banking technology. I specialize in building modern web applications
          using React and Node.js, and I love creating user-friendly
          experiences.
        </p>
        <Skills />
        <div className='flex lg:justify-start md:justify-center sm:justify-center'>
          <Link
            to='/about'
            className='inline-block text-blue-400 hover:underline text-sm mt-5
             '
          >
            Learn more about me &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
