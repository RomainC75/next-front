"use client"
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Box, MeshTransmissionMaterial, Text } from '@react-three/drei';
import { useControls } from 'leva';

const Model = (props) => {
    const {viewport} = useThree();
    const meshRef = useRef()
    useFrame(()=>{
        if (meshRef.current){
            meshRef.current.rotation.x += 0.01
            meshRef.current.rotation.y += 0.014
            meshRef.current.rotation.z += 0.002

        }
    })
  return (
    <group scale={viewport.width/8} ref={meshRef}>
     <Box>
        <meshLambertMaterial attach="material" color="white"/>
     </Box>
    </group>
  )
}

export default Model