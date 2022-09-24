import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
 return (
  <nav className="flex flex-row justify-center font-bold  gap-2">
   {/* <Link className="hover:border-[1px] hover:bg-amber-500 rounded-md mb-4 w-[5em] text-center hover:border-black" to="/">Home</Link>
   <Link className="hover:border-[1px] hover:bg-amber-500 rounded-md mb-4 w-[5em] text-center hover:border-black" to="/about">About</Link>
   <Link className="hover:border-[1px] hover:bg-amber-500 rounded-md mb-4 w-[5em] text-center hover:border-black" to="/products">Products</Link> */}
   <NavLink to="/" className={({isActive}) => (isActive ? "está ativo" : "não está ativo")} >Home</NavLink>
   <NavLink to="/about">About</NavLink>
   <NavLink to="/products">Product</NavLink>
  </nav>
 );
}

export default Navbar;
