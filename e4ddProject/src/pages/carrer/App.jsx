import React from "react";
import "./App.css";
import backgroundImage from "./assets/image.jpg";
import jobImage1 from "./assets/job1.jpg"; // Example image import
import jobImage2 from "./assets/job2.jpg"; // Example image import
import jobImage3 from "./assets/job3.jpg"; // Example image import
import jobImage4 from "./assets/job4.jpg"; // Example image import
import jobImage5 from "./assets/job5.jpg"; // Example image import
import jobImage6 from "./assets/job6.jpg"; // Example image import
import jobImage7 from "./assets/job7.jpg"; // Example image import
import jobImage8 from "./assets/job8.jpg"; // Example image import
import jobImage9 from "./assets/job9.jpg"; // Example image import

const JobCard = ({ job }) => {
  return (
    <div className="jobcard relative  bg-green-50 group  rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-60 w-70  overflow-hidden ">
        <img
          src={job.image}
          alt={job.title}
          className="object-cover h-full w-full rounded-lg transition-transform duration-300  hover:w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-2xl font-bold text-white">{job.title}</h3>
        </div>
        <button className="absolute sm:w-22 sm:h-6 bottom-4 right-4 px-4 py-0.5 bg-blue-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-700">
        نضم الان
        </button>
      </div>
      <div className="p-6">
        <p className="text-xl font-bold text-gray-900 mb-2">ID: {job.id}</p>
        <p className="text-lg text-blue-600 mb-2">موقع: {job.location}</p>
        <p className="text-lg font-semibold text-green-600 mb-2">
        مرتب: {job.salary}
        </p>
        <p className="text-base mb-4  group-hover:block hidden">
          {job.description.map((point, index) => (
            <span key={index} className="block text-black">
              • {point}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

const JobForm = ({ jobTitles }) => {
  return (
    <form className="bg-green-100 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="firstName"
        >
          الاسم الأول
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="lastName"
        >
          اسم العائلة
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          بريد إلكتروني
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="resume"
        >
          سيرة ذاتية
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="jobTitle"
        >
          مسمى وظيفي
        </label>
        <select
          id="jobTitle"
          name="jobTitle"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black bg-white"
        >
          {jobTitles.map((title, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
         يُقدِّم
        </button>
      </div>
    </form>
  );
};

const CarrerApp = () => {
  const jobs = [
    {
      id: 1,
      title: "مهندس برمجيات",
      location: "سان فرانسيسكو، كاليفورنيا",
      salary: "$120,000 - $150,000",
      description: [
        "تطوير وصيانة تطبيقات الويب.",
        "التعاون مع فرق متعددة الوظائف.",
        "المشاركة في مراجعات التعليمات البرمجية ومناقشات التصميم.",
      ],
      image: jobImage1,
    },
    {
      id: 2,
      title: "عالم البيانات",
      location: "نيويورك، نيويورك",
      salary: "$110,000 - $140,000",
      description: [
        "تحليل مجموعات البيانات الكبيرة لاستخلاص الأفكار.",
        "بناء نماذج تنبؤية وخوارزميات التعلم الآلي.",
        "إبلاغ النتائج إلى أصحاب المصلحة.",
      ],
      image: jobImage2,
    },
    {
      id: 3,
      title: "مدير الإنتاج",
      location: "سياتل، واشنطن",
      salary: "$130,000 - $160,000",
      description: [
        "تحديد رؤية المنتج وإستراتيجيته.",
        "إدارة دورة حياة المنتج من المفهوم إلى الإطلاق.",
        "العمل بشكل وثيق مع فرق الهندسة والتصميم والتسويق.",
      ],
      image: jobImage3,
    },
    {
      id: 4,
      title: "مصمم تجربة المستخدم",
      location: "لوس أنجلوس، كاليفورنيا",
      salary: "$100,000 - $130,000",
      description: [
        "تصميم واجهات سهلة الاستخدام.",
        "إجراء بحث المستخدم واختبار سهولة الاستخدام.",
        "قم بإنشاء إطارات سلكية ونماذج أولية ونماذج بالحجم الطبيعي عالية الدقة.",
      ],
      image: jobImage4,
    },
    {
      id: 5,
      title: "اخصائي تسويق",
      location: "شيكاغو، IL",
      salary: "$90,000 - $120,000",
      description: [
        "تطوير وتنفيذ الحملات التسويقية.",
        "تحليل اتجاهات السوق وسلوك العملاء.",
        "التعاون مع فرق المبيعات والمنتجات.",
      ],
      image: jobImage5,
    },
    {
      id: 6,
      title: "مندوب مبيعات",
      location: "دالاس، تكساس",
      salary: "$80,000 - $110,000",
      description: [
        "تحديد العملاء المحتملين والتعامل معهم.",
        "تقديم المنتجات والخدمات للعملاء المحتملين.",
        "التفاوض وإغلاق صفقات البيع.",
      ],
      image: jobImage6,
    },
    {
      id: 7,
      title: "دعم العملاء",
      location: "ميامي، FL",
      salary: "$70,000 - $100,000",
      description: [
        "مساعدة العملاء في الاستفسارات والقضايا.",
        "تقديم خدمة عملاء استثنائية.",
        "الاحتفاظ بسجلات مفصلة لتفاعلات العملاء.",
      ],
      image: jobImage7,
    },
    {
      id: 8,
      title: "مدير الموارد البشرية",
      location: "بوسطن، MA",
      salary: "$120,000 - $150,000",
      description: [
        "إدارة عمليات التوظيف والتأهيل.",
        "تطوير وتنفيذ سياسات الموارد البشرية.",
        "الإشراف على علاقات الموظفين وإدارة الأداء.",
      ],
      image: jobImage8,
    },
    {
      id: 9,
      title: "المحلل المالي",
      location: "أتلانتا، GA",
      salary: "$100,000 - $130,000",
      description: [
        "تحليل البيانات والاتجاهات المالية.",
        "إعداد التقارير والتنبؤات المالية.",
        "دعم التخطيط المالي الاستراتيجي.",
      ],
      image: jobImage9,
    },
    {
      id: 10,
      title: "آخر",
      location: null,
      salary: null,
      description: null,
      image: null,
    },
  ];

  const jobTitles = jobs.map((job) => job.title);

  return (
    <div className="  relative top-[0px] mb-32 ">
      <div
        className="bg-image h-80  w-full flex items-center justify-center overflow-hidden relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-5xl text-black drop-shadow-xl md:text-6xl font-bold text-vibrant underline absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 hover:text-6xl hover:bg-slate-50">
        نحن نوظف!
        </h1>
      </div>
      <div className="techback text-black">
        <div className="containerc mx-auto py-12 px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          وظائف
          </h2>
          <div className="m-auto grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3   gap-8">
            {jobs.map((job) => (
              <div key={job.id} className="flex items-stretch m-auto">
                {job.image !== null && <JobCard job={job} />}
              </div>
            ))}
          </div>
          <hr className="mt-8 border-4 " />
          <h2 className="text-4xl md:text-6xl font-bold mt-8 text-center text-black">
          انضم إلينا الآن
          </h2>
          <JobForm jobTitles={jobTitles} />
        </div>
      </div>
    </div>
  );
};

export default CarrerApp;
