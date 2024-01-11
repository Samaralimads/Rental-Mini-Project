import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router";
import dashboardPage from "./pages/dashboard/dashboardPage";
import aboutPage from "./pages/about/aboutPage";
import itemDetailsPage from "./pages/itemDetails/itemDetailsPage";
import notFoundPage from "./pages/notFound/notFoundPage";
import Sidebar from "./components/Sidebar/SideBar"

function App() {
  return (
    <>
      <NavBar />
<Sidebar/>
      <Routes>
        <Route path="/" element={<dashboardPage/>} />
        <Route path="/about" element={<aboutPage/>} />
        <Route path="/itemDetails" element={<itemDetailsPage/>} />
        <Route path="/notFound" element={<notFoundPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
