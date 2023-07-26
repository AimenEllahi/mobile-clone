import React, {useState, useRef} from 'react'
import "./index.css"

export default function Performance() {
    const perfContRef = useRef();
    const [backgroundImage, setBackgroundImage] = useState(
        "/assets/Performance/Helio.png"
      );
      const handleBatteryClick = () => {
        setBackgroundImage("/assets/Performance/battery.png");

      };
    
      const handleHelioClick = () => {
        setBackgroundImage("/assets/Performance/Helio.png");
      };
    
  return (
    <div
    ref={perfContRef}
    className='performance-container'
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
  >
    {/* <span className='performance-header'>Snapdragon® 8+ Gen 1</span> */}
    <div className="performance-text-div">
    <span className='performance-text' onClick={handleBatteryClick}>
      Large 5000mAh Battery
    </span>
    <span className='performance-text' onClick={handleHelioClick}>
      MediaTek Helio G88
    </span>
    </div>
  </div>
  )
}
