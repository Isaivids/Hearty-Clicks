import React from 'react'
import Couples from './Couples.json'
import './Gallery.scss'

const Gallery = () => {
  return (
    <div className='gall'>
        <div className='gall-head'>Shoots this week</div>
          <div className='gall-content'>
          {Couples.map((img)=>{
            return(
            <div className='gall-img'>
              <img src={img.img} alt="Pic" loading="lazy" />
              <span>{img.name}</span>
            </div>
            )
          })}
        </div>
        <div className='gall-foot'>Images are subjected to copyright. Used for educational purpose</div>
    </div>
  )
}

export default Gallery