import { Canvas } from '@react-three/fiber'

import React from 'react'
import Model from './Model'
import { Environment, OrbitControls } from '@react-three/drei'

const Scene = () => {
  return (
    <Canvas style={{backgroundColor:"black"}}>
      <OrbitControls/>

      <directionalLight intensity={3} position={[0,3,2]}/>
      <Environment preset="city"/>
      
        <Model/>
    </Canvas>
  )
}

export default Scene