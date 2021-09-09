import React from "react"
import Icon from "./icons/icon"
import { socialMedia } from "../utils/config"

const Socials = () => {
  return (
    <ul className="flex lg:hidden gap-8 justify-center my-8">
      {socialMedia.map(({ name, url }, i) => (
        <li
          key={i}
          className="hover:text-red-500 text-gray-500 cursor-pointer ease-in transition"
        >
          <a target="_blank" rel="noreferrer" href={url} alt={name}>
            <Icon name={name} />
          </a>
        </li>
      ))}
    </ul>
  )
}
export default Socials
