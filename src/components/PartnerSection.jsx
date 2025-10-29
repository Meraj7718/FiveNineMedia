import React, { useState, useEffect } from "react";

export const PartnerSection = () => {
  const slides = [
    "images/logos/snapshot1.jpg",  // Updated path to match company-nameplate.jpg pattern
    "images/logos/snapshot2.jpg"   // Updated path to match company-nameplate.jpg pattern
  ];

  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = (e) => {
    const img = e.currentTarget;
    console.warn("Image failed to load:", img.src);

    // If current src is root path, try images/logos path as fallback
    if (img.src.endsWith("/snapshot1.jpg")) {
      img.src = "/images/logos/snapshot1.jpg";
      return;
    }
    if (img.src.endsWith("/snapshot2.jpg")) {
      img.src = "/images/logos/snapshot2.jpg";
      return;
    }

    // final fallback: hide and mark not loading
    img.style.display = "none";
    setIsLoading(false);
  };

  return (
    <section id="logos" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Partners
        </h1>

        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image Container with fixed aspect ratio */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-500 border-t-transparent"></div>
                </div>
              )}
              <img
                src={slides[current]}
                alt={`Partner companies snapshot ${current + 1}`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                className="w-full h-full object-contain"
                style={{ zIndex: 0 }}  // Added to match AboutSection pattern
                loading="lazy"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
            aria-label="Previous slide"
          >
            <span className="text-2xl">&lsaquo;</span>
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
            aria-label="Next slide"
          >
            <span className="text-2xl">&rsaquo;</span>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current ? "bg-amber-500 scale-110" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};