import {
  BriefcaseIcon,
  DocumentTextIcon,
  HomeIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { HashLink } from "react-router-hash-link";
import { UserContext } from "../App";
import menImg from "./../assets/me.jpg";
import { useContext } from "react";

export default function Menu() {
  const MENU_ICON = {
    "#home": (
      <HomeIcon className="h-7 mx-auto  text-white hover:text-yellow-500 mt-4" />
    ),
    "#bio": (
      <UserIcon className="h-7 mx-auto  text-white hover:text-yellow-500 mt-4" />
    ),
    "#skills": (
      <ShieldCheckIcon className="h-7 mx-auto  text-white hover:text-yellow-500 mt-4" />
    ),
    "#experience": (
      <DocumentTextIcon className="h-7 mx-auto  text-white hover:text-yellow-500 mt-4" />
    ),
    "#portfolio": (
      <BriefcaseIcon className="h-7 mx-auto  text-white hover:text-yellow-500 mt-4" />
    ),
    "#contact": (
      <PhoneIcon className="h-7 mx-auto  text-white hover:text-yellow-500 mt-4" />
    ),
  };
  const data = useContext(UserContext);
  const { menu } = data;

  return (
    <div className="grid grid-flow-row auto-rows-max w-full gap-12">
      <div className="bg-yellow-600">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Kervin González</span>
          <img
            className="md:h-12 h-10 w-auto rounded-full mx-auto"
            src={menImg}
            alt="KervinGonzalez"
          />
        </a>
      </div>
      <div className="grid grid-flow-row auto-rows-max gap-4">
        {menu.map((m, index) => (
          <div
            key={index}
            className={index ? "border-t border-gray-400" : ""}
          >
            <HashLink to={m.hash} smooth>
              {MENU_ICON[m.hash]}
            </HashLink>
          </div>
        ))}
      </div>
    </div>
  );
}
