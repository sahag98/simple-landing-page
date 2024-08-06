import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"
import Services from "@/components/services"
import Tractor from "@/components/tractor"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-4 px-4 text-center lg:h-screen">
        <h1 className="text-start text-5xl font-bold sm:text-5xl md:text-6xl lg:text-center lg:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-[42rem] text-start leading-normal text-muted-foreground sm:text-xl sm:leading-8 lg:text-center">
          {siteConfig.description}
        </p>
        <div className="flex w-full flex-col justify-center gap-2 lg:flex-row">
          <Link
            href={`tel:${siteConfig.links.tel}`}
            target="_blank"
            className={cn(
              buttonVariants({ size: "lg" }),
              "text-base font-bold"
            )}
          >
            CALL FOR QUOTE
          </Link>

          <Link
            href={`tel:${siteConfig.links.tel}`}
            target="_blank"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "text-sm  font-bold lg:text-lg"
            )}
          >
            View our Best Work
          </Link>
          <Tractor />
          <Link
            href={"mailto:dpistone10@yahoo.com"}
            className="absolute bottom-4 right-4 flex items-center gap-2"
          >
            <Icons.email className="h-6 w-6" />
            <span className="text-sm font-medium">dpistone10@yahoo.com</span>
          </Link>
        </div>
      </div>
      <div className="flex min-h-[50vh] w-full  items-center justify-between gap-3 bg-secondary px-4 py-10 lg:px-40">
        <section className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold lg:text-5xl">
            From Field to Finish!
          </h2>
          <p className="lg:text-2xl">
            Your Affordable Go-To for All Things Tractor
          </p>
          <Link
            href={`tel:${siteConfig.links.tel}`}
            target="_blank"
            className={cn(buttonVariants({ variant: "link" }), "text-lg")}
          >
            Learn More
          </Link>
        </section>
        <Image
          src={siteConfig.logo}
          width={502}
          height={497}
          alt="about-image"
        />
      </div>
      <Services />
      <FAQ />
      <Footer />
    </main>
  )
}
