/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useRef } from "react"
import { folder, useControls } from "leva"
import { SpotLightHelper } from "three"

import { useHelper } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import CustoCamera from "../camera"
import Cloud from "../cloud"
import Earth from "../earth"

const spotlightConfig: any = {
  showHelper: {
    value: false,
  },
  intensity: {
    value: 1.2,
    min: 0,
    max: 3,
  },
  color: {
    value: "#ffffff",
  },
  position: {
    value: [-26, 11, -11],
  },
  angle: {
    value: 0.2,
    min: 0,
    max: 1,
  },
  castShadow: {
    value: false,
  },
  penumbra: {
    value: 0.4,
    min: 0,
    max: 1,
  },
  distance: {
    value: 58,
    min: 0,
    max: 300,
  },
  decay: {
    value: 1,
    min: 0,
    max: 2,
  },
}

const Scene = function (props: any) {
  const earthGrounpRef = useRef<THREE.Group>(null)
  const spotLightRef = useRef<any>(null)

  const spotlightProps = useControls({
    spotLight: folder(spotlightConfig),
  })

  useHelper(spotLightRef, spotlightProps.showHelper && SpotLightHelper)

  useFrame((state, delta) => {
    if (earthGrounpRef.current) {
      earthGrounpRef.current.rotation.y += 0.01
    }
  })

  return (
    <>
      <CustoCamera position={[0, 0, -35]} fov={40} near={0.1} far={1000} name={"per-camera"}>
        <spotLight ref={spotLightRef} {...spotlightProps}></spotLight>
      </CustoCamera>
      <ambientLight intensity={0.8} color={"#393939"}></ambientLight>
      <Suspense fallback={null}>
        <group ref={earthGrounpRef}>
          <Earth postion={[0, 0, 0]} />
          <Cloud />
        </group>
      </Suspense>
    </>
  )
}

export default Scene
