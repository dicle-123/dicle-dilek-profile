import { useNavigate } from "react-router-dom";

import "./Home.css";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <img className="cv-image" src="Assets/dicle.jpg" alt="cv-image" />
        <div>
          <h1 className="h1">DİCLE DİLEK</h1>
          <h1 className="h1">COMPUTER ENGİNEER</h1>
        </div>
      </div>
      <div className="btngroup">
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
    </div>
  );
}
export default Home;
