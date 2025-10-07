import About from "./About/About";
import "./App.css";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import Home from "./Homepage/Home";
import Header from "./Navbar/Header";
import Service from "./Service/Service";
import Test from "./Testnominals/Test";
import { Routes, Route } from "react-router-dom";
import Pagesabout from "./Pagesabout/Pagesabout";
import Pageservice from "./Pagesservices/Pageservice";
import Notfound from "./Notfound/Notfound";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
        <Route path="/pagesabout" element={<Pagesabout />} />
        {/* <Route path="/pageservice" element={<Pageservice />} /> */}

        <Route path="*" element={<Notfound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
