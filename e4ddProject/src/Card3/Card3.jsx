import React from "react";
import { motion } from "framer-motion";
import img1 from "./hariprasad.jpeg";
import img2 from "./ahmed.jpeg";
import "./Card3.css";

const Card3 = () => {
  return (
    <>
      <div class="card3 m-auto">
        <div class="card-front3">
          <img src={img2} alt="ahmed" class="card-img3 w-full " />
          <p class="title3">أحمد سعيد محمد المقبالي</p>
          <p class="subtitle3">المدير العام المؤسس المشارك</p>
        </div>
        <div class="card-back3">
          <p>
            ملخص شخصي <br />
            <br />
            {/* ⦁ Performance driven Senior Government Administrative officer
            ; acknowledged for expertise in cementing client relationships,
            improving the development standards, stimulating new business, and
            strategically securing accounts in highly competitive developmental
            sectors. */}
            ⦁ موظف إداري حكومي كبير يحركه الأداء ; معترف به لخبرته في تعزيز
            العلاقات مع العملاء، تحسين معايير التنمية، وتحفيز الأعمال الجديدة، و
            تأمين الحسابات بشكل استراتيجي في تطوير تنافسي للغاية القطاعات.
            <br />
            <br />
            {/* ⦁ Decisive, visionary leader and expert at identifying and
            capturing opportunities, achieving targets and meeting desired goals
            in competitive environments.  */}
            ⦁ قائد حاسم ذو رؤية وخبير في تحديد و اغتنام الفرص وتحقيق الأهداف
            وتحقيق الأهداف المرجوة في البيئات التنافسية.
            <br />
            <br />
            {/* ⦁ History of building and deepening effective working
            environment with relationships built on trust, exceptional service,
            and responsiveness. */}
            ⦁ تاريخ بناء وتعميق العمل الفعال بيئة مبنية على علاقات مبنية على
            الثقة والخدمة الاستثنائية، والاستجابة.
            <br />
            <br />
            {/* ⦁ Repeatedly demonstrated strong communication and
            presentation skills from training through rapport building and
            effective presentations at every level in attaining the organization
            goals. */}
            ⦁ أظهر بشكل متكرر تواصلًا قويًا و مهارات العرض من التدريب إلى بناء
            العلاقات و عروض تقديمية فعالة على كل مستوى في تحقيق المنظمة الأهداف.
          </p>
        </div>
      </div>
      <div class="card3 m-auto overflow-y-auto">
        <div class="card-front3">
          <img src={img1} alt="hariprasad" class="card-img3 w-full" />
          <p class="title3">نشاري براساد</p>
          <p class="subtitle3">
            الشريك المؤسس
            <br />
            <p>النخبة للتنمية الرقمية</p>
          </p>
        </div>
        <div class="card-back3 ">
          <p>
            نظرة عامة احترافية <br />
            {/* Over 20 years of experience in Key Account Management, Sales
            promotion, Team Management, Incident Management, Quality & IT
            Management. */}
            أكثر من 20 عامًا من الخبرة في إدارة الحسابات الرئيسية والمبيعات
            الترويج وإدارة الفريق وإدارة الحوادث والجودة وتكنولوجيا المعلومات
            إدارة.
            <br />
            {/* <br /> - A proactive leader and planner with expertise in Market
            plan execution, Account management, Account Penetration, Competitor
            and Market analysis.  */}
            - قائد استباقي ومخطط يتمتع بخبرة في السوق تنفيذ الخطة، إدارة الحساب،
            اختراق الحساب، المنافس وتحليل السوق.
            <br />
            <br />
            {/* - Proven track record of increasing revenues, streamlining
            workflow and creating a team work environment to enhance
            productivity. */}
            - سجل حافل لزيادة الإيرادات وتبسيطها سير العمل وخلق بيئة عمل جماعي
            لتعزيزها إنتاجية.
            <br />
            <br />
            <h2>خبرة في العمل:</h2>
            <br />
            {/* Managing Director BBMT Services India Private Limited (2020 –
            Current) BBM Tech Services is a strategic IT services company which
            aims to bridge the gap between business needs and the world of IT
            solutions. BBM Tech Services is one of the leading IT service
            providers and has a combined team experience of over 40 years. */}
            المدير العام لشركة BBMT Services India Private Limited (2020 -
            (حاليًا) BBM Tech Services هي شركة خدمات تكنولوجيا المعلومات
            الإستراتيجية التي يهدف إلى سد الفجوة بين احتياجات العمل وعالم
            تكنولوجيا المعلومات حلول. تعد BBM Tech Services واحدة من خدمات
            تكنولوجيا المعلومات الرائدة مقدمي الخدمات ولديه خبرة فريق مشتركة
            لأكثر من 40 عامًا.
            <br />
            {/* <br /> My role extends beyond operational management, as I actively
            engage in coaching and fostering an environment where teamwork
            flourishes.
            <br />
            <br /> Business Development activities for ITSM and IT staffing. */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card3;