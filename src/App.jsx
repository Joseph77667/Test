import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="container mx-auto py-3">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
