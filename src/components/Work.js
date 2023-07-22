import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import img1 from '../assets/AI Doggo.png';
import img2 from '../assets/Ecommerce React.png';
import img3 from '../assets/Visme JS.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest<br />
                Work.
              </h2>
              <p className='max-w-lg mb-8'>
                From the depths of coding to the heights of design, my portfolio showcases a versatile range of skills in React, Tailwind, JavaScript, HTML, CSS, APIs, Webforms, Routing, Figma designing, brand identity creation, and beyond.
              </p>
              <a target='_blank' href='https://linkedin.com/in/engr-sohaib'><button className='btn btn-sm '>View All Projects</button></a>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={img1}
                alt='Porfolio 1'
              />
              {/* pretitle */}
              <div
                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'
              >
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div
                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'
              >
                <span className='text-lg lg:text-3xl text-white '>AI Dog Image Generator Concept Design</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            {/* Project 2 */}
            <a href='https://clothing-store-sohaib.vercel.app/' target='_blank'>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500' src={img2} alt='Porfolio 1' />
              {/* pretitle */}
              <div
                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'
              >
                <span className='text-gradient'>Web Development</span>
              </div>
              {/* title */}
              <div
                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'
              >
                <span className='text-lg lg:text-3xl text-white '>Clothing Store using React</span>
              </div>
            </div>
            </a>
            {/* Project 3 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500' src={img3} alt='Porfolio 1' />
              {/* pretitle */}
              <div
                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'
              >
                <span className='text-gradient'>Web Development</span>
              </div>
              {/* title */}
              <div
                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'
              >
                <span className='text-lg lg:text-3xl text-white '>Visme clone with pure HTML, CSS & JS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Work;
