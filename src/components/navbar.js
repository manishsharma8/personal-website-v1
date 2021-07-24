import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const navItems = ["About", "Work", "Contact"]

const Navbar = () => {
  return (
    <div className="px-16 py-6 grid grid-cols-3 text-xl">
      <div className="logo text-2xl">Manish Sharma</div>
      <div className="text-white mx-auto">
        {navItems.map(item => {
          return (
            <AnchorLink to={`#${item.toLowerCase()}`}>
              <span className="cursor-pointer mr-6 hover:text-red-500 transition ease-in">
                {item}
              </span>
            </AnchorLink>
          )
        })}
      </div>
      <div className="ml-auto">
        <a className="border-2 rounded px-4 py-2 hover:bg-red-500 hover:border-opacity-0 transition duration-300 ease-in">
          Resume
        </a>
      </div>
    </div>
  )
}

export default Navbar
