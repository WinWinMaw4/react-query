import {  NavLink } from "react-router-dom";

const NavBar = () => {
  return (
      <nav id="navbar" className="bg-red-600 py-4 text-center ">
        <NavLink to={"/"} className="me-3">Home</NavLink>
        <NavLink to={"/superheroes"} className="me-3">Traditional SuperHeroes</NavLink>
        <NavLink to={"/rqsuperheroes"} className="me-3">RQSuperHeroes</NavLink>
      </nav>
  );
};

export default NavBar;
