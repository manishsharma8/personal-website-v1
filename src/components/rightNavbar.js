import React from "react"

const LeftNavbar = () => {
  return (
    <section className="fixed right-16 bottom-0 flex-col items-center hidden lg:flex">
      <div className="mail text-lg text-gray-500 hover:text-red-500 cursor-pointer">
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:sharmamanish8301@gmail.com"
        >
          sharmamanish8301@gmail.com
        </a>
      </div>
      <div className="w-0.5 h-28 bottom-0 mt-10 bg-gray-500"></div>
    </section>
  )
}

export default LeftNavbar
