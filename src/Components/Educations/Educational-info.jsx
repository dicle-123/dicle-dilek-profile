import { useNavigate } from "react-router-dom";
import "./Education.css";
function Education() {
  const navigate = useNavigate();

  return (
    <div className="containr">
      <div className="btngroup3">
        <button onClick={() => navigate("/")} className="btn">
          Home
        </button>
        <button onClick={() => navigate("/personal-info")} className="btn">
          Personal İnformation
        </button>
        <button onClick={() => navigate("/contact-info")} className="btn">
          Contact İnformation
        </button>
        <button
          onClick={() => navigate("educational-information")}
          className="btn"
        >
          Educational İnformation
        </button>
        <button className="btn">Practical Experience</button>
        <button className="btn">Completed Courses</button>
      </div>
      <div className="educations">
        <h1 className="h">Education</h1>
        <h2 className="h2">FIRAT UNİVERSİTY</h2>
        <p className="p">Bachelor's Degree in Computer Engineering</p>
        <p className="p">September 2013 - January 2019</p>
        <p className="p">GPA: 2.60</p>

        <h2 className="h2">ACTİVİTİES AND SOCİETİES</h2>
        <p className="p">Member of the Software and Entrepreneurship Club</p>
        <p className="p">
          Participated in volunteer and social responsibility projects
        </p>
        <h2 className="h2">ADDİTİONAL QUALİFİCATİONS</h2>
        <p className="p">High-Level Proficiency in English</p>
        <p className="p">
          Pedagogical Formation Certificate (received from Fırat University)
        </p>
      </div>
    </div>
  );
}
export default Education;
