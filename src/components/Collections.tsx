
import '../styles/tailwind.css';
import React, {useLayoutEffect,useEffect, useRef} from 'react'
import NavMobile from './NavMobile';
import { gsap } from 'gsap'
import { NavLink,NavLinkProps  } from 'react-router-dom';
import {images1, subMenuLinks} from '../data'
import img1 from '../assets/carrousel9.jpg'
import img2 from '../assets/carrousel8.jpg'




const Collections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
 


  const timeline= gsap.timeline()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.container ', {
        height: 'random(350,450)',
        width:'random(300,350)',
        xPercent: -50,
        x: 'random(-200, 350)',
        opacity:0
      });
      const images = document.querySelectorAll('.image');
      timeline.from(images, {opacity:0, y:100,duration: 3, stagger: 0.5})
      const images2= document.querySelectorAll('.image2');
      timeline.from(images2, {opacity:0,y:100, duration: 2, stagger: 0.5})
   
      const titulo = document.querySelectorAll('.titulo')
    timeline.from(titulo, {opacity:0,y:150,duration:10,stagger:0.3})
    }, containerRef);
    return () => ctx.revert();

   
    
  }, []);
  
 


  
    
  

  

  
  return ( 
<div className="container  w-screen  grid grid-cols-3 absolute flex justify-center gap-8 grid-flow-col auto-cols-max align-center "  ref={containerRef}>
  <img src={img2} alt="" className=" image w-full h-full object-cover ml-0 pl-0" />
  <div className="titulo hidden lg:block z-10 items-center flex flex-col justify-center">
    <h1 className='text-4xl font-mono italic leading-loose text-letter  mt-20  font-bold'>"La fotografía <br />ayuda a la gente <br />a ver"</h1>
    <p className='text-letter'>Berenice Abbot</p>
    <div className='  hidden lg:block '>
    <ul className=' z-10 flex flex-col  mt-10 text-2xl  content-center gap-7 italic  ' style={{ right: 50}}	>
     {
      subMenuLinks?.map((menu,i)=>(
        <li key={i} className='text-center hover:text-xl transform hover:scale-110 text-letter	'>
          <NavLink to={menu.link}className='transition-all duration-300 cursor-pointer capitalize'>
            {menu.name}
          </NavLink>
        </li>
      ))
     } 
    </ul>
    
  </div>
  
  </div>
  <img src={img1} alt="" className="image2 w-full h-full object-cover pr-12" />
 
  <div className="lg:hidden ">
          <NavMobile/>
          
        </div>
</div>
  );
};






export default Collections

