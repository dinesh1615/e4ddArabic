// import React from 'react';
// import backgroundImage from './background.jpg';
// import serviceImage from './service.jpeg';
// import image1 from './image1.jpeg';
// import image2 from './image2.jpeg';
// import image3 from './image3.jpeg';
// import image4 from './image4.jpeg';
// import image5 from './image5.jpeg';
// import image6 from './image6.jpg';

// const ManagedIT = () => {
//   const images = [
//     {
//       src: image1,
//       title: 'المعدات',
//       points: [
//         'أجهزة الكمبيوتر المكتبية',
//         'أجهزة الكمبيوتر المحمولة',
//         'Mobile devices',
//         'IoT devices'
//       ],
//       bgColor: '#f8d7da'
//     },
//     {
//       src: image2,
//       title: 'SOFTWARE',
//       points: [
//         'Custom applications',
//         'SaaS applications',
//         'Cloud applications'
//       ],
//       bgColor: '#d4edda'
//     },
//     {
//       src: image3,
//       title: 'NETWORKS',
//       points: [
//         'Switches',
//         'Routers',
//         'Wireless access points',
//         'Modems',
//         'Hubs',
//         'Servers'
//       ],
//       bgColor: '#d1ecf1'
//     },
//     {
//       src: image4,
//       title: 'Data Storage',
//       points: [
//         'Databases',
//         'Data warehouses',
//         'Data lakes',
//         'Cloud data storage'
//       ],
//       bgColor: '#fff3cd'
//     },
//     {
//       src: image5,
//       title: 'Security tools',
//       points: [
//         'Firewalls',
//         'SIEM',
//         'IAM',
//         'Network Security Monitoring tools',
//         'Antivirus'
//       ],
//       bgColor: '#fefefe'
//     },
//     {
//       src: image6,
//       title: 'Software development infrastructure',
//       points: [
//         'Development and testing environments',
//         'CI/CD pipeline',
//         'Containerization tools',
//         'Dependency management systems'
//       ],
//       bgColor: '#d6d6d6'
//     },
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center relative"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-50"></div>
//         <div className="text-center relative z-10">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white relative hover:text-red-500 transition-colors duration-300">
//             MANAGED IT SERVICES
//             <span className="absolute left-0 right-0 bottom-[-10px] h-3 bg-red-500"></span>
//           </h1>
//         </div>
//       </div>

//       {/* Introduction */}
//       <div className="w-full py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-gray-300">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//           Managed IT Services
//         </h2>
//         <p className="text-base sm:text-lg md:text-xl text-gray-700">
//           Keep your IT infrastructure stable and scalable with ELITE.
//         </p>
//         <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-700">
//           With 20 years in IT, ELITE can become your trusted partner to monitor, troubleshoot, and evolve all (or any) components of IT infrastructure. We keep the process and costs transparent by documenting the service scope and KPIs in an SLA.
//         </p>
//       </div>

//       {/* Overview */}
//       <div className="w-full py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
//         <p className="text-base sm:text-lg md:text-xl text-gray-700">
//           <strong>Managed IT services</strong> are a way to keep your IT infrastructure and applications <strong>stable</strong>, <strong>cost-effective, and relevant</strong> to evolving business needs.
//         </p>
//       </div>

