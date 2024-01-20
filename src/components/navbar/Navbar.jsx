import { motion } from 'framer-motion'

import './navbar.scss'
import Sidebar from '@/components/sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar></Sidebar>
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Jackson Mseven
        </motion.span>
        <div className='social'>
          <a href='#'>
            <img src='public/facebook.png' />
          </a>
          <a href='#'>
            <img src='public/instagram.png' />
          </a>
          <a href='#'>
            <img src='public/youtube.png' />
          </a>
          <a href='#'>
            <img src='public/dribbble.png' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
