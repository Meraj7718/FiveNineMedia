// "use client";

// import { useState, useEffect } from "react";
// // import { Header } from "../components/Header";
// // import { HeroSection } from "../components/HeroSection";
// // import { ServicesSection } from "../components/ServicesSection";
// // import { AboutSection } from "../components/AboutSection";
// // import { PortfolioSection } from "../components/PortfolioSection";
// // import { TestimonialsSection } from "../components/TestimonialsSection";
// // import { ContactSection } from "../components/ContactSection";
// // import { Footer } from "../components/Footer";
// // import { QuoteModal } from "../components/QuoteModal";

// // import { Header } from "../components/Header.jsx";
// import { Header } from "../components/Header.jsx";
// import { HeroSection } from "../components/HeroSection.jsx";
// import { ServicesSection } from "../components/ServicesSection.jsx";
// import { AboutSection } from "../components/AboutSection.jsx";
// import { PortfolioSection } from "../components/PortfolioSection.jsx";
// import { TestimonialsSection } from "../components/TestimonialsSection.jsx";
// import { ContactSection } from "../components/ContactSection.jsx";
// import { Footer } from "../components/Footer.jsx";
// import { QuoteModal } from "../components/QuoteModal.jsx";

// export default function MarketingProApp() {
//   const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -50px 0px",
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("opacity-100", "translate-y-0");
//           entry.target.classList.remove("opacity-0", "translate-y-4");
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const fadeElements = document.querySelectorAll("section");
//     fadeElements.forEach((el) => {
//       el.classList.add(
//         "opacity-0",
//         "translate-y-4",
//         "transition-all",
//         "duration-700",
//         "ease-out",
//       );
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="font-inter" style={{ scrollBehavior: "smooth" }}>
//       <Header onGetQuoteClick={() => setIsQuoteModalOpen(true)} />
//       <main>
//         <HeroSection onGetQuoteClick={() => setIsQuoteModalOpen(true)} />
//         <ServicesSection />
//         <AboutSection />
//         <PortfolioSection />
//         <TestimonialsSection />
//         <ContactSection />
//       </main>
//       <Footer />
//       <QuoteModal
//         isOpen={isQuoteModalOpen}
//         onClose={() => setIsQuoteModalOpen(false)}
//       />
//     </div>
//   );
// }


import { useState, useEffect } from "react";

import { Header } from "../components/Header.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { ServicesSection } from "../components/ServicesSection.jsx";
import { AboutSection } from "../components/AboutSection.jsx";
import { PortfolioSection } from "../components/PortfolioSection.jsx";
import { TestimonialsSection } from "../components/TestimonialsSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";
import { Footer } from "../components/Footer.jsx";
import { QuoteModal } from "../components/QuoteModal.jsx";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-4");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll("section");
    fadeElements.forEach((el) => {
      el.classList.add(
        "opacity-0",
        "translate-y-4",
        "transition-all",
        "duration-700",
        "ease-out",
      );
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  console.log("Home page loaded");

  return (
    <div className="font-inter" style={{ scrollBehavior: "smooth" }}>
      <Header onGetQuoteClick={() => setIsQuoteModalOpen(true)} />
      <main>
        <HeroSection onGetQuoteClick={() => setIsQuoteModalOpen(true)} />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
