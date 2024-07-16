import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import {
  FaTasks,
  FaProjectDiagram,
  FaIndustry,
  FaChartLine,
  FaGlobe,
  FaUserTie,
  FaDigitalTachograph,
  FaCloud,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import one from "./one.mp4";
import two from "./two.mp4";
import MissionVision from "./MissionVision";
import ReasonsGrid from "./ReasonsGrid";
import { Link } from "react-router-dom";
// import CustomLangSwitcher from "./CustomLangSwitcher";
// import { withTranslation } from "react-google-multi-lang";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resolvedIssues, setResolvedIssues] = useState(0);
  const [finishedProjects, setFinishedProjects] = useState(0);
  const [industrySolutions, setIndustrySolutions] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for backward
  const servicesContainerRef = useRef(null);
  const [showGrid, setShowGrid] = useState(false);

  // Function to toggle between grid view and scrolling view
  const toggleGridView = () => {
    setShowGrid(!showGrid);
  };

  const steps = [
    {
      step: 1,
      icon: "fas fa-briefcase", // Example icon class
      subtitle: "تخطيط",
      title: "الخطوة الأولى: التخطيط",
      borderColor: "#FF5733", // Example color
      topArcColor: "#FFBD33",
      bottomArcColor: "#FF5733",
    },
    {
      step: 2,
      icon: "fas fa-cogs",
      subtitle: "تنفيذ",
      title: "الخطوة الثانية: التنفيذ",
      borderColor: "#33FF57",
      topArcColor: "#33FFBD",
      bottomArcColor: "#33FF57",
    },
    {
      step: 3,
      icon: "fas fa-chart-line",
      subtitle: "يراقب",
      title: "الخطوة الثالثة: المراقبة",
      borderColor: "#3357FF",
      topArcColor: "#33BDFF",
      bottomArcColor: "#3357FF",
    },
    {
      step: 4,
      icon: "fas fa-award",
      subtitle: "انتهاء",
      title: "الخطوة الرابعة: الإكمال",
      borderColor: "#FF33A8",
      topArcColor: "#FF33BD",
      bottomArcColor: "#FF33A8",
    },
  ];

  function getDescription(title) {
    switch (title) {
      case "التطوير والتطوير والبنية التحتية":
        return "التصنيع والبناء والموزعين والتجارة وتاجر الجملة.";
      case "بفسي":
        return "خدمات متخصصة لقطاعات البنوك والخدمات المالية والتأمين.";
      case "التعليم والتكنولوجيا التعليمية":
        return "تقنيات التعليم المبتكرة الجامعات والكليات والمدارس ومؤسسات التدريب.";
      case "السفر والسياحة":
        return "حلول إدارة السفر وابتكارات صناعة السياحة، الفنادق والمنتجعات، بوابات الحجز عبر الإنترنت.";
      case "الرعاىة الصحية":
        return "تقنيات الرعاية الصحية المتقدمة المستشفيات، عيادة أطفال الأنابيب، عيادات الأطباء، شركات الأدوية.";
      case "حلول إنترنت الأشياء الصناعية":
        return "حلول إنترنت الأشياء مصممة لتحسين العمليات الصناعية والكفاءة.";
      case "حلول أتمتة الفنادق والمنتجعات":
        return "حلول الأتمتة لتعزيز تجارب الضيوف في مجال الضيافة.";
      case "أتمتة النقل":
        return "حلول الأتمتة المتقدمة لقطاع النقل.";
      case "حلول إنترنت الأشياء الزراعية":
        return "حلول إنترنت الأشياء مصممة لتحسين الإنتاجية الزراعية.";
      case "الأنظمة المضمنة":
        return "تطوير الأنظمة المدمجة المبتكرة لمختلف التطبيقات.";
      case "خدمات التنفيذ":
        return "خدمات الخبراء للتنفيذ السلس للحلول التقنية.";
      case "تطوير التطبيقات":
        return "تطوير تطبيقات مخصصة لتلبية احتياجات عملك.";
      case "الخدمات المدارة":
        return "خدمات مدارة شاملة لدعم البنية التحتية لتكنولوجيا المعلومات لديك.";
      case "حلول التكامل":
        return "حلول التكامل لتبسيط العمليات التجارية الخاصة بك.";
      default:
        return "الوصف غير متوفر.";
    }
  }

  const services2 = [
    {
      title: "التطوير والتطوير والبنية التحتية",
      image: "/images/service/18.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "بفسي",
      image: "/images/service/19.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "التعليم والتكنولوجيا التعليمية",
      image: "/images/service/21.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "السفر والسياحة",
      image: "/images/service/22.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "الرعاىة الصحية",
      image: "/images/service/23.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "حلول إنترنت الأشياء الصناعية",
      image: "/images/service/24.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "حلول أتمتة الفنادق والمنتجعات",
      image: "/images/service/11.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "أتمتة النقل",
      image: "/images/service/12.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "حلول إنترنت الأشياء الزراعية",
      image: "/images/service/13.jpg",
      backgroundImage: "/icon-19.png",
      link: "service-details-2#",
    },
    {
      title: "الأنظمة المضمنة",
      image: "/images/service/14.jpg",
      backgroundImage: "/icon-19.png",
      link: "service-details-3#",
    },
    {
      title: "خدمات التنفيذ",
      image: "/images/service/15.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "تطوير التطبيقات",
      image: "/images/service/16.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "الخدمات المدارة",
      image: "/images/service/17.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "حلول التكامل",
      image: "/images/service/20.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
  ];

  const images = [
    {
      src: "/banner-1.jpg",
      title: "تظهر لك طريق النجاح",
      tagline: "توجيه أعمالك نحو النجاح من خلال الحلول المبتكرة.",
    },
    {
      src: "/banner-2.jpg",
      title: "استشارات الأعمال والأفراد",
      tagline: "خدمات استشارية مخصصة للشركات والأفراد.",
    },
    {
      src: "/banner-3.jpg",
      title: "أفكار لنمو أفضل",
      tagline: "أفكار مبتكرة لتعزيز نمو عملك.",
    },
  ];

  useEffect(() => {
    // Add animation to title when currentIndex changes
    const titles = document.querySelectorAll(".carousel-item h2");
    titles.forEach((title) => {
      title.classList.remove("animate-fade-in");
      void title.offsetWidth; // Trigger reflow
      title.classList.add("animate-fade-in");
    });
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const intervalResolved = setInterval(() => {
      if (resolvedIssues < 150) {
        setResolvedIssues((prevCount) => prevCount + 1);
      }
    }, 20);

    const intervalProjects = setInterval(() => {
      if (finishedProjects < 400) {
        setFinishedProjects((prevCount) => prevCount + 1);
      }
    }, 10);

    const intervalSolutions = setInterval(() => {
      if (industrySolutions < 30) {
        setIndustrySolutions((prevCount) => prevCount + 1);
      }
    }, 30);

    return () => {
      clearInterval(intervalResolved);
      clearInterval(intervalProjects);
      clearInterval(intervalSolutions);
    };
  }, [resolvedIssues, finishedProjects, industrySolutions]);

  const services = [
    {
      number: "1",
      title: "تخطيط موارد المشاريع",
      description:
      "يدمج برنامج ERP جميع العمليات التجارية الأساسية للشركة.",
      icon: <FaChartLine className="text-blue-600 text-4xl" />,
      color: "blue-600",
    },
    {
      number: "2",
      title: "تقنيات الويب",
      description:
        "الأدوات والتقنيات المستخدمة لتصميم مواقع الويب وتطويرها وصيانتها.",
      icon: <FaGlobe className="text-green-600 text-4xl" />,
      color: "green-600",
    },
    {
      number: "3",
      title: "عملية التوظيف الاستعانة بمصادر خارجية",
      description:
        "قرار العمل الاستراتيجي لتكليف أنشطة التوظيف.",
      icon: <FaUserTie className="text-red-600 text-4xl" />,
      color: "red-600",
    },
    {
      number: "4",
      title: "التسويق الرقمي",
      description:
        "استخدام الإنترنت والأجهزة المحمولة ووسائل التواصل الاجتماعي والقنوات الرقمية الأخرى.",
      icon: <FaDigitalTachograph className="text-purple-600 text-4xl" />,
      color: "purple-600",
    },
    {
      number: "5",
      title: "تسجيل النطاقات",
      description:
        "عملية المطالبة باسم فريد لموقعك على الإنترنت.",
      icon: <FaGlobe className="text-yellow-600 text-4xl" />,
      color: "yellow-600",
    },
    {
      number: "6",
      title: "دعم ساب",
      description:
        "خيارات الدعم للعملاء بناءً على احتياجاتهم الخاصة.",
      icon: <FaCloud className="text-blue-600 text-4xl" />,
      color: "blue-600",
    },
    {
      number: "7",
      title: "طرح SAP وترحيله",
      description:
        "الفرق الرئيسي بين طرح SAP وترحيل SAP.",
      icon: <FaServer className="text-orange-600 text-4xl" />,
      color: "orange-600",
    },
    {
      number: "8",
      title: "SAP السحابية والاستضافة",
      description: "Running SAP software on the cloud.",
      icon: <FaCloud className="text-gray-600 text-4xl" />,
      color: "gray-600",
    },
    {
      number: "9",
      title: "صيانة وتراخيص SAP",
      description:
        "ضمان الأداء الوظيفي المستمر والامتثال القانوني لبرنامج SAP.",
      icon: <FaDatabase className="text-brown-600 text-4xl" />,
      color: "brown-600",
    },
  ];

  const reasons = [
    {
      title: "تحسين محركات البحث (SEO)",
      description:
        "يمكننا مساعدتك في تحقيق تصنيفات عضوية أكبر ومزيد من الظهور في نتائج البحث من خلال إجراء بحث شامل عن الكلمات الرئيسية واستخدامها.",
      p: "تسويق",
    },
    {
      title: "إبداعات الرابط",
      description:
        "احصل على حركة مرور متسقة من مواقع الويب الموثوقة لتعزيز مصداقية علاماتك التجارية لدى العملاء. تستخدم شركة SEO الخاصة بنا المحتوى المدعوم والإعلانات المدفوعة.",
      p: "إستراتيجية",
    },
    {
      title: "التسويق عبر وسائل التواصل الاجتماعي (SMO)",
      description:
        "نقوم بإنشاء إدارة فريدة للعلامة التجارية لوسائل التواصل الاجتماعي وخطط إعلانية مدفوعة تناسب شركتك.",
      p: "تطوير",
    },
    {
      title: "إدارة الدفع لكل نقرة (PPC)",
      description:
        "نحن نعتني بالتسويق الكامل عبر محرك البحث (SEM).",
      p: "يحسن",
    },
    {
      title: "كتابة المحتوى",
      description:
        "يعد محتوى موقع الويب الخاص بك أمرًا بالغ الأهمية لأنه يشكل أساس تحسين محركات البحث (SEO) الخاص بك ويجذب العديد من الزوار. للتأكد من أننا نقوم بإنشاء مواد تتوافق مع معايير Google.",
      p: "مبدع",
    },
    {
      title: "التوظيف والتوظيف",
      description: "التركيز والعملية والعلامة التجارية والتطوير لصاحب العمل.",
      p: "أداة",
    },
  ];

  useEffect(() => {
    const servicesContainer = servicesContainerRef.current;

    const scrollInterval = setInterval(() => {
      if (servicesContainer) {
        const maxScrollLeft =
          servicesContainer.scrollWidth - servicesContainer.clientWidth;

        if (
          scrollDirection === 1 &&
          servicesContainer.scrollLeft >= maxScrollLeft
        ) {
          setScrollDirection(-1);
        } else if (
          scrollDirection === -1 &&
          servicesContainer.scrollLeft <= 0
        ) {
          setScrollDirection(1);
        }

        servicesContainer.scrollBy({
          left: scrollDirection * 200,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [scrollDirection]);

  return (
    <div className="w-full mx-auto relative">
      <div className="relative">
        <div className="w-full overflow-hidden shadow-lg mb-8 px-0">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-item min-w-full relative">
                <img
                  src={image.src}
                  alt="e4dd Banner"
                  className={`w-full h-auto object-cover ${
                    currentIndex === index ? "zoom-in" : "zoom-out"
                  }`}
                />
                <div className="carousel-contenth absolute top-1/2 left-4 transform -translate-y-1/2 md:top-1/3 md:left-8 lg:top-1/3 lg:left-12 text-white p-2 md:p-4 lg:p-6 bg-opacity-50 rounded">
                  <h2 className="text-sm md:text-3xl lg:text-5xl font-bold bg-opacity-70 p-0.5 md:p-2 lg:p-3 rounded animate-fade-in">
                    {image.title}
                  </h2>
                  <p className="text-xs md:text-xl lg:text-2xl mt-0.5 md:mt-2 lg:mt-3">
                    <span className="inline-block bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 bg-opacity-70 text-transparent bg-clip-text p-0.5 md:p-2 lg:p-3 rounded">
                      {image.tagline}
                    </span>
                  </p>
                  <div className="text-left mt-2 md:mt-4 lg:mt-6">
                    <Link
                      to="/services"
                      className="inline-block py-1 px-2 md:py-2 md:px-6 lg:py-2 lg:px-6 bg-orange-500 text-white text-sm md:text-base lg:text-lg font-semibold rounded-lg transition-colors duration-700"
                      style={{
                        backgroundImage:
                          "linear-gradient(45deg, #FFA500, #FF4500)", // initial gradient
                        transition:
                          "background 0.5s ease-in-out, color 0.5s ease-in-out",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundImage =
                          "linear-gradient(45deg, #1E90FF, #32CD32, #FF69B4)"; // hover gradient
                        e.currentTarget.style.color = "black"; // hover text color
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundImage =
                          "linear-gradient(45deg, #FFA500, #FF4500)"; // initial gradient
                        e.currentTarget.style.color = "white"; // initial text color
                      }}
                    >
                      الخدمات والخطة
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        .carousel-container {
          width: 100%;
          margin: 0;
          overflow-x: hidden;
          padding: 0;
        }

        .carousel-item {
          width: 100%;
        }

        img {
          width: 100%;
          height: auto;
        }

        header,
        nav {
          width: 100%;
          margin: 0;
          padding: 0;
          max-width: 100vw;
        }

        section {
          width: 100%;
          padding: 0;
          margin: 0;
          max-width: 100vw;
        }

        @media (max-width: 1024px) {
          .container,
          .carousel-container,
          .carousel-item,
          header,
          nav,
          section {
            max-width: 100vw;
          }
        }
      `}</style>

      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="circle-container relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 overflow-hidden rounded-full shadow-lg mb-4 md:mb-0">
          <img
            src="/about-1.jpg"
            alt="e4dd Team"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="text-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <div className="years text-4xl md:text-4xl lg:text-5xl font-bold">
              20
            </div>
            <div className="experience text-lg md:text-lg lg:text-xl">
            سنوات خبرة
            </div>
          </div>
        </div>

        <div className="flex-1 md:ml-8 " style={{ marginTop: "-20px" }}>
          <div className="flex items-center justify-center w-full my-8">
            <div className="flex-grow border-t-2 border-gray-700 wavy-border"></div>
            <span className="mx-4 text-2xl text-blue-500">★</span>
            <h1 className="text-4xl font-bold font-cinzel mx-4">
              20 سنوات خبرة
            </h1>
            <span className="mx-4 text-2xl text-green-500">★</span>
            <div className="flex-grow border-t-2 border-gray-700 wavy-border"></div>
            {/* <CustomLangSwitcher /> */}
          </div>

          <p className="mt-4 text-center md:text-left">
          التعامل مع مهام العمل الصعبة. إعطاء العقود الآجلة لعملك ليس فقط،
            دعونا ننمو معًا لنعطي أجنحة للأحلام المالية.
          </p>

          <div className="flex items-center justify-center md:justify-start w-full my-8">
            <div className="flex-grow border-t-2 border-gray-700 diamond-border"></div>
            <span className="mx-4 text-2xl text-purple-500">◆</span>
            <h2
              id="about"
              className="text-4xl font-semi-bold font-cinzel mx-4 my-0"
            >
              معلومات عنا
            </h2>
            <span className="mx-4 text-2xl text-red-500">◆</span>
            <div className="flex-grow border-t-2 border-gray-700 diamond-border"></div>
          </div>

          <h3 className="text-2xl font-semibold mt-8 text-center md:text-left">
          خبراء في تقديم حلول تكنولوجيا المعلومات.
          </h3>

          <ul className="mt-4 space-y-4 text-center md:text-left">
            <li className="flex items-center text-2xl text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out transform hover:scale-105">
              <svg
                className="w-6 h-6 mr-2 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <Link to="/academy">E4dd الأكاديمية</Link>
            </li>
            <li className="flex items-center text-2xl text-gray-700 hover:text-blue-500 transition duration-200 ease-in-out transform hover:scale-105">
              <svg
                className="w-6 h-6 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <Link to="/foundation">E4dd مؤسسة</Link>
            </li>
          </ul>

          <p className="mt-4 text-center md:text-left">
            <span className="stylish-text">e4dd</span> ، شركة رائدة
            شريك، يعمل على تمكين الشركات الصغيرة والمتوسطة الحجم في جميع أنحاء العالم. ملكنا
            يقع المقر الرئيسي في حيدر أباد، الهند، ولكننا نخدم العملاء على مستوى العالم.
            نحن متخصصون في حلول تكنولوجيا المعلومات المبتكرة التي تعمل على تحسين عملك
            العمليات ودفع النمو المستدام..
          </p>

          <style jsx>{`
            .stylish-text {
              font-family: "Cinzel", serif;
              font-size: 23px;
              font-weight: bold;
              background: linear-gradient(
                45deg,
                #ff4500,
                #ffd700,
                #32cd32,
                #1e90ff
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              padding: 5px;
              box-shadow: 0 0 5px rgba(255, 69, 0, 0.5),
                0 0 10px rgba(255, 215, 0, 0.5), 0 0 15px rgba(50, 205, 50, 0.5),
                0 0 20px rgba(30, 144, 255, 0.5);
              transition: all 0.3s ease;
            }

            // .stylish-text:hover {
            //   text-shadow: 0 0 10px rgba(255, 69, 0, 0.7), 0 0 15px rgba(255, 215, 0, 0.7), 0 0 20px rgba(50, 205, 50, 0.7), 0 0 25px rgba(30, 144, 255, 0.7);
            //   transform: scale(1.1);
            // }
          `}</style>

          <Link
            to="/aboutus"
            className="inline-block mt-4 py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg relative overflow-hidden transition duration-900 ease-in-out transform hover:scale-105 focus:scale-105 focus:outline-none text-center md:text-left"
            style={{
              backgroundImage: "linear-gradient(45deg, #FFA500, #FF4500)", // initial gradient
              transition: "background 0.5s ease-in-out, color 0.5s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundImage =
                "linear-gradient(45deg, #1E90FF, #32CD32, #FF69B4)"; // hover gradient
              e.currentTarget.style.color = "black"; // hover text color
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundImage =
                "linear-gradient(45deg, #FFA500, #FF4500)"; // initial gradient
              e.currentTarget.style.color = "white"; // initial text color
            }}
          >
            <span className="absolute left-0 top-0 w-full h-full bg-blue-600 opacity-0 transition duration-300 ease-in-out transform hover:opacity-100"></span>
            <span className="relative z-10">المزيد عنا</span>
          </Link>
        </div>
      </div>

      <section className="my-8">
        <div className="text-center">
          <div className="flex items-center justify-center w-full my-8">
            <div className="flex-grow border-t-2 border-black diamond-border"></div>
            <span className="mx-4 text-3xl text-purple-500">❖</span>
            <h2 className="text-4xl font-bold font-cinzel text-center mx-4 my-0">
            الأرقام تتحدث عن نفسها
            </h2>
            <span className="mx-4 text-3xl text-purple-500">❖</span>
            <div className="flex-grow border-t-2 border-black diamond-border"></div>
          </div>

          <p className="mt-4">إليك ما حققناه حتى الآن</p>
        </div>
        <div className="mt-2 flex items-center justify-center space-x-6">
          <div className="message-bubble text-center bg-blue-200 p-4 rounded-lg">
            <FaTasks className="text-4xl text-blue-600" />
            <p className="text-4xl font-bold">{resolvedIssues}</p>
            <p>القضايا اليومية حلها</p>
          </div>
          <div className="message-bubble text-center bg-green-200 p-4 rounded-lg">
            <FaProjectDiagram className="text-4xl text-green-600" />
            <p className="text-4xl font-bold">{finishedProjects}</p>
            <p>المشاريع المنتهية</p>
          </div>
          <div className="message-bubble text-center bg-yellow-200 p-4 rounded-lg">
            <FaIndustry className="text-4xl text-yellow-600" />
            <p className="text-4xl font-bold">{industrySolutions}</p>
            <p>حلول صناعية</p>
          </div>
        </div>
      </section>

      <section className="my-8 text-center">
        <div className="flex items-center justify-center w-full my-8">
          <div className="flex-grow border-t-4 custom-dotted-border mx-4"></div>
          <span className="mx-4 text-3xl text-custom-gold">✶</span>
          <h2 className="text-3xl font-semibold custom-font text-center mx-4 my-0 text-custom-gold">
          خدماتنا
          </h2>
          <span className="mx-4 text-3xl text-custom-gold">✶</span>
          <div className="flex-grow border-t-4 custom-dotted-border mx-4"></div>
        </div>

        <div
          ref={servicesContainerRef}
          className="mt-6 flex flex-wrap md:flex-nowrap overflow-x-auto md:space-x-4 p-4"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`custom-service-card flex-shrink-0 w-full md:w-80 bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-${service.color} mb-4 md:mb-0`}
            >
              <div className="relative">
                <div
                  className={`custom-message-bubble absolute top-0 left-0 m-4 p-2 bg-${service.color} rounded-full flex items-center justify-center`}
                >
                  <div className="custom-number text-lg font-bold text-white mr-2">
                    {service.number}
                  </div>
                  <div className="custom-icon p-2 bg-white rounded-full">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="custom-content p-4 mt-16">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2">{service.description}</p>
                <div className="custom-explore-more mt-4 flex items-center justify-between">
                  <span className="text-blue-500 font-semibold">
                  استكشاف المزيد
                  </span>
                  <div className="custom-animation-arrow w-4 h-4 bg-blue-500 transform rotate-45"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .custom-dotted-border {
          border-style: dotted;
        }
        .custom-gold {
          color: #ffd700; /* Example gold color */
        }
        .custom-font {
          font-family: "Cinzel", serif;
        }
        .custom-service-card {
          min-width: 320px; /* Adjust the width as needed */
        }
        @media (min-width: 768px) {
          .custom-service-card {
            min-width: 320px; /* Adjust the width as needed */
          }
        }
        .custom-service-card,
        .custom-content,
        .custom-message-bubble {
          overflow: visible !important;
        }
        .custom-message-bubble {
          background-color: var(--custom-bg-color);
        }
        .custom-number {
          color: var(--custom-number-color);
        }
        .custom-icon {
          background-color: var(--custom-icon-bg);
        }
        .custom-explore-more {
          color: var(--custom-explore-color);
        }
        .custom-animation-arrow {
          background-color: var(--custom-arrow-bg);
        }
        /* Define border colors for services */
        .border-blue {
          border-color: blue;
        }
        .border-green {
          border-color: green;
        }
        .border-red {
          border-color: red;
        }
        .border-yellow {
          border-color: yellow;
        }
        .border-purple {
          border-color: purple;
        }
      `}</style>

      <section id="growth" className="py-10 bg-blue-200">
        <div className="container1 mx-auto px-4 flex flex-wrap md:flex-nowrap">
          {/* Left Column - Our Growth */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-4 relative bg-white rounded-lg shadow-md p-2 text-center">
            <div className="flex items-center justify-center w-full my-8">
              <div className="flex-grow border-t-2 border-gold glory-border"></div>
              <span className="mx-4 text-4xl text-purple-500">◆</span>
              <h2 className="text-4xl font-bold font-cinzel text-center mx-4 my-0">
              نمونا
              </h2>
              <span className="mx-4 text-4xl text-purple-500">◆</span>
              <div className="flex-grow border-t-2 border-gold glory-border"></div>
            </div>

            <h2 className="text-xl text-gray-600">
            التفكير خارج الاستراتيجيات العادية
            </h2>
            <div className="mt-4 text-lg text-gray-700">
            تحليل الاتجاهات الحالية في سوق حلول SAP وERP وتكنولوجيا المعلومات
              تحديد فرص النمو الجديدة.
              <h2 className="mt-4 font-bold text-xl">
              إدارة أعمال أفضل:
              </h2>
              <div className="ml-4">
                <p>
                حلولنا الأفضل في فئتها مخصصة لكل عميل
                  تسهيل الموثوقية التشغيلية والتخريبية
                  تحويل. حلولنا المتميزة للغاية قادرة على
                  إن تحقيق أهداف محددة بأقل قدر من الاستثمار يجعلنا
                  شريك تكنولوجيا المعلومات المفضل للشركات عبر قطاعات الصناعة
                  مثل الخدمات المصرفية والتأمين والتصنيع والخدمات والرعاية الصحية،
                  وسائل الإعلام والاتصالات، الخ.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#growth"
                className="inline-block bg-orange-500 text-lg font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 focus:scale-105 focus:outline-none transition duration-500 ease-in-out relative overflow-hidden"
                style={{
                  backgroundImage: "linear-gradient(45deg, #FFA500, #FF4500)", // initial gradient
                  transition:
                    "background 0.5s ease-in-out, color 0.5s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage =
                    "linear-gradient(45deg, #1E90FF, #32CD32, #FF69B4)"; // hover gradient
                  e.currentTarget.style.color = "black"; // hover text color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage =
                    "linear-gradient(45deg, #FFA500, #FF4500)"; // initial gradient
                  e.currentTarget.style.color = "white"; // initial text color
                }}
              >
                <span className="relative z-10">تعرف أكثر</span>
                <span className="absolute inset-0 bg-white opacity-0 transition duration-300 ease-in-out"></span>
              </a>
            </div>

            {/* Animated GIFs */}
            <div className="flex justify-center pt-8">
              <div className="w-1/2 px-1">
                <video className="w-full h-auto" autoPlay loop muted>
                  <source src={one} type="video/mp4" />
                  متصفحك الحالي لا يدعم تشغيل الفيديو.
                </video>
              </div>
              <div className="w-1/2 px-1">
                <video className="w-full h-auto" autoPlay loop muted>
                  <source src={two} type="video/mp4" />
                  متصفحك الحالي لا يدعم تشغيل الفيديو.
                </video>
              </div>
            </div>
          </div>

          {/* Right Column - Mission and Vision */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <MissionVision />
          </div>
        </div>
      </section>

      <div className="flex items-center mx-4 my-10">
        <div className="flex-grow border-t-2 border-gray-700"></div>
        <span className="mx-4 text-2xl text-pink-500">❀</span>
        <h2
          id="why-choose-us"
          className="text-4xl font-semibold text-center mx-4 font-cinzel"
        >
          لماذا أخترتنا؟
        </h2>
        <span className="mx-4 text-2xl text-yellow-500">❀</span>
        <div className="flex-grow border-t-2 border-gray-700"></div>
      </div>

      <div
        className="flex items-center justify-center w-full"
        style={{ marginTop: "-10px", marginBottom: "-5px" }}
      >
        <h4 className="text-3xl font-semibold text-center mb-4 font-cinzel">
        التسويق الرقمي مع الخدمات
        </h4>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold">
          <span
            style={{
              backgroundImage: "linear-gradient(45deg, #1E90FF, #00BFFF)", // Blue gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
           ملكنا
          </span>{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(45deg, #FF6347, #FFD700, #ADFF2F)", // Red-Yellow-Green gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            التالي
          </span>{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(45deg, #FFA500, #FF69B4)", // Orange-Pink gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            حافة
          </span>{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(45deg, #4B0082, #8A2BE2)", // Indigo-Purple gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            رقمي
          </span>{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(45deg, #008000, #32CD32)", // Green-Lime gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            تسويق
          </span>{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(45deg, #FF1493, #FF4500)", // DeepPink-OrangeRed gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            خدمات
          </span>{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(45deg, #FFD700, #FF8C00)", // Gold-DarkOrange gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            يولد
          </span>{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(45deg, #4B0082, #8A2BE2)", // Indigo-Purple gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ربح
          </span>{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(45deg, #1E90FF, #00BFFF)", // Blue gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ل
          </span>{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(45deg, #FF6347, #FFD700, #ADFF2F)", // Red-Yellow-Green gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            أنت
          </span>
        </p>
      </div>

      <section className="relative py-12">
        {/* Background Text */}
        <div
          className="absolute inset-0 flex justify-center items-center z-0"
          style={{ top: "90%" }}
        >
          <div className="flex flex-col items-center">
            <h1
              className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800 opacity-20 transform rotate-0 shadow-2xl mt-2"
              style={{ fontFamily: "Shadowend" }}
            >
              لماذا أخترتنا
            </h1>
          </div>
        </div>

        {/* Foreground Content */}
        <div>
          <ReasonsGrid reasons={reasons} />
          {/* Add other components or content as needed */}
        </div>
      </section>

      <style jsx>{`
        .font-shadowend {
          font-family: "Shadowend", sans-serif;
        }
        .custom-left-grid,
        .custom-right-grid,
        .custom-center-image {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .custom-card {
          min-width: 320px;
        }
        .custom-overlay {
          background-color: rgba(0, 0, 0, 0.7);
        }
        .custom-content {
          z-index: 1;
        }
        .custom-center-image .w-48 {
          width: 12rem;
          height: 12rem;
        }
        .custom-center-image .md:w-64 {
          width: 16rem;
          height: 16rem;
        }
        .custom-center-image .lg:w-80 {
          width: 20rem;
          height: 20rem;
        }
        .custom-description-font {
          font-family: "Georgia", Montserrat;
        }
        .custom-title-font {
          font-family: "Arial", Roboto;
        }
        .custom-paragraph-font {
          font-family: "Verdana", Playfair Display;
        }

        @media (max-width: 767px) {
          .custom-left-grid,
          .custom-right-grid {
            margin-bottom: 1rem;
          }
          .custom-card {
            margin-bottom: 1rem;
          }
        }
      `}</style>

      <section className="py-6" style={{ marginTop: "-15px" }}>
        <div className="container1 mx-auto overflow-hidden">
          <div className="flex items-center justify-center w-full my-8">
            <div className="flex-grow h-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-transparent"></div>
            </div>
            <span className="mx-4 text-3xl text-red-600">❤️</span>
            <h2 className="text-4xl font-bold text-gray-800">نحن نعمل من أجل</h2>
            <span className="mx-4 text-3xl text-red-600">❤️</span>
            <div className="flex-grow h-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent"></div>
            </div>
          </div>
          <div className="text-center mb-8">
            <h5 className="text-lg text-gray-600 inline-block relative">
            الصناعات التي خدمناها
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-gray-600 to-transparent"></span>
            </h5>
          </div>

          <div
            className="text-center mt-8"
            style={{ marginTop: "-15px", marginBottom: "10px" }}
          >
            <p className="text-lg font-bold">
              <span
                style={{
                  backgroundImage: "linear-gradient(45deg, #1E90FF, #00BFFF)", // Blue gradient
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                نحن لا نركز على التقنيات،
              </span>{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, #FF6347, #FFD700, #ADFF2F)", // Red-Yellow-Green gradient
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                نحن نركز على الحلول،
              </span>{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(45deg, #FFA500, #FF69B4)", // Orange-Pink gradient
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                مهما كانت التكنولوجيا التي يتطلبها الأمر
              </span>
            </p>
          </div>

          <div className="flex animate-scroll">
            {services2.map((service, index) => (
              <div
                key={index}
                className={`custom-service-block bg-blue-100 p-6 rounded-lg shadow-md hover:bg-white hover:shadow-xl transition-shadow duration-300 flex-none w-64 mx-2 ${
                  showGrid ? "hidden" : ""
                }`}
                style={{
                  backgroundImage: `url(${service.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="custom-inner-box bg-white bg-opacity-75 p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">
                    <a href={service.link !== "#" ? service.link : undefined}>
                      {service.title}
                    </a>
                  </h3>
                  <div className="custom-image-container mb-4 overflow-hidden">
                    <figure className="custom-image-box transform transition-transform duration-300 ease-in-out">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover transition-transform duration-300 ease-in-out hover:w-full hover:h-40 hover:rounded-lg"
                      />
                    </figure>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {getDescription(service.title)}
                  </p>
                  <div className="custom-link-box">
                    <a
                      href={service.link !== "#" ? service.link : undefined}
                      className="text-blue-500"
                    >
                      <i className="flaticon-right-arrow-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More and See Less buttons */}
          <div className="text-center mt-8">
            <button
              onClick={toggleGridView}
              className={`relative overflow-hidden bg-blue-500 text-white px-4 py-2 rounded-md shadow-md transform hover:scale-105 focus:scale-105 focus:outline-none transition duration-500 ease-in-out ${
                showGrid ? "hidden" : ""
              }`}
              style={{
                backgroundImage: "linear-gradient(45deg, #1E90FF, #00BFFF)", // initial gradient
                transition:
                  "background 0.5s ease-in-out, color 0.5s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage =
                  "linear-gradient(45deg, #FF6347, #FFD700, #ADFF2F)"; // hover gradient
                e.currentTarget.style.color = "black"; // hover text color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage =
                  "linear-gradient(45deg, #1E90FF, #00BFFF)"; // initial gradient
                e.currentTarget.style.color = "white"; // initial text color
              }}
            >
              تحميل المزيد
            </button>
          </div>

          {/* Grid view */}
          {showGrid && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {services2.map((service, index) => (
                <div
                  key={index}
                  className="custom-service-block bg-blue-100 p-6 rounded-lg shadow-md hover:bg-white hover:shadow-xl transition-shadow duration-300 flex-none mx-2"
                  style={{
                    backgroundImage: `url(${service.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="custom-inner-box bg-white bg-opacity-75 p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">
                      <a href={service.link !== "#" ? service.link : undefined}>
                        {service.title}
                      </a>
                    </h3>
                    <div className="custom-image-container mb-4 overflow-hidden">
                      <figure className="custom-image-box transform transition-transform duration-300 ease-in-out">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover transition-transform duration-300 ease-in-out hover:w-full hover:h-40 hover:rounded-lg"
                        />
                      </figure>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {getDescription(service.title)}
                    </p>
                    <div className="custom-link-box">
                      <a
                        href={service.link !== "#" ? service.link : undefined}
                        className="text-blue-500"
                      >
                        <i className="flaticon-right-arrow-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* See Less button */}
          {showGrid && (
            <div className="text-center mt-4">
              <button
                onClick={toggleGridView}
                className="relative overflow-hidden bg-blue-500 text-white px-4 py-2 rounded-md shadow-md transform hover:scale-105 focus:scale-105 focus:outline-none transition duration-500 ease-in-out"
                style={{
                  backgroundImage: "linear-gradient(45deg, #1E90FF, #00BFFF)", // initial gradient
                  transition:
                    "background 0.5s ease-in-out, color 0.5s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage =
                    "linear-gradient(45deg, #FF6347, #FFD700, #ADFF2F)"; // hover gradient
                  e.currentTarget.style.color = "black"; // hover text color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage =
                    "linear-gradient(45deg, #1E90FF, #00BFFF)"; // initial gradient
                  e.currentTarget.style.color = "white"; // initial text color
                }}
              >
               انظر أقل
              </button>
            </div>
          )}
        </div>
      </section>

      <section
        className="working-style-two py-1 bg-gray-100"
        style={{ marginTop: "-15px" }}
      >
        <div className="container1 mx-auto">
          <div className="flex flex-col items-center justify-center my-8">
            {/* Mobile View */}
            <div className="flex md:hidden items-center justify-center w-full">
              <span className="text-3xl text-purple-600 mx-4">ꦛꦶ</span>
              <h2 className="text-4xl font-bold text-gray-800 text-center">
              كيف نعمل
              </h2>
              <span className="text-3xl text-purple-600 mx-4">ꦛꦶ</span>
            </div>

            {/* Larger Screens */}
            <div className="hidden md:flex items-center justify-between w-full">
              <div className="flex-grow h-1 relative w-1/3">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-transparent"></div>
              </div>
              <span className="text-3xl text-purple-600 mx-4">ꦛꦶ</span>
              <h2 className="text-4xl font-bold text-gray-800">كيف نعمل</h2>
              <span className="text-3xl text-purple-600 mx-4">ꦫꦶ</span>
              <div className="flex-grow h-1 relative w-1/3">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h5 className="text-lg text-gray-600 inline-block relative">
            نحن نخطط لنموك
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-gray-600 to-transparent"></span>
            </h5>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative working-block-two bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300 mx-4 md:mx-0" // Added mx-4 for margin on mobile view
                style={{
                  border: `4px solid ${step.borderColor}`,
                  borderRadius: "15px",
                  position: "relative",
                  overflow: "hidden",
                  padding: "30px", // Default padding for smaller screens (mobile)
                }}
              >
                {/* Top Arc */}
                <svg
                  className="absolute top-0 left-0 w-full"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0 20 Q50 -20 100 20 Z" fill={step.topArcColor} />
                </svg>

                {/* Bottom Arc */}
                <svg
                  className="absolute bottom-0 left-0 w-full"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0 0 Q50 40 100 0 Z" fill={step.bottomArcColor} />
                </svg>

                <div
                  className="absolute inset-0 flex items-center justify-center text-9xl opacity-20 font-bold z-0 transition-transform duration-300 hover:translate-y-1 hover:translate-x-1"
                  style={{ color: "#A9A9A9", pointerEvents: "none" }} // Dark silver color
                >
                  {step.step}
                </div>
                <div className="relative z-10 inner-box text-center flex flex-col justify-center h-full">
                  <div className="upper-box mb-4">
                    <div className="icon-box text-4xl text-blue-500 mb-2 transition-transform transform hover:scale-110">
                      <i className={step.icon}></i>
                    </div>
                    <h6 className="text-lg font-semibold text-gray-700">
                      {step.subtitle}
                    </h6>
                  </div>
                  <div className="lower-box">
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <button className="relative overflow-hidden group inline-block">
                      <span className="absolute inset-0 bg-white opacity-100 transition-opacity duration-300 ease-in-out"></span>
                      <span className="relative z-10 text-black px-4 py-2">
                      استكشاف المزيد
                      </span>
                      <span className="absolute inset-0 bg-blue-500 transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 group-hover:bg-opacity-20 rounded-md"></span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 bg-gray-100" style={{ marginTop: "-20px" }}>
        <div className="container1 mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center w-full my-4">
              <div className="flex items-center">
                <div className="border-b-2 border-blue-600 w-12"></div>
                <span className="mx-2 text-blue-600">&#x1F4CD;</span>{" "}
                {/* Map pin symbol */}
              </div>
              <h2 className="text-4xl font-bold font-cinzel mx-4 text-gray-800">
              مواقع المكاتب
              </h2>
              <div className="flex items-center">
                <span className="mx-2 text-green-600">&#x1F4CD;</span>{" "}
                {/* Map pin symbol */}
                <div className="border-b-2 border-green-600 w-12"></div>
              </div>
            </div>
            <p className="text-lg text-gray-600">
            أكثر من 10 موظفين يعملون في أكثر من 8 ولايات في الهند و20
              الموظفين العاملين في الفرع الأمريكي.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Oman Global Headquarters Section */}
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="w-1/2">
                <h3 className="text-xl font-bold mb-4">
                المقر العالمي عمان
                </h3>
                <p className="mb-4">
                النخبة للتطوير الرقمي ذ.م.م. السيب / السيب / مسقط
                  المحافظة، ص.ب 111، الرمز البريدي 112. راسلنا عبر البريد الإلكتروني:
                  info@e4dd.com اتصل بنا: 0807-7698-968+
                </p>
              </div>
              <div className="w-1/2">
                <iframe
                  title="Oman Global HQ"
                  className="w-full h-64 rounded-lg shadow-md"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57730.31914602805!2d58.28444449126142!3d23.613705536805916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e9aa618ef3d17f9%3A0x5aa5d112df05b48d!2sAl%20Seeb%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2s!4v1627242282907!5m2!1sen!2s"
                ></iframe>
              </div>
            </div>

            {/* India Office Section */}
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="w-1/2">
                <h3 className="text-xl font-bold mb-4">مكتب الهند</h3>
                <p className="mb-4">
                ساحة مانجيرا، رقم 403، أميربيت، حيدر أباد، تيلانجانا، الهند.
                  راسلنا عبر البريد الإلكتروني: info@e4dd.com اتصل بنا: +91-988-500-8080
                </p>
              </div>
              <div className="w-1/2">
                <iframe
                  title="India Office"
                  className="w-full h-64 rounded-lg shadow-md"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15275.809643647725!2d78.38386884999999!3d17.435752550000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98e8a2b1f2c5%3A0x33b54b3e2f37d5d6!2sAmeerpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2s!4v1627242389887!5m2!1sen!2s"
                ></iframe>
              </div>
            </div>

            {/* United States Office Section */}
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="w-1/2">
                <h3 className="text-xl font-bold mb-4">مكتب الولايات المتحدة</h3>
                <p className="mb-4">
                2915 Bluestem Dr #2193, ويست فارجو, ND 58078, الولايات المتحدة الأمريكية
                  أمريكا. راسلنا عبر البريد الإلكتروني: info@e4dd.com
                </p>
              </div>
              <div className="w-1/2">
                <iframe
                  title="US Office"
                  className="w-full h-64 rounded-lg shadow-md"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.6831318890213!2d-96.89131578451113!3d46.867180979144056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52cec2e69f8d3b3d%3A0x55f83a4baf8d17ed!2s2915%20Bluestem%20Dr%20%232193%2C%20West%20Fargo%2C%20ND%2058078%2C%20USA!5e0!3m2!1sen!2s!4v1627242483371!5m2!1sen!2s"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
