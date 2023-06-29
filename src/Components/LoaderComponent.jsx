import React from "react";

import { useProgress, Html } from "@react-three/drei";

const LoaderComponent = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        border: "1px solid black",
        margin: "0",
        padding: "0",
        transform: "translate(-80%, -50%)",
      }}
      >
        <img
            src="/assets/load.png"
            alt="logo"
            style={{ position: "absolute", width: "100%", height: "100%"}}
            />
        <span
          style={{
            position: "relative",
            color: "#000",
            fontSize: "4rem",
            textAlign: "center",
            height: "10%",
          }}
        >
          {" "}
          {progress.toFixed(0)} %
        </span>
      </div>
    </Html>
  );
};

export default LoaderComponent;
