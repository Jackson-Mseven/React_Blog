import { useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useScroll, useSpring } from 'framer-motion'
import './portfolio.scss'
import { useTransform } from 'framer-motion'

const items = [
  {
    id: 1,
    title: 'React1',
    img: 'https://images.pexels.com/photos/19840455/pexels-photo-19840455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    desc: '123123'
  },
  {
    id: 2,
    title: 'React2',
    img: 'https://images.pexels.com/photos/19840455/pexels-photo-19840455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    desc: '123123'
  },
  {
    id: 3,
    title: 'React3',
    img: 'https://images.pexels.com/photos/19840455/pexels-photo-19840455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    desc: '123123'
  },
  {
    id: 4,
    title: 'React4',
    img: 'https://images.pexels.com/photos/19840455/pexels-photo-19840455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    desc: '123123'
  },
  {
    id: 5,
    title: 'React5',
    img: 'https://images.pexels.com/photos/19840455/pexels-photo-19840455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    desc: '123123'
  }
]

const Single = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref
    // offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imgContainer' ref={ref}>
            <img src={item.img} />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div className='progressBar' style={{ scaleX }}></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id}></Single>
      ))}
    </div>
  )
}

export default Portfolio

Single.propTypes = {
  item: PropTypes.object.isRequired
}
