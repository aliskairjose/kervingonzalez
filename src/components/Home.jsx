import cv from "../../public/kervin-gonzalez-cv.pdf";
import "../App.css";
import { useContext } from "react";
import MovingText from "react-moving-text";
import { UserContext } from "../App";
import '../assets/styles/Home.css'

export default function Home() {
  const data = useContext(UserContext);
  const { home } = data;

  return (
    <div className="w-full h-screen relative overflow-hidden bg-sky-100">
      <div className="absolute hidden sm:flex pt-10 xl:px-32 px-4 xl:max-w-3xl md:max-w-xl max-w-sm text-sm">
        <div>{home.phone}</div>
        <div className="pl-10">{home.email}</div>
      </div>
      <div className="relative z-10">
        <div className="flex flex-row items-center h-screen xl:px-32 px-4 xl:max-w-3xl md:max-w-xl max-w-sm">
          <div className="text-left">
            <p className="ls:text-xl text-sm pb-6 italic font-light">{home.saludo}</p>
            <p className="lg:text-7xl text-6xl mb-4">{home.name}</p>
            <span className="lg:text-3xl text-2xl font-light text-yellow-600">
              <MovingText
                type="typewriter"
                duration="500ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="infinite"
                fillMode="none"
                dataText={home.headlines}
              />
            </span>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              odio nisi porro nam dolore? Neque, perferendis molestias! Dolorem,
              sapiente, illo autem quia iure debitis, neque provident molestias
              quo quam maiores?
            </p>
            <a
              href={cv}
              download="CV Kervin Gonzalez"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 rounded mt-8 shadow">
               {home.download}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
