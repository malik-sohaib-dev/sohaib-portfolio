import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// useContext
import { useContext } from 'react';
import { deviceContext } from '../contexts/deviceContext';


// Services data
const services = [
  {
    name: 'Web Development',
    description: 'With my robust expertise in HTML, CSS, JS, TS, MERN, Next.js, PostgreSql, Firebase, Tailwind, Active Campaign, and beyond, I have the power to propel your business into the thriving online realm.',
    link: 'https://github.com/SohaibA786',
  },
  {
    name: 'UX/UI Design',
    description: 'In a world where first impressions matter, I conduct thorough research and analysis, guiding designs from low-fidelity wireframes to high-fidelity prototypes using Figma.',
    link: 'https://dribbble.com/Sohaib_Ahmad_7',
  },
  {
    name: 'IOT Solutions',
    description: 'Leveraging my engineering expertise in microcontrollers, sensors, actuators and Firebase RTDB, I offer seamless solutions to remotely monitor and manage your systems with ease.',
    link: 'https://www.linkedin.com/in/engr-sohaib/',
  },
];

const Services = () => {
  const initial = useContext(deviceContext);
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial={initial}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten lg:bg-contain mb-12 lg:mb-0 '>
            <h2 className='h2 text-accent mb-6'>What Can I Do?</h2>
            <h3 className='h3 max-w-[485px] mb-10'>
              In the tapestry of problem-solving, I thread versatility as a golden strand, weaving solutions that stand the test of time.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial={initial}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructing service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 min-h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[470px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='mb-[38px] font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href={link} target='_blank' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight /></a>
                      {/* <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a> */}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
