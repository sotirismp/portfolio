import React, { useState, useEffect, isValidElement } from "react";
import Prefix from "./Prefix";

function DrawLine(props: {
  message: string;
  changeState: (arg0: boolean) => void;
  isGreeting?: boolean;
  isCV?: boolean;
}) {
  const [counter, setCounter] = useState(0);
  const [content, setContent] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (counter <= props.message.length) {
        setContent(props.message.slice(0, counter));
        setCounter((p) => p + 1);
      } else {
        if (props.changeState) {
          setTimeout(() => {
            props.changeState(true);
          }, 250);
        }
      }
    }, 25);
  }, [counter]);

  return (
    <div className="flex gap-2 ">
      <Prefix />
      <div>
        {content}
        {props.isGreeting && counter >= props.message.length && (
          <div className=" origin-hand animate-wave inline-block ">👋</div>
        )}
        {props.isCV && counter >= props.message.length && (
          <a
            className="inline-block text-blue-500"
            href="https://drive.google.com/file/d/16p6fyRqzfvsc-pcQZgoPs8je4X2yYAly/view"
          >
            CV
          </a>
        )}
      </div>
    </div>
  );
}

export default DrawLine;
