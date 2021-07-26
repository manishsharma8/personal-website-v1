import React from "react"
import { Mail } from "react-feather"

const Contact = () => {
  return (
    <section id="contact" className="text-white my-52 text-center">
      <div className="text-4xl font-bold">Get In Touch</div>
      <p className="mt-8 text-xl px-32 text-gray-400">
        Currently open to Full-stack roles. Got any questions? Or just wanna
        drop in to say Hi! Feel free to reach out, my inbox is always open.
      </p>
      <span className="mt-10 flex align-middle justify-center">
        {/* <div className="flex px-2"> */}
        <button className="text-2xl px-5 py-2 border-2 rounded hover:bg-red-500 hover:border-opacity-0 ease-in transition">
          Contact
        </button>
        {/* </div> */}
      </span>
    </section>
  )
}

export default Contact
