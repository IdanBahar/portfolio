import { motion } from 'framer-motion'

const Arrow = ({
  textSize = 'xl',
  arrow = '↓',
  direction = 'down',
  duration = 1,
  repeat = 4,
}) => {
  let animate
  switch (direction) {
    case 'down':
      animate = { x: [0, 0, 0], y: [0, 9, 0] }
      break
    case 'up':
      animate = { x: [0, 0, 0], y: [0, -9, 0] }
      break
    case 'left':
      animate = { x: [0, -9, 0], y: [0, 0, 0] }
      break
    case 'right':
      animate = { x: [0, 9, 0], y: [0, 0, 0] }
      break
    default:
      animate = { x: [0, 0, 0], y: [0, 9, 0] }
  }
  return (
    <div className='flex justify-center'>
      <button
        type='button'
        style={{
          background: 'transparent',
          border: 'none',
          padding: 0,
        }}
        className='cursor-pointer'
        onClick={() => {
          const el = document.getElementById('target-section')
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }}
      >
        <motion.span
          className={`inline-block text-green-400 text-${textSize} mx-auto `}
          animate={animate}
          transition={{
            duration: duration,
            repeat: repeat,
            ease: 'easeInOut',
          }}
          aria-hidden='true'
        >
          {arrow}
        </motion.span>
      </button>
    </div>
  )
}

export default Arrow
