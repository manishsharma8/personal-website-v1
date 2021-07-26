import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {} from "react-feather"
import { Link } from "gatsby"

const Projects = () => {
  return (
    <div id="work" className="mt-56">
      <div className="text-4xl font-bold">Some Recent Projects</div>
      {/* <div className="mt-20 grid grid-cols-2 gap-16">
        <Link to="http://covid19-stats-overview.netlify.app/">
          <div className="relative h-72 group cursor-pointer">
            <div className="absolute opacity-0 group-hover:opacity-100 ease-in transition rounded w-full h-full z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-11 w-11 absolute z-20 top-28 left-52"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <div className="h-full w-full rounded bg-red-400 opacity-50"></div>
            </div>
            <StaticImage
              className="absolute rounded z-0 h-full"
              placeholder="blurred"
              src="../images/covid19.png"
            />
          </div>
        </Link>
        <div>
          <div className="font-medium text-2xl opacity-90">
            Covid-19 Statistics
          </div>
          <div className="mt-6 font-medium text-lg opacity-70">
            Covid-19 data visualizalized. Get to know vital details like deaths,
            recovery and vaccinations. Sort countries alphabetically or with
            number of active cases, deaths.
          </div>
          <div className="mt-4">
            <span className="mr-3">ReactJs</span>
          </div>
          <div className="mt-10">
            <StaticImage
              className="w-11 h-11 cursor-pointer"
              src="../images/icons8-github.svg"
            />
          </div>
        </div>
      </div>

      <div className="mt-36 grid grid-cols-2 gap-16">
        <div>
          <div className="font-medium text-2xl opacity-90">
            Draggable Todo App
          </div>
          <div className="mt-6 font-medium text-lg opacity-70">
            Simple Draggable Todo App. Add some personality to your todo list
            with some emojis.
          </div>
          <div className="mt-4">
            <span className="mr-3">ReactJs</span>
            <span className="mr-3">Redux</span>
          </div>
          <div className="mt-10">
            <StaticImage
              className="w-11 h-11 cursor-pointer"
              src="../images/icons8-github.svg"
            />
          </div>
        </div>
        <Link to="http://covid19-stats-overview.netlify.app/">
          <div className="relative h-72 group cursor-pointer">
            <div className="absolute opacity-0 group-hover:opacity-100 ease-in transition rounded w-full h-full z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-11 w-11 absolute z-20 top-28 left-52"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <div className="h-full w-full rounded bg-red-400 opacity-50"></div>
            </div>
            <StaticImage
              className="absolute rounded z-0 h-full"
              placeholder="blurred"
              src="../images/covid19.png"
            />
          </div>
        </Link>
      </div> */}

      <div className="mt-20 grid grid-cols-2 gap-16">
        <div className="rounded border-2 border-gray-900 text-sm">
          <StaticImage
            className="rounded"
            placeholder="blurred"
            src="../images/covid19.png"
          />
          <div className="m-3">
            <div className="text-2xl font-bold my-4">Task Management App</div>
            <div className="flex">
              <div className="pt-1 px-3 mr-3 rounded opacity-90 bg-blue-900 text-blue-200 font-bold align-middle">
                <StaticImage
                  className="w-4 h-4 mr-1 cursor-pointer"
                  src="../images/react.svg"
                />
                React
              </div>
              <div className="pt-1 px-3 mr-3 rounded opacity-90 bg-green-900 text-green-200 font-bold align-middle">
                <StaticImage
                  className="w-4 h-4 mr-1 cursor-pointer"
                  src="../images/redux-icon.svg"
                />
                Redux
              </div>
              <div className="py-1 px-3 mr-3 rounded opacity-90 bg-purple-900 text-purple-200 font-bold align-middle">
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
            className="rounded"
            placeholder="blurred"
            src="../images/covid19.png"
          />
          <div className="m-3">
            <div className="text-2xl font-bold my-4">Covid-19 Stats</div>
            <div className="flex">
              <div className="pt-1 px-3 mr-3 rounded opacity-90 bg-blue-900 text-blue-200 font-bold align-middle">
                <StaticImage
                  className="w-4 h-4 mr-1 cursor-pointer"
                  src="../images/react.svg"
                />
                React
              </div>
              <div className="py-1 px-3 mr-3 rounded opacity-90 bg-purple-900 text-purple-200 font-bold align-middle">
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
