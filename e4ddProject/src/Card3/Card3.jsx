import React from "react";
import { motion } from "framer-motion";
import img1 from "./hariprasad.jpeg";
import img2 from "./Richard.jpeg";
import "./Card3.css";

const Card3 = () => {
  return (
    <>
      <div class="card3 m-auto overflow-y-auto">
        <div class="card-front3">
          <img src={img1} alt="hariprasad" class="card-img3 w-full" />
          <p class="title3">N.S.HARI PRASAD</p>
          <p class="subtitle3">
            Managing Director BBMT Services India Private Limited
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
          </p>
        </div>
      </div>
      <div class="card3 m-auto">
        <div class="card-front3">
          <img src={img2} alt="Richard" class="card-img3 w-full " />
          <p class="title3">Richard</p>
          <p class="subtitle3">Manager of the company</p>
        </div>
        <div class="card-back3">
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
          </p>
        </div>
      </div>
    </>
  );
};

export default Card3;
