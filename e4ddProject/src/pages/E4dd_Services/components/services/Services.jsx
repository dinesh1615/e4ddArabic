import React, { useState, useEffect, useRef } from "react";
import PhotoCard from "./PhotoCard";
import "./Services.css";
import one from "../../assets/Service/drone.jpg";
import two from "../../assets/Service/bigdata.jpg";
import three from "../../assets/Service/cyber.jpg";
import four from "../../assets/Service/AI.jpg";
import five from "../../assets/Service/dbms.jpg";
import six from "../../assets/Service/sw.jpg";
import seven from "../../assets/Service/web.jpg";
import eight from "../../assets/Service/managedIT.jpg";
import nine from "../../assets/Service/cloud.jpg";
import ten from "../../assets/Service/voip.jpg";
import eleven from "../../assets/Service/itstaff.jpg";
import twelve from "../../assets/Service/ML.jpg";
import videoSrc1 from "../../assets/Service/promo1.mp4";
import videoSrc2 from "../../assets/Service/promo2.mp4";
import videoSrc3 from "../../assets/Service/promo3.mp4";
import videoSrc4 from "../../assets/Service/promo4.mp4";
import videoSrc5 from "../../assets/Service/promo5.mp4";

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const photos = [
    {
      src: one,
      heading: "Drones",
      content: " Drones Sales . Drones Rental . Aerial Surveying . Mapping ",
    },
    {
      src: two,
      heading: "Big Data",
      content:
        "Data Collection . Data Storage . Data Processing . Data Analytics . Data Visualization",
    },
    {
      src: three,
      heading: "Cyber Security",
      content:
        "Secure data storage and access control mechanisms . Anti-malware and antivirus protection . Web based email and website filtering",
    },
    {
      src: four,
      heading: "AI Businesss Solutions",
      content:
        " AI Strategy Development . Machine Learning Implementation . Natural Language Processing (NLP) Applications  ",
    },
    {
      src: five,
      heading: "Database Services",
      content:
        " Database Design and Architecture . Data Modeling . Database Administration (DBA) . Data Integration and Migration . Performance Tuning and Optimization",
    },
    {
      src: six,
      heading: "Software Development",
      content:
        " Software Programming . Project Planning . Designing . Coding & Implementation ",
    },
    {
      src: seven,
      heading: "Web & Marketing",
      content:
        "Web Development . Digital Marketing . Social Media Management . Content Management Services",
    },
    {
      src: eight,
      heading: "Managed IT Services",
      content:
        "Service Desk Services . Ticket Monitoring Services . Networking & Server Management Services . Remote Infrastructure Managed Services ",
    },
    {
      src: nine,
      heading: "Cloud Services",
      content:
        " Microsoft Azure Solutions . Amazon Web Services . Google Cloud Solutions . Office 365 & Exchange Server Management Services",
    },
    {
      src: ten,
      heading: "VOIP Support",
      content:
        "CCaaS (Contact Centre as a Service) . Outbound Marketing . Hosted Call Connect . Missed Call Solutions . Click2Call Service",
    },
    {
      src: eleven,
      heading: "IT Consulting and Staffing",
      content:
        "IT Staffing Services . IT Consulting . IT Training . IT Management . IT Outsourcing",
    },
    {
      src: twelve,
      heading: "Machine Learning",
      content:
        " Supervised Learning . Unsupervised Learning . Reinforcement Learning . Deep Learning",
    },
  ];

  const videoSources = [videoSrc1, videoSrc2, videoSrc3, videoSrc4];

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    const handleEnded = () => {
      setCurrentVideoIndex(
        (prevIndex) => (prevIndex + 1) % videoSources.length
      );
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", handleEnded);

      return () => {
        videoElement.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.pause();
      videoElement.load();
      videoElement.playbackRate = 2.0; // Set playback rate here
      videoElement.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, [currentVideoIndex]);

  return (
    <>
      <div className="service-page-container relative ">
        <div className="video-container">
          <video className="promo-video" autoPlay muted ref={videoRef}>
            <source src={videoSources[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-text">
            <h1>OUR SERVICES</h1>
          </div>
        </div>
        <div className="initial-content">
          <p>
            At Elite, we are committed to delivering a wide range of top-notch
            services that cater to the diverse needs of our clients. Our
            extensive network of highly skilled professionals allows us to offer
            comprehensive solutions across various domains, ensuring that your
            business stays ahead in the ever-evolving technological landscape.
          </p>
          <p>
            Our mission is to empower your business through technology, driving
            growth, efficiency, and innovation. Explore our services to see how
            we can support your needs and help you achieve your business goals.
          </p>
        </div>
        <div className="photo-gallery">
          {photos.map((photo, index) => (
            <PhotoCard
              key={index}
              index={index}
              photo={photo.src}
              heading={photo.heading}
              content={photo.content}
              isExpanded={expandedIndex === index}
              handleExpand={handleExpand}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
