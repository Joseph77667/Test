
import { Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main className="px-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
