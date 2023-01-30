import { useEffect, useState } from "react";
import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import MessageList from "./components/UI/MessageList";
import Navbar from "./components/UI/Navbar";

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleColorTheme = () => {
    setIsDark(!isDark);
  };

  const messagesArray = [
    "Hello there!",
    "My name is Sotiris.",
    "This is my personal website.",
    "I'm still working on it",
  ];

  return (
    <div
      className={`w-screen h-screen transition duration-200 flex flex-col ${
        isDark
          ? "bg-black text-white bg-rg-white"
          : "bg-rg-dark bg-white text-black"
      }  bg-[length:19px_19px] text-1xl md:text-3xl`}
    >
      <Navbar isDark={isDark} toggleTheme={toggleColorTheme} />
      <div
        className={` select-none flex flex-col w-full h-full px-5 lg:px-20 lg:pb-10`}
      >
        <Header isDark={isDark} />
        <MessageList messages={messagesArray} isDark={isDark} />
      </div>
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
