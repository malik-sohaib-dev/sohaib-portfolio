import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
// import img1 from '../assets/AI Doggo.webp';
// import img2 from '../assets/Ecommerce React.webp';
// import img3 from '../assets/Visme JS.webp';
import img1 from '../assets/projects/Cfored.webp';
import img2 from '../assets/projects/Promptswap.webp';
import img3 from '../assets/projects/Pricewatch.webp';
import img4 from '../assets/projects/Photopia.webp';
import img5 from '../assets/projects/Ecommerce React.webp';
import img6 from '../assets/projects/Visme JS.webp';
import img7 from '../assets/projects/MERN Todo.webp';
import img8 from '../assets/projects/AI Doggo.webp';
import img9 from '../assets/projects/BH Group.webp';





// useContext
import { useContext } from 'react';
import { deviceContext } from '../contexts/deviceContext';


const Work = () => {
  const Projects = [
    {
      category: 'Full Stack',
      title: 'American CED Federal Student Loan Scrutiny Campaign',
      img: img1,
      link: 'https://cfored.ac-page.com/',
    },
    {
      category: 'Next.js Full Stack',
      title: 'Promptswap, create and share AI prompts',
      img: img2,
      link: 'https://promptswap.vercel.app/',
    },
    {
      category: 'Next.js Full Stack',
      title: 'PriceWatch, amazon web scraper and price tracker cron job',
      img: img3,
      link: 'https://price-watch.vercel.app/',
    },
    {
      category: 'MERN Stack',
      title: 'Photopia, create and share Dall-e AI generated photos',
      img: img4,
      link: 'https://photopia-beta.vercel.app/',
    },
    {
      category: 'JamStack',
      title: 'E-commerce clothing store concept',
      img: img5,
      link: 'https://store-giga.vercel.app/',
    },
    {
      category: 'Frontend',
      title: 'Visme.co landing page clone without any library / framework',
      img: img6,
      link: 'https://visme-clone.vercel.app/',
    },
    {
      category: 'MERN Stack',
      title: 'Concept work checklist app',
      img: img7,
      link: 'https://mern-todo-sohaib.vercel.app/',
    },
    {
      category: 'UX/UI Design',
      title: 'AI Dog Image Generator Concept Design',
      img: img8,
      link: '#',
    },
  ]

  const initial = useContext(deviceContext);
  return (
    <section className=' ' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-col lg:gap-y-10'>
          <motion.div
            // variants={fadeIn('right', 0.3)}
            // initial={initial}
            // whileInView={'show'}
            // viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col lg:flex-row justify-between gap-y-12 mb-10 lg:mb-0'>
            {/* Work head */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest<br />
                Work.
              </h2>
              <p className='max-w-lg mb-8'>
                From the depths of coding to the heights of design, my portfolio showcases a versatile range of skills in React, MERN, Next.js, PostgreSql, Tailwind, JS, HTML, CSS, APIs, programmed graphics, Chart.js, Figma designing, brand identity creation, and beyond.
              </p>
              <a target='_blank' href='https://linkedin.com/in/engr-sohaib'><button className='btn btn-sm '>View All Projects</button></a>
            </div>
            {/* Project */}
            <a href='https://bhgroup.com.pk/' target='_blank'>
              <div className='max-w-[561px] group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img
                  loading='lazy'
                  className='group-hover:scale-125 transition-all duration-500'
                  src={img9}
                  alt='Porfolio 1'
                />
                {/* pretitle */}
                <div className='absolute -bottom-full left-6 lg:left-12 group-hover:lg:bottom-8 group-hover:bottom-5 transition-all duration-500 z-50'>
                  <div>
                    <span className='text-gradient'>Full Stack</span>
                  </div>
                  {/* title */}
                  <div>
                    <span className='text-lg lg:text-3xl text-white '>BH Group PV Simulator & Design Tool</span>
                  </div>
                </div>
              </div>
            </a>

          </motion.div>
          <motion.div
            // variants={fadeIn('left', 0.5)}
            // initial={initial}
            // whileInView={'show'}
            // viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-wrap justify-between flex-row gap-y-10 gap-x-10 w-full'>
            {
              Projects.map((project) => (
                <a href={project.link} target='_blank'>
                  <div className='group lg:w-[561px] lg:h-[315px] relative overflow-hidden border-2 border-white/50 rounded-xl'>
                    {/* overlay */}
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                    {/* img */}
                    <img
                      loading='lazy'
                      className='group-hover:scale-125 transition-all duration-500'
                      src={project.img}
                      alt='Porfolio 1'
                    />
                    {/* pretitle */}
                    <div className='absolute -bottom-full left-6 lg:left-12 group-hover:lg:bottom-8 group-hover:bottom-5 transition-all duration-500 z-50'>
                      <div>
                        <span className='text-gradient'>{project.category}</span>
                      </div>
                      {/* title */}
                      <div>
                        <span className='text-lg lg:text-3xl text-white'>{project.title}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))
            }

          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Work;
