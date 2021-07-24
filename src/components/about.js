import React from "react"

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
    <div id="about" className="mt-56 grid grid-cols-3">
      <div className="col-start-1 col-end-3">
        <div className="text-4xl font-bold">About Me</div>
        <div className="mt-16 text-xl leading-relaxed opacity-60">
          Culpa tempor tempor irure non cupidatat duis nostrud incididunt
          pariatur aliquip occaecat voluptate. Est duis magna sit mollit ea
          reprehenderit enim aute. Nulla quis incididunt nostrud aliquip magna
          dolore ut cupidatat aute. In labore sint aliquip duis dolore. Nulla
          consequat occaecat ullamco anim culpa pariatur. Veniam nostrud magna
          laboris deserunt fugiat adipisicing sunt ipsum consectetur amet
          dolore.
        </div>
        <div className="grid grid-cols-3 mt-8 gap-3 opacity-60">
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
      <div></div>
    </div>
  )
}

export default About
