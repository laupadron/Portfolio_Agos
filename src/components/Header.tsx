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
      <div className="container  grid grid-cols grid-cols-3 gap-3 justify-center  lg:flex-row    ">
        
        {/*nav*/}
        <div className="w-full ml-0 lg:w-1/3   " >
          <Nav/>
          
        </div>
        {/* <div className="lg:hidden ">
          <NavMobile/>
          
        </div> */}
        <div className="mr-auto  hidden lg:block  ">
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
