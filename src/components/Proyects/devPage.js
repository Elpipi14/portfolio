import SneakersShopImage from "../../assets/img/SneakersShop.png";
import VarieteShopImage from "../../assets/img/ShopVariete.png";

const myProjects = [
  {
    id: 1,
    title: "E-commerce Sneakers-Shop",
    description:
      "Tienda online completa con funcionalidades como autenticación de usuarios, autorización basada en roles, gestión dinámica del carrito de compras y generación automática de tickets. Implementación con Handlebars para el frontend y Node.js  mas en el backend, utilizando MongoDB.",
    skills: [
      "Frontend: Handlebars",
      "Backend: Node.js, Express.js",
      "Base de datos: MongoDB",
      "Autenticación: Passport.js, JWT"
    ],
    image: SneakersShopImage,
    web:"https://devcoderhouseback.onrender.com/login",
    github: "https://github.com/Elpipi14/DevCoderHouseBack",
    technologies: ["Handlebars", "Node.js", "CSS", "JavaScript", "Express", "MongoDB"]
  },
  {
    id: 2,
    title: "E-commerce Variété",
    description:
      "Tienda online enfocada en la venta de productos diversos. Implementada con React.js para el frontend, utilizando TailwindCSS para un diseño responsive y moderno. Con un carrito de compras funcional y un backend basado en Firebase para manejar productos.",
    skills: [
      "Frontend: React.js",
      "Estilos: TailwindCSS",
      "Backend: Firebase",
    ],
    image: VarieteShopImage,
    web:"https://la-variete-shop.vercel.app/",
    github: "https://github.com/Elpipi14/Front_ReactJS_CoderH",
    technologies: ["React", "Node.js", "CSS", "JavaScript", "FireBase"]
  },
];

export default myProjects;
