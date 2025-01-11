import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProblemStatements from "./pages/ProblemStatements";
import Guidelines from "./pages/Guidelines";
import Committees from "./pages/Committees";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import IdeaSubmission from "./pages/IdeaSubmission";
import useScrollToTop from './hooks/useScrollToTop';




function AppContent() {
  useScrollToTop();


  return (
    <div className="relative min-h-screen w-full overflow-hidden">
    <div className="relative z-10">

        <Navbar />
        <main>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problems" element={<ProblemStatements />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
