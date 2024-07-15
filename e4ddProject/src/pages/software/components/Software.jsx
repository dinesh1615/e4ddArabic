// src/components/Software.js

import React, { useState } from "react";
import imageSrc from "../image.jpg";
import sampleImage1 from "../image4.jpeg";
import sampleImage2 from "../image5.jpeg";
import sampleImage3 from "../image6.jpeg";

const Software = () => {
  const services = [
    {
      title: "استشارات تكنولوجيا المعلومات الاستراتيجية",
      description:
        "في ELITE، ندرك أهمية مواءمة التكنولوجيا مع استراتيجية عملك الشاملة. يعمل مستشارونا المتمرسون معك بشكل وثيق لصياغة إستراتيجيات مخصصة لتكنولوجيا المعلومات وخرائط طريق تكنولوجية شاملة تدفع الابتكار وتدفع مؤسستك إلى الأمام.",
    },
    {
      title: "التنمية الشاملة",
      description:
        "بدءًا من وضع المفهوم وحتى النشر، يتعامل فريق الخبراء لدينا مع كل جانب من جوانب دورة حياة تطوير البرمجيات. من خلال الاستفادة من أحدث التقنيات وأفضل ممارسات الصناعة، نقدم حلولاً قوية وقابلة للتطوير تلبي متطلبات مشروعك وتتجاوز توقعاتك.",
    },
    {
      title: "التكامل السلس",
      description:
        "يعد التكامل أمرًا أساسيًا لتعظيم قيمة استثماراتك في البرامج. تضمن خدمات التكامل السلس لدينا أن حلولك الجديدة تتكامل بسلاسة مع أنظمتك الحالية، مما يقلل من التعطيل ويزيد الكفاءة.",
    },
    {
      title: "حلول قابلة للتطوير",
      description:
        "مع تطور أعمالك، يجب أيضًا أن تتطور حلولك البرمجية. يضمن نهجنا القابل للتطوير في التطوير إمكانية نمو تطبيقاتك وتكيفها جنبًا إلى جنب مع مؤسستك، مما يوفر قيمة ومرونة على المدى الطويل.",
    },
    {
      title: "مصممة خصيصا لاحتياجاتك",
      description:
        "نحن نفهم أن كل عمل فريد من نوعه. ولهذا السبب نتبع نهجًا شخصيًا في كل مشروع، ونصمم خدماتنا لتلبية احتياجاتك وأهدافك المحددة. سواء كنت شركة ناشئة صغيرة أو شركة متعددة الجنسيات، تتمتع ELITE بالخبرة والخبرة اللازمة لدفع تحولك الرقمي إلى الأمام.",
    },
  ];

  const imageSections = [
    {
      imgSrc: sampleImage1,
      title: "تطوير برمجيات المؤسسات",
      description:
        "استخدم كفاءتنا لتطوير التطبيقات الشاملة والتكامل السلس والإدارة الفعالة للحلول البرمجية.",
      bgColor: "bg-red-100",
    },
    {
      imgSrc: sampleImage2,
      title: "تطوير تطبيقات الهاتف المحمول",
      description:
        "قم بتصميم المنتجات الرقمية باستخدام نهج الهاتف المحمول أولاً، مما يضمن تجارب مستخدم سلسة عبر جميع الأجهزة لتحقيق المشاركة والرضا الأمثل.",
      bgColor: "bg-green-100",
    },
    {
      imgSrc: sampleImage3,
      title: "فريق التطوير المخصص",
      description:
        "استفد من مطوري ELITE المخصصين لقدرة التسليم القابلة للتطوير. تعمل عمليتنا على بناء فرق البرامج وتحفيزها وإدارتها لتحقيق نجاح العميل.",
      bgColor: "bg-blue-100",
    },
  ];

  const [selectedSection, setSelectedSection] = useState(null);

  const handleClick = (index) => {
    setSelectedSection(selectedSection === index ? null : index);
  };

  return (
    <div>
      {/* Image and Heading Section */}
      <div className="relative w-full" style={{ height: "50vh" }}>
        <img
          src={imageSrc}
          alt="Software Development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-4xl  font-bold text-center leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 ">
          برمجة
            <br />
            تطوير
          </h1>
          <div className="bg-red-600 w-1/2 h-1 mt-4"></div>
        </div>
      </div>

      {/* Services Section */}
      <div className="containers mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-8">
        خدمات تطوير البرمجيات المخصصة الأساسية لدينا
        </h2>

        <p className="text-lg bg-blue-100 text-center text-gray-700 p-6 rounded-lg shadow-md transition-transform transform  mb-8">
        بدءًا من الاستشارات الإستراتيجية لتكنولوجيا المعلومات وخرائط الطريق التكنولوجية الشاملة وحتى
          التطوير الشامل للحلول القابلة للتطوير، تقدم ELITE أ
          خدمة تطوير البرامج ذات الدورة الكاملة التي تتكيف بسلاسة مع احتياجاتك
          متطلبات المشروع واحتياجات العمل.
        </p>

        <p className="text-lg bg-blue-100 text-gray-700 p-6 rounded-lg shadow-md transition-transform transform mb-16">
        مرحبًا بكم في ELITE، حيث نحن متخصصون في تقديم أحدث المنتجات
          خدمات تطوير البرمجيات المخصصة المصممة خصيصًا لعملك الفريد
          أهداف. تمتد مجموعتنا الشاملة من الخدمات من الإستراتيجية
          استشارات تكنولوجيا المعلومات للتنفيذ السلس للحلول القابلة للتطوير،
          ضمان أن رحلتك الرقمية تتسم بالكفاءة والفعالية.
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-300">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
                index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
              } service-card`}
              style={{ gridRowStart: index + 1 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-900">{service.description}</p>
              {/* Arrow pointing to the service */}
              <div
                className={`absolute ${
                  index % 2 === 0 ? "right-0" : "left-0"
                } top-1/2 transform ${
                  index % 2 === 0 ? "translate-x-full" : "-translate-x-full"
                } -translate-y-1/2`}
              >
                <div
                  className={`w-0 h-0 border-t-8 border-b-8 ${
                    index % 2 === 0
                      ? "border-l-8 border-l-black"
                      : "border-r-8 border-r-black"
                  } border-transparent`}
                ></div>
              </div>
            </div>
          ))}
          {/* Vertical line */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px bg-black"></div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
          هل أنت مستعد لإطلاق العنان لقدراتك الرقمية؟
          </h2>
          <p className="text-lg text-gray-700">
          تواصل معنا اليوم لمعرفة المزيد حول كيفية مساعدة ELITE
            يمكنك تحقيق أهداف عملك من خلال تطوير البرامج المخصصة.
          </p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {imageSections.map((section, index) => (
            <div
              key={index}
              className={`relative rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer ${section.bgColor}`}
              onClick={() => handleClick(index)}
            >
              <img
                src={section.imgSrc}
                alt={section.title}
                className="w-full h-64 object-cover"
              />
              <div
                className={`p-6 absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-300 ${
                  selectedSection === index ? "opacity-100" : "opacity-0"
                } md:opacity-0 md:hover:opacity-100`}
              >
                <h3 className="text-2xl font-semibold text-orange-300 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-200 text-center">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Software;
