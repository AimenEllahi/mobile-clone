import React, { useRef, useEffect } from "react";
import "./index.css";
import { gsap } from "gsap";
import useAnimationStore from "../../Store/AnimationState";

export default function Display() {
  const ref = useRef();
  const activeState = useAnimationStore((state) => state.activeState);
  useEffect(() => {
    if (activeState === 3) {
      gsap.to(ref.current, {
        duration: 1,
        opacity: 1,
        delay: 0.4,
      });
      ref.current.style.zIndex = 6;
    } else {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => {
          ref.current.style.zIndex = 1;
        },
      });
    }
  }, [activeState]);

  return (
    <div
      ref={ref}
      style={{
        backgroundImage: `url(/assets/Display/Display-2.webp)`,
      }}
      className='display-container'
    >
      <div className='display-icon-header'>
        <div className='display-icon-div'>
          <div className='display-img-div'>
            <img
              src='/assets/Display/display1.svg'
              className='display-icon-img'
            />
          </div>
          <span className='display-icon-text-heading'>450</span>
          <span className='display-icon-text'>nits brightness</span>
        </div>
        <div className='display-icon-div'>
          <div className='display-img-div'>
            <img
              src='/assets/Display/display2.svg'
              className='display-icon-img'
            />
          </div>
          <span className='display-icon-text-heading'>17.2cm(6.79)</span>
          <span className='display-icon-text'> FHD + Display</span>
        </div>
        <div className='display-icon-div'>
          <div className='display-img-div'>
            <img
              src='/assets/Display/display3.svg'
              className='display-icon-img'
            />
          </div>
          <span className='display-icon-text-heading'>90Hz</span>
          <span className='display-icon-text'>Adaptive Sync</span>
        </div>
      </div>
    </div>
  );
}
