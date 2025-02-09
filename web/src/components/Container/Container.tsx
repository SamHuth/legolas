import { ReactNode } from "react"

interface ContainerProps{
  children: ReactNode
  maxWidth?: number
}

const Container = ({children, maxWidth = 1200}:ContainerProps) => {

  return(
    <div className={`w-full h-full`} style={{maxWidth}}>
      {children}
    </div>
  )
}

export default Container
