import React, { useEffect, useState, useRef } from "react";
import cloudImage from "./cloud.jpg"; // Adjust the path if needed
import image1 from "./image1.jpeg"; // Replace with the actual path to your image
import image2 from "./image2.jpeg"; // Replace with the actual path to your image
import image3 from "./image3.jpeg"; // Replace with the actual path to your image
import "./cloud.css";

const Cloud = () => {
  const [visible, setVisible] = useState(Array(7).fill(false));
  const refs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const currentRefs = refs.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = currentRefs.indexOf(entry.target);
          if (index !== -1) {
            setVisible((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        }
      });
    }, observerOptions);

    currentRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Image Section */}
      <div className="relative">
        <img
          src={cloudImage}
          alt="Cloud"
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col p-6 bg-gradient-to-t from-black via-transparent to-transparent">
          <h1 className="cloud text-gradient text-8xl font-extrabold mb-4 text-center w-full px-6">
            CLOUD SERVICES
          </h1>
          <div className="w-full max-w-[calc(100%_+_2rem)] mx-auto relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-[calc(100%_+_2rem)] border-b-8 border-red-600"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Existing Paragraph Section */}
      <div className="p-6 bg-gray-800 text-white">
        <div className="max-w-none text-left">
          <h2 className=" text-4xl font-extrabold text-orange-500 mb-4 animate-fade-in">
            CLOUD SERVICES
          </h2>
          <p
            ref={(el) => (refs.current[0] = el)}
            className={`mb-4 text-lg leading-relaxed ${
              visible[0] ? "animate-fade-in" : "opacity-0"
            } ${visible[0] ? "delay-0" : ""}`}
          >
            Cloud services offer secure and managed solutions that empower
            businesses to achieve outcome-based modernization, driving
            innovation, agility, and efficiency in today's digital landscape.
          </p>
          <p
            ref={(el) => (refs.current[1] = el)}
            className={`mb-4 text-lg leading-relaxed ${
              visible[1] ? "animate-fade-in" : "opacity-0"
            } ${visible[1] ? "delay-200" : ""}`}
          >
            Cloud computing has revolutionized the way businesses operate by
            providing on-demand access to a shared pool of computing resources,
            including storage, processing power, and applications, delivered
            over the internet. With cloud services, businesses can leverage
            scalable infrastructure and platforms without the need for
            significant upfront investment in hardware or infrastructure
            maintenance.
          </p>
          <p
            ref={(el) => (refs.current[2] = el)}
            className={`mb-4 text-lg leading-relaxed ${
              visible[2] ? "animate-fade-in" : "opacity-0"
            } ${visible[2] ? "delay-400" : ""}`}
          >
            One of the key advantages of cloud services is security. Leading
            cloud providers invest heavily in advanced security measures to
            protect data and applications stored in the cloud. These measures
            include encryption, identity and access management, network
            security, and compliance certifications, ensuring that businesses
            can trust their sensitive information is safe from unauthorized
            access or data breaches.
          </p>
          <p
            ref={(el) => (refs.current[3] = el)}
            className={`mb-4 text-lg leading-relaxed ${
              visible[3] ? "animate-fade-in" : "opacity-0"
            } ${visible[3] ? "delay-600" : ""}`}
          >
            Managed cloud solutions take security a step further by providing
            ongoing monitoring, threat detection, and incident response
            services. Managed service providers (MSPs) employ teams of skilled
            professionals who specialize in cloud security to proactively
            identify and mitigate potential risks, ensuring that businesses can
            focus on their core activities without worrying about the security
            of their cloud environments.
          </p>
          <p
            ref={(el) => (refs.current[4] = el)}
            className={`mb-4 text-lg leading-relaxed ${
              visible[4] ? "animate-fade-in" : "opacity-0"
            } ${visible[4] ? "delay-800" : ""}`}
          >
            In addition to security, cloud services enable businesses to achieve
            outcome-based modernization by driving agility and innovation. Cloud
            computing allows for rapid provisioning of resources, enabling
            businesses to quickly scale up or down in response to changing
            demand. This agility is particularly valuable for businesses
            undergoing digital transformation initiatives, allowing them to
            experiment with new technologies and business models without the
            constraints of traditional IT infrastructure.
          </p>
          <p
            ref={(el) => (refs.current[5] = el)}
            className={`mb-4 text-lg leading-relaxed ${
              visible[5] ? "animate-fade-in" : "opacity-0"
            } ${visible[5] ? "delay-1000" : ""}`}
          >
            Furthermore, cloud services provide access to a wide range of
            managed services and tools that streamline development, deployment,
            and management of applications. From container orchestration
            platforms like Kubernetes to serverless computing services like AWS
            Lambda, businesses can leverage cloud-native technologies to build
            and deploy modern, scalable applications with ease.
          </p>
          <p
            ref={(el) => (refs.current[6] = el)}
            className={`text-lg leading-relaxed ${
              visible[6] ? "animate-fade-in" : "opacity-0"
            } ${visible[6] ? "delay-1200" : ""}`}
          >
            Ultimately, cloud services empower businesses to focus on driving
            value and innovation, rather than worrying about the complexities of
            managing IT infrastructure. By partnering with a trusted cloud
            provider or MSP, businesses can harness the power of the cloud to
            achieve their strategic goals, whether it's improving operational
            efficiency, enhancing customer experiences, or accelerating
            time-to-market for new products and services.
          </p>
        </div>
      </div>

      {/* New Section - Positioned at the Bottom */}
      <div className="p-6 bg-blue-300 text-gray-800">
        <div className="max-w-none text-left">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-4">
            Unlock innovation with the right cloud solutions
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            Unlocking innovation with the right cloud solutions is crucial for
            businesses aiming to stay competitive and thrive in today's digital
            economy. While cloud technology has indeed become a catalyst for
            transformation, many enterprises face challenges in fully leveraging
            its potential and demonstrating its value in driving business
            outcomes. This is where ELITE Cloud Services come into play,
            offering a comprehensive approach to addressing these barriers and
            accelerating transformation initiatives.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            ELITE Cloud Services adopt a 360-degree approach to cloud adoption,
            focusing on identifying and solving challenges across all aspects of
            the organization's cloud journey. This approach encompasses several
            key components:
          </p>
          {/* New Points */}
          <div className="border-l-4 border-orange-500 pl-4 mb-4">
            <h3 className="text-2xl font-bold text-blue-800 mb-2 flex items-center">
              <span className="text-orange-500 mr-2">&#10148;</span>{" "}
              {/* Arrow Symbol */}
              Strategic Alignment
            </h3>
            <p className="text-lg text-gray-800">
              ELITE Cloud Services begin by aligning cloud initiatives with the
              organization's overall business strategy. By understanding the
              specific goals and objectives of the business, the cloud strategy
              can be tailored to support and drive these outcomes effectively.
            </p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4 mb-4">
            <h3 className="text-2xl font-bold text-blue-800 mb-2 flex items-center">
              <span className="text-orange-500 mr-2">&#10148;</span>{" "}
              {/* Arrow Symbol */}
              Assessment and Planning
            </h3>
            <p className="text-lg text-gray-800">
              A thorough assessment of the organization's current IT
              infrastructure, applications, and processes is conducted to
              identify areas for improvement and optimization. This assessment
              helps in developing a comprehensive cloud migration and adoption
              plan that aligns with the organization's goals.
            </p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4 mb-4">
            <h3 className="text-2xl font-bold text-blue-800 mb-2 flex items-center">
              <span className="text-orange-500 mr-2">&#10148;</span>{" "}
              {/* Arrow Symbol */}
              Technology Enablement
            </h3>
            <p className="text-lg text-gray-800">
              ELITE Cloud Services leverage advanced cloud technologies and
              tools to enable the organization to achieve its cloud objectives.
              This includes adopting scalable infrastructure, leveraging
              cloud-native services, and implementing robust security measures
              to ensure data protection and compliance.
            </p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4 mb-4">
            <h3 className="text-2xl font-bold text-blue-800 mb-2 flex items-center">
              <span className="text-orange-500 mr-2">&#10148;</span>{" "}
              {/* Arrow Symbol */}
              Change Management
            </h3>
            <p className="text-lg text-gray-800">
              Successful cloud adoption requires effective change management to
              address the cultural and operational shifts within the
              organization. ELITE Cloud Services provide guidance and support to
              ensure smooth transitions and empower employees to embrace new
              ways of working.
            </p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-2xl font-bold text-blue-800 mb-2 flex items-center">
              <span className="text-orange-500 mr-2">&#10148;</span>{" "}
              {/* Arrow Symbol */}
              Continuous Improvement
            </h3>
            <p className="text-lg text-gray-800">
              Cloud adoption is not a one-time effort but an ongoing journey.
              ELITE Cloud Services emphasize continuous improvement, regularly
              assessing the organization's cloud environment, identifying
              opportunities for optimization, and implementing enhancements to
              drive further innovation and efficiency.
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-200 text-gray-800">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
          IT Components We Manage
        </h2>
        <p className="mb-4 text-lg leading-relaxed italic">
          * We outline a <b>sample set of IT components</b> as it will be
          individual for each company’s infrastructure and IT assets.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative group">
            <img
              src={image1}
              alt="IT Component 1"
              className="w-full h-64 object-cover imgit"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white p-4">
                <h3 className="text-2xl font-bold mb-2 text-green-500">
                  REDUCE RISK
                </h3>
                <p className="text-lg">
                  Our cloud services are designed with integrated industry best
                  practices, processes, and methodologies that are reinforced by
                  24-7 support, that helps your service runs smoothly, minimizes
                  the risk of failure and drives your ongoing success.
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img
              src={image2}
              alt="IT Component 2"
              className="w-full h-64 object-cover imgit"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white p-4">
                <h3 className="text-2xl font-bold mb-2 text-green-500">
                  SECURE
                </h3>
                <p className="text-lg">
                  Our modern security and privacy measures safeguard your data
                  and our time-tested processes coupled with our cloud
                  governance, compliance, and visibility features provide
                  unparalleled transparency and control over your IT environment
                  from our user-friendly digital self-service model.
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img
              src={image3}
              alt="IT Component 3"
              className="w-full h-64 object-cover imgit"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white p-4">
                <h3 className="text-2xl font-bold mb-2 text-green-500">
                  MANAGE
                </h3>
                <p className="text-lg">
                  Prioritize your business objectives by entrusting the
                  management of your IT estate to the Kyndryl experts. Our
                  intelligent monitoring and pre-emptive management of hybrid
                  multi-cloud environments allow you to optimize the potential
                  of your cloud environment, giving you the freedom to focus on
                  what truly matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cloud Consulting Section */}
      <div className="p-6 bg-gray-500 text-gray-800 mb-12">
        <div className="max-w-none text-left">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-4">
            Cloud Consulting
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Cloud consulting services offer businesses the opportunity to
            leverage the expertise and experience of seasoned professionals to
            develop and implement an optimal cloud strategy tailored to their
            unique needs and goals. With decades of experience working with some
            of the world's most complex IT environments, cloud consulting firms
            like ours are well-equipped to guide organizations through every
            stage of their cloud journey, from strategy development to
            implementation and beyond.
          </p>
          <p className="mb-4">
            Here's how our cloud consulting services can benefit businesses:
          </p>
          {/* Consulting Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                Strategy Development
              </h3>

              <p className="text-gray-700">
                We work closely with businesses to understand their objectives,
                challenges, and existing IT landscape. Based on this assessment,
                we develop a comprehensive cloud strategy aligned with the
                organization's goals, budget, and timeline. Our approach takes
                into account factors such as scalability, security, compliance,
                and integration with existing systems to ensure a seamless
                transition to the cloud.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                IT Architecture Streamlining
              </h3>

              <p className="text-gray-700">
                Our team of experts analyzes the organization's current IT
                architecture to identify opportunities for optimization and
                streamlining. We help businesses migrate legacy systems and
                applications to the cloud, redesigning architecture where
                necessary to improve performance, scalability, and
                cost-efficiency. Our goal is to create a flexible and resilient
                IT infrastructure that supports the organization's growth and
                innovation initiatives.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                Business Results Alignment
              </h3>

              <p className="text-gray-700">
                At the heart of our cloud consulting services is a focus on
                delivering tangible business results. We work closely with
                stakeholders to define key performance indicators (KPIs) and
                metrics that align with the organization's strategic objectives.
                Throughout the cloud implementation process, we continuously
                monitor progress against these metrics, making adjustments as
                needed to ensure that the desired business outcomes are
                achieved.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                Risk Mitigation
              </h3>

              <p className="text-gray-700">
                Transitioning to the cloud involves inherent risks, including
                security vulnerabilities, data loss, and operational
                disruptions. Our cloud consulting services include comprehensive
                risk assessment and mitigation strategies to minimize these
                risks. We help businesses implement robust security measures,
                data protection policies, and disaster recovery plans to
                safeguard their critical assets and ensure business continuity
                in the cloud environment.
              </p>
            </div>
            {/* Card 5 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                Continuous Improvement
              </h3>

              <p className="text-gray-700 ">
                Cloud technology is constantly evolving, with new features and
                capabilities being introduced regularly. Our cloud consulting
                services include ongoing support and guidance to help businesses
                stay ahead of the curve. We provide regular updates on emerging
                trends, best practices, and optimization opportunities to ensure
                that our clients continue to derive maximum value from their
                cloud investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
