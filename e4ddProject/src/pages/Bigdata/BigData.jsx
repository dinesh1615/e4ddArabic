import React, { useState } from "react";
import "./BigData.css";

const BigData = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "./BigData/bd1.jpg",
    "./BigData/bd5.jpg",
    "./BigData/bd2.jpg",
  ]; // Replace with your image paths

  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="p-0 m-0 max-w-full w-full h-full">
      <div className="relative">
        <div className="relative w-full h-96 overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt="Big Data"
            className="w-full h-96 object-cover"
          />
        </div>
        <button
          onClick={handlePreviousClick}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        >
          &lt;
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        >
          &gt;
        </button>
      </div>

      <div className="p-6 bg-gray-100 text-center">
        <h1 className="text-4xl font-extrabold text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-serif">:
          خِدْمَات اِسْتِشَارَاتِ اَلْبَيَانَاتِ اَلضَّخْمَةِ
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500 font-serif font-semibold leading-relaxed">
        بِصِفَتِهِ أَصْلاً تَنَافُسِيًّا، تَعُدْ اَلْبَيَانَاتُ مُهِمَّةً لِتَمْيِيزِ شَرِكَتِكَ عَنْ بَقِيَّةِ اَلْمُنَافِسِينَ يُمْكِنُ أَنْ تُسَاعِدَ خِدْمَاتِنَا لِلِاسْتِشَارَاتِ وَالْهَنْدَسَةِ فِي اَلْبَيَانَاتِ اَلضَّخْمَةِ شَرِكَتُكَ فِي تَحْسِينِ صُنْعِ اَلْقَرَارِ، وَتَسْرِيعَ اَلِابْتِكَارِ، وَتَعْزِيزَ تَجْرِبَةِ اَلْعُمَلَاءِ، وَتَعْزِيزَ اَلْكَفَاءَةِ اَلتَّشْغِيلِيَّةِ لِلْعَمَلِيَّاتِ.
        </p>
      </div>

      <div className="-mt-10 space-y-6 px-6 ">
        <section className="flex flex-col items-center mt-8 py-8">
          <h2 className="w-full text-4xl font-extrabold text-center mb-4 text-gray-900">
            <span className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text font-serif">
            خِدْمَاتِ اَلِاسْتِشَارَاتِ فِي اَلْبَيَانَاتِ اَلضَّخْمَةِ لَدَيْنَا؟
            </span>
            <span className="inline-block ml-2 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-serif">
            لِمَاذَا اِخْتِيَارُ
            </span>
          </h2>

          <div className="w-full  flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div
              className="carda relative overflow-hidden h-72 bg-cover bg-center shadow-lg rounded-lg flex-grow max-w-xs"
              style={{ backgroundImage: "url('./BigData/card1.jpg')" }}
            >
              <div className="card-content1 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100"></div>
              <div className="card-content1 absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 text-white opacity-0 transform translate-y-full transition-transform transition-opacity duration-500 hover:opacity-100 hover:translate-y-0 p-6">
                <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-mono text-2xl shadow-md">
                قيادة عملية صنع القرار الاستراتيجي
                </h3>
                <p>
                في عالم يعتمد على البيانات، يعد اتخاذ القرار الاستراتيجي أمرًا ضروريًا
                  أساسي. خدماتنا الاستشارية المتعلقة بالبيانات الضخمة تمكّنك
                  المنظمة لتسخير الإمكانات الكاملة لبياناتك،
                  تمكنك من اتخاذ قرارات مستنيرة تدفع النمو و
                  الربحية.
                </p>
              </div>
            </div>
            <div
              className="carda relative overflow-hidden h-72 bg-cover bg-center shadow-lg rounded-lg flex-grow max-w-xs"
              style={{ backgroundImage: "url('./BigData/card2.jpg')" }}
            >
              <div className="card-content1 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100"></div>
              <div className="card-content1 absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 text-white opacity-0 transform translate-y-full transition-transform transition-opacity duration-500 hover:opacity-100 hover:translate-y-0 p-6">
                <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-mono text-2xl shadow-md">
                تسريع الابتكار
                </h3>
                <p>
                الابتكار هو شريان الحياة لأي عمل تجاري ناجح. مع
                  تحليلاتنا المتطورة وهندسة البيانات المتقدمة
                  التقنيات، نحن نساعدك على إطلاق العنان لقوة الابتكار،
                  مما يتيح لك البقاء في الطليعة والتفوق على
                  مسابقة.
                </p>
              </div>
            </div>
            <div
              className="carda relative overflow-hidden h-72 bg-cover bg-center shadow-lg rounded-lg flex-grow max-w-xs"
              style={{ backgroundImage: "url('./BigData/card3.jpg')" }}
            >
              <div className="card-content1 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100"></div>
              <div className="card-content1 absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 text-white opacity-0 transform translate-y-full transition-transform transition-opacity duration-500 hover:opacity-100 hover:translate-y-0 p-6">
                <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-mono text-2xl shadow-md">
                تعزيز تجربة العملاء
                </h3>
                <p>
                تجربة العملاء هي جوهر كل نجاح
                  عمل. تمكنك حلول البيانات الضخمة لدينا من تحقيق مكاسب عميقة
                  رؤى حول سلوك العملاء وتفضيلاتهم، مما يتيح لك
                  لتقديم تجارب مخصصة تحافظ على عملائك
                  العودة للمزيد.
                </p>
              </div>
            </div>
            <div
              className="carda relative overflow-hidden h-72 bg-cover bg-center shadow-lg rounded-lg flex-grow max-w-xs"
              style={{ backgroundImage: "url('./BigData/card4.jpg')" }}
            >
              <div className="card-content1 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100"></div>
              <div className="card-content1 absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 text-white opacity-0 transform translate-y-full transition-transform transition-opacity duration-500 hover:opacity-100 hover:translate-y-0 p-6">
                <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-mono text-2xl shadow-md">
                قيادة الكفاءة التشغيلية
                </h3>
                <p>
                الكفاءة التشغيلية ضرورية لتحقيق الحد الأقصى
                  الإنتاجية وتقليل التكاليف. هندسة البيانات لدينا
                  تساعد الخدمات في تبسيط عملياتك وأتمتة العمليات المتكررة
                  المهام، وتحسين العمليات، مما يتيح لك تحقيق المزيد
                  الكفاءة وخفة الحركة.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-12 py-8 px-4 bg-gradient-to-r from-blue-200 via-teal-200 to-green-200 rounded-lg shadow-xl lg:flex lg:items-center">
          <h2 className="text-3xl font-semibold text-left text-gray-800 mb-6 lg:mb-0 animate-fade-in-up lg:w-1/2 lg:ml-4">
            <span className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
            الميزات الرئيسية لحلول البيانات الضخمة لدينا:
            </span>
          </h2>
          <div className="ml-5 mt-4 space-y-6 lg:mt-0 lg:ml-0 lg:flex lg:flex-col lg:space-y-6 lg:space-x-8">
            <div className="transform transition duration-500 hover:scale-105 animate-fade-in-up lg:mr-4 mb-4 lg:mb-0">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <strong className="block mb-2 text-blue-600">مقدار:</strong>
                <p className="text-gray-700">
                مع النمو الهائل للبيانات، والمعالجة المتخصصة
                  هناك حاجة إلى تقنيات لاستخراج رؤى قابلة للتنفيذ منها
                  مجموعات بيانات واسعة.
                </p>
              </div>
            </div>
            <div className="transform transition duration-500 hover:scale-105 animate-fade-in-up delay-200 lg:mr-4 mb-4 lg:mb-0">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <strong className="block mb-2 text-green-600">متنوع:</strong>
                <p className="text-gray-700">
                تدعم حلولنا مجموعة واسعة من تنسيقات البيانات، من
                  الوثائق وقواعد البيانات التقليدية إلى شبه المنظمة و
                  بيانات غير منظمة من مصادر مختلفة.
                </p>
              </div>
            </div>
            <div className="transform transition duration-500 hover:scale-105 animate-fade-in-up delay-400 lg:mr-2 lg:ml-0 -mb-6 lg:mb-0 lg:mt-0">
              <div className="p-4 bg-white rounded-lg shadow-md ml-0 lg:-ml-9">
                <strong className="block mb-2 text-purple-600">
                سرعة:
                </strong>
                <p className="text-gray-700">
                سواء من خلال معالجة الدفعات أو التحليل في الوقت الحقيقي، لدينا
                  تقدم تحليلات البيانات الضخمة رؤى بسرعة ودقة.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-4 bg-gradient-to-r from-blue-200 via-teal-200 to-green-200 rounded-lg shadow-xl">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-8 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 font-serif">
              :خِدْمَاتُنَا اَلشَّامِلَةُ لِلْبَيَانَاتِ اَلضَّخْمَةِ
            </span>
          </h2>

          <ul className="list-disc ml-8 mt-4 space-y-4">
            <li className="text-gray-900">
              <strong>هندسة البيانات:</strong> ·       هَنْدَسَةُ اَلْبَيَانَاتِ: مِنْ قَنَوَاتِ اَلْبَيَانَاتِ اَلْقَوِيَّةِ إِلَى حُلُولِ اَلتَّخْزِينِ اَلْفَعَّالَةِ، نُقَدِّمُ خِدْمَاتُ هَنْدَسَةُ اَلْبَيَانَاتِ مِنْ اَلْأَلِفِ إِلَى اَلْيَاءِ لِتَمْكِين اَلتَّحَوُّلَاتِ فِي جَمِيعِ أَنْحَاءِ اَلشَّرِكَةِ
            </li>
            <li className="text-gray-900">
              <strong>تحليلات البيانات الضخمة:</strong>·       تَحْلِيلَات اَلْبَيَانَاتِ اَلضَّخْمَةِ: يَقُومَ فَرِيقُنَا اَلْمُتَخَصِّصُ بِدَمْجِ اَلتَّحْلِيلَاتِ اَلْمُتَقَدِّمَةِ وَعُلُومِ اَلْبَيَانَاتِ فِي حُلُولِكَ، مِمَّا يُنْشِئُ لَوْحَاتِ مَعْلُومَاتٍ مُخَصَّصَةٍ لِإِدَارَةِ رُؤَى أَفْكَارِ اَلْأَعْمَالِ.
            </li>
            <li className="text-gray-900">
              <strong>تطوير البيانات الضخمة:</strong> ·       تَطْوِيرُ اَلْبَيَانَاتِ اَلضَّخْمَةِ: نُطَوِّرُ حُلُولاً مُخَصَّصَةً تُرَكِّزُ عَلَى إِثْرَاءٍ وَقِيَاسِ وَتَصْوِيرِ اَلرُّؤَى وَالْأَفْكَارِ اَلْمُسْتَمَدَّةِ مِنْ مِلْيَارَاتِ اَلتَّفَاعُلَاتِ، مَعَ اَلْحِفَاظِ عَلَى اَلِامْتِثَالِ اَلتَّنْظِيمِيِّ وَالْأَمْنِ كَأَوْلَوِيَّةِ
            </li>
            <li className="text-gray-900">
              <strong>تكامل البيانات:</strong> ·       تَكَامُلِ اَلْبَيَانَاتِ: نُسَاعِدُ فِي تَوْحِيدِ وَإِعْدَادِ بَيَانَاتِكَ لِلتَّحْلِيلِ اَلْإِضَافِيِّ، مِمَّا يَضْمَنُ دَمْجَ اَلْمَعْلُومَاتِ اَلْحَاسِمَةِ فِي هَيْكَلٍ شَامِلٍ وَمَرِنٍ.
            </li>
            <li className="text-gray-900">
              <strong>تحليل بيانات إنترنت الأشياء:</strong> ·    خبراؤنا متخصصون في
              تحليل البيانات من أجهزة إنترنت الأشياء، مما يساعدك على استخراج القيمة
              الرؤى وتحسين حلول إنترنت الأشياء الخاصة بك.
            </li>
            <li className="text-gray-900">
              <strong>التعلم الآلي المعتمد على البيانات الضخمة:</strong> ·   من خلال الجمع بين
              الذكاء الاصطناعي، واستخراج البيانات، والتحليلات التنبؤية، وذكاء الأعمال،
              نحن نعزز كفاءة برنامج التعلم الآلي الخاص بك،
              قيادة الابتكار والنمو.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BigData;
