
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certificates" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const NavLink = ({ item }) => (
    <ScrollLink
      to={item.id}
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      className="flex items-center px-4 py-1 text-[#ff3399] hover:scale-110 hover:shadow-[0_0_15px_#ff4ecd] rounded-lg transition-all duration-300 ease-in-out cursor-pointer"
      onClick={() => setIsMenuOpen(false)}
    >
      <span className="text-sm md:text-base">{item.label}</span>
    </ScrollLink>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0e0e10]/60 backdrop-blur-lg shadow-md border-b border-white/10"
          : "bg-[#0e0e10]/40 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Portfolio brand link */}
          <div className="flex-shrink-0 font-bold text-lg sm:text-xl text-[#ff3399] cursor-pointer">
            <ScrollLink
              to="hero"
              smooth={true}
              offset={-80}
              duration={500}
              spy={true}
              className="inline-block"
            >
              Portfolio
            </ScrollLink>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-pink-300 hover:text-white hover:bg-purple-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu-container fixed inset-0 top-16 bg-[#0e0e10]/90 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
      >
        <div className="h-full overflow-y-auto pb-6">
          <div className="px-4 pt-2 space-y-1">
            {navItems.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
