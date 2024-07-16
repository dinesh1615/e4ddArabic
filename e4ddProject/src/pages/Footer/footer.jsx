import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="cardfooter ">
        <img
          src="https://uiverse.io/build/_assets/astronaut-WTFWARES.png"
          alt=""
          className="imagefooter"
        />
        <div className="absolute z-10 ">
          <p className="text-center">
            {/* COPYRIGHT ©2024, ELITE for Digital Development LLC. ALL RIGHTS
            RESERVED */}
            حقوق النشر ©2024 لشركة النخبة للتطوير الرقمي ذ.م.م. جميع الحقوق
            محجوز
            <br />
            <a className="text-center" href="#">
              info@e4dd.com
            </a>
            <br />
            <a className="text-center" href="https://www.e4dd.com/">
              www.e4dd.com
            </a>
            <br />
          </p>
          <div className="heading text-center">
            نحن على وسائل التواصل الاجتماعي
          </div>
          <div className="icons flex justify-center gap-5">
            <a href="https://www.instagram.com/elite4dd/" className="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/elite4dd" className="">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/company/e4dd" className="">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a href="https://facebook.com/elite4dd" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://wa.me/+96899369668" className="social-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://t.me/+96899369668" className="social-icon">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;