import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Text } from '@react-three/drei';

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
    <group scale={viewport.width/8}>
        <Text 
            fontSize={0.7} 
            // font='fonts/PPNeueMontreal-Bold.otf'
            position={[0,0,-1]}
            >MY SUPER TEXT</Text>
        <mesh {...props} ref={meshRef}>
            <dodecahedronGeometry/>
            <meshStandardMaterial
                color="green" 
                roughness={0.5}
                metalness={0.5}
                // side={true} 
            />
        </mesh>
    </group>
  )
}

export default Model