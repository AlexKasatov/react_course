import React, {useState} from "react";
import "./App.css";
import Card from "./components/Card";
import Email from "./components/Email";
import NameForm from "./components/NameForm";
import ToDoApp from "./components/ToDoApp";
import UserForm from "./components/UserForm";

function App() {
  const [name, setName] = useState("");
  function handleNameChange(e) {
    setName(e.target.value)
    console.log(name);
  }

  function handleLoadCard(params) {
    console.log("Card is loaded");
  }
  function handleClickCard(params) {
    console.log("Button is clicked");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi App!</h1>
        <Card onLoadCard={handleLoadCard} onClickCard={handleClickCard} />
        <NameForm onNameChange={handleNameChange} name={name}/>
        <Email/>
        <UserForm/>
        <ToDoApp />
      </header>
    </div>
  );
}

export default App;
