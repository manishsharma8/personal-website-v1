import React from "react"
import { GitHub, Linkedin, Twitter } from "react-feather"

const Socials = () => {
  return (
    <div className="flex lg:hidden gap-8 justify-center my-8">
      <span className="hover:text-red-500 cursor-pointer ease-in transition">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/manishsharma8"
          alt="github-link"
        >
          <GitHub size={28} />
        </a>
      </span>
      <span className="hover:text-red-500 cursor-pointer ease-in transition">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/manish-sharma-472411182/"
          alt="github-link"
        >
          <Linkedin size={28} />
        </a>
      </span>
      <span className="hover:text-red-500 cursor-pointer ease-in transition">
        <Twitter
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/manish832001"
          alt="twitter-link"
          size={28}
        />
      </span>
    </div>
  )
}

export default Socials
