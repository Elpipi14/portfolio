import { Link } from "react-router-dom";

import SocialPills from "../SocialPill/SocialPill";

import LinkedInIcon from "../../assets/logo/LinkedIn.svg";
import GithubIcons from "../../assets/logo/Github.svg";

const Hero = () => {
  return (
    <section className="m-1 py-2 my-10 px-1 mx-1 text-white h-auto flex items-center justify-center">
      {/* IMG Principal */}
      <div className="text-center px-4 mx-4 sm:px-8">
        <div className="flex flex-row-reverse justify-between items-end">
          <img
            className="w-52 h-52 p-6 rounded-full object-cover static"
            src="https://avatars.githubusercontent.com/u/107086659?v=4"
            alt="piuDev"
          />

          {/* Título a la Derecha */}
          <h1 className="px-4 w-28 text-4xl sm:text-5xl sm:text-center font-extrabold text-yellow-300">
            PortFolio
          </h1>
        </div>

        {/* SocilaPills */}
        <div className="flex  justify-start ">
          <SocialPills href="https://www.linkedin.com/in/andres-piuzzi/">
            <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5" />
            LinkedIn
          </SocialPills>
          <SocialPills href="https://github.com/Elpipi14">
            <img src={GithubIcons} alt="Github" className="w-5 h-5" />
            Github
          </SocialPills>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4">
          ¡Hola, soy <span className="text-yellow-300">Andrés Piuzzi</span>!
        </h1>

        <h2 className="text-base sm:text-xl text-gray-300 mb-6 mt-4 max-w-3xl mx-auto leading-relaxed">
          <span className="text-[rgba(189,189,86,0.9)] font-bold italic block sm:inline">
            Soy un desarrollador autodidacta apasionado por la programación.
          </span>
          <span className="block sm:inline">
            {" "}
            Aunque actualmente trabajo en un campo diferente,
          </span>
          <span className="text-[rgba(189,86,86,0.951)] font-bold italic block sm:inline">
            {" "}
            he completado varios cursos en tecnologías front-end y back-end 🚀.
          </span>
          <span className="block sm:inline">
            {" "}
            Ahora estoy buscando hacer la transición a una carrera en desarrollo
            de software, donde pueda aplicar mis habilidades y seguir creciendo
            como profesional. Tengo muchas ganas de asumir nuevos retos y
            contribuir a proyectos innovadores.
          </span>
        </h2>

        {/* Botenes Secciones */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-roboto font-bold">
          <Link to="/proyectos">
            <button className="bg-transparent border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-gray-900 py-3 px-6 rounded-full shadow-lg transition-all hover:shadow-yellow-400/50 hover:scale-105  active:translate-y-1 active:shadow-md">
              Mis Proyectos
            </button>
          </Link>
          <Link to="/contacto">
          <button className="bg-transparent border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-gray-900 py-3 px-6 rounded-full shadow-lg transition-all hover:shadow-yellow-400/50 hover:scale-105  active:translate-y-1 active:shadow-md">
            Contáctame
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
