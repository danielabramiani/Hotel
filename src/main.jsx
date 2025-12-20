import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AdminProvider from "./context/AdminContext.jsx";
import NavbarMain from "./Components/NavbarMain.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Rooms from "./pages/Rooms.jsx";
import Food from "./pages/Food.jsx";
import BookNow from "./pages/BookNow.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminProvider>
      <NavbarMain />
      <Home />
      <About />
      <Rooms />
      <Food />
      <BookNow />
      <Register />
      <Login />
    </AdminProvider>
  </BrowserRouter>
);
