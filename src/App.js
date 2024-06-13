import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import HomeFive from "./pages/HomeFive";
import StartProject from "./pages/GetQuote";
import TermsAndCondition from "./pages/Terms";
import PrivacyPolicy from "./pages/Privacy";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomeFive />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/start-project' element={<StartProject />} />
        <Route exact path='terms-condition' element={<TermsAndCondition />} />
        <Route exact path='privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
      <ScrollToTop smooth color='#246BFD' />
    </BrowserRouter>
  );
}

export default App;
