import Homepage from "./component/Homepage";
import { Routes, Route} from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import AboutUs from "./component/aboutus";
import OurServices from "./component/ourservices";
import LegalInformation from "./component/legalInformation";
import Contact from "./component/contact";


function App() {
  
  return (
<section>
<Navbar />
  <Routes>
    <Route index element={<Homepage />} />
    <Route path="aboutUs" element={<AboutUs />} />
    <Route path="services" element={<OurServices lll />} />
    <Route path="legal" element={<LegalInformation />} />
    <Route path="contact" element={<Contact />} />
  </Routes>
  <Footer />
</section>
  )

}


export default App;
