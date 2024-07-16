import React, { useState } from "react";
import PhotoCard from "./PhotoCard";
import "./Academy.css";
import main from "../assets/Academy/ACADEMY.mp4";
import one from "../assets/Academy/AI29.jpeg";
import two from "../assets/Academy/2Ajax.jfif";
import three from "../assets/Academy/2angular.jfif";
import four from "../assets/Academy/5appml.png";
import five from "../assets/Academy/ASP6.jpg";
import six from "../assets/Academy/AWS2.jpg";
import seven from "../assets/Academy/BestSQL3.jpg";
import eight from "../assets/Academy/2Bootstrap.jfif";
import nine from "../assets/Academy/2chash.jfif";
import ten from "../assets/Academy/2cplus.jfif";
import eleven from "../assets/Academy/2c.jfif";
import twelve from "../assets/Academy/2chatgpt.jfif";
import thirteen from "../assets/Academy/CodeEditor23.jpeg";
import fourteen from "../assets/Academy/Css27.jpeg";
import fifteen from "../assets/Academy/Cyber19.jpeg";
import sixteen from "../assets/Academy/Data_Science4.jpg";
import seventeen from "../assets/Academy/GenAI30.jpeg";
import eighteen from "../assets/Academy/Git_Github7.jpg";
import nineteen from "../assets/Academy/Graphics25.jpeg";
import twenty from "../assets/Academy/HTML28.jpeg";
import twentyone from "../assets/Academy/Java8.jpg";
import twentytwo from "../assets/Academy/2Jquery.png";
import twentythree from "../assets/Academy/ML32.jpeg";
import twentyfour from "../assets/Academy/2mysql.jfif";
import twentyfive from "../assets/Academy/2Node.jfif";
import twentysix from "../assets/Academy/2python.jfif";
import twentyseven from "../assets/Academy/2React.jfif";
import twentyeight from "../assets/Academy/2Sass.jpg";
import twentynine from "../assets/Academy/WebBuilding22.jpeg";
import thirty from "../assets/Academy/WebCertificate20.jpeg";
import thirtyone from "../assets/Academy/webDesign5.jpg";
import thirtytwo from "../assets/Academy/WebServer21.jpeg";
import thirtythreee from "../assets/Academy/WebStatistics24.jpeg";
import thirtyfour from "../assets/Academy/2XML.jfif";
import thirtyfive from "../assets/Academy/php.jfif";
import thirtysix from "../assets/Academy/2RWD.png";

