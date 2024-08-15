import React from "react"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import Process from "@/components/process"
import Values from "@/components/values"

const AboutPage = () => {
  return (
    <div className="mt-20 flex min-h-screen flex-col items-start justify-between">
      <div className="flex flex-col items-center justify-between gap-10 px-4 py-10 md:py-0 lg:h-screen lg:flex-row lg:px-40">
        <section className="w-full space-y-10 lg:w-1/2">
          <h1 className="text-5xl font-bold text-primary">
            Welcome to {siteConfig.name}
          </h1>
          <p className="text-lg">
            Long and detailed description about his this business started, who
            started it, and any other information you would like to add.
          </p>
          <p className="text-lg">Simple mission statement here.</p>
          <Button className="text-base">Primary Action</Button>
        </section>
        <Image
          src={"/about-placeholder.png"}
          width={1000}
          height={1000}
          alt="about placeholder"
          className="rounded-lg object-cover lg:w-1/2"
        />
      </div>
      <Values />
      <Process />
    </div>
  )
}

export default AboutPage
