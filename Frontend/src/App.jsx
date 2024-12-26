import Navbar from "./Components/Navbar/navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}