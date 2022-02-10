import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  //set interface for skills
  skills: { name: string; url: string; note?: string }[];
}

function App() {
  //set type for skills using interface
  const [skills, setSkills] = useState<IState["skills"]>([
    {
      name: "JavaScript",
      url: "",
      note: "My favourite language",
    },
  ]);

  return (
    <div className="App">
      <h1>Skills that I like</h1>
      <List skills={skills} />
      <AddToList skills={skills} setSkills={setSkills} />
    </div>
  );
}

export default App;
