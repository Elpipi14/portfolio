import ModuleProyect from "./ModuleProyect";
import myProjects from "./devPage";

const Projects = () => {
  return (
    <section className="py-16 bg-gray-800 min-h-screen text-white">
      <h2 className="text-center text-4xl font-extrabold mb-16 m-4 py-4 text-yellow-300">
        Mis Proyectos
      </h2>
      <div className="flex flex-col items-center justify-center m-2 p-2">
        <h3 className="p-4 text-2xl font-bold mb-2">Tecnologias:</h3>
      </div>
      <ModuleProyect projects={myProjects} />
    </section>
  );
};

export default Projects;
