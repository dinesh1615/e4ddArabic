import React, { useState } from "react";
import "./Itstaff.css";
import one from "../../../assets/Itstaff/1.jpg";
import two from "../../../assets/Itstaff/2.jfif";
import three from "../../../assets/Itstaff/3.jfif";
import industryKnowledgeImg from "../../../assets/Itstaff/one.jfif";
import consultativeApproachImg from "../../../assets/Itstaff/two.jfif";
import networkConnectionsImg from "../../../assets/Itstaff/three.jfif";
import provenTrackRecordImg from "../../../assets/Itstaff/four.jfif";
import adaptabilityImg from "../../../assets/Itstaff/five5.jpeg";

const Itstaff = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className="itstaff-container">
      <div className="itstaff-gallery">
        <div className="two-images">
          <div className="itstaff-image">
            <img src={one} alt="" />
          </div>

          {/* <div className="itstaff-image">
            <img src={two} alt="" />
          </div>
          <div className="itstaff-image">
            <img src={three} alt="" />
          </div> */}
        </div>
      </div>
      <div className="itstaff-content">
        <h1>
          Exceed your hiring goals with Elite's Information Technology
          recruitment services
        </h1>
        <h1>
          Our IT recruitment specialists have closed jobs in several areas.
        </h1>
        <p>
          Our team of IT recruitment specialists is dedicated to filling key
          roles across various areas within the IT sector. We understand the
          critical role that the IT industry plays in driving economic growth,
          which is why we continuously study industry trends and challenges to
          stay ahead of the curve. Our expertise in IT hiring and recruitment,
          combined with our extensive network of connections and consultations
          with clients, positions us as one of the leading IT recruitment
          agencies in the country.
        </p>

        <h2 className="sections-heading">
          Here's how our approach to IT recruitment sets us apart:
        </h2>
        <div
          className="itstaff-section"
          onClick={() => toggleSection("industryKnowledge")}
        >
          <img
            src={industryKnowledgeImg}
            alt="Industry Knowledge"
            className="itstaff-section-img"
          />
          <div className="itstaff-section-content">
            <h3>Industry Knowledge</h3>
            {visibleSection === "industryKnowledge" && (
              <p>
                Our IT recruiters possess deep expertise and knowledge of the IT
                sector, allowing us to understand the specific skills,
                qualifications, and experience required for each role. We stay
                abreast of emerging technologies, industry trends, and market
                demands to ensure that we can effectively match candidates with
                the right opportunities.
              </p>
            )}
          </div>
        </div>
        <div
          className="itstaff-section"
          onClick={() => toggleSection("consultativeApproach")}
        >
          <img
            src={consultativeApproachImg}
            alt="Consultative Approach"
            className="itstaff-section-img"
          />
          <div className="itstaff-section-content">
            <h3>Consultative Approach</h3>
            {visibleSection === "consultativeApproach" && (
              <p>
                We take a consultative approach to IT recruitment, working
                closely with clients to understand their unique hiring needs,
                business objectives, and company culture. By building strong
                relationships with our clients, we can provide personalized
                recruitment solutions that align with their strategic goals and
                drive business success.
              </p>
            )}
          </div>
        </div>
        <div
          className="itstaff-section"
          onClick={() => toggleSection("networkConnections")}
        >
          <img
            src={networkConnectionsImg}
            alt="Network of Connections"
            className="itstaff-section-img"
          />
          <div className="itstaff-section-content">
            <h3>Network of Connections</h3>
            {visibleSection === "networkConnections" && (
              <p>
                Our extensive network of connections within the IT industry
                enables us to access top talent and passive candidates who may
                not be actively searching for opportunities. Through targeted
                networking efforts and ongoing relationship building, we can
                connect clients with highly qualified candidates who are the
                perfect fit for their organizations.
              </p>
            )}
          </div>
        </div>
        <div
          className="itstaff-section"
          onClick={() => toggleSection("provenTrackRecord")}
        >
          <img
            src={provenTrackRecordImg}
            alt="Proven Track Record"
            className="itstaff-section-img"
          />
          <div className="itstaff-section-content">
            <h3>Proven Track Record</h3>
            {visibleSection === "provenTrackRecord" && (
              <p>
                With a track record of successfully closing jobs in various
                areas of the IT sector, we have demonstrated our ability to
                deliver results for our clients. Whether it's filling positions
                in software development, cybersecurity, data analytics, or IT
                infrastructure, our IT recruitment specialists have the
                experience and expertise to find the right talent for any role.
              </p>
            )}
          </div>
        </div>
        <div
          className="itstaff-section"
          onClick={() => toggleSection("adaptability")}
        >
          <img
            src={adaptabilityImg}
            alt="Adaptability"
            className="itstaff-section-img"
          />
          <div className="itstaff-section-content">
            <h3>Adaptability</h3>
            {visibleSection === "adaptability" && (
              <p>
                The IT industry is constantly evolving, with new technologies
                and job roles emerging regularly. Our team of IT recruiters is
                adaptable and agile, able to pivot quickly to meet changing
                client needs and market demands. Whether it's sourcing
                candidates for niche technical roles or addressing skill
                shortages in high-demand areas, we are committed to delivering
                timely and effective recruitment solutions.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itstaff;
