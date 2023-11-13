import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

// // Before
// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

// After

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
