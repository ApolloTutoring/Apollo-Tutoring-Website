'use client'
import Image from "next/image";
import { Carousel_Component } from "./components/carousel";
import Footer from "./components/footer";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { NavBar } from "./components/navbar";
import Contact from "./components/contactus";
import BookaSession from "./components/bookasession";

/*
const NavBar = dynamic(() => import('.//components/navbar.js').then((mod) => mod.NavBar), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

*/

export function Home() {

  return (
    <main className="bg-white">
      <NavBar />
      <div className="relative h-screen bg-standard_navy overflow-hidden flex flex-col items-center">
        <div className="text-center">
          <h1 className="pt-48 md:pt-32 mx-10 font-headFont text-white text-6xl lg:text-8xl">
            Time to Get <span className="text-standard_teal font-bold">Ahead</span> of the Game
          </h1>
          <h2 className="py-10 mx-10 font-paraFont text-white text-xl sm:text-3xl">
            Get <span className="font-bold text-standard_teal">FREE</span> tutoring for Math, Physics, and Chemistry today!
          </h2>
        </div>
        <div className="relative w-full flex-grow">
          <img src="/images/Untitled_design_1.jpeg" className="absolute bottom-0 top-7 left-0 right-0 mx-auto object-cover object-top overflow-clip w-2/3"></img>
        </div>
      </div>
      <div className="bg-nav_colour">
        <div className="w-full inline-flex flex-nowrap h-auto bg-nav_colour py-6 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_li]:font-paraFont [&_li]:text-white animate-infinite-scroll">
            <li>
              <span>Creativity</span>
            </li>
            <li>
              <span>Knowledge</span>
            </li>
            <li>
              <span>Potential</span>
            </li>
            <li>
              <span>Unlocked</span>
            </li>
            <li>
              <span>Passion</span>
            </li>
            <li>
              <span>Determination</span>
            </li>
            <li>
              <span>Expertise</span>
            </li>
            <li>
              <span>Mastery</span>
            </li>
            <li>
              <span>Cognition</span>
            </li>
            <li>
              <span>Commitment</span>
            </li>
            <li>
              <span>Patience</span>
            </li>

          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_li]:font-paraFont [&_li]:text-white animate-infinite-scroll" aria-hidden="true">
            <li>
              <span>Creativity</span>
            </li>
            <li>
              <span>Knowledge</span>
            </li>
            <li>
              <span>Potential</span>
            </li>
            <li>
              <span>Unlocked</span>
            </li>
            <li>
              <span>Passion</span>
            </li>
            <li>
              <span>Determination</span>
            </li>
            <li>
              <span>Expertise</span>
            </li>
            <li>
              <span>Mastery</span>
            </li>
            <li>
              <span>Cognition</span>
            </li>
            <li>
              <span>Commitment</span>
            </li>
            <li>
              <span>Patience</span>
            </li>
          </ul>
        </div>
      </div>
      <div id="about-us" className="grid grid-cols-1 lg:grid-cols-3 lg:mx-10 my-10 h-fit">
        <div className="lg:col-span-2 px-7">
          <h2 className="text-nav_colour h2">About Us</h2>
          <p className="font-paraFont text-black mx-10 xl:mx-24">Learning course content can be difficult for many students, especially with their commitments outside of school. Students in high school need to balance their academics, extracurriculars, and a job all at once, which means that they often need to get ahead on course material before the school year begins. We offer online lessons and homework help to high school students to help jump-start their knowledge on both math and science courses. Our aim is to help students from Grades 9 to 11 with the transition from one grade to another, and facilitate the creation of strong technical skills to help them succeed. </p>
        </div>
        <div>
          <img src="images/orange_planet.png" className=" px-5 max-w-full w-96 mx-auto"/>
        </div>
      </div>
      <div className="bg-standard_navy py-5">
        <h2 className="text-standard_white h2">Testimonials</h2>
          <Carousel_Component />
      </div>
      <div className="w-3/4 mx-auto my-10">
        <h2 className="text-4xl text-standard_navy">Our Experience</h2>
        <div className="grid sm:grid-cols-3 grid-cols-1">
          <div className="m-5 p-10 bg-standard_teal h-auto rounded-2xl">
            <h3 className="text-center text-black text-2xl font-headFont mb-5">IB Diploma Program</h3>
            <p className="text-center text-black font-paraFont">Learning course content can be difficult for many students, especially with their commitments outside of school. Students in high school need to balance their academics, extracurriculars, and a job all at once, which means that they often need to get ahead on course material before the school year begins.</p>
          </div>
          <div className="m-5 bg-standard_navy h-auto rounded-2xl">
            <div className="w-full h-full relative overflow-hidden">
              <img src="/images/Untitled_design_1.jpeg" className=" w-full h-full absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2" alt="Decorative Image"></img>
            </div>
          </div>
          <div className="m-5 p-10 bg-standard_teal h-auto rounded-2xl">
            <h3 className="text-center text-black text-2xl font-headFont mb-5">IB Diploma Program</h3>
            <p className="text-center text-black font-paraFont">Learning course content can be difficult for many students, especially with their commitments outside of school. Students in high school need to balance their academics, extracurriculars, and a job all at once, which means that they often need to get ahead on course material before the school year begins.</p>
          </div>
        </div>
      </div>
      <div className="bg-standard_navy h-auto p-10">
        <div className="mx-auto h-fit sm:w-3/4 w-full m-20 rounded-2xl bg-white">
          <h1 className="font-headFont font-bold text-2xl text-standard_navy text-center pt-5 mt-5">Book a Session NOW!</h1>
          <BookaSession />
        </div>
      </div>

      <div className="h-3 bg-standard_teal"></div>
      <div>
        <h2 className="font-headFont text-4xl text-center my-5 text-standard_navy">Contact Us</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-fit md:mx-10 divide-x-0 md:divide-x-2 divide-y-2 md:divide-y-0 gap-4">
        <div className="shadow-2xl rounded-xl ">
          <Contact />
        </div>
        <div className="shadow-2xl rounded-xl">
          <iframe src="https://embedsocial.com/api/pro_hashtag/898c1f5d6b23404c0a60fe8791bc889ab9ac2a84" className="w-full h-full" frameborder="0" marginheight="" marginwidth="5"></iframe>
        </div>
      </div>
      <div className="mt-5 h-3 bg-standard_teal"></div>
      < Footer />
    </main>

  );
}
