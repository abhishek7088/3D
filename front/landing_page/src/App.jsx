import { Canvas } from '@react-three/fiber';
import './App.css';
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene';
import React from 'react';

function App() {
  return (
    <>
      <Canvas camera={{ fov: 40 }}>
        {/* OrbitControls with restrictions */}
        <OrbitControls 
          enableZoom={false}    // Disable zooming with scroll
          enablePan={false}     // Disable panning (right-click drag)
          minPolarAngle={Math.PI / 2}   // Prevent rotation above (limits vertical rotation)
          maxPolarAngle={Math.PI / 2}   // Prevent rotation below
        />
        <ambientLight />
        <Scene />
      </Canvas>

      {/* Some additional content outside the 3D canvas */}
      <div className='w-full h-full text-center text-4xl font-bold py-32'>
        Hi everyone
      </div>
    </>
  );
}

export default App;
