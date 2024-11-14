import { useNavigate } from "react-router-dom";
import "./Experience.css";
function Experiences() {
  const navigate = useNavigate();
  return (
    <div className="cont4">
      <div className="btngroup4">
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
      <div className="div">
        <h1 className="h">Personal Projects</h1>
        <h2 className="ff">Frontend Developer</h2>
        <p className="pp">
          <span className="span">Company:</span> Self-employed (GitHub Projects)
        </p>
        <p className="pp">
          <span className="span">Dates:</span> January 2023 - Present
        </p>

        <h2 className="ff">Responsibilities</h2>
        <ul className="project-list">
          <li className="project-item">
            <strong className="ppp">Shopping Cart Project (React):</strong>
            <p className="prag">
              Developed a shopping cart application with dynamic product
              listings, quantity adjustment, and Context API for managing global
              state.
            </p>
          </li>
          <li className="project-item">
            <strong className="ppp">Library Project:</strong>
            <p className="prag">
              Designed a digital library management system with an intuitive
              user interface for easy navigation and book management.
            </p>
          </li>
          <li className="project-item">
            <strong className="ppp">Weather App:</strong>
            <p className="prag">
              Integrated a weather API to display real-time weather information
              based on user location.
            </p>
          </li>
          <li className="project-item">
            <strong className="ppp">Music Player:</strong>
            <p className="prag">
              Built a music player application following front-end design best
              practices, with custom controls and playlist management.
            </p>
          </li>
          <li className="project-item">
            <strong className="ppp">Continuous Improvement:</strong>
            <p className="prag">
              Regularly update projects by incorporating feedback and adding new
              features to enhance functionality.
            </p>
          </li>
          <li className="project-item">
            <strong className="ppp">Additional Training:</strong>
            <p className="prag">
              Completed The Odin Project course, which involved hands-on
              projects and practical exercises in frontend development.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experiences;
