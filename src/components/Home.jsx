import cv from "../assets/docs/kervin-gonzalez-cv.pdf";
import "../App.css";
import { useContext } from "react";
import MovingText from "react-moving-text";
import { UserContext } from "../App";
import bgPNG from "../assets/images/bg/bg-7.png";

export default function Home() {
  const data = useContext(UserContext);
  const { home } = data;
  return (
    <div className="w-full h-screen relative overflow-hidden bg-sky-100">
      <div className="absolute mix-blend-multiply md:opacity-10 opacity-20">
        <img
          src={bgPNG}
          alt="imagen"
          className="md:object-fill object-cover h-screen w-screen sk"
        />
      </div>
      <div className="absolute hidden sm:flex pt-10 xl:px-32 px-4 xl:max-w-3xl md:max-w-xl max-w-sm text-sm z-10">
        <div>{home.phone}</div>
        <div className="pl-10">{home.email}</div>
      </div>
      <div className="flex relative z-10 px-4">
        <div className="flex flex-row items-center h-screen xl:px-32 xl:max-w-3xl md:max-w-xl max-w-sm w-1/2">
          <div className="text-left">
            <p className="ls:text-xl text-sm pb-6 italic font-light">
              {home.saludo}
            </p>
            <p className="lg:text-7xl text-5xl mb-4">{home.name}</p>
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
            <p className="mt-4">{home.description}</p>
            <div className="flex md:justify-start justify-center">
              <a
                href={cv}
                download="CV Kervin Gonzalez"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded mt-8 shadow">
                  {home.download}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="grid place-content-center w-1/2">
          hola
        </div>
      </div>
    </div>
  );
}
