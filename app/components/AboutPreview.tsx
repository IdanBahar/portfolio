import { Link } from 'react-router'

import Skills from './Skills'

const AboutPreview = () => {
  return (
    <section className='mt-12 mb-20 lg:p-10 flex flex-col items-center gap-6 md:flex-row'>
      <img
        src='https://res.cloudinary.com/dmhwyrnly/image/upload/v1756553272/medium_IMG_1759_d633d10ad7.jpg'
        alt='profile'
        className='w-32 h-32 rounded-full object-cover border-4 border-green-400 shadow-mg self-center md:self-baseline'
      />
      <div className='flex flex-col'>
        <h2 className='text-2xl font-bold text-white mb-2 mx-auto sm:mx-0'>
          👋🏻 About me
        </h2>
        <p className='text-gray-200 mb-4 max-w-4xl'>
          I'm a passionate Frontend Developer with a strong background in
          banking technology. I specialize in building modern web applications
          using React and Node.js, and I love creating user-friendly
          experiences.
        </p>
        <Skills />
        <div className='flex lg:justify-start md:justify-start sm:justify-center'>
          <Link
            to='/about'
            className='inline-block text-green-400 hover:underline text-sm mt-5'
          >
            Learn more about me &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
