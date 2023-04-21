
import { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/tailwind.css';
import Hero from './components/Hero';
import Collections from './components/Collections';
import SlideShow from './components/SlideShow'
import {images1, images2, images3, images4,retratos, eventos, moda, powerWoman} from './data'

function App() {
  // const [menuLinks, setMenuLinks] = useState([
  //   {
  //     name: 'Home',
  //     link: '/',
  //   },
  //   {
  //     name: 'Collections',
  //     link: '/collections',
  //   },
  //   {
  //     name: 'Detail',
  //     link: '/detail', // Agrega la ruta al nuevo componente
  //   },
  // ]);

  return (
    <BrowserRouter>
      <div className="">
        
        <div className="lg:hidden ">
          <Hero />
        </div>
        <Routes>
          <Route path='/' element = {<Header />}/>
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/portraits" element={<SlideShow images={images1} className={'max-w-[380px] h-[620px] w-full m-auto py-16 px-4 relative group'} h2={retratos}/>} />
          <Route path="/collections/events" element={<SlideShow images={images2} className={'max-w-[380px] h-[620px] w-full m-auto py-16 px-4 relative group'} h2={eventos}/>} />
          <Route path="/collections/moda" element={<SlideShow images={images3} className={'max-w-[380px] h-[620px] w-full m-auto py-16 px-4 relative group'} h2={moda}/>} />
          <Route path="/collections/powerWoman" element={<SlideShow images={images4} className={'max-w-[380px] h-[620px] w-full m-auto py-16 px-4 relative group'} h2={powerWoman}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;