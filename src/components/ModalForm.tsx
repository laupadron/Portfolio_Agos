import React from 'react'
import '../styles/tailwind.css';
import logo from '../assets/logo.png'

export default function ModalForm() {
  return (
    <div className=''>
      <div className=' '>
        <div className='mb-4 '>
            <img src={logo} alt="" style={{ height: "45px", width: "auto", color:'#E5E5CB' }}/>
        </div>
        <form action="https://formspree.io/f/xyyaljda" method="POST" className='flex flex-col text-letter'>
            <legend>Contáctame!</legend>
            <label htmlFor="name">Tu Nombre</label>
            <input type="text" placeholder="Ingresa tu nombre" name="name" id="name" required className='appearance-none block w-full px-4 py-3 leading-tight text-letter bg-gray-50 focus:bg-white border-gray-200 focus:border-gray-200 rounded focus:outline-none'/>
            <label htmlFor="email">Tu Email</label>
            <input type="email" placeholder="Ingresa tu email" name="email" id="email" required className='appearance-none block w-full px-4 py-3 leading-tight text-letter bg-gray-50 focus:bg-white border-gray-200 focus:border-gray-200 rounded focus:outline-none'/>
            <label htmlFor="celular">Tu Celular</label>
            <input type="number" placeholder="Ingresa tu celular sin el 0 ni 15" name="celular" id="celular" className='appearance-none block w-full px-4 py-3 leading-tight text-letter bg-gray-50 focus:bg-white border-gray-200 focus:border-gray-200 rounded focus:outline-none'/>
            <label htmlFor="mensaje">Tu Mensaje</label>
            <textarea name="mensaje" id="mensaje" className='appearance-none block w-full px-4 py-3 leading-tight text-letter bg-gray-50 focus:bg-white border-gray-200 focus:border-gray-200 rounded focus:outline-none' ></textarea>
            <button type="submit" className='inline-block w-full px-8 py-4 leading-none bg-white font-semibold rounded shadow mt-4'>Enviar</button>
        </form>
      </div>
    </div>
  )
}
