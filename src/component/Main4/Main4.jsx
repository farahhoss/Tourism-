import React from "react";

export default function Main4() {
  return (
    <div>
      <div class="container text-end">
        <header>
          <h2
            className="logo text-blue"
            style={{
              fontFamily: "cairo",
              fontSize: "42px",
              lineHeight: "89.95px",
              fontWeight: "400",
            }}
          >
            نحن نقدم افضل الخدمات
          </h2>
        </header>
        <div className="services">
          <div className="d-flex my-4">
            <div className="shadow-sm rounded mx-3">
              {" "}
              <span className=" p-4 text-main">
                <i class="fa-solid fa-car-side fs-4"></i>
              </span>
            </div>
            <div>
              {" "}
              <p>سيارة خاصة وسائق</p>
            </div>
          </div>
          <div className="d-flex my-4">
            <div className="shadow-sm rounded mx-3">
              {" "}
              <span className="p-4 text-main">
                <i class="fa-solid fa-hotel fs-4"></i>
              </span>
            </div>
            <div>
              <p>حجوزات فنادق</p>
            </div>
          </div>
          <div className="d-flex my-4">
            <div className="shadow-sm rounded mx-3">
              {" "}
              <span className="text-main p-4">
                <i class="fa-solid fa-car fs-4"></i>
              </span>
            </div>
            <div>
              {" "}
              <p>حجز تذاكر طيران</p>
            </div>
          </div>
          <div className="d-flex my-4">
            <div className="shadow-sm rounded mx-3">
              {" "}
              <span className="text-main p-4">
                <i class="fa-solid fa-earth-asia fs-4"></i>
              </span>
            </div>
            <div>
              {" "}
              <p>جولات سياحية يوميا</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
