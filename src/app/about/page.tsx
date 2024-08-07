import React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import Process from "@/components/process"
import Values from "@/components/values"

const AboutPage = () => {
  return (
    <div className="mt-20 flex min-h-screen flex-col items-start justify-between">
      <div className="flex flex-col items-center justify-between gap-10 px-4 py-10 md:py-0 lg:h-screen lg:flex-row lg:px-40">
        <section className="w-full space-y-10 lg:w-1/2">
          <h1 className="text-5xl font-bold text-primary">
            Welcome to Doug&apos;s Tractors Works!
          </h1>
          <p className="text-lg">
            We specialize in providing comprehensive tractor services to meet
            all your agricultural and land management needs. Our skilled team is
            dedicated to delivering high-quality services, including weed
            abatement, loader work, field mowing, plowing, and much more. With
            our expertise and state-of-the-art equipment, we ensure your land is
            maintained to the highest standards.
          </p>
          <p className="text-lg">
            Whether you&apos;re managing a small plot or a large estate,
            Doug&apos;s Tractor Works is here to help you achieve your goals
            efficiently and effectively.
          </p>
          <Button className="text-base">Call For More Information</Button>
        </section>
        <Image
          width={4032}
          height={3024}
          className="w-full rounded-md lg:w-1/2"
          src={"/dougontractor.jpeg"}
          alt="about image"
        />
      </div>
      <Values />
      <Process />
    </div>
  )
}

export default AboutPage
