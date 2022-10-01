import React from "react";
import { Link } from "react-router-dom";
import Context from "../assets/contAPI.jpg";

const Navbar = () => {
 return (
  <div>
   <nav className="flex gap-2 items-center flex-col">
    <div>
     <img src={Context} alt="context-logo" />
    </div>
    <div className="flex flex-row gap-2 mt-2">
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
    </div>
   </nav>
  </div>
 );
};

export default Navbar;
