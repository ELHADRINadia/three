import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Skip to content
DEV Community 👩‍💻👨‍💻
Search...

Log in
Create account

5
Like
0
Jump to Comments
4
Save

0xkoji
0xkoji
Posted on 31 mai 2021

Compare React with three.js and react-three-fiber
#
react
#
typescript
#
threejs
GIFAlt Text

The following codes show the same output like above.

With threejs
import React from 'react';
import './App.css';
import * as THREE from 'three';

function App() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.innerHTML = '';
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({
    color: 'blue',
  });

  camera.position.z = 5;

  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
  })

  return(
    null
  );
}

export default App;
With react-three-fiber
GitHub logo pmndrs / react-three-fiber
🇨🇭 A React renderer for Three.js
react-three-fiber
Version Downloads Twitter Discord Open Collective ETH BTC

react-three-fiber is a React renderer for threejs.

Build your scene declaratively with re-usable, self-contained components that react to state, are readily interactive and can participate in React's ecosystem.

npm install three @react-three/fiber
Does it have limitations?
None. Everything that works in Threejs will work here without exception.

Is it slower than plain Threejs?
No. There is no overhead. Components render outside of React. It outperforms Threejs in scale due to Reacts scheduling abilities.

Can it keep up with frequent feature updates to Threejs?
Yes. It merely expresses Threejs in JSX: <mesh /> becomes new THREE.Mesh(), and that happens dynamically. If a new Threejs version adds, removes or changes features, it will be available to you instantly without depending on updates to this library.

What does it look like?
Let's make a re-usable component that has its own state, reacts to user-input and participates in the render-loop. (live
…
View on GitHub
react-three-fiber has components that allow us to use without creating each instance for scene, camera, material, mesh etc.
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
Top comments (0)

Subscribe
pic
Add to the discussion
Code of Conduct • Report abuse
Want to rep DEV and be comfy at the same time?


Check out our classic DEV shirt — available in multiple colors.

Read next
karimelghamry profile image
Using RxJS/BLoC as a state management solution for React
Karim Elghamry - Nov 25

jkettmann profile image
Data Structures In Frontend JavaScript In The Real World (With React Code Examples)
Johannes Kettmann - Nov 18

thevinitgupta profile image
Create React App is Dead?
Vinit Gupta - Nov 23

blminami profile image
Resolve `Request rate is large` (Azure CosmosDB error 16500) in NestJS
Narcisa - Nov 14


0xkoji
Follow
Never lose curiosity Software Engineer at a robotics startup in Brooklyn typescript, javascript, react, and python. code to do something weird/useless/helpful learning rust as a new journey 😎
LOCATION
Brooklyn in the United States and Tokyo in Japan
EDUCATION
New York University
WORK
Software Engineer
JOINED
24 fév. 2019
More from 0xkoji
Make Drag & Drop + DropZone with interact.js + reactjs
#typescript #react #webdev #tutorial
Use KioskBoard with Reactjs
#typescript #softwarekeyboard #npm #react
7 javascript/typescript playground
#javascript #wordpress #typescript #programming
import React from 'react';
import './App.css';
import * as THREE from 'three';

function App() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.innerHTML = '';
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({
    color: 'blue',
  });

  camera.position.z = 5;

  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
  })

  return(
    null
  );
}

export default App;
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2022.
    </div>
  );
}

export default App;
