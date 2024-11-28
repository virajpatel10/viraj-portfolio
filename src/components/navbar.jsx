import logo from "../assets/VirajLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
return (
    <nav className="mb-20 flex items-center justify-between py-6"> 
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://linkedin.com/in/virajpatel10" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
        </a>
        <a href="https://github.com/virajpatel10" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
        </div>
    </nav>
    );
};
export default Navbar;