import React from "react";
import Person from "./Person";
const names = ["Bruce", "Clark", "Diana"];
const NameList = () => {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 21,
      skill: "Javascript"
    },
    {
      id: 2,
      name: "Clark",
      age: 22,
      skill: "React"
    },
    {
      id: 3,
      name: "Diana",
      age: 30,
      skill: "Vue"
    }
  ];
  const nameList = names.map((name, index) => <h1 key={index}>{name}</h1>);
  return <div>{nameList}</div>;
};

export default NameList;
