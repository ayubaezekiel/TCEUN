import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import { Header } from "./components/Header";
import AboutPage from "./pages/About";
import OurTeam from "./pages/Team";
import OurServices from "./pages/Services";
import FellowShip from "./pages/Fellow";
import NewsPage from "./pages/News";
import PublicationPage from "./pages/Publication";
import { Footer } from "./components/Footer";
import ContactUs from "./pages/Contact";
import GalleryPage from "./pages/Gallery";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Index />} path="/" />
        <Route element={<AboutPage />} path="about/" />
        <Route element={<OurTeam />} path="team/" />
        <Route element={<FellowShip />} path="fellow/" />
        <Route element={<OurServices />} path="services/" />
        <Route element={<ContactUs />} path="contact/" />
        <Route element={<NewsPage />} path="news/" />
        <Route element={<PublicationPage />} path="publication/" />
        <Route element={<GalleryPage />} path="gallery/" />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
