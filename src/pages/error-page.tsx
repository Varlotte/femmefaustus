import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>
        Sorry, this page doesn't exist. Want to check out some{" "}
        <NavLink to={"/"}>art</NavLink> or <NavLink to={"/dev"}>dev</NavLink>{" "}
        instead?
      </p>
    </div>
  );
}
