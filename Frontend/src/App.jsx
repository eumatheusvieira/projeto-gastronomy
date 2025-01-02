import Footer from "./Components/Footer/footer";
import Navbar from "./Components/Navbar/navbar";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./Contexts/useCartContext";

export default function App() {
  return (
    <>
    <CartProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartProvider>
    </>
  )
}