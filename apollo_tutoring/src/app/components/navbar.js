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
    <div className='flex flex-row h-full align-middle items-center font-headFont	text-2xl'>
    <Link href="/" className='h-full w-fit'><img src= "images/main_logo.png" className="hover:cursor-hover h-full ms-5 md:hidden lg:block xl:me-8"/></Link>
    <h5 className='text-white  tracking-wider ms-3'>APOLLO TUTORING</h5>
    </div>
    <button>
      <img src= {"/" + navImage } className='w-10 md:hidden ms-4 me-5' onClick={changeNav} ></img>
    </button>
    {showNavbar &&
    <div className ="flex flex-col md:flex-row md:me-3 md:relative fixed top-20 md:top-0 h-screen md:h-auto w-screen md:w-auto items-center right-auto left-auto md:left-0 md:right-0 z-40 active bg-nav_colour gap-0" id = "nav-elements">
      <Link href = "/" className = {path === '/' ? 'active nav-element' : 'nav-element'}>
        Home
      </Link>
      <Link href = "#about-us" className = "nav-element">
        About Us
      </Link>
      {/*
      <Link href = "#testimonials" className = "nav-element">
        Testimonials
      </Link>
      */}
      <Link href = "#our-experiences" className = "nav-element">
        Our Experiences
      </Link>
      <Link href = "#contact-us" className = "nav-element">
        Contact Us
      </Link>
   </div>
    }

  </nav>
)
}