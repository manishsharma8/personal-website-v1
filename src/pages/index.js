import React from "react"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import "@fontsource/roboto"

import "../styles/global.css"

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <div className="mx-16 my-6">
        <div className="py-28 px-40 mx-12">
          <Hero />
          <About />
          <Projects />
        </div>
      </div>
    </>
  )
}

export default IndexPage
