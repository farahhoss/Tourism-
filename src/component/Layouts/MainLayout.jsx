import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Navbar2 from "../Navbar2/Navbar2";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Services />
      <Navbar2 />
      <Outlet />
      <Footer />
    </>
  );
}
