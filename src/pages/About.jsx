import React from "react";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <section className="py-5 md:py-16 bg-white overflow-hidden">
        <div className="max-w-4xl h-150 md:h-auto mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <header className="mb-6">
              <h1 className="text-2xl md:text-5xl font-bold text-black mb-1">
                Little Lemon
              </h1>
              <h2 className="text:lg md:text-3xl text-gray-700">Chicago</h2>
            </header>
            <p className="text-md md:text-xl leading-relaxed text-gray-800 max-w-md">
              Located in Chicago, Little Lemon is renowned for its delectable
              dishes made from fresh, local ingredients. Offering a cozy
              ambiance and attentive service, it's an ideal destination for
              casual dining or memorable gatherings. Enjoy delicious cuisine and
              delightful moments at Little Lemon.
            </p>
          </div>

          {/* Right Photos Section */}
          <div className="flex-1 relative h-100 w-full md:mt-0">
            <img
              src="/images/res.jpg"
              alt="restaurant interior white"
              loading="lazy"
              className="absolute bottom-0 right-0  w-55 h-55 md:w-64 md:h-80 object-cover z-20 rounded-lg shadow-md"
            />

            <img
              src="/images/res2.jpg"
              alt="restaurant interior dark"
              loading="lazy"
              className="absolute top-0 left-0  w-55 h-55 md:w-64 md:h-80 object-cover z-10 rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
