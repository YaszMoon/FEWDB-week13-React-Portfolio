import React from "react";
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
