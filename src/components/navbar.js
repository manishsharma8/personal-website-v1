import React, { useState } from "react"
import { animateScroll as scroll, Link } from "react-scroll"
import pdf from "../images/manish_sharma.pdf"
import Hamburger from "./hamburger"
import { Helmet } from "react-helmet"

const navItems = ["About", "Education", "Work", "Contact"]

const Navbar = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  }

  const handleClickOutside = () => {
    setSideDrawerOpen(false)
  }

  return (
    <section className="px-16 py-4 grid grid-cols-2 md:grid-cols-3 text-xl sticky top-0 bg-black z-20 border-b-2 border-gray-900">
      <Helmet>
        <body className={sideDrawerOpen ? "backdrop" : ""} />
      </Helmet>
      <div
        onClick={() => scroll.scrollToTop()}
        onKeyDown={() => scroll.scrollTop()}
        className="logo animate-fade-in-down delay-1000 text-2xl cursor-pointer my-auto"
        role="button"
        tabIndex={0}
      >
        Manish Sharma
      </div>
      <div className="hidden md:block text-white m-auto">
        <ul className="flex">
          {navItems.map((item, i) => {
            return (
              <li key={i}>
                <Link
                  to={`${item.toLowerCase()}`}
                  spy
                  smooth
                  offset={-150}
                  duration={500}
                >
                  <div className="animate-fade-in-down cursor-pointer mr-6 hover:text-red-500 transition ease-in">
                    {item}
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="hidden md:flex md:ml-auto">
        <a
          target="_blank"
          rel="noreferrer"
          href={pdf}
          className="border-2 rounded px-4 py-2 hover:bg-red-500 hover:border-opacity-0 transition duration-300 ease-in"
        >
          Resume
        </a>
      </div>
      <Hamburger
        handleClickOutside={handleClickOutside}
        handleClick={drawerToggleClickHandler}
        navItems={navItems}
        open={sideDrawerOpen}
      />
    </section>
  )
}

export default Navbar
