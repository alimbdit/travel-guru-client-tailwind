import React from "react";
import { Link } from "react-router-dom";

const BookingCard = () => {
  return (
    <div>
      <div className="mx-auto w-full text-gray-900 bg-white px-12 py-9 border border-gray-400 rounded-md mb-6">
        <form action="">
          <label className="font-medium text-gray-400" htmlFor="origin">
            {" "}
            Origin
          </label>
          <input
            className="placeholder:text-gray-900 placeholder:font-bold bg-gray-200 rounded-lg font-bold p-5 focus:border-blue-500 mt-2  mb-3 w-full"
            type="text"
            name="origin"
            placeholder="Origin"
            required
          />
          <br />
          <label className="font-medium text-gray-400" htmlFor="destination">
            {" "}
            Destination
          </label>
          <input
            className="placeholder:text-gray-900 placeholder:font-bold bg-gray-200 rounded-lg font-bold p-5 focus:border-blue-500 mt-2  mb-3 w-full"
            type="text"
            name="destination"
            placeholder="Destination"
            required
          />
          <br />
          <div className="flex gap-4">
            <div>
              <label
                className="font-medium text-gray-400"
                htmlFor="from"
              >
                {" "}
                From
              </label>
              <input
                className="placeholder:text-gray-900 placeholder:font-bold bg-gray-200 rounded-lg font-bold p-5 focus:border-blue-500 mt-2  mb-3 w-full"
                type="date"
                name="from"
                placeholder="From"
                required
              />
            </div>
            <div>
              <label
                className="font-medium text-gray-400"
                htmlFor="to"
              >
                {" "}
                To
              </label>
              <input
                className="placeholder:text-gray-900 placeholder:font-bold bg-gray-200 rounded-lg font-bold p-5 focus:border-blue-500 mt-2  mb-3 w-full"
                type="date"
                name="to"
                placeholder="To"
                required
              />
            </div>
          </div>
       

          <input
            className="btn btn-warning mt-12 w-full"
            type="submit"
            value="Start Booking"
          ></input>

          
        </form>
      </div>
    </div>
  );
};

export default BookingCard;
