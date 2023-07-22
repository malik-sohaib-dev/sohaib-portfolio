import React, { useRef } from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants'
// Email sender
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const submit = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    submit.current.disabled = true;
    emailjs.sendForm('gmail_service', 'portfolio_template', form.current, 'NtwIvunMWZuRLOmE5')
      .then((result) => {
        console.log(result.text);
        alert('Thank you for reaching out! Rest assured, I\'ll be in touch with you as soon as possible. :)');
        e.target.reset();
        submit.current.disabled = false;
      }, (error) => {
        console.log(error.text);
        alert('Message sending failed. Please try again!');
        submit.current.disabled = false;
      });
  };

  return (
    <section className='py-16 lg:section ' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row '>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work  <br />
                together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form ref={form} onSubmit={sendEmail}
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input required
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              placeholder='Your name'
              name='name'
              type='text'
            />
            <input required
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              placeholder='Your email'
              name='email'
              type='email'
            />
            <input required
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              placeholder='Subject'
              name='subject'
              type='text'
            />
            <textarea required
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              name='message'
              placeholder='Your message'
            ></textarea>
            <button ref={submit} className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
};

export default Contact;
