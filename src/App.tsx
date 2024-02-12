// import { useState } from "react";
import Home from "./pages/home";
import Nav from "./components/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Social from "./components/social";
// import Contact from "./components/contact";
import Work from "./pages/work";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  // const year = new Date().getFullYear();
  // const [count, setCount] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
      {/* <Contact /> */}
      {/* <Social /> */}
    </>
  );
}

//is this where meta and footer stuff goes?
