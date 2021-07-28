import React from "react"
import { GitHub, Linkedin, Twitter } from "react-feather"

const LeftNavbar = () => {
  return (
    <section className="fixed left-16 bottom-0 hidden lg:block">
      <ul className="grid grid-rows-3 gap-9 text-gray-500">
        <li className="hover:text-red-500 cursor-pointer ease-in transition">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/manishsharma8"
            alt="github-link"
          >
            <GitHub size={25} />
          </a>
        </li>
        <li className="hover:text-red-500 cursor-pointer ease-in transition">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/manish-sharma-472411182/"
            alt="github-link"
          >
            <Linkedin size={25} />
          </a>
        </li>
        <li className="hover:text-red-500 cursor-pointer ease-in transition">
          <Twitter size={25} />
        </li>
      </ul>
      <div className="w-0.5 h-28 mt-10 ml-2 bg-gray-500"></div>
    </section>
  )
}

export default LeftNavbar
