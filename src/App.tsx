import React from "react";
import Carousel from "./components/Main/Carousel";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div dir="rtl" className="mx-auto">
      <Navbar />
      <Carousel/>
      <Modal />
      <Modal />
    </div>
  );
}

export default App;
