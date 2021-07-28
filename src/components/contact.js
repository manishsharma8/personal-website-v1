import React from "react"

const Contact = () => {
  return (
    <section id="contact" className="text-white my-36 md:my-52 text-center">
      <div className="text-3xl md:text-4xl font-bold">Get In Touch</div>
      <p className="mt-8 text-lg md:text-xl px-8 lg:px-32 text-gray-400">
        Currently open to Full-stack roles. Got any questions? Or just wanna
        drop in to say Hi! Feel free to reach out, my inbox is always open.
      </p>
      <span className="mt-10 flex align-middle justify-center">
        {/* <div className="flex px-2"> */}
        <button className="text-lg md:text-2xl px-5 py-2 border-2 rounded hover:bg-red-500 hover:border-opacity-0 ease-in transition">
          Contact
        </button>
        {/* </div> */}
      </span>
    </section>
  )
}

export default Contact