//       {/* IT Components */}
//       <div className="w-full px-4 sm:px-6 lg:px-8 bg-gray-100">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//           One Team for All Your IT Tasks
//         </h2>
//         <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
//           A managed IT services provider (MSP) is a third-party company that manages your IT infrastructure and software under the SLA. An MSP for companies with complex and dynamic infrastructures, E4dd can take care of all your IT components within a range of services from daily monitoring and management to long-term optimization and evolution.
//         </p>
//         <img
//           src={serviceImage}
//           alt="IT Services"
//           className="w-full h-auto mb-4"
//         />
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-4 text-center">
//           IT Components We Manage
//         </h2>
//         <p className="text-base sm:text-lg md:text-xl text-black text-center">
//           <i>* We outline <strong>a sample set of IT components </strong>as it will be individual for each company’s infrastructure and IT assets.</i>
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="relative flex flex-col items-center p-4 sm:p-6 lg:p-8 rounded-lg"
//               style={{ backgroundColor: image.bgColor }}
//             >
//               <img
//                 src={image.src}
//                 alt={image.title}
//                 className="w-full object-cover rounded-lg mb-4 hover:scale-95 transition-transform duration-300"
//                 style={{ height: '200px', objectFit: 'cover' }}
//               />
//               <div>
//                 <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">{image.title}</h3>
//                 <ul className="list-disc list-inside text-gray-700 space-y-2 points-list">
//                   {image.points.map((point, idx) => (
//                     <li key={idx} className="text-base sm:text-lg md:text-xl text-orange-500">{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Who Needs Managed IT Services */}
//       <div className="w-full py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-gray-200">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//           Who Needs Managed IT Services?
//         </h2>
//         <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
//           The obvious answer would be any company without an in-house IT team that still needs to guarantee the smooth functioning of its IT infrastructure. But it doesn’t mean you can’t benefit from working with an MSP even if you have full-time or part-time IT experts. The beauty of managed IT services is flexibility and on-demand scalability. You can outsource only one IT direction (say, help desk or DevOps) or even a single role that’s missing from your team. At E4dd, we have plenty of experience working on split-responsibility projects where our experts collaborate with the client’s IT team or other MSPs.
//         </p>
//         <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
//           Managed IT services cater to a broad spectrum of businesses, from those without an in-house IT team to those with existing IT expertise. While the obvious candidates for managed IT services are companies lacking dedicated IT staff, the benefits extend far beyond this demographic.
//         </p>
//         <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
//           For businesses without an internal IT team, managed IT services provide essential support to ensure the smooth functioning of their IT infrastructure. These companies rely on managed service providers (MSPs) to handle everything from network management and cybersecurity to help desk support and software updates. By outsourcing their IT needs to an MSP, these businesses can focus on their core operations without the burden of managing complex technology systems.
//         </p>
//         <p className="text-base sm:text-lg md:text-xl text-gray-700">
//           However, even companies with full-time or part-time IT experts can benefit from partnering with an MSP. Managed IT services offer flexibility and scalability, allowing businesses to tailor their IT support to their specific requirements. For example,
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ManagedIT;

import React from "react";
import backgroundImage from "./background.jpg";
import serviceImage from "./service.jpeg";
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";
import image4 from "./image4.jpeg";
import image5 from "./image5.jpeg";
import image6 from "./image6.jpg";

