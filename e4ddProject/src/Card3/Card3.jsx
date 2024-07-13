import React from "react";
import { motion } from "framer-motion";
import img1 from "./hariprasad.jpeg";
import img2 from "./ahmed.jpeg";
import "./Card3.css";

const Card3 = () => {
  return (
    <>
      <div class="card3 m-auto">
        <div class="card-front3">
          <img src={img2} alt="ahmed" class="card-img3 w-full " />
          <p class="title3">Ahmed Said Mohammed Al-Maqbali</p>
          <p class="subtitle3">Co founder Managing Director</p>
        </div>
        <div class="card-back3">
          <p>
            PERSONAL SUMMARY <br />
            <br />⦁ Performance driven Senior Government Administrative officer
            ; acknowledged for expertise in cementing client relationships,
            improving the development standards, stimulating new business, and
            strategically securing accounts in highly competitive developmental
            sectors.
            <br />
            <br /> ⦁ Decisive, visionary leader and expert at identifying and
            capturing opportunities, achieving targets and meeting desired goals
            in competitive environments. <br />
            <br />⦁ History of building and deepening effective working
            environment with relationships built on trust, exceptional service,
            and responsiveness.
            <br />
            <br />⦁ Repeatedly demonstrated strong communication and
            presentation skills from training through rapport building and
            effective presentations at every level in attaining the organization
            goals.
          </p>
        </div>
      </div>
      <div class="card3 m-auto overflow-y-auto">
        <div class="card-front3">
          <img src={img1} alt="hariprasad" class="card-img3 w-full" />
          <p class="title3">N.S.HARI PRASAD</p>
          <p class="subtitle3">
            Founder Partner
            <br />
            <p>Elite for digital Development</p>
          </p>
        </div>
        <div class="card-back3 ">
          <p>
            PROFESSIONAL OVERVIEW <br />
            Over 20 years of experience in Key Account Management, Sales
            promotion, Team Management, Incident Management, Quality & IT
            Management.
            <br />
            <br /> - A proactive leader and planner with expertise in Market
            plan execution, Account management, Account Penetration, Competitor
            and Market analysis. <br />
            <br /> - Proven track record of increasing revenues, streamlining
            workflow and creating a team work environment to enhance
            productivity.
            <br />
            <br />
            <h2>WORK EXPERIENCE:</h2>
            <br />
            Managing Director BBMT Services India Private Limited (2020 –
            Current) BBM Tech Services is a strategic IT services company which
            aims to bridge the gap between business needs and the world of IT
            solutions. BBM Tech Services is one of the leading IT service
            providers and has a combined team experience of over 40 years.
            <br />
            {/* <br /> My role extends beyond operational management, as I actively
            engage in coaching and fostering an environment where teamwork
            flourishes.
            <br />
            <br /> Business Development activities for ITSM and IT staffing. */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card3;
