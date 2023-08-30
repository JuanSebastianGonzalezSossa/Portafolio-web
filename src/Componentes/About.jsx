import React from 'react'
import { motion } from "framer-motion";
import '../Styles/About.css';

export const About = () => {
  return (
    <section className='about'>
      <div className='about-bx'>
        <motion.div
          className="about-title"
        >
          About me
        </motion.div>
      </div>
    </section>
  )
}
