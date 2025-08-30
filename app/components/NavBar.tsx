import { useState } from 'react'
import { NavLink } from 'react-router'
import { FaTimes, FaBars } from 'react-icons/fa'
import Arrow from './Arrow'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const base = 'transition text-white hover:bg-gray-700 px-2 py-1 rounded-xl'
  const active =
    'text-green-400 font-semibold border px-2 py-1 rounded-xl border-white transition'

  return (
    <nav
      style={{ backgroundColor: '#57564F' }}
      className=' border-b border-gray-700 shadow-md sticky top-0 z-50'
    >
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <NavLink to='/' className='flex items-center gap-2 text-lg font-bold '>
          <img
            className='w-15 h-15 rounded-full object-cover border-green-400 border-2'
            src='https://res.cloudinary.com/dmhwyrnly/image/upload/v1756553272/medium_IMG_1759_d633d10ad7.jpg'
            alt=''
          />
          <span className='text-white'>Idan Bahar Dev</span>
        </NavLink>
        {/* Desktop NavBar */}
        <div className='hidden md:flex items-center gap-6 self-end border-gray-700'>
          <div className='space-x-4 text-sm '>
            <div className='inline-flex justify-center items-end gap-5'>
              <Arrow
                textSize='md'
                arrow='→'
                direction={'right'}
                repeat={Infinity}
              />
              <a
                href='/IDAN_BAHAR_FINAL.docx'
                download
                className='flex flex-row text-green-400  '
              >
                My Resume
              </a>
            </div>

            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to='/projects'
            >
              Projects
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to='/about'
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to='/contact'
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className='md:hidden flex items-center gap-4'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-green-400 text-xl cursor-pointer'
            title='Menu'
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <div
          style={{
            background: 'linear-gradient(180deg, #2e2e2e 0%, #3a3a3a 100%)',
          }}
          className='md:hidden  border-t border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center'
        >
          <div className='inline-flex  items-end gap-5'>
            <Arrow
              textSize='md'
              arrow='→'
              direction={'right'}
              repeat={Infinity}
            />
            <a
              href='/IDAN_BAHAR_FINAL.docx'
              download
              className='flex flex-row  '
            >
              My Resume
            </a>
          </div>
          <NavLink
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
            to='/projects'
          >
            Projects
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
            to='/contact'
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default NavBar
