import './App.css'
import {Canvas} from "@react-three/fiber"
import {Environment, OrbitControls, PresentationControls} from "@react-three/drei";
import {MobileBlack} from "./Components/MobileBlack";

function App() {

  return (
    <div style={{
      border: '1px solid black',
      width: '440px',
      height: '787px',
      margin: '0',
      padding: '0',
    }}>
      <Canvas style={{
        width: '440px',
        height: '787px',
        }}>
          <Environment preset="city" />
          <PresentationControls>
            <MobileBlack />
          </PresentationControls>
        
      </Canvas>

    <div style={{
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
      }}>
      <div style={{ width: '40px', height: '40px', border: "1px solid white" }}></div>
      <div style={{ width: '40px', height: '40px', border: "1px solid white" }}></div>
      <div style={{ width: '40px', height: '40px', border: "1px solid white" }}></div>
      <div style={{ width: '40px', height: '40px', border: "1px solid white" }}></div>
    </div>
    </div>
  )
}

export default App
