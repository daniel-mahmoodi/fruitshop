import React from "react";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div dir="rtl" className="bg-gray-100">
      <Navbar />
      <Modal />
      <Modal />
      <Modal />
    </div>
  );
}

export default App;
