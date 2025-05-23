import { Link } from "react-router-dom";
import logo from "../../assets/logo/piuweb.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 border-t border-gray-700 shadow-lg ">
      <div className="flex flex-col items-center justify-center pt-6 pb-4 gap-2">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-38 m-auto h-16 mb-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </Link>
        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm">
            © Copyright 2024 By{" "}
            <span className="text-yellow-400">Developer Ap</span>. All rights
            reserved.
          </p>
          <span className="text-red-400 py-1 ">andres@piuzzidev.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
