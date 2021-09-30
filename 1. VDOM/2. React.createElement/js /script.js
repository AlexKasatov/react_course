React.createElement("li", {
  className: "Test",
  style: { listStyle: "none" },
});


React.createElement('li', {}, 'Hi!')

React.createElement('li', null, 'Hi there again')


//practice
import React, { StrictMode } from "react";

function cactusDiv() {
  return React.createElement("div", {}, "Cactus Jack")
}

function astroGreeting() {
    return React.createElement("h1", {
      className: "sicko-mode"
    }, "Welcome to Astroworld");
  }
  

 