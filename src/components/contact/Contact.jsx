import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import './contact.scss'

const variants = {
  initial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const Contact = () => {
  const ref = useRef()
  const formRef = useRef()
  const [error, setError] = useState(null)

  const isInView = useInView(ref, {
    margin: '-100px'
  })

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm('service_fo07234', 'template_uxdhkj3', formRef.current, 'WQgfox9UMhSxoYxnj')
      .then(
        () => {
          setError(false)
        },
        () => {
          setError(true)
        }
      )
  }

  return (
    <motion.div
      ref={ref}
      className='contact'
      variants={variants}
      initial='initial'
      whileInView='animate'
    >
      <motion.div className='textContainer' variants={variants}>
        <motion.h1 variants={variants}>{"Let's work together"}</motion.h1>
        <motion.div className='item' variants={variants}>
          <h2>Mail Me</h2>
          <span>bill714@foxmail.com</span>
        </motion.div>
      </motion.div>
      <div className='formContainer'>
        <motion.div
          className='phoneSvg'
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            width='30vw'
            height='30vw'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <motion.path
              d='M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10'
              stroke='orange'
              strokeWidth='1.5'
              strokeLinecap='round'
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.path
              d='M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829'
              stroke='orange'
              strokeWidth='1.5'
              strokeLinecap='round'
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.path
              d='M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111'
              stroke='orange'
              strokeWidth='1.5'
              strokeLinecap='round'
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          onSubmit={sendEmail}
        >
          <input type='text' required placeholder='Name' name='name' />
          <input type='email' required placeholder='Email' name='email' />
          <textarea rows={8} placeholder='Message' name='message'></textarea>
          <button>Submit</button>
          {error === null ? '' : error === 'false' ? 'Success' : 'Error'}
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact
