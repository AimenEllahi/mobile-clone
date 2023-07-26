import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useThree } from "@react-three/fiber";
import useAnimationStore from "../Store/AnimationState";

export default function Animations({ menuRef }) {
  const activeState = useAnimationStore((state) => state.activeState);
  const { camera } = useThree();
  useEffect(() => {
    switch (activeState) {
      case 0:
        gsap.to(camera.position, {
          duration: 1,
          x: 0,
          y: 0,
          z: -5,
          delay: 0.5,
          ease: "power4.easeOut",
          onStart: () => {
            gsap.to(menuRef.current, {
              duration: 1,
              y: 0,
            });
          },
        });
        break;
      case 1:
        gsap.to(menuRef.current, {
          duration: 2,
          delay: 0.5,
          ease: "power4.easeOut",
          y: 200,
        });

        break;
      case 2:
        menuRef.current.style.zIndex = 5;

        break;
      case 3:
        gsap.to(menuRef.current, {
          duration: 1,
          y: 200,
          delay: 0.5,
          ease: "power4.easeOut",
        });
        break;
      case 4:
        gsap.to(camera.position, {
          duration: 1,
          z: -5.5,
          delay: 0.5,
          ease: "power4.easeOut",
        });
        break;
      default:
        break;
    }
  }, [activeState]);
  return null;
}
