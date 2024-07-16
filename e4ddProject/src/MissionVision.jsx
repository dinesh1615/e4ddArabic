import React, { useState } from 'react';

const MissionVision = () => {
  const [showMissionFull, setShowMissionFull] = useState(false);
  const [showVisionFull, setShowVisionFull] = useState(false);

  const toggleMission = () => {
    setShowMissionFull(!showMissionFull);
  };

  const toggleVision = () => {
    setShowVisionFull(!showVisionFull);
  };

  const missionText =
    "لقد استلهمنا مهمة تدريب ونشر وتمكين الأشخاص واتباع أفضل الممارسات التجارية لضمان النمو والاستدامة. نرغب في الاستمرار في بناء فرق محترفة تتوق إلى العمل والتعلم وإعادة توجيه نفسها نحو الأوقات المتغيرة وتكون قادرة على توفير أحدث حلول تكنولوجيا المعلومات الإستراتيجية مع منتجات وخدمات تقنية قوية لتلبية المتطلبات المعقدة للشركات الكبيرة الشركات بطريقة مرنة وسريعة الاستجابة ومتسقة تتماشى مع الأهداف طويلة المدى للنمو المتبادل.";

  const visionText =
    "ما نفعله أفضل! رؤى Rovonix لمكان يستطيع فيه الأفراد تحقيق النجاح والفشل في خطواتهم. منصة يتحدى فيها الأشخاص حدودهم ويوسعون آفاقهم، وبالتالي ندرج أنفسنا ضمن أفضل المؤسسات التي تقدم حلول وخدمات تكنولوجيا المعلومات للمؤسسات عبر جميع قطاعات الأعمال. ملتزمون بتوفير رضا العملاء عن طريق قياس تصور العملاء. ممارسة الأعمال التجارية بطريقة شفافة مع جميع الأطراف المعنية. تحسين فعالية نظام إدارة الجودة من خلال التدريب والاستدامة المستمرة لأهداف العمل.";

  const missionShort = missionText.slice(0, missionText.length / 2);
  const visionShort = visionText.slice(0, visionText.length / 2);

  return (
    <div className="md:flex md:flex-col">
      {/* Mission Card */}
      <div
        className={`w-full md:w-full p-4 md:p-2 ${
          showMissionFull ? 'md:h-full' : 'md:h-1/2'
        }`}
      >
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center h-full">
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0 md:order-1 order-2">
            <img
              src="/mission.jpg"
              alt="Our Mission"
              className={`w-40 h-40 object-cover rounded-full transform translate-x-0 -translate-y-0 ${showMissionFull ? 'md:w-40 md:h-40 rounded-lg' : 'md:w-40 md:h-40 rounded-full'}`}
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left md:order-2 order-1">
            <div className="flex items-center justify-center md:justify-start w-full mb-4">
              <div className="flex-1 border-b border-black mx-4"></div>
              <h3 className="text-xl font-bold font-cinzel mx-4">مهمة</h3>
              <div className="flex-1 border-b border-black mx-4"></div>
            </div>
            <p className="text-gray-700 mb-4 md:mb-0 md:flex-5">
              {showMissionFull ? missionText : missionShort}
            </p>
            <a
              href="#mission"
              onClick={toggleMission}
              className="inline-block mt-2 mb-4 md:mb-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:text-white"
            >
              {showMissionFull ? 'أقرأ أقل' : 'اقرأ أكثر'}
            </a>
          </div>
        </div>
      </div>

      {/* Vision Card */}
      <div
        className={`w-full md:w-full p-4 md:p-2 ${
          showVisionFull ? 'md:h-full' : 'md:h-1/2'
        }`}
      >
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center h-full">
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0 md:order-1 order-2">
            <img
              src="/vision.jpg"
              alt="Our Vision"
              className={`w-40 h-40 object-cover rounded-full transform translate-x-0 -translate-y-0 ${showVisionFull ? 'md:w-40 md:h-40 rounded-lg' : 'md:w-40 md:h-40 rounded-full'}`}
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left md:order-2 order-1">
            <div className="flex items-center justify-center md:justify-start w-full mb-4">
              <div className="flex-1 border-b border-black mx-4"></div>
              <h3 className="text-xl font-bold font-cinzel mx-4">رؤية</h3>
              <div className="flex-1 border-b border-black mx-4"></div>
            </div>
            <p className="text-gray-700 mb-4 md:mb-0 md:flex-5">
              {showVisionFull ? visionText : visionShort}
            </p>
            <a
              href="#vision"
              onClick={toggleVision}
              className="inline-block mt-2 mb-4 md:mb-0 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:text-white"
            >
              {showVisionFull ? 'أقرأ أقل' : 'اقرأ أكثر'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
