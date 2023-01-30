import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

function Footer(props: { isDark: boolean }) {
  return (
    <div className="  flex justify-end gap-2 pb-20 lg:gap-4 px-5 lg:px-20 text-3xl md:text-4xl md:pb-10">
      <a
        className="hover:text-[#4078c0]  "
        href="https://github.com/sotirismp"
        target="_blank"
      >
        <AiFillGithub />
      </a>
      <a
        className="hover:text-[#0077b5] "
        href="https://linkedin.com/in/swthrhsmp"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
      <a
        className="hover:text-[#0077b5] "
        href="mailto:sotirismpalas@gmail.com"
      >
        <AiFillMail />
      </a>
    </div>
  );
}

export default Footer;
