import React, { useState } from "react";
import backgroundVideo from "./vdcontact.mp4";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg"; // New image added

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
    declaration: false,
  });

  const [fieldFocused, setFieldFocused] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
    preferredDate: false,
    preferredTime: false,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAddress, setShowAddress] = useState(false);

  const handleImageClick = (imageNumber) => {
    if (selectedImage === imageNumber && showAddress) {
      setSelectedImage(null);
      setShowAddress(false);
    } else {
      setSelectedImage(imageNumber);
      setShowAddress(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    setFieldFocused({ ...fieldFocused, [name]: value.trim() !== "" });
  };

  const handleFocus = (name) => {
    setFieldFocused({ ...fieldFocused, [name]: true });
  };

  const handleBlur = (name) => {
    if (formData[name].trim() === "") {
      setFieldFocused({ ...fieldFocused, [name]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      preferredDate: "",
      preferredTime: "",
      declaration: false,
    });
    setFieldFocused({
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      message: false,
      preferredDate: false,
      preferredTime: false,
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="relative flex flex-col md:flex-row items-start justify-center w-full h-full p-8">
        <div className="md:w-1/3 flex flex-col justify-center items-center space-y-4 bg-blue-900 rounded-lg shadow-lg p-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4 text-center">
          اتصل هنا لمزيد من المعلومات
          </h2>
          <img
            src={image1}
            alt="USA branch"
            className="rounded-lg shadow-lg h-auto max-w-full cursor-pointer"
            style={{ maxHeight: "300px" }}
            onClick={() => handleImageClick(1)}
          />
          {showAddress && selectedImage === 1 && (
            <p className="text-white mt-4 text-center whitespace-pre-line bg-blue-600 p-2 rounded-lg">
              <b>فرع الولايات المتحدة الأمريكية</b> <br />
              2915 بلوستيم د
              <br />
              #2193، غرب فارجو
              <br />
              ند 58078 <br />
              الولايات المتحدة الأمريكية
              <br />
              راسلنا عبر البريد الإلكتروني: info@e4dd.com
              <br />
            </p>
          )}
          <img
            src={image2}
            alt="Hyderabad branch"
            className="rounded-lg shadow-lg h-auto max-w-full cursor-pointer"
            style={{ maxHeight: "300px" }}
            onClick={() => handleImageClick(2)}
          />
          {showAddress && selectedImage === 2 && (
            <p className="text-white mt-4 text-center whitespace-pre-line bg-purple-600 p-2 rounded-lg">
              <b>فرع حيدر أباد</b>
              <br />
              ساحة مانجيرا
              <br />
              #403، أميربيت
              <br />
              حيدر أباد، تيلانجانا، الهند <br />
              راسلنا عبر البريد الإلكتروني: info@e4dd.com <br />
              اتصل بنا: +91-988-500-8080
            </p>
          )}
          <img
            src={image3}
            alt="New branch"
            className="rounded-lg shadow-lg h-auto max-w-full cursor-pointer"
            style={{ maxHeight: "300px" }}
            onClick={() => handleImageClick(3)}
          />
          {showAddress && selectedImage === 3 && (
            <p className="text-white mt-4 text-center whitespace-pre-line bg-green-600 p-2 rounded-lg">
              <b>المقر العالمي عمان</b>
              <br />
              النخبة للتطوير الرقمي ذ.م.م.
              <br />
              السيب / السيب / محافظة مسقط <br />
              ص.ب 111 <br />
              الرمز البريدي 112 <br />
              راسلنا عبر البريد الإلكتروني: info@e4dd.com <br />
              اتصل بنا: +968-7698-0807
            </p>
          )}
        </div>
        <div className="bg-[#f11550] shadow-lg rounded-lg max-w-2xl w-full p-8 md:ml-12 text-center mt-8 md:mt-0">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-4">
          دعونا ننمو معا
          </h2>
          <p className="text-lg md:text-xl text-white mb-6">
          ابدأ محادثة معنا
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="firstName"
                    className="block text-m font-medium text-gray-700"
                  >
                   الاسم الأول
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder=" الاسم الأول"
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => handleFocus("firstName")}
                    onBlur={() => handleBlur("firstName")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                      fieldFocused.firstName || formData.firstName
                        ? "border-blue-600 ring ring-blue-600 ring-opacity-50 bg-blue-100 text-blue-900"
                        : "border-gray-300"
                    }`}
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="lastName"
                    className="block text-m font-medium text-gray-700"
                  >
                    اسم العائلة
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="اسم العائلة"
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => handleFocus("lastName")}
                    onBlur={() => handleBlur("lastName")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                      fieldFocused.lastName || formData.lastName
                        ? "border-pink-600 ring ring-pink-600 ring-opacity-50 bg-pink-100 text-pink-900"
                        : "border-gray-300"
                    }`}
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-m font-medium text-gray-700"
                  >
                    بريد إلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" بريد إلكتروني"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                      fieldFocused.email || formData.email
                        ? "border-purple-600 ring ring-purple-600 ring-opacity-50 bg-purple-100 text-purple-900"
                        : "border-gray-300"
                    }`}
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="block text-m font-medium text-gray-700"
                  >
                    هاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="هاتف"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus("phone")}
                    onBlur={() => handleBlur("phone")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                      fieldFocused.phone || formData.phone
                        ? "border-green-600 ring ring-green-600 ring-opacity-50 bg-green-100 text-green-900"
                        : "border-gray-300"
                    }`}
                    required
                  />
                </div>
              </div>
              <div className="w-full px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-m font-medium text-gray-700"
                  >
                    رسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="رسالة"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={() => handleBlur("message")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                      fieldFocused.message || formData.message
                        ? "border-red-600 ring ring-red-600 ring-opacity-50 bg-red-100 text-red-900"
                        : "border-gray-300"
                    }`}
                    rows="4"
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="preferredDate"
                    className="block text-m font-medium text-gray-700"
                  >
                    موعد مفضل
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    onFocus={() => handleFocus("preferredDate")}
                    onBlur={() => handleBlur("preferredDate")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                      fieldFocused.preferredDate || formData.preferredDate
                        ? "border-yellow-600 ring ring-yellow-600 ring-opacity-50 bg-yellow-100 text-yellow-900"
                        : "border-gray-300"
                    }`}
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="preferredTime"
                    className="block text-m font-medium text-gray-700"
                  >
                    الوقت المفضل
                  </label>
                  <input
                    type="time"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    onFocus={() => handleFocus("preferredTime")}
                    onBlur={() => handleBlur("preferredTime")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                      fieldFocused.preferredTime || formData.preferredTime
                        ? "border-indigo-600 ring ring-indigo-600 ring-opacity-50 bg-indigo-100 text-indigo-900"
                        : "border-gray-300"
                    }`}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="relative mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleChange}
                  className="form-checkbox text-pink-600"
                  required
                />
                <span className="ml-2 text-gray-700">
                أنا أوافق على{" "}
                  <a href="agree" className="text-blue-600">
                  الأحكام والشروط
                  </a>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              يُقدِّم
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
