import React, { useEffect, useState } from "react";
import image0 from "../assets/images/hotel-second.jpg";
import image1 from "../assets/images/hotel-main.jpg";
import image2 from "../assets/images/room-main.jpg";
import image3 from "../assets/images/room-second.jpg";
import { Link } from "react-router-dom";

const images = [image2, image1, image3, image0];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex flex-col bg-gray-300 text-[#141414]" >
      <section className="w-full px-[15%] py-10 flex items-center justify-between max-[1000px]:px-[7.5%] max-[500px]:block">
        <div className="w-1/2 flex flex-col max-[500px]:items-center max-[500px]:w-full max-[500px]:pb-16 max-[500px]:pt-[50px]">
          <h2 className="text-2xl max-[800px]:text-lg text-[#6E6A8A]" id="home">
            DaniHotel
          </h2>

          <h1 className="font-bold text-[#141414] text-7xl max-w-[75%] pt-10 pb-10 max-[1500px]:text-5xl max-[1200px]:text-4xl max-[800px]:text-2xl max-[500px]:text-center max-[500px]:text-4xl">
            Welcome to the oasis of luxury & tranquility
          </h1>

          <p className="font-bold text-[#636363] max-w-[75%] pb-5 max-[500px]:text-center">
            Welcome to DaniHotel, an elegant Hotel in the tropics of Batumi where you can rest from the world
          </p>

          <Link
            to="/about"
            className="inline-block rounded-xl px-6 py-3 bg-[#6E6A8A] text-[#EDEEF0] hover:bg-[#8E8AA8] transition"
          >
            Discover more
          </Link>
        </div>

        <div className="relative w-[50%] h-[600px] overflow-hidden rounded-3xl max-[500px]:w-full max-[500px]:h-[400px]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </section>
    </header>
  );
};

export default Home;
