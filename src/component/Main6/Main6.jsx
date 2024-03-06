import React from "react";
import img1 from "../../assets/images/870e6f3844fe52726977bd64cb570910.jpg";
import img2 from "../../assets/images/aedf67cdda90ed3e86ecf724d33be1f6.jpg";
import img3 from "../../assets/images/a36f3f16244831c61c75a0abe7f8a923.jpg";
import img4 from "../../assets/images/b7580adc704b41335cefeff1234ccb82.jpg";
export default function Main6() {
  return (
    <div
      style={{
        height: "100%",
      }}
      className="container"
    >
      <div className="row text-end ">
        <div className="col-md-12 pt-5 text-center">
          <h2
            className="text-blue "
            style={{
              fontWeight: "700",
              color: "#484c4e",
              lineHeight: "56.88px",
              fontSize: "48px",
              fontFamily: "Rubik",
            }}
          >
            السياحة في <span className="text-main"> ارذبيجان</span>
          </h2>
          <p
            className="text-blue pt-2  w-sm-100 w-md-100 w-lg-48 text-width "
            style={{
              fontWeight: "400",
              fontFamily: "Roboto",
              fontSize: "20px",
              margin: "auto",
            }}
          >
            تتميز ارذبيجان بالسياحة الدينية والمنتجعات الصحية وتعد دولة ثقافية
            جدا وتتمتع بالتضاريس المتنوعة والجميلة يحتفظ سكانها بالعديد من
            التقاليد الشعبية المميزه والشهيرة وتعد الخيول الجميلة والكافيار احدى
            الصادرات التقليدية الاكثر تميزا
          </p>
        </div>

        <div className="col-md-6 my-3 ">
          <img
            src={img1}
            alt=""
            className="w-100 rounded shadow"
            height={542}
          />
        </div>
        <div className="col-md-6 my-3">
          <img
            src={img4}
            alt=""
            className="w-100 rounded shadow"
            height={542}
          />
        </div>

        <div className="col-md-6 my-3">
          <img
            src={img2}
            alt=""
            className="w-100 rounded shadow"
            height={542}
          />
        </div>
        <div className="col-md-6 my-3">
          <img
            src={img3}
            alt=""
            className="w-100 rounded shadow"
            height={542}
          />
        </div>
      </div>
    </div>
  );
}
