

import React,{useEffect,useState} from 'react'
import ImageHomeBack from './ImageHomeBack'
import ImageHomeFront from './ImageHomeFront'


function SectionHome() {

    

  return (
    <div className=' relative mt-24 ml-8 w-96 h-96 rounded-2xl  overflow-hidden cursor-pointer transition-all duration-700 card lg:absolute'>
      <ImageHomeFront/>
      <ImageHomeBack/>
      
    </div>
  )
}

export default SectionHome
