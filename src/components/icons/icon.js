import React from "react"
import Express from "./Express"
import Redis from "./Redis"
import Twitter from "./Twitter"
import Github from "./Github"
import Linkedin from "./Linkedin"

const IconSize = ({ size, children }) => {
  return (
    <div className={`${size === "small" ? "w-4 h-4" : "w-7 h-7"}`}>
      {children}
    </div>
  )
}

const Icon = ({ name, size }) => {
  switch (name) {
    case "Github":
      return (
        <IconSize size={size}>
          <Github />
        </IconSize>
      )
    case "Linkedin":
      return (
        <IconSize size={size}>
          <Linkedin />
        </IconSize>
      )
    case "Twitter":
      return (
        <IconSize size={size}>
          <Twitter />
        </IconSize>
      )
    case "Express":
      return (
        <IconSize size={size}>
          <Express />
        </IconSize>
      )
    default:
      return (
        <IconSize size={size}>
          <Redis />
        </IconSize>
      )
  }
}

export default Icon
