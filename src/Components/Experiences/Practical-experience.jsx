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
          onClick={() => navigate("educational-information")}
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
        <button className="btn">Acquired skills</button>
      </div>
      <div>
        <h1>Personal Projects</h1>
        <h2>Frontend Developer</h2>
        <p>
          <span>Company:</span> Self-employed (GitHub Projects)
        </p>
        <p>
          <span>Dates:</span> January 2023 - Present
        </p>

        <h3>Responsibilities:</h3>
        <ul>
          <li>
            <strong>Shopping Cart Project (React):</strong>
            <p>
              Developed a shopping cart application with dynamic product
              listings, quantity adjustment, and Context API for managing global
              state.
            </p>
          </li>
          <li>
            <strong>Library Project:</strong>
            <p>
              Designed a digital library management system with an intuitive
              user interface for easy navigation and book management.
            </p>
          </li>
          <li>
            <strong>Weather App:</strong>
            <p>
              Integrated a weather API to display real-time weather information
              based on user location.
            </p>
          </li>
          <li>
            <strong>Music Player:</strong>
            <p>
              Built a music player application following front-end design best
              practices, with custom controls and playlist management.
            </p>
          </li>
          <li>
            <strong>Continuous Improvement:</strong>
            <p>
              Regularly update projects by incorporating feedback and adding new
              features to enhance functionality.
            </p>
          </li>
        </ul>

        <h3>Additional Training:</h3>
        <p>
          Completed The Odin Project course, which involved hands-on projects
          and practical exercises in frontend development.
        </p>
      </div>
    </div>
  );
}

export default Experiences;
