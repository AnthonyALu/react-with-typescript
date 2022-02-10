import React from "react";
import { IState as IProps } from "../App";

//take in IProps from app.tsx
const List: React.FC<IProps> = ({ skills }) => {
  //create a function that returns a JSX array
  const renderList = (): JSX.Element[] => {
    return skills.map((skill) => {
      return (
        <li className="List">
          <div className="List-Header">
            <img
              className="List-img"
              src={skill.url}
              alt="Skill-img
            "
            />
            <h2>{skill.name}</h2>
          </div>
          <p className="List-note">{skill.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
