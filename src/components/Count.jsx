import React from 'react'
import './Count.scss'

const Count = () => {
  return (
    <div className='count'>
      <div className='stats-header'>
        <h1>Our Stats show that we've Happy customers</h1>
        <p>Experience the most touching and lovable photos with us</p>
      </div>
      <div className='count-container'>
        <div className='card'>
          <h1>32</h1>
          <p>Locations</p>
        </div>
        <div className='card'>
          <h1>30</h1>
          <p>PhotoShoots this week</p>
        </div>
        <div className='card'>
          <h1>1000</h1>
          <p>Happy customers</p>
        </div>
        <div className='card'>
          <h1>100+</h1>
          <p>Cameras</p>
        </div>
      </div>
    </div>
  )
}

export default Count