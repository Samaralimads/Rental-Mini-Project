import "./App.css";
import Sidebar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
function App() {
  return (
    <>
      <NavBar />
      <div className="mainContainer">
        <Sidebar />
        <Card/>
      </div>
      <Footer />
    </>
  );
}

export default App;
