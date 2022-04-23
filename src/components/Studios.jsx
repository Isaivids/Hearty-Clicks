import React from 'react'
import './Studios.scss';
import StudioList from './StudioList.json';
import {FaWhatsapp} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

const Studios = () => {

  return (
    <div className='studios'>
        <div className='studios-header'>
            <h1>Photographer's List</h1>
            <p>Drop your reviews</p>
        </div>
      <div className='studios-list'>
          {StudioList.map((studio,index)=>{
              return (
                  <div className='studio' key={index}>
                    <div className='studio-img'>
                      <img src={studio.img} alt="photographer"/>
                    </div>
                    <div className='studio-content'>
                      <span>{studio.name}</span>
                      <span>{studio.type}</span>
                      <span>{studio.moto}</span>
                      <span>&#8377; {studio.amount} perDay</span>
                    </div>
                    <div className='studio-footer'>
                      <span><FaWhatsapp/></span>
                      <span><FaInstagram/></span>
                    </div>
                  </div>
              )
          })}
      </div>
    </div>
  )
}

export default Studios