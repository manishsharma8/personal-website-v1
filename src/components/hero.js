import React from "react"
import { Mail } from "react-feather"

const Hero = () => {
  return (
    <>
      <div className="text-2xl text-gray-300">
        Hi <span>👋</span>, my name is
      </div>
      <div className="mt-5 text-7xl font-bold">Manish Sharma.</div>
      <div className="mt-6 text-7xl font-bold opacity-70">
        I build things for web.
      </div>
      <div className="mt-8 text-2xl text-gray-500">
        I'm a Indian-based computer science undergrad who specializes in
        building (and occasionally designing) exceptional digital experiences.
        Currently, I'm an engineer at Upstatement focused on building
        accessible, human-centered products.
      </div>
      <button className="mt-10 bg-red-500 px-5 py-3 text-xl rounded hover:scale-105 transition ease-in-out duration-100 transform">
        Get In Touch
      </button>
      {/* <span className="flex flex-row border-2">
        <Mail />
        <div>Hello</div>
      </span> */}
    </>
  )
}

export default Hero
