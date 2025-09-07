"use client";

export const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111827] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            {/* <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#2563EB] to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="ml-3 text-xl font-bold">MarketingPro</span>
            </div> */}
            {/* Logo */}
            <div className="md:col-span-2"></div>
            <div className="flex items-center mb-4">
            <img 
              src="/five9-logo.jpg" 
              alt="Five9 Media Logo" 
              style={{ height: "50px", width: "auto", background: "transparent" }} 
            />
            <span className="ml-3 text-xl font-bold text-white">FIVE9MEDIA</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We help businesses grow through innovative marketing strategies
              and cutting-edge digital solutions.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-white">f</span>
              </button>
              <button className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-white">t</span>
              </button>
              <button className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-white">in</span>
              </button>
              <button className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-white">ig</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  SEO Optimization
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Social Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Brand Strategy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Analytics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 MarketingPro. All rights reserved. | Built with React &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
