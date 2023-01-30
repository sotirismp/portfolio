import React from "react";

function Header(props: { isDark: boolean }) {
  return (
    <div
      className={`w-full h-16 ${
        props.isDark ? "bg-neutral-800" : "bg-slate-400"
      } relative flex justify-between px-5 items-center rounded-t-3xl lg:h-20 lg:px-10`}
    >
      <div className="flex gap-3">
        <div className="h-3 aspect-square rounded-full bg-[#FF605C] lg:h-5"></div>
        <div className="h-3 aspect-square rounded-full bg-[#FFBD44] lg:h-5"></div>
        <div className="h-3 aspect-square  rounded-full bg-[#00CA4E] lg:h-5"></div>
      </div>
      <div className="absolute left-1/2 translate-x-[-50%]">balas@dev: ~</div>
    </div>
  );
}

export default Header;
