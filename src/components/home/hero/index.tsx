import React from "react"

import { ResizeObserver } from "@juggle/resize-observer"
import { Canvas } from "@react-three/fiber"

import Scene from "../../three/scene"

const Hero = () => {
  return (
    <section className="w-full overflow-hidden">
      <Canvas resize={{ polyfill: ResizeObserver }}>
        <Scene></Scene>
      </Canvas>
    </section>
  )
}

export default Hero
