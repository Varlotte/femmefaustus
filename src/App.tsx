import Home from "./pages/home";
import Nav from "./components/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Social from "./components/social";
import Contact from "./components/contact";
import Work from "./pages/work";
import "./App.css";

export default function App() {
  const year = new Date().getFullYear();
  return (
    <>
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </main>
      </BrowserRouter>
      <footer>
        <div className="footer-inner">
          <Contact />
          <Social />
        </div>
        <webring-banner class="webring">
          <p>
            Member of the{" "}
            <a href="https://web.mainframe.club">Mainframe.club</a> webring
          </p>
          <a href="https://web.mainframe.club/prev">Previous</a>
          <a href="https://web.mainframe.club/random">Random</a>
          <a href="https://web.mainframe.club/next">Next</a>
        </webring-banner>
        <small className="copyright">
          &copy; {year} Charlotte Lang-Bush. Images used with permission. Made
          by the artist!
        </small>
      </footer>
    </>
  );
}

//is this where meta and footer stuff goes?
