import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Contact = () => {

  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
      }
    });

    observer.observe(document.querySelector('#contact'));

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <motion.section
      initial={{ opacity: 0, translateY:  250 }}
      animate={hasAnimated ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.6 }}
      id="contact">
      <h5 >Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="contact__h5">kusarampawara77@gmail.com</h5>

            <a href='mailto:kusarampawara77@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a href='https://api.whatsapp.com/send?phone+919322230624' target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email'
            required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </motion.section>
  )
}

export default Contact