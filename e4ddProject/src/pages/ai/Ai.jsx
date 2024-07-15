import React from 'react';
import './Ai.css';

const Ai = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     <img
  src="./Ai/ai3.jpg" // Replace with your actual image path
  alt="AI Banner"
  className="w-full h-[85vh] object-cover"
/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="container w-full mx-auto p-6 bg-gradient-to-r from-gray-700 via-gray-500 to-green-300 text-white font-sans">
  <h1 className="text-4xl font-bold text-gradient mb-4">حلول الأعمال بالذكاء الاصطناعي</h1>
  <h4 className="text-2xl font-semibold text-pink-600 mb-6">قم بزيادة قيمة الأعمال من خلال المنتجات الثورية المعتمدة على الذكاء الاصطناعي</h4>
  <p className="text-base leading-6 text-white-800">
  يعد التعلم الآلي والذكاء الاصطناعي ضروريين لنجاح المؤسسات الحديثة في العالم الرقمي. تركز حلول أعمال الذكاء الاصطناعي لدينا على مساعدة الشركات على نشر خوارزميات ذكية مدعومة بالتعلم الآلي والذكاء الاصطناعي لتحقيق الأتمتة. مع أكثر من 20 عامًا من الخبرة في صناعات تتراوح بين التكنولوجيا والخدمات المالية والتجارة الإلكترونية والتصنيع، فإننا نفهم الأعمال وكذلك احتياجات المستخدم لتصميم وهندسة منتجات خدمات تطوير الذكاء الاصطناعي التي تقدم قيمة للعملاء.
  </p>
  <p className="mt-4 text-base leading-6 text-white-800">
  نحن فريق من علماء البيانات، ومتخصصي التعلم الآلي، ومستشاري التكنولوجيا، وخبراء تجربة المستخدم الذين يعملون بشكل تعاوني مع العملاء للكشف عن الفرص على مستوى الأعمال وتطوير المنتجات التي تنقل مؤسستك إلى المستوى التالي.
  </p>
</div>


