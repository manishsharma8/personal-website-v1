import React from "react"
import { GitHub, Linkedin, Twitter } from "react-feather"

const LeftNavbar = () => {
  return (
    <div className="fixed left-16 bottom-0">
      <ul className="grid grid-rows-3 gap-9 text-gray-500">
        <li className="hover:text-red-500 cursor-pointer ease-in transition">
          <GitHub size={25} />
        </li>
        <li className="hover:text-red-500 cursor-pointer ease-in transition">
          <Linkedin size={25} />
        </li>
        <li className="hover:text-red-500 cursor-pointer ease-in transition">
          <Twitter size={25} />
        </li>
      </ul>
      <div className="w-0.5 h-28 mt-10 ml-2 bg-gray-500"></div>
    </div>
  )
}

export default LeftNavbar
