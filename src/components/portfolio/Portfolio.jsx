import React from 'react';
import './portfolio.css';
import { motion } from 'framer-motion';


const data = [
  {
    id: 1,
    // image: "https://shorturl.at/GXZ45",
    image: "https://raw.githubusercontent.com/Kusaram99/book_show/master/sample.png",
    title: "Book my Show",
    seeProject: "https://book-my-show-frontend-seven.vercel.app/",
    github: "https://github.com/Kusaram99/book_show"
  },
  {
    id: 2,
    image: "https://shorturl.at/jyI89",
    title: "E-Commerce Web App",
    seeProject: "https://e-commerce-fnd.vercel.app/",
    github: "https://github.com/Kusaram99/E-Commerce-WebApp"
  },
  {
    id: 3,
    image: "https://fileserver.teachstarter.com/thumbnails/34058-mab-flashcards-thumbnail-0-600x400.png",
    title: "Flash card Generator",
    seeProject: "https://flashcard-six.vercel.app/",
    github: "https://github.com/Kusaram99/E-Commerce-WebApp"
  },
  {
    id: 4,
    image: "https://www.animaker.com/static_2.0/img/text-to-speech/text_to_speech_ogimage.jpg",
    title: "Text to speech converter",
    seeProject: "https://text-speach.vercel.app/",
    github: "https://github.com/Kusaram99/text-speach"
  },
  {
    id: 5,
    image: "https://shorturl.at/qrT89",
    title: "My Todo List",
    seeProject: "https://my-todo-app-pied-alpha.vercel.app/",
    github: "https://github.com/Kusaram99/myTodo_app"
  },
  {
    id: 6,
    image: "https://berkeyfilterwater.com/wp-content/uploads/2019/04/Berkey-USA-bundle-and-save.png",
    title: "Bundle and save",
    seeProject: "https://simple-html-task.vercel.app/",
    github: "https://github.com/Kusaram99/Bundle-save"

  }
 
]


const Portfolio = () => {

  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
      }
    });

    observer.observe(document.querySelector('#portfolio'));

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <motion.section
      initial={{ opacity: 0, translateY:  250 }}
      animate={hasAnimated ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.6 }}
      id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, seeProject }) => {
            return (
              <article key={id} className='portfolio__items'>
                <div className='portfolio__item-image'>
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a href={seeProject} className="btn">See Project</a>
                  <a href={github} className="btn btn-primary">Github</a>
                </div>
              </article>
            )
          })
        }

      </div>
      <div className='seemore_btn'>
        <a href='https://github.com/Kusaram99' target='_blanck'>See more</a>
      </div>
    </motion.section>
  )
}

export default Portfolio