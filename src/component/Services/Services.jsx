import React from "react";
import cover from "../../assets/images/a01a2734571782ba044f59b2aa508174.jpg";
export default function Services() {
  return (
    <section
      id="services"
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        backgroundImage: `url(${cover})`,

        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-8 col-md-7 "></div>
          <div className="col-lg-4 col-md-5 bg-white text-main p-6 rounded-circle">
            <h3 className="fs-3 text-center">خدماتنا</h3>
            <div className="fs-32 my-4 text-end">
              <span className="bg-main1 ps-2 pe-2 py-0 rounded-circle  ">
                <i class="fa-solid fa-arrow-left fs-5 text-white"></i>
              </span>
              <span className="me-2 "> سيارة خاصة بسائق </span>
            </div>
            <div className="fs-32  my-4 text-end">
              <span className="bg-main1 ps-2 pe-2 py-0 rounded-circle  ">
                <i class="fa-solid fa-arrow-left fs-5 text-white"></i>
              </span>
              <span className="me-2 "> حجز فنادق</span>
            </div>
            <div className="fs-32  my-4 text-end">
              <span className="bg-main1 ps-2 pe-2 py-0 rounded-circle  ">
                <i class="fa-solid fa-arrow-left fs-5 text-white"></i>
              </span>
              <span className="me-2"> حجز قطارات</span>
            </div>
            <div className="fs-32  my-4 text-end">
              <span className="bg-main1 ps-2 pe-2 py-0 rounded-circle  ">
                <i class="fa-solid fa-arrow-left fs-5 text-white"></i>
              </span>
              <span className="me-2">جولات سياحية يوميا </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
