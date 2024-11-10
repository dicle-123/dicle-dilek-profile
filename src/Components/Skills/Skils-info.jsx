import { useNavigate } from "react-router-dom";
import "./skils.css";

function Skills() {
  const navigate = useNavigate();
  const skills = [
    "Front-End Design",
    "Html5",
    "Css",
    "Javascript",
    "React.js",
    "Web Aplication Development",
    "Writing Responsive Cod",
    "SQL",
  ];
  return (
    <div>
      <div className="div1">
        <div className="btngroup2">
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
            onClick={() => navigate("/educational-information")}
            className="btn"
          >
            Educational İnformation
          </button>
          <button
            onClick={() => navigate("/practical-experience")}
            className="btn"
          >
            Practical Experience
          </button>
          <button onClick={() => navigate("/acquired-skils")} className="btn">
            Acquired skills
          </button>
        </div>
        <div className="skills-list">
          <h2 className="h22">MY SKİLLS</h2>
          <ul className="ul">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
