import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Scene = () => {
  const texture = useTexture('./img.png');  // Load the texture
  const meshRef = useRef(null);             // Create a ref for the mesh

  // Rotate the mesh over time
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= delta;  // Rotate on the Y axis
    }
  });

  return (
    <group rotation={[0, 1, 0.6]}>
      <mesh ref={meshRef}  position={[0, 0, -1]}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} /> 
        <meshStandardMaterial map={texture} side={THREE.DoubleSide} />  
      </mesh>
    </group>
  );
};

export default Scene;
