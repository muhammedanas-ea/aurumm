import { useState, useEffect } from "react";
import logo from "../../public/Aurum_Logo.38df8d15.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa"; // Added FaTimes for close button
import { FaArrowRightLong } from "react-icons/fa6";
import icon from "../../public/symbol.2d89ec5c.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setShowDropdown(false); // Close dropdown if it's open
  };

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

          {/* Desktop Navbar */}
          <div className="md:flex items-center gap-10 relative hidden">
            <ul className="flex items-center gap-10 text-base font-semibold text-[#111827]">
              <li><Link to={"/"}>Home</Link></li>
              <li
                className="relative flex gap-2 items-center cursor-pointer"
                onMouseEnter={() => setShowDropdown(true)}
              >
                <span>Product & Features</span>
                <span>
                  <IoIosArrowDown color="#9CA3AF" size={20} />
                </span>
                {showDropdown && (
                  <ul
                    onMouseLeave={() => setShowDropdown(false)}
                    className="absolute top-full left-0 mt-2 bg-white border shadow-lg rounded-lg py-2 w-96"
                  >
                    {/* Dropdown Items */}
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link className="flex items-center gap-5" to={"product"}>
                        <div className="w-10 h-10">
                          <img className="h-full w-full object-fit" src={icon} alt="" />
                        </div>
                        <div>
                          <a href="#">Aupay</a>
                          <p className="text-gray-400 text-sm font-normal">
                            Gold savings schema payment platform
                          </p>
                        </div>
                      </Link>
                    </li>
                    {/* Repeat for other dropdown items */}
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

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar (Toggled by state) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute left-0 w-full top-0 p-6 z-40 h-screen flex flex-col">
          {/* Logo in Mobile Navbar */}
          <div className="flex justify-between items-center">
            <div className="w-24 h-16">
              <img className="w-full h-full object-cover" src={logo} alt="logo" />
            </div>
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl text-gray-700"
            >
              <FaTimes />
            </button>
          </div>

          <ul className="flex flex-col items-start text-base font-semibold text-[#111827] mt-6">
            <li onClick={closeMobileMenu} className="py-2 border-b w-full">
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className="relative py-2 border-b w-full"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="flex items-center justify-between w-full">
                Product & Features
                <IoIosArrowDown color="#9CA3AF" size={20} />
              </span>
              {showDropdown && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li onClick={closeMobileMenu}>
                    <Link className="flex items-center gap-2" to={"product"}>
                      Aupay
                    </Link>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <Link className="flex items-center gap-2" to={"product"}>
                      Aupay
                    </Link>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <Link className="flex items-center gap-2" to={"product"}>
                      Aupay
                    </Link>
                  </li>
                  {/* Repeat for other dropdown items */}
                </ul>
              )}
            </li>
            <li onClick={closeMobileMenu} className="py-2 border-b w-full">
              <Link to={"contact"}>Contact</Link>
            </li>
            <li className="py-2 w-full">
              <button className="flex text-sm gap-2 items-center px-3 py-2 rounded-[25px] text-[#fff] bg-gradient-to-r from-[#1E3A8A] to-[#22C55E]">
                Get a Free Demo{" "}
                <span>
                  <FaArrowRightLong size={14} />
                </span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
