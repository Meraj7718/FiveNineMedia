"use client";

export const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce Growth",
      category: "SEO & PPC",
      description:
        "Increased online sales by 250% for a fashion retailer through strategic SEO and PPC campaigns.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      results: "+250% Sales Growth",
    },
    {
      title: "Brand Transformation",
      category: "Branding",
      description:
        "Complete brand overhaul for a tech startup, resulting in improved market positioning.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      results: "3x Brand Recognition",
    },
    {
      title: "Social Media Success",
      category: "Social Media",
      description:
        "Built engaged community of 100k+ followers for a lifestyle brand across platforms.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      results: "100k+ Followers",
    },
    {
      title: "Lead Generation",
      category: "Digital Marketing",
      description:
        "Generated 500+ qualified leads monthly for B2B software company.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      results: "500+ Monthly Leads",
    },
    {
      title: "Website Optimization",
      category: "SEO",
      description:
        "Improved organic traffic by 400% through comprehensive SEO strategy.",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop",
      results: "+400% Organic Traffic",
    },
    {
      title: "Campaign Excellence",
      category: "PPC",
      description: "Achieved 5x ROAS for multi-platform advertising campaign.",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=300&fit=crop",
      results: "5x ROAS",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses achieve remarkable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg relative group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#2563EB] bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white p-4">
                    <div className="text-2xl font-bold mb-2">
                      {project.results}
                    </div>
                    <button className="bg-white text-[#2563EB] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#2563EB] font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
