import React, { useEffect, useRef } from "react";
import "./Db.css";

const databases = [
  {
    name: "Microsoft SQL Server",
    image: "./db/dbs1.jpg",
    description:
      "Microsoft SQL Server is renowned for its robust RDBMS architecture, prized for its formidable security features and advanced analytics capabilities. It stands as an optimal choice for mission-critical applications where data integrity and performance are paramount.",
  },
  {
    name: "Oracle Database",
    image: "./db/dbs2.jpg",
    description:
      "Oracle Database, revered in enterprise circles, boasts unparalleled reliability, scalability, and a rich suite of data management tools. Its steadfast performance makes it the cornerstone of many large-scale operations seeking stability and comprehensive data control.",
  },
  {
    name: "MySQL",
    image: "./db/dbs3.jpg",
    description:
      "MySQL, an open-source RDBMS, enjoys widespread adoption within the web development sphere and among small to medium-sized databases. Its user-friendly interface and cost-effectiveness render it a preferred solution for various projects requiring agility and affordability.",
  },
  {
    name: "Sybase",
    image: "./db/dbs4.jpg",
    description:
      "Sybase, recognized for its exceptional performance and scalability, serves as a stalwart in managing both transactional and analytical workloads across diverse industries. Its robust capabilities cater to the demanding requirements of businesses seeking efficient data processing and seamless scalability.",
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
          Database
        </span>{" "}
        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Management
        </span>{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Services
        </span>{" "}
        <span className="ml-2 inline-block text-xl">📊</span>
      </h1>

      <div className="container mx-auto bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 text-white p-4 rounded-lg mb-10">
        <p className="text-lg text-center mb-4">
          Organizations today require robust information availability and data
          protection to support their critical applications. ELITE Database
          Administration and Management Services offer flexible solutions
          tailored to diverse organizational needs. Whether seeking cost
          reduction or leveraging cutting-edge database features, our expertise
          provides optimal support.
        </p>
        <p className="text-lg text-center mb-4">
          Our service packages deliver top-tier database management, ensuring
          quality support and assistance. By delegating tasks to us,
          organizations can lower support costs by allocating resources
          precisely when needed. ELITE Database Services encompass proactive
          administration, management, monitoring, reporting, and support for
          Microsoft® SQL®, Oracle®, MySQL, and Sybase environments.
        </p>
        <p className="text-lg text-center mb-4">
          We prioritize proactive measures to anticipate and address database
          issues before they impact operations. Our team ensures seamless
          database performance and reliability, allowing organizations to focus
          on their core objectives with confidence.
        </p>
        <p className="text-lg text-center mb-4">
          With ELITE Database Services, organizations gain access to seasoned
          professionals equipped with the latest tools and techniques. Whether
          it's optimizing database performance, implementing data protection
          measures, or staying ahead of emerging trends, our team is dedicated
          to providing comprehensive database support.
        </p>
        <p className="text-lg text-center mb-8">
          In a dynamic business landscape, ELITE Database Management Services
          stand as a reliable partner, empowering organizations to thrive
          through effective database management and support.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-800 via-pink-500 to-teal-500 bg-clip-text text-transparent">
        Supported Database Environments
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
