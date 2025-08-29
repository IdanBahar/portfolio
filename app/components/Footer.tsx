const Footer = () => {
  return (
    <section className=' text-white py-8'>
      <div className='container mx-auto text-center'>
        <div className='flex flex-row justify-center gap-4 mt-4'>
          {[
            { platform: 'email', url: 'mailto:bahar.idan91@gmail.com' },
            {
              platform: 'linkedin',
              url: 'https://www.linkedin.com/in/idanbahar/',
            },
            {
              platform: 'instagram',
              url: 'https://www.instagram.com/bahar.idan/',
            },
            { platform: 'github', url: 'https://github.com/IdanBahar' },
            { platform: 'twitter', url: 'https://x.com/idanbahar91' },
          ].map(({ platform, url }) => (
            <a key={platform} href={url} className='w-8 h-8 inline-block'>
              <img
                className='w-8 h-8'
                src={`/images/social/${platform}.svg`}
                alt={platform}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer
