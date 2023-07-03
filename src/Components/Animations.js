import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useThree } from "@react-three/fiber";
import useAnimationStore from "../Store/AnimationState";

export default function Animations({
  perfContRef,
  menuRef,
  colorContRef,
  displayRef,
  cameraRef
}) {
  const activeState = useAnimationStore((state) => state.activeState);
  const { camera } = useThree();
  useEffect(() => {
    console.log(activeState);
    switch (activeState) {
      case 0:
        gsap.to(camera.position, {
          duration: 1,
          x: 0,
          y: 0,
          z: -5,
          onStart: () => {
            perfContRef.current.style.zIndex = -1;

            displayRef.current.style.zIndex = -1;
            gsap.to(menuRef.current, {
              duration: 1,
              y: 0,
            });
          },
        });
        break;
      case 1:
        gsap.to(menuRef.current, {
          duration: 1,
          y: 200,
        });
        break;
      case 2:
        setTimeout(() => {
          cameraRef.current.style.zIndex = 5;
        }, 800);

        gsap.to(menuRef.current, {
          duration: 1,
          y: 200,
        });
        break;
      case 3:
        setTimeout(() => {
          displayRef.current.style.zIndex = 5;
        }, 800);

        gsap.to(menuRef.current, {
          duration: 1,
          y: 200,
        });
        break;
      case 4:
        gsap.to(camera.position, {
          duration: 1,
          z: -3.5,
          onComplete: () => {
            perfContRef.current.style.zIndex = 5;
          },
        });
        break;
      default:
        break;
    }
  }, [activeState]);
  return null;
}
