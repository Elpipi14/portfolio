import SocialPills from "../SocialPill/SocialPill";
import GithubIcons from "../../assets/logo/Github.svg";

const ModuleProyect = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 text-center">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative group overflow-hidden rounded-lg shadow-lg"
        >
          <a href={project.web} target="_blank" rel="noopener noreferrer">
            {/* Imagen del proyecto */}
            <img
              src={project.image}
              alt={project.title}
              className="m-2 p-1 w-full h-56 object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </a>

          <div className="flex flex-col items-center justify-center h-[300px] mt-4 p-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-yellow-300">
              {project.title}
            </h2>
            <p className="text-gray-400 font-bold text-center leading-5">
              {project.description}
            </p>
            {/* SocialPills con ajustes responsivos */}
            <div className="flex justify-center items-center h-14 p-2 mt-4">
              <SocialPills href={project.github}>
                <img src={GithubIcons} alt="Github" className="w-5 sm:w-6 h-5 sm:h-6" />
                <span className="text-sm sm:text-base ml-2">Github</span>
              </SocialPills>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModuleProyect;
