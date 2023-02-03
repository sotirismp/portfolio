import React from "react";
import { CiLight, CiDark } from "react-icons/ci";

function Navbar(props: { isDark: boolean; toggleTheme: () => void }) {
  return (
    <div
      className={` ${
        props.isDark ? "text-white" : "text-black"
      } transition duration-200  py-6  px-6 text-3xl md:text-4xl  lg:px-20 flex justify-between items-center md:py-10`}
    >
      <div className="hover:cursor-pointer " onClick={props.toggleTheme}>
        {props.isDark ? <CiLight /> : <CiDark />}
      </div>
      <div className="flex justify-center items-center gap-1 lg:gap-2">
        {/* <a
          className={` ${
            props.isDark ? "border-white" : "border-black"
          } border-2 text-lg ml-2 p-1 px-2 hover:border-yellow-400 font-mono rounded-md `}
          href="https://7ps.xyz/cv"
          target="_blank"
        >
          Resume
        </a> */}
      </div>
    </div>
  );
}

export default Navbar;
