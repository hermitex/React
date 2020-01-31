import React from "react";
import "./styles.css";
import Greet from "../Components/Greet";
import Welcome from "../Components/Welcome";
import Message from "../Components/Message";
import Counter from "../Components/Counter";
import FunctionClick from "../Components/FunctionClick";
import ClassClick from "../Components/ClassClick";
import EventBind from "../Components/EventBind";
import ParentComponent from "../Components/ParentComponent";
import UserGreetings from "../Components/UserGreetings";
import NameList from "../Components/NameList";
import StyleSheet from "../Components/StyleSheet";

export default function App() {
  return (
    <div className="App">
      <NameList />
      <StyleSheet primary={true} />
      {/* <UserGreetings /> */}
      {/* <ParentComponent /> */}
    </div>
  );
}
