import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AboutPage from "./pages/about/aboutPage";
import ItemDetailsPage from "./pages/itemDetails/itemDetailsPage";
import NotFoundPage from "./pages/notFound/notFoundPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/itemDetails/:id" element={<ItemDetailsPage />} />
        <Route path="/notFound" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
