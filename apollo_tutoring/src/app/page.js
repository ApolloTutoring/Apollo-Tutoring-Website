import Image from "next/image";
import { NavBar } from "@/app/components/navbar";

export default function Home() {
  return (
    <div>
    <NavBar />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="font-headFont font-bold">oswald</p>
      <p className="font-paraFont font-extralight">lato</p>
    </main>
    </div>

  );
}
