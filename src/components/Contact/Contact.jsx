import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";

import SocialPills from "../SocialPill/SocialPill";
import LinkedInIcon from "../../assets/logo/LinkedIn.svg";
import GithubIcons from "../../assets/logo/Github.svg";

const apiUrl = process.env.REACT_APP_BACKEND_URL;
const captchaKey = process.env.REACT_APP_SITE_KEY;

console.log("API URL:", apiUrl);

const Contact = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const captchaRef = useRef(null);

  const handleCaptchaChange = (value) => {
    console.log("Captcha token:", value);
    setCaptchaValue(value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Por favor verifica el captcha antes de enviar.");
      return;
    }

    // Acá podés enviar formData y captchaValue al backend
    const payload = {
      ...formData,
      token: captchaValue,
    };

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        alert("¡Mensaje enviado con éxito!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        captchaRef.current.reset(); // Limpia el captcha visualmente
        setCaptchaValue(null);
      } else {
        alert("Hubo un error al enviar tu mensaje.");
      }
    } catch (error) {
      console.error("Error enviando mensaje:", error);
      alert("Error en el servidor.");
    }
  };

  return (
    <div className="px-2 py-8 my-2 sm:py-4 lg:px-4">
      <div className="mx-auto max-w-screen-xl px-4 py-2 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl my-5 p-2 font-extrabold sm:text-5xl text-yellow-300">
            Contacto:
          </h2>

          <p className="text-xl text-gray-300 drop-shadow-xl">
            Estoy en búsqueda de nuevas oportunidades. Si tienes un proyecto
            emocionante o una posición disponible, ¡me encantaría ser parte de
            tu equipo! 🚀
          </p>

          <div className="flex justify-center m-2 p-2">
            <SocialPills href="https://www.linkedin.com/in/andres-piuzzi/">
              <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5" />
              LinkedIn
            </SocialPills>
            <SocialPills href="https://github.com/Elpipi14">
              <img src={GithubIcons} alt="Github" className="w-5 h-5" />
              Github
            </SocialPills>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto my-4 py-4 max-w-xl sm:mt-4"
      >
        <h2 className="text-3xl my-4 p-2 text-center font-extrabold sm:text-left sm:text-5xl text-yellow-300">
          Contáctame ✍️:
        </h2>

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
                name="firstName"
                type="text"
                placeholder="Cosme"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
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
                name="lastName"
                type="text"
                placeholder="Fulanito"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
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
                placeholder="tucorreo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
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
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center">
          <ReCAPTCHA
            ref={captchaRef}
            className="m-4"
            sitekey={captchaKey} // Reemplaza con tu clave de sitio
            onChange={handleCaptchaChange}
          />

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
