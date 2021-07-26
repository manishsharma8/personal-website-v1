import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const navItems = ["About", "Education", "Work", "Contact"]

const Navbar = () => {
  return (
    <div className="px-16 py-6 grid grid-cols-3 text-xl">
      <AnchorLink to="/">
        <div className="logo animate-fade-in-down delay-1000 text-2xl">
          Manish Sharma
        </div>
      </AnchorLink>
      <div className="text-white mx-auto">
        <ul className="flex">
          {navItems.map(item => {
            return (
              <AnchorLink to={`#${item.toLowerCase()}`}>
                <li className="animate-fade-in-down cursor-pointer mr-6 hover:text-red-500 transition ease-in">
                  {item}
                </li>
              </AnchorLink>
            )
          })}
        </ul>
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
