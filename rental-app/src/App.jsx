import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard/dashboardPage";
import AboutPage from "./pages/about/aboutPage";
import ItemDetailsPage from "./pages/itemDetails/ItemDetailsPage";
import NotFoundPage from "./pages/notFound/notFoundPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/item/:itemId" element={<ItemDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
