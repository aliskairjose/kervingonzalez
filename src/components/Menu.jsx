import {
  HomeIcon,
  UserIcon,
  DocumentTextIcon,
  PhoneIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";
import menImg from "./../assets/me.jpg";
import { HashLink } from "react-router-hash-link";

export default function Menu() {
  return (
    <div className="grid grid-flow-row auto-rows-max w-full gap-12">
      <div className="bg-yellow-600">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Kervin González</span>
          <img
            className="h-12 w-auto rounded-full mx-auto"
            src={menImg}
            alt="KervinGonzalez"
          />
        </a>
      </div>
      <div className="grid grid-flow-row auto-rows-max gap-4">
        <div>
          <HashLink to="#home" smooth>
            <HomeIcon className="h-7 mx-auto  text-white hover:text-yellow-500 mt-4" />
          </HashLink>
        </div>
        <div className="border-t border-gray-400">
          <HashLink to="#bio" smooth>
            <UserIcon className="h-7 mx-auto  text-white hover:text-yellow-500 mt-4" />
          </HashLink>
        </div>
        <div className="border-t border-gray-400">
          <HashLink to="#skills" smooth>
            <ShieldCheckIcon className="h-7 mx-auto  text-white hover:text-yellow-500 mt-4" />
          </HashLink>
        </div>
        <div className="border-t border-gray-400">
          <HashLink to="#experience" smooth>
            <DocumentTextIcon className="h-7 mx-auto  text-white hover:text-yellow-500 mt-4" />
          </HashLink>
        </div>
        <div className="border-t border-gray-400">
          <PhoneIcon className="h-7 mx-auto text-white hover:text-yellow-500 mt-4" />
        </div>
      </div>
    </div>
  );
}
