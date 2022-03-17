import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ExternalLink } from "react-feather"
import Icon from "../icons/icon"
import { projectsList } from "../projectsList"

const Projects = () => {
  return (
    <div id="work" className="mt-36 md:mt-56">
      <div className="text-3xl md:hidden md:text-4xl font-bold">
        Some Recent Projects
      </div>
      <div className="py-11 md:py-24 grid grid-cols-1 lg:grid-cols-2 grid-rows-6 gap-16">
        <div className="text-3xl hidden md:block md:text-4xl font-bold">
          Some Recent Projects
        </div>
        {projectsList.map(project => {
          return (
            <div className="rounded border-2 border-gray-900 text-sm row-span-2">
              <img
                src={`${project.demoImage}.png`}
                alt="A dog smiling in a party hat"
                className="rounded md:h-auto"
                placeholder="blurred"
              />
              <div className="m-3">
                <div className="flex">
                  <div className="text-xl md:text-2xl font-bold my-4">
                    {project.name}
                  </div>
                  <a
                    className="flex ml-auto"
                    target="_blank"
                    rel="noreferrer"
                    href={project.github}
                  >
                    <StaticImage
                      className="ml-auto mr-3 my-auto w-8 h-8"
                      src="../images/icons8-github.svg"
                    />
                  </a>
                  {project.demo ? (
                    <a
                      className="flex"
                      target="_blank"
                      rel="noreferrer"
                      href={project.demo}
                    >
                      <ExternalLink className="my-auto w-7 h-7 mr-2" />
                    </a>
                  ) : null}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map(lang => {
                    return (
                      <div className="flex py-1 px-3 rounded opacity-90 bg-gray-800 text-gray-200 font-bold">
                        <div className="my-auto mr-2">
                          <Icon name={lang} size="small" />
                        </div>
                        {lang}
                      </div>
                    )
                  })}
                </div>
                <div className="my-4 w-full h-0.5 rounded bg-gray-800"></div>
                <div className="mr-2 text-lg font-medium text-gray-400">
                  {project.desc}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
