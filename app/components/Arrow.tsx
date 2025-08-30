import { motion } from 'framer-motion'
const Arrow = () => {
  return (
    <div className='flex justify-center'>
      <button
        type='button'
        style={{ background: 'transparent', border: 'none', padding: 0 }}
        className='cursor-pointer'
        onClick={() => {
          const el = document.getElementById('target-section')
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }}
      >
        <motion.span
          className='inline-block text-green-400 text-5xl mx-auto mt-20'
          animate={{ x: [0, 0, 0], y: [0, 9, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden='true'
        >
          ↓
        </motion.span>
      </button>
    </div>
  )
}

export default Arrow
