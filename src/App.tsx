import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ailens from "./pages/Ailens";
import MainLayout from "./layouts/MainLayouts";
import Aira from "./pages/AiRa";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aira" element={<Aira />} />
          <Route path="/soraclip" element={<Home />} />
          <Route path="/ailens" element={<Ailens />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
