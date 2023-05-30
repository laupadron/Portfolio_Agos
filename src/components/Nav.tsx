import React, {useState,useEffect}from 'react'
import logo from '../assets/logo.png'
import '../styles/tailwind.css';
import { FaInstagram,FaFacebookSquare,FaWhatsapp } from "react-icons/fa";

import { NavLink,NavLinkProps  } from 'react-router-dom';
import {menuLinks,subMenuLinks} from '../data'
import '../styles/tailwind.css';
import ModalForm from './ModalForm';

const Nav = () => {
  
  const [modalVisible, setModalVisible] = useState(false);
  function handleLinkClick() {
    setModalVisible(true);
  }

  
 
   
  
  
  
  
  
  
    
  return (
    
    <nav className='text-zinc-800 flex flex-col mt-10 ml-6 justify-start items-start'>
    <div>
            {/*logo*/}
        <a href="#">
          <img src={logo} alt="" style={{ height: "95px", width: "auto" , }}/>
        </a>
        
      <ul className='my-16 flex flex-col gap-6 text-letter '>
        {menuLinks?.map((menu, i) => (
          <li key={i} className='hover:text-hover hover:scale-hover-120  '>
            {menu.name === 'Contactémonos' ? ( // Agrega una condición para verificar si el enlace actual es el que deseas
              <NavLink
                to={menu.link}
                className='transition-all duration-300 cursor-pointer capitalize  '
                
                onClick={handleLinkClick}
                data-modal-link
              >
                {menu.name}
              </NavLink>
            ) : (
              <NavLink
                to={menu.link}
                className='transition-all duration-300 cursor-pointer capitalize'
               
              >
                {menu.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
        
        
        <div className="flex gap-4 text-letter ml-4 ">
            <a href="https://www.instagram.com/agostinacfotos/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='h-6 w-6 hover:text-hover hover:scale-hover-120'/>
            </a>
            <a href="https://www.facebook.com/agostinacfotos" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className='h-6 w-6 hover:text-hover hover:scale-hover-120'/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=543454287339">
                <FaWhatsapp className='h-6 w-6 hover:text-hover hover:scale-hover-120'/>
            </a>
        </div>
        <div id='modal-component-container ' className='  fixed inset-0 'style={{ display: modalVisible ? 'block' : 'none' }}>
          <div className='modal-flex-container flex items-end justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0  '></div>
          <div className='modal-bg-container fixed inset-0 bg-white bg-opacity-25 '></div>
          <div className='modal-space-container '></div>
          <div className='modal-container inline-block aline-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg lg:max-w-md w-full mr-8 lg '>
            <div className='modal-wrapper bg-bgForm px-4 pt-5 pb-4 sm:p-6 sm-pb-4'>
              <div className='modal-wrapper-flex justify-center align-center  sm:flex sm:items-start'>
                
                <div className='modal-content text-center  mt-3 sm:mt-0  sm:ml-4 sm:text-left z-50'>
                <ModalForm />
                </div>
              </div>
            </div>
            <div className='modal-actions bg-bgForm px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
            <button id='close-modal' onClick={() => setModalVisible(false)} className='w-full inline-flex justify-center rounded-md borber border-transparent shadow-md px-4 py-2 bg-white font-medium mt-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'>Cancelar</button>
            
          </div>
          </div>
          
        </div>
       
    </div>
      
    </nav>
  )
}

export default Nav