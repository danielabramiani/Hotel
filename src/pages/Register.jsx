import React, { useState } from "react";
import roomImage from "../assets/images/hotel-second.jpg";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 800);
  };

  return (
    <section
      id="register"
      className="layer7 w-screen min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-[15%] py-10
      max-[1000px]:px-[7.5%]"
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center py-6">
        <h1 className="text-6xl max-[900px]:text-5xl max-[600px]:text-4xl text-main-dark mb-10">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-[70%] max-[1000px]:w-[80%] max-[600px]:w-full flex flex-col gap-6"
        >
          <input
            type="text"
            placeholder="Full name"
            required
            className="py-3 text-lg bg-transparent border-b-2 border-second-gray focus:outline-none focus:border-main-dark"
          />

          <input
            type="number"
            placeholder="Age"
            min="18"
            required
            className="py-3 text-lg bg-transparent border-b-2 border-second-gray focus:outline-none focus:border-main-dark"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="py-3 text-lg bg-transparent border-b-2 border-second-gray focus:outline-none focus:border-main-dark"
          />

          <input
            type="password"
            placeholder="Password"
            minLength={6}
            required
            className="py-3 text-lg bg-transparent border-b-2 border-second-gray focus:outline-none focus:border-main-dark"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-main-dark text-white text-xl py-3 rounded-lg hover:bg-second-gray transition"
          >
            {loading ? "Creating account..." : "Register"}
          </button>

          <p
            onClick={() => navigate("/login")}
            className="text-center text-base cursor-pointer text-main-dark underline"
          >
            Already have an account? Log in
          </p>
        </form>
      </div>

      <div className="w-full md:w-1/2 flex justify-center py-6">
        <img
          src={roomImage}
          alt="room"
          className="w-[85%] md:w-[90%] object-cover rounded-3xl
          h-[650px] md:h-[650px] max-[900px]:h-[450px] max-[600px]:h-[300px]"
        />
      </div>
    </section>
  );
};

export default Register;
