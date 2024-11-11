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
          Personal Information
        </button>
        <button onClick={() => navigate("/contact-info")} className="btn">
          Contact Information
        </button>
        <button
          onClick={() => navigate("/educational-information")}
          className="btn"
        >
          Educational Information
        </button>
        <button
          onClick={() => navigate("/practical-experience")}
          className="btn"
        >
          Practical Experience
        </button>
        <button onClick={() => navigate("/acquired-skills")} className="btn">
          Acquired Skills
        </button>
      </div>
      <div className="contact-info">
        <p className="newp">
          <span className="spn">👤 Name:</span> Dicle DİLEK
        </p>
        <p className="newp">
          <span className="spn">📞 Phone Number:</span> 05385442919
        </p>
        <p className="newp">
          <span className="spn">✉️ Email:</span> dicledilek888@gmail.com
        </p>
        <p className="newp">
          <span className="spn">📍 Location:</span> 500th street,
          Kayapınar/DİYARBAKIR
        </p>
      </div>
    </div>
  );
}

export default Contact;
