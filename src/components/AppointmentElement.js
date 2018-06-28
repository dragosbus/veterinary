import React from "react";

export const AptList = props => {
  return(
        <li>
          <div className="main-infos">
            <button className="cancel-apt">X</button>
            <h3>{props.name}</h3>
            <span>{props.date}</span>
          </div>
          <p>Owner:{props.owner}</p>
          <p>{props.note}</p>
        </li>
      );
};