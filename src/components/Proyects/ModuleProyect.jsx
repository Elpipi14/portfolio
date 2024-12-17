import { motion } from "framer-motion";

const ModuleProyect = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative group overflow-hidden rounded-lg shadow-lg"
        >
          {/* Imagen del proyecto */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 text-center">{project.description}</p>

            {/* Skills animadas */}
            <div className="mt-4 flex gap-4">
              {project.skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="text-sm font-bold px-3 py-1 bg-yellow-400 text-black rounded-full shadow-lg"
                  initial={{ y: 50, opacity: 0 }}
                  whileHover={{ y: -10, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModuleProyect;
