import * as images from '../assets/images/portfolio';

import { UserContext } from "../App";
import { useContext } from "react";

export default function Portfolio() {
  const data = useContext(UserContext);
  const { title, portfolios } = data.portfolio;

  function goPage(event, url) {
    event.preventDefault();
    window.open(url);
  }

  return (
    <div className="w-full min-h-max lg:px-24 px-4">
      <h1 className="title text-yellow-600">{title}</h1>
      <div className="grid xl:grid-cols-4 grid-cols-1 gap-2 xl:gap-6">
        {portfolios.map((p, i) => (
          <div key={i} onClick={($event) => goPage($event, p.url)} className="cursor-pointer">
            <img src={images[p.image]} className="aspect-video rounded border border-sky-900" />
            <p className="uppercase mt-2">
              {p.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
