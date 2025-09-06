"use client";

export const ServicesSection = () => {
  const services = [
    {
      icon: "🎯",
      title: "SEO Optimization",
      description:
        "Boost your search engine rankings and drive organic traffic to your website with our proven SEO strategies.",
      features: [
        "Keyword Research",
        "On-page SEO",
        "Link Building",
        "Analytics Tracking",
      ],
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description:
        "Engage your audience across all social platforms with compelling content and strategic campaigns.",
      features: [
        "Content Creation",
        "Community Management",
        "Paid Advertising",
        "Influencer Partnerships",
      ],
    },
    {
      icon: "💡",
      title: "Brand Strategy",
      description:
        "Develop a powerful brand identity that resonates with your target audience and sets you apart.",
      features: [
        "Brand Identity",
        "Market Research",
        "Positioning Strategy",
        "Brand Guidelines",
      ],
    },
    {
      icon: "📊",
      title: "Digital Analytics",
      description:
        "Make data-driven decisions with comprehensive analytics and performance tracking solutions.",
      features: [
        "Performance Tracking",
        "ROI Analysis",
        "Custom Reports",
        "Growth Insights",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive marketing solutions tailored to your business
            needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#111827] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <span className="w-2 h-2 bg-[#2563EB] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#2563EB] text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
