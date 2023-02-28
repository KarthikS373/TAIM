/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react"
import { Color, Mesh } from "three"
import { TextureLoader } from "three/src/loaders/TextureLoader"

import { useFrame, useLoader } from "@react-three/fiber"

import { PUBLIC_URL } from "../../../utils/constants/variables"

import GlowMesh from "./glow-mesh"

const Earth = function (props: any) {
  const earthMesh = useRef<Mesh>(null)

  useEffect(() => {
    // ..
  }, [])

  useFrame((state, delta) => {
    // earthMesh.current.rotation.y += 0.01
  })

  const [textureMap, textureBumpMap, textureSpecMap] = useLoader(TextureLoader, [
    `${PUBLIC_URL}/model/earth.jpg`,
    `${PUBLIC_URL}/model/earth_bump.jpg`,
    `${PUBLIC_URL}/model/earth_spec.jpg`,
  ])

  return (
    <mesh {...props} ref={earthMesh}>
      <sphereGeometry args={[5, 40, 40]}></sphereGeometry>
      <meshPhongMaterial
        transparent
        map={textureMap}
        bumpMap={textureBumpMap}
        bumpScale={0.15}
        specularMap={textureSpecMap}
        specular={new Color("#909090")}
        shininess={5}
        attach={"material"}
      ></meshPhongMaterial>
      <GlowMesh scale={[1.2, 1.2, 1.2]}></GlowMesh>
    </mesh>
  )
}

export default Earth
