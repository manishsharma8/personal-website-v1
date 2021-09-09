import React from "react"
import { email } from "../../utils/config"

const Hero = () => {
  return (
    <>
      <div className="text-lg md:text-xl lg:text-2xl text-gray-300">
        Hi 👋 , my name is
      </div>
      <div className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold">
        Manish Sharma,
      </div>
      <div className="mt-3 md:mt-6 text-4xl md:text-6xl lg:text-7xl font-bold opacity-70">
        I build and design stuff.
      </div>
      <div className="mt-8 text-lg md:text-xl lg:text-2xl text-gray-400">
        I'm an India-based self taught Web Developer with an interest in
        Computer Science. Currently exploring different opportunities and side
        projects. I like to build scalable apps with great user experience.
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href={`mailto:${email}`}
        className="inline-block mt-10 bg-red-500 px-5 py-3 text-lg md:text-xl rounded hover:scale-105 transition ease-in-out duration-100 transform"
      >
        Get In Touch
      </a>
    </>
  )
}

export default Hero
