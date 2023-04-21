import React from 'react'
import '../styles/tailwind.css'
import agosPortada from '../assets/agos portada.jpg'

function ImageHomeFront() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0">
      <img src={agosPortada} alt="" />
    </div>
  )
}

export default ImageHomeFront
