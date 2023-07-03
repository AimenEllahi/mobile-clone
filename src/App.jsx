import React, { useRef, Suspense, useState } from "react";
import "./App.css";
import LoaderComponent from "./Components/LoaderComponent";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import { MobileBlack } from "./Components/MobileBlack";
import { TextureLoader } from "three";
import useAnimationStore from "./Store/AnimationState";
import Animation from "./Components/Animations";
import { MdCancel } from "react-icons/md";
import useColorStore from "./Store/ColorStore";



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
        <primitive
          attach='map'
          object={new TextureLoader().load("/assets/back.jpg")}
        />
      </meshBasicMaterial>
    </mesh>
  );
}

function CancelButton() {
  const setActiveState = useAnimationStore((state) => state.setActiveState);
  const activeState = useAnimationStore((state) => state.activeState);
  return (
    <MdCancel
      size={25}
      color='#fff'
      className='cancel-button'
      onClick={() => setActiveState(0)}
      style={{
        zIndex: activeState === 0 ? -1 : 6,
      }}
    />
  );
}

function App() {
  const setActiveState = useAnimationStore((state) => state.setActiveState);
  const activeState = useAnimationStore((state) => state.activeState);
  const color = useColorStore((state) => state.color);
  const setColor = useColorStore((state) => state.setColor);
  const perfContRef = useRef();
  const menuRef = useRef();
  const colorContRef = useRef();
  const displayRef = useRef();
  const cameraRef = useRef();

  return (
      <div
      style={{
        width: "440px",
        height: "100vh",
        margin: "0",
        padding: "0",
        position: "relative",
      }}
    >

      <Canvas
        style={{
          width: "440px",
          height: "100vh",
          zIndex: 0,
          backgroundColor: "#000",
        }}
      >
        
        <ambientLight intensity={0.5} />
        {/* <pointLight position={[0, 10, 10]} />
        <directionalLight intensity={1} /> */}
        {activeState !== 3 && <BackgroundBox />}

        <Environment background={false} preset='apartment' />
        <MobileBlack />
        <OrbitControls enabled={activeState !== 3} />
        <Animation
          perfContRef={perfContRef}
          menuRef={menuRef}
          colorContRef={colorContRef}
          displayRef={displayRef}
        />
    
      </Canvas>
      <CancelButton />
      <div ref={perfContRef} className='performance-container'>
        <span className='performance-header'>Snapdragon® 8+ Gen 1</span>
        <span className='performance-text'>120W HyperCharge</span>
        <span className='performance-text'>Single-cell 5000mAh battery</span>
      </div>

      {/* <div ref={colorContRef} className='color-container'>
        <span className='color-header'>
          {colorArray.filter((item) => item.hex === color)[0].name}
        </span>

        <img
          src='/assets/color_1.png'
          onClick={() => setColor("#2596be")}
          className={`color-div ${
            color === "#2596be" && "color-div-selected"
          } `}
        />
        <img
          src='/assets/color_2.png'
          onClick={() => setColor("#191a1c")}
          className={`color-div ${
            color === "#191a1c" && "color-div-selected"
          } `}
        />
        <img
          src='/assets/color_3.png'
          onClick={() => setColor("#848589")}
          className={`color-div ${
            color === "#848589" && "color-div-selected"
          } `}
        />
      </div> */}
      {/*For camera container */}
      <div ref={cameraRef} className="cam-container">
        <div className="camera-header">
          <div className="icon-cam">
            <img src="/assets/icon_1.png" className="icon-cam-img" />
            <span>some info</span>
          </div>
          <div className="icon-cam">
            <img src="/assets/icon_2.png" className="icon-cam-img" />
            <span>some info</span>
          </div>
          <div className="icon-cam">
            <img src="/assets/icon_3.png" className="icon-cam-img" />
            <span>some info</span>
          </div>
        </div>
      </div>
      <div ref={displayRef} className='display-container'>
        <div className='display-header'>120Hz CrystalRes AMOLED display</div>
        <img src='/assets/PM_1.png' className='display-img' />
      </div>
      <div ref={menuRef} className='menu-container'>
        <div className='icon-container' onClick={() => setActiveState(1)}>
          <img src='/assets/color.jpg' alt='color' className='color-img-icon' />
          <div className='color-white-bg'></div>
          <div className='color-icon-text'>Coloris</div>
        </div>
        <div className='icon-container' onClick={() => setActiveState(2)}>
          <img src='/assets/home_3.png' className='camera-img-icon' />
          <div className='camera-icon-text'>Camera</div>
        </div>
        <div className='icon-container' onClick={() => setActiveState(3)}>
          <img src='/assets/home_2.png' className='ecran-img-icon' />
          <div className='ecran-icon-text'>Ecran</div>
        </div>
        <div className='icon-container' onClick={() => setActiveState(4)}>
          <img src='/assets/home_4.png' className='performance-img-icon' />
          <div className='performance-icon-text'>Performance</div>
        </div>
      </div>
      
        </div>
  
  );
}

export default App;
