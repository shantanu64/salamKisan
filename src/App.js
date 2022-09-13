import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Services from "./components/Services";
import ComingSoon from "./components/ComingSoon";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" name="Home" element={<Home />} />
        <Route exact path="/aboutUs" name="About Us" element={<AboutUs />} />
        <Route exact path="/services" name="Services" element={<Services />} />
        <Route exact path="/news" name="News" element={<ComingSoon />} />
        <Route exact path="/events" name="Events" element={<ComingSoon />} />
        <Route
          exact
          path="/contactUs"
          name="Contact Us"
          element={<ContactUs />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
