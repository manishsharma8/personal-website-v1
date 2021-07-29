import React from "react"
import Navbar from "./navbar"
import Hero from "./hero"
import About from "./about"
import Projects from "./projects"
import Education from "./education"
import LeftNavbar from "./leftNavbar"
import RightNavbar from "./rightNavbar"
import Contact from "./contact"
import Socials from "./socials"
import Footer from "./footer"

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <LeftNavbar />
        <div className="lg:mx-16 my-6">
          <div className="pt-16 sm:px-5 xl:px-40 lg:px-20 mx-12">
            <Hero />
            <About />
            <Education />
            <Projects />
            <Contact />
            <Socials />
            <Footer />
          </div>
        </div>
        <RightNavbar />
      </div>
    </>
  )
}

export default Layout
