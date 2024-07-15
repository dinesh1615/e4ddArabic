import React from "react";
import "./CyberSecurity.css";

const SecurityServices = () => {
  const h2Styles = {
    background: "linear-gradient(to right, #f43c6e, #5cb5e6)",
    // WebkitBackgroundClip: 'text',
    // WebkitTextFillColor: 'transparent',
    color: "#33ffdc",
    fontFamily: "Helvetica, sans-serif",
    padding: "10px",
    marginTop: "-30px",
    borderRadius: "5px", // Optional: add some border radius
    animation: "fadeInUp 1s ease-in-out",
  };

  const fadeInUpKeyframes = `
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <section className="relative py-12 px-4 bg-gray-100">
      <div className="absolute inset-0 z-0">
        <img
          className="object-cover w-full h-full"
          src="./cybersecurity/cs2.jpg"
          alt="Cybersecurity"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <style>{fadeInUpKeyframes}</style>
        <h2
          style={h2Styles}
          className="text-3xl lg:text-4xl font-bold text-center mb-8"
        >
          العمليات الأمنية وخدمات الاستجابة
        </h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:bg-transparent">
          لماذا تختار شركة النخبة لخدمات أمن التطوير الرقمي؟
          </h3>

          <div className="flex flex-wrap justify-center">
            {/* Card 1 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 group">
              <div
                className="bg-cover bg-center h-64"
                style={{ backgroundImage: 'url("./cybersecurity/bcs1.jpg")' }}
              >
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-gradient">
                  الدفاع السيبراني التكيفي
                  </h4>
                  <p className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-transparent hover:bg-black bg-opacity-50">
                  قم ببناء دفاع إلكتروني متكيف ومرن وقابل للتطوير باستخدام
                    العمليات الأمنية وخدمات الاستجابة للنخبة. ملكنا
                    الخدمات مصممة لتتطور مع عملك،
                    مما يوفر لك خفة الحركة والمرونة اللازمة لذلك
                    مكافحة التهديدات السيبرانية المتطورة بشكل فعال.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 group">
              <div
                className="bg-cover bg-center h-64"
                style={{ backgroundImage: 'url("./cybersecurity/bcs2.jpg")' }}
              >
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-gradient">
                  حلول أمنية شاملة
                  </h4>
                  <p className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-transparent hover:bg-black bg-opacity-50">
                  خدمات الأمان والمرونة الشاملة التي نقدمها، مدعومة من
                    يتيح لنا الذكاء الاصطناعي والأتمتة التقييم وتقديم المشورة والتنفيذ
                    وتقديم خدمات مُدارة شاملة مصممة خصيصًا لتناسب احتياجاتك
                    احتياجات فريدة من نوعها. من الترقب إلى التعافي، تساعدك Elite
                    قم بتحصين دفاعاتك والرد بسرعة على الهجمات الإلكترونية.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 group">
              <div
                className="bg-cover bg-center h-64"
                style={{ backgroundImage: 'url("./cybersecurity/bcs3.jpg")' }}
              >
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-gradient">
                  نموذج تشغيل مرن
                  </h4>
                  <p className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-transparent hover:bg-black bg-opacity-50">
                  مع Elite، يمكن للشركات تحديد الأدوات والأدوات بمرونة
                    نموذج التشغيل الذي يحتاجونه لمواجهة التحديات المختلفة
                    والمتطلبات عبر المناطق. خدماتنا تضمن
                    يتم تلبية احتياجات الامتثال ومعالجة البيانات أثناء توفيرها
                    المرونة في نشر القدرات حيث تكون هناك حاجة إليها
                    معظم.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold text-purple-800 mb-4">
          اكتشف خدمات النخبة الأمنية:
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="p-6 bg-white rounded-lg shadow-md border-4 border-gradient-blue">
              <h4 class="text-xl font-semibold mb-2 text-gradient-purple">
              مركز العمليات الأمنية (SOC)
              </h4>
              <p class="text-gray-700">
              يقدم مركز عمليات الأمن العالمي لدينا خدمات شاملة
                الدعم والحماية ضد التهديدات السيبرانية باستخدام الذكاء الاصطناعي والآلة
                التعلم وأنظمة الأتمتة المتكاملة. سواء كنت
                دمج خبرائنا مع فرق الأمان الموجودة لديك أو بشكل كامل
                الاستعانة بمصادر خارجية لعمليات الأمن السيبراني إلى النخبة، نحن نقوم بسد الفجوة
                فجوة المهارات وتبسيط العمليات الأمنية.
              </p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-md border-4 border-gradient-blue">
              <h4 class="text-xl font-semibold mb-2 text-gradient-purple">
              العمليات الأمنية كمنصة
              </h4>
              <p class="text-gray-700">
              توفر منصة العمليات الأمنية الخاصة بنا مستوى قياسيًا ومخصصًا
                والبنية التحتية الآمنة التي تدمج الإدارة الأساسية
                وحدات بناء الكشف والاستجابة. من خلال الأمن
                التنسيق والأتمتة والاستجابة (SOAR) والأمن
                إدارة المعلومات والأحداث (SIEM)، واكتشاف نقطة النهاية، و
                الاستجابة (EDR)، وإدارة الثغرات الأمنية، نحن نقدم
                نظام بيئي متكامل وآلي للكشف والاستجابة له
                التهديدات بسرعة.
              </p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-md border-4 border-gradient-blue">
              <h4 class="text-xl font-semibold mb-2 text-gradient-purple">
              الاستجابة لحوادث الأمن السيبراني والطب الشرعي (CSIRF)
              </h4>
              <p class="text-gray-700">
              في حالة حدوث خلل سيبراني، الأمن السيبراني للنخبة
                توفر خدمة الاستجابة للحوادث والطب الشرعي (CSIRF) تهديدًا
                الكشف والاستجابة للحوادث لتعزيز كفاءة
                العمليات الأمنية. يقدم فريقنا الخدمة العملية عند الطلب
                الدعم للمساعدة في حل التهديدات وحماية بياناتك
                الأعمال التجارية ضد التهديدات السيبرانية مثل برامج الفدية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityServices;
