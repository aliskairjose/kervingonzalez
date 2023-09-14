
import { useContext } from "react";
import { UserContext } from "../App";

export default function Skills() {
  const data = useContext(UserContext);
  const { abilities } = data;

  return (
    <div className="w-full min-h-max lg:px-24 px-4 bg-sky-100">
      <div className="text-left py-10">
        <h1 className="title font-bold text-yellow-600">{abilities.title}</h1>
      </div>
      <div className="flex md:flex-row lg:pgap-0 md:gap-2 gap-14 flex-col md:mx-2 mx-auto lg:max-w-6xl md:max-w-2xl pb-8 md:px-0 px-3">
        <div className="flex-1">
          <p className="text-left w-full text-xl font-bold tracking-wide mb-4 text-sky-600">
            {abilities.knowledge.title}
          </p>
          <ul className="flex flex-col text-left gap-1 list-outside list-disc mt-10">
            {abilities.knowledge.items.map((item, index) => (
              <li key={index} className="break-all">
                {item.map((value) => (
                  <span key={value} className="mr-1">
                    {value}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 flex-1 items-center">
          <p className="text-left w-full text-xl font-bold tracking-wide mb-4 text-sky-600">
            {abilities.skills.title}
          </p>
          {abilities.skills.items.map((item, index) => (
            <div className="flex flex-col items-start w-full" key={index}>
              <div className="flex justify-between w-full italic mb-2">
                <p>{item.skill}</p>
                <p>{item.percent}</p>
              </div>
              <div className="flex w-full rounded-full h-1.5 bg-gray-200 dark:bg-gray-700">
                <div
                  className="bg-sky-700 h-1.5 rounded-full"
                  style={{ width: item.percent }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
