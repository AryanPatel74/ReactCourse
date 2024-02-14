import React from "react";
import ReactDOM from "react-dom";
const header = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello World! Welcome to React course 🚀"
    ),
    React.createElement("h2", {}, "this is h2 tag"),
  ])
);
ReactDOM.render(header, document.getElementById("root"));
