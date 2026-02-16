import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./sections/Navigation/Navigation";
import Products from "./sections/Products/Products";
import Recom from "./sections/Recom/Recom";
import Catagories from "./sections/Sidebar/Categories/Catagories";

function App() {
  return (
    <>
      <Navigation />
      <Products />
      <Recom />
      <Catagories/>
    </>
  );
}

export default App;
