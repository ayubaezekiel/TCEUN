import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import { Header } from "./components/Header";
import AboutPage from "./pages/About";
import OurTeam from "./pages/Team";
import OurServices from "./pages/Services";
import { Footer } from "./components/Footer";
import ContactUs from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Index />} path="/" />
        <Route element={<AboutPage />} path="about/" />
        <Route element={<OurTeam />} path="team/" />
        <Route element={<OurServices />} path="services/" />
        <Route element={<ContactUs />} path="contact/" />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
