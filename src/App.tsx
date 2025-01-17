import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ailens from "./pages/Ailens";
import MainLayout from "./layouts/MainLayouts";
import Aira from "./pages/AiRa";
import Soraclip from "./pages/Soraclip";
import OurVision from "./pages/OurVision";
import ContactUs from "./pages/ContactUs";
import Product from "./pages/Product";
import Privacy from "./pages/Privacy";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aira" element={<Aira />} />
          <Route path="/soraclip" element={<Soraclip />} />
          <Route path="/ailens" element={<Ailens />} />
          <Route path="/our-vision" element={<OurVision />} />
          <Route path="/contact-us" element={<ContactUs  />} />
          <Route path="/products" element={<Product  />} />
          <Route path="/privacy-policy" element={<Privacy  />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