const Academy = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const photos = [
    {
      src: one,
      heading: "الذكاء الاصطناعي",
      content:
        " أسس الذكاء الاصطناعي. تطبيقات عملية . برمجة حلول الذكاء الاصطناعي. الأخلاق والذكاء الاصطناعي. الذكاء الاصطناعي في الصناعة",
    },
    {
      src: two,
      heading: "اياكس",
      content:
        " مقدمة إلى أجاكس. التعامل مع الطلبات والردود. العمل مع جسون. بناء تطبيقات الويب الديناميكية. اعتبارات أمنية",
    },
    {
      src: three,
      heading: "الزاوي",
      content:
        " أساسيات الإطار الزاوي. المكونات والوحدات . الخدمات وحقن التبعية. التوجيه والملاحة. ميزات الزاوية المتقدمة",
    },
    {
      src: four,
      heading: "التعلم الآلي للتطبيق",
      content:
        " مقدمة في التعلم الآلي. المعالجة المسبقة للبيانات وهندسة الميزات. بناء النماذج وتقييمها. نشر نماذج تعلم الآلة . تطبيقات العالم الحقيقي",
    },
    {
      src: five,
      heading: "أسب.نت",
      content:
        " مقدمة إلى ASP.NET. هندسة MVC . بناء تطبيقات الويب. الوصول إلى البيانات مع إطار الكيان. تأمين تطبيقات ASP.NET",
    },
    {
      src: six,
      heading: "أوس",
      content:
        " أساسيات سحابة AWS. خدمات AWS الأساسية. نشر وإدارة التطبيقات. الأمن والامتثال. إدارة التكلفة والتحسين",
    },
    {
      src: seven,
      heading: "SQL",
      content:
        " أساسيات SQL. تقنيات الاستعلام المتقدمة. تصميم قاعدة البيانات والتطبيع. الإجراءات المخزنة والمشغلات. ضبط الأداء",
    },
    {
      src: eight,
      heading: "بوتستراب",
      content:
        " مقدمة إلى بوتستراب. الرسم المتجاوب . مكونات التمهيد. تخصيص بوتستراب . بناء مشروع باستخدام بوتستراب",
    },
    {
      src: nine,
      heading: "ج #",
      content:
        " أساسيات لغة ج #. البرمجة الشيئية . هياكل البيانات والخوارزميات. ميزات ج # المتقدمة. بناء التطبيقات باستخدام ج #",
    },
    {
      src: ten,
      heading: "سي ++",
      content:
        " أساسيات لغة سي++. البرمجة الشيئية . إدارة الذاكرة . STL والخوارزميات. تقنيات C++ المتقدمة",
    },
    {
      src: eleven,
      heading: "ج البرمجة",
      content:
        " أساسيات لغة سي. المؤشرات وإدارة الذاكرة. التعامل مع الملف . هياكل البيانات . برمجة C المتقدمة",
    },
    {
      src: twelve,
      heading: "ChatGPT",
      content:
        " مقدمة إلى ChatGPT . بناء روبوتات الدردشة. دمج ChatGPT مع التطبيقات. تدريب النماذج المخصصة . حالات الاستخدام وأفضل الممارسات",
    },
    {
      src: thirteen,
      heading: "محرري الكود",
      content:
        " مقدمة لمحرري التعليمات البرمجية. ميزات VSCode . تخصيص المحرر الخاص بك. الإضافات والمكونات الإضافية. نصائح وحيل للإنتاجية",
    },
    {
      src: fourteen,
      heading: "CSS",
      content:
        " أساسيات CSS. تقنيات CSS المتقدمة. الرسم المتجاوب . أطر CSS. الرسوم المتحركة والانتقالات",
    },
    {
      src: fifteen,
      heading: "الأمن الإلكتروني",
      content:
        " مقدمة في الأمن السيبراني. التهديدات ونقاط الضعف. الأطر الأمنية. الاستراتيجيات الدفاعية. الاستجابة للحوادث وإدارتها",
    },
    {
      src: sixteen,
      heading: "علم البيانات",
      content:
        "أساسيات علم البيانات. المشاحنات البيانات والتنظيف. تحليل البيانات استكشافية . تقنيات التعلم الآلي. عرض مرئي للمعلومات",
    },
    {
      src: seventeen,
      heading: "الذكاء الاصطناعي التوليدي",
      content:
        "مقدمة إلى الذكاء الاصطناعي التوليدي. النماذج التوليدية. تطبيقات الذكاء الاصطناعي التوليدي. الاعتبارات الاخلاقية . الاتجاهات المستقبلية",
    },
    {
      src: eighteen,
      heading: "جيت و جيثب",
      content:
        " مقدمة إلى جيت. أساسيات التحكم في الإصدار. استخدام GitHub للتعاون. التفرع والدمج. أفضل الممارسات",
    },
    {
      src: nineteen,
      heading: "تصميم الرسومات",
      content:
        " مقدمة في التصميم الجرافيكي . مبادئ التصميم . استخدام برامج التصميم . خلق العمل الفني الرقمي. تطوير المحفظة",
    },
    {
      src: twenty,
      heading: "لغة البرمجة",
      content:
        " أساسيات لغة البرمجة. هيكلة صفحات الويب. مميزات لغة البرمجة5 . النماذج والمدخلات. أفضل الممارسات",
    },
    {
      src: twentyone,
      heading: "جافا",
      content:
        " أساسيات جافا. البرمجة الشيئية . هياكل البيانات والخوارزميات. بناء تطبيقات جافا. مفاهيم جافا المتقدمة",
    },
    {
      src: twentytwo,
      heading: "مسج",
      content:
        " مقدمة إلى مسج. التلاعب بـ DOM. التعامل مع الحدث . أجاكس مع مسج. الإضافات مسج",
    },
    {
      src: twentythree,
      heading: "التعلم الالي",
      content:
        " مقدمة في التعلم الآلي. التعلم تحت الإشراف. تعليم غير مشرف عليه . تقييم النموذج",
    },
    {
      src: twentyfour,
      heading: "ماي إس كيو إل",
      content:
        " مقدمة إلى ماي إس كيو إل. تصميم قاعدة البيانات . استعلامات ماي إس كيو إل. الإجراءات المخزنة والمشغلات. تحسين الأداء",
    },
    {
      src: twentyfive,
      heading: "Node.js",
      content:
        " مقدمة إلى Node.js بناء التطبيقات من جانب الخادم. العمل مع قواعد البيانات. الاتصالات في الوقت الحقيقي. نشر تطبيقات Node.js",
    },
    {
      src: twentysix,
      heading: "بايثون",
      content:
        " أساسيات بايثون. هياكل البيانات . البرمجة الشيئية . العمل مع المكتبات. بناء مشاريع بايثون",
    },
    {
      src: twentyseven,
      heading: "تتفاعل",
      content:
        " مقدمة إلى رد الفعل. المكونات والدعائم. إدارة الدولة . رد فعل جهاز التوجيه. بناء تطبيقات التفاعل",
    },
    {
      src: twentyeight,
      heading: "ساس",
      content:
        " مقدمة إلى ساس. المتغيرات والتداخل. الخلطات والوظائف. التمديد والميراث. بناء المشاريع مع ساس",
    },
    {
      src: twentynine,
      heading: "بناء الويب",
      content:
        " مقدمة لتطوير الويب. تقنيات الواجهة الأمامية. تقنيات الواجهة الخلفية. تطوير المكدس الكامل. النشر والصيانة",
    },
    {
      src: thirty,
      heading: "شهادة الويب",
      content:
        " أهمية شهادات الويب. شهادات الويب الشعبية. استراتيجيات التحضير. تنسيقات الامتحانات. الفوائد المهنية",
    },
    {
      src: thirtyone,
      heading: "تصميم الويب",
      content:
        " مقدمة لتصميم الويب . مبادئ التصميم . الأدوات والبرمجيات. إنشاء الإطارات السلكية والنماذج الأولية. تصميم تجربة المستخدم",
    },
    {
      src: thirtytwo,
      heading: "قاعدة بيانات للانترنت",
      content:
        " مقدمة إلى خوادم الويب. إعداد وتكوين الخادم. التعامل مع الطلبات والردود. الأمن والأداء. الصيانة واستكشاف الأخطاء وإصلاحها",
    },
    {
      src: thirtythreee,
      heading: "إحصائيات الويب",
      content:
        " مقدمة لتحليلات الويب. المقاييس الرئيسية ومؤشرات الأداء الرئيسية. أدوات لإحصائيات الويب. تحليل البيانات . استخدام الرؤى للتحسين",
    },
    {
      src: thirtyfour,
      heading: "XML",
      content:
        " مقدمة إلى XML. هيكلة البيانات باستخدام XML. تحليل XML . استخدام XML مع تقنيات أخرى. أفضل ممارسات XML",
    },
    {
      src: thirtyfive,
      heading: "PHTMLHP",
      content:
        " مقدمة إلى PHP. العمل مع قواعد البيانات. التعامل مع النموذج. إدارة الجلسة. تقنيات PHP المتقدمة",
    },
    {
      src: thirtysix,
      heading: "تصميم الويب سريع الاستجابة",
      content:
        " مقدمة إلى الدفع الخلفي. تخطيطات الشبكة المرنة. الصور والوسائط المرنة . إطار CSS. الاختبار والتصحيح",
    },
  ];

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="Academy-container">
        <video className="e4dd-promo-video" autoPlay loop muted>
          <source src={main} type="video/mp4" />
        </video>
        <div className="initial-content">
          <p>
          أكاديمية E4DD ∞ تنمو بلا حدود | حدد موهبتك وابنيها
            المهارات اللازمة لتحقيق إمكانيات لا حصر لها.
          </p>
          <h1>دورات للمتعلمين</h1>
          <p>اكتشف الدورات المطلوبة</p>
        </div>
        <div className="photo-gallery">
          {photos.map((photo, index) => (
            <PhotoCard
              key={index}
              index={index}
              photo={photo.src}
              heading={photo.heading}
              content={photo.content}
              isExpanded={expandedIndex === index}
              handleExpand={handleExpand}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Academy;
