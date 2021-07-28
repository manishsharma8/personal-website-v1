import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import pdf from "../images/manish_sharma.pdf"

const navItems = ["About", "Education", "Work", "Contact"]

const Navbar = () => {
  return (
    <section className="px-16 py-4 grid-cols-3 text-xl hidden lg:grid sticky top-0 bg-black z-20 border-b-2 border-gray-900">
      <div
        onClick={() => scroll.scrollToTop()}
        className="logo animate-fade-in-down delay-1000 text-2xl cursor-pointer my-auto"
      >
        Manish Sharma
      </div>
      <div className="text-white m-auto">
        <ul className="flex">
          {navItems.map(item => {
            return (
              <Link
                to={`${item.toLowerCase()}`}
                spy
                smooth
                offset={-150}
                duration={500}
              >
                <li className="animate-fade-in-down cursor-pointer mr-6 hover:text-red-500 transition ease-in">
                  {item}
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
      <div className="ml-auto">
        <a
          target="_blank"
          href={pdf}
          className="border-2 rounded px-4 py-2 hover:bg-red-500 hover:border-opacity-0 transition duration-300 ease-in"
        >
          Resume
        </a>
      </div>
    </section>
  )
}

export default Navbar
