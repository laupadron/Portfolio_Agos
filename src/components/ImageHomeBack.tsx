import React from 'react'
import '../styles/tailwind.css'
import agosPortada2 from '../assets/agos portada2.jpg'

function ImageHomeBack() {
  return (
    <div className="absolute inset-0  flex justify-center items-center bg-black transition-all z-10 card-back ">
      <img className="lg:z-0" src={agosPortada2} alt=""  />
    </div>
  )
}

export default ImageHomeBack
