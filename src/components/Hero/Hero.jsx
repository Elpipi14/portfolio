import React from "react";

const Hero = () => {
  return (
    <section className="m-4 p-2 text-white h-auto flex items-center justify-center">
      <div className="text-center px-2 sm:px-8">
    <div className="flex flex-row-reverse">
      <img
          className="w-52 h-52 m-2 p-2 rounded-full object-cover static"
          src="https://avatars.githubusercontent.com/u/107086659?v=4"
          alt="piuDev"
        />
        </div>
        {/* Título Principal */}
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4">
          ¡Hola, soy <span className="text-yellow-400">Andrés Piuzzi</span>!
        </h1>

        {/* Subtítulo */}
        <p className="text-lg sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Desarrollador Full-Stack especializado en crear experiencias web
          atractivas y funcionales.
        </p>

        {/* Botenes Secciones */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-roboto font-bold">
          <button
           
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900  py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Ver Mis Proyectos
          </button>
          <button
         
            className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900  py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Contáctame
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
