import React, { useEffect, useRef } from 'react'

import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect (() => {
    actions['Take 001'].play();
  }, []);

  useFrame((clock, camera) => {
    // Update the Y position to simulate the flight moving in sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTiime) * 0.2 + 2;
  })

  return (
    <mesh 
    position={[5, 2, 1]} 
    scale={[0.03, 0.03, 0.03]} 
    ref={birdRef}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Bird
