import React from "react";
import { useState } from "react";
import { IState as Props } from "../App";

//setup interface using IState from app.tsx
interface IProps {
  skills: Props["skills"];
  setSkills: React.Dispatch<React.SetStateAction<Props["skills"]>>;
}

const AddToList: React.FC<IProps> = ({ skills, setSkills }) => {
  const [input, setInput] = useState({ name: "", url: "", note: "" });

  const handleChange = (
    //set changeevent type for both input element and text area element
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    //spread operator while changing element according to target name
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //returns void
  const handleClick = (): void => {
    if (!input.name || !input.url) {
      return;
    }

    setSkills([
      ...skills,
      { name: input.name, url: input.url, note: input.note },
      //if there are numbers in inputs, use parseInt(input.number)
    ]);
    setInput({ name: "", url: "", note: "" });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Skill"
        value={input.name}
        onChange={handleChange}
        className="AddToList-input"
        name="name"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={input.url}
        onChange={handleChange}
        className="AddToList-input"
        name="url"
      />
      <textarea
        placeholder="Note"
        value={input.note}
        onChange={handleChange}
        className="AddToList-input"
        name="note"
      />

      <button className="AddToList-btn" onClick={handleClick}>
        Add Skill
      </button>
    </div>
  );
};

export default AddToList;