<div className="text-center mt-12 relative">
  <h2 className="text-3xl font-semibold mb-4 relative z-10" style={{ backgroundImage: 'linear-gradient(to right, #ff0000, #ff8800)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
    <span className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2">
      <span className="text-orange-800">◆</span>
    </span>
    تتضمن حلول أعمال الذكاء الاصطناعي الخاصة بنا
    <span className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
      <span className="text-purple-800">◆</span>
    </span>
  </h2>
</div>





<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Custom algorithm development */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gradient-purple">
    <img
      src="./Ai/ca.jpg"
      alt="Custom algorithm development"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">تطوير الخوارزمية المخصصة</h3>
      <p className="text-gray-700">
      تعزيز الكفاءة عن طريق تقليل العمليات اليدوية والمستهلكة للوقت من خلال تطوير خوارزمية الذكاء الاصطناعي والتعلم الآلي المخصصة. سواء كنت بحاجة إلى أتمتة المهام المتكررة، أو إنشاء رؤى بشكل أسرع، أو تحسين تجربة العملاء، فإن إمكانات تطوير الذكاء الاصطناعي المخصصة لدينا ستدعم مشكلة عملك المحددة.
      </p>
    </div>
  </div>

  {/* AI/ML consulting */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gradient-purple">
    <img
      src="./Ai/aiml.jpg"
      alt="AI/ML consulting"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">استشارات الذكاء الاصطناعي/تعلم الآلة</h3>
      <p className="text-gray-700">
      حدد الفرص المحتملة للأتمتة باستخدام قدراتنا في مجال الذكاء الاصطناعي والتعلم الآلي. نحن نعمل بشكل وثيق مع فرق العملاء لتحسين الحلول الحالية وكذلك تلك الموجودة في المراحل المفاهيمية لضمان قدر أكبر من الدقة والنجاح.
      </p>
    </div>
  </div>

  {/* Python automation */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gradient-purple">
    <img
      src="./Ai/py.jpg"
      alt="Python automation"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">أتمتة بايثون</h3>
      <p className="text-gray-700">
      قم بتحسين العمليات عبر عمليات تكنولوجيا المعلومات من خلال الأتمتة المستندة إلى Python. نحن ننشر أتمتة متكاملة للتعامل مع التطبيقات المعقدة التي تقود العمليات التجارية الهامة. مع حلول الذكاء الاصطناعي الخاصة بنا للأعمال، توقع دورات تطوير أسرع، وأخطاء أقل في نظام تكنولوجيا المعلومات لديك، وحل أسرع لأي مشكلات في النظام الأساسي.
      </p>
    </div>
  </div>

  {/* AI model development */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gradient-purple">
    <img
      src="./Ai/aim.jpg"
      alt="AI model development"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">تطوير نموذج الذكاء الاصطناعي</h3>
      <p className="text-gray-700">
      نحن نتميز في تقديم خدمات تطوير الذكاء الاصطناعي التي تحقق نتائج أعمال ملموسة. يتخصص فريق الخبراء لدينا، المتخصص في النهج القائم على البيانات، في صياغة نماذج الذكاء الاصطناعي المخصصة لمواجهة تحديات الأعمال المعقدة. تشمل خبرتنا معالجة اللغة الطبيعية، ورؤية الكمبيوتر، والتحليلات التنبؤية، والتعلم الآلي، سواء كانت حلول الذكاء الاصطناعي للرعاية الصحية أو عمليات الشركات، وكلها تهدف إلى تعزيز الكفاءة وتحقيق تأثير تجاري مفيد. تمتلك شركة Elite for Digital Development فريقًا كبيرًا من أعضاء تصنيف البيانات والتعليقات التوضيحية مما يساعدنا على تطوير الخوارزميات بدقة أكبر.
      </p>
    </div>
  </div>

  {/* Influencer analytics */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gradient-purple">
    <img
      src="./Ai/ia.jpg"
      alt="Influencer analytics"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">تحليلات المؤثرين</h3>
      <p className="text-gray-700 mb-2">
      استفد من أداتنا المبتكرة الخاصة لقياس عائد التسويق المؤثر. يساعدك هذا على:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>تتبع مدى صلة المشاركات المؤثرة</li>
        <li>قياس المشاركة وتأثير التسويق المؤثر عبر القنوات</li>
        <li>حدد المؤثرين الذين يمنحك أقصى قدر من الفائدة مقابل أموالك</li>
        <li>اتخاذ قرارات استراتيجية بناءً على الأنشطة الترويجية للأشخاص المؤثرين وإشراك الشريحة المستهدفة</li>
      </ul>
    </div>
  </div>

  {/* Sentiment analysis */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gradient-purple">
    <img
      src="./Ai/sa1.jpg"
      alt="Sentiment analysis"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">تحليل المشاعر</h3>
      <p className="text-gray-700 mb-2">
      احصل على رؤى مبنية على البيانات حول المحتوى الذي ينشئه المستخدم (UGC) لتحديد الفرص المتاحة لتحسين تجربة العملاء والحملات التسويقية. تتيح لك لوحة التحكم ذاتية الخدمة إمكانية التعمق في تعليقات العملاء لالتقاط ما يلي:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>رؤى الفئة</li>
        <li>انتشار الموضوع</li>
        <li>انتشار الموضوع</li>
        <li>تصورات المستهلك</li>
        <li>رؤى تنافسية</li>
      </ul>
    </div>
  </div>

  {/* Video intelligence */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gradient-purple">
    <img
      src="./Ai/vi.jpg"
      alt="Video intelligence"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">ذكاء الفيديو</h3>
      <p className="text-gray-700 mb-2">
      تقوم الخوارزمية الخاصة بنا بفحص ساعات من مقاطع الفيديو لاكتشاف مواضع العلامات التجارية باستخدام التعليقات التوضيحية للصور. تساعدك التكنولوجيا القابلة للتطوير على:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li><strong>عدد الكائنات الموجودة:</strong> يمكن للخوارزمية اكتشاف كائنات متعددة في نفس الإطار في وقت واحد.</li>
        <li><strong>الجوانب التي يتم إقرارها:</strong>لا تكتشف الخوارزمية الكائنات فحسب، بل تصنفها أيضًا إلى سمات متعددة.</li>
        <li><strong>الطابع الزمني ومدة التأييد:</strong> الوقت المحدد في بث الفيديو الذي يتم فيه تأييد علامة تجارية معينة، بل ويحسب مدة التأييد.</li>
      </ul>
      <p className="text-gray-700 mt-2">
      وهذا يضمن بيانات دقيقة لعلامتك التجارية عبر محتوى الفيديو المتنوع.
      </p>
    </div>
  </div>

</div>


      </div>
    </div>
  );
};

export default Ai;
