import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center text-gray-700 gap-2 font-bold p-2">
      <span>Developed By Thahir</span>
      <a href="https://github.com/thahirsprojects" target="_blank">
        <button className="bg-gray-300 flex justify-center items-center gap-2 px-2 rounded-lg hover:shadow-lg transition">
          <FaGithub />
          GitHub
        </button>
      </a>
    </div>
  );
};

export default Footer;
