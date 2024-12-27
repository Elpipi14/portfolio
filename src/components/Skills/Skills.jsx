import ImgSkill from "./ImgSkill";

const Skills = () => {
  return (
    <>
      <section className="m-4 py-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {ImgSkill.map((skill) => (
          <img
            className="mask mask-squircle size-20"
            src={skill.icon}
            alt={skill.title}
            key={skill.id}
          />
        ))}
      </section>
    </>
  );
};

export default Skills;
