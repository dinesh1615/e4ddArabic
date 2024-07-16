import React from "react";
import { useNavigate } from "react-router-dom";
import "./PhotoCard.css";

const PhotoCard = ({
  photo,
  heading,
  content,
  index,
  isExpanded,
  handleExpand,
}) => {
  const navigate = useNavigate();

  const redirectToPage = (e) => {
    e.stopPropagation();
    switch (heading) {
      case "طائرات بدون طيار":
        navigate("/Drone");
        break;
      case "البيانات الكبيرة":
        navigate("/BigData");
        break;
      case "الأمن الإلكتروني":
        navigate("/cybersecurity");
        break;
      case "حلول الأعمال التجارية بالذكاء الاصطناعي":
        navigate("/ai");
        break;
      case "خدمات قواعد البيانات":
        navigate("/db");
        break;
      case "تطوير البرمجيات":
        navigate("/software");
        break;
      case "التسويق الشبكي":
        navigate("/");
        break;
      case "خدمات تكنولوجيا المعلومات المدارة":
        navigate("/managedit");
        break;
      case "خدمات سحابية":
        navigate("/cloud");
        break;
      case "دعم الصوت عبر بروتوكول الإنترنت":
        navigate("/voip");
        break;
      case "استشارات تكنولوجيا المعلومات والتوظيف":
        navigate("/itstaff");
        break;
      case "التعلم الالي":
        navigate("/ml");
        break;
      default:
        navigate("/");
    }
  };

  const renderContent = () => {
    if (typeof content === "string" && content.includes(". ")) {
      return (
        <ul>
          {content.split(". ").map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      );
    }
    return <p>{content}</p>;
  };

  return (
    <div
      className={`photo-card ${isExpanded ? "expanded" : ""}`}
      onClick={() => handleExpand(index)}
    >
      <img src={photo} alt="Sample Image" className="photo" />
      <div className="headings">{heading}</div>
      <div className={`overlay ${isExpanded ? "show" : ""}`}>
        <br />
        <br />
        <div className={`content ${isExpanded ? "show" : ""}`}>
          {renderContent()}
        </div>
        <div className="view-content-page" onClick={redirectToPage}>
          <b>منظر</b> {heading} ►
        </div>
      </div>
      <button
        className="expand-btn"
        onClick={(e) => {
          e.stopPropagation();
          handleExpand(index);
        }}
      >
        {isExpanded ? "▼" : "▲"}
      </button>
    </div>
  );
};

export default PhotoCard;
