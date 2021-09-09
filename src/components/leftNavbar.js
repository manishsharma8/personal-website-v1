import React from "react"
import Icon from "./icons/icon"
import { socialMedia } from "../utils/config"

const LeftNavbar = () => {
  return (
    <section className="fixed left-16 bottom-0 hidden lg:block">
      <ul className="grid grid-rows-3 gap-9 text-gray-500">
        {socialMedia.map(({ name, url }, i) => (
          <li
            key={i}
            className="hover:text-red-500 cursor-pointer ease-in transition"
          >
            <a target="_blank" rel="noreferrer" href={url} alt={name}>
              <Icon name={name} />
            </a>
          </li>
        ))}
      </ul>
      <div className="w-0.5 h-28 mt-10 ml-2 bg-gray-500"></div>
    </section>
  )
}

export default LeftNavbar
