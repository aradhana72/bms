import React from "react";
import {BiChevronRight, BiSearch, BiShareAlt} from "react-icons/bi";
const NavSm = () => {
  return (
    <>
    <div className="text-gray-800 flex items-center justify-between">
   <div>
      <h3 className="text-xl font-bold">It All Starts Here!</h3>
   </div>
   <div className="w-8 h-8">
      <BiShareAlt className="w-full h-full" />
   </div>
</div>
    </>
  )
};
const NavLg = () => {};

const MovieNavbar = () => {
  return (
    <>
     <nav className="px-2 py-4">
        <div className="md:hidden">{/*Mobile Screen*/}
          <NavSm />
        </div>
        <div className="hidden md:block lg:hidden">{/*Tablet Screen*/}
          <NavSm />
        </div>
        <div className="bg-gray-800  hidden lg:flex">{/*Large Screen*/}</div>
     </nav>
    </>
  );
};

export default MovieNavbar;
