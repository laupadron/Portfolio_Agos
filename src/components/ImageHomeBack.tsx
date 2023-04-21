import React from 'react'
import '../styles/tailwind.css'
import agosPortada2 from '../assets/agos portada2.jpg'

function ImageHomeBack() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
      <img src={agosPortada2} alt="" />
    </div>
  )
}

export default ImageHomeBack
