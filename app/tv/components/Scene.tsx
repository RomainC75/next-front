import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import * as THREE from "three"

const Floor = () =>{
  return (
    <mesh rotation={[-Math.PI/2, 0, 0]} position={[-2, -2, 0]}>
      <planeGeometry args={[100, 100]}/>
      <meshStandardMaterial color="white"/>
    </mesh>
  )
}

const TV = () =>{
  
  const [video] = useState(()=>{
    const vid = document.createElement("video");
    vid.src = "/videos/gwash.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  })
  
  return (
    <mesh  position={[0, 0, -2]}>
      <planeGeometry args={[5, 5]}/>
      <meshStandardMaterial color="white" side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]}/>
        <videoTexture attach="emissiveMap" args={[video]}/>
      </meshStandardMaterial>
    </mesh>
  )
}

const Scene = () => {
  return (
    <Canvas style={{backgroundColor:"black"}}>
      <OrbitControls maxPolarAngle={Math.PI /2} minPolarAngle={0}/>
      
      <directionalLight intensity={3} position={[0,3,2]}/>
      {/* <fog attach="fog" args={["black", 1, 7]}/> */}

       {/* it will render nothing until it's done loading */}
      <Suspense fallback={null}>
        <TV/>
      </Suspense>
      <Floor/>
    </Canvas>
  )
}

export default Scene