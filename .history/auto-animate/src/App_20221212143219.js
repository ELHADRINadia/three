import React, { useRef } from 'react';
import './App.css';
import { Canvas, useFrame } from 'react-three-fiber';

const Box = () => {
  const ref = useRef<THREE.Mesh>();
  useFrame((state) => {
    // console.log(state);
    if(ref.current !== undefined) {
      ref.current.rotation.x = ref.current.rotation.y += 0.01;
    }
  });

  return(
    <mesh ref={ref}>
        <boxBufferGeometry />
        <meshBasicMaterial color="blue" />
      </mesh>
  );
}

function App() {
  return(
    <div style={{ height:'100vh', width:'100vh'}}>
      <Canvas style={{ background: 'black'}}>
      <Box />
    </Canvas>
    </div>
  );
}

export default App;
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Built on 