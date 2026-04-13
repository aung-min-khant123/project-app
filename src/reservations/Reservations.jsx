import React from "react";
import Footer from "../components/Footer";

function Reservations() {
  return (
    <>
      <section className="max-w-4xl">
        <div className="flex justify-between items-center">
          <div className="">
            <form>
              <label for="indoor">Indoor Seating</label>
              <input type="radio" id="indoor" name="indoor-outdoor" value="indoor"/>
            </form>
          </div>
          <div className="">
            <form></form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Reservations;
