import React from "react"
import Navbar from "./navbar"
import Hero from "./sections/hero"
import About from "./sections/about"
import Projects from "./sections/projects"
import Education from "./sections/education"
import LeftNavbar from "./leftNavbar"
import RightNavbar from "./rightNavbar"
import Contact from "./sections/contact"
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
