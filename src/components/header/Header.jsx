import React from 'react';
import { motion } from 'framer-motion';
import './header.css';
import CTA from './CTA';
import Me from '../../assets/welcome.png';
import HeaderSocials from './HeaderSocials'; 

const Header = () => { 
  return (
    <motion.header
      initial={{ opacity: 0, translateY: 200}}
      animate={{ opacity: 1, translateY: 0}}
      transition={{ duration: 0.5 }} 
    >
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kusaram Pawara</h1>
        <h5 className='text-light'>Fullstack Developer</h5>

        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={Me} className="me-img" alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </motion.header>
  )
}

export default Header;











// import React, { useEffect, useRef } from 'react';
// import './header.css';
// import CTA from './CTA';
// import Me from '../../assets/me.png';
// import HeaderSocials from './HeaderSocials';

// const Header = () => {
//   const observer = useRef(null);

//   useEffect(() => {
//     observer.current = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       });
//     });

//     const hiddenElementNodes = document.querySelectorAll(".hidden");
//     setTimeout(()=>{
//       hiddenElementNodes.forEach((el) => observer.current.observe(el));

//     },2000)

//     // Clean up the observer when the component unmounts
//     return () => {
//       if (observer.current) {
//         hiddenElementNodes.forEach((el) => observer.current.unobserve(el));
//       }
//     };
//   }, []); // Empty dependency array ensures the effect runs once on mount

//   return (
//     <header>
//       <div className="container header__container">
//         <h5 className='hidden'>Hello I'm</h5>
//         <h1 className='hidden'>Kusaram Pawara</h1>
//         <h5 className='text-light hidden'>Fullstack Developer</h5>

//         <CTA />
//         <HeaderSocials />
//         <div className='me'>
//           <img src={Me} className="me-img" alt="me" />
//         </div>

//         <a href="#contact" className='scroll__down'>Scroll Down</a>
//       </div>
//     </header>
//   );
// }

// export default Header;
