import React from "react";

export default function Footer() {
  return (
    <div className=" footer mt-auto bg-white container ">
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <h1
            style={{
              fontFamily: "Rubik",
              fontSize: "42px",
              fontWeight: "600",
            }}
            className="text-main1"
          >
            <span className="text-main"> WE</span> TRAVELLERS{" "}
          </h1>
        </div>
        <div className="col-md-12 col-lg-4">
          <div class="business-card   ">
            <div
              class="name-section  text-end mt-5 "
              style={{
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: "400",
              }}
            >
              <p className="text-main">العنوان</p>
              <p>خدمه العملاء السياحه في مصر </p>
              <p className="text-main">الايميل</p>
              <p>gloryatravels@gmail.com</p>
              <p className="text-main">خدمه العملاء</p>
              <p>+995 555 555 9631</p>
              <p>+995 555 555 9731</p>
            </div>
            <div className="text-end my-2">
              <i class="fa-brands fa-facebook text-main p-2 rounded-circle shadow-sm mx-1"></i>
              <i class="fa-brands fa-facebook text-main p-2 rounded-circle shadow-sm mx-1"></i>
              <i class="fa-brands fa-facebook text-main p-2 rounded-circle shadow-sm mx-1"></i>
              <i class="fa-brands fa-facebook text-main p-2 rounded-circle shadow-sm mx-1"></i>
              <i class="fa-brands fa-facebook text-main p-2 rounded-circle shadow-sm mx-1"></i>
              <i class="fa-brands fa-facebook text-main p-2 rounded-circle shadow-sm mx-2"></i>
              <i class="fa-brands fa-facebook text-main p-2 rounded-circle shadow-sm mx-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
