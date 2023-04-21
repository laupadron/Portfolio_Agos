import React from 'react'
import { FaInstagram,FaFacebookSquare,FaWhatsapp } from "react-icons/fa";
import logo from '../assets/logo.png'
import '../styles/tailwind.css';

const Hero = () => {
  return (
    <section id='home' className='lg:h-[85vh] flex items-center lg:bg-cover lg:bg-center 
    lg_bg-no-repeat py-32 lg:py-0 overflow-hidden '>
      <div className="container mx-auto h-full">
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
          <a href="#">
          <img src={logo} alt="" style={{ height: "95px", width: "auto" , }}/>
        </a>
        <h1 className='font-sans text-4xl	italic leading-loose mt-6 font-bold text-letter'>Explorá mi galería y descubrí el mundo a través de mis ojos</h1>
          </div>
          </div>
          <div className="flex items-center justify-center mt-6	 h-full gap-4 text-2xl text-letter ">
            <a href="https://www.instagram.com/agostinacfotos/" target="_blank" rel="noopener noreferrer">
                <FaInstagram/>
            </a>
            <a href="https://www.facebook.com/agostinacfotos" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=543454287339">
                <FaWhatsapp/>
            </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
