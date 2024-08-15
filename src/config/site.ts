import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Business Name",
  author: "Doug's Tractor Works",
  logo: "/LOGO.png",
  description:
    "Simple description about what you do and how that will help your clients.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://rdev.pro",
  },
  links: {
    tel: "310-850-9926",
    github: "https://github.com/redpangilinan/next-entree",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
