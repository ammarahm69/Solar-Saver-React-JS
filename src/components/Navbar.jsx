import "../App.css";
import Logo from "../assets/lgo.png";

function Navbar() {
  return (
    <div className="h-24 navbar flex flex-col md:flex-row items-center justify-between px-4 md:px-8 navbar">
      {/* Logo */}
      <div className="flex items-center mb-4 md:mb-0">
        <img src={Logo} alt="Logo" width={140} />
      </div>
      {/* Links */}
      <div className="text-white space-y-2 md:space-y-0 md:space-x-10 tracking-wider text-center md:text-left">
        <a
          href="#price"
          className="block md:inline-block hover:text-orange-500 transition-colors duration-300"
        >
          Price
        </a>
        <a
          href="#about"
          className="block md:inline-block hover:text-orange-500 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#tools"
          className="block md:inline-block hover:text-orange-500 transition-colors duration-300"
        >
          Tools
        </a>
        <a
          href="#how-it-works"
          className="block md:inline-block hover:text-orange-500 transition-colors duration-300"
        >
          How it works
        </a>
        <a
          href="#testimonials"
          className="block md:inline-block hover:text-orange-500 transition-colors duration-300"
        >
          Testimonials
        </a>
        <a
          href="#faq"
          className="block md:inline-block hover:text-orange-500 transition-colors duration-300"
        >
          FAQ
        </a>
      </div>

      {/* Button */}
      <div className="mt-4 md:mt-0">
        <button className="button  text-white py-2 px-4 rounded-md">
          Calculate Solar
        </button>
      </div>
    </div>
  );
}

export default Navbar;