const ManagedIT = () => {
  const images = [
    {
      src: image1,
      title: "المعدات",
      points: [
        "أجهزة الكمبيوتر المكتبية",
        "حاسوب محمولs",
        "أجهزة محمولة",
        "أجهزة إنترنت الأشياء",
      ],
      bgColor: "#f8d7da",
    },
    {
      src: image2,
      title: "برمجة",
      points: ["تطبيقات مخصصة", "تطبيقات SaaS", "التطبيقات السحابية"],
      bgColor: "#d4edda",
    },
    {
      src: image3,
      title: "الشبكات",
      points: [
        "مفاتيح",
        "أجهزة التوجيه",
        "نقاط الوصول اللاسلكية",
        "أجهزة المودم",
        "محاور",
        "الخوادم",
      ],
      bgColor: "#d1ecf1",
    },
    {
      src: image4,
      title: "مخزن البيانات",
      points: [
        "قواعد بيانات",
        "مستودعات البيانات",
        "بحيرات البيانات",
        "تخزين البيانات السحابية",
      ],
      bgColor: "#fff3cd",
    },
    {
      src: image5,
      title: "أدوات الأمن",
      points: [
        "جدران الحماية",
        "سيم",
        "أنا أكون",
        "أدوات مراقبة أمن الشبكة",
        "مضاد للفيروسات",
      ],
      bgColor: "#fefefe",
    },
    {
      src: image6,
      title: "البنية التحتية لتطوير البرمجيات",
      points: [
        "بيئات التطوير والاختبار",
        "خط أنابيب CI/CD",
        "أدوات الحاويات",
        "أنظمة إدارة التبعية",
      ],
      bgColor: "#d6d6d6",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-50"></div>
        <div className="text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white relative hover:text-red-500 transition-colors duration-300">
            {/* MANAGED IT SERVICES */}
            خدمات تكنولوجيا المعلومات المُدارة
            <span className="absolute left-0 right-0 bottom-[-10px] h-3 bg-red-500"></span>
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <div className="w-full py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-gray-300">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {/* Managed IT Services */}
          خدمات تكنولوجيا المعلومات المدارة
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          {/* Keep your IT infrastructure stable and scalable with ELITE. */}
          حافظ على البنية التحتية لتكنولوجيا المعلومات لديك مستقرة وقابلة
          للتطوير مع ELITE.
        </p>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-700">
          {/* With 20 years in IT, ELITE can become your trusted partner to monitor,
          troubleshoot, and evolve all (or any) components of IT infrastructure.
          We keep the process and costs transparent by documenting the service
          scope and KPIs in an SLA. */}
          مع 20 عامًا من الخبرة في مجال تكنولوجيا المعلومات، يمكن لـ ELITE أن
          تصبح شريكك الموثوق به للمراقبة، استكشاف الأخطاء وإصلاحها وتطوير جميع
          (أو أي) مكونات البنية التحتية لتكنولوجيا المعلومات. نحن نحافظ على
          شفافية العملية والتكاليف من خلال توثيق الخدمة النطاق ومؤشرات الأداء
          الرئيسية في SLA.
        </p>
      </div>

      {/* Overview */}
      <div className="w-full py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          <strong>
            {/*Managed IT services*/}خدمات تكنولوجيا المعلومات المدارة
          </strong>
          {/* are a way to keep your IT
          infrastructure and applications  */}
          هي وسيلة للحفاظ على البنية التحتية لتكنولوجيا المعلومات والتطبيقات
          الخاصة بك
          <strong>مستقر</strong>,{" "}
          <strong>فعالة من حيث التكلفة، وذات صلة</strong> لاحتياجات الأعمال
          المتطورة.
        </p>
      </div>

      {/* IT Components */}
      <div className="w-full px-4 sm:px-6 lg:px-8 bg-gray-100">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {/* One Team for All Your IT Tasks */}
          فريق واحد لجميع مهام تكنولوجيا المعلومات الخاصة بك
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
          {/* A managed IT services provider (MSP) is a third-party company that
          manages your IT infrastructure and software under the SLA. An MSP for
          companies with complex and dynamic infrastructures, E4dd can take care
          of all your IT components within a range of services from daily
          monitoring and management to long-term optimization and evolution. */}
          إن موفر خدمات تكنولوجيا المعلومات المُدارة (MSP) هو شركة تابعة لجهة
          خارجية يدير البنية التحتية لتكنولوجيا المعلومات والبرامج الخاصة بك
          بموجب اتفاقية مستوى الخدمة. MSP لـ الشركات ذات البنى التحتية المعقدة
          والديناميكية، تستطيع E4dd الاهتمام بها لجميع مكونات تكنولوجيا
          المعلومات الخاصة بك ضمن مجموعة من الخدمات اليومية المراقبة والإدارة من
          أجل التحسين والتطور على المدى الطويل.
        </p>
        <img
          src={serviceImage}
          alt="IT Services"
          className="w-full h-auto mb-4"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-4 text-center">
          {/* IT Components We Manage */}
          مكونات تكنولوجيا المعلومات التي نديرها
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-black text-center">
          <i>
            * نحن الخطوط العريضة{" "}
            <strong>مجموعة عينة من مكونات تكنولوجيا المعلومات </strong>
            {/* as it will be individual for each company’s infrastructure and IT assets. */}
            حيث ستكون فردية للبنية التحتية وأصول تكنولوجيا المعلومات لكل شركة.
          </i>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-4 sm:p-6 lg:p-8 rounded-lg"
              style={{ backgroundColor: image.bgColor }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full object-cover rounded-lg mb-4 hover:scale-95 transition-transform duration-300"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                  {image.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 points-list">
                  {image.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-base sm:text-lg md:text-xl text-orange-500"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Who Needs Managed IT Services */}
      <div className="w-full py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-gray-200">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {/* Who Needs Managed IT Services? */}
          من يحتاج إلى خدمات تكنولوجيا المعلومات المُدارة؟
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
          {/* The obvious answer would be any company without an in-house IT team
          that still needs to guarantee the smooth functioning of its IT
          infrastructure. But it doesn’t mean you can’t benefit from working
          with an MSP even if you have full-time or part-time IT experts. The
          beauty of managed IT services is flexibility and on-demand
          scalability. You can outsource only one IT direction (say, help desk
          or DevOps) or even a single role that’s missing from your team. At
          E4dd, we have plenty of experience working on split-responsibility
          projects where our experts collaborate with the client’s IT team or
          other MSPs. */}
          ستكون الإجابة الواضحة هي أي شركة ليس لديها فريق داخلي لتكنولوجيا
          المعلومات التي لا تزال بحاجة إلى ضمان الأداء السلس لتكنولوجيا
          المعلومات الخاصة بها بنية تحتية. لكن هذا لا يعني أنه لا يمكنك
          الاستفادة من العمل مع MSP حتى لو كان لديك خبراء في تكنولوجيا المعلومات
          بدوام كامل أو جزئي. ال جمال خدمات تكنولوجيا المعلومات المدارة هو
          المرونة وحسب الطلب قابلية التوسع. يمكنك الاستعانة بمصادر خارجية لاتجاه
          واحد فقط لتكنولوجيا المعلومات (على سبيل المثال، مكتب المساعدة أو
          DevOps) أو حتى دور واحد مفقود من فريقك. في E4dd، لدينا الكثير من
          الخبرة في العمل على تقاسم المسؤولية المشاريع التي يتعاون فيها خبراؤنا
          مع فريق تكنولوجيا المعلومات التابع للعميل أو MSPs الأخرى.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
          {/* Managed IT services cater to a broad spectrum of businesses, from
          those without an in-house IT team to those with existing IT expertise.
          While the obvious candidates for managed IT services are companies
          lacking dedicated IT staff, the benefits extend far beyond this
          demographic. */}
          تلبي خدمات تكنولوجيا المعلومات المُدارة مجموعة واسعة من الشركات، بدءًا
          من أولئك الذين ليس لديهم فريق تكنولوجيا معلومات داخلي لأولئك الذين
          لديهم خبرة حالية في مجال تكنولوجيا المعلومات. في حين أن المرشحين
          الواضحين لخدمات تكنولوجيا المعلومات المدارة هم الشركات ومع عدم وجود
          موظفين متخصصين في مجال تكنولوجيا المعلومات، فإن الفوائد تمتد إلى ما هو
          أبعد من ذلك السكانية.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
          {/* For businesses without an internal IT team, managed IT services
          provide essential support to ensure the smooth functioning of their IT
          infrastructure. These companies rely on managed service providers
          (MSPs) to handle everything from network management and cybersecurity
          to help desk support and software updates. By outsourcing their IT
          needs to an MSP, these businesses can focus on their core operations
          without the burden of managing complex technology systems. */}
          بالنسبة للشركات التي ليس لديها فريق داخلي لتكنولوجيا المعلومات، خدمات
          تكنولوجيا المعلومات المُدارة تقديم الدعم الأساسي لضمان حسن سير
          تكنولوجيا المعلومات الخاصة بهم بنية تحتية. تعتمد هذه الشركات على مقدمي
          الخدمات المدارة (MSPs) للتعامل مع كل شيء بدءًا من إدارة الشبكات والأمن
          السيبراني لدعم مكتب المساعدة وتحديثات البرامج. من خلال الاستعانة
          بمصادر خارجية لتكنولوجيا المعلومات الخاصة بهم يحتاج إلى MSP، يمكن لهذه
          الشركات التركيز على عملياتها الأساسية دون تحمل عبء إدارة أنظمة
          التكنولوجيا المعقدة.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          {/* However, even companies with full-time or part-time IT experts can
          benefit from partnering with an MSP. Managed IT services offer
          flexibility and scalability, allowing businesses to tailor their IT
          support to their specific requirements. For example, */}
          ومع ذلك، حتى الشركات التي لديها خبراء في تكنولوجيا المعلومات بدوام
          كامل أو جزئي يمكنها ذلك الاستفادة من الشراكة مع MSP. عرض خدمات
          تكنولوجيا المعلومات المدارة المرونة وقابلية التوسع، مما يسمح للشركات
          بتخصيص تكنولوجيا المعلومات الخاصة بها الدعم لمتطلباتهم المحددة. على
          سبيل المثال،
        </p>
      </div>
    </div>
  );
};

export default ManagedIT;
