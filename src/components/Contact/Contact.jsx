import SocialPills from "../SocialPill/SocialPill";

import LinkedInIcon from "../../assets/logo/LinkedIn.svg";
import GithubIcons from "../../assets/logo/Github.svg";

const Contact = () => {
  return (
    <div className="px-2 py-8 my-8 sm:py-4 lg:px-4">
      <div className="mx-auto max-w-screen-xl px-4 py-4 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl my-5 p-2 font-extrabold sm:text-5xl text-yellow-300">
          Contacto:
        </h2>
        
        <p className="text-xl text-gray-300 drop-shadow-xl">
          Estoy en búsqueda de nuevas oportunidades. Si tienes un proyecto
          emocionante o una posición disponible, ¡me encantaría ser parte de tu
          equipo! 🚀
        </p>

        {/* SocilaPills */}
        <div className="flex  justify-center m-2 p-2">
          <SocialPills href="https://www.linkedin.com/in/andres-piuzzi/">
            <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5" />
            LinkedIn
          </SocialPills>
          <SocialPills href="https://github.com/Elpipi14">
            <img src={GithubIcons} alt="Github" className="w-5 h-5 " />
            Github
          </SocialPills>
        </div>
        </div>
      </div>

      <form action="#" method="POST" className="mx-auto my-4 py-4 max-w-xl sm:mt-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-white"
            >
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                placeholder="Cosme"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-white"
            >
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                placeholder="Fulanito"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="tucorreo@ejemplo.com"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-white"
            >
              Mensaje
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Escribe tu consulta, idea o propuesta..."
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-gray-900 px-5 py-2.5 text-white hover:bg-gray-700 cursor-pointer text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
