import React, { useRef, useState } from "react";

import NavigationBar from "./../../Shared/NavigationBar/NavigationBar";
import background from "../../../assets/background.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";

const Home = () => {
  const places = useLoaderData();
  
  const [place, setPlace] = useState(places[0]);
//   const navigate = useNavigate()

  
  const handlePlaceInfo = (id) => {
    const targetPlace = places.find((pl) => pl.id === id);
    setPlace(targetPlace);
    
  };



  return (
    <div className="h-screen w-full text-white">
      <div className="flex justify-between items-center w-full">
        <div className="w-3/4 p-10">
          <div className="text white">
            <h1 className="text-7xl ">{place.name}</h1>
            <p className="my-10">{place.shortDescription}</p>
            <Link to={`/home/booking/${place.id}`}><Button>Booking</Button></Link>
          </div>
        </div>
        <div className="w-full p-12 m-10">
          {/* <Swiper 
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper p-10 h-96 "
      >
        <SwiperSlide className="w-12">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        
      </Swiper> */}

          <div className="flex gap-5">
            {places.map((place) => (
              <img
                onClick={() => handlePlaceInfo(place.id)}
                className="w-40 rounded-xl cursor-pointer"
                key={place.id}
                src={place.photo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
