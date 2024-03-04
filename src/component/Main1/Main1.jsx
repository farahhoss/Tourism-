import React from "react";
import img1 from "../../assets/images/9cc0f6baca1a1dbb3b593b9505592d1f.jpg";
export default function Main1() {
  return (
    <div style={{}} className="container mt-5 h-lg-75">
      <div className="row text-end">
        <div className="col-md-6 pt-lg-5 mt-lg-5">
          <p
            className=""
            style={{
              fontWeight: "400",
              fontFamily: "Roboto",
              fontSize: "20px",
            }}
          >
            افضل الوجهات حول العالم
          </p>
          <h2
            className="text-blue my-1"
            style={{
              fontWeight: "700",
              color: "#484c4e",
              lineHeight: "56.88px",
              fontSize: "48px",
              fontFamily: "Rubik",
            }}
          >
            السفر الى <span className="text-main">جورجيا و أرذبيجا</span>
          </h2>
          <p
            className="text-blue pt-2"
            style={{
              fontWeight: "400",
              fontFamily: "Roboto",
              fontSize: "20px",
            }}
          >
            يمكننا ان نجعل عطلات أحلامك لا تنسى
          </p>
        </div>
        <div className="col-md-6">
          <img src={img1} alt="" className="w-100" height={381} />
        </div>
      </div>
    </div>
  );
}
