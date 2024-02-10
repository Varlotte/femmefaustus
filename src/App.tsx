import { useState } from "react";
import Home from "./pages/home";
import Nav from "./components/nav";
import { BrowserRouter, NavLink } from "react-router-dom";
import Social from "./components/social";
import Contact from "./components/contact";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  // const year = new Date().getFullYear();
  // const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Nav />
      <Home />
      {/* <Social /> */}
      <Contact />
    </BrowserRouter>
  );
}
