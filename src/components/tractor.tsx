"use client"

import Lottie from "lottie-react"

import tractor from "../data/tractor.json"

const Tractor = () => {
  return <Lottie className="absolute bottom-2" animationData={tractor} />
}

export default Tractor
