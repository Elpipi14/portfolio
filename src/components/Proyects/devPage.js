import SneakersShopImage from "../../assets/img/SneakersShop.png";
import VarieteShopImage from "../../assets/img/ShopVariete.png";

const myProjects = [
  {
    id: 1,
    title: "E-commerce Sneakers-Shop",
    description:
      "Desarrollo de una tienda online completa que incluye funcionalidades como autenticación de usuarios, autorización basada en roles, gestión dinámica del carrito de compras, integración de pasarela de pagos (Mercado Pago) y generación automática de tickets. Implementación con Handlebars para el frontend y Node.js en el backend, utilizando MongoDB como base de datos.",
    skills: [
      "Frontend: Handlebars",
      "Backend: Node.js, Express.js",
      "Base de datos: MongoDB",
      "Autenticación: Passport.js, JWT",
      "Pasarela de pagos: Mercado Pago",
    ],
    image: SneakersShopImage,
    github: "https://github.com/Elpipi14/DevCoderHouseBack",
  },
  {
    id: 2,
    title: "E-commerce Variété",
    description:
      "Tienda online enfocada en la venta de productos diversos. Implementada con React.js para el frontend, utilizando TailwindCSS para un diseño responsive y moderno. La aplicación permite la gestión de usuarios, un carrito de compras funcional y un backend basado en Firebase para manejar productos.",
    skills: [
      "Frontend: React.js",
      "Estilos: TailwindCSS",
      "Backend: Firebase",
    ],
    image: VarieteShopImage,
    github: "https://github.com/Elpipi14/Front_ReactJS_CoderH",
  },
];

export default myProjects;
