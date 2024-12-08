import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";

const Index = () =>{
    return(
    <div  className="absolute top-0 left-0 bg-gray-800 w-screen h-screen bg-cover bg-center" 
    style={{backgroundImage: "url('https://source.unsplash.com/random/1600x900')"}}>
        <NavBar />
        <Hero />
    </div>
    );
};

export default Index;