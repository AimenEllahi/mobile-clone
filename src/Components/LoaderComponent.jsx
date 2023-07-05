import { useProgress, Html } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";

const LoaderComponent = ({ setProgress }) => {
  const { progress } = useProgress();
  console.log(progress);

  useEffect(() => {
    console.log(progress);
    setProgress(progress);
  }, [progress]);

  return (
    <Html>
      <div></div>
    </Html>
  );
};

export default LoaderComponent;
