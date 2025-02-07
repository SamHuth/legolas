import { IconComponent } from "evergreen-ui"
import { ReactNode } from "react"

type FormError = {
  error: boolean,
  message: string,
}

type MenuItem = {
  name: string
  url: string,
  icon: IconComponent
}


export { FormError, MenuItem }
