import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Services from "./components/Services";
import ComingSoon from "./components/ComingSoon";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Team from "./components/Team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" name="Home" element={<Home />} />
        <Route exact path="/ourTeam" name="About Us" element={<AboutUs />} />
        <Route exact path="/aboutUs" name="About Us" element={<Team />} />
        <Route exact path="/industries" name="Industries" element={<Services />} />
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
