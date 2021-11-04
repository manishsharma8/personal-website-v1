import React from "react"
import { Link } from "react-scroll"
import pdf from "../images/Resume.pdf"

const sideDrawer = props => {
  return (
    <div
      id="menu"
      className={`fixed top-0 right-0 bg-black h-full w-4/6 max-w-4xl shadow-2xl z-30 ${
        !props.open
          ? "-translate-x-100 transition ease-in hidden"
          : "translate-x-0 transition ease-out"
      }`}
    >
      <ul className="px-20 py-28">
        {props.navItems.map((item, i) => {
          return (
            <li key={i}>
              <Link
                to={`${item.toLowerCase()}`}
                onClick={() => props.onLinkClick()}
                spy
                smooth
                offset={-150}
                duration={500}
              >
                <div className="animate-fade-in-down cursor-pointer mt-6 hover:text-red-500 transition ease-in">
                  {item}
                </div>
              </Link>
            </li>
          )
        })}
        <div className="mt-10">
          <a
            target="_blank"
            rel="noreferrer"
            href={pdf}
            className="border-2 rounded px-4 py-2 hover:bg-red-500 hover:border-opacity-0 transition duration-300 ease-in"
          >
            Resume
          </a>
        </div>
      </ul>
    </div>
  )
}
export default sideDrawer
