import React, { useRef, useEffect } from "react";
import "./index.css";
import useAnimationStore from "../../Store/AnimationState";
import { gsap } from "gsap";
export default function Camera() {
  const ref = useRef();
  const activeState = useAnimationStore((state) => state.activeState);
  useEffect(() => {
    if (activeState === 2) {
      gsap.to(ref.current, {
        duration: 1,
        opacity: 1,
        delay: 0.3,
        onStart: () => {
          ref.current.style.zIndex = 3;
        },
      });
    } else {
      gsap.to(ref.current, {
        opacity: 0,
      });
    }
  }, [activeState]);

  return (
    <div
      className='cam-container'
      ref={ref}
      style={{
        backgroundImage: `url(/assets/Camera/camera.webp)`,
      }}
    >
      <div className='camera-header'>
        <div className='icon-cam'>
          <img src='/assets/icons_camera/01.svg' className='icon-cam-img' />
          <span className='icon-cam-heading'>50MP</span>
          <span className='icon-cam-text'>Primary Camera (1.28um, f/1.8)</span>
        </div>
        <div className='icon-cam'>
          <img src='/assets/icons_camera/02.svg' className='icon-cam-img' />
          <span className='icon-cam-heading'>2MP</span>
          <span className='icon-cam-text'>Macro Camera</span>
        </div>
        <div className='icon-cam'
           style={{
            transform: "translateY(-40px)"
          }}>
          <img
            src='/assets/icons_camera/03.svg'
            className='icon-cam-img'
            style={{
              // border : "2px solid #000",
              width: "80px",
              height: "80px",
             
            }}
          />
          <span className='icon-cam-heading'>8MP</span>
          <span className='icon-cam-text'>Ultra - wide</span>
        </div>
      </div>
    </div>
  );
}
