import { ContactShadows, Environment, OrbitControls, Reflector, Text, useTexture } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from "three"
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette, Glitch } from '@react-three/postprocessing'
import { useControls } from 'leva'


const Floor = () =>{
  return (
    <mesh rotation={[-Math.PI/2, 0, 0]} position={[-2, -2, 0]}>
      <planeGeometry args={[100, 100]}/>
      <meshStandardMaterial color="white"/>
    </mesh>
  )
}

function Ground() {
  const [floor, normal] = useTexture(['/images/SurfaceImperfections003_1K_var1.jpg', '/images/SurfaceImperfections003_1K_Normal.jpg'])
  return (
    <Reflector blur={[400, 100]} resolution={512} args={[10, 10]} mirror={0.5} mixBlur={6} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      {(Material, props) => <Material color="#a0a0a0" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={new THREE.Vector2(2,2)} {...props} />}
    </Reflector>
  )
}

function VideoText(props) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/videos/gwash.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return (
    <Text 
    // font="/Inter-Bold.woff" 
    fontSize={3}
    fontWeight={800} 
    letterSpacing={-0.06} 
    {...props}

    >
      Gwash
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
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
    <mesh  position={[0, 1.3, -2]}  scale={new THREE.Vector3(0.2,0.2,0.2)}>
      <planeGeometry args={[15, 9]} />
      <meshStandardMaterial emissive="white" side={THREE.DoubleSide}>
        {/* standard mapping */}
        <videoTexture attach="map" args={[video]}/>
        {/* emit even if no lights */}
        {/* <videoTexture attach="emissiveMap" args={[video]}/> */}
      </meshStandardMaterial>
    </mesh>
  )
}



const Scene = () => {
 

  const ctrl = useControls("fog",{
    near: { value: 0.7, min: 0, max: 30, step: 0.5 },
    far: { value: 30, min: 0, max: 30, step: 0.5 },
  })

  const cam = useControls("camera",{
    x: { value: 0, min: 0, max: Math.PI, step: 0.1 },
    y: { value: 0, min: 0, max: Math.PI, step: 0.1 },
    z: { value: 0, min: 0, max: Math.PI, step: 0.1 },
  })

  const pos = useControls("cameraPosition",{
    x: { value: -8, min: -10, max: 20, step: 0.5 },
    y: { value: 7, min: -10, max: 20, step: 0.5 },
    z: { value: 12, min: -10, max: 20, step: 0.5 },
  })

  return (
    <Canvas shadows 
    style={{backgroundColor:"black"}} 
    camera={{ position: [pos.x, pos.y,pos.z], fov: 15 }} 
    
    gl={{ alpha: false }} 
    pixelRatio={[1, 1.5]}
    >
      <OrbitControls maxPolarAngle={Math.PI /2} minPolarAngle={0}/>
      {/* <fog attach="fog" args={['black', 5, 40]} /> */}
      <fog attach="fog" args={['black', ctrl.near, ctrl.far]} />
      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          <VideoText position={[0, 1.3, -2]} rotation={[cam.x,cam.y,cam.z]} />
          {/* <TV/> */}
          <Ground />
        </group>
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={0.3} />
        <directionalLight position={[-50, 0, -40]} intensity={0.7} />
      </Suspense>




      {/* <Floor/> */}
      
    </Canvas>
  )
}

export default Scene