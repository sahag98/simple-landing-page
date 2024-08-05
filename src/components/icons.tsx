import { Command, Mail, Moon, SunMedium, Tractor } from "lucide-react"

export type IconKeys = keyof typeof icons

type IconsType = {
  [key in IconKeys]: React.ElementType
}

const icons = {
  logo: Command,
  tractor: Tractor,
  email: Mail,
  sun: SunMedium,
  moon: Moon,
}

export const Icons: IconsType = icons
