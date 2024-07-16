import React, { useState } from "react";
import "./Itstaff.css";
import one from "../../../assets/Itstaff/1.jpg";
import two from "../../../assets/Itstaff/2.jfif";
import three from "../../../assets/Itstaff/3.jfif";
import industryKnowledgeImg from "../../../assets/Itstaff/one.jfif";
import consultativeApproachImg from "../../../assets/Itstaff/two.jfif";
import networkConnectionsImg from "../../../assets/Itstaff/three.jfif";
import provenTrackRecordImg from "../../../assets/Itstaff/four.jfif";
import adaptabilityImg from "../../../assets/Itstaff/five5.jpeg";

const Itstaff = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className="itstaff-container">
      <div className="itstaff-gallery">
        <div className="two-images">
          <div className="itstaff-image">
            <img src={one} alt="" />
          </div>

          {/* <div className="itstaff-image">
            <img src={two} alt="" />
          </div>
          <div className="itstaff-image">
            <img src={three} alt="" />
          </div> */}
        </div>
      </div>
      <div className="itstaff-content">
        <h1>
          {/* Exceed your hiring goals with Elite's Information Technology
          recruitment services */}
          تجاوز أهداف التوظيف الخاصة بك مع تقنية المعلومات من Elite خدمات
          التوظيف
        </h1>
        <h1>
          {/* Our IT recruitment specialists have closed jobs in several areas. */}
          قام متخصصو توظيف تكنولوجيا المعلومات لدينا بإغلاق الوظائف في عدة
          مجالات.
        </h1>
        <p>
          {/* Our team of IT recruitment specialists is dedicated to filling key
          roles across various areas within the IT sector. We understand the
          critical role that the IT industry plays in driving economic growth,
          which is why we continuously study industry trends and challenges to
          stay ahead of the curve. Our expertise in IT hiring and recruitment,
          combined with our extensive network of connections and consultations
          with clients, positions us as one of the leading IT recruitment
          agencies in the country. */}
          فريقنا من المتخصصين في توظيف تكنولوجيا المعلومات مكرس لملء المفتاح
          الأدوار في مختلف المجالات داخل قطاع تكنولوجيا المعلومات. نحن نفهم
          الدور الحاسم الذي تلعبه صناعة تكنولوجيا المعلومات في دفع النمو
          الاقتصادي، وهذا هو السبب وراء قيامنا بدراسة اتجاهات الصناعة والتحديات
          التي نواجهها باستمرار ابقا امام المنحني. خبرتنا في التوظيف والتوظيف في
          مجال تكنولوجيا المعلومات، جنبًا إلى جنب مع شبكتنا الواسعة من الاتصالات
          والاستشارات مع العملاء، يجعلنا أحد الشركات الرائدة في مجال التوظيف في
          مجال تكنولوجيا المعلومات الوكالات في البلاد.
        </p>

        <h2 className="sections-heading">
          {/* Here's how our approach to IT recruitment sets us apart: */}
          وإليك كيف يميزنا نهجنا في توظيف تكنولوجيا المعلومات:
        </h2>
        <div
          className="itstaff-section"
          onClick={() => toggleSection("industryKnowledge")}
        >
          <img
            src={industryKnowledgeImg}
            alt="Industry Knowledge"
            className="itstaff-section-img"
          />
          <div className="itstaff-section-content">
            <h3>صناعة المعرفة</h3>
            {visibleSection === "industryKnowledge" && (
              <p>
                {/* Our IT recruiters possess deep expertise and knowledge of the IT
                sector, allowing us to understand the specific skills,
                qualifications, and experience required for each role. We stay
                abreast of emerging technologies, industry trends, and market
                demands to ensure that we can effectively match candidates with
                the right opportunities. */}
                يمتلك القائمون على توظيف تكنولوجيا المعلومات لدينا خبرة ومعرفة
                عميقة بتكنولوجيا المعلومات القطاع، مما يسمح لنا بفهم المهارات
                المحددة، المؤهلات والخبرة المطلوبة لكل دور. نبقى مواكبة التقنيات
                الناشئة واتجاهات الصناعة والسوق مطالب لضمان قدرتنا على مطابقة
                المرشحين بشكل فعال الفرص المناسبة.
              </p>
            )}
          </div>
        </div>
        <div
          className="itstaff-section"
          onClick={() => toggleSection("consultativeApproach")}
        >
          <img
            src={consultativeApproachImg}
            alt="Consultative Approach"
            className="itstaff-section-img"
          />
          <div className="itstaff-section-content">
            <h3>النهج التشاوري</h3>
            {visibleSection === "consultativeApproach" && (
              <p>
                {/* We take a consultative approach to IT recruitment, working
                closely with clients to understand their unique hiring needs,
                business objectives, and company culture. By building strong
                relationships with our clients, we can provide personalized
                recruitment solutions that align with their strategic goals and
                drive business success. */}
                نحن نتبع نهجًا استشاريًا في توظيف تكنولوجيا المعلومات والعمل مع
                العملاء بشكل وثيق لفهم احتياجات التوظيف الفريدة الخاصة بهم،
                أهداف العمل، وثقافة الشركة. من خلال بناء قوي العلاقات مع
                عملائنا، يمكننا أن نقدم شخصية حلول التوظيف التي تتوافق مع
                أهدافهم الإستراتيجية و قيادة نجاح الأعمال.
              </p>
            )}
          </div>
        </div>
        <div
          className="itstaff-section"
          onClick={() => toggleSection("networkConnections")}
        >
          <img
            src={networkConnectionsImg}
            alt="Network of Connections"
            className="itstaff-section-img"
          />
          <div className="itstaff-section-content">
            <h3>شبكة الاتصالات</h3>
            {visibleSection === "networkConnections" && (
              <p>
                {/* Our extensive network of connections within the IT industry
                enables us to access top talent and passive candidates who may
                not be actively searching for opportunities. Through targeted
                networking efforts and ongoing relationship building, we can
                connect clients with highly qualified candidates who are the
                perfect fit for their organizations. */}
                لدينا شبكة واسعة من الاتصالات داخل صناعة تكنولوجيا المعلومات
                تمكننا من الوصول إلى أفضل المواهب والمرشحين السلبيين الذين قد
                يفعلون ذلك لا تبحث بنشاط عن الفرص. من خلال المستهدفة جهود
                التواصل وبناء العلاقات المستمرة، نستطيع ذلك ربط العملاء
                بالمرشحين المؤهلين تأهيلا عاليا الذين هم مناسب تمامًا لمنظماتهم.
              </p>
            )}
          </div>
        </div>
        <div
          className="itstaff-section"
          onClick={() => toggleSection("provenTrackRecord")}
        >
          <img
            src={provenTrackRecordImg}
            alt="Proven Track Record"
            className="itstaff-section-img"
          />
          <div className="itstaff-section-content">
            <h3>سجل حافل</h3>
            {visibleSection === "provenTrackRecord" && (
              <p>
                {/* With a track record of successfully closing jobs in various
                areas of the IT sector, we have demonstrated our ability to
                deliver results for our clients. Whether it's filling positions
                in software development, cybersecurity, data analytics, or IT
                infrastructure, our IT recruitment specialists have the
                experience and expertise to find the right talent for any role. */}
                مع سجل حافل من إغلاق الوظائف بنجاح في مختلف مجالات قطاع
                تكنولوجيا المعلومات، لقد أثبتنا قدرتنا على ذلك تقديم النتائج
                لعملائنا. سواء كان ذلك لملء المناصب في تطوير البرمجيات أو الأمن
                السيبراني أو تحليلات البيانات أو تكنولوجيا المعلومات البنية
                التحتية، يتمتع متخصصو توظيف تكنولوجيا المعلومات لدينا بالقدرة
                على الخبرة والخبرة للعثور على الموهبة المناسبة لأي دور.
              </p>
            )}
          </div>
        </div>
        <div
          className="itstaff-section"
          onClick={() => toggleSection("adaptability")}
        >
          <img
            src={adaptabilityImg}
            alt="Adaptability"
            className="itstaff-section-img"
          />
          <div className="itstaff-section-content">
            <h3>القدرة على التكيف</h3>
            {visibleSection === "adaptability" && (
              <p>
                {/* The IT industry is constantly evolving, with new technologies
                and job roles emerging regularly. Our team of IT recruiters is
                adaptable and agile, able to pivot quickly to meet changing
                client needs and market demands. Whether it's sourcing
                candidates for niche technical roles or addressing skill
                shortages in high-demand areas, we are committed to delivering
                timely and effective recruitment solutions. */}
                صناعة تكنولوجيا المعلومات تتطور باستمرار، مع التقنيات الجديدة
                والأدوار الوظيفية تظهر بانتظام. لدينا فريق من مسؤولي التوظيف في
                مجال تكنولوجيا المعلومات قابلة للتكيف ورشيقة وقادرة على المحور
                بسرعة لمواجهة التغيير احتياجات العملاء ومتطلبات السوق. سواء كان
                ذلك من المصادر المرشحين للأدوار الفنية المتخصصة أو مهارة
                المعالجة النقص في المناطق ذات الطلب المرتفع، ونحن ملتزمون
                بالتسليم حلول التوظيف في الوقت المناسب وفعالة.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itstaff;