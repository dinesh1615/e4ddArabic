import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import Card from "./Card/Card";
import Card1 from "./Card1/Card1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faCaretDown,
  faTimes,
  faAngleLeft,
  faAlignRight,
} from "@fortawesome/free-solid-svg-icons";
import Card3 from "./Card3/Card3";

const images = ["/a8.jpg", "/a6.jpg"];

const coreValues = [
  {
    title: "التنوع والشمول",
    description:
      "نرحب بالموظفين من جميع مناحي الحياة ونحتفل بما يجعلنا فريدين.",
    img: "/d1.jpg",
  },
  {
    title: "التزام العملاء",
    description: "نحن ملتزمون بتقديم خدمة عالية الجودة ودعم عملاء ممتاز.",
    img: "/d2.jpg",
  },
  {
    title: "الناس تتمركز",
    description: "إن سعادة ورفاهية موظفينا وعملائنا هي أولويتنا القصوى.",
    img: "/d3.jpg",
  },
  {
    title: "العمل الجماعي والتعاون",
    description:
      "نحن نتعاون عبر الفرق والوظائف ووحدات العمل لتقديم أفضل عمل ممكن.",
    img: "/d4.jpg",
  },
  {
    title: "الشفافية والمساءلة",
    description:
      "نحن نقدر التواصل المفتوح والصادق من الزملاء إلى المديرين التنفيذيين على حدٍ سواء.",
    img: "/d5.jpg",
  },
  {
    title: "احترام",
    description:
      "بالنسبة لنا، الاحترام يعني خلق بيئة عمل يتم فيها سماع وتقدير الجميع.",
    img: "/d6.jpg",
  },
  {
    title: "نزاهة",
    description:
      "نحن نسعى جاهدين لفعل ما هو صحيح عند التعامل مع زملائنا الموظفين والعملاء والموردين.",
    img: "/d7.jpg",
  },
  {
    title: "عاطفة",
    description: "نحن ملتزمون بتحقيق أهدافنا والتفوق عليها بتفان شديد.",
    img: "/d8.jpg",
  },
];

const Marquee = () => {
  return (
    <div className="marquee-container my-10">
      <div className="marquee-left ">
        <button className="marquee-button marquee-button-left w-[250px]">
          {/* DIVERSITY & INCLUSION */}
          التنوع والشمول
        </button>
        <button className="marquee-button marquee-button-left w-[250px]">
          {/* CUSTOMER COMMITMENT */}
          التزام العملاء
        </button>
        <button className="marquee-button marquee-button-left w-[250px]">
          {/* PEOPLE CENTRIC */}
          الناس تتمركز
        </button>
        <button className="marquee-button marquee-button-left w-[250px]">
          {/* INTEGRITY */}
          نزاهة
        </button>
        <button className="marquee-button marquee-button-left w-[250px]">
          {/* CUSTOMER COMMITMENT */}
          التزام العملاء
        </button>
      </div>
      <div className="marquee-right">
        <button className="marquee-button marquee-button-right w-[300px]">
          {/* TEAMWORK & COLLABORATION */}
          العمل الجماعي والتعاون
        </button>
        <button className="marquee-button marquee-button-right w-[300px]">
          {/* TRANSPARENCY & ACCOUNTABILITY */}
          الشفافية والمساءلة
        </button>
        <button className="marquee-button marquee-button-right w-[250px]">
          {/* RESPECT */}
          احترام
        </button>
        <button className="marquee-button marquee-button-right w-[250px]">
          {/* PASSION */}
          عاطفة
        </button>
        <button className="marquee-button marquee-button-right w-[300px]">
          {/* TEAMWORK & COLLABORATION */}
          العمل الجماعي والتعاون
        </button>
      </div>
    </div>
  );
};

const subsections = [
  {
    title: "المواقع الاستراتيجية",
    content:
      "مع مكاتب موزعة بشكل استراتيجي في جميع أنحاء أمريكا الشمالية والهند.",
    imgSrc: "/b1.jpg", // Replace with actual image path
  },
  {
    title: "الموهبة المهنية",
    content:
      "عندما تكون شريكًا مع System Soft، يمكنك الوصول إلى مجموعتنا من الموظفين ذوي المهارات العالية.",
    imgSrc: "/b2.jpg", // Replace with actual image path
  },
  {
    title: "شراكات طويلة الأمد",
    content:
      "نحن نتمتع بتكرار الأعمال بنسبة 80% من العملاء بفضل تجربة العملاء الرائعة التي نقدمها.",
    imgSrc: "/b3.jpg", // Replace with actual image path
  },
  {
    title: "التقنيات المتطورة",
    content: "نحن نستثمر بكثافة في التقنيات والأساليب لتعزيز خفة الحركة.",
    imgSrc: "/b4.jpg", // Replace with actual image path
  },
];

