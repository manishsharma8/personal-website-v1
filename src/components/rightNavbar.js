import React from "react"
import { GitHub, Linkedin, Twitter } from "react-feather"

const LeftNavbar = () => {
  return (
    <div className="fixed right-16 bottom-0 flex flex-col items-center">
      <div className="mail text-lg text-gray-500 hover:text-red-500 cursor-pointer">
        <a target="_blank" href="mailto:sharmamanish8301@gmail.com">
          sharmamanish8301@gmail.com
        </a>
      </div>
      <div className="w-0.5 h-28 bottom-0 mt-16 bg-gray-500"></div>
    </div>
  )
}

export default LeftNavbar
