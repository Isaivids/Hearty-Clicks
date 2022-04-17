import React, {useEffect, useState} from 'react';
import Count from './Count';
import './HeroSection.scss'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Studios from './Studios';


const HeroSection = () => {

  const slides =[
    {
      image: "1.jpg", desc: "Prewedding Photoshoot"
    },
    {
      image: "2.jpg", desc: "Post Wedding Photoshoot"
    },
    {
      image: "3.jpg", desc: "Candid Photoshoot"
    },
    {
      image: "4.jpg", desc: "Creative ideas"
    },
    {
      image: "5.jpg", desc: "Romantic shoots"
    },
    {
      image: "6.jpg", desc: "videos"
    },
  ];
  const [x, setX] = useState(0);
  const goLeft = () =>{
    x === 0? setX(-100 * (slides.length -1 )): setX(x + 100);
  }
  const goRight = () =>{
    x === -100 * (slides.length -1 )? setX(0): setX(x - 100);
  }

  useEffect(() => {
    setTimeout(() => {
      if(x === -100 * (slides.length - 1)){
        setX(0)
      }else{
        setX(x - 100)
      };

    }, 3000);
  }, [x,slides.length])
  
  return (
    <><div className='slides'>
      {slides.map((slide, index) => {
        return (
          <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
            <img src={slide.image} alt="ddd" />
            <p>{slide.desc}</p>
          </div>
        );
      })}
      <span id='goLeft' onClick={goLeft}><BsFillArrowLeftCircleFill/></span>
      <span id='goRight' onClick={goRight}><BsFillArrowRightCircleFill/></span>
    </div>
    <Count />
    <Studios/>
    </>
  )
}

export default HeroSection