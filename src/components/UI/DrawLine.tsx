import React, { useState, useEffect } from "react";
import Prefix from "./Prefix";

function DrawLine(props: {
  message: string;
  changeState: (arg0: boolean) => void;
  isGreeting: boolean;
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
    <div className="flex gap-2">
      <Prefix />
      {content}
      {props.isGreeting && counter >= props.message.length && (
        <div className=" origin-hand animate-wave inline-block ">👋</div>
      )}
    </div>
  );
}

export default DrawLine;
