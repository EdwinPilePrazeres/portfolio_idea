import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
// import '../assets/images/img-9.jpg'
import img1 from "../Images/projects/f14.PNG";
import img2 from "../Images/projects/planets.PNG";
import img3 from "../Images/projects/favorite.PNG";
import img4 from "../Images/projects/react_sheets.PNG";
import img8 from "../Images/projects/mustang.PNG";
import img5 from "../Images/projects/api_weather.PNG";
import SVGwaveB from "../Images/wave_black.svg";

//All the info of more projects
export const MoreProjects = [
  {
    id: 10,
    image: require("../Images/projects/f14.PNG").default,
    alt: "F14 Air Craft",
    text: "F14 Landing Page",
    label: "Swiper",
    path: "//edwinpileprazeres.github.io/landing_page/",
  },
  {
    id: 11,
    image: require("../Images/projects/planets.PNG").default,
    alt: "Planets Project",
    text: "Planets, Solar System",
    label: "CSS SKILLS",
    path: "//edwinpileprazeres.github.io/planets/",
  },
  {
    id: 12,
    image: require("../Images/projects/favorite.PNG").default,
    alt: "Favorite.png",
    text: "Select your favorite option!",
    label: "Hooks",
    path: "//edwinpileprazeres.github.io/react-hooks/",
  },
  {
    id: 13,
    image: require("../Images/projects/react_sheets.PNG").default,
    alt: "React Sheets",
    text: "React connected with Spreedsheet",
    label: "",
    path: "//edwinpileprazeres.github.io/react_googlesheets/",
  },
  {
    id: 14,
    image: require("../Images/projects/mustang.PNG").default,
    alt: "Mustang",
    text: "Mustang History on Swiper",
    label: "Swiper",
    path: "//edwinpileprazeres.github.io/mustang_project/",
  },
  {
    id: 15,
    image: require("../Images/projects/api_weather.PNG").default,
    alt: "API Weather",
    text: "API Weather",
    label: "API",
    path: "//edwinpileprazeres.github.io/weather_app/",
  },
];
function Cards() {
  return (
    <div className="cards_MP">
      <h1>Check out these EPIC Projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              alt="F14 Air Craft"
              text="F14 Landing Page"
              label="CSS SKILLS"
              path="//edwinpileprazeres.github.io/landing_page/"
            />
            <CardItem
              src={img2}
              alt="React Sheets"
              text="Planets, Solar System"
              label="Swiper"
              path="//edwinpileprazeres.github.io/planets/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              alt="Favorite.png"
              text="Select your favorite options"
              label="Redux"
              path="//edwinpileprazeres.github.io/react-hooks/"
            />
            <CardItem
              src={img4}
              alt= "React Sheets"
              text="React with Spreedsheet"
              label=""
              path="//edwinpileprazeres.github.io/react_googlesheets/"
            />
            <CardItem
              src={img8}
              alt="Mustang"
              text="Mustang History on Swiper"
              label="Swiper"
              path="//edwinpileprazeres.github.io/mustang_project/"
            />
            <CardItem
              src={img5}
              alt="API Weather"
              text="API Weather"
              label="API"
              path="//edwinpileprazeres.github.io/weather_app/"
            />
          </ul>
        </div>
      </div>
      <img src={SVGwaveB} alt="" className="wave" />
    </div>
  );
}

export default Cards;
