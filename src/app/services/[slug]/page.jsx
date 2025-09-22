
import { useParams, Link, useNavigate } from "react-router-dom";
import { services } from "@/data/services";
import { useEffect } from "react";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = services.find(
    (s) => s.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  useEffect(() => {
    if (!service) {
      // If service is not found, redirect to home page or a 404 page
      navigate("/", { replace: true });
    }
  }, [service, navigate]);

  if (!service) {
    // Render nothing or a loading spinner while redirecting
    return null;
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-[#111827] mb-6">
            Key Features
          </h2>
          <ul className="space-y-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <svg
                  className="w-6 h-6 text-[#2563EB] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-block bg-[#2563EB] text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
