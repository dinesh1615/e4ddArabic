import React, { useState, useEffect, useRef } from "react";
import PhotoCard from "./PhotoCard";
import "./Services.css";
import one from "../../assets/Service/drone.jpg";
import two from "../../assets/Service/bigdata.jpg";
import three from "../../assets/Service/cyber.jpg";
import four from "../../assets/Service/AI.jpg";
import five from "../../assets/Service/dbms.jpg";
import six from "../../assets/Service/sw.jpg";
import seven from "../../assets/Service/web.jpg";
import eight from "../../assets/Service/managedIT.jpg";
import nine from "../../assets/Service/cloud.jpg";
import ten from "../../assets/Service/voip.jpg";
import eleven from "../../assets/Service/itstaff.jpg";
import twelve from "../../assets/Service/ML.jpg";
import videoSrc1 from "../../assets/Service/promo1.mp4";
import videoSrc2 from "../../assets/Service/promo2.mp4";
import videoSrc3 from "../../assets/Service/promo3.mp4";
import videoSrc4 from "../../assets/Service/promo4.mp4";
import videoSrc5 from "../../assets/Service/promo5.mp4";

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const photos = [
    {
      src: one,
      heading: "طائرات بدون طيار",
      content: " مبيعات الطائرات بدون طيار. تأجير طائرات بدون طيار. المسح الجوي . رسم الخرائط",
    },
    {
      src: two,
      heading: "البيانات الكبيرة",
      content:
        "جمع البيانات . مخزن البيانات . معالجة البيانات. تحليلات البيانات . عرض مرئي للمعلومات",
    },
    {
      src: three,
      heading: "الأمن الإلكتروني",
      content:
        "تأمين تخزين البيانات وآليات التحكم في الوصول. الحماية من البرامج الضارة والفيروسات. تصفية البريد الإلكتروني ومواقع الويب على شبكة الإنترنت",
    },
    {
      src: four,
      heading: "حلول الأعمال التجارية بالذكاء الاصطناعي",
      content:
        " تطوير استراتيجية الذكاء الاصطناعي. تنفيذ التعلم الآلي. تطبيقات معالجة اللغات الطبيعية (NLP).",
    },
    {
      src: five,
      heading: "خدمات قواعد البيانات",
      content:
        " تصميم وهندسة قواعد البيانات. نمذجة البيانات. إدارة قواعد البيانات (DBA). تكامل البيانات وترحيلها. ضبط الأداء وتحسينه",
    },
    {
      src: six,
      heading: "تطوير البرمجيات",
      content:
        " برمجة البرمجيات . تخطيط المشروع . تصميم . الترميز والتنفيذ",
    },
    {
      src: seven,
      heading: "التسويق الشبكي",
      content:
        "تطوير الشبكة . التسويق الرقمي . إدارة وسائل التواصل الاجتماعي. خدمات إدارة المحتوى",
    },
    {
      src: eight,
      heading: "خدمات تكنولوجيا المعلومات المدارة",
      content:
        "خدمات مكتب الخدمة. خدمات مراقبة التذاكر. خدمات إدارة الشبكات والخوادم . خدمات إدارة البنية التحتية عن بعد",
    },
    {
      src: nine,
      heading: "خدمات سحابية",
      content:
        " حلول مايكروسوفت أزور. خدمات الويب أمازون. حلول جوجل السحابية. خدمات إدارة Office 365 وخادم Exchange",
    },
    {
      src: ten,
      heading: "دعم الصوت عبر بروتوكول الإنترنت",
      content:
        "CCaaS (مركز الاتصال كخدمة). التسويق الخارجي. اتصال مستضاف للمكالمات . حلول المكالمات الفائتة. خدمة Click2Call",
    },
    {
      src: eleven,
      heading: "استشارات تكنولوجيا المعلومات والتوظيف",
      content:
        "خدمات التوظيف في مجال تكنولوجيا المعلومات. استشارات تكنولوجيا المعلومات . التدريب على تكنولوجيا المعلومات. إدارة تقنية المعلومات . الاستعانة بمصادر خارجية لتكنولوجيا المعلومات",
    },
    {
      src: twelve,
      heading: "التعلم الالي",
      content:
        " التعلم تحت الإشراف. تعليم غير مشرف عليه . تعزيز التعلم . تعلم عميق",
    },
  ];

  const videoSources = [videoSrc1, videoSrc2, videoSrc3, videoSrc4];

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    const handleEnded = () => {
      setCurrentVideoIndex(
        (prevIndex) => (prevIndex + 1) % videoSources.length
      );
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", handleEnded);

      return () => {
        videoElement.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.pause();
      videoElement.load();
      videoElement.playbackRate = 2.0; // Set playback rate here
      videoElement.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, [currentVideoIndex]);

  return (
    <>
      <div className="service-page-container relative ">
        <div className="video-container">
          <video className="promo-video" autoPlay muted ref={videoRef}>
            <source src={videoSources[currentVideoIndex]} type="video/mp4" />
            متصفحك الحالي لا يدعم تشغيل الفيديو.
          </video>
          <div className="video-text">
            <h1>خدماتنا</h1>
          </div>
        </div>
        <div className="initial-content">
          <p>
          في Elite، نحن ملتزمون بتقديم مجموعة واسعة من المنتجات المتميزة
            الخدمات التي تلبي الاحتياجات المتنوعة لعملائنا. ملكنا
            شبكة واسعة من المهنيين ذوي المهارات العالية تسمح لنا بتقديم
            حلول شاملة في مختلف المجالات، مما يضمن حصولك على
            يبقى العمل في المقدمة في المشهد التكنولوجي المتطور باستمرار.
          </p>
          <p>
          مهمتنا هي تمكين عملك من خلال التكنولوجيا والقيادة
            النمو والكفاءة والابتكار. استكشف خدماتنا لتعرف كيف
            يمكننا دعم احتياجاتك ومساعدتك في تحقيق أهداف عملك.
          </p>
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

export default Services;