const sections = [
  {
    title: "بيان المهمة",
    content:
      "لقد استلهمنا مهمة تدريب ونشر وتمكين الأشخاص واتباع أفضل الممارسات التجارية لضمان النمو والاستدامة. نرغب في الاستمرار في بناء فرق محترفة حريصة على العمل والتعلم وإعادة توجيه نفسها إلى الأوقات المتغيرة وأن نكون قادرين على توفير أحدث حلول تكنولوجيا المعلومات الإستراتيجية مع منتجات وخدمات تقنية قوية لتلبية المتطلبات المعقدة لمؤسسات الأعمال الكبيرة بطريقة مرنة وسريعة الاستجابة ومتسقة تتماشى مع الأهداف طويلة المدى للنمو المتبادل.",
  },
  {
    title: "بيان الرؤية",
    content:
      "أفضل ما نقوم به! رؤى Rovonix لمكان يستطيع فيه الأفراد تحقيق النجاح والفشل في خطواتهم. منصة حيث يتحدى الأشخاص حدودهم ويوسعون آفاقهم، وبالتالي ندرج أنفسنا ضمن أفضل المنظمات التي تقدم حلول وخدمات تكنولوجيا المعلومات للمؤسسات في جميع قطاعات الأعما ملتزمون بتوفير رضا العملاء من خلال قياس إدراك العملاء إجراء الأعمال بطريقة شفافة مع جميع الأطراف المعنية ",
  },
];

const AboutUs = () => {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1);
    setCurrentCarouselIndex(
      (prevIndex) => (prevIndex - 1 + sections.length) % sections.length
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentCarouselIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const buttonStyle = {
    backgroundColor: isButtonClicked ? "black" : "white",
    color: isButtonClicked ? "white" : "black",
    border: "1px solid blue",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "20px",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <div className="about-us relative top-[100px] mb-[30px]">
      <Card1 />
      <div className="newcard3">
        <Card3 />
      </div>
      {/* <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="card1 relative mb-[50px] justify-center"
      >
        <div className="card2 ">
          <h2 className="text-white">
            OUR APPROACH TO <span className="highlight">PARTNERSHIP</span>
          </h2>
          <div className="cont">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="image-container ">
                <img src="/a4.jpg" alt="Partnership Image" />
              </div>
              <div className="m-5">
                <h4 className="text-white">
                  Our focus is on building long-term client relationships. By
                  becoming partners and trusted advisors, we are able to truly
                  understand and anticipate our clients unique needs. This
                  includes strategically placing offices across North America
                  and India so we can help our clients on a very personal level
                  based on their geographic locations. By doing this, we
                  successfully help organizations achieve significant ROI ahead
                  of schedule and below budget.
                </h4>
                <h4 className="text-white">
                  We also believe that happy employees take good care of
                  customers, so we are people-centric and strive to create an
                  environment that nurtures and empowers our employees. By
                  prioritizing the needs of our employees, we prioritize the
                  needs of our clients creating a company culture driven to
                  exceed expectations.
                </h4>
              </div>
            </div>
          </div>
          <button
            className="withbutton flex justify-center"
            style={buttonStyle}
            onClick={handleButtonClick}
          >
            <a href="#">PARTNER WITH US</a>
          </button>
        </div>
      </motion.div> */}

      <div className="carousel-container">
        <button className="carousel-button h-10 w-10" onClick={handlePrev}>
          &lt;
          {/* <FontAwesomeIcon icon={"arrow-left-to-arc"} /> */}
        </button>
        <motion.div
          key={currentCarouselIndex}
          initial={{ x: direction === 1 ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 1 ? -100 : 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="carousel-content"
        >
          <div className="section-card">
            <h3>{sections[currentCarouselIndex].title}</h3>
            <p className="sectiontext">
              {sections[currentCarouselIndex].content}
            </p>
          </div>
        </motion.div>
        <button className="carousel-button  h-10 w-10" onClick={handleNext}>
          &gt;
          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
        </button>
      </div>

      <div className="card-container1 my-10">
        {subsections.map((subsection, index) => (
          <Card
            key={index}
            title={subsection.title}
            content={subsection.content}
            imgSrc={subsection.imgSrc}
          />
        ))}
      </div>

      <Marquee />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-black my-5 text-center">القيم الجوهرية</h2>
        <div className="core-values">
          {coreValues.map((value, index) => (
            <article className="card_down">
              <div className="temporary_text">
                <img src={value.img} />
              </div>
              <div className="card_content_down">
                <span className="card_title_down">{value.title}</span>
                <span className="card_subtitle_down">{value.description}</span>
                <span className="card_description_down">
                  {value.description}
                </span>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="quote text-black">
          {/* "Our deeply collaborative approach helps our clients overcome the most
          daunting IT challenges" */}
          "إن نهجنا التعاوني العميق يساعد عملائنا على التغلب على معظم التحديات
          تحديات تكنولوجيا المعلومات الصعبة"
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;