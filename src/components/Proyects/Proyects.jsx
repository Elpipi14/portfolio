import ModuleProyect from "./ModuleProyect";
import myProjects from "./proyects.js";

const Projects = () => {
   
  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-center text-4xl font-extrabold mb-8 text-yellow-300">
        Mis Proyectos
      </h2>
      <ModuleProyect projects={myProjects} />
    </section>
  );
};

export default Projects;
