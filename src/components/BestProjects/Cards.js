import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link as LinkR } from "react-router-dom";

const Cards = (props) => {
    return (
        <div className="cards">
          <div className="img_box">
            <img src={props.src} alt={props.alt} />
          </div>
          <div className="info">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <LinkR to={props.path} target="_blank">
              Learn More <AiOutlineArrowRight className="icon" />
            </LinkR>
          </div>
        </div>
    )
}

export default Cards
