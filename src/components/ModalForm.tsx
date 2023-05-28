import React from 'react'
import '../styles/tailwind.css';
import logo from '../assets/logo.png'

interface Props {
  
  className?: string;
  
}

export default function ModalForm({className}:Props) {
  return (
    <div className=''>
      <div className=''>
        <div className='mb-4 '>
            <img src={logo} alt="" style={{ height: "45px", width: "auto", color:'#E5E5CB' }}/>
        </div>
        <form action="https://formspree.io/f/xyyaljda" method="POST" accept-charset="utf-8" className='flex flex-col gap-1 '>
            <legend>Contáctame!</legend>
            <label htmlFor="name">Tu Nombre</label>
            <input type="text" placeholder="Ingresa tu nombre" name="name" id="name" required className='appearance-none block w-full text-hover px-4 py-3 leading-tight  bg-gray-50 focus:bg-white border-gray-200 focus:border-gray-200 rounded focus:outline-none'/>
            <label htmlFor="email">Tu Email</label>
            <input type="email" placeholder="Ingresa tu email" name="email" id="email" required className='appearance-none block w-full px-4 py-3 leading-tight  bg-gray-50 focus:bg-white border-gray-200 focus:border-gray-200 rounded focus:outline-none'/>
            <label htmlFor="celular">Tu Celular</label>
            <input type="tel" placeholder="Ingresa tu celular sin el 0 ni 15" name="celular" id="celular" required className='appearance-none block w-full px-4 py-3 leading-tight  bg-gray-50 focus:bg-white border-gray-200 focus:border-gray-200 rounded focus:outline-none'/>
            <label htmlFor="mensaje">Tu Mensaje</label>
            <textarea  id="mensaje" name="mensaje"  required className='appearance-none block w-full px-4 py-3 leading-tight  bg-gray-50 focus:bg-white border-gray-200 focus:border-gray-200 rounded focus:outline-none' ></textarea>
            <button type="submit" className='inline-block w-full px-8 py-4  bg-bgButton  font-semibold rounded shadow mt-4'>Enviar</button>
        </form>
      </div>
    </div>
  )
}
