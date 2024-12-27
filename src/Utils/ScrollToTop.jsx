import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Agrega animación suave al scroll
    });
  }, [pathname]); // Ejecuta cada vez que la ruta cambia

  return null;
};

export default ScrollToTop;