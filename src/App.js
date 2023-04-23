import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
import logo from "../src/assets/joblogo.jpeg"
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features";
import Register from "./auth/Register/Register";
import Login from "./auth/Login/login";

function App() {
  return (
    <Router>
      <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="your-logo-alt" />
      </Link>

        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/features"> Features </Link>
        <Link to="/profile"> Profile </Link>
        <Link to="/contact"> Contact Us </Link>
        <Link to="/login"> Login </Link>
        <Link to="/register"> Register </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/features" element={<Features />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
