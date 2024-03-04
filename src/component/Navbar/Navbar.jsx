import React from "react";

export default function Navbar() {
  return (
    <section>
      <nav
        class="navbar navbar-expand-lg bg-white position-fixed top-0 w-100  "
        id="mainNav"
        style={{ zIndex: 1000 }}
      >
        <div class="container">
          <a class="navbar-brand  text-main" href="#">
            <span className="text-main1">WE </span> TRAVELLERS
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse  d-lg-flex justify-content-evenly "
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mr-auto  pt-2 me-5">
              <li class="nav-item me-5 ">
                <a class="nav-link pt-2 light-color1 " href="#">
                  18:31C <i class="fa-regular fa-sun text-main"></i>
                </a>
              </li>

              <li class="nav-item me-5 ">
                <a class="nav-link   light-color1 pt-2 " href="#">
                  الثلاثاء-12 فبراير - 2024
                  <i class="fa-solid fa-calendar-days me-4 text-main fs-5"></i>
                </a>
              </li>
              <li class="nav-item    me-5">
                <button className="btn bg-main p-1  text-white border-0">
                  <a class="nav-link  text-white" href="#">
                    تسجيل الدخول <i class="fa-regular fa-user  fs-4"></i>{" "}
                  </a>
                </button>
              </li>
              <li class="nav-item  language">
                <button className="btn bg-white shadow-sm p-0 mt-2 ">
                  <a class="nav-link text-main  " href="#">
                    العربيه <i class="fa-solid fa-globe fs-5"></i>
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav classname="navbar navbar-expand-lg bg-body-tertiary">
        <div classname="container-fluid">
          <a classname="navbar-brand" href="#">
            Navbar
          </a>
          <button
            classname="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classname="navbar-toggler-icon"></span>
          </button>
          <div classname="collapse navbar-collapse" id="navbarSupportedContent">
            <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
              <li classname="nav-item">
                <a classname="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li classname="nav-item">
                <a classname="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </section>
  );
}
