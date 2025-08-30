import Skills from '~/components/Skills'

const AboutPage = () => {
  return (
    <div className='max-w-5xl mx-auto px-6 py-16 '>
      {/* INTRO */}

      <div className='flex flex-col md:flex-row items-center md:items-start gap-10 mb-12'>
        <img
          src='https://res.cloudinary.com/dmhwyrnly/image/upload/v1756553272/medium_IMG_1759_d633d10ad7.jpg'
          alt='profile'
          className='w-40 h-40 rounded-full object-cover border-4 border-green-400 shadow-mg'
        />
        <div>
          <h1 className='text-3xl font-bold text-white mb-2'>
            Hi, I'm Idan Bahar 👋🏻
          </h1>
          <p className='text-gray-300 text-lg'>
            Passionate Frontend Developer skilled in React and Node.js, with a
            creative mindset, fast learning ability, and a strong focus on
            building modern, user-friendly experiences.
          </p>
        </div>
      </div>
      {/*BIO */}
      <div className='mb-12'>
        <h2 className='text-2xl font-semibold text-white mb-4'>My Mission</h2>
        <p className='text-gray-300 leading-relaxed'>
          To craft impactful, scalable, and user-centric web{' '}
          <span className='text-green-400'>applications</span> that bridge
          modern technology with real-world solutions. I aim to continuously
          evolve, learn, and innovate, bringing clean code, creative
          problem-solving, and a growth-driven mindset to every project I build.
        </p>
      </div>
      {/* Tech Stack */}
      <div className='mb-12 flex flex-col items-center'>
        <h2 className='text-2xl font-semibold text-white mb-8'>🚀 My Skills</h2>
        <Skills />
      </div>
    </div>
  )
}

export default AboutPage
