'use client'
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { Carousel_Component } from "./components/carousel";
import Footer from "./components/footer";
import { NavBar } from "./components/navbar";
import { useState } from "react";
import { ContactUs } from "./components/bookasession";

export function Home() {

  return (
    <main className="bg-white cursor-main">
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
          <img src="/images/Untitled_design_1.jpeg" className="absolute bottom-0 top-7 left-0 right-0 mx-auto object-cover object-top overflow-clip w-2/3 hover:-translate-y-5 ease-out duration-500 hover:w-3/4 transition-all"></img>
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
      <div id="about-us" className="grid grid-cols-1 lg:grid-cols-3 lg:mx-10 mt-16 min-h-fit">
        <div className="lg:col-span-2 px-7 lg:pb-20 pb-10">
          <h2 className="text-nav_colour h2">About Us</h2>
          <p className="font-paraFont text-black mx-10 xl:mx-24">Learning course content can be difficult for many students, especially with their commitments outside of school. Students in high school need to balance their academics, extracurriculars, and a job all at once, which means that they often need to get ahead on course material before the school year begins. We offer online lessons and homework help to high school students to help jump-start their knowledge on both math and science courses. Our aim is to help students from Grades 9 to 11 with the transition from one grade to another, and facilitate the creation of strong technical skills to help them succeed. </p>
        </div>
        <div className="flex-col flex justify-center">
          <img src="images/orange_planet.png" className=" px-5 w-7/12 min-w-64 align-middle mx-auto ease-out duration-500 hover:w-8/12 transition-all inline-block"/>
        </div>
      </div>
      { /*
      <div className="bg-standard_navy py-5" id="testimonials">
        <h2 className="text-standard_white h2">Testimonials</h2>
          <Carousel_Component />
      </div>
      */}
      <div className="w-3/4 mx-auto my-10" id="our-experiences">
        <h2 className="text-4xl text-standard_navy">Our Experience</h2>
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className="m-5 p-10 bg-standard_teal h-auto rounded-2xl">
            <h3 className="text-center text-black text-2xl font-headFont mb-5">IB Diploma Program</h3>
            <p className="text-center text-black font-paraFont">Having gone through the IB Diploma Program and its enhanced curriculum, our tutors are well versed in a variety of subjects, most notably mathematics, chemistry, and physics. Our tutors have also been trained in the IB Global Mindset, providing them with the skills to aid any type of learner achieve their goals!</p>
          </div>
          <div className="m-5 bg-standard_navy h-96 rounded-2xl relative overflow-clip">
              <img src="/images/Untitled_design_1.jpeg" className=" w-full absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/6 -rotate-45" alt="Decorative Image"></img>
          </div>
          <div className="m-5 p-10 bg-standard_teal h-auto rounded-2xl">
            <h3 className="text-center text-black text-2xl font-headFont mb-5">Community Involvement</h3>
            <p className="text-center text-black font-paraFont">Our tutors have an extensive amount of experience and community involvement. They lead many initiatives within Turner Fenton Secondary School such as the Math and Computing Club, HOSA and TurnerHacks. Their experience with numerous educational extracurriculars both in and out of school gives them the necessary skills to help fellow students excel.</p>
          </div>
        </div>
      </div>
      <div id="contact-us">
      <ContactUs />
      </div>
      <iframe src="https://embedsocial.com/api/pro_hashtag/898c1f5d6b23404c0a60fe8791bc889ab9ac2a84" className=" mt-3 w-11/12 block h-96 mx-auto" frameborder="0" marginheight="" ></iframe>
      < Footer />
    </main>

  );
}
