import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="mx-2 sm:mx-2 md:mx-16 lg:mx-28">
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
