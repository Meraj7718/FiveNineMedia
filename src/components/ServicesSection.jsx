"use client";

import { Link } from "react-router-dom";
import { services } from "@/data/services";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#111827]">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a comprehensive suite of marketing services to help your
            brand succeed.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const slug = service.title.toLowerCase().replace(/\s+/g, "-");
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={`/services/${slug}`}
                  className="font-semibold text-[#2563EB] hover:text-blue-700"
                >
                  Learn More &rarr;
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
