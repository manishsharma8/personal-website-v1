import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const skills = [
  "ReactJs",
  "Typescript",
  "NodeJs",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "C++",
  "Python",
  "Git",
]

const About = () => {
  return (
    <div id="about" className="mt-56 grid grid-cols-1 lg:grid-cols-3 gap-14">
      <div className="col-start-1 col-end-3">
        <div className="text-3xl lg:text-4xl font-bold">About Me</div>
        <div className="mt-7 md:mt-16 text-lg md:text-xl leading-relaxed text-gray-400">
          Hey! I am Manish Sharma, I love building things for web. I am a self
          taught programmer with 4+ years of writing clean code. Currently a
          middler at Bennett University. Constantly looking for new
          opportunities and pushing myself out of my comfort zone.
          <br />
          <br />
          Few technologies I have been working with recently:
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 mt-5 md:mt-8 gap-3 text-gray-400">
          {skills.map(skill => {
            return (
              <div>
                <span className="mr-2 text-red-500">▹</span>
                {skill}
              </div>
            )
          })}
        </div>
      </div>
      <div className="my-auto relative group">
        <StaticImage
          placeholder="blurred"
          className="my-auto w-64 h-64 rounded absolute z-10"
          src="../images/profilepic.jpeg"
        />
        <div className="border-4 border-red-500 w-64 h-64 absolute top-8 left-8 rounded hover:translate-x-2"></div>
      </div>
    </div>
  )
}

export default About
