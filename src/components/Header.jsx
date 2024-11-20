import { useState, useEffect } from "react";
import logo from "../../public/Aurum_Logo.38df8d15.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import icon from "../../public/symbol.2d89ec5c.svg";
import { Link } from "react-router-dom";

const Header = () => {
  // State to track if the user has scrolled
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

  useEffect(() => {
    // Scroll handler for detecting when user scrolls
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolled
          ? "top-0 transform transition-all ease-in-out duration-500"
          : "top-6 transform transition-all ease-in-out duration-500"
      } sticky z-50`}
    >
      <div
        className={`px-6 bg-[#fff] shadow-xl transition-all ease-in-out duration-500 ${
          scrolled
            ? "max-w-full sm:rounded-none shadow-lg"
            : "max-w-[1180px] lg:mx-auto rounded-xl mx-6"
        }`}
      >
        <div className="flex items-center justify-between p-3 lg:px-8">
          <div className="w-24 h-16">
            <img className="w-full h-full object-cover" src={logo} alt="logo" />
          </div>
          <div className="md:flex items-center gap-10 relative hidden">
            <ul className="flex items-center gap-10 text-base font-semibold text-[#111827]">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              {/* Product & Features with Dropdown */}
              <li
                className="relative flex gap-2 items-center cursor-pointer"
                onMouseEnter={() => setShowDropdown(true)}
              >
                <span>Product & Features</span>
                <span>
                  <IoIosArrowDown color="#9CA3AF" size={20} />
                </span>
                {/* Dropdown Menu */}
                {showDropdown && (
                  <ul
                    onMouseLeave={() => setShowDropdown(false)}
                    className="absolute top-full  left-0 mt-2 bg-white border shadow-lg rounded-lg py-2 w-96"
                  >
                    <li className="px-4 py-2 hover:bg-gray-100 ">
                      <Link className="flex items-center gap-5" to={"product"}>
                        <div className="w-10 h-10">
                          <img
                            className="h-full w-full object-fit"
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div>
                          <a href="#">Aupay</a>
                          <p className="text-gray-400 text-sm font-normal">
                            Gold savings schema payment platform
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link className="flex items-center gap-5" to={"product"}>
                        <div className="w-10 h-10">
                          <img
                            className="h-full w-full object-fit"
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div>
                          <a href="#">Aupay</a>
                          <p className="text-gray-400 text-sm font-normal">
                            Gold savings schema payment platform
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link className="flex items-center gap-5" to={"product"}>
                        <div className="w-10 h-10">
                          <img
                            className="h-full w-full object-fit"
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div>
                          <a href="#">Aupay</a>
                          <p className="text-gray-400 text-sm font-normal">
                            Gold savings schema payment platform
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li><Link to={"contact"}>Contact</Link></li>
            </ul>
            <button className="flex text-sm gap-2 items-center px-3 py-2 rounded-[25px] text-[#fff] bg-gradient-to-r from-[#1E3A8A] to-[#22C55E]">
              Get a Free Demo{" "}
              <span>
                <FaArrowRightLong size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
