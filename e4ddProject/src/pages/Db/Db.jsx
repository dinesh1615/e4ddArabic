import React, { useEffect, useRef } from "react";
import "./Db.css";

const databases = [
  {
    name: "مايكروسوفت SQL خادم",
    image: "./db/dbs1.jpg",
    description:
      "يشتهر مايكروسوفت SQL خادم ببنيته القوية لنظام RDBMS، ويتميز بميزات الأمان الهائلة وإمكانيات التحليل المتقدمة. إنه يمثل الخيار الأمثل للتطبيقات ذات المهام الحرجة حيث تكون سلامة البيانات والأداء أمرًا بالغ الأهمية.",
  },
  {
    name: "قاعدة بيانات أوراكل",
    image: "./db/dbs2.jpg",
    description:
      "تتميز Oracle Database، التي تحظى بالاحترام في دوائر المؤسسات، بموثوقية لا مثيل لها وقابلية للتوسع ومجموعة غنية من أدوات إدارة البيانات. إن أدائها الثابت يجعلها حجر الزاوية في العديد من العمليات واسعة النطاق التي تسعى إلى الاستقرار والتحكم الشامل في البيانات.",
  },
  {
    name: "ماي إس كيو إل",
    image: "./db/dbs3.jpg",
    description:
      "ماي إس كيو إل, يتمتع نظام RDBMS مفتوح المصدر باعتماد واسع النطاق في مجال تطوير الويب وبين قواعد البيانات الصغيرة والمتوسطة الحجم. إن واجهته سهلة الاستخدام وفعاليته من حيث التكلفة تجعله الحل المفضل لمختلف المشاريع التي تتطلب السرعة والقدرة على تحمل التكاليف.",
  },
  {
    name: "سايبيس",
    image: "./db/dbs4.jpg",
    description:
      "سايبيس, معروف بأدائه الاستثنائي وقابليته للتوسع، ويعمل كعنصر قوي في إدارة أعباء عمل المعاملات والتحليلات عبر الصناعات المتنوعة. تلبي إمكاناتها القوية المتطلبات الصعبة للشركات التي تسعى إلى معالجة البيانات بكفاءة وقابلية التوسع السلسة.",
  },
];

const DatabaseManagementServices = () => {
  const descriptionRefs = useRef([]);

  useEffect(() => {
    descriptionRefs.current.forEach((ref, index) => {
      const description = databases[index].description;
      ref.innerHTML = " "; // Initial placeholder text
      let currentText = "";
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= description.length) {
          currentText = description.slice(0, currentIndex);
          ref.innerHTML = currentText;
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust typing speed here (milliseconds)
    });
  }, []);

  return (
    <div
      className="container relative mx-auto  w-full"
      style={{ marginTop: "-12px", maxWidth: "100%" }}
    >
      <img
        src="./db/db1.jpg"
        alt="Database Management"
        className="w-full h-auto max-h-96 object-fit mb-8"
      />
      <h1 className="text-4xl font-bold text-center sse mb-3">
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
        قاعدة البيانات
        </span>{" "}
        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        إدارة
        </span>{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        خدمات
        </span>{" "}
        <span className="ml-2 inline-block text-xl">📊</span>
      </h1>

      <div className="container mx-auto bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 text-white p-4 rounded-lg mb-10">
        <p className="text-lg text-center mb-4">
        تحتاج المنظمات اليوم إلى توافر معلومات وبيانات قوية
          الحماية لدعم تطبيقاتهم الهامة. قاعدة بيانات النخبة
          تقدم خدمات الإدارة والتنظيم حلولاً مرنة
          مصممة لتلبية الاحتياجات التنظيمية المتنوعة. سواء تسعى التكلفة
          تقليل أو الاستفادة من ميزات قاعدة البيانات المتطورة، وخبراتنا
          يوفر الدعم الأمثل.
        </p>
        <p className="text-lg text-center mb-4">
        توفر حزم الخدمة لدينا إدارة قواعد بيانات من الدرجة الأولى، مما يضمن
          الدعم والمساعدة الجودة. من خلال تفويض المهام إلينا،
          يمكن للمنظمات خفض تكاليف الدعم عن طريق تخصيص الموارد
          بدقة عند الحاجة. تشمل خدمات قاعدة بيانات ELITE استباقية
          الإدارة والتنظيم والرصد وإعداد التقارير والدعم
          بيئات Microsoft® SQL®، وOracle®، وMySQL، وSybase.
        </p>
        <p className="text-lg text-center mb-4">
        نحن نعطي الأولوية للتدابير الاستباقية لتوقع قاعدة البيانات ومعالجتها
          القضايا قبل أن تؤثر على العمليات. يضمن فريقنا سلاسة
          أداء قاعدة البيانات وموثوقيتها، مما يسمح للمؤسسات بالتركيز
          على أهدافهم الأساسية بثقة.
        </p>
        <p className="text-lg text-center mb-4">
        مع خدمات قاعدة بيانات ELITE، تستطيع المؤسسات الوصول إلى البيانات المتخصصة
          محترفين مجهزين بأحدث الأدوات والتقنيات. سواء
          إنها تعمل على تحسين أداء قاعدة البيانات وتنفيذ حماية البيانات
          التدابير، أو البقاء في صدارة الاتجاهات الناشئة، فريقنا مكرس
          لتوفير دعم قاعدة البيانات الشاملة.
        </p>
        <p className="text-lg text-center mb-8">
        في مشهد الأعمال الديناميكي، خدمات إدارة قواعد البيانات ELITE
          الوقوف كشريك موثوق به، وتمكين المنظمات من الازدهار
          من خلال الإدارة الفعالة لقواعد البيانات والدعم.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-800 via-pink-500 to-teal-500 bg-clip-text text-transparent">
      بيئات قواعد البيانات المدعومة
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {databases.map((db, index) => (
          <div
            key={db.name}
            className="bg-white-100 shadow-2xl rounded-lg p-6 text-center h-auto"
          >
            <img
              src={db.image}
              alt={db.name}
              className="w-full h-40 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 bg-clip-text text-transparent font-custom">
              {db.name}
            </h3>
            <p
              ref={(el) => (descriptionRefs.current[index] = el)}
              className="text-gray-600"
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatabaseManagementServices;
