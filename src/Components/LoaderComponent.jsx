import { useProgress, Html } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";

const LoaderComponent = () => {

  return (
    <Html>
      <div style={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        border: "1px solid black",
        top: 0,
        left: 0,
      }}>
        <h1 style={{ color: "black" }}>Loading...</h1>
        <img src="/assets/load.png" alt="" />
      </div>
    </Html>
  );
};

export default LoaderComponent;
