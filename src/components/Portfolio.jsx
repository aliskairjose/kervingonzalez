import { useContext } from "react";
import { UserContext } from "../App";
import movieImg from '../assets/images/portfolio/movies.png';
import weatherImg from '../assets/images/portfolio/weather.png';
import currencyImg from '../assets/images/portfolio/currency.png';
import reccipesImg from '../assets/images/portfolio/recipes.png';

export default function Portfolio() {
  const data = useContext(UserContext);
  const { title, portfolios } = data.portfolio;

  const image = (i) => {
    const IMG = {
      weather: weatherImg,
      movies: movieImg,
      recipes: reccipesImg,
      currency: currencyImg
    }
    return IMG[i]
  }
  return (
    <div className="w-full min-h-max lg:px-24 px-4">
      <h1 className="title text-yellow-600">{title}</h1>
      <div className="grid grid-flow-col gap-2">
        {portfolios.map((p, i) => (
          <div key={i}>
            <img src={image(p.image)} className="object-fill h-48 w-96" />
            <p className="uppercase mt-2">
              <a target="_blank" rel="noopener noreferrer" href={p.url}>
                {p.name}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
