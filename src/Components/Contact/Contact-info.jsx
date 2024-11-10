import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();
  return (
    <div className="container2">
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
      <div className="contact-info">
        <p>
          <span className="spn">Name:</span>Dicle DİLEK
        </p>

        <p>
          <span className="spn">PhoneNumber:</span>05385442919
        </p>
        <p>
          <span className="spn">Email:</span>dicledilek888@gmail.com
        </p>
        <p>
          <span className="spn">Location:</span>500th street
          Kayapınar/DİYARBAKIR
        </p>
      </div>
    </div>
  );
}
export default Contact;
