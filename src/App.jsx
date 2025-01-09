import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="px-10">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
