import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";

function App() {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer/>
    </>
  );
}

export default App;
