import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProblemStatements from "./pages/ProblemStatements";
import Guidelines from "./pages/Guidelines";
import Committees from "./pages/Committees";
import IdeaSubmission from "./pages/IdeaSubmission";
import Archives from "./pages/Archives";
import VantaBackground from "./components/VantaBackground";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full overflow-hidden">
        <VantaBackground />
        <div className="relative z-10">
          <Navbar />
          <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/problems" element={<ProblemStatements />} />
              <Route path="/guidelines" element={<Guidelines />} />
              <Route path="/committees" element={<Committees />} />
              <Route path="/submit" element={<IdeaSubmission />} />
              <Route path="/archives" element={<Archives />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
