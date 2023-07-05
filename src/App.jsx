import React, { useRef, Suspense, useState } from "react";
import "./App.css";
import LoaderComponent from "./Components/LoaderComponent";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PresentationControls,
  useProgress,
  Html,
} from "@react-three/drei";
import { MobileBlack } from "./Components/MobileBlack";
import { TextureLoader } from "three";
import useAnimationStore from "./Store/AnimationState";
import Animation from "./Components/Animations";
import { MdCancel } from "react-icons/md";
import { useEffect } from "react";

const Loader = () => {
  const { progress } = useProgress();
  console.log(progress);
  useEffect(() => {
    console.log(progress);
  }, [progress]);

  return (
    <Html center>
      <div className='loading-container'>
        <div className='loading-bar-container'>
          <div
            className='loading-bar'
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </Html>
  );
};

function BackgroundBox() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust the rotation speed as desired
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1000, 1000, 1000]} />
      <meshBasicMaterial
        side={2}
        map={new TextureLoader().load("/assets/back.jpg")}
      />
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
      color={activeState === 2 && !showImages ? "#000" : "#fff"}
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

  const perfContRef = useRef();
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
                  : "#000"
                : "transparent",
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 10, 10]} />
          <directionalLight intensity={1} />
          <Environment background={false} preset='apartment' />
          {activeState !== 3 && activeState !== 2 && <BackgroundBox />}
          <Suspense fallback={<Loader />}>
            <MobileBlack />
            <OrbitControls enabled={activeState !== 3} />
            <Animation perfContRef={perfContRef} menuRef={menuRef} />
          </Suspense>
        </Canvas>
      </div>

      <CancelButton showImages={showImages} setShowImages={setShowImages} />
      {activeState === 4 && (
        <div ref={perfContRef} className='performance-container'>
          <span className='performance-header'>Snapdragon® 8+ Gen 1</span>
          <span className='performance-text'>120W HyperCharge</span>
          <span className='performance-text'>Single-cell 5000mAh battery</span>
        </div>
      )}

      {/*For camera container */}
      {activeState === 2 && (
        <div className='cam-container'>
          <div className='camera-header'>
            <div className='icon-cam'>
              <img src='/assets/icon_2.png' className='icon-cam-img' />
              <span className='icon-cam-heading'>200MP</span>
              <span className='icon-cam-text'>
                1/1.37” sensor size, 1.2μm pixel size, 16-in-1
              </span>
            </div>
            <div className='icon-cam'>
              <img src='/assets/icon_1.png' className='icon-cam-img' />
              <span className='icon-cam-heading'>Ultra grand-angle</span>
              <span className='icon-cam-text'>F2.2 / POV 120</span>
            </div>
            <div className='icon-cam'>
              <img src='/assets/icon_3.png' className='icon-cam-img' />
              <span className='icon-cam-heading'>Macro</span>
              <span className='icon-cam-text'>F2.4</span>
            </div>
          </div>
        </div>
      )}

      {/*For display container */}
      {activeState === 3 && (
        <div className='display-container'>
          <div className='display-header'>120Hz CrystalRes AMOLED display</div>
          <img src='/assets/PM_1.png' className='display-img' />
        </div>
      )}

      {/*For menu container */}
      <div ref={menuRef} className='menu-container'>
        {activeState === 2 ? (
          <div className='menu-arrow-img' onClick={() => setShowImages(true)}>
            <img className='arrow-up-img' src='/assets/up.png' />
          </div>
        ) : (
          <>
            <div className='icon-container' onClick={() => setActiveState(1)}>
              <img
                src='/assets/color.jpg'
                alt='color'
                className='color-img-icon'
              />
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
              <img src='/assets/home_4.png' className='performance-img-icon' />
              <div className='performance-icon-text'>Performance</div>
            </div>
          </>
        )}
      </div>

      {/* {progress < 60 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "80vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,

            backgroundColor: "white", // Optional: Add a semi-transparent background color
          }}
        >
          
          <img
            src='/assets/load.png'
            alt='logo'
            style={{ height: "100%", objectFit: "contain" }} // Adjust the width and height as needed
          />
          <span
            style={{
              position: "absolute",
              color: "#000",
              fontSize: "4rem",
              textAlign: "center",
              bottom: "10px",
              width: "100%",
            }}
          >
            {progress.toFixed(0)}%
          </span>
        </div>
      )} */}

      {/*For gallery container */}
      {activeState === 2 && showImages && (
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
      )}
    </div>
  );
}

export default App;
