"use client"

import Lottie from "lottie-react"

import tractor from "../data/tractor.json"

const Tractor = () => {
  return (
    <Lottie
      className="absolute bottom-2 w-2/3 self-center lg:w-fit"
      animationData={tractor}
    />
  )
}

export default Tractor
