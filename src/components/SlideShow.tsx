import React,{useState} from 'react'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {RxDotFilled} from 'react-icons/rx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



interface Props {
  images: string[];
  className?: string;
  h2:string
}

export default function Slide({images, className,h2}:Props) {
  


const [currentIndex, setCurrentIndex]=useState(1)

 

  const before = () => {
    const isFirstSlide=currentIndex===0;
    const  newIndex=isFirstSlide ? images.length - 1 : currentIndex -1;
    setCurrentIndex(newIndex)
  };








const next= ()=>{
  const isLastSlide= currentIndex === images.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex)
}
  const goToSlide=(imageIndex:number)=>{
    setCurrentIndex(imageIndex)
  }

  return (
    
    <div className={`slider ${className}  h-screen  p-0`}>
      <h2 className='text-5xl font-mono italic leading-loose text-letter   m-0  font-bold drop-shadow-lg animate-fadeIn'>{h2}</h2>
      <div style={{backgroundImage:`url(${images[currentIndex]})`}} className='max-w-full h-full rounded-2xl bg-center bg-cover duration-500'>
       
        <div >
          <button className='hidden group-hover:block absolute  top-[65%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursos-pointer'>
          <FontAwesomeIcon icon={faChevronLeft} onClick={before} />
          </button>
          <button className='hidden group-hover:block absolute  top-[65%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursos-pointer'>
          <FontAwesomeIcon icon={faChevronRight} onClick={next} />
          </button>
        </div>
      </div>
      <div className='flex top-4 justify-center py-2 p-0 mt-0 mb-8'>
        {images.map((image, imageIndex)=>(
          <div key={imageIndex} onClick={()=>goToSlide(imageIndex)} className='text-2xl cursor-pointer'>
            <RxDotFilled/>
            </div>
        )
        )}
      </div>
    </div>
  )
}