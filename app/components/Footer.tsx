const Footer = () => {
  return (
    <section className=' text-white py-20  '>
      <div className='container mx-auto text-center'>
        <div className='flex flex-row justify-center gap-4 mt-4'>
          {[
            {
              platform: 'email',
              url: 'mailto:bahar.idan91@gmail.com',
              imageURL:
                'https://res.cloudinary.com/dmhwyrnly/image/upload/v1756558793/email_edthvu.svg',
            },
            {
              platform: 'linkedin',
              url: 'https://www.linkedin.com/in/idanbahar/',
              imageURL:
                'https://res.cloudinary.com/dmhwyrnly/image/upload/v1756558794/linkedin_j9imcw.svg',
            },
            {
              platform: 'instagram',
              url: 'https://www.instagram.com/bahar.idan/',
              imageURL:
                'https://res.cloudinary.com/dmhwyrnly/image/upload/v1756558794/instagram_bbh79s.svg',
            },
            {
              platform: 'github',
              url: 'https://github.com/IdanBahar',
              imageURL:
                'https://res.cloudinary.com/dmhwyrnly/image/upload/v1756558793/github_so7iol.svg',
            },
            {
              platform: 'twitter',
              url: 'https://x.com/idanbahar91',
              imageURL:
                'https://res.cloudinary.com/dmhwyrnly/image/upload/v1756558794/twitter_t4fovl.svg',
            },
          ].map(({ platform, url, imageURL }) => (
            <a
              key={platform}
              href={url}
              className='w-8 h-8 inline-block hover:opacity-80 '
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='w-8 h-8' src={imageURL} alt={platform} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer
