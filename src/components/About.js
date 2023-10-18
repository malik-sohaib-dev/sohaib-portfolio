import React from 'react';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';
// useEffect, useState
import { useEffect, useState } from 'react';
// useContext
import { useContext } from 'react';
import { deviceContext } from '../contexts/deviceContext';


const About = () => {
  const initial = useContext(deviceContext);
  const [meme, setMeme] = useState("https://pd-beamliving-cd.beamliving.com/-/media/bu-to-ch/cat-meme-netflix-funny-1000x666.png");
  useEffect(() => {
    const fetchMemes = async () => {
      const response = await fetch('https://meme-api.com/gimme/wholesomememes');
      const data = await response.json();
      if (data.nsfw) setMeme("https://pd-beamliving-cd.beamliving.com/-/media/bu-to-ch/cat-meme-netflix-funny-1000x666.png");
      else setMeme(data.url);
    }
    fetchMemes();
  }, []);

  return (
    <section className='section' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial={initial}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='hidden lg:block flex-1 bg-about bg-contain bg-no-repeat h-[100%] mix-blend-lighten bg-center'>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial={initial}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            {/* Headline */}
            <h3 className='h3 mb-4'>
              I'm a Meta Cert. Developer with over 2 years of experience.
            </h3>
            {/* About me Text */}
            <p className='mb-6 text-justify'>
              Currently I'm working as a Full Stack Developer with <a target='_blank' className='text-accent font-bold' href='https://bhgroup.com.pk/'>BH Group</a>, a UK based company in Lahore, where I'm emplying my expertise to develop PV Smith Solar Simulator and Design web app. Additionally I'm providing my services on freelance platforms which include but are not limited to web development, Generative AI, UX/UI designing, 3D modeling and simulations.<br />
              {/* Bars 🔥 */}
              <span className='text-gradient text-[15px] text-center block'>
                Engineering is my superpower, and I wield it with style<br />
                Just tell me your problem, and we'll turn it into a smile
              </span>
            </p>
            {/* Buttons */}
            <div className='flex flex-col gap-y-8 lg:flex-row gap-x-8 items-center'>
              <a href={meme} target='_blank'><button onClick={() => {
                const fetchMemes = async () => {
                  const response = await fetch('https://meme-api.com/gimme/wholesomememes');
                  const data = await response.json();
                  if (data.nsfw) setMeme("https://pd-beamliving-cd.beamliving.com/-/media/bu-to-ch/cat-meme-netflix-funny-1000x666.png");
                  else setMeme(data.url);
                }
                fetchMemes();
              }}
                className='btn btn-lg '
              >
                Wanna Smile :)
              </button>
              </a>
              <a href='https://linkedin.com/in/engr-sohaib' target='_blank' className='hidden lg:block text-gradient btn-link'>
                My Certifications
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;
