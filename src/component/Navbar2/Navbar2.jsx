import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar2() {
  return (
    <div className="navbar-container container m-auto d-flex justify-content-center ">
      <ul className="nav nav-pills shadow-sm py-3 my-3 rounded">
        <li className="nav-item ms-lg-3">
          <NavLink className="nav-link " aria-current="page" to="/main">
            الرئيسية
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink className="nav-link" to="/program">
            البرامج السياحية
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink className="nav-link" to="/reservesion">
            حجز قطار
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink className="nav-link " to="/rent">
            تأجير سيارات
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink className="nav-link " to="/hotel">
            حجز فنادق
          </NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className="nav-link " to="/contact">
            تواصل معنا
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
