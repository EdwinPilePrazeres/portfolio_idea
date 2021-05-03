import React from "react";
import "../Home.css";
//import images
import SVGwaveG from "../Images/wave_gray.svg";
//import Cards
import Cards from "./Cards";

//All the info of best projects
export const BestProjects = [
  {
    id: 0,
    image: require("../Images/projects/up_project.PNG").default,
    alt: "UP_Project",
    title: "UP_Project",
    description: "A mockup for a small investigation center.",
    path: "//edwinpileprazeres.github.io/up_project/",
  },
  {
    id: 1,
    image: require("../Images/projects/complete_app.PNG").default,
    alt: "completeApp",
    title: "Notes, Tasks, Calendar...",
    description:
      "his App includes Notepad, a task manager and a calendar...  Everything in one place!",
    path: "//edwinpileprazeres.github.io/up_project/",
  },
  {
    id: 2,
    image: require("../Images/projects/burger.PNG").default,
    alt: "Burger",
    title: "Order your burger",
    description:
      "Helps you create your burger and order it, with a form connected to Firebase!",
    path: "//edwinpileprazeres.github.io/budget_tracker/",
  },
  {
    id: 3,
    image: require("../Images/projects/budget_tool.PNG").default,
    alt: "BudgetTracker",
    title: "Budget Tracker",
    description: "Simple Budget Calculator, but does not save your info yet.",
    path: "//edwinpileprazeres.github.io/burger/",
  },
];

const Best_Projects = () => {
  return (
    <div className="second_session" id="projects">
      <h2 className="tracking-in-contract-bck-bottom">
        Enjoy some <br />
        <span>projects</span>
      </h2>
      <div className="cards_session">
        {BestProjects.map((item) => {
          return (
            <Cards
              id={item.id}
              src={item.image}
              alt={item.alt}
              title={item.title}
              description={item.description}
              path={item.path}
            />
          );
        })}
        
      </div>
      <img src={SVGwaveG} alt="" className="wave" />
    </div>
  );
};

export default Best_Projects;
