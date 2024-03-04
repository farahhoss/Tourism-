import React from "react";
import img from "../../assets/images/c28a419e6d8ee3bb55582bfcc29fedcf.jpg";
export default function Main3() {
  return (
    <div className="container ">
      <div className="row d-flex justify-content-between h-100 shadow-sm rounded  py-2 my-3">
        <div className="col-lg-8 col-md-12 ">
          {" "}
          <div className="row">
            <div className="col-lg-5  col-md-6 ">
              {" "}
              <img src={img} className="w-100 rounded" height={384} />
            </div>
            <div className="col-lg-7 col-md-6    text-end">
              <div>
                <div className="header">
                  <h4
                    className=""
                    style={{
                      fontFamily: "Cairo",
                      fontSize: "24px",
                      lineHeight: "44.98px",
                    }}
                  >
                    عروض جورجيا
                  </h4>
                  <h4
                    style={{
                      fontFamily: "Cairo",
                      fontSize: "24px",
                      lineHeight: "44.98px",
                    }}
                  >
                    العروض حتى نهاية شهر يناير
                  </h4>
                </div>
                <div className="package-details  ">
                  <div
                    className="price  w-75"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                      lineHeight: "30px",
                      fontSize: "20px",
                      fontFamily: "Roboto",
                    }}
                  >
                    <span className="new-price text-main">5,649 ريال</span>
                    <span
                      className="old-price text-main1"
                      style={{
                        textDecoration: "line-through",
                      }}
                    >
                      7,649 ريال
                    </span>

                    <span className="text-main1">8 ايام 7 ليالي</span>
                  </div>
                  <ul
                    className="package- inclusions text-end gray-color"
                    style={{
                      lineHeight: "27px",
                      fontSize: "18px",
                      fontFamily: "Roboto",
                    }}
                  >
                    <li className="gray-color">الباكدج يشمل</li>
                    <li>زيارة 9 مدن سياحية يوميا</li>
                    <li>سيارة خاصة طول مدة الرحلة</li>
                    <li>شامل افخم منتجع سياحي</li>
                    <li>استقبال وتوديع من المطار</li>
                    <li>تامين دولي شامل لكل فرد في الرحلة</li>
                    <li>حجز فنادق 5 نجوم</li>
                    <li>شامل وجبة افطار يوميا في الفندق</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-12  d-flex   flex-lg-column justify-content-between text-start">
          <div>
            <i
              style={{
                fontSize: "55px",
              }}
              class="fa-solid fa-qrcode "
            ></i>
          </div>
          <div>
            <button className="btn btn-info bg-whatsap border-0 py-2 ">
              واتساب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
