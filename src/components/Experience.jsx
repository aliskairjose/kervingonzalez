import { useContext } from "react";
import { UserContext } from "../App";
import { ServerStackIcon } from "@heroicons/react/24/outline";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const data = useContext(UserContext);
  const { experiences, title } = data.experience;

  return (
    <div className="w-full  min-h-max lg:px-24 px-4">
      <div className="py-10">
        <h1 className="font-bold text-left text-yellow-600">{title}</h1>
      </div>
      <div className="flex flex-wrap">
        <VerticalTimeline
          lineColor="rgb(0,132,199,0.5)"
        >
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "RGB(0,132,199,0.1)",
                color: "#000",
                borderTop: "3px solid rgb(0,132,199)",
              }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(0,132,199)" }}
              date={exp.dates}
              iconStyle={{ background: "rgb(0,132,199)", color: "#fff" }}
              icon={<ServerStackIcon />}
            >
              <h3 className="vertical-timeline-element-title md:text-xl text-base tracking-wide font-bold">
                {exp.company}
              </h3>
              <h4 className="vertical-timeline-element-subtitle italic mb-2">
                {exp.country}
              </h4>
              <ul className="text-left">
                {exp.tasks.map((task, index) => (
                  <li key={index} className="list-none text-sm">
                    {task}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
