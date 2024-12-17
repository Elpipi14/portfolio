

import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Proyects from "../components/Proyects/Proyects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Index = () => {
  return (
    <div
      className="absolute top-0 left-0 bg-gray-800 w-screen min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/random/1600x900')",
      }}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/proyectos' element={<Proyects />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Index;
