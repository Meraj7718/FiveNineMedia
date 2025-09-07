// "use client";

// import { useState, useEffect } from "react";

// export const Header = ({ onGetQuoteClick }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//     setIsMenuOpen(false);
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//   <img 
//     src="/five9-logo.png" 
//     alt="Five9 Media Logo" 
//     className="h-16 w-auto object-contain"
//   />
// </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <button
//               onClick={() => scrollToSection("home")}
//               className="text-gray-700 hover:text-[#2563EB] transition-colors"
//             >
//               Home
//             </button>
//             <button
//               onClick={() => scrollToSection("services")}
//               className="text-gray-700 hover:text-[#2563EB] transition-colors"
//             >
//               Services
//             </button>
//             <button
//               onClick={() => scrollToSection("about")}
//               className="text-gray-700 hover:text-[#2563EB] transition-colors"
//             >
//               About
//             </button>
//             <button
//               onClick={() => scrollToSection("portfolio")}
//               className="text-gray-700 hover:text-[#2563EB] transition-colors"
//             >
//               Portfolio
//             </button>
//             <button
//               onClick={() => scrollToSection("testimonials")}
//               className="text-gray-700 hover:text-[#2563EB] transition-colors"
//             >
//               Testimonials
//             </button>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="text-gray-700 hover:text-[#2563EB] transition-colors"
//             >
//               Contact
//             </button>
//           </nav>

//           {/* CTA Button */}
//           <div className="hidden md:block">
//             <button
//               onClick={onGetQuoteClick}
//               className="bg-[#2563EB] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
//             >
//               Get a Quote
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2"
//           >
//             <div className="w-6 h-6 flex flex-col justify-center items-center">
//               <span
//                 className={`w-full h-0.5 bg-[#111827] block transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`}
//               ></span>
//               <span
//                 className={`w-full h-0.5 bg-[#111827] block mt-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
//               ></span>
//               <span
//                 className={`w-full h-0.5 bg-[#111827] block mt-1 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}
//               ></span>
//             </div>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <button
//                 onClick={() => scrollToSection("home")}
//                 className="block w-full text-left px-3 py-2 text-gray-700"
//               >
//                 Home
//               </button>
//               <button
//                 onClick={() => scrollToSection("services")}
//                 className="block w-full text-left px-3 py-2 text-gray-700"
//               >
//                 Services
//               </button>
//               <button
//                 onClick={() => scrollToSection("about")}
//                 className="block w-full text-left px-3 py-2 text-gray-700"
//               >
//                 About
//               </button>
//               <button
//                 onClick={() => scrollToSection("portfolio")}
//                 className="block w-full text-left px-3 py-2 text-gray-700"
//               >
//                 Portfolio
//               </button>
//               <button
//                 onClick={() => scrollToSection("testimonials")}
//                 className="block w-full text-left px-3 py-2 text-gray-700"
//               >
//                 Testimonials
//               </button>
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="block w-full text-left px-3 py-2 text-gray-700"
//               >
//                 Contact
//               </button>
//               <button
//                 onClick={onGetQuoteClick}
//                 className="block w-full text-left px-3 py-2 text-[#2563EB] font-medium"
//               >
//                 Get a Quote
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

"use client";

import { useState, useEffect } from "react";

export const Header = ({ onGetQuoteClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg" : "bg-black/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/five9-logo.jpg" 
              alt="Five9 Media Logo" 
              style={{ height: "50px", width: "auto", background: "transparent" }} 
            />
            <span className="ml-3 text-xl font-bold text-white">FIVE9MEDIA</span>
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-200 hover:text-[#60A5FA] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-200 hover:text-[#60A5FA] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-200 hover:text-[#60A5FA] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-200 hover:text-[#60A5FA] transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-200 hover:text-[#60A5FA] transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-200 hover:text-[#60A5FA] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={onGetQuoteClick}
              className="bg-[#2563EB] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`w-full h-0.5 bg-white block transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white block mt-1 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white block mt-1 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-gray-200 hover:text-[#60A5FA]"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-gray-200 hover:text-[#60A5FA]"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-gray-200 hover:text-[#60A5FA]"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left px-3 py-2 text-gray-200 hover:text-[#60A5FA]"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-3 py-2 text-gray-200 hover:text-[#60A5FA]"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-gray-200 hover:text-[#60A5FA]"
              >
                Contact
              </button>
              <button
                onClick={onGetQuoteClick}
                className="block w-full text-left px-3 py-2 text-[#60A5FA] font-medium"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
