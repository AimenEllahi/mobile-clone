import React from 'react'
import "./index.css"

export default function Display() {
  return (
    <div className='display-container'>
          <div className='display-icon-header'>
            <div className='display-icon-div'>
              <div className="display-img-div">
                <img src='/assets/Display/display1.svg' className='display-icon-img' />
              </div>
              <span className="display-icon-text-heading">450</span>
              <span className="display-icon-text">nits brightness</span>
            </div>
            <div className='display-icon-div'>
              <div className="display-img-div">
              <img src='/assets/Display/display2.svg' className='display-icon-img' />
              </div>
              <span className="display-icon-text-heading">17.2cm(6.79)</span>
              <span className="display-icon-text"> FHD + Display</span>
            </div>
            <div className='display-icon-div'>
              <div className="display-img-div">
              <img src='/assets/Display/display3.svg' className='display-icon-img' />
              </div>
              <span className="display-icon-text-heading">90Hz</span>
              <span className="display-icon-text">Adaptive Sync</span>
            </div>
          </div>
        </div>
  )
}
