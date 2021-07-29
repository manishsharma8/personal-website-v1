import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ExternalLink } from "react-feather"

const Projects = () => {
  return (
    <div id="work" className="mt-36 md:mt-56">
      <div className="text-3xl md:text-4xl font-bold">Some Recent Projects</div>
      <div className="py-11 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="rounded border-2 border-gray-900 text-sm">
          <StaticImage
            className="rounded md:h-60"
            placeholder="blurred"
            src="../images/todo2.png"
          />
          <div className="m-3">
            <div className="flex">
              <div className="text-xl md:text-2xl font-bold my-4">
                Task Management App
              </div>
              <a
                className="flex ml-auto"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/manishsharma8/Todo-App"
              >
                <StaticImage
                  className="mr-3 my-auto w-8 h-8"
                  src="../images/icons8-github.svg"
                />
              </a>
              <a
                className="flex"
                target="_blank"
                rel="noreferrer"
                href="https://draggable-todo-list.netlify.app/"
              >
                <ExternalLink className="my-auto w-7 h-7 mr-2" />
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="pt-1 px-3 rounded opacity-90 bg-blue-900 text-blue-200 font-bold align-middle">
                <StaticImage
                  className="w-4 h-4 mr-1 cursor-pointer"
                  src="../images/react.svg"
                />
                React
              </div>
              <div className="pt-1 px-3 rounded opacity-90 bg-green-900 text-green-200 font-bold align-middle">
                <StaticImage
                  className="w-4 h-4 mr-1 cursor-pointer"
                  src="../images/redux-icon.svg"
                />
                Redux
              </div>
              <div className="py-1 px-3 rounded opacity-90 bg-purple-900 text-purple-200 font-bold align-middle">
                <StaticImage
                  className="w-4 h-4 mr-1 cursor-pointer"
                  src="../images/tailwindcss-icon.svg"
                />
                Tailwind CSS
              </div>
            </div>
            <div className="my-4 w-full h-0.5 rounded bg-gray-800"></div>
            <div className="mr-2 text-lg font-medium text-gray-400">
              Simple Draggable Task Management App. Add some personality to your
              task list with some emojis.
            </div>
          </div>
        </div>
        <div className="rounded border-2 border-gray-900 text-sm">
          <StaticImage
            className="rounded md:h-60"
            placeholder="blurred"
            src="../images/covid19.png"
          />
          <div className="m-3">
            <div className="flex">
              <div className="text-xl md:text-2xl font-bold my-4">
                Covid-19 Stats
              </div>
              <a
                className="flex ml-auto"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/manishsharma8/covid19-stats"
              >
                <StaticImage
                  className="ml-auto mr-3 my-auto w-8 h-8"
                  src="../images/icons8-github.svg"
                />
              </a>
              <a
                className="flex"
                target="_blank"
                rel="noreferrer"
                href="https://covid19-stats-overview.netlify.app/"
              >
                <ExternalLink className="my-auto w-7 h-7 mr-2" />
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="pt-1 px-3 rounded opacity-90 bg-blue-900 text-blue-200 font-bold align-middle">
                <StaticImage
                  className="w-4 h-4 mr-1 cursor-pointer"
                  src="../images/react.svg"
                />
                React
              </div>
              <div className="py-1 px-3 rounded opacity-90 bg-purple-900 text-purple-200 font-bold align-middle">
                <StaticImage
                  className="w-4 h-4 mr-1 cursor-pointer"
                  src="../images/tailwindcss-icon.svg"
                />
                Tailwind CSS
              </div>
            </div>
            <div className="my-4 w-full h-0.5 rounded bg-gray-800"></div>
            <div className="mr-2 text-lg font-medium text-gray-400">
              Covid-19 data visualizalized. Get to know vital details like
              deaths, recovery and vaccinations. Sort countries alphabetically
              or with number of active cases, deaths.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
