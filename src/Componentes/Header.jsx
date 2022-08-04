import React from "react";
import REact from '../assets/react.svg'

const Header = () => {
 return (
  <React.Fragment>
   <div class="navbar bg-neutral text-neutral-content">
    <img src={REact} alt="" />
    <a class="btn btn-ghost normal-case text-xl ml-2">ReactJS Udemy</a>
   </div>
  </React.Fragment>
 );
};

export default Header;
