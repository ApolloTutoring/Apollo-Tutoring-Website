"use client"

import React, {useEffect, useState, useRef} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation.js'

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
    if (window.innerWidth > MOBILE_WIDTH){
      useEffect(()=>{
        activate_nav(true);
      }, [])
    }
    else if (window.innerWidth <= MOBILE_WIDTH) {
      useEffect(()=>{
        activate_nav(false);
      }, [])
    }
    useEffect(() => {
      window.addEventListener("resize", () => {
        if (window.innerWidth > MOBILE_WIDTH) {
            activate_nav(true);
        }
        else {
          activate_nav(false)
        }
    })
    }, [])
}
        
  return(
  <nav className="max-w-full bg-nav_colour flex justify-between items-center m-0 lg:px-3 h-20 pt-4 pb-2 border-0 sticky md:relative left-0 right-0 top-0 z-40">
    <Link href="/" className='h-full w-fit'><img src= "images/main_logo.png" className="h-full ms-5 md:hidden lg:block xl:me-8"/></Link>
    <button>
      <img src= {"/" + navImage } className='w-10 md:hidden ms-4 me-5' onClick={changeNav} ></img>
    </button>
    {showNavbar &&
    <div className ="flex flex-col md:flex-row md:me-3 md:relative fixed top-20 md:top-0 h-screen md:h-auto w-screen md:w-auto items-center right-auto left-auto md:left-0 md:right-0 z-40 active bg-nav_colour gap-0" id = "nav-elements">
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