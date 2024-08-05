import React from "react"
import { servicesData } from "@/data/data-services"

import SectionHeader from "./section-header"

const Services = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 px-4 py-10 lg:px-40">
      <SectionHeader title="Services" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service) => (
          <div
            className="flex w-full flex-col justify-between gap-2 rounded-md border border-primary p-5 md:w-fit"
            key={service.title}
          >
            <h4 className="text-lg font-semibold">{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
