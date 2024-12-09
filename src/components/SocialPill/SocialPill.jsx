import { Children } from "react";

const SocialPills = ({href, children}) => {
  return (
    <a
      className="rounded-full border h-auto border-white/10 flex justify-center items-center gap-x-2 mx-2 py-2 px-4 my-4 transition-transform transform hover:scale-110 hover:rotate-6 sm:h-7"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
    {children}
    </a>
  );
};

export default SocialPills;
