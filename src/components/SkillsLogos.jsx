import angularLogo from "../assets/icons/angular.svg";
import htmlLogo from "../assets/icons/html5.svg";
import jsLogo from "../assets/icons/js.svg";
import vueLogo from "../assets/icons/vuejs.svg";
import jqueryLogo from "../assets/icons/jquery.svg";
import reactLogo from "../assets/icons/react.svg";
import tsLogo from "../assets/icons/ts.svg";
import laravelLogo from "../assets/icons/laravel.svg";
import phpLogo from "../assets/icons/php.svg";
import nestLogo from "../assets/icons/nestjs.svg";
import nodeLogo from "../assets/icons/nodejs.svg";
import bootstrapLogo from "../assets/icons/bootstrap.svg";
import tailwindLogo from "../assets/icons/tailwind.svg";
import cssLogo from "../assets/icons/css3.svg";
import gitLogo from "../assets/icons/git.svg";
import contentfulLogo from "../assets/icons/contentful.svg";
import ionicLogo from "../assets/icons/ionic.svg";

const front = [
  { logo: htmlLogo, alt: "Html 3" },
  { logo: jsLogo, alt: "JavaScript" },
  { logo: jqueryLogo, alt: "JQuery" },
  { logo: angularLogo, alt: "Angular" },
  { logo: reactLogo, alt: "React Js" },
  { logo: vueLogo, alt: "Vue Js" },
  { logo: tsLogo, alt: "TypeScript" },
];

const css = [
  { logo: cssLogo, alt: "Css3" },
  { logo: tailwindLogo, alt: "Tailwind" },
  { logo: bootstrapLogo, alt: "Bootstrap" },
];

const back = [
  { logo: phpLogo, alt: "Php" },
  { logo: nodeLogo, alt: "Node Js" },
  { logo: nestLogo, alt: "Nest Js" },
  { logo: laravelLogo, alt: "Laravel" },
];

const otros = [
  { logo: gitLogo, alt: "GitHub" },
  { logo: contentfulLogo, alt: "Contentful" },
];
const mobile = [{ logo: ionicLogo, alt: "Ionic" }];

export default function SkillsLogos() {
  return (
    <div className="flex mx-auto lg:max-w-6xl md:max-w-2xl pb-8 md:px-0 px-3">
      <div className="flex-1">
        <p className="text-2xl">FrontEnd</p>
        {front.map((item, index) => (
          <img
            key={index}
            className="col-span-2 max-h-10 my-2 w-full object-contain lg:col-span-1"
            src={item.logo}
            alt={item.alt}
            width={158}
            height={48}
          />
        ))}
      </div>
      <div className="flex-1">
        <p className="text-2xl">BackEnd</p>
        {back.map((item, index) => (
          <img
            key={index}
            className="col-span-2 max-h-12 my-2 w-full object-contain lg:col-span-1"
            src={item.logo}
            alt={item.alt}
            width={158}
            height={48}
          />
        ))}
      </div>
      <div className="flex-1">
        <p className="text-2xl">Css & Framework</p>
        {css.map((item, index) => (
          <img
            key={index}
            className="col-span-2 max-h-10 my-2 w-full object-contain lg:col-span-1"
            src={item.logo}
            alt={item.alt}
            width={158}
            height={48}
          />
        ))}
      </div>
      <div className="flex-1">
        <p className="text-2xl">Desarrollo Mobile</p>
        {mobile.map((item, index) => (
          <img
            key={index}
            className="col-span-2 max-h-12 my-2 w-full object-contain lg:col-span-1"
            src={item.logo}
            alt={item.alt}
            width={158}
            height={48}
          />
        ))}
      </div>
      <div className="flex-1">
        <p className="text-2xl">Otros</p>
        {otros.map((item, index) => (
          <img
            key={index}
            className="col-span-2 max-h-12 my-2 w-full object-contain lg:col-span-1"
            src={item.logo}
            alt={item.alt}
            width={158}
            height={48}
          />
        ))}
      </div>
    </div>
  );
}
