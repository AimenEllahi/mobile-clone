import React from 'react'
import "./index.css"

export default function Gallery() {
  return (
    <div className='gallery-container'>
    <div className='gallery-content-container'>
      <div className='gallery-text-container'>
        <span className='gallery-text'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Repellat repellendus error cum expedita distinctio recusandae
          quo aspernatur modi! Ab libero aspernatur impedit aliquid quod
          reiciendis a. Vel aut doloremque aperiam.
        </span>
      </div>
      <div className='gallery-img-conatiner'>
        <div className='left-gallery'>
          <div className='gallery-img gallery-img1'>
            <img
              src='/assets/P3_1.jpg'
              alt='Image 1'
              className='gallery-image'
            />
          </div>
          <div className='gallery-img gallery-img2'>
            <img
              src='/assets/P3_2.jpg'
              alt='Image 2'
              className='gallery-image'
            />
          </div>
          <div className='gallery-img gallery-img3'>
            <img
              src='/assets/P3_3.jpg'
              alt='Image 3'
              className='gallery-image'
            />
          </div>
        </div>

        <div className='right-gallery'>
          <div className='gallery-img gallery-img4'>
            <img
              src='/assets/P3_4.jpg'
              alt='Image 4'
              className='gallery-image'
            />
          </div>
          <div className='gallery-img gallery-img5'>
            <img
              src='/assets/P3_5.jpg'
              alt='Image 5'
              className='gallery-image'
            />
          </div>
          <div className='gallery-img gallery-img6'>
            <img
              src='/assets/P3_6.jpg'
              alt='Image 6'
              className='gallery-image'
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
