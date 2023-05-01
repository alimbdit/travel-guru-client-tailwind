import React from "react";
import { Link, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Button from "../../../components/Button/Button";
import BookingCard from "../../../components/BookingCard/BookingCard";

const Booking = () => {
  const { id } = useParams();
  const bookingPlace = useLoaderData();
  const placeForBook = bookingPlace.find(place => parseInt(place.id) === parseInt(id));
  
  return (
    <div className="h-screen w-full text-white">
      <div className="flex justify-between items-center w-full">
        <div className="w-full p-10">
          <div className="text white">
            <h1 className="text-7xl ">{placeForBook.name}</h1>
            <p className="my-10">{placeForBook.fullDescription}</p>
            
          </div>
        </div>
        <div className="w-full p-5 ">
          

          <div className="flex gap-5">
           
              <BookingCard></BookingCard>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
