import { useContext } from "react";
import { UserContext } from "../App";

export default function Portfolio() {
  const data = useContext(UserContext);
  const { title, portfolios } = data.portfolio;
  return (
    <div className="w-full min-h-max lg:px-24 px-4">
      <h1 className="title text-yellow-600">{title}</h1>
      <div className="flex gap-2">
        {portfolios.map((p, i) => (
          <div key={i}>
            <img src={`/assets/portfolio/${p.image}`} />
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
