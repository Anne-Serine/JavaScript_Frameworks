import Header from "../components/Header";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";


function MainLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainLayout;