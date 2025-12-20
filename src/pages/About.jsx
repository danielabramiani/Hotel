import React, { useEffect, useState } from "react";
import poolImage from "../assets/images/pool.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => (prev < 12 ? prev + 1 : prev));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen px-[15%] flex items-center justify-between bg-white max-[1750px]:px-[7.5%] max-[1000px]:flex-col-reverse max-[1000px]:pt-[50px]">
      <div className="w-7/12 flex items-center relative max-[1500px]:w-6/12 max-[1000px]:w-full max-[600px]:my-16">
        <img
          src={poolImage}
          alt="pool"
          className="w-full h-auto rounded-2xl"
        />

        <div className="absolute bottom-4 left-4 bg-[#6E6A8A] text-[#EDEEF0] py-4 px-6 rounded-xl max-[600px]:py-2 max-[600px]:px-3">
          <h2 className="text-4xl max-[600px]:text-xl">{number}+</h2>
          <p className="text-sm">Years experience</p>
        </div>
      </div>

      <div className="pl-16 w-5/12 flex flex-col max-[1500px]:w-6/12 max-[1000px]:w-full max-[1000px]:items-center max-[1000px]:text-center max-[1000px]:pl-0">
        <h2 id="about" className="uppercase tracking-wide text-[#6E6A8A] font-bold text-2xl max-[600px]:text-base">
          About us
        </h2>

        <h1 className="tracking-wider text-[#141414] text-5xl max-w-[85%] py-10 max-[1200px]:text-4xl max-[600px]:text-3xl">
          We raise the bar in hotel hospitality
        </h1>

        <p className="text-[#636363] max-w-[80%] text-lg max-[600px]:text-sm">
          Experience exceptional hospitality, where personalized service and
          attention to detail create unforgettable, luxurious moments.
        </p>

        <div className="w-[80%] py-10 flex items-center justify-between max-[500px]:flex-col max-[500px]:gap-6">
          <div className="w-1/2 max-[500px]:w-full">
            <h2 className="text-2xl text-[#141414] pb-3 max-[600px]:text-lg">
              Our Vision
            </h2>
            <p className="text-[#636363] font-bold text-lg max-[600px]:text-sm">
              Our vision is to create memorable experiences through innovation,
              excellence, and unmatched hospitality.
            </p>
          </div>

          <div className="w-1/2 max-[500px]:hidden">
            <h2 className="text-2xl text-[#141414] pb-3 max-[600px]:text-lg">
              Our Mission
            </h2>
            <p className="text-[#636363] font-bold text-lg max-[600px]:text-sm">
              Our mission is to deliver exceptional service, ensuring every
              guest enjoys unforgettable experiences.
            </p>
          </div>
        </div>

        <Link
          to="/rooms"
          className="rounded-xl px-6 py-3 bg-[#6E6A8A] text-[#EDEEF0] hover:bg-[#8E8AA8] transition max-[600px]:text-sm"
        >
          Discover more
        </Link>
      </div>
    </section>
  );
};

export default About;
