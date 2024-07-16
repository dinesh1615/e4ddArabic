import React from "react";
// import "./index.css";

// Import images
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";
import extraImage from "./image4.jpg"; // Import new image

// Image info array
const info = [
  {
    image: image1,
    title: "مهمة",
    description:
      "لقد استلهمنا مهمة تدريب ونشر وتمكين الأشخاص واتباع أفضل الممارسات التجارية لضمان النمو والاستدامة. نرغب في الاستمرار في بناء فرق محترفة حريصة على العمل والتعلم وإعادة توجيه نفسها إلى الأوقات المتغيرة",
    bgColor: "bg-red-500",
  },
  {
    image: image2,
    title: "e4dd المسؤولية الاجتماعية للشركات",
    description:
      "نحن نتحمل مسؤوليتنا في إحداث تأثير إيجابي في المجتمعات التي نعمل ونعيش فيها.",
    bgColor: "bg-green-500",
  },
  {
    image: image3,
    title: "المبادرات الرئيسية",
    description:
      "يقوم فريق متخصص في مؤسسة e4dd بتحديد البرامج في مجالات الرعاية الصحية والتعليم والفنون والثقافة ورعاية المعوزين والتنمية الريفية.",
    bgColor: "bg-pink-500",
  },
];

function Foundation() {
  return (
    <div>
      {/* 50vh height div with centered text */}
      <div className="h-[50vh] bg-gradient-to-r from-blue-400 via-green-500 to-orange-500 flex flex-col justify-between items-center">
        <h1 className="text-5xl md:text-8xl font-bold mt-20 text-center">
          <span className="text-red-700">e4</span>
          <span className="text-white">dd</span>
          <span className="text-orange-500"> مؤسسة</span>
        </h1>
        <div className="mb-4 text-white text-2xl text-center">
        مؤسسة e4dd ∞ المسؤولية الاجتماعية للشركات
        </div>
      </div>

      {/* Images section */}
      <div className="bg-blue-300 p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {info.map((item, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className={`flip-card-front bg-black`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover bg-black"
                />
                <h2 className="text-4xl font-bold mt-2 text-red-500 text-white ">
                  {item.title}
                </h2>
              </div>
              <div
                className={`flip-card-back ${item.bgColor} flex flex-col justify-center items-center`}
              >
                <h2 className="text-2xl font-bold mb-2 text-green-900">
                  {item.title}
                </h2>
                <p className="text-white">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* New image section below the grid */}
      <div className="extra-image-container">
        <img src={extraImage} alt="Extra" className="w-full h-auto" />
        <div className="extra-image-title-description">
          <h2 className="text-orange-500">
          المسؤولية الاجتماعية للشركات (CSR)
          </h2>
          <p>
          يعد جانبًا حيويًا من التزام منظمتنا بتحقيق
            تأثير إيجابي على المجتمع والبيئة.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Foundation;
