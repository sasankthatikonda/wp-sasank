import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        {/* <Route path="/industries" element={<Page title="Industries" />} />
        <Route path="/industries/banking" element={<Page title="Banking" />} />
        <Route path="/industries/retail" element={<Page title="Retail" />} />
        <Route path="/services" element={<Page title="Services" />} />
        <Route path="/services/analytics" element={<Page title="Analytics" />} />
        <Route path="/services/automation" element={<Page title="Automation" />} />
        <Route path="/technology" element={<Page title="Technology" />} />
        <Route path="/contact" element={<Page title="Contact" />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
