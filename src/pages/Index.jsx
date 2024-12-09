import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";

const Index = () => {
  return (
    <div
      className="absolute top-0 left-0 bg-gray-800 w-screen min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/random/1600x900')",
      }}
    >
      <NavBar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
