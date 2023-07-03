import { useProgress, Html } from "@react-three/drei";
import { useControls } from "leva";

const LoaderComponent = () => {
  const { progress } = useProgress();
  

  return (
    <Html>
      <div
        style={{
          minWidth: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid red",
          backgroundColor: "white", // Optional: Add a semi-transparent background color
        }}
      >
        {/* Loader content */}
        <img
          src="/assets/load.png"
          alt="logo"
          style={{ width: "100%", height: "auto" }} // Adjust the width and height as needed
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
    </Html>
  );
};

export default LoaderComponent;
