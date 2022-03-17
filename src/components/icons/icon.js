import React from "react"
import Express from "./Express"
import Redis from "./Redis"
import Twitter from "./Twitter"
import TwitterAPI from "./TwitterAPI"
import Github from "./Github"
import Linkedin from "./Linkedin"
import Graphql from "./Graphql"
import Nextjs from "./Nextjs"
import Postgresql from "./Postgresql"
import Reactjs from "./Reactjs"
import TailwindIcon from "./TailwindIcon"
import Typescript from "./Typescript"
import Redux from "./Redux"

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
    case "Reactjs":
      return (
        <IconSize size={size}>
          <Reactjs />
        </IconSize>
      )
    case "Typescript":
      return (
        <IconSize size={size}>
          <Typescript />
        </IconSize>
      )
    case "Graphql":
      return (
        <IconSize size={size}>
          <Graphql />
        </IconSize>
      )
    case "Nextjs":
      return (
        <IconSize size={size}>
          <Nextjs />
        </IconSize>
      )
    case "Postgresql":
      return (
        <IconSize size={size}>
          <Postgresql />
        </IconSize>
      )
    case "Tailwind":
      return (
        <IconSize size={size}>
          <TailwindIcon />
        </IconSize>
      )
    case "Redux":
      return (
        <IconSize size={size}>
          <Redux />
        </IconSize>
      )
    case "Redis":
      return (
        <IconSize size={size}>
          <Redis />
        </IconSize>
      )
    case "Twitter Developer API":
      return (
        <IconSize size={size}>
          <TwitterAPI />
        </IconSize>
      )
    default:
      return <IconSize size={size}>{/* <Redis /> */}</IconSize>
  }
}

export default Icon
