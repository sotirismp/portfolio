import { useState, useEffect, useRef } from "react";
import DrawLine from "./DrawLine";
import Prefix from "./Prefix";
let isInit = true;

function MessageList(props: { messages: string[]; isDark: boolean }) {
  const divRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");
  const [error, setError] = useState<string | boolean>(false);
  const [m1, setM1] = useState(true);
  const [m2, setM2] = useState(false);
  const [m3, setM3] = useState(false);
  const [m4, setM4] = useState(false);
  const [m5, setM5] = useState(false);

  useEffect(() => {
    if (isInit) {
      isInit = false;
      return;
    }
    divRef.current!.focus();
  }, [m5]);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const checkForEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setError("Sorry terminalophile but this is just a dummy terminal");
      return;
    }
    setError(false);
  };

  return (
    <div
      className={`flex gap-3 flex-col  p-6 h-full mb-6 ${
        props.isDark ? "bg-neutral-900" : " bg-slate-300"
      } rounded-b-3xl lg:mb-0`}
      onClick={() => {
        if (divRef.current) divRef.current!.focus();
      }}
    >
      {m1 && (
        <DrawLine
          message={props.messages[0]}
          changeState={setM2}
          isGreeting={true}
        ></DrawLine>
      )}
      {m2 && (
        <DrawLine
          message={props.messages[1]}
          changeState={setM3}
          isGreeting={false}
        ></DrawLine>
      )}
      {m3 && (
        <DrawLine
          message={props.messages[2]}
          changeState={setM4}
          isGreeting={false}
        ></DrawLine>
      )}
      {m4 && (
        <DrawLine
          message={props.messages[3]}
          changeState={setM5}
          isGreeting={false}
        ></DrawLine>
      )}
      {m5 && (
        <div className="flex gap-2">
          <Prefix />
          <div className="flex overflow-hidden">
            <input
              className="bg-transparent w-0 opacity-0"
              ref={divRef}
              onChange={inputHandler}
              onKeyDown={checkForEnter}
            ></input>
            <div>
              {text}
              <div className="inline-block animate-blink transition duration-100">
                |
              </div>
            </div>
          </div>
        </div>
      )}
      {error && <div className=" text-red-600">{error}</div>}
    </div>
  );
}

export default MessageList;
