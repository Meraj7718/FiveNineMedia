"use client";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
              About MarketingPro
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a team of passionate marketing professionals dedicated to
              helping businesses thrive in the digital landscape. With over 10
              years of combined experience, we've helped hundreds of companies
              achieve their marketing goals.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to provide innovative, data-driven marketing
              solutions that deliver measurable results and drive sustainable
              growth for our clients.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">10+</span>
                </div>
                <div>
                  <div className="font-semibold text-[#111827]">
                    Years Experience
                  </div>
                  <div className="text-gray-600 text-sm">
                    In Digital Marketing
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#111827] font-bold">500+</span>
                </div>
                <div>
                  <div className="font-semibold text-[#111827]">
                    Happy Clients
                  </div>
                  <div className="text-gray-600 text-sm">Worldwide</div>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/918779797885"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2563EB] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
            >
              Meet the Team
            </a>
          </div>
          <div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-[#2563EB] to-blue-600 rounded-2xl flex items-center justify-center">
                <img
                  src="/company-nameplate.jpg"
                  alt="Company Nameplate"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl z-0"
                  style={{ zIndex: 0 }}
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  {/* <div className="text-6xl mb-4">👥</div> */}
                  {/* <p className="text-xl font-semibold"></p>
                  <p className="text-blue-200"></p> */}
                  <div className="flex-1" />
                  <a
                    href="https://wa.me/918779797885"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow transition-colors text-base font-medium absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    style={{ zIndex: 20 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.09 1.51 5.8L0 24l6.36-1.67A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.18-3.48-8.52zM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.78 1 1-3.67-.24-.38A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F59E0B] rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-300 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
