import React,{useEffect,useState} from 'react'
import Nav from './Nav'
// import NavMovile from './NavMovile'
// import Socials from './Socials'
import '../styles/tailwind.css';
import SectionHome2 from './SectionHome2';
import '../App.css'
import SectionHome from './SectionHome';
import NavMobile from './NavMobile';
import Hero from './Hero';
import Collections from './Collections';

const Header = () => {
 
  interface HeaderState{
    value: boolean
  }
  const [bg,setBg] = useState<HeaderState>({ value: false });

 
  
 
  
  return (
    <header>
      <div className="container mx-auto flex flex-col justify-center lg:flex-row  gap-x-0 lg:gap-x-40 ">
        
        {/*nav*/}
        <div className="w-full lg:w-1/3 lg:ml-auto lg:mr-auto lg:ml-0 lg:mr-0 ml-20 " >
          <Nav/>
          
        </div>
        {/* <div className="lg:hidden ">
          <NavMobile/>
          
        </div> */}
        <div className="hidden lg:block  ">
          <SectionHome/>
          
        </div>
        <div className="hidden lg:block">
          <SectionHome2/>
          
        </div>
       
        </div>

    </header>
  )
}

export default Header
