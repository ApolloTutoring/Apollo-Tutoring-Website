"use client"

import React, {useEffect, useState, useRef} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation.js'
import { useWindowDimensions } from './window'

export function NavBar() {
  const path = usePathname()
  const [showNavbar, setShowNavbar] = useState(true)
  const [navImage, setNavImage] = useState("burger-menu.svg")
  const MOBILE_WIDTH = 768

  const changeNav = () => {
    setShowNavbar(!showNavbar);
    if (showNavbar) {
      setNavImage("burger-menu.svg")
    }
    else {
      setNavImage("close-x.svg")
    }
    
  };
  function activate_nav(bool) {
    setShowNavbar(bool)
    if (!bool) {
      setNavImage("burger-menu.svg")
    }
    else {
      setNavImage("close-x.svg")
    }
  }
  
  if (typeof window !== "undefined") {
    const prevWidth = useRef(window.innerWidth)
    if (prevWidth.current <= MOBILE_WIDTH) {
      useEffect(() => activate_nav(false), [])
    }
    useEffect(() => {
      const handleResize = () => {
        const currWidth = window.innerWidth
        if (currWidth <= MOBILE_WIDTH && prevWidth.current > MOBILE_WIDTH){
          activate_nav(false)
        } else if (currWidth > MOBILE_WIDTH && prevWidth.current <= MOBILE_WIDTH) {
          activate_nav(true)
        }
        prevWidth.current = currWidth
      }
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])
  }
        
  return(
  <nav className="max-w-full bg-nav_colour flex md:justify-center justify-around items-center m-0 lg:px-3 h-20 pt-4 pb-2 border-0 sticky md:relative left-0 right-0 top-0 z-40">
    <Link href="/" className='h-full w-fit'><img src= "/logo/Logo.png" className="h-full md:hidden lg:block xl:me-8"/></Link>
    <button>
      <img src= {"/" + navImage } className='w-10 md:hidden ms-4 focus:' onClick={changeNav} ></img>
    </button>
    {showNavbar &&
    <div className ="flex flex-col md:flex-row md:me-3 md:relative fixed top-20 md:top-0 h-screen md:h-auto w-screen md:w-auto items-center right-auto left-auto md:left-0 md:right-0 z-40" id = "nav-elements">
      <Link href = "/" className = {path === '/' ? 'active nav-element' : 'nav-element'}>
        Home
      </Link>
      <Link href = "/about-us" className = {path === '/about-us' ? 'active nav-element' : 'nav-element'}>
        About Us
      </Link>
      <Link href = "/our-initiatives" className = {path === '/our-initiatives' ? 'active nav-element' : 'nav-element'}>
        Our Initiatives
      </Link>
      <Link href = "/contact-us" className = {path === '/contact-us' ? 'active nav-element' : 'nav-element'}>
        Contact Us
      </Link>
   </div>
    }

  </nav>
)
}