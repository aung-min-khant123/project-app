import React from "react";
import { foods } from "../data/data.js";

function OrderOnline() {
  return (
    <section className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Order Your Favourite Food!
        </h1>

        {/* Search */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          <div className="flex items-center bg-white px-4 py-3 rounded-full shadow w-full md:w-1/2">
            <span className="mr-2 text-gray-500">🔍</span>
            <input
              type="text"
              placeholder="Greek Salad"
              className="outline-none w-full"
            />
          </div>

          <button className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">
            Search
          </button>
        </div>

        {/* Filters */}
        <div className="flex overflow-x-auto gap-4 px-4 py-2 no-scrollbar my-5 md:my-3">
          <button className="bg-black text-white px-5 py-2 rounded-full whitespace-nowrap">
            All
          </button>
          <button className="bg-gray-200 px-5 py-2 rounded-full whitespace-nowrap">
            Breakfast
          </button>
          <button className="bg-gray-200 px-5 py-2 rounded-full whitespace-nowrap">
            Lunch
          </button>
          <button className="bg-gray-200 px-5 py-2 rounded-full whitespace-nowrap">
            Dinner
          </button>
          <button className="bg-gray-200 px-5 py-2 rounded-full whitespace-nowrap">
            Shakes
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {foods.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-30 md:h-48 object-cover"
                />

                {/* Rating */}
                <span className="absolute bottom-2 right-2 bg-green-600 text-white text-sm px-2 py-1 rounded-md">
                  {item.rating} ★
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-blue-600 font-semibold">{item.name}</h3>

                <p className="text-gray-500 text-sm mb-1">{item.category}_</p>

                <p className="text-gray-800 font-medium mb-3">{item.price}</p>

                <button className="bg-yellow-400 px-4 py-1 rounded-lg text-sm font-semibold hover:bg-yellow-300">
                  Add +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OrderOnline;
