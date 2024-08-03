import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="relative h-screen bg-standard_navy overflow-hidden flex flex-col items-center">
        <div className="text-center">
          <h1 className="pt-48 md:pt-32 mx-10 font-headFont text-white text-6xl lg:text-8xl">
            Time to Get <span className="text-standard_teal">Ahead</span> of the Game
          </h1>
          <h2 className="py-10 mx-10 font-paraFont text-white text-xl sm:text-3xl">
            Get <span className="font-bold">FREE</span> tutoring for Math, Physics, and Chemistry today!
          </h2>
        </div>
        <div className="relative w-full flex-grow">
          <img src="/images/Untitled_design_1.jpeg" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 md:w-1/2 lg:w-3/4 h-auto sm:h-3/4 object-cover object-top"></img>
        </div>
      </div>
      <p className="font-headFont font-bold">oswald</p>
      <p className="font-paraFont font-extralight">lato</p>
    </main>
  );
}
