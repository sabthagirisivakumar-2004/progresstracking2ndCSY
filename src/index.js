import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./component/Itemlist/item";
import Hoc from "./component/Itemlist/Hoc";
import Form from "./component/Itemlist/form";
import Parent from "./component/Itemlist/parent";
import Increment from "./increment";
import State from "./component/usestate/State";
import Effect from "./component/effect/effect";
import Provider from './component/context/provider'
import Context from './component/context/context'
import Todo from './component/todo/todo'
import Condition from "./component/conditionalrendering/condition";
import Api from './component/api/api'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Api/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
