import React, { useRef, Suspense } from 'react';
import './App.css';
import LoaderComponent from './Components/LoaderComponent';
import { Canvas, useFrame, useThree} from '@react-three/fiber';
import { Environment, OrbitControls, PresentationControls} from '@react-three/drei';
import { MobileBlack } from './Components/MobileBlack';
import { TextureLoader } from 'three';


function BackgroundBox() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust the rotation speed as desired
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry args={[1000, 1000, 1000]} />
      <meshBasicMaterial side={2}>
        <primitive attach="map" object={new TextureLoader().load('/assets/color.jpg')} />
      </meshBasicMaterial>
    </mesh>
  );
}

function App() {
  return (
       <div style={{ 
      // border: '1px solid black',
      width: '440px',
      height: '790px', margin: '0', padding: '0' }}>
      <Canvas style={{ width: '440px', height: '790px' }}>
        <BackgroundBox />
        <Environment preset='sunset' />
        <PresentationControls>
          <MobileBlack />
        </PresentationControls>
      
      </Canvas>

      <div
        style={{
          border: '1px solid black',
          width: '440px',
          height: '80px',
          position: 'fixed',
          bottom: '0',
          borderTopLeftRadius: '30px',
          borderTopRightRadius: '30px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: 'black',
        }}
      >
        <div className='icon-container'>
          <img src="/assets/color.jpg" alt="color" className='color-img-icon'/>
          <div className='color-white-bg'></div>
          <div className='color-icon-text'>Coloris</div>
        </div>
        <div className='icon-container'>
          <img src='/assets/home_3.png' className='camera-img-icon'/>
          <div className='camera-icon-text'>Camera</div>
        </div>
        <div className='icon-container'>
          <img src='/assets/home_2.png' className='ecran-img-icon'/>
          <div className='ecran-icon-text'>Ecran</div>
        </div>
        <div className='icon-container'>
          <img src='/assets/home_4.png' className='performance-img-icon'/>
          <div className='performance-icon-text'>Performance</div>
        </div>
      </div>
    </div>

   
  );
}

export default App;
