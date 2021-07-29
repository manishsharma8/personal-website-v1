import React, { useEffect, useRef } from "react"
import SideDrawer from "./sideDrawer"

function useOutsideAlerter(ref, props) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        props.handleClickOutside()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, props])
}

const Hamburger = props => {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, props)
  return (
    <>
      <div ref={wrapperRef} id="sideDrawer" className="md:hidden ml-auto">
        <SideDrawer
          onLinkClick={props.handleClickOutside}
          navItems={props.navItems}
          open={props.open}
        />
        <div
          role="button"
          tabIndex={0}
          onClick={props.handleClick}
          onKeyDown={props.handleClick}
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 mt-2 bg-white"></div>
          <div className="w-6 h-0.5 mt-2 bg-white"></div>
        </div>
      </div>
      {props.open ? (
        <div className="fixed top-0 left-0 h-full w-full bg-gray-900 opacity-80"></div>
      ) : null}
    </>
  )
}

export default Hamburger
