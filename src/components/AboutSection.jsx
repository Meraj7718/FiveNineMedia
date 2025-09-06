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
            <button className="bg-[#2563EB] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Meet the Team
            </button>
          </div>
          <div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-[#2563EB] to-blue-600 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">👥</div>
                  <p className="text-xl font-semibold">Our Amazing Team</p>
                  <p className="text-blue-200">Marketing Experts</p>
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
