"use client"
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import { MeshTransmissionMaterial, Text } from '@react-three/drei';
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

    const materialProps = useControls("materialprops",{
        thickness: { value: 0.22, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0.3, min: 0, max: 1, step: 0.1 },
        transmission: {value: 1, min: 0, max: 1, step: 0.1},
        ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 0.1, min: 0, max: 1},
        backside: { value: true},
    })

    const tg = useControls("tg",{
        radius: { value: 10, min: 0, max: 20, step: 0.05 },
        tube: { value: 6, min: 0, max: 10, step: 0.1 },
        radialSegments: {value: 4, min: 0, max: 30, step: 0.1},
        tubularSegments: { value: 200, min: 0, max: 200, step: 0.1 },
        arc: { value: 6, min: 0, max: 6},
        
    })

  return (
    <group scale={viewport.width/8}>
        <Text 
            fontSize={0.7} 
            // font='fonts/PPNeueMontreal-Bold.otf'
            position={[0,0,-1]}
            color="white" 
            anchorX="center" 
            anchorY="middle"
            >Gwash Films</Text>
        <mesh {...props} ref={meshRef}>
            <torusGeometry
                // args={[tg.radius, tg.tube, tg.radialSegments, tg.tubularSegments, tg.arc]}
                // scale={{x:1,y:1,z:1}}
            />
            <MeshTransmissionMaterial {...materialProps}/>
            {/* <meshStandardMaterial
                color="green" 
                roughness={0.5}
                metalness={0.5}
                // side={true} 
            /> */}
        </mesh>
    </group>
  )
}

export default Model