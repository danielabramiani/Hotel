import React from "react";

import roomOneFirst from "../assets/images/room1/room1-bedroom.jpg";
import roomTwoFirst from "../assets/images/room2/room2-main.jpg";
import roomThreeFirst from "../assets/images/room3/room3-main.jpg";
import roomFourFirst from "../assets/images/room4/room4-main.jpg";

const rooms = [
  {
    title: "Double Room",
    price: 199,
    capacity: "Max person 5",
    bed: "King Bed",
    services: "Wifi, TV, Bathroom",
    image: roomOneFirst
  },
  {
    title: "Premium King Room",
    price: 159,
    capacity: "Max person 5",
    bed: "King Bed",
    services: "Wifi, TV, Bathroom",
    image: roomTwoFirst
  },
  {
    title: "Deluxe Room",
    price: 198,
    capacity: "Max person 5",
    bed: "King Bed",
    services: "Wifi, TV, Bathroom",
    image: roomThreeFirst
  },
  {
    title: "Family Room",
    price: 299,
    capacity: "Max person 5",
    bed: "King Bed",
    services: "Wifi, TV, Bathroom",
    image: roomFourFirst
  }
];

const Rooms = () => {
  return (
    <div className="font-sans bg-gray-300 text-[#EDEEF0]" id="rooms">
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold text-[#8E8AA8] mb-2">Our Rooms</h1>
        <p className="text-[#636363]">Choose the perfect room for your stay</p>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-300"
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-[#141414]/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-end">
                <div className="p-5 w-full space-y-2">
                  <h3 className="text-xl font-semibold text-[#8E8AA8]">
                    {room.title}
                  </h3>

                  <p className="text-lg font-bold text-[#6E6A8A]">
                    ${room.price}
                    <span className="text-sm font-normal text-[#A7A7A7]"> / night</span>
                  </p>

                  <ul className="text-sm space-y-1">
                    <li>
                      <span className="text-[#6E6A8A] font-medium">Capacity:</span>{" "}
                      {room.capacity}
                    </li>
                    <li>
                      <span className="text-[#6E6A8A] font-medium">Bed:</span>{" "}
                      {room.bed}
                    </li>
                    <li>
                      <span className="text-[#6E6A8A] font-medium">Services:</span>{" "}
                      {room.services}
                    </li>
                  </ul>

                  <button className="mt-3 w-full border border-[#6E6A8A] text-[#6E6A8A] py-2 rounded transition hover:bg-[#6E6A8A] hover:text-[#141414]">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rooms;
