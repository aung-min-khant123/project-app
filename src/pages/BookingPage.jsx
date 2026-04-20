import React, { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../api/api";

// 🔥 Step 1: Reducer functions
const initializeTimes = () => {
  return fetchAPI(new Date());
};

const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.date));
  }
  return state;
};

function BookingPage() {
  // 🔥 Step 2: useReducer
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  // 🔥 Form state
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // 🔥 Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    const success = submitAPI(formData);

    if (success) {
      alert("Booking successful ");
    } else {
      alert("Booking failed ");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          Reserve a Table
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Date */}
          <div>
            <label className="block mb-1 font-medium">Choose Date</label>
            <input
              type="date"
              className="w-full border p-2 rounded-lg"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                dispatch({
                  type: "UPDATE_TIMES",
                  date: e.target.value,
                });
              }}
              required
            />
          </div>

          {/* Time */}
          <div>
            <label className="block mb-1 font-medium">Choose Time</label>
            <select
              className="w-full border p-2 rounded-lg"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="">Select time</option>
              {availableTimes.map((t, index) => (
                <option key={index} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Guests */}
          <div>
            <label className="block mb-1 font-medium">
              Number of Guests
            </label>
            <input
              type="number"
              min="1"
              max="10"
              className="w-full border p-2 rounded-lg"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

          {/* Occasion */}
          <div>
            <label className="block mb-1 font-medium">
              Occasion
            </label>
            <select
              className="w-full border p-2 rounded-lg"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-400 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            Make Reservation
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookingPage;