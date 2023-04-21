import React , {useState} from 'react'
import {menuLinks,subMenuLinks} from '../data'
import { AiFillCloseCircle,AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion"
import { Link } from 'react-scroll';
import '../styles/tailwind.css';
import Hero from './Hero';

const NavMobile = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const circleVariants={
    hidden:{
      scale:0
    },
    visible:{
      scale:180,
      backgroundColor: '#F2F7A1',
      transition:{
        type: 'spring',
        stiffness: 160,
        damping:60,
      },
    },
  }

  const ulVariants = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        delay:0.1
      }
    }
  }

  

  return (
    <nav className='relative'>
      <div onClick={()=> setIsOpen(true)} className='cursor-pointer'>
        <AiOutlineMenu className='w-6 h-6'/>
      </div> 
      <motion.div variants={circleVariants} initial='hidden' animate={isOpen ? 'visible' : 'hidden'} 
      className='w-4 h-4 rounded-full 	 fixed top-0 right-0'>
        
      </motion.div>
      <motion.ul variants={ulVariants} initial='hidden' animate= {isOpen ? 'visible' : ''}
      className={`${isOpen ? 'right-0': '-right-full'} fixed top-0 bottom-0 w-full flex
      flex-col justify-center items-center transition-all duration-300 overfloe-hidden`}>
        <div onClick={()=>setIsOpen(false)} className='cursor-pointer absolute top-8 right-8'>
          <AiFillCloseCircle className='w-8 h-8'/>
        </div>
        {
        menuLinks?.map((menu,i)=>{
            const subMenu = (
                <ul className="sub-menu">
                    {subMenuLinks.map((subMenuLink, j) => (
                        <li key={j}>
                            <Link to={subMenuLink.link} activeClass='active' spy={true} smooth={true} duration={500} offset={-70} className='transition-all duration-300'>
                                {subMenuLink.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            );
            return (
                <li key={i} className='hover:text-hover '>
                    <Link to={menu.link} activeClass='active' spy={true} smooth={true} duration={500} offset={-70} className=' cursor-pointer capitalize' onClick={() => {
                        if (menu.name === "Collections") {
                            setShowSubMenu(!showSubMenu);
                        }
                    }}>
                        {menu.name}
                    </Link>
                    <Link to={menu.link} activeClass='active' spy={true} smooth={true} duration={500} offset={-70} className=' cursor-pointer capitalize'>
                    {menu.name === "Collections" && showSubMenu && subMenu}
                    </Link>
                </li>
            );
        }) 
    }   
      </motion.ul>
       
    </nav>
  )
}

export default NavMobile
