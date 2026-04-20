import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { testonials } from "../data/data";
import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

function Main() {

  const [loading , setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {setLoading(false)}, 1000)
  }, [])
  
  const specials = [
    {
      title: "Greek salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: "/images/greek salad.jpg",
    },
    {
      title: "Bruchetta",
      price: "$ 5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: "/images/bruchetta.svg",
    },
    {
      title: "Lemon Dessert",
      price: "$ 5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: "/images/lemon dessert.jpg",
    },
  ];
  return (
    <>
      <section className="bg-[#495E57] text-white py-5 md:py-10 relative">
        <div className="max-w-4xl max-h-96 mx-auto  flex  md:flex-row  items-center justify-center md:justify-between px-3">
          {/* Left Content */}
          <div className="max-w-xs ">
            <h1 className="text-5xl font-bold text-yellow-400">Little Lemon</h1> 
            <h2 className="text-2xl mb-4">Chicago</h2>

            <p className="text-gray-200 text-xl mb-2 hidden md:block">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>

            <div className="md:hidden flex gap-1.5">
              <p className="flex-1 text-gray-200 text-sm mb-2">
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <img
              src="/images/restauranfood.jpg"
              alt="Food"
              loading="lazy"
              decoding="async"
              className="flex-1 md:hiddeen w-40 h-40 object-cover rounded-xl shadow-lg"
            />
            </div>

            <button className="bg-yellow-400 text-black px-6 py-3 font-semibold hover:bg-yellow-300 transition rounded-xl mt-3 md:mt-0">
              Reserve a Table
            </button>
          </div>

          {/* Right Image */}
          <div className="mt-8 lg:mt-0 lg:absolute right-93 top-10">
            <img
              src="/images/restauranfood.jpg"
              alt="Food"
              loading="lazy"
              decoding="async"
              className="hidden md:block lg:block w-80 h-90 object-cover rounded-xl shadow-lg hover:"
            />
          </div>
        </div>
      </section>

      {/* Special Menu section */}
      <section className="py-5 md:py-20 my-0 md:my-7 bg-white">
        <div className="max-w-4xl mx-auto ">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-5 md:mb-10">
            <h2 className="text-md md:text-4xl font-bold text-black">
              This weeks specials!
            </h2>
            <button className="bg-yellow-400 text-black px-4 md:px-8 py-3 font-bold rounded-2xl hover:bg-yellow-300 transition">
              Online Menu
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specials.map((item, index) => (
              <div
                key={index}
                className="bg-[#EDEFEE] rounded-t-2xl overflow-hidden flex flex-col shadow-sm"
              >
                {loading ? <Skeleton></Skeleton> : <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover shadow-xs shadow-black"
                /> }
                
                <div className="p-6 flex flex-col grow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-orange-400 font-bold">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 grow">{item.description}</p>
                  <button className="flex items-center gap-3 font-bold text-black hover:underline">
                    Order a delivery
                    <FontAwesomeIcon icon={faBicycle} />
                  </button> 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-[#EDEFEE]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {testonials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow text-center"
              >
                <p className="mb-2">{item.rating}</p>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                />

                <h3 className="font-bold">{item.name}</h3>

                <p className="text-gray-600 text-sm mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-5 md:py-16 bg-white overflow-hidden">
        <div className="max-w-4xl h-150 md:h-auto mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
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
    </>
  );
}

export default Main;
