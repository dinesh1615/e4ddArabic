import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/footer";
import Home from "./Home";
import Icons from "./pages/upicons/Icons";
import Software from "./pages/software/components/Software";
import Drone from "./pages/Drone/Drones";
import BigData from "./pages/Bigdata/BigData";
// import Carousel from "./components/Carousel";
import SecurityServices from "./pages/cyber/CyberSecurity";
// import Voip from "./pages/E4dd_Services/components/services/otherservices/Voip";
// import Itstaff from "./pages/E4dd_Services/components/services/otherservices/Itstaff";
// import Services from "./pages/E4dd_Services/components/services/Services";
// import ManagedIT from "./pages/manager_it/ManagedIT";
import Cloud from "./pages/cloud/cloud";
import Contact from "./pages/contacte4dd/App";
import Foundation from "./pages/e4ddfoundation/App";
import Ai from "./pages/ai/Ai";
import ML from "./pages/ML/ML/ML";
// import Academy from "./pages/e4dd_academy/Academy/Academy";
import DatabaseManagementServices from "./pages/Db/Db";
// import AboutUs from "./AboutUs";

function App() {
  return (
    <Router>
      <Icons />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/software" element={<Software />} />
        <Route path="/Drone" element={<Drone />} />
        <Route path="/BigData" element={<BigData />} />

        {/* <Route path="/webdevelopment" element={<Carousel />} /> */}

        <Route path="/cybersecurity" element={<SecurityServices />} />
        {/* <Route path="/voip" element={<Voip />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/itstaff" element={<Itstaff />} /> */}
        {/* <Route path="/managedit" element={<ManagedIT />} /> */}
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/ml" element={<ML />} />
        {/* <Route path="/academy" element={<Academy />} /> */}
        <Route path="/db" element={<DatabaseManagementServices />} />
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
