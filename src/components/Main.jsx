import React from "react";

function Main() {
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
      <section className="bg-[#495E57] text-white py-8 relative">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="max-w-xs ">
            <h1 className="text-5xl font-bold text-yellow-400">Little Lemon</h1>
            <h2 className="text-2xl mb-4">Chicago</h2>

            <p className="text-gray-200 text-xl mb-2 ">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>

            <button className="bg-yellow-400 text-black px-6 py-3 font-semibold hover:bg-yellow-300 transition rounded-xl">
              Reserve a Table
            </button>
          </div>

          {/* Right Image */}
          <div className="mt-8 md:mt-0 md:absolute right-93 top-10">
            <img
              src="/images/restauranfood.jpg"
              alt="Food"
              className="w-80 h-90 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="py-20 my-7 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold text-black">
              This weeks specials!
            </h2>
            <button className="bg-yellow-400 text-black px-8 py-3 font-bold rounded-2xl hover:bg-yellow-300 transition">
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
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col grow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-orange-400 font-bold">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 grow">{item.description}</p>
                  <button className="flex items-center font-bold text-black hover:underline">
                    Order a delivery
                    <span className="ml-2">🚴</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div>
            
        </div>
      </section>
    </>
  );
}

export default Main;
