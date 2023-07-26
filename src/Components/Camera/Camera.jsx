import React from 'react'
import "./index.css"

export default function Camera() {
  return (
    <div className='cam-container'>
    <div className='camera-header'>
      <div className='icon-cam'>
        <img src='/assets/icons_camera/01.svg' className='icon-cam-img' />
        <span className='icon-cam-heading'>50MP</span>
        <span className='icon-cam-text'>
        Primary Camera (1.28um, f/1.8)
        </span> 
      </div>
      <div className='icon-cam'>
        <img src='/assets/icons_camera/02.svg' className='icon-cam-img' />
        <span className='icon-cam-heading'>2MP</span>
        <span className='icon-cam-text'>Macro Camera</span>
      </div>
      <div className='icon-cam'>
        <img src='/assets/icons_camera/03.svg' className='icon-cam-img' style={{
          width: "80px",
          height: "80px"
        }} />
        <span className='icon-cam-heading'>8MP</span>
        <span className='icon-cam-text'>Ultra - wide</span> 
      </div>
    </div>
  </div>
  )
}
