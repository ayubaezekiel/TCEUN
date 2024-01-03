import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Index />} path="/" />
      </Routes>
    </>
  );
}

export default App;
