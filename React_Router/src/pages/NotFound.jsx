import React from "react";
import Err from "../../public/img/404.jpg";

const NotFound = () => {
 return (
  <div className="shadow-lg shadow-black">
   <img className="w-full" src={Err} alt="404-not-found" />
  </div>
 );
};

export default NotFound;
