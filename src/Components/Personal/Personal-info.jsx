import { useNavigate } from "react-router-dom";
import "./PersonalInfo.css";
function PersonalInfo() {
  const navigate = useNavigate();
  return (
    <div className="container1">
      <div className="btngroup1">
        <button onClick={() => navigate("/")} className="btn">
          Home
        </button>
        <button className="btn">Personal İnformation</button>
        <button onClick={() => navigate("/contact-info")} className="btn">
          Contact İnformation
        </button>
        <button className="btn">Educational İnformation</button>
        <button className="btn">Practical Experience</button>
        <button className="btn">Completed Courses</button>
      </div>
      <p className="p">
        I am 31 years old, married, and a mother of one. I was born in Erzurum,
        and I currently live in Diyarbakır. I enjoy doing sports, listening to
        music, and reading books. I am also continuously improving myself in the
        field of software development, striving to stay updated with the latest
        technologies and trends. These activities help me maintain a balanced
        life by enhancing both my physical and mental well-being. In my
        professional life, I am disciplined, responsible, and highly adaptable
        to teamwork.
      </p>
    </div>
  );
}
export default PersonalInfo;
