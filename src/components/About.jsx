import menImg from "../assets/me.jpg";
import { useContext } from "react";
import { UserContext } from "../App";
import "../App.css";
import "../assets/styles/About.css";

export default function About() {
  const data = useContext(UserContext);
  const { description, title, headline, name, languages } = data.bio;

  const goto = (item) => {
    item.link && window.open(item.link, '_blank');
  }

  return (
    <div className="w-full min-h-max xl:px-24 lg:px-12 px-4">
      <div className="flex flex-col lg:flex-row lg:gap-0 md:gap-10 gap-4">
        <div className="lg:w-2/5 w-full">
          <img
            src={menImg}
            alt=""
            className="avatar border border-yellow-600 outline outline-offset-2 outline-4 outline-sky-500 max-h-[350px] m-auto md:h-auto h-60"
          />
          <div className="md:mt-8 mt-10">
            <span className="text-xl font-light">{headline}</span>
            <h1 className="xl:text-5xl lg:text-4xl md:text-5xl text-4xl">{name}</h1>
          </div>
        </div>
        <div className="lg:w-3/5 w-full text-left lg:ml-10 ml-0">
          <h1 className="title text-yellow-600 md:mt-0 mt-6">
            {title}
          </h1>
          <p className="leading-7">{description}</p>
          <div className="flex flex-col md:flex-row mt-6">
            <div className="flex-1 leading-8">
              <p>
                <b>Nombre:</b> Kervin González
              </p>
              <p>
                <b>Teléfono:</b> +58 412-241.96.16
              </p>
              <p>
                <b>Dirección</b> Venezuela
              </p>
            </div>
            <div className="leading-8">
              <p>
                <b>Email:</b> kervingonzalez@gmail.com
              </p>
              <p>
                <b>github.com/</b>aliskairjose
              </p>
              <p>
                <b>Freelance:</b> Disponible
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <div className="md:flex gap-6">
              {languages.map((item, index) => (
                <div className="flex items-center mb-4 md:mb-0 cursor-pointer" key={index} onClick={()=>goto(item)}>
                  <p className="font-bold mr-2 p-2 border border-sky-700 rounded-full">
                    {item.language}
                  </p>
                  <p>{item.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
