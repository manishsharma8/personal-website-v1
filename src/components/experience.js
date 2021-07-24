import React from "react"

const Experince = () => {
  return (
    <section class="mt-52 text-white body-font overflow-hidden">
      <div className="text-4xl font-bold">Education</div>
      <div class="py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-800">
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-gray-100">
                Bachelor of Technology <br />
                (Computer Science)
              </span>
              <span class="mt-1 text-gray-500 text-sm">
                2019-2023 (Projected)
              </span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-100 title-font mb-2">
                Bennett University
                <span className="text-base ml-4">(Current CGPA: 8.44)</span>
              </h2>
              <p class="leading-relaxed text-gray-400">
                <span class="text-gray-300">Relevant coursework:</span> <br />
                CSE105: Computational Thinking and Programming <br /> CSE215:
                Data Structures
                <br />
                CSE214: Design and Analysis of Algorithms
                <br />
                CSE209: Discrete Mathematical Structures
                <br />
                CSE231: Probability and Statistics
                <br />
                CSE211: Information Management Systems <br />
                CSE220: Operating Systems <br />
                CSE216: Computer Networks
                <br />
                CSE235: Design Thinking and Innovation
              </p>
            </div>
          </div>
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-gray-100">
                Middle & High School
              </span>
              <span class="mt-1 text-gray-500 text-sm">March 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-100 title-font mb-2">
                Blue Bells Public School
              </h2>
              <p class="leading-relaxed text-gray-400">
                Completed my schooling from Blue Bells Public School located in
                Gurgaon, Haryana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experince
