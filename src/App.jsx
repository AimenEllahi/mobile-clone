import React, { useRef, Suspense, useState, useMemo } from "react";
import "./App.css";
// import LoaderComponent from "./Components/LoaderComponent";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PresentationControls,
  useProgress,
  Html,
} from "@react-three/drei";
import { ModelBlue } from "./Components/ModelBlue";
import { TextureLoader, CubeTextureLoader } from "three";
import useAnimationStore from "./Store/AnimationState";
import Animation from "./Components/Animations";
import { MdCancel } from "react-icons/md";
import { useEffect } from "react";
import Gallery from "./Components/Gallery/Gallery";
import Display from "./Components/Display/Display";
import Camera from "./Components/Camera/Camera";
import Performance from "./Components/Performance/Performance"

const Loader = ({ setProgress }) => {
  const { progress } = useProgress();

  useEffect(() => {
    setProgress(progress);
  }, [progress]);

  return (
    <Html center>
      <div className='loading-container'>
        <div
          className='loading-bar-container'
          style={{
            color: "black",
            fontSize: "1.5rem",
          }}
        >
          {progress.toFixed(0)}%
        </div>
      </div>
    </Html>
  );
};

function BackgroundBox() {
  const meshRef = useRef();

  const texture = useMemo(
    () => new TextureLoader().load("/assets/back.jpg"),
    []
  );

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust the rotation speed as desired
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1000, 1000, 1000]} />
      <meshBasicMaterial side={2} map={texture} />
    </mesh>
  );
}

function CancelButton({ showImages, setShowImages }) {
  const setActiveState = useAnimationStore((state) => state.setActiveState);
  const activeState = useAnimationStore((state) => state.activeState);

  const handleClick = () => {
    setShowImages(false);
    setActiveState(0);
  };

  return (
    <MdCancel
      size={25}
      color={activeState === 2 && !showImages ? "#000" : activeState === 3 ? "#000" : "#fff"}
      className='cancel-button'
      onClick={handleClick}
      style={{
        zIndex: activeState === 0 ? -1 : 8,
      }}
    />
  );
}

function App() {
  const setActiveState = useAnimationStore((state) => state.setActiveState);
  const activeState = useAnimationStore((state) => state.activeState);
  const [showImages, setShowImages] = useState(false);
  const [progress, setProgress] = useState(0);
 
  // const perfContRef = useRef();
  const menuRef = useRef();

  return (
    <div className='main-canvas-container'>
      <div style={{ width: "440px", height: "100vh" }}>
        <Canvas
          style={{
            zIndex: 0,
            background:
            activeState !== 0
            ? activeState === 2
            ? "#fff"
            : activeState === 3 // Check if activeState is equal to 3
            ? "#fff"           // If true, set color to "#fff"
            : "#000"
            : "transparent",
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 10, 10]} />
          <directionalLight intensity={1} />
          <Suspense fallback={<Loader setProgress={setProgress} />}>
            {activeState !== 3 && activeState !== 2 && <BackgroundBox />}
            <Environment background={false} preset='apartment' />
            <ModelBlue />
          </Suspense>
          <OrbitControls enabled={activeState !== 3} />
          <Animation perfContRef={perfContRef} menuRef={menuRef} />
        </Canvas>
      </div>

      <CancelButton showImages={showImages} setShowImages={setShowImages} />
      {/* Performance container */}
      {activeState === 4 && (
   
      <Performance  />
  
      )}

      {/*For camera container */}
      {activeState === 2 && (
        <Camera/>
      )}

      {/*For display container */}
      {activeState === 3 && (
       <Display/>
      )}

      {progress < 98 && (
        <img
          src='/assets/loader.png'
          style={{
            width: "150px",
            transform: "rotate(-45deg)",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      )}

      {/*For menu container */}
      {progress >= 98 && (
        <div ref={menuRef} className='menu-container'>
          {activeState === 2 ? (
            <div className='menu-arrow-img' onClick={() => setShowImages(true)}>
              <img className='arrow-up-img' src='/assets/up.png' />
            </div>
          ) : (
            <>
              <div className='icon-container' onClick={() => setActiveState(1)}>
                <div  className='color-img-icon'></div>
                {/* <img
                  src='/assets/color.jpg'
                  alt='color'
                  className='color-img-icon'
                /> */}
                <div className='color-white-bg'></div>
                <div className='color-icon-text'>Color</div>
              </div>
              <div className='icon-container' onClick={() => setActiveState(2)}>
                <img src='/assets/home_3.png' className='camera-img-icon' />
                <div className='camera-icon-text'>Camera</div>
              </div>
              <div className='icon-container' onClick={() => setActiveState(3)}>
                <img src='/assets/home_2.png' className='ecran-img-icon' />
                <div className='ecran-icon-text'>Display</div>
              </div>
              <div className='icon-container' onClick={() => setActiveState(4)}>
                <img
                  src='/assets/home_4.png'
                  className='performance-img-icon'
                />
                <div className='performance-icon-text'>Performance</div>
              </div>
            </>
          )}
        </div>
      )}

      {/*For gallery container */}
      {activeState === 2 && showImages && (
        <Gallery/>
      )}
    </div>
  );
}

export default App;
