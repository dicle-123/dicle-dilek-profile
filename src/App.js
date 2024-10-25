import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home-page";
import PersonalInfo from "./Components/Personal/Personal-info";
import Contact from "./Components/Contact/Contact-info";
import Education from "./Components/Educations/Educational-info";
import Experiences from "./Components/Experiences/Practical-experience";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="personal-info" element={<PersonalInfo />} />
        <Route path="contact-info" element={<Contact />} />
        <Route path="educational-information" element={<Education />} />
        <Route path="practical-experience" element={<Experiences />} />
      </Routes>
    </Router>
  );
}

export default App;
