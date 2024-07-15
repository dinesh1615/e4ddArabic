import React, { useState, useEffect, useRef } from "react";
import "./ML.css";
import one from "../assets/ML/1.webp";
import two from "../assets/ML/2.jpg";
import three from "../assets/ML/3.png";
import four from "../assets/ML/Cloud-Data.webp";
import five from "../assets/ML/5.jfif";
import six from "../assets/ML/6.jfif";
import seven from "../assets/ML/seven.png";
import eight from "../assets/ML/8.png";
import nine from "../assets/ML/9.jpg";
import promo from "../assets/ML/promo1.mp4";
import benefit1 from "../assets/ML/ben1.jpg";
import benefit2 from "../assets/ML/ben2.jpg";
import benefit3 from "../assets/ML/ben3.jfif";

const ML = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleExpand = (sectionIndex) => {
    setExpandedSection(sectionIndex === expandedSection ? null : sectionIndex);
  };

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.playbackRate = 1.0;
      videoElement.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, []);

  return (
    <div className="ml-container ">
      <div className="ml-header">
        <div className="video-container">
          <video className="promo-video" autoPlay loop muted ref={videoRef}>
            <source src={promo} type="video/mp4" />
            متصفحك الحالي لا يدعم تشغيل الفيديو.
          </video>
          <div className="video-text">
            <h1>التعلم الالي</h1>
          </div>
        </div>
      </div>
      <div className="ml-content">
        <section className="ml-section">
          <p>
          أطلق العنان للإمكانات الكاملة لبياناتك باستخدام أجهزتنا المخصصة
            حلول التعلم.
          </p>
          <h2>نهجنا في التعلم الآلي</h2>
          <div className="ml-cards-container">
            <div
              className={`ml-card pink-card ${
                expandedSection === 1 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(1)}
            >
              {/* <div className="ribbon pink"></div> */}
              <img src={one} alt="Customized Solutions" className="ml-image" />
              <h3>حلول تعلم الآلة المخصصة</h3>
              {expandedSection === 1 && (
                <div className="ml-expanded-content-pink">
                  <p>
                  ✓ نقوم بتصميم حلول ML لتلبية احتياجات العمل الفريدة و
                    الأهداف.
                  </p>
                  <br />
                  <p>
                  ✓ متخصص في التحليلات التنبؤية، اللغة الطبيعية
                    المعالجة، ورؤية الكمبيوتر، نقوم بتطوير نماذج مخصصة ل
                    حل مشاكل العمل المعقدة.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`ml-card blue-card ${
                expandedSection === 2 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(2)}
            >
              {/* <div className="ribbon blue"></div> */}
              <img src={two} alt="Deep Expertise" className="ml-image" />
              <h3>خبرة عميقة في تقنيات ML</h3>
              {expandedSection === 2 && (
                <div className="ml-expanded-content-blue">
                  <p>
                  ✓ فريق من علماء البيانات المتمرسين ومهندسي تعلم الآلة و
                    مستشارو التكنولوجيا ذوو الخبرة الواسعة في الصناعة.
                  </p>
                  <br />
                  <p>
                  ✓ البقاء على اطلاع على التطورات التكنولوجية وتنفيذها
                    أحدث تقنيات وأدوات ML في الحلول.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`ml-card violet-card ${
                expandedSection === 3 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(3)}
            >
              {/* <div className="ribbon violet"></div> */}
              <img
                src={three}
                alt="End-to-End Development"
                className="ml-image"
              />
              <h3>تطوير ML الشامل</h3>
              {expandedSection === 3 && (
                <div className="ml-expanded-content-violet">
                  <p>
                  ✓ تشمل خدماتنا دورة حياة التعلم الآلي بأكملها، بدءًا من البيانات
                    التجميع والتحضير لتطوير النماذج ونشرها،
                    والتحسين المستمر.
                  </p>
                  <br />
                  <p>
                  ✓ نحن نضمن أن نماذج التعلم الآلي الخاصة بنا قابلة للتطوير وقوية وقابلة للتطوير
                    التكامل بسلاسة مع الأنظمة الحالية.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="ml-section ml-key-services">
          <h2>خدمات التعلم الآلي الرئيسية</h2>
          <div className="ml-key-cards-container">
            <div
              className={`ml-key-card green-card ${
                expandedSection === 5 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(5)}
            >
              <img
                src={five}
                alt="Natural Language Processing"
                className="ml-key-image"
              />
              <h3>معالجة اللغات الطبيعية (NLP)</h3>
              {expandedSection === 5 && (
                <div className="ml-key-expanded-content-green">
                  <p>
                  ✓ الاستفادة من البرمجة اللغوية العصبية لتحليل وفهم اللغة البشرية
                    تحليل المشاعر وروبوتات الدردشة والعملاء الآليين
                    يدعم.
                  </p>
                  <br />
                  <p>
                  ✓ تعزيز مشاركة العملاء وتبسيط التواصل
                    العمليات.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`ml-key-card orange-card ${
                expandedSection === 6 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(6)}
            >
              <img src={six} alt="Computer Vision" className="ml-key-image" />
              <h3>رؤية الكمبيوتر</h3>
              {expandedSection === 6 && (
                <div className="ml-key-expanded-content-orange">
                  <p>
                  ✓ الاستفادة من تقنيات الرؤية الحاسوبية في التحليل البصري
                    البيانات من الصور ومقاطع الفيديو.
                  </p>
                  <br />
                  <p>
                  ✓ تشمل التطبيقات اكتشاف الأشياء، والتعرف على الوجه،
                    مراقبة الجودة ووضع العلامات التلقائية على الصور.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`ml-key-card yellow-card ${
                expandedSection === 7 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(7)}
            >
              <img
                src={seven}
                alt="Recommendation Systems"
                className="ml-key-image"
              />
              <h3>أنظمة التوصية</h3>
              {expandedSection === 7 && (
                <div className="ml-key-expanded-content-yellow">
                  <p>
                  ✓ تطوير أنظمة توصية مخصصة لتعزيزها
                    تجارب العملاء وزيادة المبيعات.
                  </p>
                  <br />
                  <p>
                  ✓ تحليل سلوك المستخدم وتفضيلاته لتقديم خدمات مخصصة
                    توصيات المنتج والمحتوى.
                  </p>
                </div>
              )}
            </div>

            <div
              className={`ml-key-card brown-card ${
                expandedSection === 9 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(9)}
            >
              <img
                src={nine}
                alt="Time Series Forecasting"
                className="ml-key-image"
              />
              <h3>التنبؤ بالسلاسل الزمنية</h3>
              {expandedSection === 9 && (
                <div className="ml-key-expanded-content-brown">
                  <p>
                  ✓ بناء نماذج التنبؤ بالسلاسل الزمنية للتنبؤ بالمستقبل
                    القيم على أساس البيانات التاريخية.
                  </p>
                  <br />
                  <p>
                  ✓ تشمل التطبيقات التنبؤ بالطلب المالي
                    التخطيط وتخصيص الموارد.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`ml-key-card cyan-card ${
                expandedSection === 8 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(8)}
            >
              <img
                src={eight}
                alt="Anomaly Detection"
                className="ml-key-image"
              />
              {/* <div className="ribbon"></div> */}
              <h3>إكتشاف عيب خلقي</h3>
              {expandedSection === 8 && (
                <div className="ml-key-expanded-content-cyan">
                  <p>
                  ✓ تنفيذ نماذج الكشف عن الحالات الشاذة لتحديد الحالات غير العادية
                    الأنماط أو الكشف عن الاحتيال أو اختراقات الشبكة أو المعدات
                    الفشل.
                  </p>
                  <br />
                  <p>
                  ✓ الحفاظ على الأمن وتقليل المخاطر وضمان التشغيل
                    استمرارية.
                  </p>
                </div>
              )}
            </div>

            <div
              className={`ml-key-card red-card ${
                expandedSection === 4 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(4)}
            >
              <img
                src={four}
                alt="Predictive Analytics"
                className="ml-key-image"
              />
              {/* <div className="ribbon"> */}
              {/* <span className="ribbon-text">✿</span> */}
              {/* </div> */}
              <h3>التحليلات التنبؤية</h3>
              {expandedSection === 4 && (
                <div className="ml-key-expanded-conten-red">
                  <p>
                  ✓ تسخير التحليلات التنبؤية للتنبؤ بالاتجاهات والعملاء
                    السلوكيات وتغيرات السوق.
                  </p>
                  <br />
                  <p>
                  ✓ اتخاذ قرارات مبنية على البيانات لتحسين العمليات
                    الكفاءة ودفع النمو.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="ml-section">
          <h2>لماذا تختار خدمات التعلم الآلي لدينا؟</h2>

          <div className="ml-cards">
            <div className="ml-card-two">
              <div className="ml-card-front">
                <img src={benefit1} alt="Cost Savings" />
                <h3>سجل حافل</h3>
              </div>
              <div className="ml-card-back">
                <p>
                لدينا تاريخ في تقديم مشاريع تعلم الآلة الناجحة عبر جميع أنحاء العالم
                  مختلف الصناعات، بما في ذلك التكنولوجيا والمالية والرعاية الصحية،
                  والتجزئة. لقد أدت حلولنا إلى أعمال قابلة للقياس
                  النتائج وتوفير عائد استثمار كبير لعملائنا.
                </p>
              </div>
            </div>
            <div className="ml-card-two">
              <div className="ml-card-front">
                <img src={benefit2} alt="Scalability" />
                <h3>النهج التعاوني</h3>
              </div>
              <div className="ml-card-back">
                <p>
                نحن نعمل بشكل وثيق مع العملاء لفهم احتياجاتهم الخاصة
                  الاحتياجات وأهداف العمل. نهجنا التعاوني
                  يضمن أن حلول ML لدينا تتماشى مع الأهداف الإستراتيجية
                  وتقديم أقصى قيمة.
                </p>
              </div>
            </div>
            <div className="ml-card-two">
              <div className="ml-card-front">
                <img src={benefit3} alt="Flexibility" />
                <h3>التركيز على الابتكار</h3>
              </div>
              <div className="ml-card-back">
                <p>
                نحن ملتزمون بالابتكار المستمر واستكشاف تعلم الآلة الجديد
                  التقنيات والتطبيقات للبقاء في صدارة اتجاهات الصناعة.
                  فريقنا مكرس لإيجاد حلول إبداعية للمعقدة
                  المشاكل، ودفع حدود ما هو ممكن مع تعلم الآلة.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ML;
