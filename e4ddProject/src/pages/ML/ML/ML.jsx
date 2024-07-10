import React, { useState, useEffect, useRef } from "react";
import "./ML.css";
import one from "../assets/ML/1.webp";
import two from "../assets/ML/2.jpg";
import three from "../assets/ML/3.png";
import four from "../assets/ML/Cloud-Data.webp";
import five from "../assets/ML/5.jfif";
import six from "../assets/ML/6.jfif";
import seven from "../assets/ML/seven.png";
import eight from "../assets/ML/8.png";
import nine from "../assets/ML/9.jpg";
import promo from "../assets/ML/promo1.mp4";
import benefit1 from "../assets/ML/ben1.jpg";
import benefit2 from "../assets/ML/ben2.jpg";
import benefit3 from "../assets/ML/ben3.jfif";

const ML = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleExpand = (sectionIndex) => {
    setExpandedSection(sectionIndex === expandedSection ? null : sectionIndex);
  };

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.playbackRate = 1.0;
      videoElement.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, []);

  return (
    <div className="ml-container ">
      <div className="ml-header">
        <div className="video-container">
          <video className="promo-video" autoPlay loop muted ref={videoRef}>
            <source src={promo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-text">
            <h1>MACHINE LEARNING</h1>
          </div>
        </div>
      </div>
      <div className="ml-content">
        <section className="ml-section">
          <p>
            Unlock the full potential of your data with our customized machine
            learning solutions.
          </p>
          <h2>Our Approach to Machine Learning</h2>
          <div className="ml-cards-container">
            <div
              className={`ml-card pink-card ${
                expandedSection === 1 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(1)}
            >
              {/* <div className="ribbon pink"></div> */}
              <img src={one} alt="Customized Solutions" className="ml-image" />
              <h3>Customized ML Solutions</h3>
              {expandedSection === 1 && (
                <div className="ml-expanded-content-pink">
                  <p>
                    ✓ We tailor ML solutions to meet unique business needs and
                    goals.
                  </p>
                  <br />
                  <p>
                    ✓ Specializing in predictive analytics, natural language
                    processing, and computer vision, we develop custom models to
                    solve complex business problems.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`ml-card blue-card ${
                expandedSection === 2 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(2)}
            >
              {/* <div className="ribbon blue"></div> */}
              <img src={two} alt="Deep Expertise" className="ml-image" />
              <h3>Deep Expertise in ML Technologies</h3>
              {expandedSection === 2 && (
                <div className="ml-expanded-content-blue">
                  <p>
                    ✓ Team of seasoned data scientists, ML engineers, and
                    technology consultants with extensive industry experience.
                  </p>
                  <br />
                  <p>
                    ✓ Stay updated on technological advancements and implement
                    latest ML techniques and tools in solutions.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`ml-card violet-card ${
                expandedSection === 3 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(3)}
            >
              {/* <div className="ribbon violet"></div> */}
              <img
                src={three}
                alt="End-to-End Development"
                className="ml-image"
              />
              <h3>End-to-End ML Development</h3>
              {expandedSection === 3 && (
                <div className="ml-expanded-content-violet">
                  <p>
                    ✓ Our services encompass the entire ML lifecycle, from data
                    collection and preparation to model development, deployment,
                    and ongoing optimization.
                  </p>
                  <br />
                  <p>
                    ✓ We ensure that our ML models are scalable, robust, and
                    integrate seamlessly with existing systems.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="ml-section ml-key-services">
          <h2>Key Machine Learning Services</h2>
          <div className="ml-key-cards-container">
            <div
              className={`ml-key-card green-card ${
                expandedSection === 5 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(5)}
            >
              <img
                src={five}
                alt="Natural Language Processing"
                className="ml-key-image"
              />
              <h3>Natural Language Processing (NLP)</h3>
              {expandedSection === 5 && (
                <div className="ml-key-expanded-content-green">
                  <p>
                    ✓ Leverage NLP to analyze and understand human language for
                    sentiment analysis, chatbots, and automated customer
                    support.
                  </p>
                  <br />
                  <p>
                    ✓ Enhance customer engagement and streamline communication
                    processes.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`ml-key-card orange-card ${
                expandedSection === 6 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(6)}
            >
              <img src={six} alt="Computer Vision" className="ml-key-image" />
              <h3>Computer Vision</h3>
              {expandedSection === 6 && (
                <div className="ml-key-expanded-content-orange">
                  <p>
                    ✓ Utilize computer vision technologies to analyze visual
                    data from images and videos.
                  </p>
                  <br />
                  <p>
                    ✓ Applications include object detection, facial recognition,
                    quality control, and automated image tagging.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`ml-key-card yellow-card ${
                expandedSection === 7 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(7)}
            >
              <img
                src={seven}
                alt="Recommendation Systems"
                className="ml-key-image"
              />
              <h3>Recommendation Systems</h3>
              {expandedSection === 7 && (
                <div className="ml-key-expanded-content-yellow">
                  <p>
                    ✓ Develop personalized recommendation systems to enhance
                    customer experiences and drive sales.
                  </p>
                  <br />
                  <p>
                    ✓ Analyze user behavior and preferences to deliver tailored
                    product and content recommendations.
                  </p>
                </div>
              )}
            </div>

            <div
              className={`ml-key-card brown-card ${
                expandedSection === 9 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(9)}
            >
              <img
                src={nine}
                alt="Time Series Forecasting"
                className="ml-key-image"
              />
              <h3>Time Series Forecasting</h3>
              {expandedSection === 9 && (
                <div className="ml-key-expanded-content-brown">
                  <p>
                    ✓ Build time series forecasting models to predict future
                    values based on historical data.
                  </p>
                  <br />
                  <p>
                    ✓ Applications include demand forecasting, financial
                    planning, and resource allocation.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`ml-key-card cyan-card ${
                expandedSection === 8 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(8)}
            >
              <img
                src={eight}
                alt="Anomaly Detection"
                className="ml-key-image"
              />
              {/* <div className="ribbon"></div> */}
              <h3>Anomaly Detection</h3>
              {expandedSection === 8 && (
                <div className="ml-key-expanded-content-cyan">
                  <p>
                    ✓ Implement anomaly detection models to identify unusual
                    patterns, detecting fraud, network intrusions, or equipment
                    failures.
                  </p>
                  <br />
                  <p>
                    ✓ Maintain security, reduce risks, and ensure operational
                    continuity.
                  </p>
                </div>
              )}
            </div>

            <div
              className={`ml-key-card red-card ${
                expandedSection === 4 ? "expanded" : ""
              }`}
              onClick={() => handleExpand(4)}
            >
              <img
                src={four}
                alt="Predictive Analytics"
                className="ml-key-image"
              />
              {/* <div className="ribbon"> */}
              {/* <span className="ribbon-text">✿</span> */}
              {/* </div> */}
              <h3>Predictive Analytics</h3>
              {expandedSection === 4 && (
                <div className="ml-key-expanded-conten-red">
                  <p>
                    ✓ Harness predictive analytics to forecast trends, customer
                    behaviors, and market changes.
                  </p>
                  <br />
                  <p>
                    ✓ Make data-driven decisions to improve operational
                    efficiency and drive growth.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="ml-section">
          <h2>Why Choose Our Machine Learning Services ?</h2>

          <div className="ml-cards">
            <div className="ml-card-two">
              <div className="ml-card-front">
                <img src={benefit1} alt="Cost Savings" />
                <h3>Proven Track Record</h3>
              </div>
              <div className="ml-card-back">
                <p>
                  We have a history of delivering successful ML projects across
                  various industries, including technology, finance, healthcare,
                  and retail. Our solutions have driven measurable business
                  outcomes and provided significant ROI for our clients.
                </p>
              </div>
            </div>
            <div className="ml-card-two">
              <div className="ml-card-front">
                <img src={benefit2} alt="Scalability" />
                <h3>Collaborative Approach</h3>
              </div>
              <div className="ml-card-back">
                <p>
                  We work closely with clients to understand their specific
                  needs and business objectives. Our collaborative approach
                  ensures that our ML solutions are aligned with strategic goals
                  and deliver maximum value.
                </p>
              </div>
            </div>
            <div className="ml-card-two">
              <div className="ml-card-front">
                <img src={benefit3} alt="Flexibility" />
                <h3>Focus on Innovation</h3>
              </div>
              <div className="ml-card-back">
                <p>
                  We are committed to continuous innovation, exploring new ML
                  techniques and applications to stay ahead of industry trends.
                  Our team is dedicated to finding creative solutions to complex
                  problems, pushing the boundaries of what is possible with ML.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ML;
